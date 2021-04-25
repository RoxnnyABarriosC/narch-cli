import {Command} from "commander";
import {snakeCase} from "snake-case";
import {pascalCase} from "pascal-case"
import {plural,singular} from "pluralize";
import _ from "lodash";
import path from "path";
import fs from "fs";
import HandlerFactory from "../templates/handler/handler.factory";
import DomainFactory from "../templates/domain/domain.factory";
import InfrastructureFactory from "../templates/infrastructure/infrastructure.factory";
import InterfaceAdaptersFactory from "../templates/interfaceAdapters/interfaceAdapters.factory";
import PresentationFactory from "../templates/presentation/presentation.factory";

const addModule = new Command('module');

export declare interface IModuleOptions {
    pluralName: string,
    tableName: string,
}

export declare interface IModuleConfig  extends IModuleOptions {
    moduleName: string,
    dirName: string,
}

addModule
    .alias('md')
    .arguments('<moduleName>')
    .version('0.0.1')
    .description('add module to project')
    .option('-pln, --plural-name <pluralName>', 'define the plural name to use')
    .option('-tbn, --table-name <tableName>', 'define the table name to use')
    .action(async ( moduleName: string, opts: IModuleOptions) =>
    {
        const singularName: string = validateModuleName(moduleName);
        const pluralName: string = validateModuleName(singularName,true);

        const config: IModuleConfig = {
            moduleName: singularName,
            pluralName,
            tableName: snakeCase(pluralName),
            dirName: path.join(`${process.cwd()}/src/`, singularName)
        }

        if (!_.isUndefined(opts.pluralName)) config.pluralName = validateModuleName(opts.pluralName,true);

        if (!_.isUndefined(opts.tableName)) config.tableName = opts.tableName;
        
        if (!fs.existsSync(config.dirName))
        {
            fs.mkdirSync(config.dirName);

            console.info(`------ Creating "${config.moduleName}" module ------\n`);

            const handlerFactory = new HandlerFactory(config);
            await handlerFactory.handle();

            const domainFactory = new DomainFactory(config);
            await domainFactory.handle();

            const infrastructureFactory = new InfrastructureFactory(config);
            await infrastructureFactory.handle();

            const interfaceAdaptersFactory = new InterfaceAdaptersFactory(config);
            await interfaceAdaptersFactory.handle();

            const presentationFactory = new PresentationFactory(config);
            await presentationFactory.handle();

            console.info(`------------- Module created successfully -------------\n`);
        }
        else
        {
            console.info(`------------- "${config.moduleName}" module is already created -------------\n`);
        }

    });


const validateModuleName = (moduleName: string, sg: boolean = false): string => {
    return snakeCase(moduleName).split('_').map( (value, index, array) => {
        if (sg)
        {
            if (array.length > 1)
            {
                if (index === 0)
                {
                    return pascalCase(singular(value));
                }
                else
                {
                    if ((index + 1) === array.length)
                    {
                        return pascalCase(plural(value));
                    }

                    else
                    {
                        return pascalCase(singular(value));
                    }
                }

            }
            else
            {
                return pascalCase(plural(value));
            }
        }

        else
        {
            return pascalCase(singular(value));
        }
    }).join('');

}

export default addModule;

import {IModuleConfig} from "../../commands/AddModule.command";
import fs from "fs";
import path from "path";
import _ from "lodash";
import chalk from "chalk";
import {IRegExp} from "../../interfaces";

export default class DomainFactory
{
    private regExp:IRegExp;
    private filename: string;
    private config: IModuleConfig;
    private template: string;
    private dirName: string;
    private dirNameUseCase: string;

    constructor(config: IModuleConfig)
    {
        this.config = config
        this.dirName = `${config.dirName}/Domain`;
        this.dirNameUseCase = `${this.dirName}/UseCases`;
        this.regExp = {
            SINGULAR_NAME: /{SINGULAR_NAME}/gi,
            PLURAL_NAME: /{PLURAL_NAME}/gi,
            PLURAL_NAME_UPPER: /{PLURAL_NAME_UPPER}/gi,
            SINGULAR_NAME_CAMEL: /{SINGULAR_NAME_CAMEL}/gi,
            PLURAL_NAME_CAMEL: /{PLURAL_NAME_CAMEL}/gi,
        }

        if (!fs.existsSync(this.dirName))
        {
            fs.mkdirSync(this.dirName);
        }

        if (!fs.existsSync(`${this.dirNameUseCase}`))
        {
            fs.mkdirSync(`${this.dirNameUseCase}`);
        }
    }

    async handle(): Promise<void>
    {
        await this.createEntity();
        await this.createGetUseCase();
        await this.createListUseCase();
        await this.createRemoveUseCase();
        await this.createSaveUseCase();
        await this.createUpdateUseCase();
    }

    private async createEntity(): Promise<void>
    {
        this.filename = `${this.config.moduleName}.entity.ts`;

        this.template = fs.readFileSync(path.join(__dirname,'./files/__name__.entity.ts'), 'utf8');

        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))

        console.info(`- Rute: ${chalk.blue.bold(`${this.dirName}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.dirName}/${this.filename}`, this.template);
    }

    private async createGetUseCase(): Promise<void>
    {
        this.filename = `Get${this.config.moduleName}.useCase.ts`;

        this.template = fs.readFileSync(path.join(__dirname,'./files/Get__name__.useCase.ts'), 'utf8');

        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))

        console.info(`- Rute: ${chalk.blue.bold(`${this.dirNameUseCase}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.dirNameUseCase}/${this.filename}`, this.template);
    }

    private async createListUseCase(): Promise<void>
    {
        this.filename = `List${this.config.pluralName}.useCase.ts`;

        this.template = fs.readFileSync(path.join(__dirname,'./files/List__name__.useCase.ts'), 'utf8');

        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))

        console.info(`- Rute: ${chalk.blue.bold(`${this.dirNameUseCase}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.dirNameUseCase}/${this.filename}`, this.template);
    }

    private async createRemoveUseCase(): Promise<void>
    {
        this.filename = `Remove${this.config.moduleName}.useCase.ts`;

        this.template = fs.readFileSync(path.join(__dirname,'./files/Remove__name__.useCase.ts'), 'utf8');

        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))

        console.info(`- Rute: ${chalk.blue.bold(`${this.dirNameUseCase}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.dirNameUseCase}/${this.filename}`, this.template);
    }

    private async createSaveUseCase(): Promise<void>
    {
        this.filename = `Save${this.config.moduleName}.useCase.ts`;

        this.template = fs.readFileSync(path.join(__dirname,'./files/Save__name__.useCase.ts'), 'utf8');

        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))

        console.info(`- Rute: ${chalk.blue.bold(`${this.dirNameUseCase}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.dirNameUseCase}/${this.filename}`, this.template);
    }

    private async createUpdateUseCase(): Promise<void>
    {
        this.filename = `Update${this.config.moduleName}.useCase.ts`;

        this.template = fs.readFileSync(path.join(__dirname,'./files/Update__name__.useCase.ts'), 'utf8');

        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))

        console.info(`- Rute: ${chalk.blue.bold(`${this.dirNameUseCase}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.dirNameUseCase}/${this.filename}`, this.template);
    }
};
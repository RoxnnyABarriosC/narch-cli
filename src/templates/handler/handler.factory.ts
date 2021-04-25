import {IModuleConfig} from "../../commands/AddModule.command";
import fs from "fs";
import path from "path";
import _ from "lodash";
import chalk from "chalk";
import {IRegExp} from "../../interfaces";

export default class HandlerFactory
{
    private regExp:IRegExp;
    private readonly filename: string;
    private config: IModuleConfig;
    private template: string;

    constructor(config: IModuleConfig)
    {
        this.config = config
        this.filename = `${this.config.moduleName}.handler.ts`
        this.regExp = {
            SINGULAR_NAME: /{SINGULAR_NAME}/gi,
            PLURAL_NAME: /{PLURAL_NAME}/gi,
            PLURAL_NAME_UPPER: /{PLURAL_NAME_UPPER}/gi,
            SINGULAR_NAME_CAMEL: /{SINGULAR_NAME_CAMEL}/gi,
            PLURAL_NAME_CAMEL: /{PLURAL_NAME_CAMEL}/gi,
        }

        this.template = fs.readFileSync(path.join(__dirname,'./files/__name__.handler.ts'), 'utf8');
    }

    async handle(): Promise<void>
    {
        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))

        console.info(`- Rute: ${chalk.blue.bold(`${this.config.dirName}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.config.dirName}/${this.filename}`, this.template);
    }
};
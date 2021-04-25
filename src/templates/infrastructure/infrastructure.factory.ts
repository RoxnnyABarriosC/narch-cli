import {IModuleConfig} from "../../commands/AddModule.command";
import fs from "fs";
import path from "path";
import _ from "lodash";
import chalk from "chalk";
import {IRegExp} from "../../interfaces";

export default class InfrastructureFactory
{
    private regExp:IRegExp;
    private filename: string;
    private config: IModuleConfig;
    private template: string;
    private dirName: string;

    constructor(config: IModuleConfig)
    {
        this.config = config
        this.dirName = `${config.dirName}/Infrastructure`;
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
    }

    async handle(): Promise<void>
    {
        await this.createSchema();
        await this.createRepository();
    }

    private async createSchema(): Promise<void>
    {
        this.filename = `${this.config.moduleName}.sql.schema.ts`;

        this.template = fs.readFileSync(path.join(__dirname,'./files/__name__.sql.schema.ts'), 'utf8');

        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))
            .replace(/{TABLE_NAME}/gi, this.config.tableName)

        console.info(`- Rute: ${chalk.blue.bold(`${this.dirName}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.dirName}/${this.filename}`, this.template);
    }

    private async createRepository(): Promise<void>
    {
        this.filename = `${this.config.moduleName}.sql.repository.ts`;

        this.template = fs.readFileSync(path.join(__dirname,'./files/__name__.sql.repository.ts'), 'utf8');

        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))

        console.info(`- Rute: ${chalk.blue.bold(`${this.dirName}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.dirName}/${this.filename}`, this.template);
    }
};
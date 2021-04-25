import {IModuleConfig} from "../../commands/AddModule.command";
import fs from "fs";
import path from "path";
import _ from "lodash";
import chalk from "chalk";
import {IRegExp} from "../../interfaces";

export default class InterfaceAdaptersFactory
{
    private regExp:IRegExp;
    private filename: string;
    private config: IModuleConfig;
    private template: string;
    private dirName: string;
    private dirNamePayloads: string;

    constructor(config: IModuleConfig)
    {
        this.config = config
        this.dirName = `${config.dirName}/InterfaceAdapters`;
        this.dirNamePayloads = `${this.dirName}/Payloads`;
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

        if (!fs.existsSync(this.dirNamePayloads))
        {
            fs.mkdirSync(this.dirNamePayloads);
        }
    }

    async handle(): Promise<void>
    {
        await this.createIDomain();
        await this.createIRepository();
        await this.createSavePayload();
        await this.createUpdatePayload();
    }

    private async createIDomain(): Promise<void>
    {
        this.filename = `I${this.config.moduleName}.domain.ts`;

        this.template = fs.readFileSync(path.join(__dirname.replace('dist','src'),'./files/I__name__.domain.ts'), 'utf8');

        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))

        console.info(`- Rute: ${chalk.blue.bold(`${this.dirName}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.dirName}/${this.filename}`, this.template);
    }

    private async createIRepository(): Promise<void>
    {
        this.filename = `${this.config.moduleName}.sql.repository.ts`;

        this.template = fs.readFileSync(path.join(__dirname.replace('dist','src'),'./files/I__name__.repository.ts'), 'utf8');

        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))

        console.info(`- Rute: ${chalk.blue.bold(`${this.dirName}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.dirName}/${this.filename}`, this.template);
    }

    private async createSavePayload(): Promise<void>
    {
        this.filename = `Save${this.config.moduleName}.payload.ts`;

        this.template = fs.readFileSync(path.join(__dirname.replace('dist','src'),'./files/Save__name__.payload.ts'), 'utf8');

        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))

        console.info(`- Rute: ${chalk.blue.bold(`${this.dirNamePayloads}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.dirNamePayloads}/${this.filename}`, this.template);
    }

    private async createUpdatePayload(): Promise<void>
    {
        this.filename = `Update${this.config.moduleName}.payload.ts`;

        this.template = fs.readFileSync(path.join(__dirname.replace('dist','src'),'./files/Update__name__.payload.ts'), 'utf8');

        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))

        console.info(`- Rute: ${chalk.blue.bold(`${this.dirNamePayloads}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.dirNamePayloads}/${this.filename}`, this.template);
    }
};
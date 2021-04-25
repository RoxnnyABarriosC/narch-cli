import {IModuleConfig} from "../../commands/AddModule.command";
import fs from "fs";
import path from "path";
import _ from "lodash";
import chalk from "chalk";
import {IRegExp} from "../../interfaces";

export default class PresentationFactory
{
    private regExp:IRegExp;
    private filename: string;
    private config: IModuleConfig;
    private template: string;
    private dirName: string;
    private dirNameCriterias: string;
    private dirNameRequests: string;
    private dirNameTransformers: string;

    constructor(config: IModuleConfig)
    {
        this.config = config
        this.dirName = `${config.dirName}/Presentation`;
        this.dirNameCriterias = `${this.dirName}/Criterias`;
        this.dirNameRequests = `${this.dirName}/Requests`;
        this.dirNameTransformers = `${this.dirName}/Transformers`;
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

        if (!fs.existsSync(this.dirNameCriterias))
        {
            fs.mkdirSync(this.dirNameCriterias);
        }

        if (!fs.existsSync(this.dirNameRequests))
        {
            fs.mkdirSync(this.dirNameRequests);
        }

        if (!fs.existsSync(this.dirNameTransformers))
        {
            fs.mkdirSync(this.dirNameTransformers);
        }
    }

    async handle(): Promise<void>
    {
        await this.createFilter();
        await this.createSort();
        await this.createTransformer();
        await this.createListRequest();
        await this.createSaveRequest();
        await this.createUpdateRequest();
    }

    private async createFilter(): Promise<void>
    {
        this.filename = `${this.config.moduleName}.filter.ts`;

        this.template = fs.readFileSync(path.join(__dirname.replace('dist','src'),'./files/__name__.filter.ts'), 'utf8');

        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))

        console.info(`- Rute: ${chalk.blue.bold(`${this.dirNameCriterias}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.dirNameCriterias}/${this.filename}`, this.template);
    }

    private async createSort(): Promise<void>
    {
        this.filename = `${this.config.moduleName}.sort.ts`;

        this.template = fs.readFileSync(path.join(__dirname.replace('dist','src'),'./files/__name__.sort.ts'), 'utf8');

        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))

        console.info(`- Rute: ${chalk.blue.bold(`${this.dirNameCriterias}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.dirNameCriterias}/${this.filename}`, this.template);
    }

    private async createTransformer(): Promise<void>
    {
        this.filename = `${this.config.moduleName}.transformer.ts`;

        this.template = fs.readFileSync(path.join(__dirname.replace('dist','src'),'./files/__name__.transformer.ts'), 'utf8');

        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))

        console.info(`- Rute: ${chalk.blue.bold(`${this.dirNameTransformers}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.dirNameTransformers}/${this.filename}`, this.template);
    }

    private async createListRequest(): Promise<void>
    {
        this.filename = `List${this.config.moduleName}.request.ts`;

        this.template = fs.readFileSync(path.join(__dirname.replace('dist','src'),'./files/List__name__.request.ts'), 'utf8');

        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))

        console.info(`- Rute: ${chalk.blue.bold(`${this.dirNameRequests}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.dirNameRequests}/${this.filename}`, this.template);
    }

    private async createSaveRequest(): Promise<void>
    {
        this.filename = `Save${this.config.moduleName}.request.ts`;

        this.template = fs.readFileSync(path.join(__dirname.replace('dist','src'),'./files/Save__name__.request.ts'), 'utf8');

        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))

        console.info(`- Rute: ${chalk.blue.bold(`${this.dirNameRequests}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.dirNameRequests}/${this.filename}`, this.template);
    }

    private async createUpdateRequest(): Promise<void>
    {
        this.filename = `Update${this.config.moduleName}.request.ts`;

        this.template = fs.readFileSync(path.join(__dirname.replace('dist','src'),'./files/Update__name__.request.ts'), 'utf8');

        this.template = this.template
            .replace(this.regExp.SINGULAR_NAME, this.config.moduleName)
            .replace(this.regExp.SINGULAR_NAME_CAMEL, _.camelCase(this.config.moduleName))
            .replace(this.regExp.PLURAL_NAME, this.config.pluralName)
            .replace(this.regExp.PLURAL_NAME_UPPER, this.config.tableName.toUpperCase())
            .replace(this.regExp.PLURAL_NAME_CAMEL, _.camelCase(this.config.pluralName))

        console.info(`- Rute: ${chalk.blue.bold(`${this.dirNameRequests}/${this.filename}`)}\n`);

        await fs.writeFileSync(`${this.dirNameRequests}/${this.filename}`, this.template);
    }
};
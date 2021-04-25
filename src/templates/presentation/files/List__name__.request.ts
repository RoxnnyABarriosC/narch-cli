import {Request} from "express";
import Pagination from "../../../App/Presentation/Shared/Pagination";
import {SINGULAR_NAME}Sort from "./../Criterias/{SINGULAR_NAME}.sort";
import {SINGULAR_NAME}Filter from "./../Criterias/{SINGULAR_NAME}.filter";
import ICriteria from "../../../App/InterfaceAdapters/Shared/ICriteria";
import ISort from "../../../App/InterfaceAdapters/Shared/ISort";
import IFilter from "../../../App/InterfaceAdapters/Shared/IFilter";
import IPagination from "../../../App/InterfaceAdapters/Shared/IPagination";

export default class List{PLURAL_NAME}Request implements ICriteria
{
    private readonly sort: ISort;
    private readonly filter: IFilter;
    private readonly pagination: IPagination;

    constructor(request: Request | any)
    {
        this.pagination = new Pagination(request);
        this.sort = new {SINGULAR_NAME}Sort(request);
        this.filter = new {SINGULAR_NAME}Filter(request);
    }

    getPagination(): IPagination
    {
        return this.pagination;
    }

    getFilter(): IFilter
    {
        return this.filter;
    }

    getSort(): ISort
    {
        return this.sort;
    }
}

import {Sort} from "@digichanges/shared-experience";

export default class {SINGULAR_NAME}Sort extends Sort
{
    static readonly CREATED_AT: string = 'createdAt';

    getFields(): any
    {
        return [
            {SINGULAR_NAME}Sort.CREATED_AT
        ];
    }

    getDefaultSorts(): any
    {
        return [
            {[{SINGULAR_NAME}Sort.CREATED_AT]: 'desc'}
        ];
    }
}

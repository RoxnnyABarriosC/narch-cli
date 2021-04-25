import Filter from "../../../App/Presentation/Shared/Filter";

export default class {SINGULAR_NAME}Filter extends Filter
{
    static readonly NAME: string = 'name';

    getFields(): any
    {
        return [
            {SINGULAR_NAME}Filter.NAME,
        ];
    }

    getDefaultFilters(): any
    {
        return [];
    }
}

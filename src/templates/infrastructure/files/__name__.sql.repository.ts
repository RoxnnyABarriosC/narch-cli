import {injectable} from "inversify";
import {IPaginator} from "@digichanges/shared-experience";
import Paginator from "../../App/Presentation/Shared/Paginator";
import ICriteria from "../../App/InterfaceAdapters/Shared/ICriteria";
import BaseSqlRepository from "../../App/Infrastructure/Repositories/Shared/Base.sql.repository";
import {SINGULAR_NAME}Entity from "../Domain/{SINGULAR_NAME}.entity";
import I{SINGULAR_NAME}Domain from "../InterfaceAdapters/I{SINGULAR_NAME}.domain";
import {SINGULAR_NAME}Filter from "./../Presentation/Criterias/{SINGULAR_NAME}.filter";
import I{SINGULAR_NAME}Repository from "../InterfaceAdapters/I{SINGULAR_NAME}.repository";
import {SINGULAR_NAME}SqlSchema from "./{SINGULAR_NAME}.sql.schema";

@injectable()
export default class {SINGULAR_NAME}SqlRepository extends BaseSqlRepository<{SINGULAR_NAME}Entity,I{SINGULAR_NAME}Domain> implements I{SINGULAR_NAME}Repository<I{SINGULAR_NAME}Domain>
{
    constructor()
    {
        super({SINGULAR_NAME}Entity,{SINGULAR_NAME}SqlSchema);
    }

    async list(criteria: ICriteria): Promise<IPaginator>
    {
        let queryBuilder = this.repository.createQueryBuilder("i");

        const filter = criteria.getFilter();

        queryBuilder.where("1 = 1");

        return new Paginator(queryBuilder, criteria);
    }
}

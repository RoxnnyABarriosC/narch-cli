import lazyInject from "../../../LazyInject";
import I{SINGULAR_NAME}Repository from "../../InterfaceAdapters/I{SINGULAR_NAME}.repository";
import {REPOSITORIES} from "../../../Repositories";
import ICriteria from "../../../App/InterfaceAdapters/Shared/ICriteria";
import I{SINGULAR_NAME}Domain from "../../InterfaceAdapters/I{SINGULAR_NAME}.domain";
import IPaginator from "../../../App/InterfaceAdapters/Shared/IPaginator";

export default class List{PLURAL_NAME}UseCase
{
    @lazyInject(REPOSITORIES.I{SINGULAR_NAME}Repository)
    private repository: I{SINGULAR_NAME}Repository<I{SINGULAR_NAME}Domain>;

    async handle(payload: ICriteria): Promise<IPaginator>
    {
        return await this.repository.list(payload);
    }
}

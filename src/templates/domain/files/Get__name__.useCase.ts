import lazyInject from "../../../LazyInject";
import I{SINGULAR_NAME}Repository from "../../InterfaceAdapters/I{SINGULAR_NAME}.repository";
import {REPOSITORIES} from "../../../Repositories";
import I{SINGULAR_NAME}Domain from "../../InterfaceAdapters/I{SINGULAR_NAME}.domain";
import IdPayload from "../../../App/InterfaceAdapters/Payloads/Defaults/Id.payload";

export default class Get{SINGULAR_NAME}UseCase
{
    @lazyInject(REPOSITORIES.I{SINGULAR_NAME}Repository)
    private repository: I{SINGULAR_NAME}Repository<I{SINGULAR_NAME}Domain>;

    async handle(payload: IdPayload): Promise<I{SINGULAR_NAME}Domain>
    {
        return await this.repository.getOne(payload.getId());
    }
}

import lazyInject from "../../../LazyInject";
import I{SINGULAR_NAME}Repository from "../../InterfaceAdapters/I{SINGULAR_NAME}.repository";
import {REPOSITORIES} from "../../../Repositories";
import IdPayload from "../../../App/InterfaceAdapters/Payloads/Defaults/Id.payload";
import I{SINGULAR_NAME}Domain from "../../InterfaceAdapters/I{SINGULAR_NAME}.domain";

export default class Remove{SINGULAR_NAME}UseCase
{
    @lazyInject(REPOSITORIES.I{SINGULAR_NAME}Repository)
    private repository: I{SINGULAR_NAME}Repository<I{SINGULAR_NAME}Domain>;

    async handle(payload: IdPayload): Promise<I{SINGULAR_NAME}Domain>
    {
        return await this.repository.delete(payload.getId());
    }
}

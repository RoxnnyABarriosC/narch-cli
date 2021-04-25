import lazyInject from "../../../LazyInject";
import I{SINGULAR_NAME}Repository from "../../InterfaceAdapters/I{SINGULAR_NAME}.repository";
import {REPOSITORIES} from "../../../Repositories";
import I{SINGULAR_NAME}Domain from "../../InterfaceAdapters/I{SINGULAR_NAME}.domain";
import Save{SINGULAR_NAME}Payload from "../../InterfaceAdapters/Payloads/Save{SINGULAR_NAME}.payload";
import {SINGULAR_NAME}Entity from "../{SINGULAR_NAME}.entity";

export default class Save{SINGULAR_NAME}UseCase
{
    @lazyInject(REPOSITORIES.I{SINGULAR_NAME}Repository)
    private repository: I{SINGULAR_NAME}Repository<I{SINGULAR_NAME}Domain>;

    async handle(payload: Save{SINGULAR_NAME}Payload): Promise<I{SINGULAR_NAME}Domain>
    {
        let {SINGULAR_NAME_CAMEL}: I{SINGULAR_NAME}Domain = new {SINGULAR_NAME}Entity();

        if (payload.getId())
        {
            {SINGULAR_NAME_CAMEL}.setId(payload.getId());
        }

        {SINGULAR_NAME_CAMEL}.name = payload.getName();

        return await this.repository.save({SINGULAR_NAME_CAMEL});
    }
}

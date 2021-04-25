import lazyInject from "../../../LazyInject";
import {REPOSITORIES} from "../../../Repositories";
import {SERVICES} from "../../../Services";
import I{SINGULAR_NAME}Repository from "../../InterfaceAdapters/I{SINGULAR_NAME}.repository";
import IAuthService from "../../../User/InterfaceAdapters/IAuth.service";
import I{SINGULAR_NAME}Domain from "../../InterfaceAdapters/I{SINGULAR_NAME}.domain";
import Update{SINGULAR_NAME}Payload from "../../InterfaceAdapters/Payloads/Update{SINGULAR_NAME}.payload";
import _ from "lodash";

export default class Update{SINGULAR_NAME}UseCase
{
    @lazyInject(REPOSITORIES.I{SINGULAR_NAME}Repository)
    private repository: I{SINGULAR_NAME}Repository<I{SINGULAR_NAME}Domain>;

    @lazyInject(SERVICES.IAuthService)
    private authService: IAuthService;

    async handle(payload: Update{SINGULAR_NAME}Payload): Promise<I{SINGULAR_NAME}Domain>
    {
        const {SINGULAR_NAME_CAMEL}: I{SINGULAR_NAME}Domain = await this.repository.getOne(payload.getId());

        {SINGULAR_NAME_CAMEL}.name = payload.getName();

        return await this.repository.save({SINGULAR_NAME_CAMEL});
    }
}


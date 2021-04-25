import {inject} from "inversify";
import {NextFunction, Request, Response} from 'express';
import {controller, httpDelete, httpGet, httpPost, httpPut, request, response, next} from 'inversify-express-utils';
import {IPaginator, StatusCode} from "@digichanges/shared-experience";
import Responder from "../App/Presentation/Shared/Responder";
import {Types} from "../Types";
import AuthorizeMiddleware from "../App/Presentation/Middlewares/Authorize.middleware";
import Permissions from "../Config/Permissions";
import Save{SINGULAR_NAME}Request from "./Presentation/Requests/Save{SINGULAR_NAME}.request";
import ValidatorRequest from "../App/Shared/ValidatorRequest";
import Save{SINGULAR_NAME}UseCase from "./Domain/UseCases/Save{SINGULAR_NAME}.useCase";
import I{SINGULAR_NAME}Domain from "./InterfaceAdapters/I{SINGULAR_NAME}.domain";
import {SINGULAR_NAME}Transformer from "./Presentation/Transformers/{SINGULAR_NAME}.transformer";
import List{PLURAL_NAME}Request from "./Presentation/Requests/List{PLURAL_NAME}.request";
import List{PLURAL_NAME}UseCase from "./Domain/UseCases/List{PLURAL_NAME}.useCase";
import IdRequest from "../App/Presentation/Requests/Defaults/Id.request";
import Get{SINGULAR_NAME}UseCase from "./Domain/UseCases/Get{SINGULAR_NAME}.useCase";
import Update{SINGULAR_NAME}Request from "./Presentation/Requests/Update{SINGULAR_NAME}.request";
import Update{SINGULAR_NAME}UseCase from "./Domain/UseCases/Update{SINGULAR_NAME}.useCase";
import Remove{SINGULAR_NAME}UseCase from "./Domain/UseCases/Remove{SINGULAR_NAME}.useCase";

@controller('/api/{PLURAL_NAME_CAMEL}')
export default class {SINGULAR_NAME}Handler
{
    @inject(Types.Responder)
    private responder: Responder;

    @httpPost('/', AuthorizeMiddleware(Permissions.SAVE_{PLURAL_NAME_UPPER}))
    public async save (@request() req: Request, @response() res: Response, @next() nex: NextFunction)
    {
        const _request = new Save{SINGULAR_NAME}Request(req);
        await ValidatorRequest.handle(_request);

        const save{SINGULAR_NAME}UseCase = new Save{SINGULAR_NAME}UseCase();
        const {SINGULAR_NAME_CAMEL}: I{SINGULAR_NAME}Domain = await save{SINGULAR_NAME}UseCase.handle(_request);

        this.responder.send({SINGULAR_NAME_CAMEL}, req, res, StatusCode.HTTP_CREATED, new {SINGULAR_NAME}Transformer());
    }

    @httpGet('/', AuthorizeMiddleware(Permissions.LIST_{PLURAL_NAME_UPPER}))
    public async list (@request() req: Request, @response() res: Response)
    {
        const _request = new List{PLURAL_NAME}Request(req);
        await ValidatorRequest.handle(_request);

        const list{PLURAL_NAME}UseCase = new List{PLURAL_NAME}UseCase();
        const paginator: IPaginator = await list{PLURAL_NAME}UseCase.handle(_request);

        await this.responder.paginate(paginator, req, res, StatusCode.HTTP_OK, new {SINGULAR_NAME}Transformer());
    }

    @httpGet('/:id', AuthorizeMiddleware(Permissions.SHOW_{PLURAL_NAME_UPPER}))
    public async getOne (@request() req: Request, @response() res: Response, @next() nex: NextFunction)
    {
        const _request = new IdRequest(req);
        await ValidatorRequest.handle(_request);

        const get{SINGULAR_NAME}UseCase = new Get{SINGULAR_NAME}UseCase();
        const {SINGULAR_NAME_CAMEL}: I{SINGULAR_NAME}Domain = await get{SINGULAR_NAME}UseCase.handle(_request);

        this.responder.send({SINGULAR_NAME_CAMEL}, req, res, StatusCode.HTTP_OK, new {SINGULAR_NAME}Transformer());
    }

    @httpPut('/:id', AuthorizeMiddleware(Permissions.UPDATE_{PLURAL_NAME_UPPER}))
    public async update (@request() req: Request, @response() res: Response, @next() nex: NextFunction)
    {
        const _request = new Update{SINGULAR_NAME}Request(req);
        await ValidatorRequest.handle(_request);

        const update{SINGULAR_NAME}UseCase = new Update{SINGULAR_NAME}UseCase();
        const {SINGULAR_NAME_CAMEL}: I{SINGULAR_NAME}Domain = await update{SINGULAR_NAME}UseCase.handle(_request);

        this.responder.send({SINGULAR_NAME_CAMEL}, req, res, StatusCode.HTTP_CREATED, new {SINGULAR_NAME}Transformer());
    }

    @httpDelete('/:id', AuthorizeMiddleware(Permissions.REMOVE_{PLURAL_NAME_UPPER}))
    public async remove (@request() req: Request, @response() res: Response, @next() nex: NextFunction)
    {
        const _request = new IdRequest(req);
        await ValidatorRequest.handle(_request);

        const remove{SINGULAR_NAME}UseCase = new Remove{SINGULAR_NAME}UseCase();
        const {SINGULAR_NAME_CAMEL}: I{SINGULAR_NAME}Domain = await remove{SINGULAR_NAME}UseCase.handle(_request);

        this.responder.send({SINGULAR_NAME_CAMEL}, req, res, StatusCode.HTTP_CREATED, new {SINGULAR_NAME}Transformer());
    }
}


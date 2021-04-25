import {Request} from "express";
import {IsString} from "class-validator";
import IdRequest from "../../../App/Presentation/Requests/Defaults/Id.request";
import Update{SINGULAR_NAME}Payload from "../../InterfaceAdapters/Payloads/Update{SINGULAR_NAME}.payload";

export default class Update{SINGULAR_NAME}Request extends IdRequest implements Update{SINGULAR_NAME}Payload
{
    @IsString()
    name: string;

    constructor(request: Request | any)
    {
        super(request);
        this.name = request.body.name;
    }

    getName(): string
    {
        return this.name;
    }
}

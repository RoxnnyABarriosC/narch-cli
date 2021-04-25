import {Request} from "express";
import {IsOptional, IsString, IsUUID, Length} from "class-validator";
import Save{SINGULAR_NAME}Payload from "../../InterfaceAdapters/Payloads/Save{SINGULAR_NAME}.payload";

export default class Save{SINGULAR_NAME}Request implements Save{SINGULAR_NAME}Payload
{
    @IsOptional()
    @IsString()
    @IsUUID('4')
    id: string

    @Length(3, 30)
    @IsString()
    name: string;

    constructor(request: Request | any)
    {
        this.id = request.body.id;
        this.name = request.body.name;
    }

    getId(): string
    {
        return this.id;
    }

    getName(): string
    {
        return this.name;
    }
}

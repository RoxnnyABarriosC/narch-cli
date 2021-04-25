import I{SINGULAR_NAME}Domain from "../InterfaceAdapters/I{SINGULAR_NAME}.domain";
import BaseEntity from "../../App/Domain/Shared/Base.entity";

export default class {SINGULAR_NAME}Entity extends BaseEntity implements I{SINGULAR_NAME}Domain
{
    name: string;

    constructor()
    {
        super()
    }
}

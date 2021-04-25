import Transformer from "../../../App/Presentation/Shared/Transformer";
import I{SINGULAR_NAME}Domain from "../../InterfaceAdapters/I{SINGULAR_NAME}.domain";

export default class {SINGULAR_NAME}Transformer extends Transformer
{
    public transform({SINGULAR_NAME_CAMEL}: I{SINGULAR_NAME}Domain)
    {
        return {
            id: {SINGULAR_NAME_CAMEL}.getId(),
            name: {SINGULAR_NAME_CAMEL}.name,
            createdAt: this.transformDate({SINGULAR_NAME_CAMEL}.createdAt),
            updatedAt: this.transformDate({SINGULAR_NAME_CAMEL}.updatedAt),
        };
    }
}

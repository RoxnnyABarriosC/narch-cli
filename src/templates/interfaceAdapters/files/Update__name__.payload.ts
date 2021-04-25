import IdPayload from "../../../App/InterfaceAdapters/Payloads/Defaults/Id.payload";
import Save{SINGULAR_NAME}Payload from "./Save{SINGULAR_NAME}.payload";

export default interface Update{SINGULAR_NAME}Payload extends IdPayload, Save{SINGULAR_NAME}Payload {}


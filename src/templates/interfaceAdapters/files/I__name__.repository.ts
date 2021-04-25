import I{SINGULAR_NAME}Domain from "./I{SINGULAR_NAME}.domain";
import IBaseSqlRepository from "../../App/InterfaceAdapters/IRepository/Shared/IBase.sql.repository";

export default interface I{SINGULAR_NAME}Repository<IDomain extends I{SINGULAR_NAME}Domain> extends IBaseSqlRepository<IDomain> {}

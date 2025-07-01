import { AppErrorCodes } from "@/constants/error-status-codes.constants";
import { BaseApplicationException } from "./base-application.exception";
import { HTTP_STATUS_CODE_NOT_FOUND } from "@/constants/http-status-codes.constant";

/**
 * Intended for cases where a request for an entity that does not exist fails. Desipte the fact that an 400 response code is returned, additional information in the header may be used by the client in order to determine that the request in fact was routed to a valid rAPI endpoint, however the requested entity (usually referenced by PK) simply does not exist. 
 */
class EntityNotFoundError extends BaseApplicationException{
    
    constructor(message:string){
        super(message,AppErrorCodes.ENTITY_NOT_FOUND, HTTP_STATUS_CODE_NOT_FOUND, "Entity not found");
    }
}

export default EntityNotFoundError
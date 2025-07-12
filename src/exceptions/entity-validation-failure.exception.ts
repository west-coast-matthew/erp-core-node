

import { AppErrorCodes } from "@/constants/error-status-codes.constants";
import { BaseApplicationException } from "./base-application.exception";
import { HTTP_STATUS_CODE_BAD_REQUEST } from "@/constants/http-status-codes.constant";

/**
 * Exception intended for cases where a request to create or update an entity fails due to business 
 * validation logic.
 */
export class EntityValidationException extends BaseApplicationException{
    
    constructor(message:string){
        super(message,AppErrorCodes.ENTITY_VALIDATION_ERR, HTTP_STATUS_CODE_BAD_REQUEST, 
            "Entity validation failure");
    }
}




import { AppErrorCodes } from "@/constants/error-status-codes.constants";
import { BaseApplicationException } from "./base-application.exception";
import { HTTP_STATUS_CODE_BAD_REQUEST } from "@/constants/http-status-codes.constant";

/**
 * Exception intended for cases where a general invalid request is made by the client. Usually intended for business validation exceptions.
 */
class EntityNotFoundError extends BaseApplicationException{
    
    constructor(message:string){
        super(message,AppErrorCodes.BAD_REQUEST, HTTP_STATUS_CODE_BAD_REQUEST, "Invalid request");
    }
}

module.exports = EntityNotFoundError;


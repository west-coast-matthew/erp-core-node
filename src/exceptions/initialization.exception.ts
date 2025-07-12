

import { AppErrorCodes } from "@/constants/error-status-codes.constants";
import { BaseApplicationException } from "./base-application.exception";
import { SERVER_EXCEPTION } from "@/constants/http-status-codes.constant";

/**
 * Exception intended for cases where a general invalid request is made by the client. Usually 
 * intended for business validation exceptions.
 */
export class InitializationException extends BaseApplicationException{
    
    constructor(message:string){
        super(message,AppErrorCodes.INITIALIZATION_ERROR, SERVER_EXCEPTION, "Application startup exception");
    }
}

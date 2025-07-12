

import { AppErrorCodes } from "@/constants/error-status-codes.constants";
import { BaseApplicationException } from "./base-application.exception";
import { HTTP_STATUS_CODE_BAD_REQUEST } from "@/constants/http-status-codes.constant";

/**
 * Generic handler for general exceptons.
 */
export class SystemErrException extends BaseApplicationException{
    
    constructor(message:string){
        super(message,AppErrorCodes.ERR_CODE_SYSTEM_ERR, HTTP_STATUS_CODE_BAD_REQUEST, 
            "System level exception");
    }
}
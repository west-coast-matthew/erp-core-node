import { AppErrorCodes } from "@/constants/error-status-codes.constants";
import { BaseApplicationException } from "./base-application.exception";
import { HTTP_STATUS_CODE_BAD_REQUEST } from "@/constants/http-status-codes.constant";

export class EntityExistsException extends BaseApplicationException{
    
    constructor(message:string){
        super(message,AppErrorCodes.ENTITY_EXISTS, HTTP_STATUS_CODE_BAD_REQUEST, "Entity exists");
    }
}
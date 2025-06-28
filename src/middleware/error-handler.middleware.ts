import { BaseApplicationException } from "@/exceptions/base-application.exception";
import { Response } from "express";

/**
 * 
 * Middleware for centralizing exception handling.
 * 
 * @param {*} error 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
const errorHandlerMiddleware = function(error: Error, res: Response ){
    
    if(error){
        if(error instanceof BaseApplicationException){
            res.set('app-err-code',(error as BaseApplicationException).appCode);
            res.set('default-message',(error as BaseApplicationException).defaultMessage);
            res.set('message',(error as BaseApplicationException).message);
            res.status((error as BaseApplicationException).httpStatusCode);

            res.send("");
        }

    }
};

module.exports = errorHandlerMiddleware;
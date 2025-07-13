import { BaseApplicationException } from "@/exceptions/base-application.exception";
import logger from "@/config/logger";
import { Request, Response, NextFunction, ErrorRequestHandler } from 'express';

/**
 * 
 * Middleware for centralizing exception handling.
 * 
 * @param {*} error 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 */
export const errorHandlerMiddleware: ErrorRequestHandler = (
  error:Error,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (error instanceof BaseApplicationException) {
    res.setHeader('app-err-code', error.appCode);
    res.setHeader('default-message', error.defaultMessage);
    res.setHeader('message', error.message);
    res.status(error.httpStatusCode);

    console.warn("Application Exception: ", error.message);
    logger.error("Application Exception: ", error);

    res.send();
  } else {
    res.status(500).send();
  }
};

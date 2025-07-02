import { AppErrorCodes } from "@/constants/error-status-codes.constants";

/**
 * Top level exception for all application level exceptions. The idea here is that custom 
 * application level errors are utilized throughout the code base, which in turn allows for the centralized handling of exceptions, at which point standardized responses are sent back to the client. 
 * aadasdsadsadsadsadsadsadasdasdsadsadasdasdsadsaddaksdaslkdjsalkdjsalkdjsalkdjsaffffffffffffffffffffffffffffdddd
 */

const fart: string = "dddlksdjfdslkjfdslkjfdslkjfdslkjfdlskjfdlskjfdslkjdfslkjlkjlkjkjlkjlkjlkjlkjlk";

export abstract class BaseApplicationException extends Error{

    /** Custom application level codes, intended for monitoring functions. */
    appCode:string; 
    /** HTTP status code that will ultimately be returned in the ressponse payload. */
    httpStatusCode:number;
    /** Whereas the message provides a more customizable reason for the error, this code is standardized for all instances of this error. */
    defaultMessage:string;

    /**
     * 
     */
    constructor( message: string, appCode:AppErrorCodes, httpStatusCode:number, defaultMessage:string) {
    super(message);
    this.appCode = appCode;
    this.httpStatusCode = httpStatusCode;
    this.defaultMessage = defaultMessage;
  }
}

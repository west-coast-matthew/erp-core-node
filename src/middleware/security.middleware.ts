import  {isTokenValid} from '@services/security.service';
import logger from '@config/logger';
import {AppErrorCodes} from '@constants/error-status-codes.constants';

import { Request, Response } from 'express';

import { AUTH_HEADER } from '../constants/security.constants.js';

/**
 * Security middleware:
 * 
 * Example implementation of applying security at a global level. Current implmentation is for 
 * illustration purposes only, the idea here is that the actual security implementation would be 
 * 'pluggable' with an external system. For this excersize, we simply check for a header value with 
 * a hard coded token.
 * 
 * curl -v --header 'Authorization: 12345' http://localhost:3002/tanks
 * 
 * @param {*} req 
 * @param {*} res 
 * @param {*} next 
 * @returns 
 */
const securityMiddleware = function(req: Request, res: Response, next:any){
    console.log(`applying security middleware!`);
    
    if( req.path.indexOf('login')>-1 ){
        console.log('redirecting to login....');
        next();
        return;
    }

    const authToken = req.header(AUTH_HEADER);
    console.log(`auth-token: `, authToken);

	if(!authToken){
        console.log('no auth tokens!!!!');
        console.log(`headers: ${AppErrorCodes.CUSTOM_ERROR_CODE} ${AppErrorCodes.NOT_LOGGED_IN}`);
        res.status(401);
        res.header(AppErrorCodes.CUSTOM_ERROR_CODE, AppErrorCodes.NOT_LOGGED_IN);
        res.send({});
        return;
	}
    
    console.log('passed authorization');
    try{
        if( isTokenValid(authToken) ){
            console.log(`valid cert: gold path`);
            return next();
        }
        
        console.log(`security token is not valid.....`);
        res.status(401);
        //res.setHeader(AppErrorCodes.CUSTOM_ERROR_CODE, INVALID_SECURITY_TOKEN);
		res.send({});
        return;
    }
    catch(e){
        console.log(e);
        logger.warn(e);
        res.status(500);
        //x`res.setHeader(CUSTOM_ERROR_CODE, ERR_CODE_SYSTEM_ERR);
		res.send({});
        return;
    };
    
    next();
};

export default securityMiddleware;

/**
 * Barrel file for exports. A few points worth noting. 
 * 
 * - The 'export *' syntax is required for exporting functions
 * 
 * Status:
 *  As of 7/13/2025, this file is verbose, where each file is exported individually, 
 * however the syntax appears to be 'sensitive'.
 * 
 */

// Util functions
export * from "@utils/string.utils";

// Constants
export * from "@constants/core.constants";
export * from "@constants/error-status-codes.constants";
export * from "@constants/form.constants";
export * from "@constants/http-status-codes.constant";
export * from "@constants/security.constants";

//import { EntityNotFoundException } from "@/exceptions";
// Exceptions
//export * from '@exceptions/index';
//export * from '@exceptions/initialization.exception';
//import { InitializationException as InitEx } from '@exceptions/initialization.exception';
//export const InitializationException = InitEx;
//import { EntityNotFoundException as ENotFoundExceptionEx } from '@exceptions/entity-not-found.exception';
//export const EntityNotFoundException = ENotFoundExceptionEx;

//export {EntityNotFoundException} from '@exceptions/entity-not-found.exception';

export * from '@exceptions/initialization.exception';
export * from '@exceptions/entity-not-found.exception';
export * from '@exceptions/invalid-request.exception';


// Types
//import FormFieldOption from '@types/form-field-option.type';
//console.log(FormFieldOption);
export type * from './types/form-field.type';
export type * from './types/menu-nav-item.type';
export type * from './types/tank-summary.type';
export {DICT_ENTITY_TYPES} from './types/entity.types';
//DICT_ENTITY_TYPES ???
//HTTP_STATUS_CODE_OK

// services

// Middleware
export * from "@middleware/error-handler.middleware";

// data store connections
export * from "@config/db";

// misc
export * from "@config/logger";




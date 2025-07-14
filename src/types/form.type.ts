/**
 * 
 */
enum FORM_FIELD_TYPES {
    TEXT_INPUT="text"
}

/**
 * FormField:
 *      
 *  Wrapper for DSL definition of a form field. Used to support the use case where a generic 
 * input form may be provided which supports the ability to support object management functions 
 * in a manner which is independent of the specific object implementation.
 * 
 */
export interface FormField{
    name: string,   // Attribute reference on entity definition ()
    label: string,  // UI display on the phone, optional, if not provided, then we attempt to 
    // formulate on the name attribute. 
    description?: string, // Sometimes helpfull
    required?: boolean, // Defaults to false
    options?: FormFieldOption[], // Only relevant for multiple selection options
    length?: number, // Limits length on 
    value?: string, // Pre-existing value, if any
    type: FORM_FIELD_TYPES, // Reference to the form field representation
    validationMsg?: string, // Presented if invalid input supplied.
}

/**
 * 
 */
export interface FormFieldOption{
    label: string, 
    value: string
}
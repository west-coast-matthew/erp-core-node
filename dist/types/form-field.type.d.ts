import { FORM_FIELD_TYPES } from "../constants/entity.constants";
import FormFieldOption from "../types/form-field-option.type";
/**
 * FormField:
 *
 *  Wrapper for DSL definition of a form field. Used to support the use case where a generaic
 * input form may be provided which supports the ability to support object management functions
 * in a manner which is independent of the specific object implementation.
 *
 */
export default interface FormField {
    name: string;
    label: string;
    description?: string;
    required?: boolean;
    options?: FormFieldOption[];
    length?: number;
    value: string;
    type: FORM_FIELD_TYPES;
    validationMsg?: string;
}
//# sourceMappingURL=form-field.type.d.ts.map
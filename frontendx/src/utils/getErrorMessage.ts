import { FieldErrors } from "react-hook-form";

/*  Extracts the error message for a specific field from the `FieldErrors` object returned by React Hook Form.
    
    @param {FieldErrors} errors - The object containing validation errors from React Hook Form.
    @param {string} field - The name of the field for which to retrieve the error message.
    @returns {string | undefined} - The error message for the specified field, or `undefined` if no error exists.
*/
const getErrorMessage = (errors: FieldErrors, field: string) => { 
    return errors[field]?.message as string;
}

export default getErrorMessage;
import { UseFormRegister } from "react-hook-form";

type FormInputFieldProps = {
    fieldName: string;
    register: UseFormRegister<any>; // can use <any> since inputs are already define in form, and to make this prop flexible
    errorPrompt: string;
    showState?: boolean;
    toggle?: (v: boolean) => void;
}

type FormField = "firstname" | "email" | "password" | "lastname" | "confirm";

const FormInputField = ({ register, fieldName, errorPrompt, showState, toggle }: FormInputFieldProps) => {

    const handleToggle = (cb: any) => {
        cb((prevState: any) => !prevState);
    };

    return (
        <div className={`relative flex flex-col input-field-${fieldName}`}>
        {fieldName === "password" || fieldName === "confirm" ? ( // render this element for input[type="password"]
            <>
                <div className="flex w-full">
                    <input
                        {...register(fieldName as FormField)}
                        type={showState? "text": "password"}
                        placeholder={fieldName}
                        className="w-[326px] px-2 py-1 cursor-default text-white outline-none focus:border-white tracking-widest placeholder-gray-300 bg-gray-900 bg-opacity-30 border border-[#0000004e] rounded-md mb-7"
                    />
                {showState ? ( // Show Password Icon
                    <svg onClick={() => handleToggle(toggle)} className="absolute w-7 h-7 right-3 top-[50%] translate-y-[-95%] cursor-pointer hover:text-white text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                ) : (  // Hide Password Icon
                    <svg onClick={() => handleToggle(toggle)} className="absolute w-7 h-7 right-3 top-[50%] translate-y-[-95%] cursor-pointer hover:text-white text-gray-300" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.98 8.223A10.477 10.477 0 0 0 1.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.451 10.451 0 0 1 12 4.5c4.756 0 8.773 3.162 10.065 7.498a10.522 10.522 0 0 1-4.293 5.774M6.228 6.228 3 3m3.228 3.228 3.65 3.65m7.894 7.894L21 21m-3.228-3.228-3.65-3.65m0 0a3 3 0 1 0-4.243-4.243m4.242 4.242L9.88 9.88" />
                    </svg>
                )}
                </div>
                {errorPrompt && (
                    <span className="absolute bottom-[7px] text-sm inline text-red-600">
                        {errorPrompt}
                    </span>
                )}
            </>
        ) : (   // else, render this element for input[type="text"]
            <>
                <input
                    {...register(fieldName as FormField)}
                    type="text"
                    placeholder={fieldName}
                    className="px-2 py-1 cursor-default text-white outline-none focus:border-white tracking-widest placeholder-gray-300 bg-gray-900 border border-[#0000004e] rounded-md bg-opacity-30 mb-7"
                />
                {errorPrompt && (
                    <span className="absolute bottom-[7px] text-sm inline text-red-600">
                        {errorPrompt}
                    </span>
                )}
            </>
        )}
        </div>
    );
};

export default FormInputField;
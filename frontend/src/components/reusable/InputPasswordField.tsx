import { useState } from "react";
import { Input } from "../ui/input";
import { Label } from "../ui/label";
import { BiSolidHide, BiSolidShow } from "react-icons/bi";
import { UseFormRegister } from "react-hook-form";

type InputPasswordFieldProps = {
    register: UseFormRegister<any>;
    label: string;
    placeholder: string;
    errMessage?: string;
};

const InputPasswordField = ({ register, label, placeholder, errMessage }: InputPasswordFieldProps) => {
    const [show, setShow] = useState(false);

    const toggleShow = () => {
        console.log(show);
        setShow(!show);
    };

    return (
        <div className="relative pb-4 input-field">
            <Label className="text-[16px] tracking-widest text-slate-100/70 font-semibold" htmlFor={label}>{label}</Label>
            <Input 
                {...register(label)}
                id={label} 
                type={show? "text" : "password"} 
                placeholder={placeholder} 
                className="text-xl tracking-wider text-white placeholder:text-slate-300/30" 
            />
        {show? (
            <BiSolidShow size={27} onClick={toggleShow} className="absolute cursor-pointer right-2 bottom-5 text-slate-300/40 hover:text-slate-300" />
        ) : (
            <BiSolidHide size={27} onClick={toggleShow} className="absolute cursor-pointer right-2 bottom-5 text-slate-300/40 hover:text-slate-300" />
        )}
        {errMessage && (
            <span className={`${label}-error text-red-500 text-sm font-semibold px-1 absolute -bottom-1`}>{errMessage}</span>
        )}
        </div>
    );
};

export default InputPasswordField;
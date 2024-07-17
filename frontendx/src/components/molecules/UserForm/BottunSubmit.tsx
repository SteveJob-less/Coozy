type ButtonSubmitProps = {
    action: string;
    isSubmitting: boolean;
}

const ButtonSubmit = ({ action, isSubmitting }: ButtonSubmitProps) => {
    return (
        <button 
            type="submit" 
            className={`px-3 py-1 w-6/12 text-xl font-bold text-white ${isSubmitting? "bg-black bg-opacity-50 disabled:": "bg-[#ffd900]"} rounded-md hover:bg-[#ead352]`}
        >
            {isSubmitting? "Loading...": `${action}`}
        </button>
    );
};

export default ButtonSubmit;
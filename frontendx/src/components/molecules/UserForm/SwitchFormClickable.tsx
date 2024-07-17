type SwitchFormClickableProps = {
    form: { name: string, q: string }
    handleFormChange: () => void;
}

const SwitchFormClickable = ({ form, handleFormChange}: SwitchFormClickableProps) => {
    return (
        <p className="mb-3 text-sm">
            {form.q}
            <span onClick={handleFormChange} className="italic font-semibold cursor-pointer hover:underline">{form.name} here.</span>
        </p>
    );
};

export default SwitchFormClickable;
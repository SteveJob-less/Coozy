import { CardContent } from "@/components/ui/card";
import SignupForm from "./SignupForm";

const Signup = ({ handleSwitchForm }: { handleSwitchForm: (action: "Login") => void }) => {
    return (
        <CardContent className="px-8 py-3 pb-5">
            <SignupForm handleSwitchForm={handleSwitchForm} />    
        </CardContent>
    )
};

export default Signup;
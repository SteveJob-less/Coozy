import { CardContent } from "@/components/ui/card";
import LoginForm from "./LoginForm";

const Login = ({ handleSwitchForm }: { handleSwitchForm: (action: "Signup") => void }) => {
    return (
        <CardContent className="px-8 py-3 pb-5">
            <LoginForm handleSwitchForm={handleSwitchForm} />    
        </CardContent>
    )
};

export default Login;
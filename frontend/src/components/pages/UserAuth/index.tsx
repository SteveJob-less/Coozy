import { useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Login from "./Login";
import Signup from "./Signup";


const UserAuth = () => {
    const [action, setAction] = useState<"Login" | "Signup">("Login");
    const handleSwitchForm = (action: "Login" | "Signup") => {
        setAction(action);
    };

    return (
        <main className="flex items-center justify-center w-screen h-screen bg-slate-600 user-auth">
            <Card className="border-4 w-96 md:min-w-[400px] bg-slate-800 border-slate-900/50 -mt-24">
                <CardHeader className="px-8 pb-0 text-4xl font-bold text-center text-white font-[gilroy-bold]">
                    <CardTitle className="pb-3 mb-2 tracking-wide border-b-2 border-slate-300/5">{action}</CardTitle>
                </CardHeader>
            {action === "Login"? (
                <Login handleSwitchForm={handleSwitchForm} />
            ):(
                <Signup handleSwitchForm={handleSwitchForm} />
            )}
            </Card>
        </main>
    );
};

export default UserAuth;
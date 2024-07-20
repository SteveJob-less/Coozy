import { useState } from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";
import Login from "./Login";
import Signup from "./Signup";
import { Separator } from "@radix-ui/react-separator";


const UserAuth = () => {
    const [action, setAction] = useState<"Login" | "Signup">("Login");
    
    const handleSwitchForm = (action: "Login" | "Signup") => {
        setAction(action);
    };

    return (
        <main className="flex items-center justify-center w-screen min-h-[800px] h-screen bg-slate-600 user-auth">
            <Card className="border-4 w-96 md:min-w-[400px] bg-slate-800 border-slate-900/50">
                <CardHeader className="px-8 pb-0 text-4xl font-bold text-center text-white font-[gilroy-bold]">
                    <CardTitle className="pb-3 mb-2 tracking-wide">{action}</CardTitle>
                </CardHeader>
                <Separator className="w-[calc(100%-4rem)] mx-auto h-[3px] rounded bg-slate-300/10" />
            {action === "Login"? (
                <Login handleSwitchForm={handleSwitchForm} />
            ) : (
                <Signup handleSwitchForm={handleSwitchForm} />
            )}
            </Card>
        </main>
    );
};

export default UserAuth;

import { useState } from "react";
import LoginForm from "../../layouts/UserForm/LoginForm";
import SignupForm from "../../layouts/UserForm/SignupForm";

const UserForm = () => {
    const [ isLogin, setIsLogin ] = useState(true);

    return (
        <section className="flex items-center justify-center h-screen">
        {isLogin ? (
            <LoginForm handleFormChange={ () => setIsLogin(false) } />
        ) : (
            <SignupForm handleFormChange={ () => setIsLogin(true) } />
        )}
        </section>
    );
};


export default UserForm;
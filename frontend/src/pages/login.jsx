import { useState } from "react";
import SignIn from "../components/login/signIn";
import SignUp from "../components/login/signup";
import '../components/login/login.css';


export default function Login({ setToken }) {
    const [isSignIn, setIsSignIn] = useState(true);

    const toggleForm = () => {
        setIsSignIn(!isSignIn);
    };

    return (
        <div className="body">
            <div className="login-container">
                <div className={`form-wrapper ${isSignIn ? 'sign-in-mode' : 'sign-up-mode'}`}>
                    {isSignIn ? <SignIn toggleForm={toggleForm} setToken={setToken} /> : <SignUp toggleForm={toggleForm} setToken={setToken} />}
                </div>
            </div>
        </div>
    );
};
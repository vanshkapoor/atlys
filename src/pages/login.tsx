import { useNavigate } from "react-router-dom"
import { LoginContent } from "../components/LoginContent";
import React from "react";
import LoginIcon from "../assets/loginIcon.png"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LoginProps {
}

export const Login: React.FC<LoginProps> = () => {
    const navigate = useNavigate();

    return <>
        <div className="container mx-auto h-screen flex flex-col justify-center">
            <div className="items-center mb-6">
                <img
                    className="w-12 h-12 mx-auto object-cover"
                    src={LoginIcon}
                    alt="loginIcon" width="384" height="512" />
            </div>
            <div className="border max-w-fit mx-auto p-6 rounded-md cardDarkBackground m-2">
                <LoginContent
                    onLogin={() => navigate("/home")}
                    onRegister={() => navigate("/home")}
                />
            </div>
        </div>
    </>
}
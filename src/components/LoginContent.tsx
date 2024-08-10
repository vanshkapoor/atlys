import React from "react"
import { EyeIcon } from '@heroicons/react/24/outline'

interface LoginContentInterface {
    onLogin: () => void
    onRegister: () => void
}

export const LoginContent: React.FC<LoginContentInterface> = ({ onLogin, onRegister }) => {
    return <>
        <p className="text-center mt-4 mb-1 text-sm tracking-wider text-slate-600 textColorDarkGrey">WELCOME BACK</p>
        <p className="text-center mb-6 font-bold text-lg textwhite">Log into your account</p>

        <p className="text-sm mb-2">Email or Username</p>
        <input type="text" className="w-full p-2 rounded-md bg-transparent loginInput mb-2" placeholder="Enter your email or username" />

        <div className="flex justify-between mt-2 mb-1">
            <p className="text-sm">Password</p>
            <p className="text-xs">Forgot password?</p>
        </div>
        <div className="loginInput rounded-md flex items-center">
            <input type="password" className="w-full p-2 bg-transparent" placeholder="Enter your password" />
            <EyeIcon className="size-5 mr-2" />
        </div>

        <div>
            <button type="submit" onClick={onLogin} className="rounded-md w-full blueBackground p-2 text-white font-medium mt-4">
                Login now
            </button>
        </div>
        <p onClick={onRegister} className="text-sm textColorDarkGrey mt-4 cursor-pointer">Not registered yet? <span className="textColorGrey">Register</span></p>
    </>
}
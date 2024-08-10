import React from "react"

interface RegisterInterface {
    onLogin: () => void
    onRegister: () => void
}


export const RegisterContent: React.FC<RegisterInterface> = ({ onLogin, onRegister }) => {
    return <>
        <p className="text-center mt-4 mb-1 text-sm tracking-wider text-slate-600 textColorDarkGrey">SIGN UP</p>
        <p className="text-center mb-6 font-bold text-lg textwhite">Create an account to continue</p>

        <p className="text-sm mb-2">Email</p>
        <input type="text" className="w-full p-2 rounded-md bg-transparent loginInput mb-2" placeholder="Enter your email" />

        <p className="text-sm mb-2">Username</p>
        <input type="text" className="w-full p-2 rounded-md bg-transparent loginInput mb-2" placeholder="Choose a preferred username" />

        <p className="text-sm mb-2">Password</p>
        <input type="password" className="w-full p-2 rounded-md bg-transparent loginInput" placeholder="Choose a strong password" />

        <div>
            <button type="submit" onClick={onRegister} className="rounded-md w-full blueBackground p-2 text-white font-medium mt-4">
                Continue
            </button>
        </div>
        <p onClick={onLogin} className="text-sm textColorDarkGrey mt-4 cursor-pointer">Already have an account? <span className="textColorGrey">Login</span></p>
    </>
}
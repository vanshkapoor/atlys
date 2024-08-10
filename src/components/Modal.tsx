import { useState } from "react"
import { LoginContent } from "./LoginContent"
import { RegisterContent } from "./RegisterContent"
import React from "react"

interface ModalInterface {
    isOpen: boolean
    onClose: () => void
}

export const Modal: React.FC<ModalInterface> = ({ isOpen, onClose }) => {
    const [showRegister, setShowregister] = useState(true)

    return <>
        <div className={isOpen?"modal-overlay modal-show":"modal-overlay"}>
            <div>
                <div className="container mx-auto h-screen flex flex-col justify-center">
                    <div className="border max-w-fit mx-auto p-6 rounded-md cardDarkBackground m-2">
                        <div className="float-right rounded-2xl bg-gray-950	w-8 h-8 flex justify-center items-center text-center cursor-pointer font-bold" onClick={onClose}>
                            <p>X</p>
                        </div>
                        {
                            !showRegister && <LoginContent
                            onLogin={onClose}
                            onRegister={() => setShowregister(true)}
                        />}
                        {
                            showRegister && <RegisterContent
                                onLogin={() => setShowregister(false)}
                                onRegister={onClose}
                            />
                        }

                    </div>
                </div>
            </div>
        </div>
    </>
}

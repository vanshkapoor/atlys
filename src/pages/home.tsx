import React, { useState } from "react";
import { UserPostCard } from "../components/UserPostCard"
import { Modal } from "../components/Modal"

// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface HomeProps {
}

export const Home:React.FC<HomeProps> = () => {
    const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return <>

        <div className="homecontainer mx-auto mb-4">
            <br />
            <h1 className="text-white text-3xl mt-4 mb-2">Hello Jane</h1>
            <p className="textColorGrey mb-8">How are you doing today? would you like to share something with the <br /> community🤗</p >

            <div className="border rounded-lg userPostCard p-4 mt-8">
                <p className="text-lg mb-2 mt-2 font-medium">Create post</p>
                <div className="flex rounded-xl p-4 postbox mb-4">
                    <div>
                        <p className="rounded-3xl text-xl iconbackground p-2">💬</p>
                    </div>
                    <input
                        className="w-full bg-transparent ml-4"
                        type="text"
                        id="textbox"
                        name="textbox"
                        placeholder="How are you feeling today?" />
                </div>

                <div className="flex justify-end mb-4 mt-2">
                    <button type="submit" 
                    className="blueBackground rounded-md text-white px-8 py-2"
                    >Post</button>
                </div>
            </div>

            <UserPostCard 
                profilepic="https://s3-alpha-sig.figma.com/img/d876/9b85/25c869bf7a20b010741bad2949259c0d?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=buvGABhI-ZfjjYBpmWc8aoGPM02Jw2DLl8nCePiCatgDI5ZB4nXXltuQ7fJctA3jqlxV2NU4sA3~YrFzEWYhNv6YdglSUnyc72emTyBvPTUhmlaCovtkO8-LEbUTMVHzTpJ8OBAj3BPyu6NFKTQkM-9ZdPx7ShckuHEblG28yZBs1shaTIot84UyWM8jEvaHeEJUsPLzTc3Z0P94sVC1ROFkiZmOR91rR38~-iybiVn9TuVRvepJmowPV3A2CVLD19Ug~cWmbPl8IHR1OGEy4RLKX6Wnhu4mueyRgo06XisaKBlynIZU3qNvBkSzRjZaNlg5f3HE8lv6O7zQt429tg__"
                name="Theressa Webb"
                time="5mins ago" 
                comment="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." 
                commentCount="24" 
                icon="👋"
                edited={false}
                onClick={openModal}
            />

            <UserPostCard 
                profilepic="https://s3-alpha-sig.figma.com/img/a50a/a686/c235d3ee2b054cb561d4d7772e564df4?Expires=1724025600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=D2qHdJviStoZ3m7oLtVyhp598Iuq7tQQnmsObSRsjdeCCWI-cGwDovJhlYY-aqhHH76Ir8rl~Gu5tG9tpTGOm2kOcuzVaQ35jSJ3gxirAZDtzaH1DGbUxNf8PYRiuHWmgrq11XuDZn0YyxIwUUeLr5XlEAYXqQkFtpWazgxlUHvy4STHhMxSnuf-JzkVlE4f8omJYzxcS-~NCPorF~C4M~ofT07mWUYdBpHzu5R2ueJMWuyKDfx-vOo-na~yzYP0o~QCAg6~QRKtSP6Q-BcJlYBc8Dw8B5GsRBAB2MdhgyMzaubOwyyNLMLiM9R1BIggLdGBb5VH3ZYwohPXM9XBEg__"
                name="Marvin McKinney"
                time="8mins ago" 
                comment="Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet." 
                commentCount="24" 
                icon="😞"
                edited
                onClick={openModal}
            />
            <Modal 
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>
    </>
}
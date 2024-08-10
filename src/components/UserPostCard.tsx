import React from "react"
import { ChatBubbleLeftIcon } from '@heroicons/react/24/outline'

interface UserPostCardProps {
    profilepic: string,
    name: string,
    time: string,
    comment: string,
    commentCount: string,
    icon: string,
    edited: boolean,
    onClick: () => void

}

export const UserPostCard: React.FC<UserPostCardProps> =
    ({ profilepic, name, time, comment, commentCount, icon, edited, onClick }) => {
        return <div className="border rounded-lg p-4 mt-4 userPostCard cursor-pointer" onClick={onClick}>
            <div className="flex justify-between mb-4 items-center">
                <div className="flex">
                    <div>
                        <img
                            className="w-12 h-12 rounded-full mx-auto object-cover"
                            src={profilepic}
                            alt="profilepic" width="384" height="512" />
                    </div>
                    <div className="pl-4">
                        <p className="font-medium">{name}</p>
                        <div className="flex">
                            <p className="textColorMediumGrey text-sm">{time}</p>
                            {edited && <p className="textColorMediumGrey text-sm">&bull; Edited</p>}
                        </div>
                    </div>
                </div>
                <div className="text-sm">
                    &bull; &bull; &bull;
                </div>
            </div>
            <div className="flex rounded-lg p-4 postbox ">
                <div className="">
                    <p className="rounded-3xl text-xl iconbackground p-2">{icon}</p>
                </div>
                <p className="w-full bg-transparent ml-2 textColorMediumGrey">
                    {comment}
                </p>
            </div>
            <p className="textColorMediumGrey mb-2 mt-2 flex items-center"><ChatBubbleLeftIcon className="size-5 mr-2"/> {commentCount} comments</p>
        </div>
    }
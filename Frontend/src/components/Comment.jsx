import React from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { useNavigate } from 'react-router-dom'

const Comment = ({ comment }) => {
    const navigate = useNavigate();
    return (
        <div className='my-2'>
            <div className='flex gap-3 items-center'>
                <Avatar  onClick={() => {
                    navigate(`/profile/${comment?.author?._id}`)
                }} className="w-6 cursor-pointer h-6">
                    <AvatarImage src={comment?.author?.profilePicture} />
                    <AvatarFallback>CN</AvatarFallback>

                </Avatar>
                <h1 onClick={() => {
                    navigate(`/profile/${comment?.author?._id}`)
                }} className='font-semibold  cursor-pointer text-sm'>{comment?.author?.userName} <span className='font-normal pl-2'>{comment?.text}</span></h1>
            </div>
        </div>
    )
}

export default Comment
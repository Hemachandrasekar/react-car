import React from 'react'
import profilepic from "../../assets/images/profile-pic.svg"
import cover from "../../assets/images/cover.svg"
import Button from '../Button'

const ProfilePic = () => {
    return (
        <div>
            <p className='text-gray-900 font-semibold text-xl mb-5'>My Profile</p>
            <div className='bg-white relative'>
                <img src={cover} alt="cover" className='bg-cover w-full' />
                <img src={profilepic} alt="profilepic" className='absolute bottom-5 left-3' />
                <div className='flex justify-between ml-32 p-10'>
                    <div className='ml-10'>
                        <p className='text-gray-900 font-bold text-xl'>MeowKutty</p>
                        <p className='text-gray-400 font-normal text-sm'>Agent</p>
                    </div>
                    <Button title="Edit Profile" className="items-end" />
                </div>
            </div>
        </div>
    )
}

export default ProfilePic
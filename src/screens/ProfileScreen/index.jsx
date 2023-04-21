import React from 'react'
import PopularCar from '../../components/PopularCar'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import ProfilePic from '../../components/ProfilePic'


const ProfileScreen = () => {
    return (
        <div className='w-full '>
            <div className=' mx-14 my-8'>
                <ProfilePic />

                {/* popular car */}
                <div className='mt-10'>
                    <div className='flex justify-between '>
                        <p className='text-gray-400 font-semibold text-base'>Rented Car</p>
                    </div>
                    <div className='grid grid-cols-4 gap-6 mt-5'>
                        <PopularCar name="Koenigseg" type="Sport" />
                        <PopularCar name="Nissan GT-R" type="Sport" />
                        <PopularCar name="Rolls - Royce" type="Sport" />
                        <PopularCar name="Audi" type="Sport" />
                    </div>
                    <div className='flex justify-center mt-7'>
                        <Button title="Add More Cars for Rent" />
                    </div>
                </div>



                {/* footer */}


            </div>
            <Footer />
        </div>
    )
}

export default ProfileScreen
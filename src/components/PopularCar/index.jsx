import React from 'react'
import heart from '../../assets/images/heart.svg'
import pcar from '../../assets/images/p-car.svg'
import gasstation from '../../assets/images/gas-station.svg'
import car from '../../assets/images/Car.svg'
import profile from '../../assets/images/profile-2user.svg'
import Button from '../Button'

const PopularCar = ({ name, type }) => {
    return (
        <div className='bg-white rounded-lg p-5'>
            <div className='flex items-center justify-between  '>
                <p className='font-bold text-gray-900 text-xl'>{name}</p>
                <img src={heart} alt="heart" />
            </div>
            <p className='font-bold text-gray-400 text-sm'>{type}</p>
            <img src={pcar} alt="product car" className='px-3 py-4 flex justify-between' />
            {/* icons */}
            <div className='flex justify-between items-center my-5'>
                <div className='flex gap-1 items-center'>
                    <img src={gasstation} alt="gas station" />
                    <p className='text-gray-400 text-sm font-semibold'>70L</p>
                </div>
                <div className='flex gap-1 items-center'>

                    <img src={car} alt="car" />
                    <p className='text-gray-400 text-sm font-semibold'>Manual</p>
                </div>
                <div className='flex gap-1 items-center'>

                    <img src={profile} alt="profile-user" />
                    <p className='text-gray-400 text-sm font-semibold'>2People</p>
                </div>


            </div>

            <div className='flex justify-between items-center'>
                <p className='font-bold text-gray-900 text-xl'>$99.00/<span className='text-gray-400 text-sm'> day</span></p>
                <Button title="Rent Now" />
            </div>
        </div>
    )
}

export default PopularCar



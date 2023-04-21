import React from 'react'
import mark from '../../assets/images/mark.svg'

const LocationCard = ({ type }) => {
    return (
        <div className='bg-white p-7 rounded-lg flex-1 '>
            <div className='flex flex-row items-center'>
                <img src={mark} alt="mark" />
                <p className='ml-2 font-semibold text-base text-gray-900'>{type}</p>
            </div>
            <div className='flex flex-row justify-between mt-2'>
                <div>
                    <p className='text-base font-bold text-gray-900'>Location</p>
                    <div>
                        <p className='text-xs text-gray-400 '>
                            Select your city
                        </p>
                    </div>
                </div>

                <div>
                    <p className='text-base font-bold text-gray-900'>Date</p>
                    <div>
                        <p className='text-xs text-gray-400 '>
                            Select your date
                        </p>
                    </div>
                </div>

                <div>
                    <p className='text-base font-bold text-gray-900'>Time</p>
                    <div>
                        <p className='text-xs text-gray-400 '>
                            Select your time
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default LocationCard
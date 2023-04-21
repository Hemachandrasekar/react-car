import React from 'react'
import car1 from '../../assets/images/car1.svg'
import car2 from '../../assets/images/car2.svg'
import bg1 from '../../assets/images/bg1.svg'
import bg2 from '../../assets/images/bg2.svg'
import Button from '../Button'

const Header = () => {
    return (
        <div className='flex flex-row justify-between h-[360px] gap-10 '>
            <div className='bg-cover bg-center w-full rounded-lg' style={{ backgroundImage: `url(${bg1})` }}>
                <div className='w-1/2 m-6'>
                    <p className='text-white font-semibold text-4xl'>
                        The Best Platform for Car Rental
                    </p>
                    <p className='font-medium text-base text-white my-4 w-[284px]'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                    <div className='flex float-left'>

                        <Button title="Rental Car" />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src={car1} alt="car1" className='mt-6' />
                </div>
            </div>
            <div className='bg-cover bg-center w-full  rounded-lg' style={{ backgroundImage: `url(${bg2})` }}>
                <div className='w-1/2 m-6'>
                    <p className='text-white font-semibold text-4xl'>Easy way to rent a car at a low price</p>
                    <p className='font-medium text-base text-white my-4 w-[284px]'>Providing cheap car rental services and safe and comfortable facilities.</p>
                    <div className='flex float-left'>
                        <Button title="Rental Car" type="secondary" />
                    </div>
                </div>
                <div className='flex justify-center'>
                    <img src={car2} alt="car2" className='mt-6' />

                </div>
                <div>

                </div>

            </div>
        </div>
    )
}

export default Header
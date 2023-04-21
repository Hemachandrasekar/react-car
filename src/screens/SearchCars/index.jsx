import React from 'react'
import SideBar from '../../components/SideBar'
import LocationCard from '../../components/LocationCard'
import PopularCar from '../../components/PopularCar'
import swap from '../../assets/images/Swap.svg'
import Footer from '../../components/Footer'
import Button from '../../components/Button'

const SearchCars = () => {
    return (
        <div className='w-full'>
            <div className='grid grid-cols-5 '>
                {/* sidebar */}
                <SideBar />

                <div className='col-span-4'>
                    <div className='ml-10 mr-14 my-8'>

                        { /*location card*/}
                        <div className='flex flex-row  gap-11 items-center my-4'>
                            <LocationCard type="Pick-Up" />
                            <div>
                                <img src={swap} alt="swap" className='bg-blue-500 p-5 rounded-lg' />
                            </div>
                            <LocationCard type="Drop-Off" />
                        </div>



                        {/* Recommended Car */}
                        <div className='mt-10'>


                            <div className='grid grid-cols-4 gap-6 mt-5'>
                                <PopularCar name="All New Rush" type="Sport" />
                                <PopularCar name="CR - V" type="Sport" />
                                <PopularCar name="All New Terios" type="Sport" />
                                <PopularCar name="MG ZX Exclusice" type="Sport" />
                                <PopularCar name="All New Rush" type="Sport" />
                                <PopularCar name="CR - V" type="Sport" />
                                <PopularCar name="All New Terios" type="Sport" />
                                <PopularCar name="MG ZX Exclusice" type="Sport" />
                            </div>


                            <div className="my-10 flex justify-center ">


                                <Button title="Show more car" className="" />


                            </div>
                            {/* <p className='flex justify-end'>120 Car</p> */}
                        </div>




                    </div>
                </div>
            </div>
            {/* footer */}
            <Footer />
        </div>
    )
}

export default SearchCars
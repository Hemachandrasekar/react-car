import React from 'react'
import SideBar from '../../components/SideBar'
import PopularCar from '../../components/PopularCar'
import car2 from '../../assets/images/car2.svg'
import bg2 from '../../assets/images/bg2.svg'
import Footer from '../../components/Footer'
import Button from '../../components/Button'
import DetailCard from '../../components/DetailCard'

const DetailCar = () => {
    return (
        <div className='w-full'>
            <div className='grid grid-cols-5 '>
                {/* sidebar */}
                <SideBar />

                <div className='col-span-4'>
                    <div className='ml-10 mr-14 my-8'>

                        {/* Detail Car */}
                        <div className='grid grid-cols-2 gap-10'>
                            <div className='bg-cover bg-center w-full rounded-lg' style={{ backgroundImage: `url(${bg2})` }}>
                                <div className='w-3/4 m-6'>
                                    <p className='text-white font-semibold text-3xl'>
                                        Sports car with the best design and acceleration
                                    </p>
                                    <p className='font-medium text-base text-white my-4 w-[284px]'>Ease of doing a car rental safely and reliably. Of course at a low price.</p>
                                </div>
                                <div className='flex justify-center'>
                                    <img src={car2} alt="car1" className='my-6' />
                                </div>
                                {/* <div className='flex'>
                                    <img src={car2} alt="car1" className='my-6' />
                                    <img src={car2} alt="car1" className='my-6' />
                                    <img src={car2} alt="car1" className='my-6' />

                                </div> */}
                            </div>


                            {/* grid2 */}
                            <div><DetailCard name="Nissan GT-R" /></div>

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

export default DetailCar
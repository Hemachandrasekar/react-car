import React from 'react'
import Header from '../../components/Header'
import LocationCard from '../../components/LocationCard'
import PopularCar from '../../components/PopularCar'
import swap from '../../assets/images/Swap.svg'
import Footer from '../../components/Footer'
import Button from '../../components/Button'




const HomeScreen = () => {
  return (
    <div className='w-full'>
      <div className=' mx-14 my-8'>
        <Header />
        { /*location card*/}
        <div className='flex flex-row  gap-11 items-center my-4'>
          <LocationCard type="Pick-Up" />
          <div>
            <img src={swap} alt="swap" className='bg-blue-500 p-5 rounded-lg' />
          </div>
          <LocationCard type="Drop-Off" />
        </div>
        {/* popular car */}
        <div className='mt-10'>
          <div className='flex justify-between '>
            <p className='text-gray-400 font-semibold text-base'>Popular Car</p>
            <p className='text-blue-500 text-base font-semibold'>View all</p>
          </div>
          <div className='grid grid-cols-4 gap-6 mt-5'>
            <PopularCar name="Koenigseg" type="Sport" />
            <PopularCar name="Nissan GT-R" type="Sport" />
            <PopularCar name="Rolls - Royce" type="Sport" />
            <PopularCar name="Audi" type="Sport" />
          </div>
        </div>

        {/* Recommended Car */}
        <div className='mt-10'>
          <div className='flex justify-between '>
            <p className='text-gray-400 font-semibold text-base'>Recommended Car</p>
            <p className='text-blue-500 text-base font-semibold'>View all</p>
          </div>
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

        {/* footer */}


      </div>
      <Footer />
    </div>
  )
}

export default HomeScreen
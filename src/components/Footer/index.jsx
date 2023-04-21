import React from 'react'
// import line from '../../assets/images/Line.svg'

const Footer = () => {
    return (
        <div className='bg-white'>
            <div className='grid grid-cols-2 p-11'>
                <div>
                    <p className='font-bold text-blue-500 text-4xl mb-4'>MORENT</p>
                    <p className='w-[280px] text-gray-700    text-base'>Our vision is to provide convenience and help increase your sales business.</p>
                </div>
                <div className='grid grid-cols-3'>
                    <div>
                        <p className='text-gray-800 text-xl font-semibold'>About</p>
                        <div className='mt-4'>
                            <p className='mt-3 text-gray-700'>How it works </p>
                            <p className='mt-3 text-gray-700'>Featured </p>
                            <p className='mt-3 text-gray-700'>Partnership </p>
                            <p className='mt-3 text-gray-700'>Bussiness Relation</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-800 text-xl font-semibold'>Community</p>
                        <div className='mt-4'>
                            <p className='mt-3 text-gray-700'>Events </p>
                            <p className='mt-3 text-gray-700'>Blog </p>
                            <p className='mt-3 text-gray-700'>Podcast </p>
                            <p className='mt-3 text-gray-700'>Invite a friend</p>
                        </div>
                    </div>
                    <div>
                        <p className='text-gray-800 text-xl font-semibold'>Social</p>
                        <div className='mt-4'>
                            <p className='mt-3 text-gray-700 '>Discord </p>
                            <p className='mt-3 text-gray-700'> Instagram </p>
                            <p className='mt-3 text-gray-700'>Twitter </p>
                            <p className='mt-3 text-gray-700'>Facebook</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-b border-blue-50  mx-11'>
                {/* <img src={line} alt='line' /> */}
            </div>
            <div className="grid grid-cols-3 gap-4 p-11">
                <div className="col-span-2 ">
                    <p className='text-gray-800 text-base font-semibold'>©2022 MORENT. All rights reserved</p>
                </div>
                <div className='grid grid-cols-2 '>
                    <p className='text-gray-800 text-base font-semibold'>Privacy & Policy</p>
                    <p className='text-gray-800 text-base font-semibold'>Terms & Condition</p>
                </div>
            </div>
        </div>
    )
}

export default Footer

import React from 'react';
import Footer from '../../components/Footer';


const AddCar = () => {
    return (
        <div className='w-full'>
            <div className="flex justify-center">
                <div className="bg-white my-10 p-10 w-[900px]">
                    <div>
                        <p className='text-gray-900 font-bold text-xl'>Add a Car for Rent</p>
                        <p className='text-gray-400 font-medium text-sm'>Please enter your car info</p>
                        <p className='my-8 text-blue-700 font-bold text-lg'>Car Info</p>
                    </div>

                    <form className="mx-auto grid grid-cols-2 gap-4">
                        <div className="mb-4">
                            <label className="block mb-2 font-bold text-gray-700">Car Title</label>
                            <input
                                type="text"
                                name="cartitle"
                                id="cartitle"
                                placeholder='Your title'
                                className="bg-white-200 w-full px-3 py-2 leading-tight text-gray-900  rounded  appearance-none focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold text-gray-700">Car Brand</label>
                            <input
                                type="text"
                                name="brandname"
                                id="brandname"
                                placeholder='Brand name'
                                className="w-full px-3 py-2 leading-tight text-gray-900  rounded bg-white-200 appearance-none focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold text-gray-700">Rent Price</label>
                            <input
                                type="text"
                                name="rentprice"
                                id="rentprice"
                                placeholder='Price in dollar'
                                className="w-full px-3 py-2 leading-tight text-gray-900  rounded bg-white-200 appearance-none focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold text-gray-700">Capacity</label>
                            <input
                                type="text"
                                name="capacity"
                                id="capacity"
                                placeholder='Capacity in persons'
                                className="w-full px-3 py-2 leading-tight text-gray-900  rounded bg-white-200 appearance-none focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold text-gray-700">Car Type</label>
                            <input
                                type="text"
                                name="cartype"
                                id="cartype"
                                placeholder='Car Type'
                                className="w-full px-3 py-2 leading-tight text-gray-900  rounded bg-white-200 appearance-none focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block mb-2 font-bold text-gray-700">Location</label>
                            <input
                                type="text"
                                name="location"
                                id="location"
                                placeholder='Select your city'
                                className="w-full px-3 py-2 leading-tight text-gray-900  rounded bg-white-200 appearance-none focus:outline-none focus:shadow-outline"
                                required
                            />
                        </div>
                        <div className="col-span-2 mb-4">
                            <label class="inline-block mb-2 font-bold text-gray-700">Upload
                                image</label>
                            <div class="flex items-center justify-center w-full">
                                <label class="flex flex-col w-full h-42 border-2 border-dashed hover:bg-gray-100 hover:border-gray-300">
                                    <div class="flex flex-col items-center justify-center pt-7 pb-7">
                                        <svg xmlns="http://www.w3.org/2000/svg"
                                            class="w-12 h-10 text-gray-400 group-hover:text-gray-600" viewBox="0 0 20 20"
                                            fill="currentColor">
                                            <path fill-rule="evenodd"
                                                d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                                                clip-rule="evenodd" />
                                        </svg>
                                        <p class="pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                            Drag and drop an image, or Browse</p>
                                        <p class=" pt-1 text-sm tracking-wider text-gray-400 group-hover:text-gray-600">
                                            High resolution images (png, jpg, gif)</p>
                                    </div>
                                    <input type="file" class="opacity-0" />
                                </label>
                            </div>
                        </div>
                        <div className="col-span-2 text-end">
                            <button
                                type="submit"
                                className="inline-block items-end px-6 py-2 text-lg font-semibold text-white bg-blue-500 rounded shadow hover:bg-blue-600 focus:bg-blue-700 focus:outline-none focus:shadow-outline"
                            >
                                Register car
                            </button>
                        </div>
                    </form>
                </div>
            </div>






            <Footer />
        </div>
        // footer


    );
};

export default AddCar;



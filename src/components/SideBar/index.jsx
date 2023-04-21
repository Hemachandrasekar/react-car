
import React, { useState } from "react";
import './style.css'
// import search from "../../assets/images/search-normal.svg"

const SideBar = () => {
    const [filter, setFilter] = useState("");

    const handleFilterChange = (event) => {
        setFilter(event.target.value);
    };

    const handleChange = (event) => {
        const value = event.target.value;
        console.log(value); // Output the value to the console
    }

    return (
        <div className="w-full bg-white shadow-md my-8 rounded-lg p-6">
            <div className="mb-4">
                <label
                    className="block 
                    text-blue-100 text-xs font-bold uppercase mb-2">
                    Search
                </label>
                <input
                    type="text"
                    placeholder="Search by brand or title "
                    id="filter"
                    value={filter}
                    onChange={handleFilterChange}
                    className="
                    flex my-5 items-center bg-white-200  border border-gray-200/50
                    h-[46px] px-[14px] py-[16px] rounded-lg
                    md:px-[16px] md:py-[24px] lg:rounded-full
                    focus-within:border focus-within:border-blue-500
                   "
                // className="border border-gray-400 p-2 rounded w-full"
                />
                {/* <img src={search} alt="search" /> */}
            </div>

            {/* type filter */}
            <div className="mt-10">
                <p className="text-blue-100 text-xs font-bold uppercase my-4">Type</p>
                <ul className="list-none pl-0">
                    <li className="mt-4">
                        <label htmlFor="category1">
                            <input type="checkbox" id="category1" className="text-xl font-semibold text-gray-700 mr-2" />
                            Sport(10)
                        </label>
                    </li>
                    <li className="mt-4">
                        <label htmlFor="category2">
                            <input type="checkbox" id="category2" className="mr-2" />
                            SUV(12)
                        </label>
                    </li>
                    <li className="mt-4">
                        <label htmlFor="category3">
                            <input type="checkbox" id="category3" className="mr-2" />
                            MUV(12)
                        </label>
                    </li>
                    <li className="mt-4">
                        <label htmlFor="category3">
                            <input type="checkbox" id="category3" className="mr-2" />
                            Sedan(20)
                        </label>
                    </li>
                </ul>
            </div>

            {/* Capacity filter */}
            <div className="mt-10">
                <p className="text-blue-100 text-xs font-bold uppercase my-6">Capacity</p>
                <ul className="list-none pl-0">
                    <li className="mt-4">
                        <label htmlFor="category1">
                            <input type="checkbox" id="category1" className="text-xl font-semibold text-gray-700 mr-2" />
                            2Person(10)
                        </label>
                    </li>
                    <li className="mt-4">
                        <label htmlFor="category2">
                            <input type="checkbox" id="category2" className="mr-2" />
                            4Person(12)
                        </label>
                    </li>
                    <li className="mt-4">
                        <label htmlFor="category3">
                            <input type="checkbox" id="category3" className="mr-2" />
                            8orMore(12)
                        </label>
                    </li>
                    <li className="mt-2">
                        <label htmlFor="category3">
                            <input type="checkbox" id="category3" className="mr-2" />
                            Sedan(20)
                        </label>
                    </li>
                </ul>
            </div>

            {/* price */}
            <div className="mt-10">
                <p className="text-blue-100 text-xs font-bold uppercase my-4">Price</p>

                <input type="range" min="0" max="250" className="range" value="1" onChange={handleChange} />
                <p className="text-gray-700 font-semibold text-md mt-2">Max. $100.00</p>
            </div>
        </div>
    );
};

export default SideBar;
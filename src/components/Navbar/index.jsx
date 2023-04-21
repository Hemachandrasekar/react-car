import React from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../Button'




const Navbar = () => {

    return (
        <div className='bg-white shadow-sm  px-14 py-7'>
            <nav className='flex flex-row justify-between items-center'>
                <div className='text-blue-500 font-bold text-3xl uppercase'>Morent</div>
                <ul className='flex flex-row items-center'>
                    <li className='ml-7'>
                        <NavLink
                            to="/"
                            className={({ isActive }) => {
                                const active = isActive ? "text-blue-500 font-semibold" : "text-black font-medium"
                                return ` text-base ${active}`
                            }}

                        >Home</NavLink>
                    </li>
                    <li className='ml-7 '>
                        <NavLink to="/search" className={({ isActive }) => {
                            const active = isActive ? "text-blue-500 font-semibold" : "text-black font-medium"
                            return ` text-base ${active}`
                        }}>SearchCars</NavLink>
                    </li>
                    <li className='ml-7'>
                        <NavLink to="/add-car" className={({ isActive }) => {
                            const active = isActive ? "text-blue-500 font-semibold" : "text-black font-medium"
                            return ` text-base ${active}`
                        }}>AddCar</NavLink>
                    </li>
                    <li className='ml-7'>
                        <Button title="Login" />
                    </li>
                </ul>

            </nav>
        </div>
    )
}

export default Navbar
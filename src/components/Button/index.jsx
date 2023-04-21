import React from 'react'

const Button = ({ title, type }) => {
    return (
        <div className={`${type === "secondary" ? 'cursor-pointer bg-blue-300 px-4 py-2 rounded-md text-white flex font-semibold items-center' : 'cursor-pointer bg-blue-500 px-4 py-2 rounded-md text-white flex font-semibold items-center'}`}>{title}</div>
    )
}

export default Button
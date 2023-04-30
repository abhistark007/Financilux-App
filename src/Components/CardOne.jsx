import React from 'react'
import YourSvg from "../assets/iconmonstr-arrow-right-thin.svg";

function CardOne({ txt1, txt2 }) {
    return (
        <div className='flex flex-col gap-5'>
            <div className='flex gap-2 items-center max-lg:block'>
                <div className='w-6 h-6 rounded-full bg-white flex justify-center items-center max-lg:hidden'>
                    <img src={YourSvg} className="w-4 h-4" />
                </div>
                <p className='font-bold'>{txt1}</p>
            </div>
            <p>{txt2}</p>
        </div>
    )
}

export default CardOne
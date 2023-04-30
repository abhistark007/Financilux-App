import React from 'react'
import ButtonOne from './ButtonOne'

function NavBar() {
    return (
        <div className='flex justify-between mx-10 my-2'>
            {/* Left Half */}
            <div className='flex items-center gap-20'>
                <div className='flex gap-2 items-center'>
                    <img src={require('../assets/profits.png')} width="70px"></img>
                    <h1 className='font-bold cursor-pointer'>Financilux</h1>
                </div>

                <div>
                    <ul className='flex list-none gap-8 '>
                        <li className='cursor-pointer'>Platform</li>
                        <li className='cursor-pointer'>Features</li>
                        <li className='cursor-pointer'>How it Works</li>
                    </ul>
                </div>

            </div>

            {/* Right Half */}
            <div className='flex items-center gap-8'>
                <ButtonOne txt={"Get The App"}/>
                <div className='flex flex-col w-10 gap-2 cursor-pointer'>
                    <hr className='bg-black w-full h-1'/>
                    <hr className='bg-black w-full h-1'/>
                    <hr className='bg-black w-full h-1'/>
                </div>
            </div>
        </div>
    )
}

export default NavBar
import React from 'react'

function ButtonOne({txt}) {
  return (
    <div className='text-white text-center py-2 px-8 bg-black w-fit rounded-full cursor-pointer hover:bg-gray-400 duration-200
    ease-in-out'>
        {txt}
    </div>
  )
}

export default ButtonOne
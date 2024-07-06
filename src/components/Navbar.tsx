import React from 'react'
import { IoIosClose } from "react-icons/io";

function Navbar() {
  return (
    <div className='text-[50px] flex justify-end items-end w-full pb-10 md:pr-20 md:pb-20 2xl:text-[80px]'>
        <button><IoIosClose/></button>
    </div>
  )
}

export default Navbar
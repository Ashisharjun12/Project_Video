import React from 'react'
import { FiSearch } from "react-icons/fi";

const Navbar = () => {
  return (
    <nav className='w-full bg-black p-4 flex flex-row justify-between items-center'>
        
        <div className='cursor-pointer'>
            <h1 className='text-white ml-8'>Logo</h1>
        </div>

        <div className='flex items-center border border-white p-2 w-[350px]'>
            <FiSearch color='white' size={25} className='mr-2' />
            <h1 className='text-white'>Search</h1>
            <input 
                type="text" 
                placeholder='Search' 
                className='placeholder-black text-white bg-transparent w-[350px] outline-none'
            />
        </div>
        
        <div className='flex flex-row items-center mr-8 gap-4'>
          <div>
            <h1 className='text-white font-semibold cursor-pointer'>Log In</h1>
          </div>

          <div className='w-20 h-10 p-2 bg-[#38333F] ml-3 flex items-center justify-center cursor-pointer'>
          <div className='w-20 h-10 p-2 bg-[#AE7AFF] flex items-center justify-center cursor-pointer'>
            
            <h1 className='text-black font-bold'>SignUp</h1>
          </div>
          </div>
         
        </div>
        
    </nav>
  )
}

export default Navbar

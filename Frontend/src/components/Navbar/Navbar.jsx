import React from 'react';
import { FiSearch } from "react-icons/fi";
import { HiDotsVertical } from "react-icons/hi";
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  

  return (
    <>
      <nav className='w-full bg-black p-4 flex flex-row justify-between items-center border-b-[1.5px] border-white sticky top-0'>
        <div className='cursor-pointer'>
          <h1 className='text-white ml-8'>Logo</h1>
        </div>

        <div className='flex items-center border border-white p-2 w-[350px]'>
          <FiSearch color='white' size={25} className='mr-2' />
          
          <input
            type="text"
            placeholder='Search'

            className='placeholder-white  text-white bg-transparent w-[350px] outline-none'
          />
        </div>

        <div className='flex flex-row items-center gap-9 mr-3'>
          <HiDotsVertical color='white' size={20} />
          <div onClick={()=>{navigate('/Login')}}>
            <h1 className='text-white font-semibold cursor-pointer'>Log In</h1>
          </div>
          <div
            className='w-22 h-10 p-3 bg-[#AE7AFF] flex items-center justify-center cursor-pointer'
            onClick={()=>{ navigate('/Register')}}
          >
            <h1 className='text-black font-bold'>Sign Up</h1>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Navbar;

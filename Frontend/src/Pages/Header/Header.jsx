import React from 'react'
import Sidebar from '../../components/Sidebar/Sidebar'

const Header = () => {
  return (
    <>
      <div className='flex flex-row w-full max-h-screen gap-[39px] bg-black'>
        <Sidebar />
        <div>
          <h1 className='text-white'>header</h1>
        </div>

      </div>


    </>
  )
}

export default Header
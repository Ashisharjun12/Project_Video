import React from 'react'


const SideComp = ({ title,sideImg }) => {
  return (
    <div className='mb-2 mt-2 w-[248px] h-[40px] border-white px-[8px] py-[12px] border-[1px] items-center flex flex-row gap-[12px] cursor-pointer  '>
      {sideImg}
      <h1 className='text-white font-semibold hover:text-purple-500'>{title}</h1>
    </div>
  )
}

export default SideComp



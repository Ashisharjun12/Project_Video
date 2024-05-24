import React from 'react'

const TextInput = ({ title, placeholder, type, onclick, value ,className}) => {
  return (
    <div className='mb-2' onClick={onclick}>

      <h1 className='text-white font-medium  mb-1'>{title} *</h1>

      <div className={ ` ${className} flex items-center border border-white rounded-md p-2 w-[350px]`}>
        <input
          type={type}
          placeholder={placeholder} i9kuiif
          value={value}


          className='placeholder-white  text-white bg-transparent w-[350px]  outline-none'
        />
      </div>


    </div>
  )
}

export default TextInput
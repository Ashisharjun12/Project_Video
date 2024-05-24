import React from 'react'
import TextInput from '../TextInput/TextInput'

const Register = () => {
  return (
    <>

    
      <div className='w-full bg-black min-h-screen'>
        <div className='font-bold top-[20%] left-[35%] absolute'>

          <h1 className='text-white ml-[38%] mb-12'>Logo</h1>


          <form action="" method="post">


            
      <TextInput title={'Username'} placeholder={'Username'} type={'text'} className={'mb-6'}/>
      <TextInput title={'fullname'} placeholder={'fullname'} type={'text'}/>
      <TextInput title={'Email'} placeholder={'Email'} type={'text'}/>
      <TextInput title={'Password'} placeholder={'Password'} type={'text'}/>
      <TextInput title={'Confirm Password'} placeholder={'Confirm Password'} type={'text'}/>


          </form>







        </div>




      </div>
    </>

  )
}

export default Register
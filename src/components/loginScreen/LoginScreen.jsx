import React from 'react'
import Heading from '../utils/Heading'
import InputBox from '../utils/InputBox'
import PopOutScreen from '../popOutScreen/PopOutScreen'
import {usePopOut} from "../../context/popOutContext"

export default function LoginScreen() {
  const {isOpen,toggleIsOpen,toggleOpenSection}=usePopOut()

const body=(
   <>
   <Heading title="Welcome Back to Air Bnd" subtitle="Log in to account"/>
   <InputBox type="text" placeholder='Email'/>
   <InputBox type="password" placeholder='Password'/>
   </>
)
const footer=(
  <>
  <div className=' text-neutral-500 text-center mt-4'>
    <div onClick={()=>{
toggleOpenSection("register")
    }} className=' flex gap-2 justify-center cursor-pointer '>
    <span>Dont have an account?</span>
    <span className=' text-neutral-800 font-semibold'>Create</span>
    </div>

  </div>
  </>
)



  return (
    <>

    {
      isOpen &&(<PopOutScreen title="Register" buttonPlaceHolder="continue" body={body} 
      footer={footer}
      />)
    }
    </>
  )
}
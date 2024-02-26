import React from 'react'
import Heading from '../utils/Heading'
import InputBox from '../utils/InputBox'
import PopOutScreen from '../popOutScreen/PopOutScreen'
import {usePopOut} from "../../context/popOutContext"
import {FcGoogle} from "react-icons/fc"
import { AiFillGithub } from 'react-icons/ai'
import SectionG from '../utils/SectionG'

export default function RegisterScreen() {
  const {isOpen,toggleIsOpen,toggleOpenSection}=usePopOut()

const body=(
   <>
   <Heading title="Welcome to Air Bnd" subtitle="Create your account"/>
   <InputBox type="text" placeholder='Email'/>
   <InputBox type="text"  placeholder='Username'/>
   <InputBox type="password"  placeholder='Password'/>
   </>
)
const footer=(
  <>
    <SectionG lable="Continue with Google" Logo={FcGoogle}/>
  <SectionG lable="Continue with Github" Logo={AiFillGithub}/>

  <div className=' text-neutral-500 text-center mt-4'>
    <div onClick={()=>{
toggleOpenSection("login")
    }} className=' flex gap-2 justify-center cursor-pointer '>
    <span>Already have an account?</span>
    <span className=' text-neutral-800 font-semibold'>Log in</span>
    </div>

  </div>
  </>
)



  return (
    <>

    {
      isOpen &&(<PopOutScreen title="Register" buttonPlaceHolder="continue" footer={footer} body={body}/>)
    }
    </>
  )
}

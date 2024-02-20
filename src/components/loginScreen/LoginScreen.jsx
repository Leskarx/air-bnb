import React from 'react'
import Heading from '../Heading'
import InputBox from '../InputBox'
import PopOutScreen from '../popOutScreen/PopOutScreen'
import {usePopOut} from "../../context/popOutContext"

export default function LoginScreen() {
  const {isOpen,toggleIsOpen}=usePopOut()

const body=(
   <>
   <Heading title="Welcome Back to Air Bnd" subtitle="Log in to account"/>
   <InputBox type="text" placeholder='Email'/>
   <InputBox type="password" placeholder='Password'/>
   </>
)



  return (
    <>

    {
      isOpen &&(<PopOutScreen title="Register" buttonPlaceHolder="continue" body={body}/>)
    }
    </>
  )
}
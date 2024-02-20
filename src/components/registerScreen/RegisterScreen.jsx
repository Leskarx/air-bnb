import React from 'react'
import Heading from '../Heading'
import InputBox from '../InputBox'
import PopOutScreen from '../popOutScreen/PopOutScreen'
import {usePopOut} from "../../context/popOutContext"

export default function RegisterScreen() {
  const {isOpen,toggleIsOpen}=usePopOut()

const body=(
   <>
   <Heading title="Welcome to Air Bnd" subtitle="Create your account"/>
   <InputBox type="text" placeholder='Email'/>
   <InputBox type="name" placeholder='Username'/>
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

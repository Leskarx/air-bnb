import React from 'react'
import Heading from '../Heading'
import InputBox from '../InputBox'
import PopOutScreen from '../popOutScreen/PopOutScreen'

export default function RegisterScreen() {

const body=(
   <>
   <Heading title="Welcome to Air Bnd" subtitle="Create your account"/>
   <InputBox placeholder='Email'/>
   <InputBox placeholder='Username'/>
   <InputBox placeholder='Password'/>
   </>
)



  return (
    <>

    <PopOutScreen title="Register" buttonPlaceHolder="continue" body={body}/>
    </>
  )
}

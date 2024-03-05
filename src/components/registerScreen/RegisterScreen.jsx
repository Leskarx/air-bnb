"use client";
import React from 'react'
import Heading from '../utils/Heading'
import InputBox from '../utils/InputBox'
import PopOutScreen from '../popOutScreen/PopOutScreen'
import {usePopOut} from "../../context/popOutContext"
import {FcGoogle} from "react-icons/fc"
import { AiFillGithub } from 'react-icons/ai'
import SectionG from '../utils/SectionG'
import { useForm } from "react-hook-form"
import axios from 'axios';
import toast from 'react-hot-toast';

export default function RegisterScreen() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(
    {
      defaultValues:{
        Email:"",
        Username:"",
        Password:"",

      }
    }
  )
  const {isOpen,toggleIsOpen,toggleOpenSection}=usePopOut()
  const onSubmit = (data) => {
   
    axios.post('/api/register', data)
    .then(function (response) {
      toast.success('Successfully toasted!')
      toggleIsOpen()
    })
    .catch(function (error) {
      toast.error("This didn't work.")
    });

  }

const body=(
   <>
   <Heading title="Welcome to Air Bnd" subtitle="Create your account"/>
   <InputBox register={register} errors={errors}  type="text" placeholder='Email'/>
   <InputBox register={register} errors={errors} type="text"  placeholder='Username'/>
   <InputBox register={register} errors={errors} type="password"  placeholder='Password'/>
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
      isOpen &&(<PopOutScreen onSubmit={handleSubmit(onSubmit)} title="Register" buttonPlaceHolder="continue" footer={footer} body={body}/>)
    }
    </>
  )
}

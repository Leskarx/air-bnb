import React from 'react'
import Heading from '../utils/Heading'
import InputBox from '../utils/InputBox'
import PopOutScreen from '../popOutScreen/PopOutScreen'
import {usePopOut} from "../../context/popOutContext"
import SectionG from '../utils/SectionG'
import {FcGoogle} from "react-icons/fc"
import { AiFillGithub } from 'react-icons/ai'
import { useForm } from "react-hook-form"
import { useSession, signIn, signOut } from "next-auth/react"
import toast from 'react-hot-toast';
import { useRouter } from 'next/navigation'

export default function LoginScreen() {
  const {isOpen,toggleIsOpen,toggleOpenSection}=usePopOut()
  const router=useRouter()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm(
    {
      defaultValues:{
        Email:"",
        Password:"",

      }
    }
  )
  const onSubmit =async (data) => {
    const user=await signIn('credentials', { ...data,redirect: false })

    if(user.ok){
      toast.success("logined success")
      toggleIsOpen()
      router.refresh()
    }
  

  }

const body=(
   <>
   <Heading title="Welcome Back to Air Bnd" subtitle="Log in to account"/>
   <InputBox register={register} errors={errors}  type="text" placeholder='Email'/>
   <InputBox register={register} errors={errors} type="password"  placeholder='Password'/>
   </>
)
const footer=(
  <>
   <SectionG lable="Continue with Google" Logo={FcGoogle}/>
  <SectionG lable="Continue with Github" Logo={AiFillGithub}/>
  <div className=' text-neutral-500 text-center mt-4'>
    <div onClick={()=>{
toggleOpenSection("register")
    }} className=' flex gap-2 justify-center cursor-pointer '>
    <span>Don&apos;t have an account?</span>
    <span className=' text-neutral-800 font-semibold'>Create</span>
    </div>

  </div>
  </>
)



  return (
    <>

    {
      isOpen &&(<PopOutScreen title="Register" onSubmit={handleSubmit(onSubmit)} buttonPlaceHolder="continue" body={body} 
      footer={footer}
      />)
    }
    </>
  )
}
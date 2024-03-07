"use client";
import toast, { Toaster } from 'react-hot-toast';
import {PopOutprovider} from "../../context/popOutContext"
import {useState} from 'react'
import PopOutScreen from "@/components/popOutScreen/PopOutScreen";
import RegisterScreen from "@/components/registerScreen/RegisterScreen";
import NavBar from "../navbar/NavBar";
import LoginScreen from "../loginScreen/LoginScreen";
import { SessionProvider } from 'next-auth/react';

export default function Main({currentUser}) {
  
    const [isOpen,setOpen]=useState(false)
    const [openSection,setopenSection]=useState("login")
    function toggleOpenSection(value){
        setopenSection(value)

    }
    function toggleIsOpen(){
        setOpen((prev)=>!prev)

    }

  return (
    <SessionProvider>
      <PopOutprovider value={{isOpen,toggleIsOpen,openSection,toggleOpenSection}}>
    {
       ( openSection=="login")?  <LoginScreen/>:<RegisterScreen/>
    }

<Toaster
  position="top-center"
  reverseOrder={false}
/>
 
        <NavBar currentUser={currentUser?.user?.name} />

   </PopOutprovider>

    </SessionProvider>
   
  )
}

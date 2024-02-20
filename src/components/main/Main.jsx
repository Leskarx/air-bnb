"use client";
import {PopOutprovider} from "../../context/popOutContext"
import {useState} from 'react'
import PopOutScreen from "@/components/popOutScreen/PopOutScreen";
import RegisterScreen from "@/components/registerScreen/RegisterScreen";
import NavBar from "../navbar/NavBar";

export default function Main() {
    const [isOpen,setOpen]=useState(false)
    function toggleIsOpen(){
        setOpen((prev)=>!prev)

    }

  return (
   <PopOutprovider value={{isOpen,toggleIsOpen}}>

   <RegisterScreen/>
        <NavBar/>

   </PopOutprovider>
  )
}

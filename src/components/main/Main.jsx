"use client";
import {PopOutprovider} from "../../context/popOutContext"
import {useState} from 'react'
import PopOutScreen from "@/components/popOutScreen/PopOutScreen";
import RegisterScreen from "@/components/registerScreen/RegisterScreen";
import NavBar from "../navbar/NavBar";
import LoginScreen from "../loginScreen/LoginScreen";

export default function Main() {
    const [isOpen,setOpen]=useState(false)
    const [openSection,setopenSection]=useState("login")
    function toggleOpenSection(value){
        setopenSection(value)

    }
    function toggleIsOpen(){
        setOpen((prev)=>!prev)

    }

  return (
   <PopOutprovider value={{isOpen,toggleIsOpen,openSection,toggleOpenSection}}>
    {
       ( openSection=="login")?  <LoginScreen/>:<RegisterScreen/>
    }

   
 
        <NavBar/>

   </PopOutprovider>
  )
}

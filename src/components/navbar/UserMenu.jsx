"use client";
import React from 'react'
import {useState} from 'react'
// import { FaSearch } from "react-icons/fa";
import { AiOutlineMenu} from "react-icons/ai";
import Avatar from '../utils/Avatar';
import MenuItems from './MenuItems';
import {usePopOut} from "../../context/popOutContext"




export default function UserMenu() {
  const {isOpen,toggleIsOpen,toggleOpenSection}=usePopOut()
  console.log(isOpen);

    const [toggle,setToggle]=useState(false)
  return (
    <div >
    <button onClick={()=>{
       setToggle((prev)=>!prev)
     }} className='p-3 bg-white sm:py-1 sm:px-2 hover:shadow-md transition  cursor-pointer *: rounded-full border border-neutral-200 shadow-md flex justify-center items-center gap-3 relative '>
     <AiOutlineMenu />
     <div className='hidden sm:block'>
      <Avatar/>
    

     </div>
    
 {/* hovered menued */}
     {
       toggle &&(
         <div className=' top-12 right-0 w-[40vw] md:w-[350%]  shadow-md rounded-xl bg-white absolute overflow-hidden text-sm'>
          <div className='flex flex-col bg-green-200'>
            <>
            <div onClick={()=>{
              toggleOpenSection("login")
            }}>
            <MenuItems click={toggleIsOpen} name="Log in"/>
            </div>
            <div onClick={()=>{
              toggleOpenSection("register")
            }}>
            <MenuItems click={toggleIsOpen} name="Sign up"/>
            </div>
           
           
           
            </>

          </div>
 
     </div>
       )
     }
 
     </button>
    </div>
  )
}

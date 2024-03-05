"use client";
import React from 'react'
import {IoMdClose} from "react-icons/io" 
import ButtonC from './ButtonC'
import {usePopOut} from "../../context/popOutContext"
import { motion } from 'framer-motion';
export default function PopOutScreen({onSubmit,title="Hello world",buttonPlaceHolder,body,footer,
}) {

  function handleSubmit(){
    onSubmit()
  }
  const {isOpen,toggleIsOpen}=usePopOut()
  const variants = {
    open: { 
      opacity: 1,
       y: 0
       },
    closed: {
       opacity: 0,
        y:100 
       },
  }
  return (
    <div className=" fixed bg-neutral-800/70 z-50 inset-0">
     <div className='flex items-center justify-center w-full h-full'>
      <motion.div className='  w-full sm:w-[34%] h-screen sm:h-auto sm:relative border-b-[1px]  rounded-md shadow-md bg-white'
      initial={{
        y:100,
        opacity:0,
        // scale:0.8
      }}
      animate={isOpen ? "open" : "closed"}
      variants={variants}
      transition={{
        delay:0.0500
      }}
    
      

      >
      <header className='flex sm:mt-0 border-b-2  mt-5 p-6 items-center justify-center'>
        <button onClick={()=>{
          toggleIsOpen()
        }} className=' absolute p-1 border-0 hover:opacity-70 
        transition left-9'>
          <IoMdClose/>

        </button>
        <p className=' text-lg font-semibold'>
          {title}
        </p>
      </header>
      <main className='p-6 relative'>
        {body}

      </main>
      <footer className='p-6 flex flex-col gap-4  relative'>
        <ButtonC onSubmit={handleSubmit} buttonPlaceHolder={buttonPlaceHolder}/>

{footer}

      </footer>

      </motion.div>
    

     </div>
    </div>
  )
}

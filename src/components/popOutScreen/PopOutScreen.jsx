"use client";
import React from 'react'
import {IoMdClose} from "react-icons/io" 
import ButtonC from './ButtonC'

export default function PopOutScreen({title="Hello world",buttonPlaceHolder,body}) {
  return (
    <div className=" fixed bg-neutral-800/70 z-50 inset-0">
     <div className='flex items-center justify-center w-full h-full'>
      <section className='  w-full sm:w-[45%] h-screen sm:h-auto sm:relative border-b-[1px]  rounded-md shadow-md bg-white'>
      <header className='flex p-6 items-center justify-center'>
        <button className=' absolute p-1 border-0 hover:opacity-70 
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
      <footer className='p-6  relative'>
        <ButtonC buttonPlaceHolder={buttonPlaceHolder}/>



      </footer>

      </section>
    

     </div>
    </div>
  )
}

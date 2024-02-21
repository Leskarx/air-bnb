"use client";
import {useState} from 'react'

export default function InputBox({placeholder="placeholder",type}) {
const [input,setInput]=useState("")

  return (
    <div className='relative mt-4'>
      <input type={type} name={placeholder.toLowerCase()} value={input} onChange={(event)=>{
        setInput(event.target.value)

      }} placeholder=" " id={placeholder} className=' peer w-full px-2 py-3 rounded-lg border border-black outline-none' />
      <label for={placeholder}  className={(input=="")?" cursor-text transform duration-150 transtion z-10 text-md peer-focus:bg-white  peer-focus:scale-75 peer-focus:top-0  absolute top-1/2 left-2 -translate-y-1/2  origin-[0] ":"z-10 text-md scale-75 absolute top-0 left-2 -translate-y-1/2   origin-[0] bg-white"}>{placeholder}</label>
      
    </div>
  )
}


//  z-10 text-md scale-75 absolute top-0 left-2   origin-[0] bg-white
"use client";
import React from 'react'

export default function ButtonC({onSubmit,buttonPlaceHolder="Submit"}) {
  return (
   <button 
   type='submit'
   onClick={onSubmit}
   className=' w-full p-3 rounded-lg mb-4 text-white
   font-semibold hover:opacity-80 h-full bg-rose-500'>
     
{buttonPlaceHolder}
   </button>
  )
}

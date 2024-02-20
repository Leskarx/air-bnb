"use client";
import React from 'react'

export default function ButtonC({buttonPlaceHolder="Submit"}) {
  return (
   <button className=' w-full p-3 rounded-lg text-white
   font-semibold hover:opacity-80 h-full bg-rose-500'>
     
{buttonPlaceHolder}
   </button>
  )
}

"use client";
import React from 'react'

export default function MenuItems({name}) {
  return (
   <div className=' text-start hover:bg-neutral-200 transition px-4 font-bold py-3 w-full bg-white'>
     <p className=' '>
        {name}
    </p>
   </div>
  )
}

"use client";
import React from 'react'
import { BiSearch } from 'react-icons/bi';

export default function SearchBar() {
  return (
    <div className=' w-full sm:w-auto border-[1px]
    rounded-full shadow-sm hover:shadow-xl transition cursor-pointer
    '>
<div
className='flex flex-row items-center justify-between sm:justify-center'>
    <main className='text-sm   font-bold px-6'>
        Anywhere
    </main>
    <main className='hidden sm:block border-gray-500/60 border-x-[1px] sm:text-sm font-bold px-6'>
        Any Week
    </main>
    <div className=' text-sm pl-6 pr-2 text-gray-600 flex items-center gap-3'>
<div className='hidden sm:block  '>
    Add Guests

</div>
<div className=' p-2  bg-rose-500 rounded-full text-white'>
    <BiSearch size={18}/>

</div>
    </div>

</div>
    </div>
  )
}

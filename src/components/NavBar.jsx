"use client";
import Image from 'next/image'
import {useState} from 'react'
import { FaSearch } from "react-icons/fa";
import { CgProfile } from "react-icons/cg";
import { GiHamburgerMenu } from "react-icons/gi";


export default function NavBar() {
  const [toggle,setToggle]=useState(false)
  return (
   <main className=' w-full   fixed bg-blue-200 h-[6rem] sm:h-[5rem] shadow-md '>
    <section className=' h-full w-[90%] absolute left-1/2 -translate-x-1/2 flex  items-center justify-between'>
    <Image
  
      src="https://seeklogo.com/images/A/airbnb-logo-3023AC4CBA-seeklogo.com.png"
      width={100}
      height={100}
      quality={95}
      alt="Picture of the author"
    />

    {/* search division */}
    <div className='relative shadow-md rounded-full border border-black/10 hover:shadow-lgz '>
    <input placeholder='Destinition' className=' w-[18rem] sm:w-[24.875rem] h-[2.98rem] bg-white shadow-md rounded-full sm:block  hidden   outline-none px-5'>
 </input>
  <div className=' flex justify-center items-center p-2 bg-[#FF385C] rounded-full absolute right-2 text-white top-1/2 -translate-y-1/2'>
  <FaSearch className='cursor-pointer' />
  </div>


    </div>

    {/* login signup button */}
    <button onClick={()=>{
      setToggle((prev)=>!prev)
    }} className='w-[5.35rem] hover:shadow-lg cursor-pointer *:  text-3xl h-[3rem] rounded-full border border-black/10 shadow-md flex justify-center items-center gap-2 relative '>
    <GiHamburgerMenu />
    <CgProfile />
{/* hovered menued */}
    {
      toggle &&(
        <div className='  h-60 top-14 right-0 w-72  shadow-xl rounded-lg bg-white absolute overflow-visible border-black/10 border'>

    </div>
      )
    }

    </button>

   
        
    </section>


   </main>
  )
}

import React from 'react'
import { useSession, signIn, signOut } from "next-auth/react"

export default function SectionG({lable,Logo,provider}) {
function handleCick(provider){
  signIn(provider)

}

  return (
    <section onClick={()=>{
      handleCick(provider)
    }} className='cursor-pointer relative items-center gap-1 flex justify-center  border-2 border-black rounded-lg py-3 font-semibold'>
 <Logo className=' absolute left-4' size={24}/>
<p>
  {lable}
</p>
  </section>
  )
}

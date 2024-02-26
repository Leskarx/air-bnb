import React from 'react'

export default function SectionG({lable,Logo}) {
  return (
    <section className='cursor-pointer relative items-center gap-1 flex justify-center  border-2 border-black rounded-lg py-3 font-semibold'>
 <Logo className=' absolute left-4' size={24}/>
<p>
  {lable}
</p>
  </section>
  )
}

import React from 'react'

export default function Heading({title,subtitle}) {
  return (
    <div className=' text-start'>
        <p className=' text-2xl font-bold'>
            {title}
        </p>
        <p className=' font-light text-neutral-500 mt-2'>
            {subtitle}
        </p>
      
    </div>
  )
}

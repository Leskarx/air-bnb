import React from 'react'

export default function InputBox({placeholder="placeholder",type}) {
  return (
    <div className=' mt-2'>
      <input type={type} placeholder={placeholder} className=' w-full px-2 py-3 rounded-lg border border-black outline-none' />
    </div>
  )
}

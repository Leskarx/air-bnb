import React from 'react'

export default function InputBox({placeholder="placeholder"}) {
  return (
    <div className=' mt-2'>
      <input placeholder={placeholder} type="text" className=' w-full px-2 py-3 rounded-lg border border-black outline-none' />
    </div>
  )
}

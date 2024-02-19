"use client";
import React from 'react'
import Image from 'next/image';

export default function Avatar() {
  return (
  <Image src="/placeHOlder.jpg"
  className='rounded-full'
  height={30}
  width={30}
  alt="avatar"
  >

  </Image>
  )
}

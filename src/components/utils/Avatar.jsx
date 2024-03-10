"use client";
import React from 'react'
import Image from 'next/image';

export default function Avatar({currentUser}) {
  console.log("%%%%%%%%%",currentUser);
  return (
  <Image src={currentUser?.user?.image|| "/placeHOlder.jpg"}
  className='rounded-full'
  height={30}
  width={30}
  alt="avatar"
  >

  </Image>
  )
}

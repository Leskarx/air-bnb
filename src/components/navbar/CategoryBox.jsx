"use client";
import React from 'react'
import { useSearchParams } from 'next/navigation'
import { useRouter } from 'next/navigation';
import qs from 'query-string';

export default function CategoryBox({label,Icon,description,selectedCategory}) {
  const params=useSearchParams();
  const router=useRouter();

  // console.log("parmssssssssssssss",params.toString());

  // console.log("query.............",router.query);

  const handleClick=()=>{
    const currentQueryObj=qs.parse(params.toString())
  

    // console.log("////////////////////",qs.parse("foo=bar"));

   const updatedQueryObj={
      ...currentQueryObj,
      category:label
    }
    if(currentQueryObj?.category==label){
      delete updatedQueryObj.category
    }
   const url= qs.stringifyUrl({
      url:'/',
      query:updatedQueryObj
    })
    router.push(url)

  }
  
  return (
  <>
  
<div  onClick={handleClick} title={description} className={` cursor-pointer flex justify-center items-center flex-col ${(selectedCategory==label)?" border-b-2 border-black":"border-b-2 border-black/0"}`}>
<Icon size={26}/>
  <p>{label}</p>
</div>
  </>
  )
}

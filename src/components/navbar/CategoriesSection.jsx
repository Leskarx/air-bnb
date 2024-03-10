import React from 'react'
import CategoryBox from './CategoryBox'
import {TbBeach,TbMountain,TbPool} from "react-icons/tb"
import {GiBoatFishing, GiCastle, GiForestCamp, GiIsland, GiWindmill} from "react-icons/gi"
import {FaSkiing} from "react-icons/fa"
import {MdOutlineVilla} from "react-icons/md"
import { useSearchParams } from 'next/navigation'




export default function CategoriesSection() {
    const params=useSearchParams();
    const selectedCategory=params?.get("category")

    const categories=[
    {
        label:"Beach",
        icon:TbBeach,
        description:"This property is close to Beach"

    },
    {
        label:"windmills",
        icon:GiWindmill,
        description:"This property is close to windmills"


    },
    {
        label:"Modern",
        icon:MdOutlineVilla,
        description:"This property is modern"
  },
  {
    label:"Countryside",
    icon:TbMountain,
    description:"This property is close to Mountains"
},
{
    label:"Pools",
    icon:TbPool,
    description:"This property is close to Mountains"
},
{
    label:"Island",
    icon:GiIsland,
    description:"This property is close to Mountains"
},  {
    label:"Lake",
    icon:GiBoatFishing,
    description:"This property is close to Mountains"
},
{
    label:"Skiing",
    icon:FaSkiing,
    description:"This property is close to Mountains"
},
{
    label:"Castles",
    icon:GiCastle,
    description:"This property is close to Mountains"
},
{
    label:"Camping",
    icon:GiForestCamp,
    description:"This property is close to Mountains"
},

]


  return (
    <div className=" -z-10  top-20 p-3  w-screen absolute left-1/2 -translate-x-1/2 
    flex justify-between items-center  gap-4 overflow-y-hidden overflow-x-auto
    
    ">
    {
        categories.map(({label,icon,description})=>{
            return(
                <CategoryBox selectedCategory={selectedCategory} key={label} label={label} Icon={icon} description={description}/>
            )
        })
    }
    </div>
  )
}

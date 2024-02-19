import Image from 'next/image'
import Link from 'next/link';
import SearchBar from '../navbar/SearchBar';
import UserMenu from './UserMenu';


export default function NavBar() {
 
  return (
   <main className=' w-full bg-white fixed h-[5rem] shadow-md '>
    
    <section className=' h-full w-[90%] absolute left-1/2 -translate-x-1/2 flex  items-center gap-3  sm:justify-between justify-center'>
  <Link href="/">
  <Image
  className=' hidden sm:block cursor-pointer'
  
  src="https://seeklogo.com/images/A/airbnb-logo-3023AC4CBA-seeklogo.com.png"
  width={100}
  height={100}
  quality={95}
  alt="Logo Image"
/>
  </Link>

 <SearchBar/>

    {/* login signup button */}
 <UserMenu/>

   
        
    </section>


   </main>
  )
}

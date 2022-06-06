import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState,useEffect } from 'react'






const Navbar = () => {
  
  let myref= useRef();
  const [hamactive, setHamactive] = useState(false)
  useEffect(() => {
    document.addEventListener('mousedown',(event)=>{
    if(!myref.current.contains(event.target))
      setHamactive(false)
    })
  
  }, [])
  

  return (
    <>
      
      <div ref={myref} className='w-full h-18 lg:h-22 flex flex-col sticky lg:flex-row p-2 top-0 bg-white items-center shadow-md z-99 md:text-lg  '>
      <div className="flex w-full lg:w-1/4 justify-between ">
        <div className='flex items-center '>
          <img className="rounded-lg h-14 w-16  lg:h-18 lg:w-20 r" src="/mylogo.png" alt="Geekcell.in" />
          <p className='m-2 font-medium text-purple-700'><Link href={'/'}>Geekcell.in</Link></p>
        </div>
        <button  className='h-9 my-auto ' onClick={() => setHamactive(!hamactive)}><div className="space-y-1 p-2 self-center rounded-md lg:hidden border-2 border-purple-700">
          <div className="w-6 h-0.5 bg-purple-700"></div>
          <div className="w-6 h-0.5 bg-purple-700"></div>
          <div className="w-6 h-0.5 bg-purple-700"></div>
        </div></button>
      </div>
      <ul className={hamactive ? "mynavulphone " : "mynavulinactive lg:mynavul " }>
        <li onClick={()=>setHamactive(false)} className={'hover:bg-purple-700  hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lx:text-lg  xl:mx-2  2xl:text-xl'} ><Link  href={'/'}><a>Home</a></Link></li>
        <li onClick={()=>setHamactive(false)} className={'hover:bg-purple-700  hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lx:text-lg  xl:mx-2  2xl:text-xl'} ><Link  href={'/Programming'}><a>Programming</a></Link></li>
        <li onClick={()=>setHamactive(false)} className={'hover:bg-purple-700  hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lx:text-lg  xl:mx-2  2xl:text-xl'} ><Link  href={'/Technews'}><a>Tech News</a></Link></li>
        <li onClick={()=>setHamactive(false)} className={'hover:bg-purple-700  hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lx:text-lg  xl:mx-2  2xl:text-xl'} ><Link  href={'/Launchpad'}><a>Launch Pad</a></Link></li>
        <li onClick={()=>setHamactive(false)} className={'hover:bg-purple-700  hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lx:text-lg  xl:mx-2  2xl:text-xl'} ><Link  href={'/Guides'}><a>Guides</a></Link></li>
        <li onClick={()=>setHamactive(false)} className={'hover:bg-purple-700  hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lx:text-lg  xl:mx-2  2xl:text-xl'} ><Link  href={'/Finance'}><a>Finance</a></Link></li>
        {/* <li onClick={()=>setHamactive(false)} className={'hover:bg-purple-700  hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lx:text-lg  xl:mx-2  2xl:text-xl'} ><Link  href={'/Aboutus'}><a>About Us</a></Link></li> */}
      </ul>
      {/* <Link href={'/Register'}><div className=" bg-purple-700 absolute right-4 m-2 h-8 w-20 bg rounded-md text-center py-1 font-semibold cursor-pointer">Login</div></Link> */}

    </div></>

  )
}

export default Navbar

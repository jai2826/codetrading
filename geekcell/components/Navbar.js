import React, { useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState,useEffect } from 'react'
import SearchBar from './SearchBar'






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
          <p className='m-2 font-medium text-purple-700'><Link href={'/'}>Geekcell</Link></p>
        </div>
        <button name='menu' className='h-9 my-auto ' onClick={() => setHamactive(!hamactive)}><div className="space-y-1 p-2 self-center rounded-md lg:hidden border-2 border-purple-700">
          <div className="w-6 h-0.5 bg-purple-700"></div>
          <div className="w-6 h-0.5 bg-purple-700"></div>
          <div className="w-6 h-0.5 bg-purple-700"></div>
        </div></button>
      </div>
      <ul className={hamactive ? "mynavulphone " : "mynavulinactive lg:mynavul " }>
        <li onClick={()=>setHamactive(false)} className={'hover:bg-purple-700 max-w-max hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lg:text-lg  xl:mx-2  2xl:text-xl '} ><Link  href={'/'}><a>Home</a></Link></li>
        <li onClick={()=>setHamactive(false)} className={'hover:bg-purple-700 max-w-max hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lg:text-lg  xl:mx-2  2xl:text-xl '} ><Link  href={'/programming'}><a>Programming</a></Link></li>
        <li onClick={()=>setHamactive(false)} className={'hover:bg-purple-700 max-w-max hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lg:text-lg  xl:mx-2  2xl:text-xl '} ><Link  href={'/techhub'}><a>Tech Hub</a></Link></li>
        <li onClick={()=>setHamactive(false)} className={'hover:bg-purple-700 max-w-max hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lg:text-lg  xl:mx-2  2xl:text-xl '} ><Link  href={'/launchpad'}><a>Launch Pad</a></Link></li>
        <li onClick={()=>setHamactive(false)} className={'hover:bg-purple-700 max-w-max hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lg:text-lg  xl:mx-2  2xl:text-xl '} ><Link  href={'/guides'}><a>Guides</a></Link></li>
        <li onClick={()=>setHamactive(false)} className={'hover:bg-purple-700 max-w-max hover:text-white font-semibold p-1 mx-1 rounded-lg  xl:px-2 lg:text-lg  xl:mx-2  2xl:text-xl '} ><Link  href={'/finance'}><a>Finance</a></Link></li>      
      <li className='lg:hidden p-1 mx-1 w-20'><SearchBar /></li>
      </ul>
      <span className='hidden lg:block '><SearchBar /></span>
    </div></>

  )
}

export default Navbar


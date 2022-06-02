import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Navbar = () => {
  const hamburger = ()=>{
    console.log("Hello")
  }
  return (
    <div className='w-full h-18 lg:h-22 flex flex-col sticky lg:flex-row p-2 top-0 bg-white items-center shadow-md z-99 md:text-lg overflow-hidden '>
      <div className="flex w-full lg:w-1/4 justify-between ">
        <div className='flex items-center '>
          <img className="rounded-lg h-14 w-16  lg:h-18 lg:w-20 r" src="/logo.png" alt="Geekcell.in" />
          <p className='m-2 font-medium text-purple-700'><Link href={'/'}>Geekcell.in</Link></p>
        </div>
        <button onClick={hamburger}><div className="space-y-1 p-2 self-center rounded-md lg:hidden border-2 border-purple-700">
          <div className="w-6 h-0.5 bg-purple-700"></div>
          <div className="w-6 h-0.5 bg-purple-700"></div>
          <div className="w-6 h-0.5 bg-purple-700"></div>
        </div></button>
      </div>
      <ul className="hidden lg:flex items-center w-full place-content-center lg:place-content-end px-4 ">
          <li className='hover:bg-purple-700  hover:text-white p-1 rounded-xl text-xs md:px-2 lg:text-lg  lg:mx-2 lg:font-medium 2xl:text-xl'><Link  href={'/'}>Home</Link></li>
          <li className='hover:bg-purple-700  hover:text-white p-1 rounded-xl text-xs md:px-2 lg:text-lg  lg:mx-2 lg:font-medium 2xl:text-xl'><Link  href={'/Programming'}>Programming</Link></li>
          <li className='hover:bg-purple-700  hover:text-white p-1 rounded-xl text-xs md:px-2 lg:text-lg  lg:mx-2 lg:font-medium 2xl:text-xl'><Link  href={'/Techhub'}>Tech Hub</Link></li>
          <li className='hover:bg-purple-700  hover:text-white p-1 rounded-xl text-xs md:px-2 lg:text-lg  lg:mx-2 lg:font-medium 2xl:text-xl'><Link  href={'/Launchpad'}>Launch Pad</Link></li>
          <li className='hover:bg-purple-700  hover:text-white p-1 rounded-xl text-xs md:px-2 lg:text-lg  lg:mx-2 lg:font-medium 2xl:text-xl'><Link  href={'/Guides'}>Guides</Link></li>
          <li className='hover:bg-purple-700  hover:text-white p-1 rounded-xl text-xs md:px-2 lg:text-lg  lg:mx-2 lg:font-medium 2xl:text-xl'><Link  href={'/Finance'}>Finance</Link></li>
          <li className='hover:bg-purple-700  hover:text-white p-1 rounded-xl text-xs md:px-2 lg:text-lg  lg:mx-2 lg:font-medium 2xl:text-xl'><Link  href={'/Aboutus'}>About Us</Link></li>
        </ul>
        {/* <Link href={'/Register'}><div className=" bg-purple-700 absolute right-4 m-2 h-8 w-20 bg rounded-md text-center py-1 font-semibold cursor-pointer">Login</div></Link> */}
      
    </div>
  )
}

export default Navbar

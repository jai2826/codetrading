import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {RiAccountCircleLine} from 'react-icons/ri'

// import Image from '../styles/ra'
const Navbar = () => {
  return (
    <div className='w-full flex flex-col sticky lg:flex-row p-2 top-0 bg-white items-center shadow-md z-99 md:text-lg'>
        <div className="flex  w-1/4 items-center ">
          <Image className="rounded-lg" src="/logo.png" alt="codeblogs"width="80" height="72" />
          <p className='m-2 font-bold text-purple-500'>Codeblogs.in</p>
        </div>
      <ul className=" flex items-center w-screen place-content-center lg:place-content-end px-12 ">
          <Link  href={'/'}><a className='p-1 md:px-2 rounded-lg  text-xs m-0 md:text-xl md:mx-2 font-semibold hover:bg-purple-500'><li>Home</li></a></Link>
          <Link  href={'/Techhub'}><a className='p-1 md:px-2 rounded-lg  text-xs m-0 md:text-xl md:mx-2 font-semibold hover:bg-purple-500'><li>Tech Hub</li></a></Link>
          <Link  href={'/Launchpad'}><a className='p-1 md:px-2 rounded-lg  text-xs m-0 md:text-xl md:mx-2 font-semibold hover:bg-purple-500'><li>Launch Pad</li></a></Link>
          <Link  href={'/Guides'}><a className='p-1 md:px-2 rounded-lg  text-xs m-0 md:text-xl md:mx-2 font-semibold hover:bg-purple-500'><li>Guides</li></a></Link>
          <Link  href={'/Aboutus'}><a className='p-1 md:px-2 rounded-lg  text-xs m-0 md:text-xl md:mx-2 font-semibold hover:bg-purple-500'><li>About Us</li></a></Link>
          {/* <Link  href={'/Services'}><a className='p-1 md:px-2 rounded-lg  text-xs m-0 md:text-xl md:mx-2 font-semibold hover:bg-purple-500'><li>Services</li></a></Link> */}
        </ul>
        {/* <Link href={'/Register'}><div className=" bg-purple-500 absolute right-4 m-2 h-8 w-20 bg rounded-md text-center py-1 font-semibold cursor-pointer">Login</div></Link> */}

    </div>
  )
}

export default Navbar

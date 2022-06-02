import React from 'react'
import Image from 'next/image'
import {TiSocialFacebook, TiSocialTwitter , TiSocialInstagram}  from 'react-icons/ti'
import { MdOutlineMail } from 'react-icons/md'
import { IoLogoInstagram } from 'react-icons/io'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className=''>
      <div class=" py-2 px-4 border-gray-100 border-2 mx-auto flex items-center sm:flex-row flex-col">
        <a class="flex font-medium items-center  justify-center text-gray-900">
          <Image className="rounded-lg " src="/logo.png" alt="Geekcell.in "  width="68" height="60" />
          <span class="ml-3 text-xl">Geekcell</span>
        </a>
        <p class="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"> © 2022 Geekcell </p>
        <span class="flex inline-center sm:ml-auto justify-center sm:justify-start ">
          <a href='/' className='mx-0.5'><TiSocialFacebook size={25}/></a>
          <a href='/' className='mx-0.5'><MdOutlineMail size={25}/></a>
          <a href='/' className='mx-0.5'><TiSocialTwitter size={25}/></a>
          <a href='/' className='mx-0.5'><IoLogoInstagram size={25}/></a>
        </span>
      </div>
    </footer>
  )
}

export default Footer   
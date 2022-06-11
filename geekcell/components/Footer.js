import React from 'react'
import Image from 'next/image'
import {TiSocialFacebook, TiSocialTwitter , TiSocialInstagram}  from 'react-icons/ti'
import { MdOutlineMail } from 'react-icons/md'
import { IoLogoInstagram } from 'react-icons/io'
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="">
      <div className=" py-2 px-4 border-gray-100 border-2 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex font-medium items-center  justify-center text-gray-900">
          <Image className="rounded-lg " src="/mylogo.png" alt="Geekcell.in " width="68" height="60" />
          <span className="ml-3 text-xl text-purple-700">Geekcell</span>
        </a>
        <p className="text-sm  sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4"> © 2022 Geekcell </p>
        <span className="flex inline-center sm:ml-auto justify-center sm:justify-start ">
          <a title="facebook" href="https://www.facebook.com/blog.geekcell/" target={"_blank"} className="mx-0.5">
            <TiSocialFacebook size={25} />{" "}
          </a>
          <a title="email" href="mailto: geekcell2022@gmail.com?subject = Feedback" target={"_blank"} className="mx-0.5">
            <MdOutlineMail size={25} />{" "}
          </a>
          <a title="twitter" href="https://twitter.com/@blog_geekcell" target={"_blank"} className="mx-0.5">
            <TiSocialTwitter size={25} />{" "}
          </a>
          <a title="instagram" href="https://www.instagram.com/geekcell2022/" target={"_blank"} className="mx-0.5">
            <IoLogoInstagram size={25} />{" "}
          </a>
        </span>
      </div>
    </footer>
  );
}

export default Footer   
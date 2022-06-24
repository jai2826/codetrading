import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { TiUser } from 'react-icons/ti'
import 'react-toastify/dist/ReactToastify.css';
import Script from 'next/script.js'
import Pages from '../components/Pages'


const page = ({ blogs }) => {
    return (
    <>
      <Head>
        <title>Geekcell - One stop for geeks</title>
        <meta name="description" content="Everything about geeks is here" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Tech, Techhub,Technews, Techlaunch, Games, Social Media, Software, Gadgets" />
        <meta name="language" content="English" />
        <link rel="icon" href="/icons/Geeklogo5-modified.png" type="image/x-icon" />
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2378548681525106"
          crossorigin="anonymous"
        ></script>
      </Head>
      <section>
        <div className="2xl:container mx-auto px-4 lg:py-10  2xl:px-8 border-2 my-6 border-gray-100 rounded-2xl">
          <div className=" flex flex-wrap mb-20 md:flex-col">
            <div className="w-full mb-6 lg:mb-0">
              <h1 className=" font-medium mb-2">The right place for geeks</h1>
            </div>
            {/* <p className=" w-full leading-relaxed text-gray-500"></p> */}
          </div>
            <Pages blogs={blogs} />
          
        </div>
      </section>
    </>
  );
}








export async function getServerSideProps(context) {
  context.res.setHeader(
    'Cache-Control',
    'public, s-maxage=10, stale-while-revalidate=59'
  )
  let headers = { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` }
  let a = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?sort=updatedAt%3Adesc&populate=*`, { headers: headers })
  let blogs = await a.json();
  let newblogs = blogs.data;
  
  return {
    props: { blogs: newblogs },
  }
}
export default page

import React from 'react'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { TiUser } from 'react-icons/ti'
import 'react-toastify/dist/ReactToastify.css';
import Script from "next/script.js";



const page = ({ blogs }) => {


    const [visible, setvisible] = useState(20)
    const readmore = () => {
        setvisible(prevState => (prevState + 20))
        if (visible >= blogs.length)
            toast.info('No more Blogs of this category', {
                position: "bottom-center",
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
    }

    return (
      <>
        <Head>
          <title>Programming - One stop for coders!!</title>
          <meta name="description" content="Here you can get to know everything about coding." />
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
                <h1 className=" font-medium mb-2">Here you can get to know everything about coding.</h1>
              </div>
              {/* <p className=" w-full leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odit maiores ab iste, esse, perspiciatis dicta, libero unde ad fugit labore sequi nesciunt deserunt. Dolor, consectetur libero. Odio quo dolorum laboriosam quos ullam nesciunt, possimus corporis molestias eos, deleniti itaque dignissimos sint odit soluta omnis velit incidunt unde voluptatibus! Aspernatur?</p> */}
            </div>
            <div className=" mx-auto  ">
              <div className="flex flex-wrap place-content-center ">
                {blogs &&
                  blogs.slice(0, visible).map((item) => {
                    return (
                      <Link key={item.id} href={`/Blog/${item.attributes.slug}`}>
                        <div className="bg-white flex flex-col overflow-hidden  rounded-lg shadow-lg w-full sm:w-1/3 md:w-1/4 xl:w-w22  p-2 m-3  cursor-pointer">
                          <div className="h-56 overflow-hidden">
                            {item.attributes.image.data && (
                              <img
                                className="object-fill object-center h-full rounded-lg"
                                src={item.attributes.image.data.attributes.url}
                                width={1200}
                                height={1000}
                                alt=""
                              />
                            )}
                          </div>
                          <div className="flex flex-col justify-between p-2 bg-white">
                            <p className="text-xl font-semibold h-14">{item.attributes.title}</p>
                            <p className="text-base h-18 whitespace-normal overflow-hidden">{item.attributes.desc}</p>
                          </div>
                          {item.attributes.author.data && (
                            <div className="flex items-center m-2 border-t-2 border-gray-100 w-full mt-auto ">
                              <div className="flex items-center space-x-1 pt-2">
                                <TiUser /> <p>{item.attributes.author.data.attributes.name}</p>
                              </div>
                            </div>
                          )}
                        </div>
                      </Link>
                    );
                  })}
              </div>
              <div className="container flex justify-center m-4 ">
                <button
                  name="readmore"
                  onClick={() => readmore()}
                  className="m-2 px-2 py-1 self-center border-2 border-black rounded-md hover:bg-purple-700 hover:text-white"
                >
                  Readmore
                </button>
                <ToastContainer
                  position="bottom-center"
                  autoClose={4000}
                  hideProgressBar={false}
                  newestOnTop={false}
                  closeOnClick
                  rtl={false}
                  pauseOnFocusLoss
                  draggable
                  pauseOnHover
                />
              </div>
            </div>
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
    let a = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?filters[categories][name]=Programming&sort=updatedAt%3Adesc&populate=*`, { headers: headers })
    let blogs = await a.json();
    let newblogs = blogs.data;

    return {
        props: { blogs: newblogs },
    }
}
export default page

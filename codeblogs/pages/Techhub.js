import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Techhub = ({ blogs }) => {
  
  let newblogs = [];
  {
    blogs.data.map(item => {
      item.attributes.categories.data.map(item2 => {
        if (item2.attributes.name === "Technews")
          newblogs.push(item)
      })
    })
  }
  newblogs.sort((a, b) => {
    return b.id - a.id;   //To sort in ascending order
  });
  const [visible, setvisible] = useState(4)
  const readmore = () => {
    setvisible(prevState => (prevState + 4))
    if (visible >= newblogs.length)
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
  return (<section>
      <div className="container mx-auto px-6 lg:py-16 lg:px-8">
        <div className=" flex flex-wrap mb-20 md:flex-col">
          <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Everything to know about tech is here!!!</h1>
            <div className="h-1 w-20 bg-purple-500 rounded"></div>
          </div>
          <p className=" w-full leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odit maiores ab iste, esse, perspiciatis dicta, libero unde ad fugit labore sequi nesciunt deserunt. Dolor, consectetur libero. Odio quo dolorum laboriosam quos ullam nesciunt, possimus corporis molestias eos, deleniti itaque dignissimos sint odit soluta omnis velit incidunt unde voluptatibus! Aspernatur?</p>
        </div>
        <div className=" mx-auto  ">
        <div className="flex flex-wrap place-content-center">
            {/* Inner container */}
            {newblogs && newblogs.slice(0, visible).map(item => { 
              return (<div key={item.id} className="flex flex-col overflow-hidden rounded-lg shadow-lg  lg:w-1/5 md:w-3/12  p-2 m-3 w-full">
              <div className='h-56 overflow-hidden ' >
                  {item.attributes.image.data && <img className="object-fill object-center h-full rounded-md" src={item.attributes.image.data.attributes.url} width={1200} height={1000} alt=""/>}
              </div>
              <Link href={`/Blog/${item.attributes.slug}`} className="flex flex-col justify-between p-10  bg-white">
                <div className="flex-1">
                  <a href="#" className="block m-2">
                    <p className="text-xl font-semibold text-neutral-600">{item.attributes.title}</p>
                    <p className="mt-3 text-base text-gray-500">{item.attributes.desc}</p>
                  </a>
                </div>
              </Link>
                <div className="flex items-center m-6">
                  <div className="flex-shrink-0">
                    <a href="https://twitter.com/Mike_Andreuzza">
                      <span className="sr-only">{item.attributes.author.data.attributes.name}</span>
//                       {/*<img className="w-10 h-10 rounded-full" src="" alt=""/>*/}
                    </a>

                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-neutral-600">
                      <a href="https://twitter.com/Mike_Andreuzza" className="hover:underline"> </a>
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-500">
                      <time > Mar 16, 2020 </time>
                      <span aria-hidden="true"> · </span>
                      <span> 6 min read </span>
                    </div>
                  </div>
                </div>
            </div>)})}
          </div>
            <div className='container flex justify-center m-4'><button onClick={() => readmore()} className="m-2 px-2 py-1 self-center border-2 border-black rounded-md ">Readmore</button>
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
              /></div>
        </div>
      </div>
    </section>)
}





    {/* // <section >
    //     <div className="flex flex-wrap m-4">
    //       {newblogs && newblogs.slice(0, visible).map((item) => {
            return (<Link key={item.__id} href={`/Blog/${item.attributes.slug}`}>
              <div className="xl:w-1/4 md:w-1/2 p-4">
                <div className="bg-gray-100 p-6 rounded-lg">
                  <img className="h-40 rounded w-full  object-cover item object-center mb-6" height={600} width={450} src={item.attributes.image.data && item.attributes.image.data.attributes.name} alt="content" />
                  <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">{item.attributes.author.data.attributes.name}</h3>
                  <h2 className="text-lg  font-medium title-font mb-4">{item.attributes.title}</h2>
                  <p className="leading-relaxed text-base">{item.attributes.desc}</p>
                </div>
              </div></Link>)
          })}


        </div>
      </div>
    </section> */}
  

export async function getServerSideProps(context) {
  let headers = { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` }
  let a = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*`, { headers: headers })
  let blogs = await a.json();
  // res.status(200).json({ blog })
  return {
    props: { blogs: blogs }, // will be passed to the page component as props
  }
}
export default Techhub

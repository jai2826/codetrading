import React from 'react'
import Head from 'next/head'
import Pages from '../components/Pages'



const page = ({ blogs }) => {
    return (
      <>
        <Head>
          <title>Finance - Get money tips on the go!</title>
          <meta name="description" content="Wanna know about your money problems " />
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
                <h1 className=" font-medium mb-2">Get money tips on the go!</h1>
              </div>
              {/* <p className=" w-full leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odit maiores ab iste, esse, perspiciatis dicta, libero unde ad fugit labore sequi nesciunt deserunt. Dolor, consectetur libero. Odio quo dolorum laboriosam quos ullam nesciunt, possimus corporis molestias eos, deleniti itaque dignissimos sint odit soluta omnis velit incidunt unde voluptatibus! Aspernatur?</p> */}
            </div>
            <Pages blogs={blogs}/>
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
    let a = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?filters[categories][name]=Finance&sort=updatedAt%3Adesc&populate=*`, { headers: headers })
    let blogs = await a.json();
    let newblogs = blogs.data;

    return {
        props: { blogs: newblogs },
    }
}
export default page

import Script from 'next/script';
import React from 'react';
import Head from 'next/head';


const post = ({ blog, post }) => {

    return (
      <>
        <Head>
          {blog.attributes.seo && (
            <>
              {" "}
              {blog.attributes.seo && <title>{blog.attributes.seo.metaTitle} </title>}
              {blog.attributes.seo.metaDescription && <meta name="description" content={blog.attributes.seo.metaDescription} />}
              {blog.attributes.seo.keywords && <meta name="keywords" content={blog.attributes.seo.keywords} />}
              {blog.attributes.seo.metaRobots && <meta name="robots" content={blog.attributes.seo.metaRobots} />}
              {blog.attributes.seo.canonicalURL && <meta name="keywords" content={blog.attributes.seo.canonicalURL} />}{" "}
            </>
          )}
          <meta name="language" content="English" />
          <meta name="viewport" content="width=device-width, initial-scale=1.0" />
          <script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2378548681525106" crossorigin="anonymous"></script>
        </Head>
        <section className="container  mx-auto flex flex-col ">
          <div className="lg:w-4/6 mx-auto mt-6  bg-white   rounded-md ">
            {blog.attributes.image.data && (
              <div className="rounded-md border-2 md:max-h-128 overflow-hidden ">
                <img alt={blog.attributes.image.data.attributes.alternativeText} className="object-center h-60 md:h-128 w-full  place-self-stretch " src={blog.attributes.image.data.attributes.url} />
              </div>
            )}
            <div className="flex flex-col rounded-md my-4 border-2 border-gray-100">
              <h1 className="border-b-2 p-2 rounded-none">{blog && blog.attributes.title}</h1>
              <div className="blogpost p-4 rounded-md  w-full" dangerouslySetInnerHTML={{ __html: post }}></div>
              {/* <div className=" p-4 rounded-md  w-full" >{{post}|safe } </div> */}
              <div className=" text-center lg:flex  h-auto p-6 border-t-2 border-gray-100">
                <div className="lg:self-center items-center">
                  <div className="w-20 h-20 rounded-full inline-flex lg:self-center items-center m-4 justify-center align-middle bg-gray-800 text-gray-600">
                    <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                      <circle cx="12" cy="7" r="4"></circle>
                    </svg>
                  </div>
                </div>
                {blog.attributes.author.data && (
                  <div className="flex flex-col self-center mx-4 px-2">
                    <h4 className="self-start">{blog.attributes.author.data.attributes.name}</h4>
                    <p className="text-left">{blog.attributes.author.data.attributes.about}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </>
    );

}

export async function getServerSideProps(context) {
    let headers = { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` }
    let a = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?filters[slug][$eq]=${context.query.slug}` +`&populate=*`, { headers: headers })
    let blog = await a.json();
    let blogpost = blog.data[0].attributes.post;

    return {
        props: { blog: blog.data[0], post: blogpost }, // will be passed to the page component as props
    }
}
export default post

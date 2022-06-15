import Script from "next/script";
import React from "react";
import Head from "next/head";
import { FaUser } from "react-icons/fa";

const post = ({ blog, post }) => {
  let tempdate = blog.attributes.date;
  var mydate = new Date(tempdate).toDateString();
  // console.table(my)

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
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2378548681525106"
          crossorigin="anonymous"
        ></script>
      </Head>
      <section className="container  mx-auto flex flex-col">
        <div className="lg:w-4/6 mx-auto mt-6  bg-white   rounded-md ">
          {blog.attributes.image.data && (
            <div className="rounded-md border-2 md:max-h-128 overflow-hidden ">
              <img
                alt={blog.attributes.image.data.attributes.alternativeText}
                className="object-center h-60 md:h-128 w-full  place-self-stretch "
                src={blog.attributes.image.data.attributes.url}
              />
            </div>
          )}
          <div className="flex flex-col rounded-md my-4 border-2 border-gray-100">
            <h1 className=" p-2 rounded-none font-semibold text-5xl">{blog && blog.attributes.title}</h1>
            <div className="p-2 flex items-center space-x-2 text-sm">
              <FaUser />
              <p>
                <a href="/">{blog.attributes.author.data.attributes.name}</a> on {mydate}
              </p>
            </div>
            <div className="blogpost p-4 rounded-md  w-full prose max-w-none" dangerouslySetInnerHTML={{ __html: post }}></div>
          </div>
        </div>
      </section>
    </>
  );
};

export async function getServerSideProps(context) {
  let headers = { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` };
  let a = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?filters[slug][$eq]=${context.query.slug}` + `&populate=*`, {
    headers: headers,
  });
  let blog = await a.json();
  let blogpost = blog.data[0].attributes.post;

  return {
    props: { blog: blog.data[0], post: blogpost }, // will be passed to the page component as props
  };
}
export default post;

import Script from "next/script";
import React from "react";
import Head from "next/head";
import { FaUser } from "react-icons/fa";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

const post = ({ blog, post }) => {
  let tempdate = blog.date;
  var mydate = new Date(tempdate).toDateString();

  return (
    <>
      <Head>
        {blog.seo && (
          <>
            {" "}
            {blog.seo && <title>{blog.seo.title} </title>}
            {blog.seo.description && <meta name="description" content={blog.seo.description} />}
            {blog.seo.keywords && <meta name="keywords" content={blog.seo.keywords} />}
            {blog.seo.metaRobots && <meta name="robots" content={blog.seo.metaRobots} />}
            {blog.seo.canonicalURL && <meta name="keywords" content={blog.seo.canonicalURL} />}{" "}
          </>
        )}
        <link rel="icon" href="/icons/Geeklogo5-modified.png" type="image/x-icon" />
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
          {blog.coverimage && (
            <div className="rounded-md border-2 md:max-h-128 overflow-hidden ">
              <img alt={"GeekImage"} className="object-center h-60 md:h-128 w-full place-self-stretch " src={blog.coverimage.url} />
            </div>
          )}
          <div className="flex flex-col rounded-md my-4 border-2 border-gray-100">
            <h1 className=" p-2 rounded-none font-semibold text-5xl">{blog.title}</h1>
            <div className="p-2 flex items-center space-x-2 text-sm">
              <FaUser />
              <p>
                <a href="/">{blog.author.name}</a> on {mydate}
              </p>
            </div>
            <div className="blogpost p-4 rounded-md  w-full prose max-w-none" dangerouslySetInnerHTML={{ __html: post }}></div>
          </div>
        </div>
      </section>
    </>
  );
};

// export async function getServerSideProps({params}) {
//   // let slug = "my-first-blog1"

  
//   const QUERY = gql`
//     query blog($slug: String!) {
//       blog(where: { slug: $slug }) {
//         id
//         title
//         description
//         slug
//         post {
//           html
//         }
//         date
//         seo {
//           id
//           image {
//             url
//           }
//           keywords
//           title
//           description
//         }
//         coverimage {
//           url
//         }
//         author {
//           name
//         }
//         category
//       }
//     }
//   `;

//   const endpoint = "https://api-ap-south-1.hygraph.com/v2/cl5l4wqps3qu101ta05lofm6s/master";
//   let variables = {
//     slug:params.slug
//   }

//   const { blog } = await request(endpoint, QUERY, variables);

//   return {
//     props: { blog: blog, post: blog.post.html }, // will be passed to the page component as props
//   };
// }

export default post;








const hygraph = new GraphQLClient("https://api-ap-south-1.hygraph.com/v2/cl5l4wqps3qu101ta05lofm6s/master");

export async function getStaticProps({ params }) {
  const { blog } = await hygraph.request(
    `
    query blog($slug: String!) {
      blog(where: { slug: $slug }) {
        id
        title
        description
        slug
        post {
          html
        }
        date
        seo {
          id
          image {
            url
          }
          keywords
          title
          description
        }
        coverimage {
          url
        }
        author {
          name
        }
        category
      }
    }
  `,
    {
      slug: params.slug,
    }
  );

  return {
    props: {
      blog:blog,
      post: blog.post.html,
    },
  };
}

export async function getStaticPaths() {
  const { blogs } = await hygraph.request(`
    {
      blogs {
        slug
      }
    }
  `);

  return {
    paths: blogs.map(({ slug }) => ({
      params: { slug },
    })),
    fallback: false,
  };
}


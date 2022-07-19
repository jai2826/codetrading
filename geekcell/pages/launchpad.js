import React from 'react'
import Head from 'next/head'
import Pages from '../components/Pages'
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";


const page = ({ blogs }) => {
  return (
    <>
      <Head>
        <title>Launchpad - Some place to visit!! </title>
        <meta name="description" content="Get to know about the new tech just launched" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="keywords" content="Tech, Techhub, Technews, Techs ,Techlaunch, Games, Social Media, Software, Gadgets" />
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
              <h1 className=" font-medium mb-2">Get to know about the new tech just launched</h1>
            </div>
            {/* <p className=" w-full leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odit maiores ab iste, esse, perspiciatis dicta, libero unde ad fugit labore sequi nesciunt deserunt. Dolor, consectetur libero. Odio quo dolorum laboriosam quos ullam nesciunt, possimus corporis molestias eos, deleniti itaque dignissimos sint odit soluta omnis velit incidunt unde voluptatibus! Aspernatur?</p> */}
          </div>
            <Pages  blogs={blogs} />
          
        </div>
      </section>
    </>
  );
}








export async function getServerSideProps() {
  const QUERY = gql`
    query {
      blogs(where: { category_contains_all: Launchpad }) {
        id
        slug
        title
        description
        post {
          html
        }
        date
        author {
          name
        }
        coverimage {
          url
        }
      }
    }
  `;

  const hygraph = new GraphQLClient("https://api-ap-south-1.hygraph.com/v2/cl5l4wqps3qu101ta05lofm6s/master", {
    headers: {
      Authorization: `Bearer ${process.env.GRAPHQL_AUTH_TOKEN}`,
    },
  });

  const { blogs } = await hygraph.request(QUERY);
  return {
    props: { blogs },
  };
}
export default page

import { useRouter } from "next/router";
import Image from 'next/image'
import Blogs from '../../models/Blogs'
import Authors from '../../models/Authors'
import mongoose from "mongoose";
import ReactMarkdown from "react-markdown";
import { serialize } from 'next-mdx-remote/serialize';
import { MDXRemote } from 'next-mdx-remote';
const ReactDOMServer = require('react-dom/server');
const HtmlToReactParser = require('html-to-react').Parser;

const post = ({ blog, post }) => {
    const htmlToReactParser = new HtmlToReactParser();
    const reactElement = htmlToReactParser.parse(post);
    const reactHtml = ReactDOMServer.renderToStaticMarkup(reactElement);

    return <section className="container px-5 mx-auto flex flex-col  ">
            <div className="lg:w-4/6 mx-auto bg-white border-2 rounded-md">
                <div className="rounded-md  overflow-hidden">
                    { blog.attributes.image.data && <img alt="content" className=" object-center max-h-128 border-b-2"  src={urlBuilder(blog.attributes.image.data.attributes.url)} width="1200" height="1500"/>}
                </div>
                
                <div className="flex flex-col mt-8">
                <h3>{blog && blog.attributes.title}</h3>
                <div className="container py-4  rounded-md mb-2 w-full" dangerouslySetInnerHTML={{__html:reactHtml}}>
                </div>
                    <div className=" text-center lg:flex  border-t-2  h-auto p-6 ">
                        <div className="lg:self-center items-center">
                            <div className="w-20 h-20 rounded-full inline-flex lg:self-center items-center m-4 justify-center align-middle bg-gray-800 text-gray-600">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                    <circle cx="12" cy="7" r="4"></circle>
                                </svg>
                            </div>
                        </div>
                        <div className="flex flex-col self-center  mx-4 px-2">
                        <h4 className="self-start">{blog.attributes.author.data.attributes.name}</h4>
                        <p className="text-left">{blog.attributes.author.data.attributes.about}</p>
                        </div>
                    </div>
                </div>
            </div>
    </section>

}
// export async function getServerSideProps(context) {
//     if (!mongoose.connections[0].readyState)
//     await mongoose.connect(process.env.MONGO_URI)
//     // console.log(context)
//     let blog = await Blogs.findOne({slug:context.query.slug});
//     console.log(blog.author)
//     let author = await Authors.findOne({name:blog.author})
//     return {
//       props: {blogs: JSON.parse(JSON.stringify(blog)) , authors: JSON.parse(JSON.stringify(author)) }, // will be passed to the page component as props
//     }
//   }
// export default post
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

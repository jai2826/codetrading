
import React from 'react';


const post = ({ blog, post }) => {


    return <section className="container px-5 mx-auto flex flex-col  ">
            <div className="lg:w-4/6 mx-auto  bg-white border-2 rounded-md">
            {blog.attributes.image.data && <div className="rounded-md  md:max-h-128 overflow-hidden ">
                <img alt="content" className="object-center h-60 md:h-128 w-full  place-self-stretch border-b-2" src={process.env.NEXT_PUBLIC_STRAPI_URL + blog.attributes.image.data.attributes.url} />
                </div>}
                <div className="flex flex-col mt-4 p-4">
                <h1>{blog && blog.attributes.title}</h1>
                <div className="container p-4  rounded-md mb-2 w-full" dangerouslySetInnerHTML={{__html:post}}>
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

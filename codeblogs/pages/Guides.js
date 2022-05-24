import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Guides = ({ blogs }) => {
    let newblogs = [];
    {
        blogs.data.map(item => {
            item.attributes.categories.data.map(item2 => {
                if (item2.attributes.name === "Guide")
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
    return (
        <section >
            <div className="container px-5 py-24 mx-auto">
                <div className="flex flex-wrap w-full mb-20 md:flex-col">
                    <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
                        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-gray-900">Everything to know about tech is here!!!</h1>
                        <div className="h-1 w-20 bg-purple-500 rounded"></div>
                    </div>
                    <p className=" w-full leading-relaxed text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Est odit maiores ab iste, esse, perspiciatis dicta, libero unde ad fugit labore sequi nesciunt deserunt. Dolor, consectetur libero. Odio quo dolorum laboriosam quos ullam nesciunt, possimus corporis molestias eos, deleniti itaque dignissimos sint odit soluta omnis velit incidunt unde voluptatibus! Aspernatur?</p>
                </div>
                <div className="flex flex-wrap m-4">
                    {newblogs && newblogs.slice(0, visible).map((item) => {
                        return (<Link key={item.id} href={`/Blog/${item.attributes.slug}`}>
                            <div className="xl:w-1/4 md:w-1/2 p-4">
                                <div className="bg-gray-100 p-6 rounded-lg">
                                    <img className="h-40 rounded w-full  object-cover item object-center mb-6" height={600} width={450} src={item.attributes.image.data && item.attributes.image.data.attributes.name} alt="content" />
                                    <h3 className="tracking-widest text-purple-500 text-xs font-medium title-font">{item.attributes.author.data.attributes.name}</h3>
                                    <h2 className="text-lg  font-medium title-font mb-4">{item.attributes.title}</h2>
                                    <p className="leading-relaxed text-base">{item.attributes.desc}</p>
                                </div>
                            </div></Link>)
                    })}
                    <div className='container flex justify-center m-4'><button onClick={() => readmore()} className="m-2 px-2 py-1 border-2 border-black rounded-md ">Readmore</button>
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
        </section>
    )
}
export async function getServerSideProps(context) {
    let headers = { Authorization: "Bearer 2d07dcb064b11688035e4439eb838361893b9d32cd98b3b67bf56a3b8e64ecd79f9985c3c5025e2c669350c67fec864f30b3497a4a5811b97c79ee6734b0bd4df5285915a9292d9813e5c11ccb301091aa19b080e559e686375e58ab1545f90b40f6a645980c7a097f63b528d6e0083f9db8f56600fa6c43f731b30161f6d666" }
    let a = await fetch("http://localhost:1337/api/blogs?populate=*", { headers: headers })
    let blogs = await a.json();
    // res.status(200).json({ blog })
    return {
        props: { blogs: blogs }, // will be passed to the page component as props
    }
}
export default Guides
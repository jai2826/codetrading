import Link from 'next/link'
import React from 'react'

const Services = () => {
  return (
    <div className='container mx-auto'>
      <h1 className='font-semibold text-xl m-4'>We offer the following Service!!</h1>
      <div className='border-gray-200 border-8 rounded-2xl' >
        <span className='flex justify-between m-3 items-center '>
          <h3 className='font-semibold text-lg text-purple-500'>Advertisements</h3>
          <a className='max-w-fit py-1 px-3 rounded-md bg-gray-500 hover:bg-purple-500' href='/Services/Advertisements'>Know More</a>
        </span>
        <div className=' flex flex-col my-3 mx-4 items-center'>
        <h3 className='self-start font-semibold '>Why Advertise with us?</h3>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        </div>
      </div>
      <div className='border-gray-200 border-8 rounded-2xl' >
        <span className='flex justify-between m-3 items-center '>
          <h3 className='font-semibold text-lg text-purple-500'>Wanna build your website</h3>
          <a className='max-w-fit py-1 px-3 rounded-md bg-gray-500 hover:bg-purple-500' href='/Services/Websitebuild'>Know More</a>
        </span>
        <div className=' flex flex-col my-3 mx-4 items-center'>
        <h3 className='self-start font-semibold'>You have come to the right Place!!</h3>
        <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
          The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.</p>
        </div>
      </div>
    </div>
  )
}

export default Services
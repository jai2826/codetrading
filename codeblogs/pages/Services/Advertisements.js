import React from 'react'
import { useEffect, useState } from 'react'





const Advertisements = ({ plans, validity, checkcategory }) => {
  let newplans = []
  console.log(newplans.length)
  plans.data.map(item => {
    if (item.attributes.category === checkcategory)
      newplans.push(item)
  })
  newplans.sort((a, b) => {
    return a.id - b.id;   //To sort in ascending order
  });
  if (newplans.length === 0) {
    validity(1);

  }

  return (
    <section className="text-gray-600 body-font overflow-hidden">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-2 text-gray-900">Pricing</h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-500">Get Amazing discounts on yearly plans</p>
          <div className="flex mx-auto border-2 border-black rounded overflow-hidden mt-6">
            <button onClick={() => { validity(1) }} className="validity py-1 px-4 focus:outline-none active:bg-purple-500">Monthly</button>
            <div className="border border-black"></div>
            <button onClick={() => { validity(6) }} className="validity py-1 px-4 focus:outline-none active:bg-purple-500">Semi-annually</button>
            <div className="border border-black"></div>
            <button onClick={() => { validity(12) }} className="validity py-1 px-4 focus:outline-none active:bg-purple-500">Annually</button>

          </div>
        </div>

        <div className="flex flex-wrap place-content-center">

          {newplans.map((item) => {
            return (<div key={item.__id} className="p-4 xl:w-1/4 max-h-128 md:w-1/2 w-full">
              <div className="h-full p-6 rounded-lg border-2 border-gray-300 flex flex-col  overflow-hidden">
                <h2 className="text-sm tracking-widest title-font mb-1 font-medium">{item.attributes.name}</h2>
                <h1 className="text-5xl text-gray-900 leading-none flex items-center pb-4 mb-4 border-b border-gray-200">
                  <span>₹{item.attributes.price}</span>
                  {(item.attributes.category != "Null") && <span className="text-lg ml-1 font-normal text-gray-500">/{item.attributes.category}</span>}
                </h1>

                {item.attributes.speciality.map((item2) => {
                  return (<p className="flex items-center text-gray-600 mb-2">
                    {item2.included && <img className='h-4 w-4 mr-2' src="/icons/checked.png" alt="" />}
                    {!item2.included && <img className='h-4 w-4 mr-2' src="/icons/cancel.png" alt="" />}
                    {item2.point}
                  </p>)
                })}
                <button className="flex items-center mt-auto text-white bg-gray-400 border-0 py-2 px-4 w-full focus:outline-none hover:bg-gray-500 rounded ">Button
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 ml-auto" viewBox="0 0 24 24">
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </button>
                {(item.attributes.footer != null) && <p class="text-xs text-gray-500 mt-3">Monthly Charges: ₹{item.attributes.footer}</p>}

              </div>
            </div>)
          })}

        </div>
      </div>
    </section>
  )
}

export async function getServerSideProps(context) {
  let headers = { Authorization: `Bearer ${process.env.STRAPI_TOKEN}` }

  let a = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/advertisements?populate=*`, { headers: headers })

  let plans = await a.json();


  // res.status(200).json({ blog })
  return {
    props: { plans: plans }, // will be passed to the page component as props
  }
}
export default Advertisements
import Link from 'next/link';
import React from 'react'
import { TiUser } from "react-icons/ti";

const Cards = ({item}) => {
  return (
    <Link href={`/blog/${item.slug}`}>
      <div className="bg-white flex flex-col overflow-hidden  rounded-lg shadow-lg w-full sm:w-1/3 md:w-1/4 xl:w-w22  p-2 m-3  cursor-pointer">
        <div className="h-56 overflow-hidden">
          {item.coverimage && (
            <img
              className="object-fill object-center h-full rounded-lg"
              src={item.coverimage.url}
              width={1200}
              height={1000}
              alt=""
            />
          )}
        </div>
        <div className="flex flex-col justify-between p-2 bg-white">
          <p className="text-xl font-semibold h-14">{item.title}</p>
          <p className="text-base h-18 whitespace-normal overflow-hidden">{item.description}</p>
        </div>
        {item.author && (
          <div className="flex items-center m-2 border-t-2 border-gray-100 w-full mt-auto ">
            <div className="flex items-center space-x-1 pt-2">
              <TiUser /> <p>{item.author.name}</p>
            </div>
          </div>
        )}
      </div>
    </Link>
  );
}

export default Cards

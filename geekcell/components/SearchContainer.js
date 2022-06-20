import React from 'react'
import Link from 'next/link';

const SearchContainer = ({ searched }) => {

  return (
    <div className="lg:absolute w-40 lg:w-96 z-50 overflow-hidden  lg:right-0 bg-white border-black shadow-xl rounded-md p-1 h-96 overflow-y-auto">
      {searched &&
        searched.map((item) => {
          return (
            <div
              key={item.id}
              className={` lg:whitespace-nowrap overflow-hidden shadow-sm rounded-md p-2 hover:bg-purple-700 w-fit hover:text-white font-semibold mx-1 lg:text-xl `}
            >
              <Link href={`/Blog/${item.attributes.slug}`}>{item.attributes.title}</Link>
            </div>
          );
        })}
    </div>
  );
};

export default SearchContainer

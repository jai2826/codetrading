import React,{useState} from 'react'
import Link from 'next/link';

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cards from './Cards';


const Pages = ({blogs}) => {
const [visible, setvisible] = useState(20);
const readmore = () => {
    
  setvisible((prevState) => prevState + 20);
  if (visible >= blogs.length)
    toast.info("No more Blogs of this category", {
      position: "bottom-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
};


  return (
    <div className=" mx-auto  ">
      <div className="flex justify-center flex-col flex-wrap sm:flex-row">
        {blogs &&
          blogs.slice(0, visible).map((item) => {
            return (
              <Cards key={item.id} item={item}/>
            );
          })}
      </div>
      <div className="container flex justify-center m-4 ">
        <button
          name="readmore"
          onClick={() => readmore()}
          className="m-2 px-2 py-1 self-center border-2 border-black rounded-md hover:bg-purple-700 hover:text-white"
        >
          Readmore
        </button>
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
        />
      </div>
    </div>
  );
}

export default Pages

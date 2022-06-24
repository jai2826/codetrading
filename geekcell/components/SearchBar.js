import React, { useRef, useState, useEffect } from "react";
import SearchContainer from "./SearchContainer";
import { GrFormClose, GrSearch } from "react-icons/gr";


const SearchBar = () => {
  // let searchref = useRef();
  // useEffect(() => {
  //   document.addEventListener("mousedown", (event) => {
  //     if (!searchref.current.contains(event.target)) setFiltered([]);
  //   });
  // }, []);

  const [newblogs, setNewblogs] = useState();
  const fetchblogs = async () => {
    let headers = {
      Authorization: `Bearer ${process.env.STRAPI_TOKEN}`,
    };
    let a = await fetch(`${process.env.NEXT_PUBLIC_STRAPI_URL}/api/blogs?populate=*`, {
      headers: headers,
    });
    const blogs = await a.json();
    return blogs;
  };

  useEffect(() => {
    const searchon = async () => {
      const blogs = await fetchblogs();
      setNewblogs(blogs);
    };
    searchon();
  }, []);

  const [filtered, setFiltered] = useState([]);
  const [filterkey, setFilterkey] = useState([]);
  const filterdata = (e) => {
    const searchKey = e.target.value;
    const filtering = newblogs.data.filter((value) => {
      return value.attributes.title.toLowerCase().includes(searchKey.toLowerCase());
    });
    setFilterkey(searchKey);

    if (searchKey === "") {
      setFiltered([]);
    } else {
      setFiltered(filtering);
    }
  };
  const clearsearch = ()=>{
    setFiltered([]);
  }
  // console.log(filtered);
  return (
    <>
      <div className="flex items-center w-max  border-2 rounded-md border-black px-1">
        <input name="search" className="w-32 outline-none " type="text" onChange={filterdata} value={filterkey} />
        {filtered.length !== 0 && <GrFormClose onClick={clearsearch} className="cursor-pointer " size={35} />}
        {filtered.length === 0 && <GrSearch onClick={clearsearch} className="opacity-50  m-[2.5px] cursor-pointer " size={30} />}
      </div>
      <div>{filtered.length !== 0 && <SearchContainer searched={filtered} />}</div>
    </>
  );
};

export default SearchBar;

import React, { useRef, useState, useEffect } from "react";
import SearchContainer from "./SearchContainer";
import { GrFormClose, GrSearch } from "react-icons/gr";
import { GraphQLClient } from "graphql-request";
import { gql } from "graphql-request";

const SearchBar = () => {
  // let searchref = useRef();
  // useEffect(() => {
  //   document.addEventListener("mousedown", (event) => {
  //     if (!searchref.current.contains(event.target)) setFiltered([]);
  //   });
  // }, []);

  const [newblogs, setNewblogs] = useState();
  const fetchblogs = async () => {
      const QUERY = gql`
        query {
          blogs {
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
      return blogs

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
    const filtering = newblogs.filter((value) => {
      return value.title.toLowerCase().includes(searchKey.toLowerCase());
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

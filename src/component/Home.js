import React from "react";
import { useState, useEffect } from "react";
import { auth } from "../services/firebase";
import moment from "moment";
import JobList from "../services/JobList";
import InfiniteScroll from "react-infinite-scroller";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

import "../App.css";

const Home = ({ user }) => {
  console.log(user, "cek user");
  const [data, setData] = useState([]);
  const [searchInput, setSearchInput] = useState("");
  const [hasMoreItems, setHasMoreItems] = useState(true);
  const [filteredResults, setFilteredResults] = useState([]);

  const loadJobList = (page) => {
    setTimeout(() => {
      JobList.getList(page)
        .then((res) => {
          const newList = data.concat(res);
          setData(newList);

          if (res.length > 0) {
            setHasMoreItems(false);
          } else {
            setHasMoreItems(true);
          }
        })
        .catch((err) => {
          console.log(err);
        });
    }, 1500);
  };

  // search
  const search = (searchValue) => {
    setSearchInput(searchValue);
    if (searchInput !== "") {
      const filteredData = data.filter((item) => {
        return Object.values(item)
          .join("")
          .toLowerCase()
          .includes(searchInput.toLowerCase());
      });
      setFilteredResults(filteredData);
    } else {
      setFilteredResults(data);
    }
  };

  //search by city

  return (
    <div className="home">
      <Navbar user={user} />
      <div className="grid grid-cols-4 gap-4">
        <div className="flex justify-center pl-60">
          {" "}
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleSearch2"
              className="form-label inline-block mb-2 text-gray-700 flex justify-start"
            >
              Job Description
            </label>
            <input
              type="search"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              placeholder="Search"
              onChange={(e) => search(e.target.value)}
            />
          </div>
        </div>

        <div>
          {" "}
          <div className="mb-3 xl:w-96">
            <label
              htmlFor="exampleSearch2"
              className="form-label inline-block mb-2 text-gray-700 flex justify-start"
            >
              Location
            </label>
            <input
              type="search"
              className="
        form-control
        block
        w-full
        px-3
        py-1.5
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
      "
              onChange={(e) => search(e.target.value)}
              placeholder="Search"
            />
          </div>
        </div>
      </div>

      <InfiniteScroll
        threshold={0}
        pageStart={0}
        loadMore={loadJobList}
        hasMore={hasMoreItems}
        loader={<div className="text-center">loading data ...</div>}
      >
        {searchInput.length > 1
          ? filteredResults.map((item, i) => {
              return (
                <>
                  {" "}
                  <div key={i} className="flex  justify-center  pb-2  ">
                    {" "}
                    <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
                      <div className="flex w-full items-center justify-between border-b pb-3">
                        <div className="flex items-center space-x-3">
                          <div className="h-8 w-8 rounded-full bg-slate-400 "></div>
                          <div className="text-lg font-bold text-slate-700">
                            {item.company}
                          </div>
                        </div>
                        <div className="flex items-center space-x-8">
                          <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
                            {item.type}
                          </button>
                          <div className="text-xs text-neutral-500">
                            {moment(item.created_at).fromNow()}
                          </div>
                        </div>
                      </div>

                      <div className="flex justify-start mt-4 mb-6">
                        <div className="mb-3 text-xl font-bold">
                          <Link to="/details">{item.title}</Link>
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center justify-between text-slate-500">
                          <div className="flex space-x-4 md:space-x-8">
                            <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                              <span>{item.location}</span>
                            </div>
                            <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mr-1.5 h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth="2"
                              >
                                <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                                />
                              </svg>
                              <span>4</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              );
            })
          : data.map((item, i) => (
              <>
                <div key={i} className="flex  justify-center  pb-2  ">
                  {" "}
                  <div className="rounded-xl border p-5 shadow-md w-9/12 bg-white">
                    <div className="flex w-full items-center justify-between border-b pb-3">
                      <div className="flex items-center space-x-3">
                        <div className="h-8 w-8 rounded-full bg-slate-400 "></div>
                        <div className="text-lg font-bold text-slate-700">
                          {item.company}
                        </div>
                      </div>
                      <div className="flex items-center space-x-8">
                        <button className="rounded-2xl border bg-neutral-100 px-3 py-1 text-xs font-semibold">
                          {item.type}
                        </button>
                        <div className="text-xs text-neutral-500">
                          {moment(item.created_at).fromNow()}
                        </div>
                      </div>
                    </div>

                    <div className="flex justify-start mt-4 mb-6">
                      <div className="mb-3 text-xl font-bold">
                        <Link to={`/details/${item.id}`}>{item.title}</Link>
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center justify-between text-slate-500">
                        <div className="flex space-x-4 md:space-x-8">
                          <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                            <span>{item.location}</span>
                          </div>
                          <div className="flex cursor-pointer items-center transition hover:text-slate-600">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="mr-1.5 h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth="2"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M14 10h4.764a2 2 0 011.789 2.894l-3.5 7A2 2 0 0115.263 21h-4.017c-.163 0-.326-.02-.485-.06L7 20m7-10V5a2 2 0 00-2-2h-.095c-.5 0-.905.405-.905.905 0 .714-.211 1.412-.608 2.006L7 11v9m7-10h-2M7 20H5a2 2 0 01-2-2v-6a2 2 0 012-2h2.5"
                              />
                            </svg>
                            <span>4</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ))}
      </InfiniteScroll>
      {hasMoreItems ? (
        ""
      ) : (
        <div className="text-center">no data anymore ...</div>
      )}
    </div>
  );
};

export default Home;

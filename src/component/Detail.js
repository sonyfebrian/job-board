import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import JobList from "../services/JobList";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

const baseURL = "http://dev3.dansmultipro.co.id/api/recruitment/positions";

const Detail = () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [detail, setDetail] = React.useState([]);
  const { slug } = useParams();

  useEffect(() => {
    axios.get(`${baseURL}/${slug}`).then((response) => {
      setDetail(response.data);
    });
  }, []);

  return (
    <>
      <nav class="relative flex flex-wrap items-center justify-between px-2 py-3 bg-slate-500 mb-3">
        <div class="container px-4 mx-auto flex flex-wrap items-center justify-between">
          <div class="w-full relative flex justify-between lg:w-auto  px-4 lg:static lg:block lg:justify-start">
            <Link to={`/`}>Back To Home</Link>
          </div>
        </div>
      </nav>
      <div className="md:flex items-start justify-center py-12 2xl:px-20 md:px-6 px-4">
        <div className="xl:w-2/6 lg:w-2/5 w-80 md:block hidden">
          <img
            className="w-full"
            alt=""
            src={`${detail.company_logo}`}
            onLoad={(event) => (event.target.style.display = "inline-block")}
          />
        </div>
        <div className="md:hidden">
          <img
            className="w-full"
            alt="img of a girl posing"
            src="https://i.ibb.co/QMdWfzX/component-image-one.png"
          />
          <div className="flex items-center justify-between mt-3 space-x-4 md:space-x-0">
            <img
              alt="img-tag-one"
              className="md:w-48 md:h-48 w-full"
              src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
            />
            <img
              alt="img-tag-one"
              className="md:w-48 md:h-48 w-full"
              src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
            />
            <img
              alt="img-tag-one"
              className="md:w-48 md:h-48 w-full"
              src="https://i.ibb.co/cYDrVGh/Rectangle-245.png"
            />
            <img
              alt="img-tag-one"
              className="md:w-48 md:h-48 w-full"
              src="https://i.ibb.co/f17NXrW/Rectangle-244.png"
            />
          </div>
        </div>
        <div className="xl:w-2/5 md:w-1/2 lg:ml-8 md:ml-6 md:mt-0 mt-6">
          <div className="border-b border-gray-200 pb-6">
            <p className="text-sm leading-none text-gray-600">
              {detail.company}
            </p>
            <h1
              className="
                          lg:text-2xl
                          text-xl
                          font-semibold
                          lg:leading-6
                          leading-7
                          text-gray-800
                          mt-2
                      "
            >
              {detail.title}
            </h1>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">location</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600">
                {detail.location}
              </p>
            </div>
          </div>
          <div className="py-4 border-b border-gray-200 flex items-center justify-between">
            <p className="text-base leading-4 text-gray-800">Company Website</p>
            <div className="flex items-center justify-center">
              <p className="text-sm leading-none text-gray-600 mr-3">
                {detail.company_url}
              </p>
            </div>
          </div>

          <div>
            <div className=" border-b py-4 mt-7 border-gray-200">
              <div
                onClick={() => setShow(!show)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800">Description</p>
                <button
                  className="
                                  cursor-pointer
                                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
                                  rounded
                              "
                  aria-label="show or hide"
                >
                  <svg
                    className={
                      "transform " + (show ? "rotate-180" : "rotate-0")
                    }
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                  (show ? "block" : "hidden")
                }
                id="sect"
                dangerouslySetInnerHTML={{ __html: detail.description }}
              ></div>
            </div>
          </div>
          <div>
            <div className="border-b py-4 border-gray-200">
              <div
                onClick={() => setShow2(!show2)}
                className="flex justify-between items-center cursor-pointer"
              >
                <p className="text-base leading-4 text-gray-800">
                  How To Apply
                </p>
                <button
                  className="
                                  cursor-pointer
                                  focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400
                                  rounded
                              "
                  aria-label="show or hide"
                >
                  <svg
                    className={
                      "transform " + (show2 ? "rotate-180" : "rotate-0")
                    }
                    width="10"
                    height="6"
                    viewBox="0 0 10 6"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M9 1L5 5L1 1"
                      stroke="#4B5563"
                      strokeWidth="1.25"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </div>
              <div
                className={
                  "pt-4 text-base leading-normal pr-12 mt-4 text-gray-600 " +
                  (show2 ? "block" : "hidden")
                }
                id="sect"
                dangerouslySetInnerHTML={{ __html: detail.how_to_apply }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;

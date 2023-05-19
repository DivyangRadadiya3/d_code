import React, { useState } from "react";
import { BsPersonCircle, BsList } from "react-icons/bs";
import { FaDatabase } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Nav() {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      <nav className="shadow bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <div className="flex items-center">
            <FaDatabase className="bg-gradient-to-br text-yellow-400  h-10 w-7 mr-3" />
            <p className="self-center text-4xl whitespace-nowrap dark:text-white">
              Firebase
            </p>
          </div>
          <button
            type="button"
            className="inline-flex items-center p-2 ml-3 text-xl text-gray-700 rounded-lg md:hidden"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={() => setToggle(!toggle)}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <BsList />
            </svg>
          </button>
          <div
            className={`${
              toggle ? "block" : "hidden"
            }  w-full  md:block md:w-auto`}
          >
            <ul
              className="font-medium flex flex-col md:flex-row md:space-x-8 p-4 md:p-0 mt-4 
              border border-gray-100 rounded-lg bg-gray-50 md:mt-0 md:border-0 md:bg-white 
              dark:bg-gray-80 md:dark:bg-gray-900 dark:border-gray-700"
            >
              <li>
                <NavLink to="/Home">
                  <span
                    className="block  py-2 pl-3 pr-4 text-blue-700 text-xl md:bg-transparent 
                    md:text-blue-700 md:p-0 hover:border-b-2 hover:border-yellow-500"
                  >
                    Home
                  </span>
                </NavLink>
              </li>
              <li>
                <NavLink to="/profile">
                  <svg
                    viewBox="0 0 24 24"
                    className="h-11 w-16 md:h-8 md:w-7 text-xl  block md:pt-1 py-2 pl-3 pr-4 text-blue-700 
                    rounded md:bg-transparent peer-active: md:text-blue-700 md:p-0 hover:text-blue-400"
                  >
                    <BsPersonCircle />
                  </svg>
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <ToastContainer
        position="top-center"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </>
  );
}

import React from "react";
import { UserAuth } from "../Context/AuthContext";
import Login from "./Login";

const Home = () => {
  const { user } = UserAuth();

  return (
    <>
      {user ? (
        <div className="relative z-20 flex items-center overflow-hidden">
          <div className="container relative flex px-6 py-16 mx-auto">
            <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
              <span className="w-20 h-2 mb-12 bg-gray-800 dark:bg-white"></span>
              <h1 className="text-6xl text-black">
                Make your app the best it can be.
              </h1>
              <label className="md:text-xl mt-6 text-gray-700 sm:text-base  dark:text-white">
                Firebase is an app development platform that helps you build and
                grow apps and games users love. Backed by Google and trusted by
                millions of businesses around the world.
              </label>
            </div>
            <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
              <img src="../code.jpg" className="max-w-xs m-auto md:max-w-sm" />
            </div>
          </div>
        </div>
      ) : (
        <Login />
      )}
    </>
  );
};

export default Home;

"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";

const Landing = () => {
  const [select, setSelection] = useState("Home");

  const handleSelectOption = (option: string) => {
    setSelection(option);
  };

  return (
    <div className="h-screen w-full relative flex flex-col justify-center items-center ">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="inset-0 object-cover w-full h-full brightness-75"
      >
        <source src="/bien.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-black via-transparent to-black"></div>

      {/* navbar */}
      <div className="w-5/6 xl:w-1/2 h-1/6 top-4 absolute flex justify-center items-center z-50">
        <div className=" w-[75%] h-[50%] rounded-xl flex justify-center items-center">
          <div className="w-[50%] h-full flex relative items-center justify-center gap-x-12 ">
            <span
              className={`cursor-pointer font-nerfos tracking-widest text-2xl transtion ease-in-out duration-300 z-50 ${
                select === "Home" ? "text-white" : "text-white/30"
              }`}
              onClick={() => handleSelectOption("Home")}
            >
              Home
            </span>
            <span
              className={`cursor-pointer font-nerfos tracking-widest text-2xl transtion ease-in-out duration-300 z-50 ${
                select === "About" ? "text-white" : "text-white/30"
              }`}
              onClick={() => handleSelectOption("About")}
            >
              About
            </span>
            <div className="w-[75%] h-full absolute ">
              <div
                className="absolute hidden xl:block xl:w-24 border-b border-white bottom-1/4 shadow-xl transform -translate-y-1/2 rounded-full
                      duration-500 ease-in-out"
                style={{ left: select === "About" ? "50%" : "0" }}
              />
            </div>
          </div>
        </div>
      </div>
      {/* Title */}
      <div className="w-[95%] absolute h-2/3 flex text-white z-50">
        <div className="w-1/2 h-full flex items-center justify-center">
          <h2 className="text-base md:text-xl tracking-widest">Coming Soon</h2>
        </div>
        <div className="w-1/2 h-full flex items-center justify-center">
          <h1 className="font-nerfos text-6xl xl:text-9xl">bien-aimé</h1>
        </div>
      </div>
      {/* Sign-Up Subscribe */}
      <div className="w-5/6 absolute bottom-4 xl:w-1/2 h-1/6 flex justify-center items-center z-50">
        <form className="w-[75%] h-[50%]  rounded-xl shadow-xl flex justify-evenly items-center">
          <input
            type="email" // Set the type attribute to "email" for email input
            placeholder="subscribe"
            className="block w-3/4 px-4 py-2 rounded-md border text-white font-light bg-transparent focus:outline-none placeholder-white/75 placeholder:text-sm"
          />
          <button
            type="submit" // Set the type attribute to "submit" for the submit button
            className="px-2 py-2 text-white rounded-md text-base focus:outline-none"
          >
            <FontAwesomeIcon
              icon={faAngleRight}
              className="w-4 h-4 text-white"
            />{" "}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Landing;

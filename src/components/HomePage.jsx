import React from "react";
import { HiArrowNarrowRight } from "react-icons/hi";
import { Link } from "react-scroll";

export const HomePage = () => {
  return (
    <div name="home" className="w-full h-screen bg-[black] ">
      {/* main */}
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full text-white">
        <p>Hey It's</p>
        <h1 className="font-bold text-4xl sm:text-7xl">Hyun</h1>
        <h2 className="font-bold text-3xl sm:text-5xl text-gray-800">
          Student pursing CyberSecurity.
        </h2>
        <p>
          3rd Year Student in CyberSecurity with experience in software
          development areas including web dev and os dev
        </p>
        <button className=" group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:text-black  hover:border-black w-[40vw] lg:w-[10vw]">
          About me <br />
          <span className="group-hover:rotate-90 duration-200">
            <HiArrowNarrowRight className="ml-3" />
          </span>
        </button>
      </div>
    </div>
  );
};

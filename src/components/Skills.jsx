import React from "react";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Node from "../assets/node.png";
import C from "../assets/c.png";
import GitHub from "../assets/github.png";
import PYTHON from "../assets/python.png";
import RUST from "../assets/rust.png";

export const Skills = () => {
  return (
    <div name="skills" className="w-full h-screen   bg-black text-white">
      {/* Container */}
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div>
          <p className="text-4xl font-bold inline border-b-4 border-gray-600 text-red-500 ">
            Skills
          </p>
          <p className="py-4 text-gray-500">
            These are the technologies I've worked with
          </p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md shadow-[#004482] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={C} alt="HTML icon" />
            <p className="my-4">C++</p>
          </div>
          <div className="shadow-md shadow-[#029ae4] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={CSS} alt="HTML icon" />
            <p className="my-4">CSS</p>
          </div>
          <div className="shadow-md shadow-yellow-400 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={JavaScript} alt="HTML icon" />
            <p className="my-4">JAVASCRIPT</p>
          </div>
          <div className="shadow-md shadow-blue-300 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={ReactImg} alt="HTML icon" />
            <p className="my-4">REACT</p>
          </div>
          <div className="shadow-md shadow-white hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={GitHub} alt="HTML icon" />
            <p className="my-4">GITHUB</p>
          </div>
          <div className="shadow-md shadow-[#8ac64a] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={Node} alt="HTML icon" />
            <p className="my-4">NODE JS</p>
          </div>
          <div className="shadow-md shadow-blue-500 hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={PYTHON} alt="HTML icon" />
            <p className="my-4">Python</p>
          </div>
          <div className="shadow-md  shadow-[#814022] hover:scale-110 duration-500">
            <img className="w-20 mx-auto" src={RUST} alt="HTML icon" />
            <p className="my-4">RUST</p>
          </div>
        </div>
      </div>
    </div>
  );
};

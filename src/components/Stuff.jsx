import React from "react";
import { data } from "./data";
import GitImage from "../assets/code.jpg";

export const Stuff = () => {
  const project = data;

  return (
    <div
      name="projects"
      className="w-full md:h-screen text-gray-300 bg-[#121212]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 text-orange-200 border-gray-600">
            Projects
          </p>
          <p className="py-6">
            Check out some of my projects at{" "}
            <a
              href="https://github.com/punixcorn/"
              className="text-blue-800 font-bold ">
              Github
            </a>
          </p>
        </div>

        {/* container for projects */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
          {/* Gird Item */}
          {project.map((item, index) => {
            return (
              <div
                key={item.id}
                style={{
                  backgroundImage: `url(${GitImage})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                  height: "200px",
                }}
                className="shadow-lg shadow-gray-800 group container rounded-md 
              flex justify-center text-center items-center mx-auto content-div">
                {/* Hover effect for images */}
                <div className="opacity-80 group-hover:opacity-100 z-0">
                  <span className="text-2xl bg-white px-3 rounded-lg  text-black tracking-wider  font-extrabold">
                    {item.name}
                  </span>
                  <div className="pt-8 text-center ">
                    {/* eslint-disable-next-line */}
                    <a href={item.github} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-1 m-2
                       bg-white text-blue-700 font-bold text-lg">
                        Code
                      </button>
                    </a>
                    {/* eslint-disable-next-line */}
                    <a href={item.live} target="_blank">
                      <button
                        className="text-center rounded-lg px-4 py-1 m-2
                       bg-white text-gray-700 font-bold text-lg">
                        Live
                      </button>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

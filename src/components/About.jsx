import React from "react";

export const About = () => {
  return (
    <div name="about" className="w-full h-screen bg-[#121212] text-white">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
          <div className="sm:text-right pb-8 pl-4">
            <p className="text-4xl font-bold inline border-b-4 border-gray-600 text-blue-500">
              About
            </p>
          </div>
          <div></div>
        </div>
        <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
          <div className="sm:text-right text-4xl font-bold">
            <p>Cyber Security Student and a Self taught software developer</p>
          </div>
          <div>
            <p>
              I am passionate about building excellent software that improves
              the lives of those around me. I specialize in contributing and
              creating open source software.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

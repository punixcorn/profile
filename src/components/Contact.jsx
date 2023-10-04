import React from "react";
import { FaGithub } from "react-icons/fa";
import { HiMail } from "react-icons/hi";

export const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-black flex justify-center items-center p-4">
      <div className="pb-8">
        <p className="text-4xl font-bold inline border-b-4 border-gray-600 text-gray-300">
          Contact
        </p>
        <p className="text-gray-300 py-4">
          <span className="flex m-1">
            <HiMail className="mr-4" /> <p> ohyunwoods663@gmail.com </p>
          </span>
          <span className="flex m-1">
            <FaGithub className="mr-4" />
            <a href="https://github.com/punixcorn">Punixcorn</a>
          </span>
        </p>
      </div>
    </div>
  );
};

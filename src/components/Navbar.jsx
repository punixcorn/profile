import React from "react";
import { useState } from "react";
import logo from "../assets/logo.png";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

export const Navbar = () => {
  const [toggle, setToggle] = useState(false);
  const Handleclick = () => setToggle(!toggle);

  return (
    <>
      <div className="fixed w-full h-[15vh]  flex justify-between items-center px-4 bg-black text-gray-300">
        {/* logo */}
        <div>
          <img src={logo} alt="foo" style={{ width: "50px" }}></img>
        </div>
        {/* menu */}
        <ul className="hidden md:flex p-1">
          <li>
            <Link to="home" smooth={true} duration={500} className="p-2">
              Home
            </Link>
          </li>
          <li>
            <Link to="about" smooth={true} duration={500} className="p-2">
              About
            </Link>
          </li>
          <li>
            <Link to="skills" smooth={true} duration={500} className="p-2">
              Skills
            </Link>
          </li>
          <li>
            <Link to="projects" smooth={true} duration={500} className="p-2">
              Projects
            </Link>
          </li>
          <li>
            <Link to="contact" smooth={true} duration={500} className="p-2">
              Contact
            </Link>
          </li>
        </ul>

        {/* mobile*/}
        {/* hamburger*/}
        <div onClick={Handleclick} className="md:hidden z-10 ">
          {!toggle ? <FaBars /> : <FaTimes />}
        </div>
        {/*menu */}
        <ul
          className={
            !toggle
              ? "hidden"
              : "absolute top-0 left-0 w-full h-screen bg-[black] flex flex-col justify-start items-start p-7"
          }>
          <li className="py-6 text-4xl">
            <Link onClick={Handleclick} to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={Handleclick} to="about" smooth={true} duration={500}>
              About
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={Handleclick}
              to="skills"
              smooth={true}
              duration={500}>
              Skills
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link onClick={Handleclick} to="work" smooth={true} duration={500}>
              Work
            </Link>
          </li>
          <li className="py-6 text-4xl">
            {" "}
            <Link
              onClick={Handleclick}
              to="contact"
              smooth={true}
              duration={500}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </>
  );
};

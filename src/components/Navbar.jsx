import React, { useState } from "react";
import {
  AiOutlineBulb,
  AiOutlineHome,
  AiOutlineMail,
  AiOutlineMenu,
  AiOutlineProject,
  AiOutlineUser,
} from "react-icons/ai";

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div>
      <AiOutlineMenu
        onClick={handleNav}
        className="fixed top-4 right-4 z-[99] md:hidden text-gray-800 m-2"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/100 flex flex-col justify-center items-center md:hidden z-20">
          <a
            onClick={handleNav}
            href="#home"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200 text-gray-800 font-medium"
          >
            <AiOutlineHome size={20} />
            <span className="mx-1">Home</span>
          </a>

          <a
            onClick={handleNav}
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200 text-gray-800 font-medium"
          >
            <AiOutlineUser size={20} />
            <span className="mx-1">About</span>
          </a>

          <a
            onClick={handleNav}
            href="#skills"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200 text-gray-800 font-medium"
          >
            <AiOutlineBulb size={20} />
            <span className="mx-1">Skills</span>
          </a>

          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200 text-gray-800 font-medium"
          >
            <AiOutlineProject size={20} />
            <span className="mx-1">Projects</span>
          </a>

          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200 text-gray-800 font-medium"
          >
            <AiOutlineMail size={20} />
            <span className="mx-1">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="fixed w-full h-[60px] flex-row justify-around items-center hidden md:flex top-0 z-30 bg-slate-100">
        <div>
          <a
            href="#home"
            className="font-semibold text-gray-800 flex flex-row items-center m-1 p-1 rounded-lg hover:scale-105 ease-in duration-200"
          >
            <span>
              <plaintext className="text-[#6c757d]">&#60;</plaintext>
            </span>
            <span>John Leonoras</span>
            <span className="ml-1 text-[#6c757d]">/</span>
            <span>
              <plaintext className=" text-[#6c757d]">&#62;</plaintext>
            </span>
          </a>
        </div>
        <div className="justify-evenly flex flex-row text-gray-800 font-medium items-center text-center">
          <div>
            <a
              href="#about"
              className="flex flex-row items-center m-2 p-2 rounded-lg hover:border-[#4756df] hover:border hover:scale-105 ease-in duration-200"
            >
              <AiOutlineUser size={20} />
              <span className="mx-1">About</span>
            </a>
          </div>
          <div>
            <a
              href="#skills"
              className="flex flex-row items-center m-2 p-2 rounded-lg hover:border-[#4756df] hover:border hover:scale-105 ease-in duration-200"
            >
              <AiOutlineBulb size={20} />
              <span className="mx-1">Skills</span>
            </a>
          </div>
          <div>
            <a
              href="#projects"
              className="flex flex-row items-center m-2 p-2 rounded-lg hover:border-[#4756df] hover:border hover:scale-105 ease-in duration-200"
            >
              <AiOutlineProject size={20} />
              <span className="mx-1">Projects</span>
            </a>
          </div>
          <div>
            <a
              href="#contact"
              className="flex flex-row items-center m-2 p-2 rounded-lg hover:border-[#4756df] hover:border bg-[#4756df] text-white/95 hover:bg-transparent hover:text-gray-800 hover:scale-105 ease-in duration-200"
            >
              <AiOutlineMail size={20} />
              <span className="mx-1">Contact</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

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
        className="fixed top-6 right-6 z-[99] md:hidden text-[#4756df]"
      />
      {nav ? (
        <div className="fixed w-full h-screen bg-white/90 flex flex-col justify-center items-center z-20">
          <a
            onClick={handleNav}
            href="#home"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200 text-[#4756df] font-medium"
          >
            <AiOutlineHome size={20} className="text-[#4756df]" />
            <span className="mx-1">Home</span>
          </a>

          <a
            onClick={handleNav}
            href="#about"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200 text-[#4756df] font-medium"
          >
            <AiOutlineUser size={20} />
            <span className="mx-1">About</span>
          </a>

          <a
            onClick={handleNav}
            href="#skills"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200 text-[#4756df] font-medium"
          >
            <AiOutlineBulb size={20} />
            <span className="mx-1">Skills</span>
          </a>

          <a
            onClick={handleNav}
            href="#projects"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200 text-[#4756df] font-medium"
          >
            <AiOutlineProject size={20} />
            <span className="mx-1">Projects</span>
          </a>

          <a
            onClick={handleNav}
            href="#contact"
            className="w-[75%] flex justify-center items-center rounded-full shadow-lg bg-gray-100 shadow-gray-400 m-2 p-2 cursor-pointer hover:scale-110 ease-in duration-200 text-[#4756df] font-medium"
          >
            <AiOutlineMail size={20} />
            <span className="mx-1">Contact</span>
          </a>
        </div>
      ) : (
        ""
      )}
      <div className="fixed w-full h-[60px] md:flex flex flex-row bg-white justify-around items-center shadow-md z-10">
        <div className="flex flex-row items-center">
          <span>
            <plaintext className="my-2 text-[#6c757d]">&#60;</plaintext>
          </span>
          <h1>
            <a href="#home" className="font-bold text-[#4756df]">
              JOHN LEONORAS
            </a>
          </h1>
          <span className="ml-2 my-2 text-[#6c757d]">/</span>
          <span>
            <plaintext className="my-2 text-[#6c757d]">&#62;</plaintext>
          </span>
        </div>
        <div className="flex-row text-[#4756df] font-medium hidden md:flex">
          <div className="m-2 p-2 rounded-lg hover:bg-slate-200 hover:scale-105 ease-in duration-200">
            <a href="#about" className="flex flex-row items-center">
              <AiOutlineUser size={20} />
              <span className="mx-1">About</span>
            </a>
          </div>
          <div className="m-2 p-2 rounded-lg hover:bg-slate-200 hover:scale-105 ease-in duration-200">
            <a href="#skills" className="flex flex-row items-center">
              <AiOutlineBulb size={20} />
              <span className="mx-1">Skills</span>
            </a>
          </div>
          <div className="m-2 p-2 rounded-lg hover:bg-slate-200 hover:scale-105 ease-in duration-200">
            <a href="#projects" className="flex flex-row items-center">
              <AiOutlineProject size={20} />
              <span className="mx-1">Projects</span>
            </a>
          </div>
          <div className="m-2 p-2 rounded-lg hover:bg-slate-200 hover:scale-105 ease-in duration-200">
            <a href="#contact" className="flex flex-row items-center">
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

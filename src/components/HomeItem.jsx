import React from "react";
import { TypeAnimation } from "react-type-animation";
import {
  FaSquareGithub,
  FaSquareFacebook,
  FaLinkedin,
  FaSquareXTwitter,
} from "react-icons/fa6";

const HomeItem = () => {
  return (
    <>
      <div className="w-full h-screen absolute top-0 left-0">
        <div className="max-w-[700px] m-auto h-full w-full flex flex-col justify-center lg:items-start items-center">
          <h1 className="sm:text-5xl text-4xl font-bold text-gray-800">
            I'm John Leonoras
          </h1>
          <h2 className="flex sm:text-3xl text-2xl pt-4 text-gray-800">
            I'm a
            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                2000,
                "Coder",
                2000,
                "Tech Enthusiast",
                2000,
                "Learner",
                2000,
              ]}
              wrapper="div"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: "1em", paddingLeft: "7px" }}
            />
          </h2>
          <div className="flex justify-between pt-6 max-w-[200px] w-full">
            <FaSquareXTwitter
              className="cursor-pointer"
              size={20}
              color="#000000"
            />
            <FaSquareFacebook
              className="cursor-pointer"
              size={20}
              color="#4267B2"
            />
            <FaSquareGithub
              className="cursor-pointer"
              size={20}
              color="#171515"
            />
            <FaLinkedin className="cursor-pointer" size={20} color="#0A66C2" />
          </div>
        </div>
      </div>
    </>
  );
};

export default HomeItem;

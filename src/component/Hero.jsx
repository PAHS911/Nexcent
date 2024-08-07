import React from "react";
import hero from "../images/hero.svg";
const Hero = () => {
  return (
    <>
      <div className=" flex justify-evenly max-md:flex-col max-md:gap-9">
        <div className="flex flex-col  justify-center max-md:text-center  ">
          <div className="">
            <h1 className="  text-5xl max-xxs:text-4xl font-semibold text-[#4D4D4D] ">
              Lessons and insights{" "} <br/>
              <span className="text-[#4CAF4F]">from 8 years</span>
            </h1>
          </div>
          <div className="">
            <p className="py-6 h-4  text-sm tracking-tighter text-[#717171]">
              Where to grow your business as a photographer: site or social
              media?
            </p>
          </div>
          <div className="">
            <button className="px-6 py-2 mt-4 rounded-md text-left bg-[#4CAF4F] text-white">
              Register
            </button>
          </div>
        </div>
        <div className="h-96 flex justify-center items-center">
          <img className="h-full" src={hero} />
        </div>
      </div>
    </>
  );
};

export default Hero;

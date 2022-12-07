import React from "react";
import Boxes from "../Boxes/Boxes";
import Shape from "../Shape/Shape";
import "./Banner.css";
import banner2 from "../../background/banner2.png";

const Banner = () => {
  return (
    <div>
      <div className="relative -z-0">
        <div className="banner">
          <div className="text-center pb-20 mb-6 ">
            <h3 className="mt-16 mb-6 text-white font-semibold text-2xl  ">
              Join in and connect{" "}
            </h3>
            <h1 className="mb-4 text-white font-bold text-7xl">
              To faster your <br /> innovation potential{" "}
            </h1>
            <p className="text-[20px] mb-9 font-medium text-white">
              AcceleratorApp Innovation Community — Tools and community to{" "}
              <br />
              facilitate innovation between all members of our community
            </p>

            <button className="btn ml-3 mb-5 rounded-md bg-white border-white text-[#206ECF] hover:bg-[#478de6] hover:border hover:border-[#9eacbd] hover:text-white">
              Schedule a Demo
            </button>
          </div>
        </div>

        <div>
          <Shape></Shape>

          <div className="shapeBox rounded-lg ">
            <div className="hidden lg:block">
              {" "}
              <Boxes></Boxes>
            </div>

            <div className="block lg:hidden sm:w-96 md:w-[836px] lg:w-[836px] mx-auto">
              <img className="" src={banner2} alt="" />
            </div>
          </div>
        </div>
      </div>
      {/* Cookies */}

      <div className=" cooki py-3 mt-24">
        <div className=" container mx-auto grid grid-cols-1 md:grid-cols-1 lg:grid-cols-2 sm:gap-3 md:gap-4 lg:gap-16">
          <div className="place-self-center">
            {" "}
            <div className="mx-[7%] md:mx-0 lg:mx-0">
              <p className="  text-[#1F304C] text-sm  font-medium align-middle">
                By using this site on the AcceleratorApp network, you agree with
                our use of cookies.
              </p>{" "}
            </div>
          </div>

          <div className="mt-3  md:mt-2 lg:mt-6 block md:flex lg:flex md:justify-center justify-around ">
            <div className="mx-[10%] lg:mx-0">
              <div className="flex w-full  justify-between   items-center">
                <button className="btn mb-5 rounded-md bg-[#206ECF] border-white text-white hover:bg-[#478de6] hover:border hover:border-[#9eacbd] hover:text-white">
                  Accept cookies
                </button>

                <button className="btn mb-5 rounded-md bg-white border-[#206ECF]  text-[#206ECF] hover:bg-[#478de6] hover:border hover:border-[#9eacbd] hover:text-white">
                  Want to know more?
                </button>
              </div>
            </div>
            <div className=" mt-3 text-center w-full md:w-[30%] lg:w-[30%] ">
              <p className="text-center text-[#1F304C] text-sm font-medium">
                {" "}
                <a href="#"> Read our Cookie Policy</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;

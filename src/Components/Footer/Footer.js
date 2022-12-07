import React from "react";
import "./Footer.css";
import { BsArrowRight } from "react-icons/bs";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaGlobe,
} from "react-icons/fa";
const Footer = () => {
  return (
    <div>
      <section className="footers">
        <div className="container mx-auto">
          {/* footer top */}

          <div className="mx-auto my-4">
            <div className=" text-center">
              <h1 className="text-2xl mb-6 text-white">
                Join our growing community
              </h1>
              <h5 className="text-base mb-4 text-white">
                Sign up for news and updates about AcceleratorApp
              </h5>

              <div className="mx-auto    w-[80%]  md:w-[50%] lg:w-[30%]">
                <form className="flex justify-center items-center">
                  <input
                    type="text"
                    placeholder="Your Email"
                    className="input focus:outline-none focus:text-gray-400 text-[rgba(255, 255, 255, 0.2)] bg-[#1B1E22] w-full rounded-none border-none "
                  />
                  <span className=" text-2xl text-gray-400">
                    <BsArrowRight />
                  </span>
                </form>

                <div>
                  <hr />
                </div>
              </div>
            </div>
          </div>

          {/* Footer middle */}
          <div className="mx-auto mt-12">
            <div className="grid grid-cols-2  lg:grid-cols-5 my-4 gap-16 ">
              {/* first column */}

              <div>
                <h1 className="text-white text-sm mb-2 font-semibold">
                  Community
                </h1>
                <div className=" text-[#ffffff33] mb-8 w-[70%]">
                  <hr />
                </div>

                <ul>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    Incubator/Accelerator
                  </li>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    Corporations
                  </li>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    Startups
                  </li>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    Investor
                  </li>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    Open Challenges
                  </li>
                </ul>
              </div>

              {/* 2nd column */}

              <div>
                <h1 className="text-white text-sm mb-2 font-semibold">
                  Modules
                </h1>
                <div className=" text-[#ffffff33] mb-8 w-[70%]">
                  <hr />
                </div>

                <ul>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    Coaching Module
                  </li>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    Data Module
                  </li>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    Ecosystem Module
                  </li>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    LMS Module
                  </li>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    Events
                  </li>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    Application Proccessing
                  </li>
                </ul>
              </div>
              {/* 3rd column */}

              <div>
                <h1 className="text-white text-sm mb-2 font-semibold">
                  Company
                </h1>
                <div className=" text-[#ffffff33] mb-8 w-[70%]">
                  <hr />
                </div>

                <ul>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    About Us
                  </li>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    Carrers
                  </li>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    Blog
                  </li>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    Pricing
                  </li>

                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    Contact Us
                  </li>
                </ul>
              </div>

              {/* Fourth column */}

              <div>
                <h1 className="text-white text-sm mb-2 font-semibold">
                  Documentation
                </h1>
                <div className=" text-[#ffffff33] mb-8 w-[70%]">
                  <hr />
                </div>

                <ul>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    Documentation
                  </li>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    Release Log
                  </li>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    Blog
                  </li>
                  <li className="text-xs font-normal mb-4 text-[#B6C0CD]">
                    Legal
                  </li>
                </ul>
              </div>

              {/* fifth column */}

              <div>
                <h1 className="text-white text-sm mb-2 font-semibold">
                  Follow
                </h1>
                <div className=" text-[#ffffff33] mb-8 w-[70%]">
                  <hr />
                </div>

                <ul
                  className="text-left  flex items-center justify-between lg:block
                 "
                >
                  <li className=" mb-4 text-[#B6C0CD]">
                    <div
                      className="  py-1 pl-2 pr-6 
                     w-[25%] border rounded border-[#494B4E]"
                    >
                      <div className="  text-center">
                        <span>
                          {" "}
                          <FaLinkedinIn />{" "}
                        </span>
                      </div>
                    </div>
                  </li>

                  <li className=" mb-4 text-[#B6C0CD]">
                    <div
                      className="  py-1 pl-2 pr-6 
                     w-[25%] border rounded border-[#494B4E]"
                    >
                      <div className="  text-center">
                        <span>
                          {" "}
                          <FaFacebookF />{" "}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className=" mb-4 text-[#B6C0CD]">
                    <div
                      className="  py-1 pl-2 pr-6 
                     w-[25%] border rounded border-[#494B4E]"
                    >
                      <div className="  text-center">
                        <span>
                          {" "}
                          <FaInstagram />{" "}
                        </span>
                      </div>
                    </div>
                  </li>
                  <li className=" mb-4 text-[#B6C0CD]">
                    <div
                      className="  py-1 pl-2 pr-6 
                     w-[25%] border rounded border-[#494B4E]"
                    >
                      <div className="  text-center">
                        <span>
                          {" "}
                          <FaTwitter />{" "}
                        </span>
                      </div>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            {/* footer middle bottom row */}

            <div className="w-full hidden lg:block my-1 text-[#ffffff33]">
              <hr />
            </div>

            {/* footer bottom */}

            <div className="grid mt-6 grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="block md:hidden lg:hidden mx-auto w-[80%] ">
                <div className="flex items-center justify-evenly mb-3">
                  <span className="text-[#F3F5F7] font-normal  text-sm ">
                    {" "}
                    Privacy
                  </span>
                  <span className="text-[#F3F5F7] font-normal  text-sm ">
                    {" "}
                    Cookies
                  </span>
                </div>

                <div className="mb-3">
                  <hr />
                </div>

                <div className="flex items-center justify-evenly">
                  <span className="text-[#F3F5F7] font-normal  text-sm ">
                    {" "}
                    Terms Of Use
                  </span>
                  <span className="text-[#F3F5F7] font-normal  text-sm ">
                    {" "}
                    DPA
                  </span>
                  <span className="text-[#F3F5F7] font-normal  text-sm ">
                    {" "}
                    Subproccesors
                  </span>
                </div>
              </div>

              {/* footer bottom left */}
              <div className="hidden md:block lg:block">
                <ul className="  flex  justify-around flex-shrink md:justify-between lg:justify-between    items-center">
                  <li className="text-[#F3F5F7] font-normal  text-sm ">
                    {" "}
                    Privacy
                  </li>
                  <li className="text-[#F3F5F7] font-normal text-sm ">
                    {" "}
                    Cookies
                  </li>

                  <li className="text-[#F3F5F7] font-normal text-sm ">
                    {" "}
                    Terms Of Use
                  </li>
                  <li className="text-[#F3F5F7] font-normal text-sm "> DPA</li>
                  <li className="text-[#F3F5F7] font-normal text-sm ">
                    {" "}
                    Subproccesors
                  </li>
                </ul>
              </div>

              <div></div>

              {/* footer right */}
              <div>
                <div className="flex items-center justify-evenly ">
                  <p className="text-xs text-white font-medium">
                    Copyright © 2022 AcceleratorApp All Rights Reserved
                  </p>

                  <span className="text-xs text-gray-400 font-medium"> | </span>
                  <span className=" text-white font-medium">
                    {" "}
                    <FaGlobe></FaGlobe>{" "}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Footer;

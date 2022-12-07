import React from "react";
import { BsFillArchiveFill, BsFillBrightnessHighFill } from "react-icons/bs";
import "./Frame.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.png";
import img4 from "../../assets/img4.png";
import img5 from "../../assets/img5.png";
const Frame = () => {
  return (
    <div className="mt-64  ">
      <div className="container mx-auto">
        <div className="grid grid-cols-5 gap-3 md:gap-12 lg:gap-20">
          <div className="">
            <div className="icon-one shadow-2xl  rounded-2xl">
              <img className="w-[400px]" src={img2} alt="" />
            </div>
          </div>
          <div className="">
            <div className="icon-two shadow-2xl  rounded-2xl">
              <img src={img3} alt="" />
            </div>
          </div>

          <div className=" ">
            <div className="icon-three shadow-2xl   rounded-2xl">
              <img src={img1} alt="" />
            </div>
          </div>
          <div className="">
            <div className="icon-four shadow-2xl   rounded-2xl">
              <img src={img4} alt="" />
            </div>
          </div>
          <div className=" ">
            <div className="icon-five shadow-2xl   rounded-2xl">
              <img src={img5} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Frame;

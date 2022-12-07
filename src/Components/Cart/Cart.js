import React from "react";
import {
  BsCalendar2PlusFill,
  BsCalendar2XFill,
  BsFileEarmarkMedicalFill,
  BsFillCalendarCheckFill,
  BsFillSlashSquareFill,
  BsPlusLg,
  BsTranslate,
} from "react-icons/bs";

import zapier from "../../assets/zapier.png";

const Cart = () => {
  return (
    <div>
      <div>
        {" "}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f1f8f9"
            fill-opacity="1"
            d="M0,320L1440,224L1440,320L0,320Z"
          ></path>
        </svg>
      </div>

      <div>
        <div className="bg-[#F1F8F9] py-3 ">
          <div className="my-32 container mx-auto">
            <div className=" pb-3 md:pb-7 lg:pb-20 text-center lg:text-left ">
              <h1 className="text-4xl font-bold">Features Integrated</h1>
              <p className="font-semibold text-gray-500">
                Know all Our features that we have for accelerate your business
              </p>
            </div>

            <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              <div className="shadow-lg bg-white rounded-xl p-5">
                <p className="bg-[#206ecf] inline-block p-2 rounded-xl text-white text-2xl">
                  <BsTranslate />
                </p>
                <h1 className="text-2xl font-bold py-2">Multilingual</h1>
                <p className="font-semibold text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  tempore assumenda error earum sit ut provident unde
                  reprehenderit obcaecati quasi esse velit cumque eius animi
                </p>
              </div>
              <div className="shadow-lg bg-white rounded-xl p-5">
                <p className="bg-[#206ecf] inline-block p-2 rounded-xl text-white text-2xl">
                  <BsFillCalendarCheckFill />
                </p>
                <h1 className="text-2xl font-bold py-2">Multilingual</h1>
                <p className="font-semibold text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  tempore assumenda error earum sit ut provident unde
                  reprehenderit obcaecati quasi esse velit cumque eius animi
                </p>
              </div>
              <div className="shadow-lg bg-white rounded-xl p-5">
                <p className="bg-[#206ecf] inline-block p-2 rounded-xl text-white text-2xl">
                  <BsFillSlashSquareFill />
                </p>
                <h1 className="text-2xl font-bold py-2">Multilingual</h1>
                <p className="font-semibold text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  tempore assumenda error earum sit ut provident unde
                  reprehenderit obcaecati quasi esse velit cumque eius animi
                </p>
              </div>
              <div className="shadow-lg bg-white rounded-xl p-5">
                <p className="bg-[#206ecf] inline-block p-2 rounded-xl text-white text-2xl">
                  <BsFileEarmarkMedicalFill />
                </p>
                <h1 className="text-2xl font-bold py-2">Multilingual</h1>
                <p className="font-semibold text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  tempore assumenda error earum sit ut provident unde
                  reprehenderit obcaecati quasi esse velit cumque eius animi
                </p>
              </div>
              <div className="shadow-lg bg-white rounded-xl p-5">
                <p className="bg-[#206ecf] inline-block p-2 rounded-xl text-white text-2xl">
                  <BsCalendar2PlusFill />
                </p>
                <h1 className="text-2xl font-bold py-2">Multilingual</h1>
                <p className="font-semibold text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  tempore assumenda error earum sit ut provident unde
                  reprehenderit obcaecati quasi esse velit cumque eius animi
                </p>
              </div>
              <div className="shadow-lg bg-white rounded-xl p-5">
                <p className="bg-[#206ecf] inline-block p-2 rounded-xl text-white text-2xl">
                  <BsCalendar2XFill />
                </p>
                <h1 className="text-2xl font-bold py-2">Multilingual</h1>
                <p className="font-semibold text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  tempore assumenda error earum sit ut provident unde
                  reprehenderit obcaecati quasi esse velit cumque eius animi
                </p>
              </div>
              <div className="shadow-lg bg-white rounded-xl p-5">
                {/* <p className="bg-[#206ecf] inline-block p-2 rounded-xl text-white text-2xl">
                  <AiFillChrome />
                </p> */}

                <img src={zapier} alt="" />
                <h1 className="text-2xl font-bold py-2">Multilingual</h1>
                <p className="font-semibold text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  tempore assumenda error earum sit ut provident unde
                  reprehenderit obcaecati quasi esse velit cumque eius animi
                </p>
              </div>
              <div className="shadow-lg bg-white rounded-xl p-5">
                <p className="bg-[#206ecf] inline-block p-2 rounded-xl text-white text-2xl">
                  <BsPlusLg />
                </p>
                <h1 className="text-2xl font-bold py-2">Multilingual</h1>
                <p className="font-semibold text-gray-500">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae
                  tempore assumenda error earum sit ut provident unde
                  reprehenderit obcaecati quasi esse velit cumque eius animi
                </p>
              </div>
              <div className="flex justify-center items-center">
                <span className="border border-blue-300 rounded-lg px-5 py-2 font-bold text-[#206ecf]">
                  {" "}
                  Discover it's function{" "}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div>
        {" "}
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#f1f8f9"
            fill-opacity="1"
            d="M0,64L1440,0L1440,0L0,0Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Cart;

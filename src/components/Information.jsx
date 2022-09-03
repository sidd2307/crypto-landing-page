import React from "react";
import Img1 from "../static/feature-1-img.png";
import Img2 from "../static/feature-2-img.png";
import Img3 from "../static/feature-3-img.png";
import { AiOutlineCaretRight } from "react-icons/ai";

export default function Information() {
  return (
    <div className="bg-[#0D0D2B] pt-1 xl:pt-10">
      <div className="w-[90%] sm:w-[80%] md:w-[40%] mx-auto text-center text-white text-xl py-6 sm:text-3xl">
        Market Sentiments, Portfolio, And Run The Infrastructure Of Your Choice
      </div>

      <div className="w-[100%] sm:w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-6">
        {/* left section */}
        <div className="flex flex-col justify-evenly h-[220px] mx-auto w-[90%] md:w-[60%]">
          {/* section1 */}

          {/* heading */}
          <div className="font-semi-bold text-xl lg:text-2xl text-white">
            Invest Smart
          </div>

          {/* desc */}
          <div className="text-gray-400 text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            rem ducimus vitae maiores dolorum alias.
          </div>

          <div className="w-[152px] h-[40px] bg-[#3671E9] rounded-full px-3 py-2 cursor-pointer flex flex-row justify-between">
            <span className="text-white text-base">Learn More</span>
          </div>
        </div>

        {/* right section */}
        <div className="mx-auto w-[90%] md:w-[100%]">
          <img className="md:h-[85%] mx-auto" src={Img1} alt="" />
        </div>
      </div>

      {/* TODO:second */}
      <div className="w-[100%] sm:w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-6">
        {/* right section */}
        <div className="mx-auto w-[90%] md:w-[100%] mt-10 md:mt-0">
          <img className="md:h-[85%] mx-auto" src={Img2} alt="" />
        </div>

        {/* left section */}
        <div className="flex flex-col justify-evenly h-[220px] mx-auto w-[90%] md:w-[60%]">
          {/* section1 */}

          {/* heading */}
          <div className="font-semi-bold text-xl lg:text-2xl text-white">
            Invest Smart
          </div>

          {/* desc */}
          <div className="text-gray-400 text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            rem ducimus vitae maiores dolorum alias.
          </div>

          <div className="w-[152px] h-[40px] bg-[#3671E9] rounded-full px-3 py-2 cursor-pointer flex flex-row justify-between">
            <span className="text-white text-base">Learn More</span>
          </div>
        </div>
      </div>

      {/* TODO:third */}
      <div className="w-[100%] sm:w-[90%] mx-auto grid grid-cols-1 xl:grid-cols-2 gap-x-4 gap-y-6">
        {/* left section */}
        <div className="flex flex-col justify-evenly h-[220px] mx-auto w-[90%] md:w-[60%]">
          {/* section1 */}

          {/* heading */}
          <div className="font-semi-bold text-xl lg:text-2xl text-white">
            Invest Smart
          </div>

          {/* desc */}
          <div className="text-gray-400 text-xs">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aspernatur
            rem ducimus vitae maiores dolorum alias.
          </div>

          <div className="w-[152px] h-[40px] bg-[#3671E9] rounded-full px-3 py-2 cursor-pointer flex flex-row justify-between">
            <span className="text-white text-base">Learn More</span>
          </div>
        </div>

        {/* right section */}
        <div className="mx-auto w-[90%] md:w-[100%] pb-10">
          <img className="md:h-[85%] mx-auto" src={Img3} alt="" />
        </div>
      </div>
    </div>
  );
}

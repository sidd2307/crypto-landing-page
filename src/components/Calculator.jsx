import React from "react";
import { AnimationOnScroll } from "react-animation-on-scroll";

export default function Calculator() {
  return (
    <div className="bg-[#0D0D2B]">
      <AnimationOnScroll animateIn="animate__fadeInUp" delay={500}>
        <div className="bg-[#0D0D2B] w-[90%] md:w-[80%] mx-auto text-white py-5 md:py-10">
          <div className="text-center text-2xl font-semibold">
            How Much Can You Earn With Us
          </div>
          <div className="text-center text-base font-normal text-gray-400 pt-5">
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </div>
        </div>
      </AnimationOnScroll>
      <div className="bg-[#0D0D2B] h-[200px] relative">
        <AnimationOnScroll animateIn="animate__zoomIn" delay={500}>
          <div className="top-[30px] absolute z-10 w-[100%] h-[400px] mb-[200px]">
            <div className="object-cover min-h-[372px] w-[90%] sm:w-[60%] mx-auto bg-white rounded-3xl p-5 md:p-12 flex flex-col justify-evenly">
              <div className="flex flex-col justify-between">
                <div className="flex flex-col lg:flex-row justify-between">
                  <input
                    className="my-7 md: w-[90%] lg:w-[40%] border-b-2 border-gray-300 bg-white peer block appearance-none py-2.5 px-1 text-xl text-[#0D0D2B] placeholder:text-[#0D0D2B] placeholder:text-xl focus:border-blue-600 focus:outline-none focus:ring-0"
                    type="text"
                    placeholder="Enter your Hash Rate"
                  />
                  <select className="my-7 md: w-[90%] lg:w-[20%] border-b-2 border-gray-300 bg-white peer block appearance-none py-2.5 px-1 text-xl text-[#0D0D2B] focus:border-blue-600 focus:outline-none focus:ring-0">
                    <option className="text-xl text-[#0D0D2B]" value="volvo">
                      TH/s
                    </option>
                    <option className="text-xl text-[#0D0D2B]" value="saab">
                      S/s
                    </option>
                    <option className="text-xl text-[#0D0D2B]" value="mercedes">
                      KH/s
                    </option>
                    <option className="text-xl text-[#0D0D2B]" value="audi">
                      MH/s
                    </option>
                    <option className="text-xl text-[#0D0D2B]" value="audi">
                      GH/s
                    </option>
                  </select>
                  <div className="my-7 md: w-[142px] h-[50px] bg-[#3671E9] rounded-full px-[20px] text-center py-[10px] cursor-pointer flex flex-row justify-between">
                    <span className="text-white text-xl">Calculate</span>
                  </div>
                </div>

                <div className="text-xl text-[#3671E9]">
                  ESTIMATED 24 HOUR REVENUE:
                </div>

                <div className="text-3xl font-semibold text-black my-7">
                  0.055 130 59 ETH{" "}
                  <span className="text-[#3671E9]">($1275)</span>
                </div>

                <div className="text-base lg:text-xl text-[#828282]">
                  Revenue will change based on mining difficulty and Ethereum
                  price.
                </div>
              </div>
            </div>
          </div>
        </AnimationOnScroll>
      </div>

      <div className="bg-gray-100 h-[480px] md:h-[440px] lg:h-[220px] text-gray-100">
        a
      </div>
    </div>
  );
}

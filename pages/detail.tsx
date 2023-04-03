import BottomTab from "@/components/BottomTab";
import { useRouter } from "next/router";
import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Document,
  Location,
  Star,
} from "react-iconly";
import Slider from "react-slick";

function Detail() {
  const router = useRouter();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  const tabs = ["Overview", "Detail", "Reviews", "Costs"];
  return (
    <div className=" relative h-screen  ">
      <div className=" absolute top-6 flex w-full justify-between items-center z-50 px-4">
        <button onClick={() => router.back()}>
          <ArrowLeft primaryColor="white" />
        </button>
        <button onClick={() => router.back()}>
          <img src="/svgs/love.svg" />
        </button>
      </div>
      <div className=" relative  z-30">
        <Slider {...settings}>
          <div>
            <img className="h-full object-cover" src="/paris.png" />
          </div>
        </Slider>

        <div
          style={{
            borderRadius: "40px 40px 0px 0px",
          }}
          className=" h-full -bottom-[340px]   absolute w-full bg-white py-10 px-6"
        >
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-[28px] font-bold text-dark">Paris, France</h1>
              <div className="flex items-center space-x-2 mt-3">
                <Star primaryColor="#FF9900" set="bold" />
                <p>4.9 (2.7K)</p>
              </div>
            </div>
            <div className="flex flex-col  items-end">
              <h1 className="text-[28px] font-bold text-[#FF455B]">$1200</h1>
              <p className="text-right">* Estimated Cost</p>
            </div>
          </div>

          <div className="mt-12">
            <div className="flex items-center justify-between">
              {tabs.map((item, idx) => (
                <div
                  className="flex justify-center items-center flex-col"
                  key={idx}
                >
                  <p className={`${idx === 0 ? "text-[#FF455B]" : ""}`}>
                    {item}
                  </p>
                  {idx === 0 && (
                    <div className="h-[5px] rounded-full bg-[#FF455B] w-[5px] " />
                  )}
                </div>
              ))}
            </div>

            <p className="mt-4 text-[#A5A7AC] ">
              Paris possesses a rich and attractive cultural scene with shows,
              activities and festivals.
            </p>
          </div>

          <div className="mt-12">
            <div className="flex justify-between items-center">
              <div>
                <div className="flex space-x-2 items-center">
                  <img src="/svgs/clock.svg" alt="" />
                  <p>5 Days</p>
                </div>
                <p className="ml-5">Duration</p>
              </div>
              <div>
                <div className="flex space-x-2 items-center">
                  <img src="/svgs/Location.svg" alt="" />
                  <p>625 KM</p>
                </div>
                <p className="ml-5">Distance</p>
              </div>
              <div>
                <div className="flex space-x-2 items-center">
                <img src="/svgs/sun.svg" alt="" />
                  <p>21 C</p>
                </div>
                <p className="ml-5">Sunny</p>
              </div>
            </div>
          </div>

          <div className="mt-12 flex items-center justify-between space-x-3">
            <button className="w-full py-4 rounded-full border border-[#FF455B] ">
              <p className="font-bold">$1200</p>
            </button>
            <button
              style={{
                background:
                  "radial-gradient(313.6% 160.58% at 50% 100%, #FF455B 0%, #FF7888 100%)",
                boxShadow: "0px 10px 30px -6px rgba(255, 74, 96, 0.3)",
              }}
              className="rounded-full w-full py-4 "
            >
              <p className="text-white font-bold">Book Now</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

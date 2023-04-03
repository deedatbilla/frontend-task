import React from "react";

function Hero() {
  return (
    <div className="my-3 flex flex-col">
      <h1 className="text-[28px] font-bold">Discover</h1>
      <p>Explore the best places in world!</p>

      <div className="mt-6 flex items-center bg-[#F4F4F5] py-3 px-5 rounded-full">
        <input placeholder="Search your trip" className="bg-[#F4F4F5] w-full" />
        <button>
          <img className="w-[38px]" src="/svgs/search.svg" />
        </button>
      </div>
    </div>
  );
}

export default Hero;

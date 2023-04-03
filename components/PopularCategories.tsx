import React from "react";

function PopularCategories() {
  const categories = [
    {
      image: "/svgs/cat1.svg",
      title: "Trips",
    },
    {
      image: "/svgs/cat2.svg",
      title: "Hotel",
    },
    {
      image: "/svgs/cat3.svg",
      title: "Transport",
    },
    {
      image: "/svgs/cat4.svg",
      title: "Events",
    },
  ];
  return (
    <div className="my-12 mb-32">
      <h1 className="text-[28px] font-bold">Popular Categories</h1>
      <div className="flex justify-between items-center gap-4 mt-3">
        {categories.map((item) => (
          <div className="flex flex-col  items-center justify-center ">
            <img src={item.image} className="h-[48px] w-[48px]" />
            <p className="text-[14px] text-[#A5A7AC] mt-4">{item.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularCategories;
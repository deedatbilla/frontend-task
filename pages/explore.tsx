import BottomTab from "@/components/BottomTab";
import HomeLayout from "@/components/HomeLayout";
import Link from "next/link";
import React from "react";

export const TypeOfTour = () => {
  const categories = [
    {
      image: "/t1.png",
      title: "Adventure",
    },
    {
      image: "/t2.png",
      title: "Group",
    },
    {
      image: "/t3.png",
      title: "Honeymoon",
    },
    {
      image: "/t4.png",
      title: "Sight",
    },
  ];
  return (
    <div className="mt-12">
      <h1 className="text-[28px] font-bold">Type of tour</h1>

      <div className="flex justify-between items-center gap-4 mt-3">
        {categories.map((item) => (
          <Link href={"/explore"}><div className="flex flex-col  items-center justify-center ">
            <img src={item.image} className="h-[52px] w-[52px]" />
            <p className="text-[14px] text-[#A5A7AC] mt-4">{item.title}</p>
          </div>
          </Link>
        ))}
      </div>
    </div>
  );
};
const BestAdventure = () => {
  return (
    <div className="my-12">
      <div className="grid grid-cols-2 gap-4">
        <div className="grid grid-rows-2 gap-4">
          <div className="">
            <img className="rounded-2xl w-full h-full object-cover" src="/svgs/l3.svg" />
          </div>
          <div className="">
            <img className="rounded-2xl w-full h-full object-cover" src="/svgs/l6.svg" />
          </div>
        </div>

        <div className="grid grid-rows-3 gap-4">
          <div className="row-span-2">
            <img className="rounded-2xl w-full h-full object-cover" src="/svgs/l4.svg" />
          </div>
          <div className="row-span-1">
            <img className="rounded-2xl w-full h-full object-cover" src="/svgs/l5.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};
function Explore() {
  return (
    <HomeLayout>
      <div className=" flex justify-between items-center space-x-3 py-4 ">
        <div className="w-fit flex items-center bg-[#F4F4F5] py-3 px-5 rounded-full">
          <input
            placeholder="Search your trip"
            className="bg-[#F4F4F5] w-full"
          />
          <button>
            <img src="/svgs/search.svg" />
          </button>
        </div>
        <div className="w-fit">
          <img src="p3.jpg" className=" h-12 w-12 rounded-2xl" />
        </div>
      </div>

      <TypeOfTour />
      <BestAdventure />
    </HomeLayout>
  );
}

export default Explore;

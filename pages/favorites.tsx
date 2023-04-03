import DestinationCard from "@/components/DestinationCard";
import HomeLayout from "@/components/HomeLayout";
import React from "react";
export const places = [
  {
    image: "/svgs/l7.svg",
    city: "Berlin",
    price: "$2000",
  },
  // {
  //   image: "/svgs/l8.svg",
  //   city: "London",
  //   price: "$2402",
  // },
  {
    image: "/svgs/l1.svg",
    city: "Tajmahal, India",
    price: "$2000",
  },
  {
    image: "/svgs/l2.svg",
    city: "New York",
    price: "$2402",
  },
];
function Favorites() {
  return (
    <HomeLayout>
      <div className=" flex justify-between items-center space-x-3 py-4 ">
        <div className="w-fit flex items-center bg-[#F4F4F5] py-3 px-5 rounded-full">
          <input
            placeholder="Search favorites"
            className="bg-[#F4F4F5] w-full"
          />
          <button>
            <img className="w-[38px]" src="/svgs/search.svg" />
          </button>
        </div>
        <div className="w-fit">
          <img src="p3.jpg" className=" h-12 w-12 rounded-2xl" />
        </div>
      </div>

      <div className="mt-12 grid grid-cols-2 gap-4">
        {places.map((item) => (
          <DestinationCard data={item} />
        ))}
      </div>
    </HomeLayout>
  );
}

export default Favorites;

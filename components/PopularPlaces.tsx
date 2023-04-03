import React from "react";
import Slider from "react-slick";
import CircleStoryCard from "./CircleStoryCard";
import DestinationCard from "./DestinationCard";
import { data } from "./TopDestinations";
export const places = [
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
const filters = ["All", "America", "Europe", "Asia", "Ocenia"];
function PopularPlaces() {
  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
  };
  return (
    <div className="mt-12">
      <div className="flex items-center- justify-between space-x-3">
        {filters.map((item, idx) => (
          <div className="flex justify-center items-center flex-col" key={idx}>
            <p className={`${idx === 0 ? "text-[#FF455B]" : ""}`}>{item}</p>
            {idx === 0 && (
              <div className="h-[5px] rounded-full bg-[#FF455B] w-[5px] " />
            )}
          </div>
        ))}
      </div>

      <div className="mt-8">
        <Slider {...settings} className="">
          {places.map((item) => (
            <DestinationCard data={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
}

export default PopularPlaces;

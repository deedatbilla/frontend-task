import React from "react";
import CircleStoryCard from "./CircleStoryCard";
import DestinationCard from "./DestinationCard";
import { data } from "./TopDestinations";
export  const places = [
    {
      image: "/blog-img3.png",
      city: "London",
    },
    {
      image: "/blog-img1.png",
      city: "New York",
    },
    {
      image: "/place4.jpg",
      city: "Delhi",
    },
    {
      image: "/place5.jpg",
      city: "Budapest",
    },
    {
      image: "/place6.jpg",
      city: "Tokyo",
    },
    {
      image: "/place7.jpg",
      city: "New York",
    },
    {
      image: "/place8.webp",
      city: "Delhi",
    },
    {
      image: "/place3.png",
      city: "Califonia",
    },
    {
      image: "/place4.jpg",
      city: "Mexico",
    },
    {
      image: "/place5.jpg",
      city: "New York",
    },
    {
      image: "/place2.png",
      city: "Delhi",
    },
    {
      image: "/place3.png",
      city: "Berlin",
    },
    {
      image: "/place2.png",
      city: "Dubai",
    },
  ];
function PopularPlaces() {
 
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "100px" }}>
        Popular places
      </h1>
      <p style={{ textAlign: "center", marginTop: "10px" }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec ut lacus
        et eros malesuada auctor dignissim in metus. Suspendisse potenti. Fusce
        eget commodo diam.
      </p>
      <div className="places">
        {places.map((item) => (
          <CircleStoryCard data={item} />
        ))}
      </div>
      <div className="popular-places-container">
        <div>
          <div className={"popular-places"}>
            {data.slice(0, 4).map((item, key) => (
              <DestinationCard key={key} data={item} />
            ))}
          </div>
        </div>

        <div>
          <img style={{ width: "100%" }} src="/how-it-works.png" />
        </div>
      </div>
    </div>
  );
}

export default PopularPlaces;

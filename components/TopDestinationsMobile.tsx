import React from "react";
import CircleStoryCard from "./CircleStoryCard";
import DestinationCard from "./DestinationCard";
import { places } from "./PopularPlaces";
import PopularProviders from "./PopularProviders";
import { data } from "./TopDestinations";
import Slider from "react-slick";
function TopDestinationsMobile() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="top-destinations-mobile">
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          marginTop: "20px",
          paddingInline:"15px"
        }}
      >
        <h1 style={{ textAlign: "left", fontSize: "20px" }}>
          Top Destinations
        </h1>

        <div className="places">
          {places.slice(0, 4).map((item) => (
            <CircleStoryCard data={item} />
          ))}
        </div>
        <div className="popular-places-container-mobile">
          <div>
            <div className={"popular-places-mobile"}>
              {data.slice(0, 4).map((item, key) => (
                <DestinationCard key={key} data={item} />
              ))}
            </div>
          </div>

          <div>
            <img style={{ width: "100%" }} src="/how-it-works.png" />
          </div>
        </div>
        <PopularProviders />

        <div>
          <h1 style={{ textAlign: "left", fontSize: "20px",marginBottom:"20px" }}>
            Departing soon
          </h1>
          <div style={{ marginBottom: "70px" }}>
            <Slider {...settings}>
              <img style={{ width: "100%" }} src="/blog-img1.png" />
              <img style={{ width: "100%" }} src="/blog-img2.png" />
              <img style={{ width: "100%" }} src="/blog-img3.png" />
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopDestinationsMobile;

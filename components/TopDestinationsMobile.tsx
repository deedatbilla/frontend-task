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
          margin: "0 auto",
          marginTop: "20px",
          paddingInline: "8px",
          width: "100%",
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
          <h1
            style={{
              textAlign: "left",
              fontSize: "20px",
              marginBottom: "20px",
            }}
          >
            Departing Soon
          </h1>
          <div style={{ marginBottom: "70px" }}>
            <Slider {...settings}>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "170px",
                    borderRadius: "15px",
                  }}
                  src="/blog-img1.png"
                />
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "170px",
                    borderRadius: "15px",
                  }}
                  src="/blog-img2.png"
                />
              </div>
              <div>
                <img
                  style={{
                    width: "100%",
                    height: "170px",
                    borderRadius: "15px",
                  }}
                  src="/blog-img3.png"
                />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TopDestinationsMobile;

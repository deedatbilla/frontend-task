import React from "react";
import { Location, Star } from "react-iconly";
import Slider from "react-slick";

function Detail() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div style={{ width: "100%", }}>
      <div style={{ width: "100%" }}>
        <Slider {...settings}>
          <img
            style={{ width: "100%", height: "45vh", backgroundSize: "cover" }}
            src="/hero2.png"
          />
          <img
            style={{ width: "100%", height: "45vh", backgroundSize: "cover" }}
            src="/hero2.png"
          />
          <img
            style={{ width: "100%", height: "45vh", backgroundSize: "cover" }}
            src="/hero2.png"
          />
        </Slider>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingInline: "10px",
        }}
      >
        <div>
          <p style={{ fontSize: "28px", fontWeight: "bold" }}>
            The best of Pattaya & Bangkok
          </p>
        </div>
        <div>
          <p style={{ fontSize: "24px", fontWeight: "bold", color: "red" }}>
            $12,356
          </p>
          <p style={{ fontSize: "14px", fontWeight: "bold" }}>
            Per Person{" "}
            <span style={{ textDecoration: "line-through" }}>$12,356</span>
          </p>
        </div>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingInline: "10px",
          marginTop: "20px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",

          
          }}
        >
          <Location primaryColor="red" />
          <p>Thailand basin</p>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",

            paddingInline: "10px",
          }}
        >
          <Star primaryColor="orange" />
          <p
            style={{ marginLeft: "3px", fontSize: "16px", fontWeight: "bold" }}
          >
            4.2
          </p>
        </div>
      </div>
    </div>
  );
}

export default Detail;

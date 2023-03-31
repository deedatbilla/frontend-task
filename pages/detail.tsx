import React from "react";
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
    <div style={{ backgroundColor: "blue", width: "100%" }}>
      <div style={{ backgroundColor: "red", width: "100%" }}>
        <Slider {...settings}>
          <img style={{ width: "100%", height: "40vh" }} src="/hero1.png" />
          <img style={{ width: "100%", height: "40vh" }} src="/hero2.png" />
        </Slider>
      </div>
    </div>
  );
}

export default Detail;

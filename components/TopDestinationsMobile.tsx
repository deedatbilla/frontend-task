import React from "react";
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
    <div className="mt-12">
      <h1 className="text-[28px] mb-4">Departing Soon</h1>
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
  );
}

export default TopDestinationsMobile;

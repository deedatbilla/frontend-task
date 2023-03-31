import React from "react";
import { ArrowRight, Calendar, Document, Location, Star } from "react-iconly";
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
    <div style={{ width: "100%", maxWidth: "500px", margin: "0 auto" }}>
      <div style={{ width: "100%" }}>
        <Slider {...settings}>
          <img
            style={{ width: "100%", height: "45vh", backgroundSize: "cover" }}
            src="/hero2.png"
          />
          <img
            style={{ width: "100%", height: "45vh", backgroundSize: "cover" }}
            src="/hero1.png"
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
          marginTop: "30px",
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

      <div style={{ marginTop: "25px", paddingInline: "10px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img height={40} width={40} src="/person1.png" />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <p style={{ fontWeight: "bold" }}>Deedat Idriss</p>
            <p>31st March 2023</p>
          </div>
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
          <Location />
          <div>
            <div style={{ marginLeft: "20px" }}>
              <p style={{ fontWeight: "bold" }}>Start At</p>
              <p>Accra</p>
            </div>
          </div>
        </div>

        <div>
          <ArrowRight />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
          }}
        >
          {/* <Location /> */}
          <div>
            <div style={{ marginLeft: "20px" }}>
              <p style={{ fontWeight: "bold" }}>End At</p>
              <p>New York</p>
            </div>
          </div>
        </div>
      </div>

      <div style={{ marginTop: "25px", paddingInline: "10px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <Calendar />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <p style={{ fontWeight: "bold" }}>Duration</p>
            <p>5 weeks</p>
          </div>
        </div>
      </div>
      <div style={{ marginTop: "25px", paddingInline: "10px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <Document />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <p style={{ fontWeight: "bold" }}>Physical Rating</p>
            <p>5 days</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Detail;

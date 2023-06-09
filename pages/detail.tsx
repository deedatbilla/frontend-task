import BottomTab from "@/components/BottomTab";
import { useRouter } from "next/router";
import React from "react";
import {
  ArrowLeft,
  ArrowRight,
  Calendar,
  Document,
  Location,
  Star,
} from "react-iconly";
import Slider from "react-slick";

function Detail() {
  const router = useRouter();
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div
      style={{
        width: "100%",
        maxWidth: "500px",
        margin: "0 auto",
        position: "relative",
      }}
    >
      <button
        onClick={() => router.back()}
        style={{
          top: 6,
          left: 10,

          width: "100%",
          position: "absolute",
          zIndex: 1000,
        }}
      >
        <ArrowLeft primaryColor="white" />
      </button>
      <div style={{ width: "100%" }}>
        <Slider {...settings}>
          <div>
            <img
              style={{ width: "100%", height: "35vh", backgroundSize: "cover" }}
              src="/hero2.png"
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: "35vh", backgroundSize: "cover" }}
              src="/place5.jpg"
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: "35vh", backgroundSize: "cover" }}
              src="/place6.jpg"
            />
          </div>
          <div>
            <img
              style={{ width: "100%", height: "35vh", backgroundSize: "cover" }}
              src="/place7.jpg"
            />
          </div>
        </Slider>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingInline: "10px",
          marginTop: "30px",
          gap: "10px",
        }}
      >
        <div style={{ width: "100%" }}>
          <p
            style={{ fontSize: "20px", fontWeight: "bold", lineHeight: "26px" }}
          >
            The Best of Pattaya & Bangkok
          </p>
        </div>
        <div
          style={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "end",
            alignItems: "end",
          }}
        >
          <p style={{ fontSize: "18px", fontWeight: "bold", color: "#e11900" }}>
            $12,356
          </p>
          <p style={{ fontSize: "14px", fontWeight: "600" }}>
            Per Person{" "}
            <span style={{ textDecoration: "line-through" }}>$15,356</span>
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
          <Location size={18} primaryColor="#e11900" />
          <p style={{ fontSize: "14px", opacity: 0.7, marginLeft: "5px" }}>
            Thailand
          </p>
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
      <hr style={{ marginTop: "20px" }} />

      <div style={{ marginTop: "20px", paddingInline: "10px" }}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <div>
            <img height={40} width={40} src="/person1.png" />
          </div>
          <div style={{ marginLeft: "20px" }}>
            <p style={{ fontWeight: "bold" }}>Deedat Idriss</p>
            <p style={{ opacity: 0.7, marginLeft: "5px", fontSize: "14px" }}>
              31st March 2023
            </p>
          </div>
        </div>
      </div>

      <div className="trip-details">
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingInline: "10px",
            borderBottom: "1px solid #f4f4f4",
            paddingBottom: "8px",
            // marginTop: "20px",
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
                <p style={{ opacity: 0.7, fontSize: "14px" }}>London</p>
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
                <p style={{ opacity: 0.7, fontSize: "14px" }}>New York</p>
              </div>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "25px",
            paddingInline: "10px",
            borderBottom: "1px solid #f4f4f4",
            paddingBottom: "8px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div>
              <Calendar />
            </div>
            <div style={{ marginLeft: "20px" }}>
              <p style={{ fontWeight: "bold" }}>Duration</p>
              <p
                style={{
                  opacity: 0.7,

                  fontSize: "14px",
                }}
              >
                5 weeks
              </p>
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
              <p style={{ opacity: 0.7, fontSize: "14px" }}>5 days</p>
            </div>
          </div>
        </div>
      </div>
      <BottomTab />
    </div>
  );
}

export default Detail;

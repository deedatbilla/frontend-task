import React from "react";
import styles from "@/styles/Home.module.css";
import TopDestinations from "./TopDestinations";
function Hero() {
  return (
    <div>
      <div  style={{ position: "relative" }} className={styles.heroDesktop}>
        <div
          style={{
            position: "absolute",
            color: "white",
            right: 0,
            left: 0,
            marginTop: "100px",
            width: "100%",
          }}
        >
          <div>
            <h1
              style={{
                textAlign: "center",
                fontWeight: "bold",
                fontSize: "48px",
              }}
            >
              Search Locations
            </h1>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              width: "100%",
              alignItems: "center",
            }}
          >
            <input
              style={{
                width: "50%",
                padding: "12px",
                borderRadius: "100px",
                marginTop: "30px",
                color: "black",
              }}
              placeholder="Where are you going"
            />

            <button style={{ marginTop: "20px",marginBottom:"20px" }} className={styles.button}>
              Search
            </button>
          </div>
        </div>
        <TopDestinations/>
      </div>
      
    </div>
  );
}

export default Hero;

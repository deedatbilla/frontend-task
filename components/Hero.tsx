import React from "react";
import styles from "@/styles/Home.module.css";
function Hero() {
  return (
    <div className={styles.heroDesktop}>
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
          <h2
            style={{
              textAlign: "center",
              fontWeight: "bold",
              fontSize: "48px",
            }}
          >
            Search Locations
          </h2>
        </div>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
            width:"100%",
            alignItems:"center"
          }}
        >
          <input
            style={{
              width: "50%",
              padding: "12px",
              borderRadius: "100px",
              marginTop: "30px",
              color:"black"
            }}
            placeholder="Where are you going"
          />

          <button style={{marginTop:"20px"}} className={styles.button}>Search</button>
        </div>
      </div>
    </div>
  );
}

export default Hero;

import React from "react";
import styles from "@/styles/Home.module.css";
import DestinationCard from "./DestinationCard";
function TopDestinations() {
  const data = [
    {
      image: "/place2.png",
      city: "Accra",
    },
    {
      image: "/place3.png",
      city: "New York",
    },
    {
      image: "/place2.png",
      city: "Delhi",
    },
    {
      image: "/place3.png",
      city: "Budapest",
    },
    {
      image: "/place2.png",
      city: "Accra",
    },
    {
      image: "/place3.png",
      city: "New York",
    },
    {
      image: "/place2.png",
      city: "Delhi",
    },
    {
      image: "/place3.png",
      city: "Budapest",
    },
  ];
  return (
    <div className={styles.topDestinations}>
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          marginTop: "20px",
        }}
      >
        <h1>Top Destinations</h1>

        <div className={styles.destinationsGrid}>
          {data.map((item, key) => (
            <DestinationCard key={key} data={item} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default TopDestinations;

import React from "react";
import styles from "@/styles/Home.module.css";
import DestinationCard from "./DestinationCard";
export  const data = [
    {
      image: "/place2.png",
      city: "London",
    },
    {
      image: "/place3.png",
      city: "New York",
    },
    {
      image: "/place4.jpg",
      city: "Delhi",
    },
    {
      image: "/place5.jpg",
      city: "Budapest",
    },
    {
      image: "/place6.jpg",
      city: "Califonia",
    },
    {
      image: "/place7.jpg",
      city: "Tokyo",
    },
    {
      image: "/place8.webp",
      city: "Delhi",
    },
    {
      image: "/place3.png",
      city: "Budapest",
    },
  ];
function TopDestinations() {

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

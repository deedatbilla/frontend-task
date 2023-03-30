import React from "react";

function CircleStoryCard({ data }: { data: any }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <img
        style={{
          borderRadius: "300px",
          width: "60px",
          height: "60px",
          border:"1px solid red"
        }}
        src={data.image}
      />
      <p style={{ textAlign: "center" }}>{data.city}</p>
    </div>
  );
}

export default CircleStoryCard;

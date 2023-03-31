import React from "react";

function CircleStoryCard({ data }: { data: any }) {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
      }}
    >
      <div style={{width:"100%"}}>
        <img
          style={{
            borderRadius: "300px",
            width: "60px",
            height: "60px",
            border: "1px solid red",
          }}
          src={data.image}
        />
      </div>
     <div>
     <p
        style={{
          // textAlign: "center",
          width: "100%",
          lineBreak: "unset",
          whiteSpace: "nowrap",
        }}
      >
        {data.city}
      </p>
     </div>
    </div>
  );
}

export default CircleStoryCard;

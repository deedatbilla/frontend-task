import React from "react";

function PopularProviders() {
  const providers = [
    {
      image: "/p1.jpg",
    },
    {
      image: "/p2.jpg",
    },
    {
      image: "/p3.jpg",
    },
    {
      image: "/p4.webp",
    },
    {
      image: "/p1.jpg",
    },
    {
      image: "/p2.jpg",
    },
  ];
  return (
    <div style={{ marginTop: "20px", marginBottom: "50px" }}>
      <h1 style={{ textAlign: "left", fontSize: "20px" }}>Popular providers</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop:"12px",
          overflowX:"scroll"
        }}
      >
        {providers.map((item) => (
          <div>
            <img style={{ height: "50px", width: "50px",borderRadius:"6px" }} src={item.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularProviders;

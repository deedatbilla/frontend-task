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
      image: "/person1.png",
    },
    {
      image: "/p2.jpg",
    },
  ];
  return (
    <div style={{ marginTop: "20px", marginBottom: "30px" }}>
      <h1 style={{ textAlign: "left", fontSize: "20px" }}>Popular Providers</h1>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: "12px",
          overflowX: "scroll",
        }}
      >
        {providers.slice(0, 5).map((item) => (
          <div style={{ height: "60px", width: "60px" }}>
            <img
              style={{
                borderRadius: "600px",
                backgroundSize: "contain",
                height: "100%",
                width: "100%",
              }}
              src={item.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default PopularProviders;

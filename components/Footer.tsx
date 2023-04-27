import React from "react";

function Footer() {
  return (
    <footer style={{ paddingTop: "30px", paddingBottom: "20px" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "6px",
          background: "#151515",

          paddingInline: "10px",
          color: "white",
        }}
      >
        <div>
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>Company</p>
          <p style={{ fontSize: "16px" }}>Community</p>
          <p style={{ fontSize: "16px" }}>Blog</p>
          <p style={{ fontSize: "16px" }}>Events</p>
        </div>
        <div>
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>Support</p>
          <p style={{ fontSize: "16px" }}>Help center</p>
          <p style={{ fontSize: "16px" }}>Report</p>
          <p style={{ fontSize: "16px" }}>Status</p>
        </div>
        <div>
          <p style={{ fontWeight: "bold", fontSize: "18px" }}>Follow</p>
          <p
            style={{
              fontSize: "16px",
              color: "#FE5923",
              textDecoration: "underline",
            }}
          >
            Facebook
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#FE5923",
              textDecoration: "underline",
            }}
          >
            Twitter
          </p>
          <p
            style={{
              fontSize: "16px",
              color: "#FE5923",
              textDecoration: "underline",
            }}
          >
            Instagram
          </p>
        </div>
      </div>
      <div style={{ paddingInline: "10px",marginTop:"12px" }}>
        <img src="/clogo.png" alt="" style={{ width: "150px" }} />
      </div>
    </footer>
  );
}

export default Footer;

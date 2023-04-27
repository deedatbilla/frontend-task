import React from "react";

function Footer() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        gap: "6px",
        background: "#F4F4F5]",
        paddingTop: "20px",
        paddingBottom: "20px",
        paddingInline:"10px"
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
        <p style={{ fontSize: "16px",color:"#FE5923",textDecoration:"underline" }}>Facebook</p>
        <p style={{ fontSize: "16px" ,color:"#FE5923",textDecoration:"underline"}}>Twitter</p>
        <p style={{ fontSize: "16px",color:"#FE5923",textDecoration:"underline" }}>Instagram</p>
      </div>
    </div>
  );
}

export default Footer;

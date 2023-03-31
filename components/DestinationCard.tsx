import Image from "next/image";
import React from "react";

function DestinationCard({ data }: { data: any }) {
  return (
    <div className="destinationCard">
      <img
        style={{
          height: "120px",
          width:"100%",
          borderTopLeftRadius: "20px",
          borderTopRightRadius: "20px",
        }}
        src={data.image}
      />
      <div style={{ padding: "10px" }}>
        <p style={{ marginTop: "10px" }}>{data?.city}</p>
        <p style={{ marginTop: "10px" }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's
        </p>
      </div>
    </div>
  );
}

export default DestinationCard;

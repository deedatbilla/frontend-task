import Image from "next/image";
import Link from "next/link";
import React from "react";

function DestinationCard({ data }: { data: any }) {
  return (
    <Link href="/detail">
      <div className="destinationCard">
        <img
          style={{
            height: "120px",
            width: "100%",
            borderTopLeftRadius: "20px",
            borderTopRightRadius: "20px",
          }}
          src={data.image}
        />
        <div style={{ padding: "10px" }}>
          <p style={{ marginTop: "10px", fontWeight: "bold" }}>{data?.city}</p>
          <p style={{ marginTop: "10px" }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's
          </p>
        </div>
      </div>
    </Link>
  );
}

export default DestinationCard;

import Image from "next/image";
import Link from "next/link";
import React from "react";

function DestinationCard({ data }: { data: any }) {
  return (
    <Link href="/detail">
      <div className=" relative rounded-3xl mr-1">
        {/* <div className=" absolute h-full w-full opacity-40 rounded-3xl bg-[#FF8080]" /> */}
        <img
          src={data.image}
          alt="Your image"
          className="w-full h-auto rounded-3xl    object-contain"
        />
        <div className="absolute bottom-0 w-full h-fit  flex items-center justify-between ">
          <div className="px-2 py-4">
            <p className="text-sm text-white font-bold">{data.city}</p>
            <p className="text-sm text-white">Starting at {data.price}</p>
          </div>
          <div className="mr-2">
            <img src="/svgs/love.svg" />
          </div>
        </div>
      </div>
    </Link>
  );
}

export default DestinationCard;

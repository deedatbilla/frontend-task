import HomeLayout from "@/components/HomeLayout";
import React from "react";

function Notifications() {
  return (
    <HomeLayout>
      <div className=" flex justify-between items-center space-x-3 py-4 ">
        <div className="w-fit flex items-center bg-[#F4F4F5] py-3 px-5 rounded-full">
          <input
            placeholder="Search notifications"
            className="bg-[#F4F4F5] w-full"
          />
          <button>
            <img className="w-[38px]" src="/svgs/search.svg" />
          </button>
        </div>
        <div className="w-fit">
          <img src="p3.jpg" className=" h-12 w-12 rounded-2xl" />
        </div>
      </div>

      <div className="flex justify-center items-center mt-16">
        <h1 className="text-[28px] leading-[40px] text-center">You have no notifications yet</h1>
      </div>
    </HomeLayout>
  );
}

export default Notifications;

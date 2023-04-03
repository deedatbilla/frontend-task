import React from "react";
import BottomTab from "./BottomTab";

function HomeLayout({ children }: any) {
  return (
    <div className="mx-auto max-w-md px-5 pt-6 pb-20">
      {children}
      <BottomTab />
    </div>
  );
}

export default HomeLayout;

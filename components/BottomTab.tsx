import React from "react";
import { Calendar, Home, Search, User } from "react-iconly";

function BottomTab() {
  const navItems = [
    {
      title: "Home",
      icon: <Home primaryColor="#e11900" />,
    },
    {
      title: "Search",
      icon: <Search />,
    },
    {
      title: "My Bookings",
      icon: <Calendar />,
    },
    {
      title: "Profile",
      icon: <User />,
    },
  ];
  return (
    <div className="bottom-tab-container">
      <div className="bottom-tab-items">
        {navItems.map((item, idx) => (
          <button
            key={idx}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            {item.icon}
            <p style={{ color: idx === 0 ? "#e11900" : "black" }}>{item.title}</p>
          </button>
        ))}
      </div>
    </div>
  );
}

export default BottomTab;

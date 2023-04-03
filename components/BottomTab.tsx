import { useRouter } from "next/router";
import React from "react";
import {
  Calendar,
  Discovery,
  Heart,
  Home,
  Notification,
  Search,
  User,
} from "react-iconly";

function BottomTab() {
  const router = useRouter();
  const { pathname } = router;
  const navItems = [
    {
      title: "Home",
      iconActive: <Home set="bold" primaryColor="#ffffff" />,
      iconInactive: <Home primaryColor="#A5A7AC" />,
      path: "/",
    },
    {
      title: "Explore",
      iconActive: <Discovery set="bold" primaryColor="#ffffff" />,
      iconInactive: <Discovery primaryColor="#A5A7AC" />,
      path: "/explore",
    },
    {
      title: "Notifications",
      iconActive: <Notification set="bold" primaryColor="#ffffff" />,
      iconInactive: <Notification primaryColor="#A5A7AC" />,
      path: "/notifications",
    },
    {
      title: "Favorites",
      iconActive: <Heart set="bold" primaryColor="#ffffff" />,
      iconInactive: <Heart primaryColor="#A5A7AC" />,
      path: "/favorites",
    },
  ];
  return (
    <div className="fixed bottom-0 bg-white w-full px-4">
      <div className="flex items-center justify-between my-3">
        {navItems.map((item, idx) => (
          <button
            onClick={() => router.push(item.path)}
            className={`flex items-center px-6 py-3 rounded-2xl ${
              pathname === item.path ? "space-x-2 " : ""
            }`}
            style={{
              background:
                item.path === pathname
                  ? "radial-gradient(113.04% 183.82% at 50% -83.82%, #FF7888 0%, #FF455B 100%)"
                  : "",
            }}
            key={idx}
          >
            {item.path === pathname ? item.iconActive : item.iconInactive}
            {item.path === pathname && (
              <p
                className={`${
                  item.path === pathname ? "text-white" : "text-[#A5A7AC]"
                }`}
              >
                {item.title}
              </p>
            )}
          </button>
        ))}
      </div>
    </div>
  );
}

export default BottomTab;

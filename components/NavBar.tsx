import React from "react";

function NavBar() {
  return (
    <div className=" flex justify-between items-center py-4">
      <button>
        <img src="/svgs/menu.svg" />
      </button>
      <button>
        <img src="p2.jpg" className=" h-12 w-12 rounded-2xl" />
      </button>
    </div>
  );
}

export default NavBar;

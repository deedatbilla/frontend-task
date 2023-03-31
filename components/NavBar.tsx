import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDown } from "react-iconly";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <Image src="/vercel.svg" alt="" width={100} height={100} />
        <p
          style={{
            fontSize: "18px",
            marginLeft: "25px",
          }}
        >
          Home
        </p>
        <p style={{ fontSize: "18px", marginLeft: "15px" }}>Search</p>
        <p style={{ fontSize: "18px", marginLeft: "15px" }}>My bookings</p>
        <p style={{ fontSize: "18px", marginLeft: "15px" }}>Profile</p>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Menu>
          <MenuButton bg={"white"} as={Button} rightIcon={<ChevronDown />}>
            London
          </MenuButton>
          <MenuList>
            <MenuItem>Delhi</MenuItem>
          </MenuList>
        </Menu>
        <button style={{ marginLeft: "10px" }} className={styles.button}>
          Login
        </button>
      </div>
    </div>
  );
}

export default NavBar;

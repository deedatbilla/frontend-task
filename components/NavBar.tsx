import React from "react";
import styles from "@/styles/Home.module.css";
import Image from "next/image";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDown } from "react-iconly";

function NavBar() {
  return (
    <div className={styles.navbar}>
      <div>
        <Image src="/vercel.svg" alt="" width={80} height={40} />
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
        }}
      >
        <Menu>
          <MenuButton  bg={"white"}  as={Button} rightIcon={<ChevronDown />}>
            Accra
          </MenuButton>
          <MenuList>
            <MenuItem>Delhi</MenuItem>
          </MenuList>
        </Menu>
        <button style={{marginLeft:"10px"}} className={styles.button}>Login</button>
      </div>
    </div>
  );
}

export default NavBar;

import React from "react";
import styles from "@/styles/Home.module.css";
import TopDestinations from "./TopDestinations";
import { Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { ChevronDown } from "react-iconly";
import { Search } from "react-iconly";
import TopDestinationsMobile from "./TopDestinationsMobile";
function MobileHero() {
  return (
    <div >
      <div className="heroMobile" style={{ position: "relative" }}>
        <div
          style={{
            position: "absolute",
            color: "white",
            right: 0,
            left: 0,
            marginTop: "100px",
            width: "100%",
            paddingInline:"25px"
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <h1
              style={{
                textAlign: "left",
                fontWeight: "bold",
                fontSize: "20px",
                marginLeft:"3px"
              }}
            >
              Search Locations
            </h1>
            <Menu>
              <MenuButton backgroundColor="transparent" as={Button} rightIcon={<ChevronDown />}>
                London
              </MenuButton>
              <MenuList>
                <MenuItem><p style={{color:"black"}}>Delhi</p></MenuItem>
              </MenuList>
            </Menu>
          </div>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              borderRadius: "100px",
              background: "white",
              width: "100%",
              alignItems: "center",
              padding: "6px",
              marginTop: "10px",
            }}
          >
            <input
              style={{
                width: "100%",
                // padding: "12px",
                color: "black",
                border: "0px",
                paddingInline:"10px"
              }}
              placeholder="Where are you going"
            />

            <button style={{}} className={styles.search}>
              <Search />
            </button>
          </div>
        </div>
        <TopDestinationsMobile/>
        
      </div>
     
    </div>
  );
}

export default MobileHero;

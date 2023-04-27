import Header from "@/components/Header";
import Head from "next/head";
import Image from "next/image";
import { Carousel } from "@mantine/carousel";
import {
  ActionIcon,
  Button,
  createStyles,
  getStylesRef,
  rem,
  Group,
  Badge,
} from "@mantine/core";
import { Category, Search } from "react-iconly";
import HotelCard from "@/components/HotelCard";
import Slider from "react-slick";
const useStyles = createStyles((theme) => ({
  root: {
    maxWidth: rem(400),
    width: "100%",
    // padding: "10px",
    marginLeft: "auto",
    marginRight: "auto",
  },
  headerTextLight: {
    color: "white",
    fontWeight: "bold",
    fontSize: "24px",
  },
  headerTextDark: {
    color: "black",
    fontWeight: "bold",
    fontSize: "24px",
  },
  header: {
    padding: "10px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },
  searchWrapper: {
    width: "100%",
    padding: "0 10px",

    marginTop: "-20px",
  },
  searchContainer: {
    display: "flex",
    alignItems: "center",
    width: "100%",
    padding: "8px 12px",
    borderRadius: "1000px",
    backgroundColor: "#F4F4F5",
    border: `1px solid ${theme.colors.gray[2]}`,
  },
  searchInput: {
    width: "100%",
    backgroundColor: theme.colors.gray[1],
    border: "none",
  },
  searchButton: {
    color: theme.white,
    backgroundColor: "#2f9e44",
    border: 0,
    borderRadius: "100%",
    // height:"50px",
    // width:"50px",
    padding: `${theme.spacing.sm} ${theme.spacing.sm}`,
    cursor: "pointer",
  },
  content: {
    padding: "0 10px",
    height: "100%",
    backgroundColor: "white",
    marginTop: "20px",
  },
}));
const data = [
  {
    title: "2 Hours Forest Therapy Session in Canada",
    price: "€75.24",
    image:
      "https://images.unsplash.com/photo-1527004013197-933c4bb611b3?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fH",
  },

  {
    title:
      "Private:Brewery, Winery, and Cider & Spirit Tastings Tour in SW Ontario",
    price: "€25.00",
    image: "/92.jpg",
  },
  {
    title: "European Evening Walking Food Tour in London, Ontario",
    price: "€105.00",
    image: "/93.jpg",
  },
];
const categories = [
  {
    icon: "/svgs/cat2.svg",
    name: "Museums",
  },
  {
    icon: "/svgs/cat1.svg",
    name: "Wine",
  },
  {
    icon: "/svgs/cat4.svg",
    name: "Foods",
  },
  {
    icon: "/svgs/cat3.svg",
    name: "Transport",
  },
];
const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 2,
};
const filters = ["All", "Europe", "Asia", "Africa", "America", "Oceania"];
export default function Home() {
  const { classes } = useStyles();
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={classes.root}>
        <div className={classes.header}>
          <img width={150} src="/clogo.png" alt="" />
          <img
            style={{ borderRadius: "50%", width: "50px" }}
            width={100}
            src="/p3.jpg"
            alt=""
          />
        </div>
        {/* <div><img src="/l7.svg"/></div> */}
        <div className={classes.searchWrapper}>
          <p className={classes.headerTextLight}>Discover London</p>
          <div className={classes.searchContainer}>
            <input
              placeholder="Search experiences"
              className={classes.searchInput}
              type="text"
            />
            <ActionIcon
              size={"lg"}
              variant="filled"
              color="green"
              radius={"lg"}
            >
              <Search primaryColor="white" />
            </ActionIcon>
          </div>
        </div>

        <div className={classes.content}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Category />
              <p className={classes.headerTextDark}>Popular Categories</p>
            </div>
            <Group grow>
              {categories.map((item) => (
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <img src={item.icon} alt="" />
                  <p>{item.name}</p>
                </div>
              ))}
            </Group>
          </div>
          <div>
            <p className={classes.headerTextDark}>Best Hotels</p>
            <div style={{ marginBottom: "10px" }}>
              <Slider {...settings}>
                {filters.map((item) => (
                  <Button
                    m={4}
                    style={{
                      textAlign: "center",
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                    size="lg"
                    color="red"
                    variant="light"
                    radius={"lg"}
                   
                  >
                    {item}
                  </Button>
                ))}
              </Slider>
            </div>
            <div>
              {data.map((item) => (
                <HotelCard data={item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

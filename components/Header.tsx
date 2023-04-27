import React from "react";
import { createStyles, getStylesRef, rem } from "@mantine/core";
const useStyles = createStyles((theme) => ({
  wrapper: {
    // subscribe to color scheme changes right in your styles
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[5]
        : theme.colors.gray[1],
    maxWidth: rem(400),
    width: "100%",
    padding: "10px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: theme.radius.sm,

    // Dynamic media queries, define breakpoints in theme, use anywhere
    [theme.fn.smallerThan("sm")]: {
      // Child reference in nested selectors via ref
      [`& .${getStylesRef("child")}`]: {
        fontSize: theme.fontSizes.xs,
      },
    },
  },

  child: {
    // assign ref to element
    ref: getStylesRef("child"),
    backgroundColor:
      theme.colorScheme === "dark" ? theme.colors.dark[8] : theme.white,
    padding: theme.spacing.md,
    borderRadius: theme.radius.sm,
    boxShadow: theme.shadows.md,
    color: theme.colorScheme === "dark" ? theme.white : theme.black,
  },
}));
function Header() {
  const { classes } = useStyles();
  return (
    <div className={classes.wrapper}>
      <div>
        <img src="/clogo.png" width={50} />
      </div>
    </div>
  );
}

export default Header;

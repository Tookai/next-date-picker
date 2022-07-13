import { extendTheme, ThemeConfig } from "@chakra-ui/react";

// Extend the theme to include custom colors
const colors = {
  primary: {
    100: "#5618FF",
    200: "#4D15E5",
    300: "#4412CC",
    400: "#3B0FB2",
    500: "#320C98",
    600: "#28097E",
    700: "#1F0665",
    800: "#16034B",
    900: "#0D0031",
  },
  secondary: {
    100: "#FFC3C4",
    200: "#F8B9BA",
    300: "#F2AFB0",
    400: "#EBA5A6",
    500: "#E49B9C",
    600: "#DD9192",
    700: "#D78788",
    800: "#D07D7E",
    900: "#C97374",
  },
};

const styles = {
  global: {
    "*": {
      boxSizing: "border-box",
      margin: 0,
      padding: 0,
    },
    body: {
      fontFamily: "Roboto, sans-serif",
      transition: "all 0.25s",
    },
    a: {
      textDecoration: "none",
      ":hover": {
        textDecoration: "underline",
      },
    },
  },
};

// Extend the theme to include color mode
const config: ThemeConfig = {
  initialColorMode: "dark",
  useSystemColorMode: false,
};

// Extend the theme to include global styling
const global = {
  styles,
  colors,
  config,
};

export const theme = extendTheme(global);

import { ThemeOptions } from "@mui/material";

const palette: ThemeOptions["palette"] = {
  mode: "dark",
  success: {
    main: "#00c292",
    dark: "#00964b",
  },
  info: {
    main: "#0bb2fb",
    light: "#a7e3f4",
  },
  error: {
    main: "#e46a76",
    dark: "#e45a68",
  },
  warning: {
    main: "#fec90f",
    dark: "#dcb014",
  },
  action: {
    disabledBackground: "rgba(73,82,88,0.12)",
    hoverOpacity: 0.02,
    hover: "rgba(0, 0, 0, 0.03)",
  },
};

export default palette;

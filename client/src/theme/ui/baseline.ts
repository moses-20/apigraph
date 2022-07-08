import { ThemeOptions } from "@mui/material";

const baseline: ThemeOptions["components"] = {
  MuiCssBaseline: {
    styleOverrides: {
      "*": {
        boxSizing: "border-box",
      },
      html: {
        height: "100%",
        width: "100%",
      },
      body: {
        height: "100%",
        margin: "0",
        padding: "0",
      },
      "#root": {
        height: "100%",
      },
    },
  },
};

export default baseline;

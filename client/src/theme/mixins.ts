import { ThemeOptions } from "@mui/material";

const mixins: ThemeOptions["mixins"] = {
  toolbar: {
    color: "#949db2",

    "@media(min-width:1280px)": {
      minHeight: "64px",
      padding: "0 30px",
    },

    "@media(max-width:1280px)": {
      minHeight: "64px",
    },
  },
};

export default mixins;

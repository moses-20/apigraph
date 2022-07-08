import { ThemeOptions } from "@mui/system";
import baseline from "./baseline";
import components from "./components";


const ui: ThemeOptions["components"]  = {
  ...baseline,
  ...components
};

export default ui;

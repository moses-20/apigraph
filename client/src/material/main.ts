import { styled } from "@mui/material";

const Main = styled("main")(({ theme }) => ({
  flex: 1,
  overflow: "hidden",
  paddingTop: "64px",
  minHeight: "calc(100vh - 170px)",
  backgroundColor: theme.palette.background.default,
}));

export default Main;

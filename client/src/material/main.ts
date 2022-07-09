import { styled } from "@mui/material";

const Main = styled("main")(({ theme }) => ({
  flex: 1,
  display: "flex",
  overflow: "hidden",
  paddingTop: "65px",
  flexDirection: "column",
  minHeight: "calc(100vh - 170px)",
  backgroundColor: theme.palette.background.default,
}));

export default Main;

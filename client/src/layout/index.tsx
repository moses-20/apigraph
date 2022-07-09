import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import Page from "material/page";
import Main from "material/main";
import Home from "pages/home";
import Search from "widgets/search";

function Layout() {
  return (
    <Page>
      <AppBar elevation={0}>
        <Toolbar sx={{ justifyContent: "center", pt: 1 }}>
          <Search />
        </Toolbar>
      </AppBar>
      <Main>
        <Home />
      </Main>
    </Page>
  );
}

export default Layout;

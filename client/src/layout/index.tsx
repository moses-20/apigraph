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
      <Box sx={{ maxWidth: 700, mx: "auto", px: 2 }}>
        <Typography textAlign="center">
          NOTE: No reference to real data is made; data used is randomly
          generated. Please disregard any illogical representation
        </Typography>
      </Box>
    </Page>
  );
}

export default Layout;

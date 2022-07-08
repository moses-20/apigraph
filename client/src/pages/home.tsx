import { Box, Typography } from "@mui/material";
import { useEffect } from "react";
import History from "widgets/history";
import logs from "data";
import Search from "widgets/search";

function Home() {
  useEffect(() => {
    document.title = "Home Page";
  });

  return (
    <Box>
      <Typography>Home</Typography>
      <Search />
      <History logs={logs} />
    </Box>
  );
}

export default Home;

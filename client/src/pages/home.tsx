import { useEffect } from "react";
import { Box } from "@mui/material";
import History from "widgets/history";
import Filter from "widgets/filter";

function Home() {
  useEffect(() => {
    document.title = "Home Page";
  });

  return (
    <Box sx={{ flex: 1, width: "100%", my: 5 }}>
      <Filter />
      <History />
    </Box>
  );
}

export default Home;

import { useEffect } from "react";
import { Box } from "@mui/material";
import History from "widgets/history";
import Filter from "widgets/filter";
import logs from "data";

function Home() {
  useEffect(() => {
    document.title = "Home Page";
  });

  return (
    <Box sx={{ flex: 1, width: "100%", my: 5 }}>
      <Filter />
      <History logs={logs} />
    </Box>
  );
}

export default Home;

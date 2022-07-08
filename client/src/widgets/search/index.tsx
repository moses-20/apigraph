import { Menu, SearchSharp } from "@mui/icons-material";
import { Box, IconButton, InputBase, Paper, Typography } from "@mui/material";

function Search() {
  return (
    <Box>
      <Typography> Search </Typography>

      <Paper
        elevation={10}
        sx={{ width: 650, m: 1, px: 2, py: 1, display: "flex" }}
      >
        <IconButton>
          <Menu />
        </IconButton>
        <InputBase sx={{ flex: 1, ml: 1 }} placeholder="Search" />
        <IconButton>
          <SearchSharp />
        </IconButton>
      </Paper>
    </Box>
  );
}

export default Search;

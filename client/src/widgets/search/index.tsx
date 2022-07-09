import { Menu, SearchSharp } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";

function Search() {
  return (
    <Paper
      elevation={0}
      sx={{
        m: 1,
        px: 2,
        py: 1,
        flex: 1,
        maxWidth: 700,
        display: "flex",
        backgroundColor: (theme) => theme.palette.common.black,
      }}
    >
      <IconButton>
        <Menu />
      </IconButton>
      <InputBase sx={{ flex: 1, ml: 1 }} placeholder="Search" />
      <IconButton>
        <SearchSharp />
      </IconButton>
    </Paper>
  );
}

export default Search;

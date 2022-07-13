import { useState } from "react";
import { Clear, SearchSharp } from "@mui/icons-material";
import { IconButton, InputBase, Paper } from "@mui/material";
import { useAppContext } from "context/app.context";
import { searchQueryVar } from "apollo/variables";

function Search() {
  const { searchMode, toggleSearchMode } = useAppContext();
  const [query, setQuery] = useState<string>("");

  const handleQuery = () => {
    if (query.length > 3) {
      searchQueryVar(query);
      toggleSearchMode(true);
    }
  };

  const clearSearch = () => {
    setQuery("");
    toggleSearchMode(false);
  };

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
      <IconButton onClick={handleQuery}>
        <SearchSharp />
      </IconButton>
      <InputBase
        value={query}
        placeholder="Search"
        sx={{ flex: 1, ml: 1 }}
        onChange={(e) => setQuery(e.target.value)}
        onKeyDown={(e) => (e.code === "Enter" ? handleQuery() : null)}
      />
      {searchMode && (
        <IconButton onClick={clearSearch}>
          <Clear />
        </IconButton>
      )}
    </Paper>
  );
}

export default Search;

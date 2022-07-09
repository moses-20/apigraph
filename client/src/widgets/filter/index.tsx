import { Box, styled, Typography } from "@mui/material";

const arr: string[] = [
  "Credit",
  "Debit",
  "Success",
  "Pending",
  "Failed",
  "Credit",
  "Debit",
  "Success",
  "Pending",
  "Failed",
];

const FilterList = styled("div")(({ theme }) => ({
  margin: "0 30px",
  padding: "2px",
  overflowX: "scroll",
  whiteSpace: "nowrap",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "&::-webkit-scrollbar": {
    background: "transparent",
  },
}));

const FilterListItem = styled("div")(({ theme }) => ({
  display: "inline-block",
  minWidth: 100,
  margin: "0 4px",
  padding: "4px",
  textAlign: "center",
  backgroundColor: theme.palette.common.black,
  borderRadius: theme.shape.borderRadius,
  border: "0.5px solid black",
  boxSizing: "border-box",
}));

function Filter() {
  return (
    <Box sx={{ maxWidth: 700, mx: "auto" }}>
      {/* TODO: add left arrow here */}
      <FilterList>
        {arr.map((itm, idx) => (
          <FilterListItem
            key={idx}
            sx={{
              color: (theme) =>
                idx % 2 === 0 ? theme.palette.info.light : "white",
              borderBottomColor: (theme) =>
                idx % 2 === 0 ? theme.palette.info.main : "black",
            }}
          >
            {itm}
          </FilterListItem>
        ))}
      </FilterList>
      {/* TODO: add right arrow here */}
    </Box>
  );
}

export default Filter;

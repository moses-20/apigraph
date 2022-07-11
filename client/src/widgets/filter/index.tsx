import { Box, Button, Stack, Typography } from "@mui/material";
import { FilterList, FilterListItem } from "material/filterlist";
import { useHomeProvider } from "contexts/home.context";

const arr: string[] = [
  "Credit",
  "Debit",
  "Reversal",
  "Success",
  "Pending",
  "Failed",
];

function Filter() {
  const { filterString, handleFilters } = useHomeProvider();

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", mb: 3 }}>
      <FilterList>
        {arr.map((itm, idx) => (
          <FilterListItem
            key={idx}
            selected={filterString === itm ? true : false}
            onClick={() => handleFilters(itm)}
          >
            {itm}
          </FilterListItem>
        ))}
      </FilterList>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ display: filterString ? "flex" : "none", pt: 2 }}
      >
        <Typography variant="h3" sx={{ mt: 1 }}>
          Filter by {filterString}
        </Typography>
        <Button onClick={() => handleFilters()}>Clear Filters</Button>
      </Stack>
    </Box>
  );
}

export default Filter;

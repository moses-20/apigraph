import { Box, Button, Stack } from "@mui/material";
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
  const { queryValues, handleQueryValues, handleFiltersOn } = useHomeProvider();

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", mb: 3 }}>
      <FilterList>
        {arr.map((itm, idx) => (
          <FilterListItem
            key={idx}
            selected={queryValues.includes(itm)}
            onClick={() => handleQueryValues(itm)}
          >
            {itm}
          </FilterListItem>
        ))}
      </FilterList>
      <Stack
        direction="row"
        justifyContent="flex-end"
        sx={{ display: queryValues.length > 0 ? "flex" : "none" }}
      >
        <Button sx={{ mt: 2 }} onClick={handleFiltersOn}>
          Clear Filters
        </Button>
      </Stack>
    </Box>
  );
}

export default Filter;

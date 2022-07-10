import { Box } from "@mui/material";
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
  const { queryValues, handleQueryValues } = useHomeProvider();

  return (
    <Box sx={{ maxWidth: 700, mx: "auto" }}>
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
    </Box>
  );
}

export default Filter;

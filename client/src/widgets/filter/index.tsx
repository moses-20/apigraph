import { useState } from "react";
import { Box, Button, Stack, Typography } from "@mui/material";
import { FilterList, FilterListItem } from "material/filterlist";
import { logActionStatusVar, logActionTypeVar } from "apollo/variables";
import { useAppContext } from "context/app.context";

const filterGroups: { label: string; group: string }[] = [
  { label: "Credit", group: "type" },
  { label: "Debit", group: "type" },
  { label: "Reversal", group: "type" },
  { label: "Success", group: "status" },
  { label: "Failed", group: "status" },
  { label: "Pending", group: "status" },
];

function Filter() {
  const { searchMode } = useAppContext();
  const [activeFilters, setActiveFilters] = useState<any>({});

  const setFilters = (group: string, label: string) => {
    setActiveFilters((prev: any) => ({
      ...prev,
      [group]: label,
    }));

    switch (group) {
      case "type":
        logActionTypeVar(label);
        break;
      case "status":
        logActionStatusVar(label);
        break;
      default:
        logActionTypeVar("");
        logActionStatusVar("");
        break;
    }
  };

  const clearFilters = () => {
    setActiveFilters({});
    logActionTypeVar("");
    logActionStatusVar("");
  };

  if (searchMode) {
    return null;
  }

  return (
    <Box sx={{ maxWidth: 700, mx: "auto", mb: 3 }}>
      <FilterList>
        {filterGroups.map((itm, idx) => (
          <FilterListItem
            key={idx}
            active={activeFilters[itm.group] === itm.label}
            onClick={() => {
              setFilters(itm.group, itm.label);
            }}
          >
            {itm.label}
          </FilterListItem>
        ))}
      </FilterList>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{
          display: Object.keys(activeFilters).length > 0 ? "flex" : "none",
          pt: 2,
        }}
      >
        <Typography variant="body2" sx={{ mt: 1 }}>
          Filter by {Object.values(activeFilters).reverse().join(", ")}
        </Typography>
        <Button onClick={() => clearFilters()}>Clear Filters</Button>
      </Stack>
    </Box>
  );
}

export default Filter;

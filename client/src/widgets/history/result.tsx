import { Box, Paper, Typography, CircularProgress } from "@mui/material";
import ActionCard from "./action";
import { Action } from "types";

interface Props {
  query: any;
}

function SearchResults({ query }: Props) {
  const { loading, error, data } = query;

  if (loading)
    return (
      <Box
        sx={{
          maxWidth: 700,
          display: "flex",
          justifyContent: "center",
          mx: "auto",
          my: 10,
          py: 10,
        }}
      >
        <Paper sx={{ p: 10 }}>
          <CircularProgress />
        </Paper>
      </Box>
    );

  if (error) {
    console.log("HISTORY LOGS ERROR:", error);
    return (
      <Box
        sx={{
          maxWidth: 700,
          display: "flex",
          justifyContent: "center",
          mx: "auto",
          my: 10,
          py: 10,
        }}
      >
        <Paper elevation={10} sx={{ p: 10 }}>
          <Typography> There was an Error. </Typography>
        </Paper>
      </Box>
    );
  }

  return (
    <Box
      sx={{
        maxWidth: 700,
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        mx: "auto",
      }}
    >
      {data.actionsBySearch.length > 0 ? (
        data.actionsBySearch.map((action: Action) => (
          <ActionCard key={action.id} action={action} />
        ))
      ) : (
        <Box
          sx={{
            maxWidth: 700,
            display: "flex",
            justifyContent: "center",
            mx: "auto",
            my: 10,
            py: 10,
          }}
        >
          <Paper sx={{ p: 10 }}>
            <Typography> No results match your search </Typography>
          </Paper>
        </Box>
      )}
    </Box>
  );
}

export default SearchResults;

import { Box, Paper, Typography, CircularProgress } from "@mui/material";
import { useAppContext } from "context/app.context";
import useApolloQuery from "hooks/useApolloQuery";
import SearchResults from "./result";
import LogActions from "./logs";

function History() {
  const { searchMode } = useAppContext();
  const apolloQuery = useApolloQuery();

  if (searchMode) {
    return <SearchResults query={apolloQuery} />;
  }

  return <LogActions query={apolloQuery} />;
}

export default History;

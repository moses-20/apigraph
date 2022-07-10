import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import dayjs from "dayjs";
import ActionCard from "./actionCard";
import { useQuery } from "@apollo/client";
import { GET_HISTORY } from "queries";
import { useHomeProvider } from "contexts/home.context";

interface Action {
  id: string;
  status: string;
  amount: string;
  type: string;
  party: string;
  narrative: string;
}

interface Log {
  id: string;
  date: string;
  actions: Action[];
}

function History() {
  const { queryValues } = useHomeProvider();
  const { loading, error, data } = useQuery(GET_HISTORY);

  // TODO: refetch graphql query when `queryValues` change
  console.log("QUERY VALUES:", queryValues);

  if (loading) return <div> loading </div>;

  if (error) return <div> merror </div>;

  return (
    <Box
      sx={{
        maxWidth: 700,
        display: "flex",
        justifyContent: "center",
        mx: "auto",
      }}
    >
      <List data-testid="log-list">
        {data.logs.map((log: Log) => (
          <ListItem key={log.id} data-testid="log-item" disablePadding={true}>
            <List
              data-testid="log-action"
              disablePadding={true}
              sx={{ width: "100%" }}
            >
              <ListSubheader data-testid="log-action-header">
                <ListItemText
                  primary={dayjs(log.date).format("dddd")}
                  secondary={dayjs(log.date).format("DD MMMM, YYYY")}
                  primaryTypographyProps={{
                    fontWeight: "bold",
                    fontSize: 20,
                  }}
                  secondaryTypographyProps={{
                    fontSize: 18,
                  }}
                />
              </ListSubheader>
              {log.actions.map((action: Action) => (
                <ActionCard key={`${log.id}-${action.id}`} action={action} />
              ))}
            </List>
          </ListItem>
        ))}
      </List>
    </Box>
  );
}

export default History;

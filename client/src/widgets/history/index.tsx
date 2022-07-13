import {
  Box,
  List,
  Paper,
  ListItem,
  Typography,
  ListItemText,
  ListSubheader,
  CircularProgress,
} from "@mui/material";
import dayjs from "dayjs";
import ActionCard from "./actionCard";
import { Action, Log } from "types";
import { useQuery } from "@apollo/client";
import { GET_LOG_HISTORY } from "apollo/queries";

function History() {
  const { loading, error, data } = useQuery(GET_LOG_HISTORY, {
    variables: {},
  });

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
                {log.actions.length > 0 && (
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
                )}
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

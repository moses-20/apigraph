import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import dayjs from "dayjs";
import ActionCard from "./actionCard";

interface Props {
  logs: {
    id: string;
    date: string;
    actions: {
      id: string;
      status: string;
      amount: string;
      type: string;
      narrative: string;
    }[];
  }[];
}

function History({ logs }: Props) {
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
        {logs.map((log) => (
          <ListItem key={log.id} data-testid="log-item" disablePadding={true}>
            <List data-testid="log-action" disablePadding={true}>
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
              {log.actions.map((action) => (
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

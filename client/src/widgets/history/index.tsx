import {
  Box,
  List,
  ListItem,
  ListItemText,
  ListSubheader,
} from "@mui/material";
import dayjs from "dayjs";
import ActionCard from "./actionCard";

interface Log {
  id: string;
  date: string;
  actions: {
    id: string;
    status: string;
    amount: string;
    type: string;
    narrative: string;
  }[];
}

interface Props {
  logs: Log[];
}

function History({ logs }: Props) {
  return (
    <Box>
      <List data-testid="log-list">
        {logs.map((log) => (
          <ListItem key={log.id} data-testid="log-item">
            <List data-testid="log-action">
              <ListSubheader data-testid="log-action-header">
                <ListItemText
                  primary={dayjs(log.date).format("dddd")}
                  secondary={dayjs(log.date).format("DD MMMM YYYY")}
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

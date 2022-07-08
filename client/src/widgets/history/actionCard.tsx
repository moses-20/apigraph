import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

interface Props {
  action: {
    id: string;
    status: string;
    amount: string;
    type: string;
    narrative: string;
  };
}

function ActionCard({ action }: Props) {
  return (
    <Box data-testid="log-action-item-text" sx={{ maxWidth: 700 }}>
      <Stack direction="row">
        <Card
          elevation={10}
          sx={{
            minWidth: 150,
            pt: 4,
          }}
        >
          {action.type === "Credit" ? (
            <ArrowDownward color="success" fontSize="large" />
          ) : (
            <ArrowUpward color="error" fontSize="large" />
          )}
          <Typography fontSize={25}>{action.type}</Typography>
        </Card>
        <Card elevation={10}>
          <CardContent>
            <Stack
              direction="row"
              justifyContent="space-between"
              sx={{ mb: 1 }}
            >
              <Typography fontWeight="bold">{action.amount}</Typography>
              <Typography
                sx={{
                  color:
                    action.status === "Success" ? "success.main" : "error.main",
                }}
              >
                {action.status}
              </Typography>
            </Stack>
            <Typography>{action.narrative}</Typography>
          </CardContent>
        </Card>
      </Stack>
    </Box>
  );
}

export default ActionCard;

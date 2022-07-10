import { ArrowDownward, ArrowUpward } from "@mui/icons-material";
import { Box, Card, CardContent, Stack, Typography } from "@mui/material";

interface Props {
  action: {
    id: string;
    status: string;
    amount: string;
    type: string;
    party: string;
    narrative: string;
  };
}

function ActionCard({ action }: Props) {
  return (
    <Box data-testid="log-action-item-text">
      <Stack direction="row">
        <Card
          elevation={0}
          sx={{
            p: 0,
            width: 150,
            backgroundColor: (theme) => theme.palette.common.black,
          }}
        >
          <CardContent>
            <Typography variant="caption" sx={{ display: "block" }}>
              {action.party}
            </Typography>
            {action.type === "Credit" ? (
              <ArrowDownward color="success" fontSize="large" />
            ) : (
              <ArrowUpward color="error" fontSize="large" />
            )}
            <Typography fontSize={20}>{action.type}</Typography>
          </CardContent>
        </Card>
        <Card
          elevation={0}
          sx={{
            p: 0,
            flex: 1,
            backgroundColor: (theme) => theme.palette.common.black,
          }}
        >
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

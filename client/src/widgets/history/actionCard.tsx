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
    <Box data-testid="log-action-item-text">
      <Stack direction="row">
        <Card
          elevation={0}
          sx={{
            pt: 4,
            minWidth: 150,
            backgroundColor: (theme) => theme.palette.common.black,
          }}
        >
          {action.type === "Credit" ? (
            <ArrowDownward color="success" fontSize="large" />
          ) : (
            <ArrowUpward color="error" fontSize="large" />
          )}
          <Typography fontSize={25}>{action.type}</Typography>
        </Card>
        <Card
          elevation={0}
          sx={{
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

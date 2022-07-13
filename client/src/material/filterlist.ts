import { Box, styled, BoxProps } from "@mui/material";

interface FilterListItemProps extends BoxProps {
  active?: boolean;
}

const FilterList = styled(Box)({
  overflowX: "scroll",
  whiteSpace: "nowrap",
  scrollbarWidth: "none",
  msOverflowStyle: "none",
  "&::-webkit-scrollbar": {
    background: "transparent",
  },
});

const FilterListItem = styled(Box)<FilterListItemProps>(
  ({ theme, active }) => ({
    display: "inline-block",
    minWidth: 150,
    margin: "0 8px",
    padding: "6px",
    textAlign: "center",
    backgroundColor: theme.palette.common.black,
    borderRadius: theme.shape.borderRadius,
    border: "0.5px solid black",
    boxSizing: "border-box",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: theme.palette.background.paper,
    },
    ...(active && {
      pointerEvents: "none",
      color: theme.palette.info.light,
      borderBottomColor: theme.palette.info.main,
      backgroundColor: theme.palette.background.default,
    }),
  })
);

export { FilterList, FilterListItem };

import { ThemeOptions } from "@mui/material";

const components: ThemeOptions["components"] = {
  MuiContainer: {
    styleOverrides: {
      root: {
        paddingLeft: "15px !important",
        paddingRight: "15px !important",
        maxWidth: "1600px",
      },
    },
  },

  MuiButton: {
    defaultProps: {
      disableRipple: true,
    },

    styleOverrides: {
      root: ({ ownerState, theme }) => ({
        minWidth: 150,
        textTransform: "none",
        boxShadow: "none",
        "&:hover": {
          boxShadow: "none",
        },

        ...(ownerState.variant === "contained" && {
          backgroundImage: `linear-gradient(130deg, ${theme.palette.primary.light}, "black")`,
        }),
      }),
    },
  },

  MuiListItem: {
    styleOverrides: {
      root: {
        borderRadius: "5px",
      },
    },
  },

  MuiCard: {
    styleOverrides: {
      root: {
        borderRadius: "5px",
        padding: "14px",
        margin: "15px",
        boxShadow: "0px 7px 30px 0px rgba(90, 114, 123, 0.11)",
      },
    },
  },

  MuiListItemIcon: {
    styleOverrides: {
      root: {
        minWidth: "40px",
      },
    },
  },

  MuiMenuItem: {
    styleOverrides: {
      root: {
        borderRadius: "0",
      },
    },
  },

  MuiChip: {
    styleOverrides: {
      root: {
        fontWeight: "500",
        fontSize: "0.75rem",
      },
    },
  },
};

export default components;

import { Typography } from "@mui/material";
import { createTheme, ThemeProvider, styled } from "@mui/material/styles";
import Box from "@mui/material/Box";

export const daycareTheme = createTheme({
  palette: {
    primary: {
      main: "#4ccfe0",
      light: "#87ffff",
      dark: "#009eae",
    },
    secondary: {
      main: "#78909c",
      light: "#a7c0cd",
      dark: "#4b636e",
    },
    triadic: {
      blue: "#5e4de1",
      pink: "#e14dd0",
    },
    complementary: {
      main: "#e15e4d",
    },
  },
  typography: {
    lightColor: { color: "#fafafa" },
    darkColor: { color: "#000000" },
    complementary: { color: "#e15e4d" },
    triadicBlue: { color: "#5e4de1" },
    triadicPink: { color: "#e14dd0" },
  },
});

export const NavBarItem = styled(Box)(() => ({
  "&:hover": {
    borderBottom: `2px solid ${daycareTheme.palette.secondary.dark}`,
    marginBottom: "0px",
  },
  maxHeight: "20px",
  marginLeft: 10,
  marginBottom: "2px",
}));

export const NavBarText = styled(Typography)(() => ({
  color: daycareTheme.typography.lightColor.color,
  fontWeight: "bold",
  "&:hover": {
    cursor: "pointer",
  },
}));

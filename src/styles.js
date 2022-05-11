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
  // backgroundColor: daycareTheme.palette.primary.light,
  // color: daycareTheme.typography.darkColor,
  "&:hover": {
    // backgroundColor: daycareTheme.palette.secondary.dark,
    // color: daycareTheme.typography.lightColor,
    borderBottom: `2px solid ${daycareTheme.palette.secondary.dark}`,
  },
  maxHeight: "20px",
  margin: 5,
}));

export const NavBarText = styled(Typography)(() => ({
  color: daycareTheme.typography.lightColor.color,
  fontWeight: "bold",
  "&:hover": {
    // color: daycareTheme.typography.lightColor.color,
    cursor: "pointer",
  },
}));

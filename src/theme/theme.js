import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "#7c4dff", // лилаво
    },
    secondary: {
      main: "#00ffea", // циан
    },
    background: {
      default: "#000000", // черен фон
      paper: "#121212", // фон на компоненти като Card, Paper
    },
    text: {
      primary: "#ffffff", // бял текст
      secondary: "#cccccc",
    },
  },

  typography: {
    fontFamily: "Roboto, sans-serif",
  },
});

export default theme;

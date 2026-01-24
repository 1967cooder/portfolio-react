// src/context/ThemeContext.jsx
import React, { createContext, useState, useMemo } from "react";
import { createTheme } from "@mui/material/styles";

export const ThemeModeContext = createContext();

export const ThemeModeProvider = ({ children }) => {
  const [mode, setMode] = useState("dark"); // по подразбиране dark

  const toggleTheme = () => {
    setMode((prev) => (prev === "dark" ? "light" : "dark"));
  };

  //#cfd6ff
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode: mode,
          primary: { main: "#7c4dff" },
          secondary: { main: "#00ffea" },
          background: {
            default: mode === "dark" ? "#000000" : "#e3edff",
            paper: mode === "dark" ? "#121212" : "#f0e6ff",
          },
          text: {
            primary: mode === "dark" ? "#ffffff" : "#000000",
            secondary: mode === "dark" ? "#cccccc" : "#333333",
          },
        },
        typography: { fontFamily: "Roboto, sans-serif" },
      }),
    [mode]
  );

  return (
    <ThemeModeContext.Provider value={{ toggleTheme, mode, theme }}>
      {children}
    </ThemeModeContext.Provider>
  );
};

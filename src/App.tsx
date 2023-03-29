import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/Navbar/Navbar";

function App() {
  const darkTheme = createTheme({
    palette: {
      mode: "dark",
      primary: { main: "#fff" },
    },
    typography: { fontFamily: `"Mulish"` },
  });

  const lightTheme = createTheme({
    palette: { mode: "light", primary: { main: "#000" } },
    typography: { fontFamily: `"Mulish", "Philosopher"` },
  });

  const [theme, setTheme] = useState(darkTheme);

  const toggleTheme = (): void => {
    setTheme((current) => {
      if (current.palette.mode === "light") {
        return darkTheme;
      } else {
        return lightTheme;
      }
    });
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        sx={{
          height: "100svh",
          width: "100vw",
          backgroundColor: "rgb(18,18,18)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflow: "hidden",
          position: "relative",
          zIndex: 0,
        }}
        id="App"
      >
        <Navbar toggleTheme={toggleTheme} />

        <Outlet />
      </Box>
    </ThemeProvider>
  );
}

export default App;

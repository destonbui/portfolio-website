import { useState } from "react";
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
    typography: { fontFamily: `"Mulish"` },
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
          backgroundColor:
            theme.palette.mode === "light" ? "#fafafa" : "rgb(18,18,18)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          overflowY: "auto",
          overflowX: "hidden",
          position: "relative",
          zIndex: 0,
          backgroundImage: `radial-gradient(${
            theme.palette.mode === "light"
              ? "rgb(200 200 200)"
              : "rgb(50 50 50)"
          } 1px, transparent 0)`,
          backgroundSize: "40px 40px",
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

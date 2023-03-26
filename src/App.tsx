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
        // onMouseMove={(e) => {
        //   const trailer = document.getElementById("trailer");

        //   const x = e.clientX - trailer.offsetWidth / 2;
        //   const y = e.clientY - trailer.offsetHeight / 2;

        //   trailer.style.transform = `translate(${x}px, ${y}px)`;
        // }}
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
        {/* <div
          id="trailer"
          style={{
            position: "absolute",
            zIndex: 10000,
            top: "0px",
            left: "0px",
            borderRadius: "100%",
            background: "rgb(255, 255, 255)",
            background:
              "radial-gradient(circle, rgba(255,255,255,0.1) 0%, rgba(255,255,255,0.09) 100%)",
            boxShadow: "0px 0px 60px #fff",
            height: "30px",
            width: "30px",
            pointerEvents: "none",
          }}
        /> */}
      </Box>
    </ThemeProvider>
  );
}

export default App;

import { useState, useEffect } from "react";
import { Outlet, useLocation, useMatch } from "react-router-dom";
import { Box, CssBaseline } from "@mui/material";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/Navbar/Navbar";

import { useNavigate } from "react-router-dom";

function App() {
  const [current, setCurrent] = useState<string>("/");

  const currentPath = useLocation();
  const navigate = useNavigate();

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

  useEffect(() => {
    setTimeout(() => {
      setCurrent(currentPath.pathname);
    }, 1500);
  }, [currentPath]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box
        onWheel={(e) => {
          switch (current) {
            case "/":
              if (e.deltaY > 0) {
                navigate("/about");
              } else {
                navigate("/contact");
              }
              break;

            case "/about":
              if (e.deltaY > 0) {
                navigate("/projects");
              } else {
                navigate("/");
              }
              break;

            case "/projects":
              if (e.deltaY > 0) {
                navigate("/contact");
              } else {
                navigate("/about");
              }
              break;

            case "/contact":
              if (e.deltaY > 0) {
                navigate("/");
              } else {
                navigate("/projects");
              }
              break;

            default:
              break;
          }
        }}
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
          backgroundImage: "radial-gradient(rgb(50 50 50) 1px, transparent 0)",
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

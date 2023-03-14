import { motion } from "framer-motion";
import { useState } from "react";
import { Outlet } from "react-router-dom";

import { createTheme, ThemeProvider } from "@mui/material/styles";

import Navbar from "./components/Navbar";

function App() {
  const darkTheme = createTheme({
    palette: { mode: "dark" },
  });

  const lightTheme = createTheme({
    palette: { mode: "light" },
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
      <motion.div
        style={{
          height: "100vh",
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
      </motion.div>
    </ThemeProvider>
  );
}

export default App;

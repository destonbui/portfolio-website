import { Box, IconButton, Tooltip } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { motion } from "framer-motion";

import LightModeIcon from "@mui/icons-material/LightMode";
import DarkModeIcon from "@mui/icons-material/DarkMode";

type DarkLightSwitchProps = {
  toggleTheme: () => void;
};

function DarkLightSwitch({ toggleTheme }: DarkLightSwitchProps) {
  const theme = useTheme();

  return (
    <Box>
      <motion.div
        variants={{
          light: {
            backgroundColor: "#fff",
            top: -9999 / 2,
            left: -9999 / 2,
            width: 9999,
            height: 9999,
          },
          dark: {
            backgroundColor: "rgb(18,18,18)",
            width: 40,
            height: 40,
            borderRadius: "100%",
          },
        }}
        style={{
          position: "absolute",
          zIndex: -1,
        }}
        animate={theme.palette.mode}
        transition={{ duration: 0.7 }}
      ></motion.div>
      <IconButton
        onClick={() => {
          toggleTheme();
        }}
      >
        {theme.palette.mode === "light" ? (
          <Tooltip title="Dark Mode" enterDelay={300}>
            <DarkModeIcon />
          </Tooltip>
        ) : (
          <Tooltip title="Light Mode" enterDelay={300}>
            <LightModeIcon sx={{ color: "text.secondary" }} />
          </Tooltip>
        )}
      </IconButton>
    </Box>
  );
}

export default DarkLightSwitch;

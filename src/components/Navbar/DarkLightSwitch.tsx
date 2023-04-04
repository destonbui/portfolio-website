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
            backgroundColor: "rgb(245, 245, 245)",
            top: -4000 / 2,
            left: -4000 / 2,
            width: 4000,
            height: 4000,
            borderRadius: "100%",
          },
          dark: {
            backgroundColor: "rgb(18,18,18)",
            right: 0,
            width: 40,
            height: 40,
            borderRadius: "100%",
          },
        }}
        style={{
          position: "absolute",
          zIndex: -1,
        }}
        initial="dark"
        animate={theme.palette.mode}
        transition={{
          duration: 0.7,
          ease: [0.75, 0.36, 0.46, 0.91],
        }}
      ></motion.div>
      <motion.div
        style={{ borderRadius: "100%" }}
        initial={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.8 }}
      >
        <IconButton
          onClick={() => {
            toggleTheme();
          }}
        >
          {theme.palette.mode === "light" ? (
            <Tooltip title="Dark Mode" enterDelay={300}>
              <DarkModeIcon sx={{ color: "text.secondary" }} />
            </Tooltip>
          ) : (
            <Tooltip title="Light Mode" enterDelay={300}>
              <LightModeIcon sx={{ color: "text.secondary" }} />
            </Tooltip>
          )}
        </IconButton>
      </motion.div>
    </Box>
  );
}

export default DarkLightSwitch;

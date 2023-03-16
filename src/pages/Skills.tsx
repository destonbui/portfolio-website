import { Box, Typography, Button, useTheme } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Skills() {
  return (
    <motion.div
      style={{
        height: "100%",
        width: "80%",
        maxWidth: 1200,
        position: "relative",
        zIndex: 2,
      }}
    >
      <Box mt={20} width="65%"></Box>
    </motion.div>
  );
}

export default Skills;

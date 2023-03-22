import { Box, Typography, Button, useTheme } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Skills() {
  const navigate = useNavigate();
  const prev = "/projects";
  const next = "/";
  return (
    <motion.div
      onWheel={(e) => {
        if (e.deltaY > 0) {
          navigate(next);
          return;
        } else {
          navigate(prev);
          return;
        }
      }}
      style={{
        height: "100%",
        width: "80%",
        maxWidth: 1200,
        position: "relative",
        zIndex: 2,
      }}
    ></motion.div>
  );
}

export default Skills;

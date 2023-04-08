import { useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Logo() {
  const theme = useTheme();
  const navigate = useNavigate();
  const logoVariants = {
    light: { filter: "brightness(0)" },
    dark: { filter: "brightness(100)" },
  };
  return (
    <motion.img
      onClick={() => {
        navigate("/");
      }}
      src="/logo.svg"
      height="40px"
      style={{ cursor: "pointer" }}
      variants={logoVariants}
      animate={theme.palette.mode}
      transition={{ duration: 0 }}
    ></motion.img>
  );
}

export default Logo;

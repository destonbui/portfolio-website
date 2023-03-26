import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type TopNavItemProps = {
  pathname: string;
  to: string;
  path: string;
};

function TopNavItem({ pathname, to, path }: TopNavItemProps) {
  const navigate = useNavigate();
  const theme = useTheme();
  const textPrimary = theme.palette.text.primary;
  const textSecondary = theme.palette.text.secondary;
  const variants = {
    normal: { color: textSecondary, transition: { duration: 0.5 } },
    active: {
      color: textPrimary,
      filter: "drop-shadow(0px 0px 10px rgb(255, 255, 255, 0.5))",
      transition: { duration: 0.5 },
    },
  };
  return (
    <motion.span
      variants={variants}
      animate={pathname === path ? "active" : "normal"}
      whileHover={{
        scale: 1.05,
        cursor: "pointer",
      }}
      whileTap={{ scale: 0.95 }}
      onClick={() => {
        navigate(path);
      }}
    >
      <Typography
        variant="body1"
        letterSpacing={1}
        fontFamily="Mulish"
        // fontWeight={theme.palette.mode === "light" ? 700 : 400}
        fontWeight={400}
        sx={{
          fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
        }}
      >
        {to}
      </Typography>
    </motion.span>
  );
}

export default TopNavItem;

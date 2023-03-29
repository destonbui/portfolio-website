import { Typography, useTheme } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate, useMatch } from "react-router-dom";

type TopNavItemProps = {
  to: string;
  path: string;
};

function TopNavItem({ to, path }: TopNavItemProps) {
  const navigate = useNavigate();
  const isCurrent = useMatch(path);

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
      animate={isCurrent ? "active" : "normal"}
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

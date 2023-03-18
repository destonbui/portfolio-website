import { Box, Typography, Stack, useTheme, IconButton } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate, useResolvedPath } from "react-router-dom";
import DarkLightSwitch from "./DarkLightSwitch";
import MenuIcon from "@mui/icons-material/Menu";

type NavbarProps = {
  toggleTheme: () => void;
};

function Navbar({ toggleTheme }: NavbarProps) {
  const theme = useTheme();

  const textPrimary = theme.palette.text.primary;
  const textSecondary = theme.palette.text.secondary;

  const navigate = useNavigate();
  const pathname = useResolvedPath().pathname;

  const variants = {
    normal: { color: textSecondary },
    active: { color: textPrimary },
  };

  const logoVariants = {
    light: { filter: "brightness(0)" },
    dark: { filter: "brightness(100)" },
  };

  return (
    <>
      <Box
        mt={{ xs: 2, sm: 2, md: 5 }}
        height="80px"
        width="80%"
        maxWidth={1200}
        display={{ xs: "none", sm: "none", md: "flex" }}
        flexDirection="row"
        alignItems="center"
        position="relative"
      >
        <motion.img
          onClick={() => {
            navigate("/");
          }}
          src="/logo.svg"
          height="40px"
          style={{ cursor: "pointer" }}
          variants={logoVariants}
          animate={theme.palette.mode}
        ></motion.img>
        <Box flexGrow={1}></Box>
        <Stack
          direction="row"
          gap={{ xs: 2, sm: 2, md: 2, lg: 3, xl: 4 }}
          alignItems="center"
        >
          <motion.span
            variants={variants}
            animate={pathname === "/" ? "active" : "normal"}
            whileHover={{
              scale: 1.05,
              cursor: "pointer",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigate("/");
            }}
          >
            <Typography
              variant="body1"
              letterSpacing={1}
              fontWeight={400}
              sx={{
                fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
              }}
            >
              Home
            </Typography>
          </motion.span>

          <motion.span
            variants={variants}
            animate={pathname === "/skills" ? "active" : "normal"}
            whileHover={{
              scale: 1.05,
              cursor: "pointer",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigate("/skills");
            }}
          >
            <Typography
              variant="body1"
              letterSpacing={1}
              fontWeight={400}
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
            >
              Skills
            </Typography>
          </motion.span>

          <motion.span
            variants={variants}
            animate={pathname === "/projects" ? "active" : "normal"}
            whileHover={{
              scale: 1.05,
              cursor: "pointer",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigate("/projects");
            }}
          >
            <Typography
              variant="body1"
              letterSpacing={1}
              fontWeight={400}
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
            >
              Projects
            </Typography>
          </motion.span>

          <motion.span
            variants={variants}
            animate={pathname === "/contact" ? "active" : "normal"}
            whileHover={{
              scale: 1.05,
              cursor: "pointer",
            }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
              navigate("/contact");
            }}
          >
            <Typography
              variant="body1"
              letterSpacing={1}
              fontWeight={400}
              sx={{ fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" } }}
            >
              Contact
            </Typography>
          </motion.span>

          <DarkLightSwitch toggleTheme={toggleTheme} />
        </Stack>
      </Box>

      {/* ------------------------------------------------------------------------- */}

      <Box
        mt={{ xs: 2, sm: 2, md: 5 }}
        height="80px"
        width="80%"
        maxWidth={1200}
        display={{ xs: "flex", sm: "flex", md: "none" }}
        flexDirection="row"
        alignItems="center"
        position="relative"
      >
        <motion.div>
          <IconButton sx={{ ml: -1 }}>
            <MenuIcon />
          </IconButton>
        </motion.div>
        <Box flexGrow={1}></Box>

        <DarkLightSwitch toggleTheme={toggleTheme} />
      </Box>
    </>
  );
}

export default Navbar;

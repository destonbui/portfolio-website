import {
  Box,
  Typography,
  Stack,
  useTheme,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate, useResolvedPath } from "react-router-dom";
import DarkLightSwitch from "./DarkLightSwitch";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";

import { useState } from "react";
import MenuToggle from "./MenuToggle";

type NavbarProps = {
  toggleTheme: () => void;
};

function Navbar({ toggleTheme }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = (): void => {
    setDrawerOpen(false);
  };
  const openDrawer = (): void => {
    setDrawerOpen(true);
  };

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

  const drawerVariants = {
    open: {
      x: 0,
      transition: { type: "tween" },
    },
    close: {
      x: -300,
      transition: { type: "tween", delay: 0.3 },
    },
  };

  const backdropVariants = {
    open: {
      display: "block",
      opacity: 1,
    },
    close: {
      opacity: 0,
      transition: { delay: 0.3 },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const navVariants = {
    open: {
      transition: { delay: 0.5, staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  const navItemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
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
        {/* backdrop */}
        <motion.div
          style={{
            opacity: 0,
            position: "absolute",
            top: -16,
            left: "-10vw",
            zIndex: 4,
            width: "100vw",
            height: "100svh",
            backgroundColor: "rgb(0, 0, 0, 0.5)",
          }}
          variants={backdropVariants}
          animate={drawerOpen ? "open" : "close"}
          onClick={() => {
            closeDrawer();
          }}
        />

        {/* drawer nav */}
        <motion.div
          style={{
            position: "absolute",
            top: -16,
            left: "-10vw",
            x: -300,
            zIndex: 5,
            width: "200px",
            height: "100svh",
            backgroundColor: "#000",
          }}
          variants={drawerVariants}
          animate={drawerOpen ? "open" : "close"}
        >
          <Box width="100%" height="100%" mt={12}>
            <List disablePadding>
              <motion.div
                variants={navVariants}
                animate={drawerOpen ? "open" : "closed"}
              >
                {[
                  { to: "Home", path: "/" },
                  { to: "Skills", path: "/skills" },
                  { to: "Projects", path: "/projects" },
                  { to: "Contact", path: "/contact" },
                ].map((item, i) => {
                  return (
                    <motion.div
                      onClick={() => {
                        closeDrawer();
                        navigate(item.path);
                      }}
                      key={i}
                      variants={navItemVariants}
                    >
                      <ListItem
                        disableGutters
                        sx={
                          pathname === item.path
                            ? {
                                pl: 5,
                                backgroundColor: "rgb(255,255,255, 0.1)",
                              }
                            : { pl: 5 }
                        }
                      >
                        <ListItemText sx={{ color: "#fff" }}>
                          {item.to}
                        </ListItemText>
                      </ListItem>
                    </motion.div>
                  );
                })}
              </motion.div>
            </List>
          </Box>
        </motion.div>

        {/* Toggle icon */}
        <MenuToggle
          open={() => openDrawer()}
          close={() => closeDrawer()}
          drawerOpen={drawerOpen}
        />
        <Box flexGrow={1}></Box>

        <DarkLightSwitch toggleTheme={toggleTheme} />
      </Box>
    </>
  );
}

export default Navbar;

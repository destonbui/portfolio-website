import { Box, List, ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

import { navItems } from "../navItems";
import DrawerNavItem from "./DrawerNavItem";

type MobileDrawerProps = {
  drawerOpen: boolean;
  closeDrawer: () => void;
  pathname: string;
};

function MobileDrawer({
  drawerOpen,
  closeDrawer,
  pathname,
}: MobileDrawerProps) {
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

  const navVariants = {
    open: {
      transition: { delay: 0.5, staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  };

  return (
    <motion.div
      style={{
        position: "absolute",
        top: -16,
        left: "-10vw",
        x: -300,
        zIndex: 5,
        width: "200px",
        height: "100vh",
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
            {navItems.map((item, i) => {
              return (
                <DrawerNavItem
                  key={i}
                  to={item.to}
                  path={item.path}
                  closeDrawer={closeDrawer}
                  pathname={pathname}
                />
              );
            })}
          </motion.div>
        </List>
      </Box>
    </motion.div>
  );
}

export default MobileDrawer;

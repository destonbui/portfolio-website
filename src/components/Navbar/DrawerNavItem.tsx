import { ListItem, ListItemText } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate, useMatch } from "react-router-dom";

type DrawerNavItemProps = {
  to: string;
  path: string;

  closeDrawer: () => void;
};

function DrawerNavItem({ path, to, closeDrawer }: DrawerNavItemProps) {
  const navigate = useNavigate();

  const isCurrent = useMatch(path);

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
    <motion.div
      onClick={() => {
        closeDrawer();
        navigate(path);
      }}
      variants={navItemVariants}
    >
      <ListItem
        disableGutters
        sx={
          isCurrent
            ? {
                pl: 5,
                backgroundColor: "rgb(255,255,255, 0.1)",
              }
            : { pl: 5 }
        }
      >
        <ListItemText sx={{ color: "#fff" }}>{to}</ListItemText>
      </ListItem>
    </motion.div>
  );
}

export default DrawerNavItem;

import { motion } from "framer-motion";
import { useTheme } from "@mui/material";

type MenuToggleProps = {
  drawerOpen: boolean;
  open: () => void;
  close: () => void;
};

export default function MenuToggle({
  drawerOpen,
  open,
  close,
}: MenuToggleProps) {
  const theme = useTheme();

  return (
    <motion.svg
      style={{
        position: "relative",
        zIndex: 10,
        paddingTop: 4,
        cursor: "pointer",
      }}
      onClick={() => {
        drawerOpen ? close() : open();
      }}
      width="23"
      height="23"
      viewBox="0 0 23 23"
      animate={drawerOpen ? "open" : "closed"}
    >
      <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke={
          theme.palette.mode === "dark" ? "#fff" : drawerOpen ? "#fff" : "#000"
        }
        strokeLinecap="round"
        variants={{
          closed: { d: "M 2 2.5 L 20 2.5" },
          open: { d: "M 3 16.5 L 17 2.5" },
        }}
      />
      <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke={
          theme.palette.mode === "dark" ? "#fff" : drawerOpen ? "#fff" : "#000"
        }
        strokeLinecap="round"
        d="M 2 9.423 L 20 9.423"
        variants={{
          closed: { opacity: 1 },
          open: { opacity: 0 },
        }}
        transition={{ duration: 0.1 }}
      />
      <motion.path
        fill="transparent"
        strokeWidth="3"
        stroke={
          theme.palette.mode === "dark" ? "#fff" : drawerOpen ? "#fff" : "#000"
        }
        strokeLinecap="round"
        variants={{
          closed: { d: "M 2 16.346 L 20 16.346" },
          open: { d: "M 3 2.5 L 17 16.346" },
        }}
      />
    </motion.svg>
  );
}

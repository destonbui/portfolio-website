import { motion } from "framer-motion";

type BackdropProps = {
  drawerOpen: boolean;
  closeDrawer: () => void;
};

function Backdrop({ drawerOpen, closeDrawer }: BackdropProps) {
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
  return (
    <motion.div
      style={{
        opacity: 0,
        position: "absolute",
        top: -16,
        left: "-10vw",
        zIndex: 4,
        width: "100vw",
        height: "100vh",
        backgroundColor: "rgb(0, 0, 0, 0.5)",
      }}
      variants={backdropVariants}
      animate={drawerOpen ? "open" : "close"}
      onClick={() => {
        closeDrawer();
      }}
    />
  );
}

export default Backdrop;

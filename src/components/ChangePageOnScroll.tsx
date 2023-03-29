import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { Box } from "@mui/material";
import { motion } from "framer-motion";

type ChangePageOnScrollProps = {
  prev: string;
  next: string;
};

function ChangePageOnScroll({ prev, next }: ChangePageOnScrollProps) {
  const navigate = useNavigate();

  useEffect(() => {
    const target = document.getElementById("scroll-listener");
    target?.addEventListener("scroll", (e) => {
      console.log(e);
    });
    return () => {
      target?.removeEventListener("scroll", (e) => {});
    };
  }, []);

  return (
    <motion.div
      id="scroll-listener"
      style={{
        width: "100vw",
        height: "100svh",
        position: "absolute",
        zIndex: 9999,
        top: 0,
        left: 0,
        backgroundColor: "transparent",
        pointerEvents: "none",
      }}
    />
  );
}

export default ChangePageOnScroll;

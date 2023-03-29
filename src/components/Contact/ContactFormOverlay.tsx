import { useTheme, CircularProgress } from "@mui/material";
import { motion } from "framer-motion";

import MessageSentSuccessDisplay from "./MessageSentSuccessDisplay";
import MessageSentFailedDisplay from "./MessageSentFailedDisplay";

type ContactFormOverlayProps = {
  isMessageSent: boolean | null;
  handleRetry: () => void;
};

function ContactFormOverlay({
  isMessageSent,
  handleRetry,
}: ContactFormOverlayProps) {
  const theme = useTheme();
  return (
    <motion.div
      style={{
        position: "absolute",
        zIndex: 10,
        width: "100%",
        height: "100%",
        top: 0,
        left: 0,
        backgroundColor: theme.palette.mode === "light" ? "#f0f0f0" : "#181818",
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem 2rem",
      }}
      initial={{ y: 500 }}
      animate={{
        y: 0,
        transition: { type: "tween", duration: 0.5 },
      }}
      exit={{
        y: -500,
        transition: { type: "tween", duration: 0.5 },
      }}
    >
      {isMessageSent === null ? (
        <CircularProgress />
      ) : isMessageSent ? (
        <MessageSentSuccessDisplay />
      ) : (
        <MessageSentFailedDisplay handleRetry={handleRetry} />
      )}
    </motion.div>
  );
}

export default ContactFormOverlay;

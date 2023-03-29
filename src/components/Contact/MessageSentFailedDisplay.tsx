import { Typography, Button } from "@mui/material";

import CancelIcon from "@mui/icons-material/Cancel";
import ReplayIcon from "@mui/icons-material/Replay";

import { motion } from "framer-motion";

type MessageSentFailedDisplayProps = {
  handleRetry: () => void;
};

function MessageSentFailedDisplay({
  handleRetry,
}: MessageSentFailedDisplayProps) {
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <CancelIcon color="error" sx={{ fontSize: "4rem" }} />
      <Typography
        variant="h6"
        fontFamily="Philosopher"
        fontWeight={700}
        fontSize="2rem"
        color="text.primary"
      >
        Oops!
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        color="text.secondary"
        sx={{ mt: -2 }}
      >
        Something went wrong...
      </Typography>
      <Button
        variant="outlined"
        onClick={() => {
          handleRetry();
        }}
        endIcon={<ReplayIcon />}
        sx={{
          textTransform: "none",
          borderRadius: "1rem",
          marginTop: "1rem",
        }}
      >
        Try again
      </Button>
    </motion.div>
  );
}

export default MessageSentFailedDisplay;

import { Typography } from "@mui/material";

import CheckCircleIcon from "@mui/icons-material/CheckCircle";

import { motion } from "framer-motion";

function MessageSentSuccessDisplay() {
  return (
    <motion.div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "0.5rem",
      }}
    >
      <CheckCircleIcon color="success" sx={{ fontSize: "4rem" }} />
      <Typography
        variant="h6"
        fontFamily="Philosopher"
        fontWeight={700}
        fontSize="2rem"
        color="text.primary"
      >
        Thank you!
      </Typography>
      <Typography
        variant="body1"
        textAlign="center"
        color="text.secondary"
        sx={{ mt: -1 }}
      >
        Your message has been sent.
      </Typography>
    </motion.div>
  );
}

export default MessageSentSuccessDisplay;

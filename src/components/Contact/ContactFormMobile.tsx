import { Box, Typography, Button, Modal, Card } from "@mui/material";

import { motion } from "framer-motion";

import { useState } from "react";
import { FormContextType } from "../../MessageFormContext";
import FormDisplay from "./FormDisplay";
import ContactFormOverlay from "./ContactFormOverlay";

const contentItemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0 },
};

type ContactFormMobileProps = {
  formContext: FormContextType;
};

function ContactFormMobile({ formContext }: ContactFormMobileProps) {
  const [open, setOpen] = useState(false);

  const { formAccess, isMessageSent, handleRetry } = formContext;

  const handleOpen = (): void => {
    setOpen(true);
  };

  const handleClose = (): void => {
    setOpen(false);
  };

  return (
    <Box
      flexGrow={1}
      maxWidth={"100%"}
      display={{ xs: "flex", md: "none" }}
      mt={2}
      pl={0.5}
    >
      <motion.div
        style={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
        }}
        variants={contentItemVariants}
        initial="hidden"
        animate={{
          ...contentItemVariants.show,
          transition: { delay: 0.5, duration: 0.9 },
        }}
        exit="exit"
      >
        <Typography variant="caption" color="text.secondary" fontSize="1rem">
          or
        </Typography>
        <Box display="flex" flexDirection="row">
          <Button
            onClick={() => {
              handleOpen();
            }}
            variant="outlined"
            sx={{ borderRadius: "1rem" }}
          >
            Leave me a message
          </Button>
        </Box>
      </motion.div>

      <Modal open={open} onClose={handleClose}>
        <Card
          sx={{
            position: "absolute",
            zIndex: 9999,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            width: 300,
          }}
        >
          {formAccess ? (
            ""
          ) : (
            <ContactFormOverlay
              isMessageSent={isMessageSent}
              handleRetry={handleRetry}
            />
          )}
          <FormDisplay formContext={formContext} />
        </Card>
      </Modal>
    </Box>
  );
}

export default ContactFormMobile;

import { Box, Card } from "@mui/material";

import { motion } from "framer-motion";
import { FormContextType } from "../../MessageFormContext";
import ContactFormOverlay from "./ContactFormOverlay";
import FormDisplay from "./FormDisplay";

const contentItemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0 },
};

type ContactFormProps = {
  formContext: FormContextType;
};

function ContactForm({ formContext }: ContactFormProps) {
  const { formAccess, isMessageSent, handleRetry } = formContext;

  return (
    <Box
      flexGrow={1}
      maxWidth={"40%"}
      display={{ xs: "none", md: "flex" }}
      justifyContent={"flex-end"}
    >
      <motion.div
        style={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "flex-end",
        }}
        variants={contentItemVariants}
        initial="hidden"
        animate={{
          ...contentItemVariants.show,
          transition: { delay: 0.5, duration: 0.9 },
        }}
        exit="exit"
      >
        <Card
          elevation={4}
          sx={{
            borderRadius: "1rem",
            flexGrow: 1,
            maxWidth: "400px",
            mt: 2,
            position: "relative",
            overflow: "hidden",
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
      </motion.div>
    </Box>
  );
}

export default ContactForm;

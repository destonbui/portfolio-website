import { Box, useTheme } from "@mui/material";

import { useState, useContext } from "react";

import { motion } from "framer-motion";
import { MessageFormContext, FormContextType } from "../MessageFormContext";
import ContactSnackbarDisplay from "../components/Contact/ContactSnackbarDisplay";
import ContactPageContent from "../components/Contact/ContactPageContent";
import ContactFormMobile from "../components/Contact/ContactFormMobile";
import ContactForm from "../components/Contact/ContactForm";

function Contact() {
  const [snackbarOpen, setOpen] = useState(false);
  const handleOpen = (): void => {
    setOpen(true);
  };
  const handleClose = (): void => {
    setOpen(false);
  };

  const formContext = useContext(MessageFormContext) as FormContextType;

  return (
    <motion.div
      style={{
        width: "80%",
        maxWidth: 1200,
        position: "relative",
        zIndex: 2,
      }}
    >
      <ContactSnackbarDisplay
        handleClose={handleClose}
        snackbarOpen={snackbarOpen}
      />

      <Box width="100%" mt={{ xs: 2, md: 10 }}>
        <Box display="flex" flexDirection={{ xs: "column", md: "row" }}>
          <ContactPageContent handleOpen={handleOpen} />

          {/* Form only display on big screen on phone screen display as a toggle button */}
          <ContactForm formContext={formContext} />
          <ContactFormMobile formContext={formContext} />
        </Box>
      </Box>
    </motion.div>
  );
}

export default Contact;

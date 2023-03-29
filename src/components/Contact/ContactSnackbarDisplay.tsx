import { Snackbar, Slide } from "@mui/material";

type ContactSnackbarProps = {
  snackbarOpen: boolean;
  handleClose: () => void;
};

function ContactSnackbarDisplay({
  snackbarOpen,
  handleClose,
}: ContactSnackbarProps) {
  return (
    <Slide in={snackbarOpen} direction="up">
      <Snackbar
        open={snackbarOpen}
        autoHideDuration={2000}
        onClose={handleClose}
        message="Email address copied to clipboard."
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
      />
    </Slide>
  );
}

export default ContactSnackbarDisplay;

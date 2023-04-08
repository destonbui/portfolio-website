import {
  Typography,
  Button,
  CardContent,
  FormControl,
  TextField,
} from "@mui/material";

import { FormContextType } from "../../MessageFormContext";

type ContactFormProps = {
  formContext: FormContextType;
};

function FormDisplay({ formContext }: ContactFormProps) {
  const {
    name,
    nameErrMsg,
    email,
    emailErrMsg,
    message,
    messageErrMsg,
    handleUpdate,
    canSubmit,
    handleSubmit,
  } = formContext;

  return (
    <CardContent sx={{ px: 3 }}>
      <FormControl
        fullWidth
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 3,
          py: 1,
        }}
      >
        <Typography
          variant="h2"
          color="text.primary"
          fontWeight={400}
          fontSize={{
            xs: "1.2rem",
            md: "1.5rem",
          }}
        >
          Leave me a message
        </Typography>

        {/* For name */}
        <TextField
          spellCheck={"false"}
          value={name}
          error={nameErrMsg ? true : false}
          helperText={nameErrMsg ? nameErrMsg : ""}
          onChange={(e) => {
            handleUpdate("name", e.target.value);
          }}
          type="text"
          variant="standard"
          size="small"
          label="Name"
        ></TextField>

        {/* For email */}
        <TextField
          spellCheck={"false"}
          value={email}
          onChange={(e) => {
            handleUpdate("email", e.target.value);
          }}
          error={emailErrMsg ? true : false}
          helperText={emailErrMsg ? emailErrMsg : ""}
          type="email"
          variant="standard"
          size="small"
          label="Email"
        ></TextField>

        {/* For message */}
        <TextField
          value={message}
          onChange={(e) => {
            handleUpdate("message", e.target.value);
          }}
          error={messageErrMsg ? true : false}
          helperText={messageErrMsg ? messageErrMsg : ""}
          variant="outlined"
          label="Your message"
          rows={3}
          multiline
          type="text"
        ></TextField>

        {/* Submit button */}
        <Button
          disabled={!canSubmit}
          onClick={() => {
            handleSubmit();
          }}
          variant="outlined"
          sx={{ mt: 1 }}
        >
          Send
        </Button>
      </FormControl>
    </CardContent>
  );
}

export default FormDisplay;

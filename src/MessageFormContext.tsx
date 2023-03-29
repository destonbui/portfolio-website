import { createContext, useState } from "react";
import emailjs from "@emailjs/browser";

export type FormContextType = {
  name: string;
  nameErrMsg: string | null;
  email: string;
  emailErrMsg: string | null;
  message: string;
  messageErrMsg: string | null;
  handleUpdate: (type: string, newVal: string) => void;
  canSubmit: boolean;
  handleSubmit: () => void;
  formAccess: boolean;
  isMessageSent: boolean | null;
  handleRetry: () => void;
};

export const MessageFormContext = createContext<FormContextType | null>(null);

export default function MessageFormContextProvider({ children }: any) {
  const [name, setName] = useState<string>("");
  const [nameErrMsg, setNameErrMsg] = useState<string | null>(null);

  const [email, setEmail] = useState<string>("");
  const [emailErrMsg, setEmailErrMsg] = useState<string | null>(null);

  const [message, setMessage] = useState<string>("");
  const [messageErrMsg, setMessageErrMsg] = useState<string | null>(null);

  const [formAccess, setFormAccess] = useState<boolean>(true);
  const [isMessageSent, setMessageSent] = useState<boolean | null>(null);

  //   New value validation

  const validateEmail = (email: string) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const nameCheck = (val: string): void => {
    if (val === "") {
      setNameErrMsg("Please enter your name.");
    } else {
      setNameErrMsg(null);
    }
  };

  const messageCheck = (val: string): void => {
    if (val === "") {
      setMessageErrMsg("Please enter your message.");
    } else {
      setMessageErrMsg(null);
    }
  };

  const emailCheck = (val: string): void => {
    if (val === "") {
      setEmailErrMsg("Please enter your email address.");
    } else {
      if (!validateEmail(val)) {
        setEmailErrMsg("Invalid email address.");
      } else setEmailErrMsg(null);
    }
  };

  //   Controlled variables update

  const handleUpdate = (type: string, newVal: string): void => {
    if (type === "name") {
      setName(newVal);
      nameCheck(newVal);
    }
    if (type === "email") {
      setEmail(newVal);
      emailCheck(newVal);
    }
    if (type === "message") {
      setMessage(newVal);
      messageCheck(newVal);
    }
  };

  //   Check if user can submit contact form
  const canSubmit =
    name === "" ||
    email === "" ||
    message === "" ||
    nameErrMsg ||
    emailErrMsg ||
    messageErrMsg
      ? false
      : true;

  // handle submit
  const cleanUp = (): void => {
    setName("");
    setEmail("");
    setMessage("");
    setNameErrMsg(null);
    setEmailErrMsg(null);
    setMessageErrMsg(null);
  };

  const handleSubmit = (): void => {
    const result = emailjs.send(
      import.meta.env.VITE_APP_SERVICE_KEY,
      import.meta.env.VITE_APP_TEMPLATE_ID,
      { name: name, email: email, message: message },
      import.meta.env.VITE_APP_PUBLIC_KEY
    );
    setFormAccess(false);

    result.then((res) => {
      if (res.status === 200) {
        setMessageSent(true);
        cleanUp();
      } else {
        setMessageSent(false);
      }
    });
  };

  //   handle retry when message sent failed
  const handleRetry = (): void => {
    setFormAccess(true);
  };

  return (
    <MessageFormContext.Provider
      value={{
        name,
        nameErrMsg,
        email,
        emailErrMsg,
        message,
        messageErrMsg,
        handleUpdate,
        canSubmit,
        handleSubmit,
        formAccess,
        isMessageSent,
        handleRetry,
      }}
    >
      {children}
    </MessageFormContext.Provider>
  );
}

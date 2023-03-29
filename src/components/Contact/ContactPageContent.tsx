import { Box, Typography, useTheme, Tooltip } from "@mui/material";

import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

import { motion } from "framer-motion";

const contentContainerVariants = {
  hidden: { opacity: 0, y: 50 },
  show: {
    opacity: 1,
    y: 0,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};

const contentItemVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7 } },
  exit: { opacity: 0 },
};

type ContactPageContentProps = {
  handleOpen: () => void;
};

function ContactPageContent({ handleOpen }: ContactPageContentProps) {
  const theme = useTheme();
  return (
    <Box flexGrow={1} maxWidth={{ xs: "100%", md: "60%" }}>
      <motion.div
        style={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
        }}
        variants={contentContainerVariants}
        initial="hidden"
        animate="show"
        exit="exit"
      >
        <motion.div variants={contentItemVariants}>
          <Typography
            variant="h1"
            color="text.primary"
            fontFamily="Philosopher"
            fontWeight={700}
            fontSize={{
              xs: "3rem",
              sm: "3rem",
              md: "4rem",
            }}
            sx={{ mb: 1 }}
          >
            Glad that you're here.
          </Typography>
        </motion.div>
        <motion.div variants={contentItemVariants}>
          <Typography
            variant="h1"
            color="text.primary"
            fontFamily="Philosopher"
            fontWeight={700}
            fontSize={{
              xs: "3rem",
              sm: "3rem",
              md: "4rem",
            }}
            sx={{ mb: 1, textDecoration: "underline" }}
          >
            Let's talk!
          </Typography>
        </motion.div>
        <motion.div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
          }}
          variants={contentItemVariants}
        >
          <Box
            my={{ xs: 8, md: 4 }}
            width={{ xs: "40px", md: "60px" }}
            height={{ xs: "40px", md: "60px" }}
            display="flex"
            alignItems="center"
            justifyContent="center"
            sx={{
              backgroundColor:
                theme.palette.mode === "light" ? "rgb(18, 18, 18)" : "#f0f0f0",
            }}
            borderRadius="1rem"
            mr={2}
          >
            <EmailIcon
              sx={{
                fontSize: { xs: "1.5rem", md: "2rem" },
                color: theme.palette.mode === "dark" ? "#000" : "#fff",
              }}
            />
          </Box>
          <Box display="flex" flexDirection="column" justifyContent="center">
            <Typography
              variant="body1"
              fontFamily="Philosopher"
              color="text.secondary"
              fontSize={{ xs: "1.2rem", md: "1.5rem" }}
              fontWeight={700}
            >
              Email me at:
            </Typography>
            <Tooltip title="Copy to clipboard.">
              <Typography
                onClick={() => {
                  navigator.clipboard.writeText("deston.bdk@gmail.com");
                  handleOpen();
                }}
                variant="body2"
                color="text.primary"
                fontSize={{ xs: "1.2rem", md: "1.5rem" }}
                sx={{ cursor: "pointer" }}
              >
                deston.bdk@gmail.com
              </Typography>
            </Tooltip>
          </Box>
        </motion.div>

        <motion.div style={{ flexGrow: 1 }} variants={contentItemVariants} />

        <motion.div
          style={{
            justifySelf: "flex-end",
            display: "flex",
            flexDirection: "row",
            gap: "1rem",
            alignItems: "flex-end",
          }}
          variants={contentItemVariants}
        >
          <Tooltip title="See my LinkedIn profile" enterDelay={500}>
            <a
              href="https://www.linkedin.com/in/destonbui/"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <LinkedInIcon sx={{ fontSize: "2rem", color: "text.primary" }} />
            </a>
          </Tooltip>
          <Tooltip title="See my Github profile" enterDelay={500}>
            <a
              href="https://github.com/destonbui"
              target="_blank"
              style={{ textDecoration: "none" }}
            >
              <GitHubIcon sx={{ fontSize: "2rem", color: "text.primary" }} />
            </a>
          </Tooltip>

          <Box
            height="3px"
            width="100px"
            sx={{
              backgroundColor: theme.palette.mode === "light" ? "#000" : "#fff",
            }}
          ></Box>
        </motion.div>
      </motion.div>
    </Box>
  );
}

export default ContactPageContent;

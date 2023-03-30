import { Box, Typography, Button, useTheme } from "@mui/material";

import CircleInactive from "@mui/icons-material/FiberManualRecordOutlined";
import CircleActive from "@mui/icons-material/FiberManualRecord";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";

function OntrackProjectMobileDisplay() {
  const [ontrackCurrentImg, setCurrent] = useState(1);

  const sxInactive = { color: "gray", fontSize: "1rem", cursor: "pointer" };
  const sxActive = { color: "gray", fontSize: "1.2rem" };

  const theme = useTheme();
  return (
    <motion.div
      key="Ontrack"
      initial={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <Box
        width="100%"
        height="100%"
        display="flex"
        borderRadius="1rem"
        overflow="hidden"
        boxShadow={4}
        position="relative"
        mt={2}
        mb={2}
      >
        <Box height={0} pb="62.5%"></Box>
        <AnimatePresence mode="sync">
          {ontrackCurrentImg === 1 ? (
            <motion.img
              key={1}
              src="/ontrack-ss-dashboard.png"
              style={{
                maxWidth: "100%",
                objectFit: "contain",
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,

                transition: { type: "tween" },
              }}
              exit={{ opacity: 0 }}
            />
          ) : ontrackCurrentImg === 2 ? (
            <motion.img
              key={2}
              src="/ontrack-ss-projects.png"
              style={{
                maxWidth: "100%",
                objectFit: "contain",
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,

                transition: { type: "tween" },
              }}
              exit={{ opacity: 0 }}
            />
          ) : ontrackCurrentImg === 3 ? (
            <motion.img
              key={3}
              src="/ontrack-ss-project-details.png"
              style={{
                maxWidth: "100%",
                objectFit: "contain",
              }}
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,

                transition: { type: "tween" },
              }}
              exit={{ opacity: 0 }}
            />
          ) : (
            ""
          )}
        </AnimatePresence>

        <Box
          width="100%"
          height="100%"
          bottom={0}
          position="absolute"
          display="flex"
          flexDirection="row"
          alignItems="flex-end"
          justifyContent="center"
          zIndex={5}
        >
          <Box display="flex" alignItems={"center"} mb={1} gap={2}>
            {[1, 2, 3].map((i) => {
              return ontrackCurrentImg === i ? (
                <CircleActive key={i} sx={sxActive} />
              ) : (
                <CircleInactive
                  onClick={() => {
                    setCurrent(i);
                  }}
                  key={i}
                  sx={sxInactive}
                />
              );
            })}
          </Box>
        </Box>
      </Box>

      <motion.div
        initial={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          y: 50,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        exit={{
          opacity: 0,
          y: 50,
          transition: { duration: 0.5 },
        }}
      >
        <Box
          display="flex"
          flexDirection="row"
          gap={2}
          alignItems="center"
          mb={{ md: 1, lg: 2 }}
        >
          <motion.img src="/react-2.svg" width="30px" />
          <motion.img
            src="/material-ui-1.svg"
            width="30px"
            style={{
              filter: "drop-shadow(-1px 2px 2px rgb(0 0 0 / 0.2))",
            }}
          />
          <motion.img
            src={
              theme.palette.mode === "light"
                ? "/react-router-mark-color.svg"
                : "/react-router-mark-color-inverted.svg"
            }
            width="30px"
            style={{
              filter: "drop-shadow(-1px 2px 2px rgb(0 0 0 / 0.2))",
            }}
          />
          <motion.img
            src="/firebase-1.svg"
            height="30px"
            style={{
              filter: "drop-shadow(-1px 2px 2px rgb(0 0 0 / 0.2))",
            }}
          />
        </Box>
        <Typography
          variant="h2"
          color="text.primary"
          fontFamily="Mulish"
          fontWeight={700}
          fontSize={"48px"}
          component="span"
        >
          Ontrack
        </Typography>
        <Typography
          variant="overline"
          letterSpacing={2}
          fontSize={"10px"}
          color="text.secondary"
        >
          Personal Project Management
        </Typography>
        <Typography variant="body1" color="text.primary" fontSize={"14px"}>
          A project management application that aims to provide users with a
          clean UX/UI that is intuitive, effective, and easy to use. Help your
          projects stay on track from idea to launch.
        </Typography>

        <Box display="flex" flexDirection="row" gap={1} mt={2}>
          <Button
            href="https://github.com/destonbui/Ontrack-Codes-Public"
            target="_blank"
            variant="outlined"
            size="small"
            endIcon={<GitHubIcon />}
            sx={{ borderRadius: "1rem" }}
          >
            View Code
          </Button>
          <Button
            href="https://ontrack.onrender.com"
            target="_blank"
            variant="contained"
            size="small"
            endIcon={<PublicIcon />}
            sx={{ borderRadius: "1rem" }}
          >
            Live Demo
          </Button>
        </Box>
      </motion.div>
    </motion.div>
  );
}

export default OntrackProjectMobileDisplay;

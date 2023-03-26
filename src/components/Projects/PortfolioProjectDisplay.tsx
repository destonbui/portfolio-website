import { Box, Typography, Button, useTheme } from "@mui/material";

import CircleInactive from "@mui/icons-material/FiberManualRecordOutlined";
import CircleActive from "@mui/icons-material/FiberManualRecord";
import GitHubIcon from "@mui/icons-material/GitHub";
import PublicIcon from "@mui/icons-material/Public";
import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";

function PortfolioProjectDisplay() {
  const [currentImg, setCurrent] = useState(1);

  const sxInactive = { color: "gray", fontSize: "1rem" };
  const sxActive = { color: "#000", fontSize: "1.2rem" };

  const theme = useTheme();
  return (
    <motion.div
      key="Ontrack"
      initial={{
        display: "flex",
        flexDirection: "row-reverse",
        width: "100%",
        opacity: 0,
      }}
      animate={{
        opacity: 1,
        transition: { duration: 0.5 },
      }}
      exit={{ opacity: 0, transition: { duration: 0.5 } }}
    >
      <motion.div
        initial={{
          display: "flex",
          flexDirection: "column",
          width: "30%",
          marginLeft: "2rem",
          x: 50,
          opacity: 0,
        }}
        animate={{
          opacity: 1,
          x: 0,
          transition: { duration: 0.5, delay: 0.5 },
        }}
        exit={{
          opacity: 0,
          x: 50,
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
            src="/framer-motion.svg"
            height="30px"
            style={{
              filter: "drop-shadow(-1px 2px 2px rgb(0 0 0 / 0.2))",
            }}
          />
          <motion.img
            src="/typescript.svg"
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
          fontSize={{ md: "54px", lg: "60px" }}
          component="span"
          sx={{ ml: -0.5 }}
        >
          Deston B.
        </Typography>
        <Typography
          variant="overline"
          letterSpacing={2}
          fontSize={{ md: "10px", lg: "12px" }}
          color="text.secondary"
        >
          My Portfolio Website
        </Typography>
        <Typography
          variant="body1"
          color="text.primary"
          fontSize={{ md: "14px", lg: "16px" }}
        >
          This is portfolio website project. It's the first project where I
          applied my new aquired skills: Typescript & Framer Motion.
        </Typography>

        <Box flexGrow={1} />

        <Box display="flex" flexDirection="row" gap={1}>
          <Button
            variant="outlined"
            size="small"
            endIcon={<GitHubIcon />}
            sx={{ borderRadius: "1rem" }}
          >
            View Code
          </Button>
        </Box>
      </motion.div>

      <Box
        width="70%"
        height="100%"
        display="flex"
        borderRadius="1rem"
        overflow="hidden"
        boxShadow={4}
        position="relative"
      >
        <AnimatePresence mode="wait">
          {currentImg === 1 ? (
            <motion.img
              key={1}
              src="/portfolio-ss-light.png"
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
          ) : currentImg === 2 ? (
            <motion.img
              key={2}
              src="/portfolio-ss-dark.png"
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
          bottom={10}
          position="absolute"
          display="flex"
          flexDirection="row"
          alignItems="center"
          justifyContent="center"
          gap={2}
          zIndex={5}
        >
          {[1, 2].map((i) => {
            return currentImg === i ? (
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
    </motion.div>
  );
}

export default PortfolioProjectDisplay;

import { Box, Typography, Button, useTheme } from "@mui/material";

import CircleInactive from "@mui/icons-material/FiberManualRecordOutlined";
import CircleActive from "@mui/icons-material/FiberManualRecord";
import GitHubIcon from "@mui/icons-material/GitHub";

import { AnimatePresence, motion } from "framer-motion";

import { useState } from "react";
import ImageLazyLoad from "./ImageLazyLoad";

function PortfolioProjectMobileDisplay() {
  const [currentImg, setCurrent] = useState(1);

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
          {currentImg === 1 ? (
            <ImageLazyLoad key={1} path="/portfolio-ss-light.jpg" />
          ) : currentImg === 2 ? (
            <ImageLazyLoad key={2} path="/portfolio-ss-dark.jpg" />
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
          fontSize={"48px"}
          component="span"
        >
          Deston B.
        </Typography>
        <Typography
          variant="overline"
          letterSpacing={2}
          fontSize={"10px"}
          color="text.secondary"
        >
          My Portfolio Website
        </Typography>
        <Typography variant="body1" color="text.primary" fontSize={"14px"}>
          This is my portfolio website project where I implement new skills that
          I'm working on: Typescript & Framer Motion.
        </Typography>

        <Box display="flex" flexDirection="row" gap={1} mt={2}>
          <Button
            href="https://github.com/destonbui/portfolio-website"
            target="_blank"
            variant="outlined"
            size="small"
            endIcon={<GitHubIcon />}
            sx={{ borderRadius: "1rem" }}
          >
            View Code
          </Button>
        </Box>
      </motion.div>
    </motion.div>
  );
}

export default PortfolioProjectMobileDisplay;

import { Box, Typography, IconButton } from "@mui/material";
import ArrowLeft from "@mui/icons-material/KeyboardArrowLeftOutlined";
import ArrowRight from "@mui/icons-material/KeyboardArrowRightOutlined";

import { AnimatePresence, motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Divider from "@mui/material/Divider";
import OntrackProjectDisplay from "../components/Projects/OntrackProjectDisplay";
import PortfolioProjectDisplay from "../components/Projects/PortfolioProjectDisplay";
import OntrackProjectMobileDisplay from "../components/Projects/OntrackProjectMobileDisplay";
import PortfolioProjectMobileDisplay from "../components/Projects/PortfolioProjectMobileDisplay";

function Skills() {
  const projectsTotal: number = 2;
  const [projectIndex, setIndex] = useState(1);

  const nextProject = (): void => {
    if (projectIndex < projectsTotal) {
      setIndex((prev) => prev + 1);
    }
  };

  const prevProject = (): void => {
    if (projectIndex > 1) {
      setIndex((prev) => prev - 1);
    }
  };

  return (
    <motion.div
      style={{
        flexGrow: 1,
        width: "80%",
        maxWidth: 1200,
        position: "relative",
        zIndex: 2,
      }}
    >
      <Box
        flexDirection="column"
        justifyContent="center"
        width="100%"
        maxHeight="100%"
        pt={10}
        display={{ xs: "none", md: "flex" }}
      >
        <motion.div
          initial={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            opacity: 0,
            y: 50,
          }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
        >
          <Typography
            variant="h4"
            fontFamily={"Philosopher"}
            fontSize={{ md: "28px", lg: "34px" }}
            color="text.primary"
            component="span"
          >
            Project
          </Typography>

          <Box flexGrow={1} />

          <Box my="auto" display="flex" gap={2}>
            <IconButton
              onClick={() => {
                prevProject();
              }}
            >
              <ArrowLeft />
            </IconButton>
            <Box my="auto">
              <Typography
                variant="body1"
                color="text.primary"
                letterSpacing={2}
              >{`${projectIndex} / ${projectsTotal}`}</Typography>
            </Box>

            <IconButton
              onClick={() => {
                nextProject();
              }}
            >
              <ArrowRight />
            </IconButton>
          </Box>
        </motion.div>

        <motion.div
          initial={{
            width: "100%",
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: 0.2 },
          }}
          exit={{
            opacity: 0,
            y: -50,
            transition: { duration: 0.3, delay: 0.2 },
          }}
        >
          <Divider sx={{ mt: 1, mb: { md: 2, lg: 5 } }} />
        </motion.div>

        <motion.div
          initial={{
            width: "100%",
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.4,
            },
          }}
          exit={{
            opacity: 0,
            y: -50,
            transition: { duration: 0.3, delay: 0.4 },
          }}
        >
          <AnimatePresence mode="wait">
            {projectIndex === 1 ? (
              <OntrackProjectDisplay key="Ontrack" />
            ) : projectIndex === 2 ? (
              <PortfolioProjectDisplay key="Portfolio" />
            ) : (
              ""
            )}
          </AnimatePresence>
        </motion.div>
      </Box>

      {/* ----------------------------------------------------------- */}
      {/* ----------------------------Mobile below------------------- */}
      {/* ----------------------------------------------------------- */}

      <Box
        flexDirection="column"
        justifyContent="center"
        width="100%"
        maxHeight="100%"
        pt={2}
        display={{ xs: "flex", md: "none" }}
      >
        <motion.div
          initial={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            opacity: 0,
            y: 50,
          }}
          animate={{ opacity: 1, y: 0, transition: { duration: 0.5 } }}
          exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
        >
          <Typography
            variant="h4"
            fontFamily={"Philosopher"}
            fontSize={"28px"}
            color="text.primary"
            component="span"
          >
            Project
          </Typography>

          <Box flexGrow={1} />

          <Box my="auto" display="flex" gap={2}>
            <IconButton
              onClick={() => {
                prevProject();
              }}
            >
              <ArrowLeft />
            </IconButton>
            <Box my="auto">
              <Typography
                variant="body1"
                color="text.primary"
                letterSpacing={2}
              >{`${projectIndex} / ${projectsTotal}`}</Typography>
            </Box>

            <IconButton
              onClick={() => {
                nextProject();
              }}
            >
              <ArrowRight />
            </IconButton>
          </Box>
        </motion.div>

        <motion.div
          initial={{
            width: "100%",
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
            transition: { duration: 0.3, delay: 0.2 },
          }}
          exit={{
            opacity: 0,
            y: -50,
            transition: { duration: 0.3, delay: 0.2 },
          }}
        >
          <Divider sx={{ mt: 1, mb: { md: 2, lg: 5 } }} />
        </motion.div>

        <motion.div
          initial={{
            width: "100%",
            opacity: 0,
            y: 0,
          }}
          animate={{
            opacity: 1,
            transition: {
              duration: 0.5,
              delay: 0.4,
            },
          }}
          exit={{
            opacity: 0,
            y: -50,
            transition: { duration: 0.3, delay: 0.4 },
          }}
        >
          <AnimatePresence mode="wait">
            {projectIndex === 1 ? (
              <OntrackProjectMobileDisplay key="Ontrack" />
            ) : projectIndex === 2 ? (
              <PortfolioProjectMobileDisplay key="Portfolio" />
            ) : (
              ""
            )}
          </AnimatePresence>
        </motion.div>
      </Box>
    </motion.div>
  );
}

export default Skills;

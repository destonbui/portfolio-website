import { Box, Typography, useTheme, Divider } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { backend, frontend } from "../skills";

import { useRef } from "react";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: { delay: 0.5, staggerChildren: 0.2, delayChildren: 0.2 },
  },
  exit: { transition: { staggerChildren: 0.05, staggerDirection: -1 } },
};
const iconVariants = {
  hidden: { opacity: 0, y: 50 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  exit: { opacity: 0, y: -50 },
};
const defaultVariants = {
  hidden: { opacity: 0, y: -50 },
  show: { opacity: 1, y: 0 },
  exit: { y: 50, opacity: 0 },
};

function Skills() {
  const navigate = useNavigate();
  const prev = "/";
  const next = "/projects";
  const theme = useTheme();
  const frontendContainerRef = useRef(null);
  return (
    <motion.div
      onWheel={(e) => {
        if (e.deltaY > 0) {
          navigate(next);
          return;
        } else {
          navigate(prev);
          return;
        }
      }}
      style={{
        height: "100%",
        width: "80%",
        maxWidth: 1200,
        position: "relative",
        zIndex: 2,
      }}
    >
      <Box
        display={{ xs: "none", md: "flex" }}
        flexDirection="column"
        width="100%"
        justifyContent="space-between"
        mt={{ md: 10 }}
      >
        <motion.div
          style={{
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: "2rem",
            padding: "1rem 2rem",
            marginBottom: "4rem",
          }}
          variants={defaultVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <Typography
            variant="h1"
            color="text.primary"
            fontFamily="Philosopher"
            fontWeight={700}
            fontSize={{
              md: "2rem",
              lg: "3rem",
            }}
          >
            Skills & Experience
          </Typography>
          <Typography
            variant="body1"
            color="text.secondary"
            fontFamily="Mulish"
            fontSize={{
              md: "1.2rem",
              lg: "1.2rem",
              xl: "1.2rem",
            }}
            fontWeight={400}
            gutterBottom
          >
            I started my self-taught journey to pursuit my dream, becoming a
            Full-stack Web Developer in October, 2022. So far, I've built 6 mini
            websites & 2 projects.
          </Typography>
        </motion.div>

        <motion.div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
          variants={defaultVariants}
          initial="hidden"
          animate="show"
          exit="exit"
          transition={{ duration: 0.5 }}
        >
          <motion.div
            style={{ display: "flex", flexDirection: "column", width: "48%" }}
            variants={defaultVariants}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              color="text.primary"
              fontFamily="Philosopher"
              fontWeight={700}
              fontSize={{
                md: "2rem",
                lg: "3rem",
              }}
              gutterBottom
              letterSpacing={2}
              textAlign="center"
            >
              FRONT-END
            </Typography>
            <motion.div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width: "100%",
              }}
              variants={containerVariants}
              initial={"hidden"}
              animate={"show"}
            >
              {frontend.map((skill, i) => {
                return (
                  <motion.div
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "25%",
                      height: "100px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    variants={iconVariants}
                  >
                    <motion.img
                      style={{
                        filter:
                          theme.palette.mode === "light"
                            ? "drop-shadow(0px 2px 2px rgb(150 150 150 / 0.6))"
                            : "drop-shadow(0px 0px 4px rgb(255 255 255 / 0.2))",
                      }}
                      src={
                        skill.desc === "React Router"
                          ? theme.palette.mode === "light"
                            ? skill.path
                            : skill.path2
                          : skill.path
                      }
                      alt={skill.desc}
                      height="50px"
                    />
                    <Typography
                      variant="body1"
                      fontSize={{ md: "0.8rem", lg: "1rem" }}
                      color="text.primary"
                      sx={{ mt: 1 }}
                    >
                      {skill.desc}
                    </Typography>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>

          <Divider flexItem orientation="vertical" />
          <motion.div
            style={{ display: "flex", flexDirection: "column", width: "48%" }}
            variants={defaultVariants}
            transition={{ duration: 0.5 }}
          >
            <Typography
              variant="h2"
              color="text.primary"
              fontFamily="Philosopher"
              fontWeight={700}
              fontSize={{
                md: "2rem",
                lg: "3rem",
              }}
              gutterBottom
              letterSpacing={2}
              textAlign="center"
            >
              BACK-END
            </Typography>
            <motion.div
              style={{
                display: "flex",
                flexDirection: "row",
                flexWrap: "wrap",
                width: "100%",
              }}
              variants={containerVariants}
              initial={"hidden"}
              animate={"show"}
            >
              {backend.map((skill, i) => {
                return (
                  <motion.div
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "25%",
                      height: "100px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    variants={iconVariants}
                  >
                    <motion.img
                      style={{
                        filter:
                          theme.palette.mode === "light"
                            ? "drop-shadow(0px 2px 2px rgb(100 100 100 / 0.6))"
                            : skill.desc === "express.js"
                            ? "brightness(3)"
                            : "drop-shadow(0px 0px 4px rgb(255 255 255 / 0.2))",
                      }}
                      src={
                        skill.desc === "React Router"
                          ? theme.palette.mode === "light"
                            ? skill.path
                            : skill.path2
                          : skill.path
                      }
                      alt={skill.desc}
                      height="50px"
                    />
                    <Typography
                      variant="body1"
                      fontSize={{ md: "0.8rem", lg: "1rem" }}
                      color="text.primary"
                      sx={{ mt: 1 }}
                    >
                      {skill.desc}
                    </Typography>
                  </motion.div>
                );
              })}
            </motion.div>
          </motion.div>
        </motion.div>
      </Box>
      {/* ------------------------------- */}
      {/* ------------------------------- */}
      {/* ------------------------------- */}
      <Box
        display={{ xs: "flex", md: "none" }}
        flexDirection="column"
        width="100%"
        justifyContent="space-between"
        mt={4}
      >
        <Box
          display={"flex"}
          border={`1px solid ${theme.palette.primary.main}`}
          borderRadius={4}
          py={2}
          px={4}
          alignItems="center"
          justifyContent={"center"}
        >
          <Typography
            variant="h1"
            color="text.primary"
            fontFamily="Philosopher"
            fontWeight={700}
            fontSize={"1.5rem"}
          >
            Skills & Experience
          </Typography>
        </Box>

        <Box display="flex" flexDirection="column" mt={4}>
          <Box display="flex" flexDirection="column" width="100%">
            <Typography
              variant="h2"
              color="text.primary"
              fontFamily="Philosopher"
              fontWeight={700}
              fontSize={"1.5rem"}
              letterSpacing={2}
              textAlign="center"
            >
              FRONT-END
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              width="100%"
            >
              {frontend.map((skill, i) => {
                return (
                  <motion.div
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "25%",
                      height: "100px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <motion.img
                      style={{
                        filter:
                          theme.palette.mode === "light"
                            ? "drop-shadow(0px 2px 2px rgb(100 100 100 / 0.6))"
                            : "drop-shadow(0px 0px 4px rgb(255 255 255 / 0.2))",
                      }}
                      src={
                        skill.desc === "React Router"
                          ? theme.palette.mode === "light"
                            ? skill.path
                            : skill.path2
                          : skill.path
                      }
                      alt={skill.desc}
                      width="50px"
                    />
                  </motion.div>
                );
              })}
            </Box>
          </Box>

          <Divider flexItem sx={{ mt: 2, mb: 4 }} />

          <Box display="flex" flexDirection="column" width="100%">
            <Typography
              variant="h2"
              color="text.primary"
              fontFamily="Philosopher"
              fontWeight={700}
              fontSize={"1.5rem"}
              letterSpacing={2}
              textAlign="center"
            >
              BACK-END
            </Typography>
            <Box
              display="flex"
              flexDirection="row"
              flexWrap="wrap"
              width="100%"
            >
              {backend.map((skill, i) => {
                return (
                  <motion.div
                    key={i}
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      width: "25%",
                      height: "100px",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <motion.img
                      style={{
                        filter:
                          theme.palette.mode === "light"
                            ? "drop-shadow(0px 2px 2px rgb(100 100 100 / 0.6))"
                            : skill.desc === "express.js"
                            ? "brightness(3)"
                            : "drop-shadow(0px 0px 4px rgb(255 255 255 / 0.2))",
                      }}
                      src={
                        skill.desc === "React Router"
                          ? theme.palette.mode === "light"
                            ? skill.path
                            : skill.path2
                          : skill.path
                      }
                      alt={skill.desc}
                      height="50px"
                    />
                  </motion.div>
                );
              })}
            </Box>
          </Box>
        </Box>
      </Box>
    </motion.div>
  );
}

export default Skills;

import { Box, Typography, useTheme, Divider } from "@mui/material";
import Button from "@mui/material/Button";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { backend, frontend } from "../skills";

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

function About() {
  const navigate = useNavigate();
  const theme = useTheme();

  return (
    <motion.div
      style={{
        width: "80%",
        maxWidth: 1200,
        position: "relative",
        zIndex: 2,
      }}
    >
      <Box
        display={{ xs: "flex", md: "flex" }}
        flexDirection="column"
        width="100%"
        justifyContent="space-between"
        mt={{ xs: 2, md: 2, lg: 10 }}
      >
        <motion.div
          style={{
            border: `1px solid ${theme.palette.primary.main}`,
            borderRadius: "2rem",
            padding: "1rem 1rem",
            marginBottom: "2rem",
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
              xs: "40px",
              md: "2rem",
              lg: "3rem",
            }}
            sx={{ mb: 1 }}
          >
            About Me
          </Typography>

          <Typography
            variant="body1"
            color="text.secondary"
            fontFamily="Mulish"
            fontSize={{ xs: "12px", md: "18px" }}
            fontWeight={400}
          >
            I previously have three years of working experience in Sales. In
            those years, I encountered lots of business problems and workflow
            flaws. And I can always come up with ideas to solve or optimize
            them. However, with limited resources, I can only build some
            solutions using Google Sheets. Being able to build websites and web
            applications has always been my dream.
            <br />
            <br />
            In October 2022, I was fully committed to the self-learning journey
            to become a Full-stack Web Developer.
          </Typography>
          <Box
            display="flex"
            justifyContent={{ xs: "flex-start", md: "flex-end" }}
            mt={2}
          >
            <Button
              variant="contained"
              size="small"
              onClick={() => {
                navigate("/projects");
              }}
              sx={{
                borderRadius: "1rem",
                fontSize: { xs: "12px", md: "14px" },
              }}
            >
              See My Progress
            </Button>
          </Box>
        </motion.div>

        <Box display={{ xs: "none", md: "block" }}>
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
                Frontend Skills
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
                        width: "33.3%",
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
                Backend Skills
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
                        width: "33.3%",
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

        <Box display={{ xs: "block", md: "none" }}>
          <motion.div
            style={{
              display: "flex",
              flexDirection: "column",
            }}
            variants={defaultVariants}
            initial="hidden"
            animate="show"
            exit="exit"
            transition={{ duration: 0.5 }}
          >
            <motion.div
              style={{ display: "flex", flexDirection: "column" }}
              variants={defaultVariants}
              transition={{ duration: 0.5 }}
            >
              <Typography
                variant="h2"
                color="text.primary"
                fontFamily="Philosopher"
                fontWeight={700}
                fontSize={{
                  xs: "32px",
                  md: "2rem",
                  lg: "3rem",
                }}
                mb={2}
                pl={2}
              >
                Skills
              </Typography>
              <motion.div
                style={{
                  display: "flex",
                  flexDirection: "row",
                  rowGap: "1rem",
                  flexWrap: "wrap",
                  width: "100%",
                  padding: "0px 0.5rem",
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
                        width: "20%",
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
                        height="30px"
                      />
                    </motion.div>
                  );
                })}
                {backend.map((skill, i) => {
                  return (
                    <motion.div
                      key={i}
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        width: "20%",
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
                        height="30px"
                      />
                    </motion.div>
                  );
                })}
              </motion.div>
            </motion.div>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
}

export default About;

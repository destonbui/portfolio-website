import { Box, Typography, Button, useTheme, Tooltip } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const logoLight = {
  position: "absolute",
  right: -420,
  top: 10,
  cursor: "grab",
};

const logoDark = {
  position: "absolute",
  right: -420,
  top: 10,
  cursor: "grab",
};

function Home() {
  const theme = useTheme();
  const next = "/skills";
  const navigate = useNavigate();

  return (
    <motion.div
      onWheel={(e) => {
        if (e.deltaY > 0) {
          navigate(next);
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
        display="flex"
        flexDirection={{
          xs: "column",
          sm: "column",
          md: "row",
        }}
      >
        {/* For main content */}
        <Box
          mt={{ xs: 5, sm: 5, md: 15 }}
          width={{ xs: "100%", sm: "100%", md: "55%" }}
          position="relative"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            exit={{ opacity: 0, transition: { duration: 1 } }}
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              exit={{ opacity: 0, y: -80, transition: { duration: 0.5 } }}
            >
              <Typography
                variant="h1"
                color="text.primary"
                fontFamily="Philosopher"
                fontWeight={700}
                fontSize={{
                  xs: "3rem",
                  sm: "3rem",
                  md: "4rem",
                  lg: "5rem",
                  xl: "6rem",
                }}
                sx={{ mb: 1 }}
              >
                Deston Bui
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.75 }}
              exit={{ opacity: 0, y: -50, transition: { duration: 0.75 } }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                fontFamily="Mulish"
                fontSize={{
                  xs: "1.2rem",
                  sm: "1.2rem",
                  md: "1.3rem",
                  lg: "1.4rem",
                  xl: "1.5rem",
                }}
                fontWeight={300}
              >
                Hi, I'm a Full-stack Web Developer with a passion for building
                fully interactive websites & web applications using React. With
                a background in sales, I can create beautiful, clean UI/UX that
                compel and intuitive for the user.
              </Typography>
            </motion.div>
            <Box display="flex" flexDirection="row" mt={6}>
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 1 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.9 } }}
                whileHover={{ zoom: 1.05 }}
                whileTap={{ zoom: 0.95 }}
                exit={{ opacity: 0, y: -80, transition: { duration: 0.9 } }}
              >
                <Button
                  onClick={() => {
                    navigate("/projects");
                  }}
                  variant="outlined"
                  color="primary"
                  endIcon={<CodeIcon />}
                  sx={{
                    fontSize: {
                      xs: "1rem",
                      sm: "1rem",
                      md: "1.1rem",
                      lg: "1.2rem",
                    },
                    fontWeight: 400,
                    borderRadius: 10,
                  }}
                >
                  See my work
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Box>

        <Box flexGrow={1}></Box>

        {/* For Tech Icons */}
        <Box
          mt={{ xs: 5, sm: 5, md: 15 }}
          width={{ xs: "100%", sm: "100%", md: "375px" }}
          height="350px"
          position="relative"
          display={{ xs: "none", sm: "none", md: "flex" }}
          flexDirection="row"
          flexWrap="wrap"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                type: "spring",
                stiffness: 10,
                delay: 2.5,
              },
            }}
            style={{ position: "absolute", top: 20, left: 20 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.9 } }}
          >
            <Tooltip title="React" arrow>
              <motion.img
                draggable={false}
                drag
                dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                src={"react-2.svg"}
                animate={{
                  y: [0, -30, 0],
                  rotate: [45, 60, 45],
                  type: "spring",
                  transition: { repeat: "infinite", duration: 4 },
                }}
                style={{
                  height: "100px",
                  filter:
                    theme.palette.mode === "light"
                      ? "drop-shadow(-1px 4px 2px rgb(150 150 150 / 0.4))"
                      : "drop-shadow(0px 4px 6px rgb(100 100 100 / 0.4))",
                }}
              />
            </Tooltip>
          </motion.div>

          {/* For nodejs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 25,
                delay: 3.25,
              },
            }}
            style={{ position: "absolute", top: 115, left: 140 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.9 } }}
          >
            <Tooltip title="Nodejs" arrow>
              <motion.img
                draggable={false}
                drag
                dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                src={"nodejs-icon.svg"}
                animate={{
                  y: [0, -5, 0],

                  type: "spring",
                  transition: { repeat: "infinite", duration: 2 },
                }}
                style={{
                  height: "80px",

                  filter:
                    theme.palette.mode === "light"
                      ? "drop-shadow(-2px 4px 2px rgb(150 150 150 / 0.4))"
                      : "drop-shadow(0px 4px 6px rgb(100 100 100 / 0.4))",
                }}
              />
            </Tooltip>
          </motion.div>

          {/* For firebase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 50,
                delay: 3.7,
              },
            }}
            style={{ position: "absolute", bottom: 30, left: 60 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.9 } }}
          >
            <Tooltip title="Firebase" arrow>
              <motion.img
                draggable={false}
                drag
                dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                src={"firebase-1.svg"}
                animate={{
                  y: [5, -5, 5],
                  x: [5, 0, 5],
                  rotate: [-5, 0, -5],
                  type: "spring",
                  transition: { repeat: "infinite", duration: 4 },
                }}
                style={{
                  height: "75px",

                  filter:
                    theme.palette.mode === "light"
                      ? "drop-shadow(-2px 4px 2px rgb(100 100 100 / 0.4))"
                      : "drop-shadow(0px 2px 2px rgb(150 150 150 / 0.4))",
                }}
              />
            </Tooltip>
          </motion.div>

          {/* For MUI */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                type: "spring",
                stiffness: 10,
                delay: 2.8,
              },
            }}
            style={{ position: "absolute", bottom: 70, right: 40 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.9 } }}
          >
            <Tooltip title="Material UI" arrow>
              <motion.img
                draggable={false}
                drag
                dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                src={"material-ui-1.svg"}
                animate={{
                  x: [5, 0, 5],
                  rotate: [-5, 0, -5],
                  type: "spring",
                  transition: { repeat: "infinite", duration: 5 },
                }}
                style={{
                  height: "70px",
                  filter:
                    theme.palette.mode === "light"
                      ? "drop-shadow(-1px 2px 2px rgb(100 100 100 / 0.4))"
                      : "drop-shadow(0px 2px 2px rgb(150 150 150 / 0.4))",
                }}
              />
            </Tooltip>
          </motion.div>

          {/* For mongodb */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                type: "spring",
                stiffness: 10,
                delay: 3.9,
              },
            }}
            style={{ position: "absolute", top: 0, right: 50 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.9 } }}
          >
            <Tooltip title="Mongodb" arrow>
              <motion.img
                draggable={false}
                drag
                dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                src={"mongodb-icon-1.svg"}
                animate={{
                  y: [0, -5, 0],
                  rotate: [10, 0, 10],
                  type: "spring",
                  transition: { repeat: "infinite", duration: 3 },
                }}
                style={{
                  height: "80px",
                  filter:
                    theme.palette.mode === "light"
                      ? "drop-shadow(-2px 2px 2px rgb(100 100 100 / 0.4))"
                      : "drop-shadow(0px 2px 2px rgb(150 150 150 / 0.4))",
                }}
              />
            </Tooltip>
          </motion.div>
        </Box>

        <Box
          mt={{ xs: 5, sm: 5, md: 15 }}
          width="100%"
          display={{ xs: "flex", sm: "flex", md: "none" }}
          flexDirection="row"
          flexWrap="wrap"
          alignItems="center"
          justifyContent="space-between"
        >
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                type: "spring",
                stiffness: 10,
                delay: 2.5,
              },
            }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.9 } }}
          >
            <Tooltip title="React" arrow>
              <motion.img
                draggable={false}
                drag
                dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                src={"react-2.svg"}
                animate={{
                  y: [0, -5, 0],
                  rotate: [45, 60, 45],
                  type: "spring",
                  transition: { repeat: "infinite", duration: 4 },
                }}
                style={{
                  height: "60px",
                  filter:
                    theme.palette.mode === "light"
                      ? "drop-shadow(-1px 4px 2px rgb(150 150 150 / 0.4))"
                      : "drop-shadow(0px 4px 6px rgb(100 100 100 / 0.4))",
                }}
              />
            </Tooltip>
          </motion.div>

          {/* For nodejs */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 25,
                delay: 3.25,
              },
            }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.9 } }}
          >
            <Tooltip title="Nodejs" arrow>
              <motion.img
                draggable={false}
                drag
                dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                src={"nodejs-icon.svg"}
                animate={{
                  y: [0, -5, 0],

                  type: "spring",
                  transition: { repeat: "infinite", duration: 2 },
                }}
                style={{
                  height: "50px",

                  filter:
                    theme.palette.mode === "light"
                      ? "drop-shadow(-2px 4px 2px rgb(150 150 150 / 0.4))"
                      : "drop-shadow(0px 4px 6px rgb(100 100 100 / 0.4))",
                }}
              />
            </Tooltip>
          </motion.div>

          {/* For firebase */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                type: "spring",
                stiffness: 50,
                delay: 3.7,
              },
            }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.9 } }}
          >
            <Tooltip title="Firebase" arrow>
              <motion.img
                draggable={false}
                drag
                dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                src={"firebase-1.svg"}
                animate={{
                  y: [5, -5, 5],
                  x: [5, 0, 5],
                  rotate: [-5, 0, -5],
                  type: "spring",
                  transition: { repeat: "infinite", duration: 4 },
                }}
                style={{
                  height: "45px",

                  filter:
                    theme.palette.mode === "light"
                      ? "drop-shadow(-2px 4px 2px rgb(100 100 100 / 0.4))"
                      : "drop-shadow(0px 2px 2px rgb(150 150 150 / 0.4))",
                }}
              />
            </Tooltip>
          </motion.div>

          {/* For MUI */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                type: "spring",
                stiffness: 10,
                delay: 2.8,
              },
            }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.9 } }}
          >
            <Tooltip title="Material UI" arrow>
              <motion.img
                draggable={false}
                drag
                dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                src={"material-ui-1.svg"}
                animate={{
                  x: [5, 0, 5],
                  rotate: [-5, 0, -5],
                  type: "spring",
                  transition: { repeat: "infinite", duration: 5 },
                }}
                style={{
                  height: "45px",
                  filter:
                    theme.palette.mode === "light"
                      ? "drop-shadow(-1px 2px 2px rgb(100 100 100 / 0.4))"
                      : "drop-shadow(0px 2px 2px rgb(150 150 150 / 0.4))",
                }}
              />
            </Tooltip>
          </motion.div>

          {/* For mongodb */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.9,
                type: "spring",
                stiffness: 20,
                delay: 3.9,
              },
            }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.9 } }}
          >
            <Tooltip title="Mongodb" arrow>
              <motion.img
                draggable={false}
                drag
                dragConstraints={{ top: 0, bottom: 0, left: 0, right: 0 }}
                src={"mongodb-icon-1.svg"}
                animate={{
                  y: [0, -5, 0],
                  rotate: [10, 0, 10],
                  type: "spring",
                  transition: { repeat: "infinite", duration: 3 },
                }}
                style={{
                  height: "55px",
                  filter:
                    theme.palette.mode === "light"
                      ? "drop-shadow(-2px 2px 2px rgb(100 100 100 / 0.4))"
                      : "drop-shadow(0px 2px 2px rgb(150 150 150 / 0.4))",
                }}
              />
            </Tooltip>
          </motion.div>
        </Box>
      </Box>
    </motion.div>
  );
}

export default Home;

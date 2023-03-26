import { Box, Typography, Button, useTheme, Tooltip } from "@mui/material";
import CodeIcon from "@mui/icons-material/Code";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

function Home() {
  const theme = useTheme();
  const next = "/skills";
  const navigate = useNavigate();

  return (
    <motion.div
      onWheel={(e) => {
        if (e.deltaY > 0) {
          navigate(next);
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
        display="flex"
        flexDirection={{
          xs: "column",
          sm: "column",
          md: "row",
        }}
      >
        {/* For main content */}
        <Box
          mt={{ xs: 2, sm: 2, md: 10 }}
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
              exit={{ opacity: 0, y: -30, transition: { duration: 0.5 } }}
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
              exit={{ opacity: 0, y: -30, transition: { duration: 0.75 } }}
            >
              <Typography
                variant="body1"
                color="text.secondary"
                fontFamily="Mulish"
                fontSize={{
                  xs: "1.2rem",
                  sm: "1.2rem",
                  md: "1.4rem",
                  lg: "1.4rem",
                  xl: "1.5rem",
                }}
                fontWeight={400}
              >
                Hi, I'm a Full-stack Web Developer with a passion for building
                web applications with clean UI and intuitive UX using React. I'm
                currently looking for an opportunity to work full-time as a
                developer.
                <br />
                Let's build great things, together!
              </Typography>
            </motion.div>
            <Box
              display="flex"
              flexDirection="row"
              mt={5}
              gap={{ xs: 1, md: 2 }}
            >
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 1 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.9 } }}
                whileTap={{ zoom: 0.95 }}
                exit={{ opacity: 0, y: -30, transition: { duration: 0.9 } }}
              >
                <Button
                  onClick={() => {
                    navigate("/projects");
                  }}
                  variant="outlined"
                  size={"small"}
                  color="primary"
                  endIcon={<CodeIcon />}
                  sx={{
                    px: { md: 3 },
                    fontSize: {
                      xs: "0.9rem",
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
              <motion.div
                initial={{ opacity: 0, y: 50, scale: 1 }}
                animate={{ opacity: 1, y: 0, transition: { duration: 0.9 } }}
                whileTap={{ zoom: 0.95 }}
                exit={{ opacity: 0, y: -30, transition: { duration: 0.9 } }}
              >
                <Button
                  onClick={() => {
                    navigate("/contact");
                  }}
                  variant="contained"
                  color="primary"
                  size={"small"}
                  sx={{
                    px: { md: 3 },
                    fontSize: {
                      xs: "0.9rem",
                      sm: "1rem",
                      md: "1.1rem",
                      lg: "1.2rem",
                    },
                    fontWeight: 400,
                    borderRadius: 10,
                  }}
                >
                  Let's talk
                </Button>
              </motion.div>
            </Box>
          </motion.div>
        </Box>

        <Box flexGrow={1}></Box>

        {/* For Tech Icons */}
        <Box
          mt={{ md: 14 }}
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
                stiffness: 20,
                delay: 2,
              },
            }}
            style={{ position: "absolute", top: 20, left: 20 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.9 } }}
          >
            <Tooltip title="React" arrow>
              <motion.img
                draggable={false}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  navigate("/skills");
                }}
                src={"react-2.svg"}
                animate={{
                  y: [0, -30, 0],
                  rotate: [45, 60, 45],
                  type: "spring",
                  transition: { repeat: "infinite", duration: 4 },
                }}
                style={{
                  cursor: "pointer",
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
                delay: 3,
              },
            }}
            style={{ position: "absolute", top: 115, left: 140 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.9 } }}
          >
            <Tooltip title="Nodejs" arrow>
              <motion.img
                draggable={false}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  navigate("/skills");
                }}
                src={"nodejs-icon.svg"}
                animate={{
                  y: [0, -5, 0],

                  type: "spring",
                  transition: { repeat: "infinite", duration: 2 },
                }}
                style={{
                  cursor: "pointer",
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
                delay: 2.75,
              },
            }}
            style={{ position: "absolute", bottom: 30, left: 60 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.9 } }}
          >
            <Tooltip title="Firebase" arrow>
              <motion.img
                draggable={false}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  navigate("/skills");
                }}
                src={"firebase-1.svg"}
                animate={{
                  y: [5, -5, 5],
                  x: [5, 0, 5],
                  rotate: [-5, 0, -5],
                  type: "spring",
                  transition: { repeat: "infinite", duration: 4 },
                }}
                style={{
                  cursor: "pointer",
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
                stiffness: 20,
                delay: 2.5,
              },
            }}
            style={{ position: "absolute", bottom: 70, right: 40 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.9 } }}
          >
            <Tooltip title="Material UI" arrow>
              <motion.img
                draggable={false}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  navigate("/skills");
                }}
                src={"material-ui-1.svg"}
                animate={{
                  x: [5, 0, 5],
                  rotate: [-5, 0, -5],
                  type: "spring",
                  transition: { repeat: "infinite", duration: 5 },
                }}
                style={{
                  cursor: "pointer",
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
                stiffness: 15,
                delay: 3.25,
              },
            }}
            style={{ position: "absolute", top: 0, right: 50 }}
            exit={{ opacity: 0, y: -50, transition: { duration: 0.9 } }}
          >
            <Tooltip title="Framer Motion" arrow>
              <motion.img
                draggable={false}
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  navigate("/skills");
                }}
                src={"framer-motion.svg"}
                animate={{
                  y: [0, -5, 0],
                  rotate: [-10, 0, -10],
                  type: "spring",
                  transition: { repeat: "infinite", duration: 6 },
                }}
                style={{
                  cursor: "pointer",
                  height: "60px",
                  filter:
                    theme.palette.mode === "light"
                      ? "drop-shadow(-2px 2px 2px rgb(100 100 100 / 0.4))"
                      : "drop-shadow(0px 2px 2px rgb(150 150 150 / 0.4))",
                }}
              />
            </Tooltip>
          </motion.div>
        </Box>

        {/* ------------------------------------------------------------------------------------------------------ */}
        {/* --------------------------------Icons display for mobile below---------------------------------------- */}
        {/* ------------------------------------------------------------------------------------------------------ */}

        <Box
          mt={{ xs: 5, sm: 5 }}
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
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  navigate("/skills");
                }}
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
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  navigate("/skills");
                }}
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
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  navigate("/skills");
                }}
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
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  navigate("/skills");
                }}
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
                whileTap={{ scale: 0.9 }}
                onClick={() => {
                  navigate("/skills");
                }}
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

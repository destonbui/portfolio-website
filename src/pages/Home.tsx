import { Box, Typography, Button, useTheme } from "@mui/material";
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
          xs: "column-reverse",
          sm: "column-reverse",
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
              exit={{ opacity: 0, y: -50, transition: { duration: 0.5 } }}
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
                exit={{ opacity: 0, y: -50, transition: { duration: 0.9 } }}
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

        {/* For Tech Icons */}
        <Box
          mt={{ xs: 5, sm: 5, md: 15 }}
          width={{ xs: "100%", sm: "100%", md: "45%" }}
          position="relative"
        ></Box>
      </Box>
    </motion.div>
  );
}

export default Home;

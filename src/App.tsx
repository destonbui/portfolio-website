import { Box, Button } from "@mui/material";
import { motion } from "framer-motion";
import { useState } from "react";

function App() {
  const [clicked, setClicked] = useState(false);

  return (
    <Box p={0} m={-1} minHeight="100vh" width="100vw" component="main" id="App">
      <Box
        minHeight="100vh"
        display="flex"
        alignItems="center"
        justifyContent="center"
        position="relative"
      >
        <motion.div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
          initial={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <Button variant="contained">Hello</Button>
        </motion.div>
      </Box>
    </Box>
  );
}

export default App;

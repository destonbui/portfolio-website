import { Box, Typography, Stack } from "@mui/material";
import DarkLightSwitch from "./DarkLightSwitch";

type NavbarProps = {
  toggleTheme: () => void;
};

function Navbar({ toggleTheme }: NavbarProps) {
  return (
    <Box
      height="80px"
      width={{ xs: 300, sm: 500, md: 700, lg: 900, xl: 1200 }}
      display="flex"
      flexDirection="row"
      alignItems="center"
      position="relative"
      zIndex={2}
    >
      <img src="/Deston-logo.png" height="40px" />
      <Box flexGrow={1}></Box>
      <Stack
        direction="row"
        gap={{ xs: 1, sm: 1, md: 2, lg: 3, xl: 4 }}
        alignItems="center"
      >
        <Typography variant="body1" color="text.primary" letterSpacing={1}>
          Home
        </Typography>
        <Typography variant="body1" color="text.secondary" letterSpacing={1}>
          Work
        </Typography>
        <Typography variant="body1" color="text.secondary" letterSpacing={1}>
          Contact
        </Typography>
        <DarkLightSwitch toggleTheme={toggleTheme} />
      </Stack>
    </Box>
  );
}

export default Navbar;

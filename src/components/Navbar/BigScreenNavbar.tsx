import { Box, Stack } from "@mui/material";

import DarkLightSwitch from "./DarkLightSwitch";

import Logo from "./Logo";
import TopNavItem from "./TopNavItem";
import { navItems } from "../../navItems";

type NavbarProps = {
  toggleTheme: () => void;
};

function BigScreenNavbar({ toggleTheme }: NavbarProps) {
  return (
    <Box
      mt={{ xs: 2, sm: 2, md: 5 }}
      maxHeight="100%"
      width="80%"
      maxWidth={1200}
      display={{ xs: "none", sm: "none", md: "flex" }}
      flexDirection="row"
      alignItems="center"
      position="relative"
    >
      <Logo />
      <Box flexGrow={1}></Box>
      <Stack
        direction="row"
        gap={{ xs: 2, sm: 2, md: 2, lg: 3, xl: 4 }}
        alignItems="center"
      >
        {navItems.map((item, i) => {
          return <TopNavItem key={i} to={item.to} path={item.path} />;
        })}

        <DarkLightSwitch toggleTheme={toggleTheme} />
      </Stack>
    </Box>
  );
}

export default BigScreenNavbar;

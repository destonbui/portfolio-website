import { Box } from "@mui/material";
import DarkLightSwitch from "./DarkLightSwitch";

import { useState } from "react";
import MenuToggle from "./MenuToggle";
import Backdrop from "./Backdrop";
import MobileDrawer from "./MobileDrawer";

type NavbarProps = {
  toggleTheme: () => void;
};

function SmallScreenNavbar({ toggleTheme }: NavbarProps) {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const closeDrawer = (): void => {
    setDrawerOpen(false);
  };
  const openDrawer = (): void => {
    setDrawerOpen(true);
  };

  return (
    <Box
      mt={{ xs: 1, sm: 1 }}
      height="80px"
      width="80%"
      maxWidth={1200}
      display={{ xs: "flex", sm: "flex", md: "none" }}
      flexDirection="row"
      alignItems="center"
      position="relative"
    >
      {/* backdrop */}
      <Backdrop drawerOpen={drawerOpen} closeDrawer={closeDrawer} />

      {/* drawer nav */}
      <MobileDrawer drawerOpen={drawerOpen} closeDrawer={closeDrawer} />

      {/* Toggle icon */}
      <MenuToggle
        open={() => openDrawer()}
        close={() => closeDrawer()}
        drawerOpen={drawerOpen}
      />
      <Box flexGrow={1}></Box>

      <DarkLightSwitch toggleTheme={toggleTheme} />
    </Box>
  );
}

export default SmallScreenNavbar;

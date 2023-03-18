import { Box } from "@mui/material";
import DarkLightSwitch from "./DarkLightSwitch";
import { useResolvedPath } from "react-router-dom";
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

  const pathname = useResolvedPath().pathname;

  return (
    <Box
      mt={{ xs: 2, sm: 2, md: 5 }}
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
      <MobileDrawer
        drawerOpen={drawerOpen}
        closeDrawer={closeDrawer}
        pathname={pathname}
      />

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

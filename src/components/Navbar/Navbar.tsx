import BigScreenNavbar from "./BigScreenNavbar";
import SmallScreenNavbar from "./SmallScreenNavbar";

type NavbarProps = {
  toggleTheme: () => void;
};

function Navbar({ toggleTheme }: NavbarProps) {
  return (
    <>
      <BigScreenNavbar toggleTheme={toggleTheme} />

      <SmallScreenNavbar toggleTheme={toggleTheme} />
    </>
  );
}

export default Navbar;

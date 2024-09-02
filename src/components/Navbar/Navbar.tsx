// Libraries
import React from "react";
// Styles
import styles from "./Navbar.module.css";
// Components
import Logo from "../Logo/Logo";
import Mobile from "../Responsive/Mobile";
import MenuMobile from "../MenuMobile/MenuMobile";
import Desktop from "../Responsive/Desktop";
import MenuLinks from "../MenuLinks/MenuLinks";

function Navbar(): React.ReactElement {
  return (
    <header className={styles.navbar}>
      <nav className={styles.nav}>
        <Logo />

        <Mobile>
          <MenuMobile />
        </Mobile>

        <Desktop>
          <MenuLinks />
        </Desktop>
      </nav>
    </header>
  );
}

export default Navbar;

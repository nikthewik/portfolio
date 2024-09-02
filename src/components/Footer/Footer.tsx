// Libraries
import React from "react";
// Styles
import styles from "./Footer.module.css";

function Footer(): React.ReactElement {
  return (
    <footer className={styles.footer}>
      {`Copyright © ${new Date().getFullYear()} Nicola Pavoni. All Rights Reserved.`}
    </footer>
  );
}

export default Footer;

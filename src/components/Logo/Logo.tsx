// Libraries
import React from "react";
import { Link } from "react-router-dom";
// Styles
import styles from "./Logo.module.css";
// Assets
import LogoImg from "../../assets/img/logo.png";

function Logo(): React.ReactElement {
  return (
    <div className={styles.logoContainer}>
      <Link className={styles.link} to="/home">
        <img className={styles.logo} src={LogoImg} alt="NikTheWik logo" />
      </Link>
    </div>
  );
}

export default Logo;

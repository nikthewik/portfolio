// Libraries
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// Types
import { AppDispatch } from "../../store.ts";
// Slices
import { closeMenu } from "../../features/menu/menuSlice";
// Styles
import styles from "./Logo.module.css";
// Assets
import LogoImg from "../../assets/img/logo.png";

function Logo(): React.ReactElement {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className={styles.logoContainer}>
      <Link
        className={styles.link}
        to="/home"
        onClick={() => dispatch(closeMenu())}
      >
        <img className={styles.logo} src={LogoImg} alt="NikTheWik logo" />
      </Link>
    </div>
  );
}

export default Logo;

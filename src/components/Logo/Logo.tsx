// Libraries
import React from "react";
import { Link } from "react-router-dom";
// Style
import style from "./Logo.module.css";
// Assets
import LogoImg from "../../assets/img/logo.png";

function Logo(): React.ReactElement {
  return (
    <div className={style.logoContainer}>
      <Link className={style.link} to="/home">
        <img className={style.logo} src={LogoImg} alt="NikTheWik logo" />
      </Link>
    </div>
  );
}

export default Logo;

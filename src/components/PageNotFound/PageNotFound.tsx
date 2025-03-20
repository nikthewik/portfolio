// Libraries
import React from "react";
import { HiOutlineHome } from "react-icons/hi2";
// Components
import Main from "../Main/Main";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";
// Styles
import styles from "./PageNotFound.module.css";

function PageNotFound(): React.ReactElement {
  return (
    <>
      <Helmet>
        <title>404 Page Not Found | NikTheWik</title>
      </Helmet>
      <Main isCenter={true}>
        <h1 className={styles.title}>404</h1>
        <p className={styles.description}>Page Not Found</p>
        <div className={styles.container}>
          <p className={styles.text}>Go back to Home</p>
          <Link to="/home" className={styles.link}>
            <HiOutlineHome className={styles.icon} />
          </Link>
        </div>
      </Main>
    </>
  );
}

export default PageNotFound;

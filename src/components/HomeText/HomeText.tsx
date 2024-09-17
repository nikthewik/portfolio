// Libraries
import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// Types
import { AppDispatch } from "../../store.ts";
// Slices
import { closeMenu } from "../../features/menu/menuSlice";
// Styles
import styles from "./HomeText.module.css";

function HomeText(): React.ReactElement {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className={styles.container}>
      <p className={styles.title}>Hi there, Humans!</p>
      <p className={`${styles.title} ${styles.marginBtm}`}>
        I'm&nbsp;
        <motion.span
          className={styles.colorTitle}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        >{`<NikTheWik/>`}</motion.span>
      </p>

      <p className={styles.job}>Creative Developer</p>
      <p className={styles.caption}>From Another World</p>

      <Link
        className={styles.link}
        to="/projects"
        onClick={() => dispatch(closeMenu())}
      >
        ENTER MY COSMOS
      </Link>
    </div>
  );
}

export default HomeText;

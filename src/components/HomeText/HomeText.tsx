// Libraries
import React from "react";
import { motion } from "framer-motion";
// Styles
import styles from "./HomeText.module.css";

function HomeText(): React.ReactElement {
  return (
    <div className={styles.container}>
      <p className={styles.title}>Hi there, Humans!</p>
      <p className={`${styles.title} ${styles.marginBtm}`}>
        I'm&nbsp;
        <motion.span
          className={styles.color}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        >{`<NikTheWik/>`}</motion.span>
      </p>
      <p className={styles.p1}>Creative Developer</p>
      <p className={styles.p2}>From Another World</p>
    </div>
  );
}

export default HomeText;

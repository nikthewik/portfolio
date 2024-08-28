// Libraries
import React from "react";
import { motion } from "framer-motion";
// Style
import style from "./HomeText.module.css";

function HomeText(): React.ReactElement {
  return (
    <div className={style.container}>
      <p className={style.title1}>Hi there, Humans!</p>
      <p className={style.title2}>
        I'm&nbsp;
        <motion.span
          className={style.color}
          animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
          transition={{ ease: "linear", duration: 10, repeat: Infinity }}
        >{`<NikTheWik/>`}</motion.span>
      </p>
      <p className={style.p1}>Front-End Developer</p>
      <p className={style.p2}>From Another World</p>
    </div>
  );
}

export default HomeText;

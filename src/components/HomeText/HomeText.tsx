// Libraries
import React from "react";
// Style
import style from "./HomeText.module.css";

function HomeText(): React.ReactElement {
  return (
    <div className={style.container}>
      <p className={style.title1}>Hi there, Humans!</p>
      <p className={style.title2}>
        I'm&nbsp;
        <span className={style.color}>{`<NikTheWik/>`}</span>
      </p>
      <p className={style.p1}>Front-End Developer</p>
      <p className={style.p2}>From Another World</p>
    </div>
  );
}

export default HomeText;

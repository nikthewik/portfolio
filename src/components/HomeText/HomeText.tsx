// Libraries
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// Types
import { AppDispatch } from "../../store.ts";
// Slices
import { closeMenu } from "../../features/menu/menuSlice";
// Styles
import styles from "./HomeText.module.css";
// Components
import MultiColoredText from "../MultiColoredText/MultiColoredText.tsx";

function HomeText(): React.ReactElement {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className={styles.container}>
      <p className={styles.title}>Hi there, Humans!</p>
      <p className={`${styles.title} ${styles.marginBtm}`}>
        I'm&nbsp;
        <MultiColoredText style={styles.colorTitle}>
          {`<NikTheWik />`}
        </MultiColoredText>
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

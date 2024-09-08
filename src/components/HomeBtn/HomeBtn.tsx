// Libraries
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// Types
import { AppDispatch } from "../../store.ts";
// Slices
import { closeMenu } from "../../features/menu/menuSlice";
// Styles
import styles from "./HomeBtn.module.css";

function HomeBtn(): React.ReactElement {
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className={styles.btn}>
      <Link
        className={styles.link}
        to="/aboutme"
        onClick={() => dispatch(closeMenu())}
      >
        ENTER MY COSMOS
      </Link>
    </div>
  );
}

export default HomeBtn;

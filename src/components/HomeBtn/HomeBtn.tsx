// Libraries
import React from "react";
import { Link } from "react-router-dom";
// Styles
import styles from "./HomeBtn.module.css";

function HomeBtn(): React.ReactElement {
  return (
    <div className={styles.btn}>
      <Link className={styles.link} to="/aboutme">
        ENTER MY COSMOS
      </Link>
    </div>
  );
}

export default HomeBtn;

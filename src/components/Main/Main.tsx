// Libraries
import React from "react";
// Styles
import styles from "./Main.module.css";
// Types
import { MainType } from "../../types/MainType";
import { Children } from "../../types/ChildrenType";

function Main({
  isCenter = false,
  children,
}: MainType & Children): React.ReactNode {
  return (
    <main
      className={
        isCenter
          ? `${styles.main} ${styles.center}`
          : `${styles.main} ${styles.noCenter}`
      }
    >
      {children}
    </main>
  );
}

export default Main;

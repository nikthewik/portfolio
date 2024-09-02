// Libraries
import React from "react";
// Styles
import styles from "./Main.module.css";
// Types
import { Children } from "../../types/ChildrenType";

function Main({ children }: Children): React.ReactNode {
  return <main className={styles.main}>{children}</main>;
}

export default Main;

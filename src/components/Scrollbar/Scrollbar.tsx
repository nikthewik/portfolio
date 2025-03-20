// Libraries
import React from "react";
// Types
import { Children } from "../../types/ChildrenType";
// Components
import SimpleBar from "simplebar-react";
// Styles
import styles from "./Scrollbar.module.css";
import "simplebar-react/dist/simplebar.min.css";

function Scrollbar({ children }: Children): React.ReactNode {
  return <SimpleBar className={styles.simpleBar}>{children}</SimpleBar>;
}

export default Scrollbar;

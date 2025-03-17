// Libraries
import React from "react";
// Types
import { PageTextType } from "../../types/PageTextType";
// Styles
import styles from "./PageText.module.css";

function PageText({ title, children }: PageTextType): React.ReactNode {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>{title}</h1>
      <p className={styles.description}>{children}</p>
    </div>
  );
}

export default PageText;

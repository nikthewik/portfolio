// Libraries
import React from "react";
import { motion } from "framer-motion";
// Styles
import styles from "./MultiColoredText.module.css";
// Types
import { Children } from "../../types/ChildrenType";

function MultiColoredText({
  children,
  style,
}: {
  style: string;
} & Children): React.ReactNode {
  return (
    <motion.span
      className={`${styles.base} ${style}`}
      animate={{ backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"] }}
      transition={{ ease: "linear", duration: 10, repeat: Infinity }}
    >
      {children}
    </motion.span>
  );
}

export default MultiColoredText;

// Libraries
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Styles
import styles from "./MenuMobile.module.css";
// Components
import MenuLinks from "../MenuLinks/MenuLinks";

function MenuMobile(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={isOpen ? `${styles.btnOpen} ${styles.btn}` : styles.btn}
        onClick={() => setIsOpen(!isOpen)}
      >
        <motion.span
          initial={{ rotate: 0, transformOrigin: "50% 50%", y: "-7px" }}
          animate={{
            rotate: isOpen ? "45deg" : 0,
            transformOrigin: isOpen ? "9px -7.5px" : "50% 50%",
            y: isOpen ? "0px" : "-7px",
          }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
        ></motion.span>

        <motion.span
          initial={{ opacity: 1, x: 0, display: "block" }}
          animate={{
            opacity: isOpen ? 0 : 1,
            x: isOpen ? "-100%" : 0,
            display: isOpen ? "none" : "block",
          }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
        ></motion.span>

        <motion.span
          initial={{ rotate: 0, transformOrigin: "50% 50%", y: "7px" }}
          animate={{
            rotate: isOpen ? "-45deg" : 0,
            transformOrigin: isOpen ? "10px 9px" : "0% 0%",
            y: isOpen ? "0px" : "7px",
          }}
          transition={{ ease: "easeInOut", duration: 0.2 }}
        ></motion.span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={styles.menu}
            initial={{ x: "100%" }}
            animate={{ x: "0%" }}
            exit={{ x: "100%" }}
            transition={{ ease: "easeInOut" }}
          >
            <MenuLinks />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default MenuMobile;

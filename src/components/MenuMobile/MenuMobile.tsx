// Libraries
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
// Style
import style from "./MenuMobile.module.css";
// Components
import MenuLinks from "../MenuLinks/MenuLinks";

function MenuMobile(): React.ReactElement {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        className={isOpen ? `${style.btnOpen} ${style.btn}` : style.btn}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className={style.topLine}></span>
        <span className={style.midLine}></span>
        <span className={style.btmLine}></span>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className={style.menu}
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

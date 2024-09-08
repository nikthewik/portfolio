// Libraries
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// Types
import { AppDispatch } from "../../store.ts";
// Slices
import { closeMenu } from "../../features/menu/menuSlice";
// Styles
import styles from "./MenuLinks.module.css";
// Data
import pages from "../../data/arrays/pages";
// Helpers
import { formatWord } from "../../helpers/formatWord";

function MenuLinks(): React.ReactElement {
  const dispatch: AppDispatch = useDispatch();

  return (
    <ul className={styles.ul}>
      {pages.map((page) => (
        <Link
          className={styles.link}
          to={`/${formatWord(page)}`}
          key={formatWord(page)}
          onClick={() => dispatch(closeMenu())}
        >
          <li className={styles.li}>{page}</li>
        </Link>
      ))}
    </ul>
  );
}

export default MenuLinks;

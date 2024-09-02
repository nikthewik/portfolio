// Libraries
import React from "react";
import { Link } from "react-router-dom";
// Styles
import styles from "./MenuLinks.module.css";
// Data
import pages from "../../data/arrays/pages";
// Helpers
import { formatWord } from "../../helpers/formatWord";

function MenuLinks(): React.ReactElement {
  return (
    <ul className={styles.ul}>
      {pages.map((page) => (
        <Link
          className={styles.link}
          to={`/${formatWord(page)}`}
          key={formatWord(page)}
        >
          <li className={styles.li}>{page}</li>
        </Link>
      ))}
    </ul>
  );
}

export default MenuLinks;

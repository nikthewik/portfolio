// Libraries
import React from "react";
import { Link } from "react-router-dom";
// Style
import style from "./MenuLinks.module.css";
// Data
import pages from "../../data/arrays/pages";
// Helpers
import { formatWord } from "../../helpers/formatWord";

function MenuLinks(): React.ReactElement {
  return (
    <ul className={style.ul}>
      {pages.map((page) => (
        <Link
          className={style.link}
          to={`/${formatWord(page)}`}
          key={formatWord(page)}
        >
          <li className={style.li}>{page}</li>
        </Link>
      ))}
    </ul>
  );
}

export default MenuLinks;

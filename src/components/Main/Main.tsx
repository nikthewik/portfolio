// Libraries
import React from "react";
// Style
import style from "./Main.module.css";

type Props = {
  isCentered?: boolean;
  children: React.ReactNode;
};

function Main({ isCentered, children }: Props): React.ReactNode {
  return (
    <main
      className={`${isCentered ? style.centered : style.left} ${style.main}`}
    >
      {children}
    </main>
  );
}

export default Main;

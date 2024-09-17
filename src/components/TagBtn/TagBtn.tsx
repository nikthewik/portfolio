// Libraries
import React, { useState } from "react";
import { useDispatch } from "react-redux";
// Types
import { Children } from "../../types/ChildrenType";
import { AppDispatch } from "../../store";
// Slices
import { toggleTag } from "../../features/tags/tagsSlice";
// Styles
import styles from "./TagBtn.module.css";

function TagBtn({ children }: Children): React.ReactNode {
  const dispatch: AppDispatch = useDispatch();
  const [isPressed, setIsPressed] = useState(false);

  function handleClick() {
    setIsPressed(!isPressed);
    dispatch(toggleTag(children));
  }

  return (
    <button
      className={`${isPressed ? styles.btnPressed : null} ${styles.btn}`}
      onClick={() => handleClick()}
    >
      {children}
    </button>
  );
}

export default TagBtn;

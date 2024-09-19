// Libraries
import React from "react";
import { useDispatch, useSelector } from "react-redux";
// Types
import { AppDispatch, RootState } from "../../store";
// Slices
import { toggleTag } from "../../features/tags/tagsSlice";
// Data
import tags from "../../data/arrays/tags";
// Styles
import styles from "./ProjectsFilter.module.css";

function ProjectsFilter(): React.ReactElement {
  const { tags: tagsState } = useSelector((state: RootState) => state.tags);
  const dispatch: AppDispatch = useDispatch();

  return (
    <div className={styles.filterContainer}>
      {tags.map((tag) => {
        return (
          <button
            className={`${styles.btn} ${
              tagsState.includes(tag) ? styles.btnPressed : styles.btnNotPressed
            }`}
            onClick={() => dispatch(toggleTag(tag))}
            key={tag}
          >
            {tag}
          </button>
        );
      })}
    </div>
  );
}

export default ProjectsFilter;

// Data
import tags from "../../data/arrays/tags";
// Styles
import styles from "./ProjectsFilter.module.css";
// Components
import TagBtn from "../TagBtn/TagBtn";

function ProjectsFilter() {
  return (
    <div className={styles.filterContainer}>
      {tags.map((tag) => {
        return <TagBtn key={tag}>{tag}</TagBtn>;
      })}
    </div>
  );
}

export default ProjectsFilter;

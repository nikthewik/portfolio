// Data
import tags from "../../data/arrays/tags";
// Styles
import styles from "./ProjectsFilter.module.css";
// Components
import ProjectsTagBtn from "../ProjectsTagBtn/ProjectsTagBtn";

function ProjectsFilter() {
  return (
    <div className={styles.filterContainer}>
      {tags.map((tag) => {
        return <ProjectsTagBtn key={tag}>{tag}</ProjectsTagBtn>;
      })}
    </div>
  );
}

export default ProjectsFilter;

// Styles
import styles from "./ProjectsText.module.css";

function ProjectsText() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Projects</h1>
      <p className={styles.p1}>
        These are some dev projects I have worked on. <br /> You can filter them
        by tag.
      </p>
    </div>
  );
}

export default ProjectsText;

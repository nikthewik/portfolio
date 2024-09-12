// Types
import { Children } from "../../types/ChildrenType";
// Styles
import styles from "./ProjectsTagBtn.module.css";

function ProjectsTagBtn({ children }: Children) {
  return <button className={styles.btn}>{children}</button>;
}

export default ProjectsTagBtn;

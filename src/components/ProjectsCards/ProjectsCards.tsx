// Libraries
import React from "react";
import { HiOutlineRocketLaunch, HiOutlineCommandLine } from "react-icons/hi2";
// Types
import { IProject } from "../../types/IProject";
// Components
import Scrollbar from "../Scrollbar/Scrollbar";
// Styles
import styles from "./ProjectsCards.module.css";

function ProjectsCards({
  projects,
}: {
  projects: IProject[];
}): React.ReactElement {
  return (
    <Scrollbar>
      <div className={styles.container}>
        {projects.map((project) => (
          <div key={project.name} className={styles.card}>
            <img
              className={styles.img}
              src={project.imgName}
              alt={project.alt}
            />

            <div className={styles.info}>
              <p className={styles.title}>{project.name}</p>
              <p className={styles.description}>{project.description}</p>
              <div className={styles.labelsContainer}>
                {project.labels.map((tag) => {
                  return (
                    <button
                      className={`
                    ${styles.label} 
                    ${tag === "React" && styles.reactLabel}
                    ${tag === "TypeScript" && styles.tsLabel}
                    ${tag === "JavaScript" && styles.jsLabel}
                    ${tag === "SCSS" && styles.scssLabel}
                    ${tag === "HTML&CSS" && styles.htmlCssLabel}
                    ${tag === "PWA" && styles.pwaLabel}`}
                      key={tag}
                    >
                      {tag}
                    </button>
                  );
                })}
              </div>
            </div>

            <div className={styles.links}>
              <a href={project.demo} target="_blank">
                <HiOutlineRocketLaunch className={styles.icon} />
              </a>
              <a href={project.github} target="_blank">
                <HiOutlineCommandLine className={styles.icon} />
              </a>
            </div>
          </div>
        ))}
      </div>
    </Scrollbar>
  );
}

export default ProjectsCards;

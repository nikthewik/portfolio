// Data
import projects from "../data/arrays/projects";
// Components
import Main from "../components/Main/Main";
import ProjectsText from "../components/ProjectsText/ProjectsText";
import ProjectsFilter from "../components/ProjectsFilter/ProjectsFilter";

function Projects() {
  return (
    <Main>
      <ProjectsText />
      <ProjectsFilter />

      <div>
        {projects
          .filter((project) => project.labels.includes("React"))
          .map((project) => (
            <div key={project.name}>
              <p>{project.name}</p>
              <p>{project.description}</p>
              <p>{project.labels}</p>

              <a href={project.demo} target="_blank">
                Live Demo
              </a>
              <a href={project.github} target="_blank">
                GitHub
              </a>
            </div>
          ))}
      </div>
    </Main>
  );
}

export default Projects;

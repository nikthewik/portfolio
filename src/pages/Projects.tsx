// Libraries
import { useSelector } from "react-redux";
// Types
import { RootState } from "../store";
// Data
import projects from "../data/arrays/projects";
// Components
import Main from "../components/Main/Main";
import ProjectsText from "../components/ProjectsText/ProjectsText";
import ProjectsFilter from "../components/ProjectsFilter/ProjectsFilter";

function Projects() {
  const tags = useSelector((state: RootState) => state.tags.tags);

  const filteredProjects =
    tags.length > 1
      ? projects.filter((project) =>
          project.labels.some((tag) => tags.includes(tag))
        )
      : projects;

  return (
    <Main>
      <ProjectsText />
      <ProjectsFilter />

      <div>
        {filteredProjects.map((project) => (
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

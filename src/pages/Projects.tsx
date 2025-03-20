// Libraries
import React from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
// Types
import { RootState } from "../store";
import { IProject } from "../types/IProject";
// Data
import projects from "../data/arrays/projects";
// Components
import Main from "../components/Main/Main";
import PageText from "../components/PageText/PageText";
import ProjectsFilter from "../components/ProjectsFilter/ProjectsFilter";
import ProjectsCards from "../components/ProjectsCards/ProjectsCards";

function Projects(): React.ReactElement {
  const tags = useSelector((state: RootState) => state.tags.tags);

  const filteredProjects: IProject[] =
    tags.length - 1 === 0
      ? projects
      : projects.filter((project) =>
          project.labels.some((tag) => tags.includes(tag))
        );

  return (
    <>
      <Helmet>
        <title>Projects | NikTheWik</title>
      </Helmet>
      <Main>
        <PageText title="Projects">
          These are some dev projects I have worked on.
          <br />
          You can filter them by tag.
        </PageText>
        <ProjectsFilter />
        <ProjectsCards projects={filteredProjects} />
      </Main>
    </>
  );
}

export default Projects;

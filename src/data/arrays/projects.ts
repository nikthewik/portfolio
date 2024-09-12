// Interfaces
import { IProject } from "../../types/IProject";

const projects: IProject[] = [
  {
    name: "No Mid Seasons Anymore (NMSA)",
    description:
      "A web app that displays data and provides information about climate change.",
    date: "2024-08",
    params: "nmsa",
    labels: ["React", "TypeScript"],
    imgName: "pj-nmsa.webp",
    demo: "https://ntw-nmsa.netlify.app/",
    github: "https://github.com/nikthewik/no-mid-seasons-anymore",
  },
  {
    name: "The New York Clone",
    description:
      "A clone that replicates the design and functionality of the New York Times.",
    date: "2024-05",
    params: "nyclone",
    labels: ["React", "JavaScript"],
    imgName: "pj-nyclone.webp",
    demo: "https://ntw-nyclone.netlify.app/",
    github: "https://github.com/nikthewik/ny-clone",
  },
];

export default projects;

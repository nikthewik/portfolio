// Interfaces
import { IProject } from "../../types/IProject";
// Imgs
import nmsaImg from "../../assets/img/pj-nmsa.avif";
import nycImg from "../../assets/img/pj-nyclone.avif";
import mtgToolsImg from "../../assets/img/pj-mtgtools.avif";
import handBookImg from "../../assets/img/pj-handbook.avif";
import encountersImg from "../../assets/img/pj-encounters.avif";
import myWebsiteImg from "../../assets/img/pj-my-website.avif";

const projects: IProject[] = [
  {
    name: "No Mid Seasons Anymore (NMSA)",
    description:
      "A web app that displays data and provides information about climate change.",
    date: "2024-08",
    params: "nmsa",
    labels: ["React", "TypeScript"],
    imgName: nmsaImg,
    alt: "NMSA logo",
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
    imgName: nycImg,
    alt: "NYClone logo",
    demo: "https://ntw-nyclone.netlify.app/",
    github: "https://github.com/nikthewik/ny-clone",
  },
  {
    name: "MTG Tools",
    description:
      "A PWA with some useful tools for Magic The Gathering players.",
    date: "2024-03",
    params: "mtgtools",
    labels: ["React", "JavaScript", "PWA"],
    imgName: mtgToolsImg,
    alt: "MTG Tools logo",
    demo: "https://ntw-mtg-tools.netlify.app/",
    github: "https://github.com/nikthewik/mtg-tools",
  },
  {
    name: "HandBook",
    description:
      "A simple, good-looking website to discover books by typing a genre.",
    date: "2024-01",
    params: "handbook",
    labels: ["JavaScript", "HTML&CSS", "SCSS"],
    imgName: handBookImg,
    alt: "HandBook logo",
    demo: "https://ntw-handbook.netlify.app/",
    github: "https://github.com/nikthewik/handbook",
  },
  {
    name: "enCounters",
    description:
      "A Counter + the Game of the Goose + D&D in space = enCounters.",
    date: "2023-10",
    params: "encounters",
    labels: ["JavaScript", "HTML&CSS"],
    imgName: encountersImg,
    alt: "enCounters logo",
    demo: "https://ntw-encounters.netlify.app/",
    github: "https://github.com/nikthewik/encounters",
  },
  {
    name: "First Personal Website",
    description:
      "My first complete personal website, fully responsive.",
    date: "2023-06",
    params: "mywebsite",
    labels: ["JavaScript", "HTML&CSS", "SCSS"],
    imgName: myWebsiteImg,
    alt: "My Website logo",
    demo: "https://nikthewik.github.io/",
    github: "https://github.com/nikthewik/nikthewik.github.io",
  }
];

export default projects;

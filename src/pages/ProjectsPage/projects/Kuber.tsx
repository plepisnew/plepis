import { Project } from "../data/projects";
import { technologies } from "../data/technologies";

import kuberImage from "@/assets/images/projects/kuber/kuber_old.png";

const Kuber: React.FC = () => {
  return <div>Rubiks cube solver</div>;
};

export const kuber: Project = {
  title: "Kuber",
  subtitle: "Rubiks Cube Solver",
  imageSrc: kuberImage,
  technologies: [technologies.javascript, technologies.threejs],
  Description: <Kuber />,
  url: "/kuber.html",
  sourceUrl:
    "https://github.com/plepisnew/learn-js/blob/main/public/js/rubiks.js",
};

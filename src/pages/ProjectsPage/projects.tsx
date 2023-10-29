import { ReactNode } from "react";
import { Technology } from "./technologies";
import { pogulum } from "./Pogulum";

export type Project = {
  url: string;
  sourceUrl: string;
  imageSrc: string;
  title: string;
  subtitle: string;
  Description: ReactNode;
  technologies: Technology[];
};

export const projects: Project[] = [pogulum];

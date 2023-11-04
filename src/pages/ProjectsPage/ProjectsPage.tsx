import { ArrayMap } from "@/utils/types";
import { projects } from "./data/projects";
import { Project } from "./data/projects";
import { ReactNode, useState } from "react";
import { cn } from "@/utils/cn";
import { FaExternalLinkAlt, FaChevronDown } from "react-icons/fa";
import { Technology } from "./data/technologies";

export const ProjectsPage: React.FC = () => {
  const [expandedProjects, setExpandedProjects] = useState<string[]>([]);

  const handleExpandProject = (title: string) => {
    if (expandedProjects.includes(title)) {
      return setExpandedProjects(
        expandedProjects.filter((project) => project !== title)
      );
    }
    setExpandedProjects([...expandedProjects, title]);
  };

  const technologyRenderer: ArrayMap<Technology, ReactNode> = (technology) => (
    <a
      key={technology.title}
      href={technology.url}
      target="_blank"
      className="flex items-center bg-primary-foreground/5 hover:bg-primary-foreground/10 transition-colors px-2 py-1 italic rounded-md"
    >
      #{technology.title}&nbsp;
      <img src={technology.imageSrc} className="w-5 rounded-md" />
    </a>
  );

  const projectRenderer: ArrayMap<Project, ReactNode> = ({
    title,
    url,
    imageSrc,
    Description,
    sourceUrl,
    subtitle,
    technologies,
  }) => (
    <div
      key={title}
      className={cn(
        "p-4 pb-0 w-full relative flex flex-col gap-4 ",
        "bg-primary-darker border border-primary-boundary rounded-xl"
      )}
    >
      {/* <div
        className={cn(
          "absolute left-0 top-0 w-12 h-12 grid place-items-center text-xl font-medium -translate-x-[calc(100%_+_10px)]",
          "border border-primary-boundary rounded-xl bg-primary-darker"
        )}
      >
        {index + 1}
      </div> */}
      <div className="flex justify-between">
        <h1 className="text-lg">
          <span>{title}: </span>
          <span className="text-primary-foreground/60">{subtitle}</span>
        </h1>
        <div className="flex gap-4">
          {[
            { title: "Browse", href: url },
            { title: "Github", href: sourceUrl },
          ].map(({ href, title }) => (
            <a
              key={title}
              href={href}
              target="_blank"
              className="flex items-center gap-1 text-primary-foreground/90 hover:text-primary-foreground transition-colors"
            >
              {title} <FaExternalLinkAlt className="inline" />
            </a>
          ))}
        </div>
      </div>
      <div className="w-full h-[1px] bg-primary-boundary" />
      <div className="flex gap-4 items-start">
        <a target="_blank" href={url} className="flex-grow">
          <img src={imageSrc} className="rounded-md" />
        </a>
        <div className="flex flex-wrap gap-2 basis-[260px] flex-shrink-0">
          {technologies.map(technologyRenderer)}
        </div>
      </div>
      <span
        onClick={() => handleExpandProject(title)}
        className="cursor-pointer mx-auto inline-flex items-center gap-1.5 select-none pt-1"
      >
        Learn more{" "}
        <FaChevronDown
          size={14}
          className={cn(
            expandedProjects.includes(title) && "rotate-180",
            "transition-transform"
          )}
        />
      </span>
      <div
        className={cn(
          expandedProjects.includes(title) ? "h-[600px]" : "h-0",
          "transition-all max-h-[600px] overflow-y-scroll scrollbar-hide"
        )}
      >
        {Description}
      </div>
    </div>
  );

  return (
    <div className="flex flex-col gap-4 items-center w-[600px] md:w-[700px] lg:w-[800px] mx-auto">
      {projects.map(projectRenderer)}
    </div>
  );
};

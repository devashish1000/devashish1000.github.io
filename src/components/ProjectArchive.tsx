import { archiveProjects } from "@/data/portfolio";
import {
  ArrowUpRight,
  ChatCircleText,
  ChefHat,
  Desktop,
  DeviceMobile,
  FileText,
  Heartbeat,
} from "@phosphor-icons/react/dist/ssr";

const projectIcons = [Desktop, ChatCircleText, ChefHat, Heartbeat, FileText, DeviceMobile];

export function ProjectArchive() {
  return (
    <div className="archive-grid">
      {archiveProjects.map((project, index) => {
        const ProjectIcon = projectIcons[index];
        const content = (
          <>
            <div className="archive-visual" aria-hidden="true">
              <ProjectIcon size={34} weight="duotone" />
            </div>
            <div className="archive-card-copy">
              <div className="archive-card-head"><h3>{project.title}</h3></div>
              <p>{project.label}</p>
              <span className="archive-card-action">
                {project.href ? "Open project" : "Private product"}
                {project.href && <ArrowUpRight size={18} aria-hidden="true" />}
              </span>
            </div>
          </>
        );

        return project.href ? (
          <a className="archive-card" key={project.title} href={project.href} target="_blank" rel="noreferrer">
            {content}
          </a>
        ) : (
          <article className="archive-card private" key={project.title}>{content}</article>
        );
      })}
    </div>
  );
}

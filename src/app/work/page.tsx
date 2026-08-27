import type { Metadata } from "next";
import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { ProjectArchive } from "@/components/ProjectArchive";
import { ProjectDiagram } from "@/components/ProjectDiagram";
import { SiteFooter } from "@/components/SiteFooter";
import { projects } from "@/data/portfolio";

export const metadata: Metadata = {
  title: "Selected Work",
  description: "Applied AI, analytics engineering, and decision-support projects by Dev Neupane.",
};

export default function WorkPage() {
  return (
    <main id="main">
      <section className="page-hero shell">
        <span className="section-label">Work</span>
        <h1>Evidence over adjectives.</h1>
        <p>Deployed work samples and prototypes showing how I frame, build, validate, and communicate AI and data products.</p>
      </section>
      <section className="shell project-index">
        {projects.map((project, index) => (
          <article className="index-project" key={project.slug}>
            <div className="index-copy">
              <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
              <p className="project-label">{project.label}</p>
              <h2>{project.title}</h2>
              <p>{project.summary}</p>
              <div className="tag-list">{project.disciplines.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <Link className="text-link" href={`/work/${project.slug}/`}>View case study <Arrow /></Link>
            </div>
            <ProjectDiagram type={project.diagram} />
          </article>
        ))}
      </section>
      <section className="archive-section panel shell section-space">
        <div className="section-heading compact"><span className="section-kicker">Project archive</span><h2>More products and experiments.</h2></div>
        <ProjectArchive />
      </section>
      <SiteFooter />
    </main>
  );
}

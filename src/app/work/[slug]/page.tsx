import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Arrow } from "@/components/Arrow";
import { ProjectDiagram } from "@/components/ProjectDiagram";
import { SiteFooter } from "@/components/SiteFooter";
import { projects } from "@/data/portfolio";

export const dynamicParams = false;

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  return project ? { title: project.title, description: project.summary } : {};
}

export default async function ProjectPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const project = projects.find((item) => item.slug === slug);
  if (!project) notFound();
  const currentIndex = projects.findIndex((item) => item.slug === project.slug);
  const nextProject = projects[(currentIndex + 1) % projects.length];

  return (
    <main id="main">
      <article>
        <header className="case-hero shell">
          <Link className="back-link" href="/work/">← All work</Link>
          <p className="project-label">{project.label}</p>
          <h1>{project.title}</h1>
          <p className="case-summary">{project.summary}</p>
          <div className="case-actions">
            <a className="button primary" href={project.live} target="_blank" rel="noreferrer">Open live project <Arrow /></a>
            <a className="button secondary" href={project.source} target="_blank" rel="noreferrer">View source <Arrow /></a>
          </div>
          <p className="disclosure">{project.disclosure}</p>
        </header>
        <section className="case-visual shell"><ProjectDiagram type={project.diagram} /></section>
        <div className="case-body shell">
          <section><span className="section-label">Context</span><p className="case-lead">{project.context}</p></section>
          <section><span className="section-label">Problem</span><h2>{project.problem}</h2></section>
          <section><span className="section-label">My role</span><p className="case-lead">{project.role}</p></section>
          <section>
            <span className="section-label">Approach</span>
            <ol className="case-list">{project.approach.map((item, index) => <li key={item}><span>{String(index + 1).padStart(2, "0")}</span>{item}</li>)}</ol>
          </section>
          <section>
            <span className="section-label">Validation &amp; controls</span>
            <ul className="validation-list">{project.validation.map((item) => <li key={item}>{item}</li>)}</ul>
          </section>
          <section><span className="section-label">Demonstrated outcome</span><h2>{project.outcome}</h2></section>
          <section><span className="section-label">Stack</span><div className="tag-list">{project.stack.map((item) => <span key={item}>{item}</span>)}</div></section>
        </div>
        <Link className="next-project section-rule" href={`/work/${nextProject.slug}/`}>
          <span>Next case study</span><strong>{nextProject.title}</strong><Arrow />
        </Link>
      </article>
      <SiteFooter />
    </main>
  );
}

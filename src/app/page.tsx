import Link from "next/link";
import { Arrow } from "@/components/Arrow";
import { ProjectDiagram } from "@/components/ProjectDiagram";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { SystemsDiagram } from "@/components/SystemsDiagram";
import { capabilities, experience, projects, workSteps } from "@/data/portfolio";

const heroMetrics = [
  ["5+", "AI-enabled applications"],
  ["15+", "multi-step workflows"],
  ["30+", "manual handoffs eliminated"],
  ["1,200+", "hours saved annually"],
];

const results = [
  ["96%", "classification accuracy", "AI-enabled document workflow"],
  ["96%", "forecast accuracy", "Corporate analytics"],
  ["100+", "hours saved monthly", "Automated KPI reporting"],
  ["$250M+", "in decisions informed", "Capital prioritization"],
];

export default function Home() {
  return (
    <main id="main">
      <section id="top" className="hero shell">
        <div className="hero-copy">
          <h1>I turn complex workflows into reliable AI and data products.</h1>
          <p>Applied AI &amp; Data Analyst combining AI product delivery, analytics engineering, and business translation.</p>
          <div className="hero-actions">
            <Link className="button primary" href="#work">View selected work <Arrow /></Link>
            <Link className="button secondary" href="/Dev_Neupane_Resume.pdf">Download résumé <span aria-hidden="true">↓</span></Link>
          </div>
          <p className="availability"><span aria-hidden="true" className="status-dot" /> Open to Remote &amp; Relocation</p>
        </div>
        <SystemsDiagram />
        <a className="scroll-cue" href="#proof" aria-label="Scroll to selected impact">↓</a>
      </section>

      <section id="proof" className="proof-rail section-rule">
        <div className="shell proof-grid">
          {heroMetrics.map(([value, label]) => (
            <div className="proof-item" key={label}><strong>{value}</strong><span>{label}</span></div>
          ))}
        </div>
      </section>

      <Reveal>
        <section className="about shell section-space">
          <div className="section-heading about-copy">
            <span className="section-label">About</span>
            <h2>Business context in.<br />Reliable systems out.</h2>
            <p>I work where business questions, data, and AI meet—translating unclear needs into requirements, workflows, controls, evaluations, and decision-ready products.</p>
          </div>
          <div className="context-diagram" aria-hidden="true">
            <div><span>Business questions</span><span>Data</span><span>AI capabilities</span><span>Constraints</span></div>
            <i />
            <strong>Decision-ready<br />products</strong>
          </div>
        </section>
      </Reveal>

      <Reveal>
        <blockquote className="pull-quote section-rule">
          <div className="shell"><span>“</span><p>The work is not finished when an AI response appears.<br />It is finished when people can trust, test, and use the outcome.</p></div>
        </blockquote>
      </Reveal>

      <section className="capabilities shell section-space">
        <Reveal><span className="section-label">Capabilities</span></Reveal>
        <div className="capability-list">
          {capabilities.map((item) => (
            <Reveal key={item.number}>
              <article className="capability-row">
                <span className="row-number">{item.number}</span>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
                <Arrow />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="work-section shell section-space">
        <span id="work" className="anchor-target" aria-hidden="true" />
        <Reveal>
          <div className="section-heading compact">
            <span className="section-label">Selected work</span>
            <h2>Systems built to be understood,<br />tested, and used.</h2>
          </div>
        </Reveal>
        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.slug}>
              <article className={`project-row ${index % 2 === 1 ? "reverse" : ""}`}>
                <div className="project-copy">
                  <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <h3>{project.title}</h3>
                    <p className="project-label">{project.label}</p>
                    <p>{project.summary}</p>
                    <Link className="text-link" href={`/work/${project.slug}/`}>View case study <Arrow /></Link>
                  </div>
                </div>
                <ProjectDiagram type={project.diagram} />
              </article>
            </Reveal>
          ))}
        </div>
        <Link className="archive-link" href="/work/">View project archive <Arrow /></Link>
      </section>

      <section className="experience-section shell section-space">
        <span id="experience" className="anchor-target" aria-hidden="true" />
        <Reveal>
          <div className="section-heading compact">
            <span className="section-label">Experience</span>
            <h2>Seven years across AI delivery,<br />analytics, operations, and strategy.</h2>
          </div>
        </Reveal>
        <div className="experience-list">
          {experience.map(([role, company, dates]) => (
            <Reveal key={`${company}-${role}`}>
              <article className="experience-row"><h3>{role}</h3><p>{company}</p><time>{dates}</time><Arrow /></article>
            </Reveal>
          ))}
        </div>
        <Link className="text-link resume-link" href="/Dev_Neupane_Resume.pdf">↓ &nbsp; Download full résumé</Link>
        <p className="education-line">MBA, Supply Chain &amp; Logistics · B.S., Management Information Systems · University of Nebraska Omaha</p>
      </section>

      <section className="results-section section-rule">
        <div className="shell section-space-tight">
          <Reveal><span className="section-label">Selected results</span></Reveal>
          <div className="results-grid">
            {results.map(([value, label, context]) => (
              <Reveal key={label}>
                <article><strong>{value}</strong><h3>{label}</h3><p>{context}</p></article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="approach-section shell section-space">
        <span id="approach" className="anchor-target" aria-hidden="true" />
        <Reveal>
          <div className="section-heading compact">
            <span className="section-label">How I work</span>
            <h2>A disciplined path from ambiguity to adoption.</h2>
          </div>
        </Reveal>
        <div className="steps-list">
          {workSteps.map(([number, title, detail]) => (
            <Reveal key={number}>
              <article className="step-row"><span>{number}</span><h3>{title}</h3><p>{detail}</p><Arrow /></article>
            </Reveal>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

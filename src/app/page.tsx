import Link from "next/link";
import {
  ChartLineUp,
  CompassTool,
  Database,
  DownloadSimple,
  FolderOpen,
  Sparkle,
} from "@phosphor-icons/react/dist/ssr";
import { Arrow } from "@/components/Arrow";
import { AnimatedMetric } from "@/components/AnimatedMetric";
import { ProjectArchive } from "@/components/ProjectArchive";
import { ProjectDiagram } from "@/components/ProjectDiagram";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
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

const capabilityIcons = [Sparkle, CompassTool, Database];

export default function Home() {
  return (
    <main id="main">
      <section id="top" className="hero aurora-panel shell">
        <div className="hero-copy">
          <p className="hero-role">Applied AI &amp; Data Analyst</p>
          <h1>
            <span className="name-display"><span>Dev</span> <span>Neupane</span></span>
            <span className="hero-statement">I turn complex workflows into reliable AI and data products.</span>
          </h1>
          <p className="hero-description">
            I combine AI product delivery, analytics engineering, and business translation to build systems people can trust, test, and use.
          </p>
          <div className="hero-actions">
            <Link className="button primary" href="#work">
              <FolderOpen size={23} weight="duotone" aria-hidden="true" />
              View selected work
            </Link>
            <a className="button secondary" href="/Dev_Neupane_Resume.pdf">
              <DownloadSimple size={23} aria-hidden="true" />
              Download résumé
            </a>
          </div>
          <p className="availability"><span aria-hidden="true" className="status-dot" /> Open to Remote &amp; Relocation</p>
        </div>
      </section>

      <section className="proof-rail shell" aria-label="Selected impact">
        {heroMetrics.map(([value, label]) => (
          <div className="proof-item" key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </section>

      <section id="work" className="work-section panel shell section-space">
        <Reveal>
          <div className="section-heading work-heading">
            <div>
              <span className="section-kicker">Selected work</span>
              <h2>From data signals<br />to better decisions.</h2>
            </div>
            <p>Three end-to-end systems showing how I connect data engineering, applied AI, quality controls, and human judgment.</p>
          </div>
        </Reveal>

        <div className="project-list">
          {projects.map((project, index) => (
            <Reveal key={project.slug}>
              <article className="project-row">
                <div className="project-copy">
                  <span className="row-number">{String(index + 1).padStart(2, "0")}</span>
                  <div>
                    <p className="project-label">{project.label}</p>
                    <h3>{project.title}</h3>
                    <p>{project.summary}</p>
                    <Link className="text-link" href={`/work/${project.slug}/`}>View case study <Arrow /></Link>
                  </div>
                </div>
                <ProjectDiagram type={project.diagram} />
              </article>
            </Reveal>
          ))}
        </div>
        <Link className="archive-link" href="/work/">View the complete work archive <Arrow /></Link>
      </section>

      <section id="about" className="about shell section-space">
        <Reveal>
          <div className="section-heading about-copy">
            <span className="section-kicker">About</span>
            <h2>Business context in.<br />Reliable systems out.</h2>
          </div>
        </Reveal>
        <Reveal>
          <div className="about-narrative">
            <p>I work where business questions, data, and AI meet—translating unclear needs into requirements, workflows, controls, evaluations, and decision-ready products.</p>
            <blockquote>The work is finished when people can trust, test, and use the outcome.</blockquote>
          </div>
        </Reveal>
      </section>

      <section id="skills" className="capabilities shell section-space">
        <Reveal>
          <div className="section-heading compact">
            <span className="section-kicker">Core capabilities</span>
            <h2>AI fluency with operational discipline.</h2>
          </div>
        </Reveal>
        <div className="capability-grid">
          {capabilities.map((item, index) => {
            const CapabilityIcon = capabilityIcons[index];
            return (
              <Reveal key={item.number}>
                <article className="capability-card">
                  <div className="capability-icon"><CapabilityIcon size={30} weight="duotone" aria-hidden="true" /></div>
                  <span>{item.number}</span>
                  <div className="capability-copy">
                    <h3>{item.title}</h3>
                    <p>{item.detail}</p>
                  </div>
                  <Arrow />
                </article>
              </Reveal>
            );
          })}
        </div>
      </section>

      <section id="experience" className="experience-section panel shell section-space">
        <Reveal>
          <div className="section-heading compact">
            <span className="section-kicker">Experience</span>
            <h2>Seven years across AI delivery, analytics, operations, and strategy.</h2>
          </div>
        </Reveal>
        <div className="experience-list">
          {experience.map(([role, company, dates]) => (
            <Reveal key={`${company}-${role}`}>
              <article className="experience-row"><h3>{role}</h3><p>{company}</p><time>{dates}</time><Arrow /></article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="results-section shell section-space">
        <Reveal>
          <div className="section-heading compact results-heading">
            <span className="section-kicker">Selected results</span>
            <h2>Measured outcomes, not just activity.</h2>
          </div>
        </Reveal>
        <div className="results-grid">
          {results.map(([value, label, context]) => (
            <Reveal key={label}>
              <article className="result-signal">
                <div className="result-icon"><ChartLineUp size={32} weight="duotone" aria-hidden="true" /></div>
                <strong><AnimatedMetric value={value} /></strong>
                <div className="result-copy"><h3>{label}</h3><p>{context}</p></div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="approach" className="approach-section shell section-space">
        <Reveal>
          <div className="section-heading compact">
            <span className="section-kicker">How I work</span>
            <h2>A disciplined path from ambiguity to adoption.</h2>
          </div>
        </Reveal>
        <div className="steps-list">
          {workSteps.map(([number, title, detail]) => (
            <Reveal key={number}>
              <article className="step-row">
                <span>{number}</span>
                <div className="step-copy"><h3>{title}</h3><p>{detail}</p></div>
                <Arrow />
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="archive-section panel shell section-space">
        <Reveal>
          <div className="section-heading archive-heading">
            <div>
              <span className="section-kicker">Project archive</span>
              <h2>More products and experiments.</h2>
            </div>
            <p>Deployed prototypes, AI agents, repositories, and product work spanning finance, sales, food, healthcare, résumé tooling, and wellness.</p>
          </div>
        </Reveal>
        <ProjectArchive />
      </section>

      <SiteFooter />
    </main>
  );
}

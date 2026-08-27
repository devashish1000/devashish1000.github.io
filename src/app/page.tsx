import Image from "next/image";
import Link from "next/link";
import { DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { Arrow } from "@/components/Arrow";
import { ProjectArchive } from "@/components/ProjectArchive";
import { ProjectDiagram } from "@/components/ProjectDiagram";
import { Reveal } from "@/components/Reveal";
import { SiteFooter } from "@/components/SiteFooter";
import { capabilities, experience, projects, workSteps } from "@/data/portfolio";

const impact = [["5+", "AI applications shipped"], ["15+", "workflows automated"], ["1,200+", "hours saved annually"], ["$250M+", "decisions informed"]];
const additionalEvidence = [["96%", "AI classification accuracy"], ["96%", "forecast accuracy"], ["100+", "monthly hours saved through KPI automation"]];

export default function Home() {
  return (
    <main id="main">
      <section id="top" className="casebook-hero shell">
        <aside className="hero-rail">
          <span className="section-kicker">Applied AI &amp; Data Analyst</span>
          <p>I build AI and data products that connect technology, operations, and measurable business outcomes.</p>
          <p className="availability"><span aria-hidden="true" className="status-dot" /> Open to Remote &amp; Relocation</p>
        </aside>
        <div className="casebook-intro">
          <h1>Reliable AI and analytics for complex operational decisions.</h1>
          <p>I turn data signals into trusted systems—from engineering and applied AI through evaluation, adoption, and executive decision support.</p>
          <div className="hero-actions">
            <Link className="button primary" href="#work">Review selected work</Link>
            <a className="button text-button" href="/Dev_Neupane_Resume.pdf"><DownloadSimple size={18} aria-hidden="true" /> Download résumé</a>
          </div>
          <p className="credibility-line">Southwest Airlines · LinkedIn · Bellevue University<br />7 years across analytics, operations &amp; strategy</p>
        </div>
        <figure className="hero-portrait"><Image src="/dev-neupane-headshot.png" alt="Dev Neupane" fill sizes="(max-width: 800px) 100vw, 34vw" priority /></figure>
      </section>

      <section className="impact-band" aria-label="Selected impact"><div className="shell impact-grid">
        {impact.map(([value, label]) => <div className="impact-item" key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </div></section>

      <section id="work" className="editorial-section shell">
        <span className="section-kicker work-kicker">Selected work</span>
        <div className="casebook-list">
          {projects.map((project, index) => (
            <Reveal key={project.slug}><article className="casebook-project">
              <header className="casebook-project-head"><span>{String(index + 1).padStart(2, "0")}</span><div><p className="project-label">{project.label}</p><h3>{project.title}</h3><p>{project.context}</p></div></header>
              <div className="casebook-evidence"><div><strong>Problem</strong><p>{project.problem}</p></div><div><strong>Contribution</strong><p>{project.role}</p></div><div><strong>Result</strong><p>{project.outcome}</p></div></div>
              <Link className="text-link" href={`/work/${project.slug}/`}>Read case study <Arrow /></Link>
              <ProjectDiagram type={project.diagram} />
            </article></Reveal>
          ))}
        </div>
        <Link className="archive-link" href="/work/">View complete work archive <Arrow /></Link>
      </section>

      <section id="experience" className="editorial-section section-tinted">
        <div className="shell split-heading"><div><span className="section-kicker">Experience</span><h2>Built inside high-stakes operating environments.</h2></div><p>Seven years translating business questions into analytics, workflow automation, and decision-ready products.</p></div>
        <div className="shell experience-list">{experience.map(([role, company, dates]) => <article className="experience-row" key={`${company}-${role}`}><h3>{role}</h3><p>{company}</p><time>{dates}</time><Arrow /></article>)}</div>
      </section>

      <section id="about" className="editorial-section shell about-editorial">
        <div><span className="section-kicker">About</span><h2>Business context in. Reliable systems out.</h2></div>
        <div><p className="lead">I work where business questions, data, and AI meet—translating unclear needs into requirements, workflows, controls, evaluations, and decision-ready products.</p><blockquote>“The work is finished when people can trust, test, and use the outcome.”</blockquote></div>
      </section>

      <section id="skills" className="editorial-section section-navy"><div className="shell">
        <div className="section-intro inverse"><span className="section-kicker">Core capabilities</span><h2>AI fluency with operational discipline.</h2></div>
        <div className="capability-ledger">{capabilities.map((item) => <article key={item.number}><span>{item.number}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}</div>
      </div></section>

      <section className="editorial-section shell evidence-strip"><span className="section-kicker">Additional evidence</span><div>{additionalEvidence.map(([value, label]) => <p key={label}><strong>{value}</strong><span>{label}</span></p>)}</div></section>

      <section id="approach" className="editorial-section shell">
        <div className="section-intro"><span className="section-kicker">How I work</span><h2>A disciplined path from ambiguity to adoption.</h2></div>
        <div className="approach-ledger">{workSteps.map(([number, title, detail]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{detail}</p></article>)}</div>
      </section>

      <section className="editorial-section section-tinted">
        <div className="shell split-heading"><div><span className="section-kicker">Project archive</span><h2>More products and experiments.</h2></div><p>Deployed prototypes, AI agents, repositories, and product work spanning finance, sales, food, healthcare, résumé tooling, and wellness.</p></div>
        <div className="shell"><ProjectArchive /></div>
      </section>
      <SiteFooter />
    </main>
  );
}

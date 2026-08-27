import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, DownloadSimple } from "@phosphor-icons/react/dist/ssr";
import { Arrow } from "@/components/Arrow";
import { SiteFooter } from "@/components/SiteFooter";
import {
  credentials,
  domains,
  education,
  experience,
  expertise,
  projects,
  publishedThinking,
  valueAreas,
} from "@/data/portfolio";

const impact = [
  ["5+", "AI applications shipped"],
  ["15+", "workflows automated"],
  ["1,200+", "hours saved annually"],
  ["$250M+", "decisions informed"],
];

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
          <h1 className="sr-only">Dev Neupane — Applied AI &amp; Data Analyst</h1>
          <p>I turn data signals into trusted systems—from engineering and applied AI through evaluation, adoption, and executive decision support.</p>
          <div className="hero-actions">
            <Link className="button primary" href="#work">Review selected work</Link>
            <a className="button text-button" href="/Dev_Neupane_Resume.pdf"><DownloadSimple size={18} aria-hidden="true" /> Download résumé</a>
          </div>
          <p className="credibility-line">Southwest Airlines · LinkedIn · Bellevue University<br />7+ years across analytics, operations &amp; strategy</p>
        </div>
        <figure className="hero-portrait"><Image src="/dev-neupane-headshot.png" alt="Dev Neupane" fill sizes="(max-width: 800px) 100vw, 34vw" priority /></figure>
      </section>

      <section className="impact-band" aria-label="Selected impact"><div className="shell impact-grid">
        {impact.map(([value, label]) => <div className="impact-item" key={label}><strong>{value}</strong><span>{label}</span></div>)}
      </div></section>

      <section id="value" className="editorial-section shell value-section">
        <div className="split-heading"><div><span className="section-kicker">Where I create value</span><h2>From AI possibility to operating value.</h2></div><p>I connect product thinking, analytical rigor, and delivery discipline so new capabilities survive contact with real workflows.</p></div>
        <div className="value-ledger">
          {valueAreas.map(([number, title, detail]) => <article key={number}><span>{number}</span><h3>{title}</h3><p>{detail}</p></article>)}
        </div>
      </section>

      <section id="work" className="editorial-section section-tinted">
        <div className="shell split-heading"><div><span className="section-kicker">Selected work</span><h2>Evidence that holds up.</h2></div><p>Three public systems showing governed analytics, grounded AI, and decision support from problem through validation.</p></div>
        <div className="shell featured-work-grid">
          {projects.map((project, index) => (
            <article className="featured-work-item" key={project.slug}>
              <span className="featured-work-number">{String(index + 1).padStart(2, "0")}</span>
              <p className="project-label">{project.label}</p>
              <h3>{project.title}</h3>
              <p>{project.summary}</p>
              <ul>{project.disciplines.map((discipline) => <li key={discipline}>{discipline}</li>)}</ul>
              <Link className="text-link" href={`/work/${project.slug}/`}>Read case study <Arrow /></Link>
            </article>
          ))}
        </div>
        <div className="shell work-index-link"><Link className="archive-link" href="/work/">Explore all projects and prototypes <Arrow /></Link></div>
      </section>

      <section id="experience" className="editorial-section shell career-section">
        <div className="split-heading"><div><span className="section-kicker">Experience &amp; career evidence</span><h2>Measured outcomes inside high-stakes environments.</h2></div><p>Role scope, operational scale, and verified impact—not title and tenure alone.</p></div>
        <div className="career-ledger">
          {experience.map((item, index) => (
            <article className="career-record" key={`${item.company}-${item.role}`}>
              <span className="career-number">{String(index + 1).padStart(2, "0")}</span>
              <header><h3>{item.role}</h3><p>{item.company}</p><time>{item.dates}</time></header>
              <p className="career-scope">{item.scope}</p>
              <ul>{item.evidence.map((evidence) => <li key={evidence}>{evidence}</li>)}</ul>
              {item.related ? <Link className="career-link" href={item.related.href}>{item.related.label} <Arrow /></Link> : <span className="career-link muted-link">Career evidence</span>}
            </article>
          ))}
        </div>
        <div className="domain-strip" aria-label="Domain experience"><strong>Domain experience</strong>{domains.map((domain) => <span key={domain}>{domain}</span>)}</div>
      </section>

      <section id="expertise" className="editorial-section section-navy"><div className="shell">
        <div className="section-intro inverse"><span className="section-kicker">Enterprise AI &amp; technical toolkit</span><h2>Modern AI fluency. Operational discipline.</h2><p>Tools matter most when they are paired with evaluation, governance, adoption, and accountable decisions.</p></div>
        <div className="expertise-grid">
          {expertise.map((item, index) => <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.detail}</p></article>)}
        </div>
      </div></section>

      <section id="education" className="editorial-section shell education-section">
        <div className="split-heading"><div><span className="section-kicker">Education &amp; credentials</span><h2>Strategy, systems, and analytical foundations.</h2></div><p>Formal training spanning business leadership, supply-chain strategy, systems development, and applied analytics.</p></div>
        <div className="education-layout">
          <div className="education-list">
            {education.map((item) => <article key={item.degree}><div><h3>{item.degree}</h3><p>{item.school}</p></div><time>{item.date}</time><strong>{item.distinction}</strong></article>)}
          </div>
          <aside className="credential-list"><span className="section-kicker">Selected credentials</span>
            {credentials.map((item) => <a key={item.title} href={item.href} target="_blank" rel="noreferrer"><span><strong>{item.title}</strong><small>{item.issuer}</small></span><ArrowUpRight size={18} aria-hidden="true" /></a>)}
          </aside>
        </div>
      </section>

      <section id="thinking" className="editorial-section section-tinted">
        <div className="shell split-heading"><div><span className="section-kicker">Published thinking</span><h2>Ideas grounded in operating work.</h2></div><p>Selected notes on connecting AI, analytics, systems thinking, and business strategy.</p></div>
        <div className="shell thinking-grid">
          {publishedThinking.map((item, index) => <a key={item.href} href={item.href} target="_blank" rel="noreferrer"><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.takeaway}</p><strong>Read on LinkedIn <ArrowUpRight size={17} aria-hidden="true" /></strong></a>)}
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}

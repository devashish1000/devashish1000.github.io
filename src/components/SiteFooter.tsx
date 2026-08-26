import Link from "next/link";
import { Arrow } from "./Arrow";

export function SiteFooter() {
  return (
    <footer className="contact-section section-rule">
      <span id="contact" className="anchor-target" aria-hidden="true" />
      <div className="shell contact-grid">
        <h2>Let’s build something<br />people can trust.</h2>
        <div className="contact-details">
          <p>Open to Applied AI, data, business analysis, and AI product opportunities.</p>
          <a className="email-link" href="mailto:devashish1000@gmail.com">
            devashish1000@gmail.com <Arrow />
          </a>
          <div className="contact-links">
            <a href="https://linkedin.com/in/devashishn" target="_blank" rel="noreferrer">LinkedIn <Arrow /></a>
            <a href="https://github.com/devashish1000" target="_blank" rel="noreferrer">GitHub <Arrow /></a>
            <Link href="/Dev_Neupane_Resume.pdf">Download résumé <Arrow /></Link>
          </div>
          <p className="availability"><span aria-hidden="true">↗</span> Open to Remote &amp; Relocation</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Dev Neupane</span>
        <Link href="#top">Back to top ↑</Link>
      </div>
    </footer>
  );
}

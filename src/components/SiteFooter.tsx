import Link from "next/link";
import { DownloadSimple, EnvelopeSimple, GithubLogo, LinkedinLogo } from "@phosphor-icons/react/dist/ssr";

export function SiteFooter() {
  return (
    <footer className="contact-section">
      <span id="contact" className="anchor-target" aria-hidden="true" />
      <div className="shell contact-grid">
        <div>
          <span className="section-kicker">Contact</span>
          <h2>Let’s build something<br />people can trust.</h2>
        </div>
        <div className="contact-details">
          <p>Target opportunities: AI Enablement · Applied AI · AI Product Operations · Data &amp; AI Strategy · Senior Analytics.</p>
          <a className="email-link" href="mailto:devashish1000@gmail.com">
            <EnvelopeSimple size={23} aria-hidden="true" /> devashish1000@gmail.com
          </a>
          <div className="contact-links">
            <a href="https://linkedin.com/in/devashishn" target="_blank" rel="noreferrer"><LinkedinLogo size={22} weight="fill" aria-hidden="true" /> LinkedIn</a>
            <a href="https://github.com/devashish1000" target="_blank" rel="noreferrer"><GithubLogo size={22} weight="fill" aria-hidden="true" /> GitHub</a>
            <Link href="/Dev_Neupane_Resume.pdf"><DownloadSimple size={22} aria-hidden="true" /> Download résumé</Link>
          </div>
          <p className="availability"><span aria-hidden="true" className="status-dot" /> Open to Remote &amp; Relocation</p>
        </div>
      </div>
      <div className="shell footer-bottom">
        <span>© 2026 Dev Neupane</span>
        <Link href="#top">Back to top</Link>
      </div>
    </footer>
  );
}

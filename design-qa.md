# Strategic Casebook — Design QA

- Source visual truth: `design/recruiter-redesign-options/strategic-casebook.png`
- Implementation screenshot: `implementation-strategic-casebook-full.png`
- Normalized implementation: `implementation-strategic-casebook-normalized.png`
- Side-by-side evidence: `design-qa-strategic-casebook-comparison.png`
- Mobile evidence: `implementation-strategic-casebook-mobile.png`
- Browser: Codex in-app browser
- Desktop CSS viewport: 1440 × 1100, device scale factor 1
- Source pixels: 941 × 1672
- Implementation full-page pixels: 1425 × 9796 (15 px browser scrollbar excluded from the 1440 CSS viewport)
- Normalization: top 1425 × 2532 implementation region cropped to the source aspect ratio, then downsampled with Lanczos to 941 × 1672
- Mobile CSS viewport: 390 × 844; rendered page width 375 px after scrollbar
- State: homepage, light editorial theme, navigation closed

## Findings

No actionable P0, P1, or P2 issues remain.

- Typography: Georgia editorial display type and neutral sans-serif UI copy reproduce the source hierarchy and recruiter-facing tone. The implementation's slightly narrower middle track adds one hero line without changing the hierarchy.
- Spacing and layout rhythm: The three-zone hero, portrait edge, proof band, thin rules, and flat editorial case-study structure match the source. Section density is intentionally higher after the first case study so three real projects fit without oversized empty areas.
- Colors and visual tokens: Warm paper, deep navy, cobalt, muted ink, and hairline rules map closely to the source. Gradients, glass panels, heavy shadows, and rounded-card styling were removed.
- Image quality: The supplied identity-preserving headshot is sharp, correctly cropped, and used as a real raster asset with a neutral background and professional scale.
- Copy and content: The implementation preserves verified project, employer, metric, résumé, and contact data. Mockup-only wording was replaced with real portfolio data.
- Responsiveness: Mobile has no horizontal overflow, presents the claim and primary actions first, introduces the portrait in the first viewport, and collapses metrics and evidence cleanly.
- Interaction and accessibility: Desktop anchors, mobile menu, case-study routes, résumé links, focus styles, semantic headings, alt text, and reduced-motion behavior are present. The browser console showed no warnings or errors.

## Open Questions

- None blocking. The source contains a bespoke dashboard screenshot; the implementation uses the existing icon-based workflow evidence component so it remains accurate and reusable across all three real projects.

## Comparison History

1. Earlier P2 — selected-work hierarchy drift: a generic section statement pushed project evidence out of the source-comparison crop.
   - Fix: opened directly with the `Selected work` kicker and P&C case study.
   - Post-fix evidence: `design-qa-strategic-casebook-comparison.png` shows the first project and evidence in the same post-proof-band region.
2. Earlier P2 — below-the-fold content missing from full-page evidence: reveal opacity hid uncrossed sections.
   - Fix: made editorial content immediately visible while retaining navigation, hover, focus, and responsive behavior.
   - Post-fix evidence: the final side-by-side contains the first case study and start of the second project.
3. Earlier P2 — mobile first viewport delayed the headshot.
   - Fix: tightened mobile spacing and removed the desktop-only credibility line on small screens.
   - Post-fix evidence: `implementation-strategic-casebook-mobile.png`.

## Focused Region Comparison

A separate focused crop was not needed: the normalized 941 × 1672 side-by-side keeps the header, hero typography, portrait, proof band, case heading, evidence columns, CTA, and workflow evidence legible at original resolution. Mobile was evaluated separately at its actual viewport.

## Primary Interactions Tested

- `Review selected work` scrolls to `#work` with the section aligned at the top.
- Mobile navigation opens and exposes all links.
- First case-study destination resolves to `/work/pc-insurance-analytics/`.
- Header and hero résumé destinations resolve to `/Dev_Neupane_Resume.pdf`.
- Browser console warnings/errors: none.

## Implementation Checklist

- [x] Three-zone editorial hero
- [x] Professional headshot placement
- [x] Proof band with four verified metrics
- [x] Evidence-first case-study presentation
- [x] Flat experience, capabilities, process, and archive systems
- [x] Responsive mobile layout and working menu
- [x] Lint and production build
- [x] Same-state visual comparison

## Follow-up Polish

- P3: A future iteration could add real product screenshots to each case-study overview once consistently framed captures are available.

final result: passed

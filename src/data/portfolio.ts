export type Project = {
  slug: string;
  title: string;
  label: string;
  summary: string;
  disclosure: string;
  live: string;
  source: string;
  disciplines: string[];
  context: string;
  problem: string;
  role: string;
  approach: string[];
  validation: string[];
  outcome: string;
  stack: string[];
  diagram: "warehouse" | "memory" | "flight";
};

export const projects: Project[] = [
  {
    slug: "pc-insurance-analytics",
    title: "P&C Insurance Analytics Platform",
    label: "Deployed work sample · Data engineering + business analysis",
    summary:
      "Warehouse design, controlled ETL, data quality, traceable requirements, executable acceptance tests, and BI views.",
    disclosure: "Synthetic P&C data only. No PII and no company affiliation implied.",
    live: "https://nico-pc-insurance-analytics.vercel.app/",
    source: "https://github.com/devashish1000/nico-pc-insurance-analytics",
    disciplines: ["Analytics engineering", "Business analysis", "Data quality"],
    context:
      "A public work sample designed to demonstrate how an insurance analytics platform can connect engineering controls with business traceability.",
    problem:
      "Analytical outputs are hard to trust when source-to-report logic, quality evidence, requirements, and tests live in separate places.",
    role:
      "Designed and built the public work sample across the warehouse model, controlled pipeline, quality layer, rating workflow, requirements, tests, and reviewer experience.",
    approach: [
      "Modeled policy and claims analytics through a Kimball-style star schema with role-playing dates.",
      "Created controlled Postgres procedures and observable pipeline-run history.",
      "Connected requirements and Given/When/Then acceptance criteria to executable tests.",
      "Designed decision views for portfolio, line-of-business, state, and agent analysis.",
    ],
    validation: [
      "Six documented data-quality controls",
      "Rating-model and acceptance tests",
      "Pipeline API and migration tests",
      "Analytics-view security contracts",
    ],
    outcome:
      "Demonstrates an auditable source-to-decision workflow in which data engineering, quality controls, requirements, and user validation reinforce one another.",
    stack: ["React", "TypeScript", "Vite", "Supabase Postgres", "PL/pgSQL", "Recharts", "Vercel"],
    diagram: "warehouse",
  },
  {
    slug: "memory-supply-control-tower",
    title: "Memory Supply Control Tower",
    label: "Deployed prototype · Applied AI + planning",
    summary:
      "Forecast and supplier-risk calculations with a grounded AI copilot, structured narratives, scenarios, and quality checks.",
    disclosure:
      "Synthetic semiconductor-planning data only. No proprietary NVIDIA or supplier information is used.",
    live: "https://nvidia-memory-control.vercel.app/",
    source: "https://github.com/devashish1000/nvidia-memory-control",
    disciplines: ["Applied AI", "Planning analytics", "Product delivery"],
    context:
      "A public prototype exploring how memory planners can combine operational calculations, scenario analysis, and grounded AI decision support.",
    problem:
      "Planning decisions become fragile when demand, capacity, inventory, concentration risk, and executive narratives are assembled manually across disconnected tools.",
    role:
      "Designed the product workflow and built the planning calculations, Supabase-backed data layer, AI copilot functions, scenario routes, data-quality suites, and case-study experience.",
    approach: [
      "Calculated shortage, weeks of supply, purchase recommendations, concentration risk, and revenue exposure.",
      "Grounded the AI copilot in a live planning snapshot and constrained recommendations to available evidence.",
      "Requested structured JSON for boardroom narratives and operations commentary.",
      "Connected forecasts, scenarios, quality checks, and human decisions through one workflow.",
    ],
    validation: [
      "Calculation test suite",
      "Data-integrity and range checks",
      "Structured-output parsing and error handling",
      "Explicit synthetic-data disclosure",
    ],
    outcome:
      "Demonstrates how an AI assistant can sit inside a governed planning workflow instead of operating as an ungrounded chat layer.",
    stack: ["React", "TypeScript", "TanStack Start", "Supabase", "Gemini 2.5 Flash", "Zod", "Vercel"],
    diagram: "memory",
  },
  {
    slug: "flight-economics-command-center",
    title: "Flight Economics Command Center",
    label: "Deployed prototype · Finance + operations analytics",
    summary:
      "Contribution economics, rolling forecasts, modeled action queues, CSV validation, and executive summaries.",
    disclosure:
      "Public-source-aligned dimensions with modeled sample operating data. Not an official Wheels Up product.",
    live: "https://wheels-up-flight-economics-command.vercel.app/",
    source: "https://github.com/devashish1000/wheels-up-flight-economics-command-center",
    disciplines: ["Financial analytics", "Forecasting", "Executive storytelling"],
    context:
      "A public finance and operations prototype for examining service-area, product-line, channel, and fleet economics.",
    problem:
      "Weekly operating decisions slow down when performance, variance drivers, forecasts, actions, and executive summaries require separate manual analysis.",
    role:
      "Designed and built the static analytics product, deterministic sample-data model, finance calculations, forecast controls, validation flow, and reviewer tour.",
    approach: [
      "Mapped service areas, products, channels, and fleet categories into one filterable analytical model.",
      "Built contribution economics and variance bridges from deterministic sample data.",
      "Added rolling forecast horizons, saved views, modeled actions, and send-ready summaries.",
      "Created CSV templates, parsing, validation, and export workflows.",
    ],
    validation: [
      "Calculation smoke tests",
      "Deterministic modeled data",
      "CSV validation paths",
      "Clear prototype-data disclosure",
    ],
    outcome:
      "Demonstrates a cohesive decision-support workflow spanning performance diagnosis, forecast framing, operating action, and executive communication.",
    stack: ["JavaScript", "HTML", "CSS", "SVG charts", "CSV workflows", "Vercel"],
    diagram: "flight",
  },
];

export const archiveProjects = [
  {
    title: "Salted Margin Command Center",
    label: "Deployed synthetic finance prototype",
    href: "https://salted-margin-command-center.vercel.app/",
  },
  {
    title: "Deal Coach Agent",
    label: "Gemini transcript analysis and structured coaching",
    href: "https://github.com/devashish1000/WK-Sales-FCC-Agent",
  },
  {
    title: "Fridge Chef",
    label: "OpenAI-powered recipe generation with structured output",
    href: "https://github.com/devashish1000/Fridge-Chef",
  },
  {
    title: "Healthcare Finance Work Sample",
    label: "Deployed synthetic variance and close-support prototype",
    href: "https://hsd-audit.vercel.app/",
  },
  {
    title: "DNVision AI Resume Builder",
    label: "Next.js résumé-building product repository",
    href: "https://github.com/devashish1000/dnvision-resume",
  },
  {
    title: "Headwell iOS",
    label: "Co-founded iOS wellness application · private product",
    href: "",
  },
];

export type Experience = {
  role: string;
  company: string;
  dates: string;
  scope: string;
  evidence: string[];
  related?: { label: string; href: string };
};

export const experience: Experience[] = [
  {
    role: "Product Business Analyst",
    company: "Bellevue University",
    dates: "Jul 2026–Present",
    scope: "Translate ambiguous needs into requirements, process flows, source-to-target mappings, acceptance criteria, and decision-ready outputs.",
    evidence: ["Evaluated an AI-enabled document workflow across 5 document classes and 250 records", "96% classification accuracy · 94% field extraction · 72% straight-through processing"],
    related: { label: "Related analytics work", href: "/work/pc-insurance-analytics/" },
  },
  {
    role: "Co-Founder",
    company: "Headwell iOS",
    dates: "Jan 2026–Present",
    scope: "Co-founded a private iOS wellness application and helped move the product from concept toward a functional user experience.",
    evidence: ["Private product", "Wellness · Product strategy · iOS"],
  },
  {
    role: "Senior Business Performance Analyst — Corporate Analytics",
    company: "Southwest Airlines",
    dates: "Apr 2023–Jul 2024",
    scope: "Owned source-to-report analytics across 15+ KPIs and 100+ cost-center leaders, connecting operating and financial signals to executive decisions.",
    evidence: ["96% forecast accuracy", "35 hours saved monthly · 75% less manual work · 60% faster cycle time"],
    related: { label: "Related finance work", href: "/work/flight-economics-command-center/" },
  },
  {
    role: "Senior Business Planning & Optimization Analyst",
    company: "LinkedIn",
    dates: "Nov 2020–Mar 2023",
    scope: "Built planning forecasts and automated capacity, SLA, quality, and KPI reporting for a multi-site analyst organization.",
    evidence: ["300+ analysts across 5 sites · 100+ hours saved monthly", "120+ planning streams · constraints identified 8 weeks early"],
    related: { label: "Related planning work", href: "/work/memory-supply-control-tower/" },
  },
  {
    role: "Business Analyst",
    company: "Shearman & Sterling LLP",
    dates: "Jan 2020–Nov 2020",
    scope: "Standardized utilization, cost, and profitability analytics across 16+ practice areas supporting 2,000+ attorneys.",
    evidence: ["55% improvement in reporting efficiency", "$15M in opportunities identified · $30M technology investment evaluated"],
  },
  {
    role: "Analyst — Finance & Budget",
    company: "NYC Department of Education",
    dates: "Aug 2019–Dec 2019",
    scope: "Built prioritization and validation frameworks for capital proposals and site migrations.",
    evidence: ["$1B+ in proposals across 220+ sites", "$250M+ in executive investment decisions informed"],
  },
];

export const valueAreas = [
  ["01", "AI enablement & adoption", "Turn promising AI capabilities into governed workflows people can trust and use."],
  ["02", "Applied AI product delivery", "Move from use-case discovery through requirements, testing, release, and measurable adoption."],
  ["03", "AI-focused business analysis", "Translate business constraints into data contracts, evaluation criteria, and human-review paths."],
  ["04", "Decision intelligence", "Connect operational, financial, and customer signals to clear choices and trade-offs."],
  ["05", "Workflow automation", "Reduce manual effort through controlled pipelines, APIs, validation, and exception handling."],
  ["06", "Executive analytics", "Build decision-ready narratives, forecasts, dashboards, and KPI governance."],
];

export const expertise = [
  {
    title: "Enterprise AI",
    detail: "OpenAI · Gemini · Claude · Hugging Face · RAG · Knowledge retrieval · AI agents · LLM evaluations · Tool and function calling · Responsible AI · Human review",
  },
  {
    title: "Data engineering",
    detail: "Python · pandas · SQL · DuckDB · REST APIs · JSON · ETL · Data-quality controls · Workflow automation",
  },
  {
    title: "Analytics",
    detail: "Power BI · Tableau · Excel · Prophet · SAP ERP/BW · Forecasting · Variance analysis · KPI governance",
  },
  {
    title: "Product delivery",
    detail: "Requirements · Epics and stories · Acceptance criteria · Evaluation rubrics · UAT · Edge cases · Governance · Adoption · ROI",
  },
];

export const domains = ["Aviation", "Technology", "Higher education", "Legal services", "Public sector", "Finance & operations", "Supply chain", "Wellness"];

export const education = [
  {
    degree: "MBA — Supply Chain & Logistics",
    school: "University of Nebraska Omaha",
    date: "Dec 2025",
    distinction: "Highest Distinction · GPA 3.77/4.0",
  },
  {
    degree: "B.S. — Management Information Systems",
    school: "University of Nebraska Omaha",
    date: "2019",
    distinction: "Systems Development · Highest Distinction · GPA 4.0/4.0",
  },
];

export const credentials = [
  { title: "Advanced Product Marketing", issuer: "LinkedIn", href: "https://www.linkedin.com/in/devashishn/details/certifications/" },
  { title: "Business Analytics: Sales Data", issuer: "LinkedIn", href: "https://www.linkedin.com/in/devashishn/details/certifications/" },
];

export const publishedThinking = [
  {
    title: "Connecting AI-augmented workflows with supply-chain strategy",
    takeaway: "How LLM-assisted analysis, automated data pipelines, and SQL/BI visualization turn complex logistics data into operating decisions.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7423097981685506048/",
  },
  {
    title: "A cross-functional toolkit for data, operations, and automation",
    takeaway: "A practical view of combining analytics, financial modeling, enterprise platforms, and AI automation for decision support.",
    href: "https://www.linkedin.com/feed/update/urn:li:activity:7371487803714621440/",
  },
];

export const workSteps = [
  ["01", "Frame", "Define the decision, user, constraint, and measure of success."],
  ["02", "Map", "Trace the workflow, data, dependencies, and failure points."],
  ["03", "Build", "Turn requirements into usable AI and analytics products."],
  ["04", "Evaluate", "Test quality, edge cases, controls, and human-review paths."],
  ["05", "Communicate", "Translate findings into decisions, trade-offs, and next actions."],
];

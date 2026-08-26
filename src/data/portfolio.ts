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

export const experience = [
  ["Product Business Analyst", "Bellevue University", "Jul 2026–Present"],
  ["Senior Business Performance Analyst — Corporate Analytics", "Southwest Airlines", "Apr 2023–Jul 2024"],
  ["Senior Business Planning & Optimization Analyst", "LinkedIn", "Nov 2020–Mar 2023"],
  ["Business Analyst", "Shearman & Sterling LLP", "Jan 2020–Nov 2020"],
  ["Analyst — Finance & Budget", "NYC Department of Education", "Aug 2019–Dec 2019"],
];

export const capabilities = [
  {
    number: "01",
    title: "Applied AI & GenAI",
    detail: "LLM workflows · AI agents · Prompt design · Structured outputs · Human-in-the-loop · AI evaluations",
  },
  {
    number: "02",
    title: "AI Product & Delivery",
    detail: "Use-case discovery · Requirements · User stories · Acceptance criteria · UAT · Adoption and ROI",
  },
  {
    number: "03",
    title: "Data & Automation",
    detail: "Python · SQL · REST APIs · ETL · Data quality · Workflow automation · Tableau · Power BI",
  },
];

export const workSteps = [
  ["01", "Frame", "Define the decision, user, constraint, and measure of success."],
  ["02", "Map", "Trace the workflow, data, dependencies, and failure points."],
  ["03", "Build", "Turn requirements into usable AI and analytics products."],
  ["04", "Evaluate", "Test quality, edge cases, controls, and human-review paths."],
  ["05", "Communicate", "Translate findings into decisions, trade-offs, and next actions."],
];

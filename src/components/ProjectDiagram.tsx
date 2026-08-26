import type { Project } from "@/data/portfolio";

const diagramContent = {
  warehouse: ["Policy + claims", "Staging", "Warehouse", "Quality", "BI views", "Decisions"],
  memory: ["Demand signals", "Planning engine", "AI copilot", "Structured output", "Human decision"],
  flight: ["Revenue + costs", "Economics", "Forecast", "Action queue", "Validation", "Summary"],
};

export function ProjectDiagram({ type }: { type: Project["diagram"] }) {
  return (
    <div className={`project-diagram ${type}`} aria-hidden="true">
      {diagramContent[type].map((item, index) => (
        <div className="project-diagram-step" key={item}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <b>{item}</b>
        </div>
      ))}
    </div>
  );
}

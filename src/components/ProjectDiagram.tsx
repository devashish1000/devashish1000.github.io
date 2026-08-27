import type { Project } from "@/data/portfolio";
import {
  AirplaneTilt,
  BracketsCurly,
  Calculator,
  ChartBar,
  ChartLineUp,
  CheckCircle,
  Coins,
  Cpu,
  Database,
  FileText,
  Gear,
  ListChecks,
  Robot,
  ShieldCheck,
  Target,
  TrendUp,
  UserCheck,
  Warehouse,
} from "@phosphor-icons/react/dist/ssr";

const diagramContent = {
  warehouse: {
    shortTitle: "Policy & Claims",
    titleIcon: ShieldCheck,
    steps: [
      { label: "Policy + claims", icon: FileText }, { label: "Staging", icon: Database }, { label: "Warehouse", icon: Warehouse },
      { label: "Quality", icon: ShieldCheck }, { label: "BI views", icon: ChartBar }, { label: "Decisions", icon: Target },
    ],
  },
  memory: {
    shortTitle: "Memory Supply",
    titleIcon: Cpu,
    steps: [
      { label: "Demand signals", icon: TrendUp }, { label: "Planning engine", icon: Gear }, { label: "AI copilot", icon: Robot },
      { label: "Structured output", icon: BracketsCurly }, { label: "Human decision", icon: UserCheck },
    ],
  },
  flight: {
    shortTitle: "Flight Economics",
    titleIcon: AirplaneTilt,
    steps: [
      { label: "Revenue + costs", icon: Coins }, { label: "Economics", icon: Calculator }, { label: "Forecast", icon: ChartLineUp },
      { label: "Action queue", icon: ListChecks }, { label: "Validation", icon: CheckCircle }, { label: "Summary", icon: FileText },
    ],
  },
};

export function ProjectDiagram({ type }: { type: Project["diagram"] }) {
  const diagram = diagramContent[type];
  const TitleIcon = diagram.titleIcon;
  return (
    <div className={`project-diagram ${type}`} aria-label={`${diagram.shortTitle} workflow`}>
      <div className="diagram-project-label">
        <TitleIcon size={34} weight="duotone" aria-hidden="true" />
        <strong>{diagram.shortTitle}</strong>
      </div>
      <div className="diagram-steps">
      {diagram.steps.map((step, index) => {
        const StepIcon = step.icon;
        return (
        <div className="project-diagram-step" key={step.label} tabIndex={0}>
          <span>{String(index + 1).padStart(2, "0")}</span>
          <StepIcon size={27} weight="duotone" aria-hidden="true" />
          <b>{step.label}</b>
        </div>
      )})}
      </div>
    </div>
  );
}

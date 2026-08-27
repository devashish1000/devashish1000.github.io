import { ArrowDown, ArrowRight } from "@phosphor-icons/react/dist/ssr";

export function Arrow({ down = false }: { down?: boolean }) {
  const Icon = down ? ArrowDown : ArrowRight;
  return <Icon className={down ? "arrow arrow-down" : "arrow"} aria-hidden="true" weight="regular" />;
}

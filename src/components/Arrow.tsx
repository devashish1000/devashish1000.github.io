export function Arrow({ down = false }: { down?: boolean }) {
  return (
    <svg className={down ? "arrow arrow-down" : "arrow"} viewBox="0 0 32 16" aria-hidden="true">
      <path d="M1 8h28M23 2l6 6-6 6" />
    </svg>
  );
}

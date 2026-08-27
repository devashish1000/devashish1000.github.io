"use client";

import { useEffect, useMemo, useRef, useState } from "react";

type MetricParts = {
  prefix: string;
  target: number;
  suffix: string;
};

function parseMetric(value: string): MetricParts {
  const match = value.match(/^([^\d]*)([\d,.]+)(.*)$/);
  if (!match) return { prefix: "", target: 0, suffix: value };
  return {
    prefix: match[1],
    target: Number(match[2].replaceAll(",", "")),
    suffix: match[3],
  };
}

export function AnimatedMetric({ value }: { value: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const metric = useMemo(() => parseMetric(value), [value]);
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;
    let frame = 0;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      frame = requestAnimationFrame(() => setDisplay(metric.target));
      return () => cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        const started = performance.now();
        const duration = 900;
        const tick = (now: number) => {
          const progress = Math.min(1, (now - started) / duration);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay(Math.round(metric.target * eased));
          if (progress < 1) frame = requestAnimationFrame(tick);
        };
        frame = requestAnimationFrame(tick);
        observer.disconnect();
      },
      { threshold: 0.55 },
    );
    observer.observe(element);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
    };
  }, [metric.target]);

  return (
    <span ref={ref} aria-label={value}>
      <span aria-hidden="true">
        {metric.prefix}{display.toLocaleString("en-US")}{metric.suffix}
      </span>
    </span>
  );
}

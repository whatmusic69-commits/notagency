"use client";

export type PortfolioMascotTarget = {
  active: boolean;
  x: number;
  y: number;
};

type PortfolioHoverMascotProps = {
  target: PortfolioMascotTarget;
};

export function PortfolioHoverMascot({ target }: PortfolioHoverMascotProps) {
  return (
    <div
      aria-hidden="true"
      className={`portfolio-hover-mascot ${target.active ? "is-active" : ""}`}
      style={
        {
          "--portfolio-mascot-x": `${target.x}px`,
          "--portfolio-mascot-y": `${target.y}px`,
        } as React.CSSProperties
      }
    >
      <span className="portfolio-hover-mascot-face">
        <span className="portfolio-hover-eye left" />
        <span className="portfolio-hover-eye right" />
        <span className="portfolio-hover-mouth" />
      </span>
    </div>
  );
}

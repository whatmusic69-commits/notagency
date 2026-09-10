"use client";

import { useEffect, useRef, useState } from "react";

export function AnimatedFAQItem({ question, answer, number }: {
  question: string;
  answer: string;
  number?: string;
}) {
  const detailsRef = useRef<HTMLDetailsElement>(null);
  const animationRef = useRef<Animation | null>(null);
  const [expanded, setExpanded] = useState(false);

  useEffect(() => () => animationRef.current?.cancel(), []);

  function toggle() {
    const details = detailsRef.current;
    if (!details) return;
    const next = !expanded;
    const from = details.getBoundingClientRect().height;
    animationRef.current?.cancel();
    setExpanded(next);

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      details.open = next;
      return;
    }

    details.open = next;
    const to = details.getBoundingClientRect().height;
    // Keep the answer visible while its container contracts on closing.
    details.open = true;
    const animation = details.animate(
      [{ height: `${from}px` }, { height: `${to}px` }],
      { duration: 320, easing: "cubic-bezier(0.22, 1, 0.36, 1)" },
    );
    animationRef.current = animation;
    animation.onfinish = () => {
      details.open = next;
      animationRef.current = null;
    };
  }

  return (
    <details ref={detailsRef} className="animated-faq-item" data-expanded={expanded}>
      <summary onClick={(event) => { event.preventDefault(); toggle(); }}>
        {number && <span>{number}</span>}
        <strong>{question}</strong>
        <i className="faq-toggle-icon" aria-hidden="true" />
      </summary>
      <p>{answer}</p>
    </details>
  );
}

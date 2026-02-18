'use client';

import React, { useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';

interface BlurTextEffectProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

export const BlurTextEffect: React.FC<BlurTextEffectProps> = ({
  children,
  className = '',
  delay = 0,
}) => {
  const containerRef = useRef<HTMLSpanElement>(null);
  const text = typeof children === "string" ? children : String(children ?? "");

  useLayoutEffect(() => {
    if (!containerRef.current) return;

    const chars = containerRef.current.querySelectorAll('span.char');

    gsap.set(chars, { opacity: 0, y: 10, filter: 'blur(8px)' });

    gsap.to(chars, {
      opacity: 1,
      y: 0,
      filter: 'blur(0px)',
      duration: 0.3,
      delay,
      ease: 'power2.out',
      stagger: 0.015,
      clearProps: 'filter',
    });
  }, [text, delay]);

  // Split by words and spaces so words stay together when wrapping
  const parts = text.split(/(\s+)/);

  return (
    <span
      className={className}
      ref={containerRef}
      data-lingo-skip
    >
      {parts.map((part, i) =>
        /^\s+$/.test(part) ? (
          <span key={i}>{part}</span>
        ) : (
          <span
            key={i}
            className="word"
            style={{ whiteSpace: "nowrap" }}
          >
            {part.split("").map((char, j) => (
              <span
                key={j}
                className="char inline-block"
                style={{ whiteSpace: "pre" }}
              >
                {char === " " ? "\u00A0" : char}
              </span>
            ))}
          </span>
        )
      )}
    </span>
  );
};

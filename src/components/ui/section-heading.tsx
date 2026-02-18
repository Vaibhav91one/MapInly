"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { motion, useInView } from "motion/react";
import PillButton from "@/components/custom/PillButton";
import { BlurTextEffect } from "@/components/ui/blur-text-effect";

interface SectionHeadingButton {
  name: string;
  href: string;
  icon: React.ReactNode;
  className?: string;
}

interface SectionHeadingBadge {
  tagline: string;
  icon?: React.ReactNode;
}

interface SectionHeadingProps {
  heading: string;
  /** Optional badge with tagline; icon appears before text */
  badge?: SectionHeadingBadge;
  /** Renders PillButton when provided */
  button?: SectionHeadingButton;
  /** Renders paragraph when provided */
  description?: string;
  /** Max width for heading container, e.g. max-w-2xl, max-w-3xl */
  headingMaxWidth?: string;
  className?: string;
}

export function SectionHeading({
  heading,
  badge,
  button,
  description,
  headingMaxWidth = "max-w-2xl",
  className,
}: SectionHeadingProps) {
  const hasRight = Boolean(button || description);
  const centerContent = !hasRight;
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isHeadingInView = useInView(headingRef, { once: true });

  const renderRight = () => {
    if (button) {
      return (
        <PillButton
          text={button.name}
          icon={button.icon}
          href={button.href}
          className={button.className}
        />
      );
    }
    if (description) {
      return (
        <p className="text-sm md:text-base text-muted-foreground">{description}</p>
      );
    }
    return null;
  };

  return (
    <div
      className={cn(
        "flex flex-col sm:flex-row sm:items-center gap-3 w-full",
        hasRight ? "sm:justify-between" : "sm:justify-center items-center",
        centerContent && "text-center",
        className
      )}
    >
      <div
        className={cn(
          "flex flex-col gap-2",
          headingMaxWidth,
          centerContent ? "items-center" : "sm:items-start"
        )}
      >
        {badge && (
          <motion.div
            className="inline-flex items-center gap-1.5 text-gray-600 text-sm font-light mx-2 border border-gray-200 rounded-full px-4 py-2"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
          >
            {badge.icon && (
              <span className="shrink-0 [&>svg]:size-4">{badge.icon}</span>
            )}
            <span>{badge.tagline}</span>
          </motion.div>
        )}
        <h2
          ref={headingRef}
          className="text-3xl font-medium md:text-6xl leading-tight tracking-tight"
        >
          {isHeadingInView ? (
            <BlurTextEffect>{heading}</BlurTextEffect>
          ) : (
            <span className="invisible">{heading}</span>
          )}
        </h2>
      </div>
      {hasRight && (
        <div className="flex-shrink-0">{renderRight()}</div>
      )}
    </div>
  );
}

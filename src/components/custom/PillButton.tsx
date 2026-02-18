"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { useState } from "react";

interface PillButtonProps {
  text: string;
  icon: React.ReactNode;
  href?: string;
  className?: string;
}

export default function PillButton({
  text,
  icon,
  href = "#",
  className,
}: PillButtonProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Link
        href={href}
        className={cn(
          "inline-flex flex-row items-center justify-center gap-2 px-6 py-4 rounded-full font-regular",
          className
        )}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
      <span>{text}</span>
      <div className="relative flex min-h-[1.5em] min-w-[1.5em] shrink-0 items-center justify-center overflow-hidden">
        {/* Original icon - moves right (out of view) on hover */}
        <motion.div
          className="flex items-center justify-center"
          initial={false}
          animate={{ x: isHovered ? "100%" : 0 }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {icon}
        </motion.div>
        {/* Duplicate icon - comes in from left on hover */}
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={false}
          animate={{ x: isHovered ? 0 : "-100%" }}
          transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
        >
          {icon}
        </motion.div>
      </div>
    </Link>
    </motion.div>
  );
}

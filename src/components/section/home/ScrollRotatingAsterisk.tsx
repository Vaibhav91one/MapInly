"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Asterisk from "@/components/Svgs/Asterisk";
import { cn } from "@/lib/utils";

export default function ScrollRotatingAsterisk({
  className,
  size = "size-30",
}: {
  className?: string;
  size?: string;
}) {
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 1080]);

  return (
    <motion.div
      className={cn(className)}
      style={{ rotate }}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
    >
      <Asterisk className={size} />
    </motion.div>
  );
}

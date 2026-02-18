"use client";

import { motion, useScroll, useTransform } from "motion/react";
import Asterisk from "@/components/Svgs/Asterisk";
import { cn } from "@/lib/utils";

type RotationMode = "default" | "scroll";

export default function ScrollRotatingAsterisk({
  className,
  size = "size-30",
  mode = "default",
}: {
  className?: string;
  size?: string;
  mode?: RotationMode;
}) {
  const { scrollYProgress } = useScroll();
  const scrollRotate = useTransform(scrollYProgress, [0, 1], [0, 1080]);

  return (
    <motion.div
      className={cn(className)}
      style={mode === "scroll" ? { rotate: scrollRotate } : undefined}
      initial={{ scale: 0 }}
      whileInView={{ scale: 1 }}
      viewport={{ once: true }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      animate={
        mode === "default"
          ? {
              rotate: 360,
              transition: {
                duration: 20,
                repeat: Infinity,
                ease: "linear",
              },
            }
          : undefined
      }
    >
      <Asterisk className={size} />
    </motion.div>
  );
}

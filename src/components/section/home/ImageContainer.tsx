"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { cn } from "@/lib/utils";

interface ImageContainerProps {
  src: string;
  alt: string;
  className?: string;
  /** Position in viewport for scroll progress: 0 = top, 1 = bottom */
  position?: "top" | "bottom";
  /** Delay in seconds for pop animation */
  popDelay?: number;
}

export default function ImageContainer({
  src,
  alt,
  className,
  position = "top",
  popDelay = 0,
}: ImageContainerProps) {
  const { scrollYProgress } = useScroll();

  // Image moves vertically based on scroll - parallax effect (high sensitivity)
  const y = useTransform(
    scrollYProgress,
    [0, 0.3, 0.6, 1],
    position === "top"
      ? ["0%", "25%", "50%", "80%"]
      : ["0%", "-25%", "-50%", "-80%"]
  );

  return (
    <motion.div
      className={cn(
        "blob overflow-hidden relative w-48 h-48 md:w-64 md:h-64 lg:w-80 lg:h-80",
        className
      )}
      initial={{ scale: 0.3, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        type: "spring",
        stiffness: 200,
        damping: 18,
        delay: popDelay,
      }}
    >
      <motion.div
        className="absolute w-[140%] h-[140%] -top-[20%] -left-[20%]"
        style={{ y }}
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-cover w-full h-full"
          sizes="(max-width: 768px) 400px, 1200px"
        />
      </motion.div>
    </motion.div>
  );
}

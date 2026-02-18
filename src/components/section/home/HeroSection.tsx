"use client";

import { motion } from "motion/react";
import { sectionClasses, sectionInnerClasses } from "@/lib/ui-classes";
import { BlurTextEffect } from "@/components/ui/blur-text-effect";
import { PillButton } from "@/components/custom";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import ScrollRotatingAsterisk from "./ScrollRotatingAsterisk";
import ImageContainer from "./ImageContainer";

const UNSPLASH_TOP_RIGHT =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=1200&q=90";
const UNSPLASH_BOTTOM_LEFT =
  "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=1200&q=90";

export default function HeroSection() {
  return (
    <section className={`${sectionClasses} relative`}>
      <div
        className={`${sectionInnerClasses} min-h-screen flex-col items-center justify-center -mt-18 gap-12 text-center relative`}
      >
        <ImageContainer
          src={UNSPLASH_TOP_RIGHT}
          alt="People connecting and collaborating"
          className="absolute -right-2 top-20"
          position="top"
          popDelay={0}
        />
        <ImageContainer
          src={UNSPLASH_BOTTOM_LEFT}
          alt="Friends gathering together"
          className="absolute -left-6 bottom-30"
          position="bottom"
          popDelay={0.15}
        />
        <ScrollRotatingAsterisk className="absolute left-8 top-1/4" size="size-25"/>
        <ScrollRotatingAsterisk
          className="absolute right-8 bottom-1/4"
          size="size-25"
        />
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          viewport={{ once: true }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
        >
          <Badge
            variant="secondary"
            className="px-4 py-2 text-sm font-medium text-[#282C35]"
            data-lingo-skip
          >
            Introducing a new way to connect
          </Badge>
        </motion.div>
        <h1
          className="text-5xl font-light sm:text-6xl md:text-8xl tracking-tight flex flex-col items-center justify-center gap-2"
          data-lingo-skip
        >
          <BlurTextEffect>Connect Through</BlurTextEffect>
          <BlurTextEffect delay={0.4}>Language & Culture</BlurTextEffect>
        </h1>
        <p className="max-w-xl text-lg text-muted-foreground sm:text-xl">
          Discover multilingual events and communities near you
        </p>
        <PillButton
          text="Get Started"
          icon={<ArrowRight className="size-5 text-white hover:text-fern" />}
          href="/events"
          className="bg-fern text-white"
        />
      </div>
    </section>
  );
}

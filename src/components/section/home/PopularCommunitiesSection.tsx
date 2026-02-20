"use client";

import { useRef } from "react";
import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/ui/scroll-based-velocity";
import CommunityCard from "@/components/communities/CommunityCard";
import PillButton from "@/components/custom/PillButton";
import { BlurTextEffect } from "@/components/ui/blur-text-effect";
import { motion, useInView } from "motion/react";
import { ArrowRight, Users } from "lucide-react";
import { sectionClasses, sectionInnerClasses } from "@/lib/ui-classes";
import { cn } from "@/lib/utils";

const PLACEHOLDER_COMMUNITIES = [
  {
    id: "1",
    name: "Language Exchange",
    logo: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=96&h=96&fit=crop",
    visitorCount: "12K weekly visitors",
    description:
      "Practice languages with native speakers. Connect through conversation and cultural exchange.",
  },
  {
    id: "2",
    name: "Cultural Explorers",
    logo: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=96&h=96&fit=crop",
    visitorCount: "8.5K weekly visitors",
    description:
      "Discover traditions, food, and customs from around the world. Share and learn together.",
  },
  {
    id: "3",
    name: "Local Meetups",
    logo: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=96&h=96&fit=crop",
    visitorCount: "15K weekly visitors",
    description:
      "Find events and gatherings near you. Build connections in your community.",
  },
  {
    id: "4",
    name: "Tech & Culture",
    logo: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=96&h=96&fit=crop",
    visitorCount: "6.2K weekly visitors",
    description:
      "Where technology meets culture. Discussions on AI, digital nomad life, and global trends.",
  },
  {
    id: "5",
    name: "Food & Friends",
    logo: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=96&h=96&fit=crop",
    visitorCount: "9.1K weekly visitors",
    description:
      "Share recipes, host dinners, and explore cuisines from different cultures.",
  },
  {
    id: "6",
    name: "Book Club Global",
    logo: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=96&h=96&fit=crop",
    visitorCount: "4.8K weekly visitors",
    description:
      "Discuss books from around the world. Multilingual reading and lively discussions.",
  },
];

export default function PopularCommunitiesSection() {
  const badgeRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const isBadgeInView = useInView(badgeRef, { once: true });
  const isHeadingInView = useInView(headingRef, { once: true });

  return (
    <section className={cn(sectionClasses, "min-h-screen")}>
      <div
        className={cn(
          sectionInnerClasses,
          "min-h-screen flex flex-col items-stretch justify-center gap-8 lg:gap-12"
        )}
      >
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left column: badge, heading, pill button (SectionHeading styling) */}
          <div className="flex flex-col gap-6 max-w-2xl">
            <motion.div
              ref={badgeRef}
              className="inline-flex items-center gap-1.5 text-gray-600 text-sm font-light mx-2 border border-gray-200 rounded-full px-4 py-2 w-fit"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              <span className="shrink-0 [&>svg]:size-4">
                <Users className="size-4 text-gray-600" />
              </span>
              <span>
                {isBadgeInView ? (
                  <BlurTextEffect>Recommended for you</BlurTextEffect>
                ) : (
                  <span className="invisible">Recommended for you</span>
                )}
              </span>
            </motion.div>
            <motion.h2
              ref={headingRef}
              className="text-3xl font-medium md:text-6xl leading-tight tracking-tight"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
              {isHeadingInView ? (
                <BlurTextEffect>Discover communities that match your interests</BlurTextEffect>
              ) : (
                <span className="invisible">Discover communities that match your interests</span>
              )}
            </motion.h2>
            <PillButton
              text="Explore Communities"
              icon={<ArrowRight className="size-5 text-white" />}
              href="/dashboard"
              className="bg-fern text-white w-fit"
            />
          </div>

          {/* Right column: velocity scroll of community cards */}
          <div className="relative overflow-hidden">
            {/* Left fade */}
            <div
              className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent"
              aria-hidden
            />
            {/* Right fade */}
            <div
              className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent"
              aria-hidden
            />
            <ScrollVelocityContainer className="w-full">
            <ScrollVelocityRow baseVelocity={4} direction={-1} className="py-2">
                <div className="flex gap-4 shrink-0 pr-4">
                  {PLACEHOLDER_COMMUNITIES.slice(3, 6).map((community) => (
                    <CommunityCard
                      key={community.id}
                      name={community.name}
                      logo={community.logo}
                      visitorCount={community.visitorCount}
                      description={community.description}
                      joinHref="/dashboard"
                    />
                  ))}
                </div>
              </ScrollVelocityRow>
              <ScrollVelocityRow baseVelocity={4} direction={1} className="py-2">
                <div className="flex gap-4 shrink-0 pr-4">
                  {PLACEHOLDER_COMMUNITIES.slice(0, 3).map((community) => (
                    <CommunityCard
                      key={community.id}
                      name={community.name}
                      logo={community.logo}
                      visitorCount={community.visitorCount}
                      description={community.description}
                      joinHref="/dashboard"
                    />
                  ))}
                </div>
              </ScrollVelocityRow>
              <ScrollVelocityRow baseVelocity={4} direction={-1} className="py-2">
                <div className="flex gap-4 shrink-0 pr-4">
                  {PLACEHOLDER_COMMUNITIES.slice(3, 6).map((community) => (
                    <CommunityCard
                      key={community.id}
                      name={community.name}
                      logo={community.logo}
                      visitorCount={community.visitorCount}
                      description={community.description}
                      joinHref="/dashboard"
                    />
                  ))}
                </div>
              </ScrollVelocityRow>
              <ScrollVelocityRow baseVelocity={4} direction={1} className="py-2">
                <div className="flex gap-4 shrink-0 pr-4">
                  {PLACEHOLDER_COMMUNITIES.slice(0, 3).map((community) => (
                    <CommunityCard
                      key={community.id}
                      name={community.name}
                      logo={community.logo}
                      visitorCount={community.visitorCount}
                      description={community.description}
                      joinHref="/dashboard"
                    />
                  ))}
                </div>
              </ScrollVelocityRow>
            </ScrollVelocityContainer>
          </div>
        </div>
      </div>
    </section>
  );
}

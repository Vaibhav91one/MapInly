"use client";

import { PillButton } from "@/components/custom";
import { Map, MapControls } from "@/components/ui/map";
import ScrollRotatingAsterisk from "./ScrollRotatingAsterisk";
import { SectionHeading } from "@/components/ui/section-heading";
import { sectionClasses, sectionInnerClasses } from "@/lib/ui-classes";
import { cn } from "@/lib/utils";
import { ArrowRight, Calendar } from "lucide-react";

export default function ExploreMapSection() {
  return (
    <section className={cn(sectionClasses, "min-h-screen")}>
      <div
        className={cn(
          sectionInnerClasses,
          "min-h-screen flex flex-col items-center justify-center gap-12 my-12"
        )}
      >
        <SectionHeading
          heading="Discover events near you"
          headingMaxWidth="max-w-3xl"
          badge={{
            tagline: "See all events",
            icon: <Calendar className="size-4" />,
          }}
        />

        <div className="relative w-full h-[500px] rounded-xl overflow-hidden border border-border">
          <ScrollRotatingAsterisk
            className="absolute left-1/2 bottom-0 -translate-x-1/2 translate-y-1/2 -z-10 size-25"
            size="size-25"
            mode="scroll"
          />
          <Map center={[-74.006, 40.7128]} zoom={10} className="absolute inset-0 z-10">
            <MapControls position="bottom-right" showZoom />
          </Map>
        </div>
        <PillButton
          text="See All Events"
          icon={<ArrowRight className="size-5 text-white hover:text-fern" />}
          href="/dashboard"
          className="bg-fern text-white"
        />
      </div>
    </section>
  );
}

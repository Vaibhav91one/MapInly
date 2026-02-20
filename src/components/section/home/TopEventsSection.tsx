"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { SectionHeading } from "@/components/ui/section-heading";
import { ArrowRight, Calendar } from "lucide-react";
import EventCard from "@/components/events/EventCard";
import { sectionClasses, sectionInnerClasses } from "@/lib/ui-classes";
import { cn } from "@/lib/utils";

const PLACEHOLDER_EVENTS = [
  {
    title: "Community Meetup",
    description: "Connect with locals. Focus on conversation and cultural exchange.",
    badges: ["All ages", "Beginner friendly"],
    image: "https://images.unsplash.com/photo-1529156069898-49953e39b3ac?w=600&q=85",
    href: "/events/community-meetup",
    topBgColor: "bg-[#C4FE3D]",
  },
  {
    title: "Language Exchange",
    description: "Practice speaking with native speakers. Casual and fun atmosphere.",
    badges: ["18+", "Weekly"],
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&q=85",
    href: "/events/language-exchange",
    topBgColor: "bg-gray-100",
  },
  {
    title: "Cultural Workshop",
    description: "Discover traditions and crafts from around the world.",
    badges: ["All levels", "Hands-on"],
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=85",
    href: "/events/cultural-workshop",
    topBgColor: "bg-gray-100",
  },
  {
    title: "Networking Night",
    description: "Meet like-minded people. Expand your network over drinks.",
    badges: ["21+", "Monthly"],
    image: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=85",
    href: "/events/networking-night",
    topBgColor: "bg-gray-100",
  },
  {
    title: "Food & Culture Fest",
    description: "Taste cuisines from around the world. Learn through food.",
    badges: ["All ages", "Family friendly"],
    image: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?w=600&q=85",
    href: "/events/food-culture-fest",
    topBgColor: "bg-gray-100",
  },
  {
    title: "Book Club",
    description: "Discuss books from different cultures. All languages welcome.",
    badges: ["18+", "Bi-weekly"],
    image: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570?w=600&q=85",
    href: "/events/book-club",
    topBgColor: "bg-gray-100",
  },
];

export default function TopEventsSection() {
  return (
    <section className={cn(sectionClasses, "min-h-screen ")}>
      <div
        className={cn(
          sectionInnerClasses,
          "min-h-screen flex flex-col items-start justify-start gap-10"
        )}
      >
        <SectionHeading
          heading="Top Events happening this week"
          headingMaxWidth="max-w-2xl"
          badge={{
            tagline: "Discover what's happening this week",
            icon: <Calendar className="size-4 text-gray-600" />,
          }}
          button={{
            name: "View all",
            href: "/dashboard",
            icon: <ArrowRight className="size-5" />,
            className: "bg-fern text-white", 
          }}
          className="flex-shrink-0 my-6"
        />
        <div className="relative w-full">
          <Carousel
            opts={{ align: "start", loop: true }}
            className="w-full"
          >
            <CarouselContent className="-mx-12">
              {PLACEHOLDER_EVENTS.map((event, i) => (
                <CarouselItem
                  key={i}
                  className="pl-12 basis-[280px] md:basis-[calc(50%-24px)] lg:basis-[calc(33.333%-106px)]"
                >
                  <EventCard
                    title={event.title}
                    description={event.description}
                    badges={event.badges}
                    image={event.image}
                    href={event.href}
                    topBgColor={event.topBgColor}
                  />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="hidden md:flex -left-4 z-20" />
            <CarouselNext className="hidden md:flex -right-4 z-20" />
          </Carousel>
        </div>
      </div>
    </section>
  );
}

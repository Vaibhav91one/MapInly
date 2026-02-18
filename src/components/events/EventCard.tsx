"use client";

import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import PillButton from "@/components/custom/PillButton";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface EventCardProps {
  title: string;
  description?: string;
  badges?: string[];
  image: string;
  href?: string;
  topBgColor?: string;
  className?: string;
}

const DEFAULT_TOP_BG = "bg-[#e8f0e4]";

export default function EventCard({
  title,
  description = "",
  badges = [],
  image,
  href = "#",
  topBgColor = DEFAULT_TOP_BG,
  className,
}: EventCardProps) {
  return (
    <div
      className={cn(
        "flex min-w-[280px] w-[300px] flex-col overflow-hidden rounded-4xl",
        className, topBgColor
      )}
    >
      {/* Top section: badges, heading, description */}
      <div
        className={cn(
          "flex flex-col gap-6 p-6 mb-2",
          topBgColor
        )}
      >
        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2">
            {badges.map((label, i) => (
              <Badge
                key={i}
                variant="secondary"
                className="rounded-full bg-white text-foreground border-0 text-xs font-regular px-4 py-2"
              >
                {label}
              </Badge>
            ))}
          </div>
        )}
        <h3 className="text-4xl font-medium text-foreground">{title}</h3>
        {description && (
          <p className="text-sm text-muted-foreground font-regular w-[80%] line-clamp-2">
            {description}
          </p>
        )}
      </div>

      {/* Bottom section: image with Read More overlay */}
      <div className={cn("relative aspect-[4/3] w-full overflow-hidden", topBgColor)}>
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-t-3xl"
          sizes="280px"
          
        />
        <PillButton
          text="View Event"
          icon={<ArrowRight className="size-4 text-white" />}
          href={href}
          className="absolute bottom-4 right-4 backdrop-blur-md bg-white/20 text-white px-4 py-2.5 text-sm hover:bg-white/30"
        />
      </div>
    </div>
  );
}

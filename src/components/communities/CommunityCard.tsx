"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CommunityCardProps {
  name: string;
  logo: string | React.ReactNode;
  visitorCount: string;
  description: string;
  joinHref?: string;
  className?: string;
}

export default function CommunityCard({
  name,
  logo,
  visitorCount,
  description,
  joinHref = "#",
  className,
}: CommunityCardProps) {
  const isLogoUrl = typeof logo === "string";

  return (
    <div
      className={cn(
        "flex w-[100px] md:w-[200px] lg:w-[350px] flex-col gap-4 rounded-xl border border-border bg-card p-5",
        className
      )}
    >
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-4 min-w-0">
          <div className="size-12 shrink-0 overflow-hidden rounded-full bg-muted">
            {isLogoUrl ? (
              <Image
                src={logo}
                alt={name}
                width={48}
                height={48}
                className="size-full object-cover"
              />
            ) : (
              <div className="flex size-full items-center justify-center">
                {logo}
              </div>
            )}
          </div>
          <div className="min-w-0 flex-1">
            <h3 className="font-bold text-foreground truncate">{name}</h3>
            <p className="text-sm text-muted-foreground">{visitorCount}</p>
          </div>
        </div>
        <Link href={joinHref} className="shrink-0">
          <Button
            variant="secondary"
            className="rounded-full px-5 py-2 font-medium"
          >
            Join
          </Button>
        </Link>
      </div>
      <p className="text-sm text-muted-foreground line-clamp-2 text-wrap">{description}</p>
    </div>
  );
}

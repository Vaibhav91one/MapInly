"use client";

import React from "react";
import { motion } from "motion/react";
import Link from "next/link";
import { Grid2x2PlusIcon, MenuIcon, Plus } from "lucide-react";
import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { Button, buttonVariants } from "@/components/ui/button";
import { PillButton } from "@/components/custom";
import { cn } from "@/lib/utils";

const defaultLinks = [
  { label: "Events", href: "/events" },
  { label: "Forums", href: "/forums" },
  { label: "Dashboard", href: "/dashboard" },
];

export default function Navbar() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="sticky top-2 z-50 w-full flex justify-center px-4 py-4">
      <motion.header
        className={cn(
          "py-2 px-6",
          "mx-auto w-full max-w-5xl rounded-full border shadow",
          "bg-background/95 supports-[backdrop-filter]:bg-background/80 backdrop-blur-lg"
        )}
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 25,
          mass: 0.8,
        }}
      >
        <nav className="mx-auto flex items-center justify-between p-1.5">
          <Link
            href="/"
            className="flex cursor-pointer items-center gap-2 rounded-md px-2 py-1 duration-100"
          >
            <Grid2x2PlusIcon className="size-5" />
            <p className="font-mono text-base font-semibold" data-lingo-skip>
              MapInly
            </p>
          </Link>
          <div className="hidden items-center gap-2 lg:flex">
            {defaultLinks.map((link) => (
              <Link
                key={link.href}
                className="rounded-full px-4 py-2 font-regular text-base transition-colors duration-200 ease-in-out hover:bg-celadon/30 hover:text-fern"
                href={link.href}
              >
                {link.label}
              </Link>
            ))}
          </div>
          <div className="flex items-center gap-2">
            <PillButton
              text="Create"
              icon={<Plus className="size-5" />}
              href="/events"
              className="bg-transparent text-fern border border-fern/40"
            />
            <Sheet open={open} onOpenChange={setOpen}>
              <Button
                size="icon"
                variant="outline"
                onClick={() => setOpen(!open)}
                className="lg:hidden"
              >
                <MenuIcon className="size-4" />
              </Button>
              <SheetContent
                className="bg-background/95 supports-[backdrop-filter]:bg-background/80 gap-0 backdrop-blur-lg"
                showClose={false}
                side="left"
              >
                <div className="grid gap-y-2 overflow-y-auto px-4 pt-12 pb-5">
                  {defaultLinks.map((link) => (
                    <Link
                      key={link.href}
                      className={buttonVariants({
                        variant: "ghost",
                        className: "justify-start",
                      })}
                      href={link.href}
                      onClick={() => setOpen(false)}
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
                <SheetFooter>
                  <PillButton
                    text="Create"
                    icon={<Plus className="size-5" />}
                    href="/events"
                    className="w-full justify-center bg-[fern] text-white hover:bg-fern/90 px-5 py-2.5"
                  />
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </motion.header>
    </div>
  );
}

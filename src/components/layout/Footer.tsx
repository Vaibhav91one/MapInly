"use client";

import Link from "next/link";
import { motion } from "motion/react";
import { cn } from "@/lib/utils";
import { containerClasses, sectionClasses } from "@/lib/ui-classes";
import { PillButton } from "@/components/custom";
import { ArrowRight, Grid2x2PlusIcon } from "lucide-react";

const primaryNav = [
  { label: "Home", href: "/" },
  { label: "Events", href: "/events" },
  { label: "Forums", href: "/forums" },
  { label: "Dashboard", href: "/dashboard" },
];

const socialLinks = [
  { label: "Twitter", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "GitHub", href: "#" },
];

const companyDescription =
  "Discover events on the map, join communities, and connect with people near you. Multilingual events and community platform built with Lingo.dev.";

export default function Footer() {
  return (
    <motion.footer
      className="relative text-white overflow-hidden pt-12 mt-auto"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.25 }}
    >
      {/* Animated gradient background - spreads from bottom when footer enters view */}
      <motion.div
        className="absolute inset-0 bg-gradient-to-t from-dark-spruce via-fern/90 to-white -z-10"
        variants={{
          hidden: { scaleY: 0 },
          visible: {
            scaleY: 1,
            transition: { duration: 1, ease: [0.22, 1, 0.36, 1] },
          },
        }}
        style={{ transformOrigin: "bottom" }}
      />
      <div className={cn(containerClasses, "px-10")}>
        <div className={sectionClasses}>
          {/* Top Navigation */}
          <div className="flex items-center justify-between py-10">
            <div className="flex gap-8 text-2xl text-white/90">
              {primaryNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="hover:text-white transition-colors text-md "
                >
                  {/* {item.label} */}
                </Link>
              ))}
            </div>

            <Link
              href="mailto:hello@lingoevents.com"
              className="text-2xl md:text-3xl font-light tracking-tight text-white/70 hover:text-white"
            >
              {/* hello@lingoevents.com */}
            </Link>
          </div>

          {/* Main Footer Content */}
          <div className="flex justify-between py-20 gap-20">
            {/* Left: Brand */}
            <div className="max-w-sm flex flex-col gap-4">
              <Link href="/" className="flex items-center gap-2"> <Grid2x2PlusIcon className="size-5" />
               <p className="font-mono text-xl font-semibold" data-lingo-skip>
                MapInly
              </p> </Link>
              <p className="text-md md:text-lg text-white/70 leading-relaxed">
                {companyDescription}
              </p>
              <div className="py-2">
                <PillButton
                  text="Get Started"
                  icon={<ArrowRight className="size-5" />}
                  href="/auth"
                  className="bg-white text-fern"
                />
              </div>
              <p className="text-xs md:text-sm text-white/60">
                ©2026 Lingo Events. All rights reserved.
              </p>
            </div>

            {/* Right: Grouped Links */}
            <div className="grid grid-cols-3 gap-16 text-left">
              {/* Legal */}
              <div className="flex flex-col gap-3">
                <h4 className="text-md md:text-lg font-regular text-white">
                  Legal
                </h4>
                <Link
                  href="#"
                  className="text-md md:text-lg text-white/70 hover:text-white"
                >
                  Privacy Policy
                </Link>
                <Link
                  href="#"
                  className="text-md md:text-lg text-white/70 hover:text-white"
                >
                  Terms & Conditions
                </Link>
              </div>

              {/* Pages */}
              <div className="flex flex-col gap-3">
                <h4 className="text-md md:text-lg font-regular text-white">
                  Pages
                </h4>
                <Link
                  href="/"
                  className="text-md md:text-lg text-white/70 hover:text-white"
                >
                  Home
                </Link>
                <Link
                  href="/events"
                  className="text-md md:text-lg text-white/70 hover:text-white"
                >
                  Events
                </Link>
                <Link
                  href="/forums"
                  className="text-md md:text-lg text-white/70 hover:text-white"
                >
                  Forums
                </Link>
                <Link
                  href="/dashboard"
                  className="text-md md:text-lg text-white/70 hover:text-white"
                >
                  Dashboard
                </Link>
              </div>

              {/* Socials */}
              <div className="flex flex-col gap-3">
                <h4 className="text-md md:text-lg font-regular text-white">
                  Socials
                </h4>
                {socialLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="text-md md:text-lg text-white/70 hover:text-white"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.footer>
  );
}

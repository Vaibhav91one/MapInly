"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "motion/react";
import Link from "next/link";
import { MenuIcon, Plus, LogOut, LayoutDashboard, LogIn, Loader2 } from "lucide-react";
import { Sheet, SheetContent, SheetFooter } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { PillButton } from "@/components/custom";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { createClient } from "@/utils/supabase/client";
import type { User } from "@supabase/supabase-js";
import { cn } from "@/lib/utils";
import ScrollRotatingAsterisk from "../section/home/ScrollRotatingAsterisk";

export default function Navbar() {
  const [open, setOpen] = React.useState(false);
  const [user, setUser] = useState<User | null | undefined>(undefined);
  const router = useRouter();
  const supabase = createClient();

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => setUser(user ?? null));
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });
    return () => subscription.unsubscribe();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.push("/");
    router.refresh();
  };

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
            {/* <Grid2x2PlusIcon className="size-5" /> */}
            <ScrollRotatingAsterisk size="size-5" mode="scroll" />
            <p className="font-mono text-base font-semibold" data-lingo-skip>
              MapInly
            </p>
          </Link>
          <div className="hidden items-center gap-2 lg:flex">
            <span className="rounded-full px-4 py-2 font-regular text-base text-muted-foreground">
              Events
            </span>
            <span className="rounded-full px-4 py-2 font-regular text-base text-muted-foreground">
              Forums
            </span>
            <span className="rounded-full px-4 py-2 font-regular text-base text-muted-foreground">
              Dashboard
            </span>
          </div>
          <div className="flex items-center gap-2">
            <div
              className="flex min-w-[7.5rem] items-center justify-end"
              aria-hidden={user === undefined}
            >
              {user === undefined ? (
                <span
                  className="flex h-9 w-9 items-center justify-center text-fern/60"
                  aria-label="Loading"
                >
                  <Loader2 className="size-5 animate-spin" />
                </span>
              ) : user ? (
                <DropdownMenu modal={false}>
                  <DropdownMenuTrigger asChild>
                    <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                      <Avatar className="h-9 w-9">
                        <AvatarFallback className="bg-fern/20 text-fern">
                          {user.email?.[0]?.toUpperCase() ?? "U"}
                        </AvatarFallback>
                      </Avatar>
                    </Button>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem asChild>
                      <Link href="/dashboard" className="flex items-center gap-2">
                        <LayoutDashboard className="h-4 w-4" />
                        Dashboard
                      </Link>
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={handleSignOut} className="text-destructive focus:text-destructive">
                      <LogOut className="mr-2 h-4 w-4" />
                      Sign Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              ) : (
                <PillButton
                  text="Sign In"
                  icon={<LogIn className="size-5" />}
                  href="/auth"
                  className="bg-transparent text-fern border border-fern/40"
                />
              )}
            </div>
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
                  <span className="rounded-full px-4 py-2 font-regular text-base text-muted-foreground">
                    Events
                  </span>
                  <span className="rounded-full px-4 py-2 font-regular text-base text-muted-foreground">
                    Forums
                  </span>
                  <span className="rounded-full px-4 py-2 font-regular text-base text-muted-foreground">
                    Dashboard
                  </span>
                </div>
                <SheetFooter>
                  <PillButton
                    text="Create"
                    icon={<Plus className="size-5" />}
                    href="/dashboard"
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

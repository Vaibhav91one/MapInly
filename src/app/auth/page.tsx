"use client";

import { useState } from "react";
import { useSearchParams } from "next/navigation";

import { motion } from "motion/react";
import { createClient } from "@/utils/supabase/client";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BlurTextEffect } from "@/components/ui/blur-text-effect";
import ScrollRotatingAsterisk from "@/components/section/home/ScrollRotatingAsterisk";
import { sectionClasses } from "@/lib/ui-classes";
import { Separator } from "@/components/ui/separator";

const GoogleIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="size-6"
    viewBox="0 0 48 48"
  >
    <path
      fill="#FFC107"
      d="M43.611 20.083H42V20H24v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s12-5.373 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 12.955 4 4 12.955 4 24s8.955 20 20 20 20-8.955 20-20c0-2.641-.21-5.236-.611-7.743z"
    />
    <path
      fill="#FF3D00"
      d="M6.306 14.691l6.571 4.819C14.655 15.108 18.961 12 24 12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657C34.046 6.053 29.268 4 24 4 16.318 4 9.656 8.337 6.306 14.691z"
    />
    <path
      fill="#4CAF50"
      d="M24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238C29.211 35.091 26.715 36 24 36c-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025C9.505 39.556 16.227 44 24 44z"
    />
    <path
      fill="#1976D2"
      d="M43.611 20.083H42V20H24v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571l6.19 5.238C42.022 35.026 44 30.038 44 24c0-2.641-.21-5.236-.611-7.743z"
    />
  </svg>
);

const GitHubIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
  </svg>
);

export default function AuthPage() {
  const searchParams = useSearchParams();
  const next = searchParams.get("next") ?? "/dashboard";
  const [authError, setAuthError] = useState<string | null>(null);
  const supabase = createClient();

  const signInWithOAuth = async (provider: "google" | "github") => {
    setAuthError(null);
    const { error } = await supabase.auth.signInWithOAuth({
      provider,
      options: {
        redirectTo: `${typeof window !== "undefined" ? window.location.origin : ""}/auth/callback?next=${encodeURIComponent(next)}`,
      },
    });
    if (error) {
      setAuthError(error.message);
    }
  };

  return (
    <section className={sectionClasses}>
      <div className="grid min-h-[calc(100vh-200px)] grid-cols-1 items-stretch gap-8 rounded-lg px-6 py-12 md:grid-cols-[1fr_auto_1fr] md:gap-0 md:gap-x-8 mx-40">
        {/* Left: OAuth card */}
        <div className="flex items-center justify-center">
          <Card className="w-full max-w-md border-none shadow-none outline-none">
            <CardHeader className="space-y-2 mb-4">
              <CardTitle className="text-4xl font-regular leading-tight tracking-tight">
                <BlurTextEffect>Welcome</BlurTextEffect>
              </CardTitle>
              <CardDescription className="text-lg font-regular leading-tight tracking-tight">
                <BlurTextEffect delay={0.1}>
                  Sign in with your preferred provider to continue
                </BlurTextEffect>
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {authError && (
                <p className="text-sm text-destructive">{authError}</p>
              )}
              <div className="flex flex-col gap-4">
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button
                    type="button"
                    variant="outline"
                    className="h-auto w-full justify-center gap-3 rounded-full px-8 py-4 text-lg font-normal leading-tight tracking-tight hover:border-fern/60 hover:bg-transparent"
                    onClick={() => signInWithOAuth("google")}
                  >
                    <GoogleIcon />
                    <span className="text-lg font-normal leading-tight tracking-tight">Sign in with Google</span>
                  </Button>
                </motion.div>
                <div className="relative flex items-center">
                  <Separator className="flex-1" />
                  <span className="px-3 text-sm text-muted-foreground">OR</span>
                  <Separator className="flex-1" />
                </div>
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <Button
                    type="button"
                    variant="outline"
                    className="h-auto w-full justify-center gap-3 rounded-full px-8 py-4 text-lg font-normal leading-tight tracking-tight hover:border-fern/60 hover:bg-transparent"
                    onClick={() => signInWithOAuth("github")}
                  >
                    <GitHubIcon />
                    <span className="text-lg font-normal leading-tight tracking-tight">Sign in with GitHub</span>
                  </Button>
                </motion.div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Separator between left and right */}
        <Separator className="md:hidden" />
        <div className="hidden items-stretch md:flex">
          <Separator orientation="vertical" className="h-full min-h-48" />
        </div>

        {/* Right: ScrollRotatingAsterisk + tagline */}
        <div className="flex flex-col items-center justify-center gap-6">
          <ScrollRotatingAsterisk size="size-40" />
          <p className="text-center text-lg text-muted-foreground font-regular leading-tight tracking-tight md:text-4xl">
            <BlurTextEffect delay={0.2}>Find your people.</BlurTextEffect>
            <br />
            <BlurTextEffect delay={0.3}>Shape your world.</BlurTextEffect>
          </p>
        </div>
      </div>
    </section>
  );
}

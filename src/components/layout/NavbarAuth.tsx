"use client";

import Link from "next/link";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";

interface NavbarAuthProps {
  userEmail?: string;
}

export default function NavbarAuth({ userEmail }: NavbarAuthProps) {
  const router = useRouter();
  const isLoggedIn = !!userEmail;

  const handleLogout = async () => {
    await authClient.signOut();
    router.replace("/");
  };

  if (isLoggedIn) {
    return (
      <div className="flex items-center gap-4">
        <Link
          href="/dashboard"
          className="text-sm font-medium hover:underline text-primary"
        >
          Dashboard
        </Link>
        <span className="text-sm text-muted-foreground truncate max-w-[120px]">
          {userEmail}
        </span>
        <button
          onClick={handleLogout}
          className="px-3 py-1.5 text-sm bg-muted hover:bg-muted/80 rounded-md transition-colors"
        >
          Log out
        </button>
      </div>
    );
  }

  return (
    <div className="flex items-center gap-3">
      <Link
        href="/auth/login"
        className="px-3 py-1.5 text-sm font-medium hover:underline"
      >
        Log in
      </Link>
      <Link
        href="/auth/signup"
        className="px-3 py-1.5 text-sm bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        Sign up
      </Link>
    </div>
  );
}

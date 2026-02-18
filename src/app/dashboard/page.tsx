import { headers } from "next/headers";
import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";
import { DashboardOverviewSection } from "@/components/section/dashboard";
import { sectionClasses, sectionInnerClasses } from "@/lib/ui-classes";

export default async function DashboardPage() {
  const session = await auth.api.getSession({
    headers: await headers(),
  });

  if (!session?.user) {
    redirect("/auth/login");
  }

  return (
    <div className="flex flex-col gap-8">
      <DashboardOverviewSection />
      <section className={sectionClasses}>
        <div className={`${sectionInnerClasses} gap-6`}>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome, {session.user.email}. Your events and forums will appear
            here.
          </p>
          <Link href="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </section>
    </div>
  );
}

import { redirect } from "next/navigation";
import Link from "next/link";
import { DashboardOverviewSection } from "@/components/section/dashboard";
import { EventsMapSection } from "@/components/section/events";
import { ForumsListSection } from "@/components/section/forums";
import { sectionClasses, sectionInnerClasses } from "@/lib/ui-classes";
import { createClient } from "@/utils/supabase/server";

export default async function DashboardPage() {
  const supabase = await createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) {
    redirect("/auth?next=/dashboard");
  }
  const displayName =
    user.user_metadata?.full_name ?? user.email ?? "there";

  return (
    <div className="flex flex-col gap-8">
      <DashboardOverviewSection />
      <section className={sectionClasses}>
        <div className={`${sectionInnerClasses} gap-6`}>
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Welcome, {displayName}. Your events and forums appear below.
          </p>
          <Link href="/" className="text-primary hover:underline">
            ← Back to Home
          </Link>
        </div>
      </section>
      <EventsMapSection />
      <ForumsListSection />
    </div>
  );
}

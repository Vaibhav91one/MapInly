import { sectionClasses, sectionInnerClasses } from "@/lib/ui-classes";
import PillButton from "@/components/custom/PillButton";
import { Users } from "lucide-react";

export default function CTASection() {
  return (
    <section className={`${sectionClasses}`}>
      <div
        className={`${sectionInnerClasses} flex flex-col items-center justify-center gap-6 text-center`}
      >
        <h2 className="text-3xl font-medium md:text-6xl leading-tight tracking-tight max-w-3xl">
          Ready to connect?
        </h2>
        <p className="text-muted-foreground text-base md:text-lg max-w-xl">
          Join events and communities near you
        </p>
        <PillButton
          text="Start connecting with people"
          icon={<Users className="size-5 text-white" />}
          href="/dashboard"
          className="bg-fern text-white"
        />
      </div>
    </section>
  );
}

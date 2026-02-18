import { sectionClasses, sectionInnerClasses } from "@/lib/ui-classes";

export default function HowItWorksSection() {
  return (
    <section className={`${sectionClasses} min-h-screen`}>
      <div
        className={`${sectionInnerClasses} min-h-screen items-center justify-center`}
      >
        <p className="text-center text-muted-foreground">How it works</p>
      </div>
    </section>
  );
}

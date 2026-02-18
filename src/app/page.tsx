import {
  HeroSection,
  TopEventsSection,
  ExploreMapSection,
  HowItWorksSection,
  PopularCommunitiesSection,
  LanguagesSection,
  CTASection,
} from "@/components/section/home";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <TopEventsSection />
      <ExploreMapSection />
      {/* <HowItWorksSection /> */}
      <PopularCommunitiesSection />
      {/* <LanguagesSection /> */}
      {/* <CTASection /> */}
    </div>
  );
}
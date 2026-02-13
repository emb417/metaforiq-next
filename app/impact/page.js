import Hero from "@/components/App/Hero/Hero";
import Outcomes from "@/components/Impact/Outcomes/Outcomes";
import CTASection from "@/components/App/CTASection/CTASection";

export const metadata = {
  title: "Impact | Eric Brousseau",
  description:
    "The professional impact of Eric Brousseau, a Principal Product Leader with 25+ years of experience.",
};

export default function ImpactPage() {
  return (
    <main className="main">
      <Hero
        kicker="Impact"
        titleIntro="Technical Complexity to"
        titleAccent="Business Outcomes"
        subtitle="From AI/ML innovations to zero-to-one product introductions, I leverage systems thinking to identify unmet needs within complex technical environments. I combine deep technical fluency and hands-on prototyping with scientific rigor to launch new products and accelerate growth."
      />
      <Outcomes />
      <CTASection
        title="Beyond the Results"
        subtitle="Explore the mindset, values, and technical preferences that guide me."
        buttonText="About"
        buttonLink="/about"
      />
    </main>
  );
}

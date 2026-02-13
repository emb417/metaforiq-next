import React from "react";
import Hero from "@/components/App/Hero/Hero";
import CredibilityLogos from "@/components/Home/CredibilityLogos/CredibilityLogos";
import CredibilityMarkers from "@/components/Home/CredibilityMarkers/CredibilityMarkers";
import Philosophy from "@/components/Home/Philosophy/Philosophy";
import ContinuousLoop from "@/components/Home/ContinuousLoop/ContinuousLoop";
import CTASection from "@/components/App/CTASection/CTASection";

export const metadata = {
  title: "Home | Eric Brousseau",
  description:
    "The professional site of Eric Brousseau, a Principal Product Leader with 25+ years of experience.",
};

export default function HomePage() {
  return (
    <main className="main">
      <Hero
        kicker="Product Vision to Operations"
        titleIntro="Maximizing"
        titleAccent="Continuous Learning"
        subtitle="Product wins are generated through high quality feedback loops in the product lifecycle. The key to success is cross-functional collaboration optimizing every stage of the lifecycle to capture customer value and realize business outcomes."
      />
      <CredibilityLogos />
      <CredibilityMarkers />
      <Philosophy />
      <ContinuousLoop />
      <CTASection
        title="Navigating Complexity with Strategic Intent"
        subtitle="Explore the portfolio of AI/ML and zero-to-one initatives driven by empirical evidence and systems thinking."
        buttonText="See the Impact"
        buttonLink="/impact"
      />
    </main>
  );
}

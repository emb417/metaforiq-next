import React from "react";
import Hero from "@/components/Common/Hero/Hero";
import CredibilityLogos from "@/components/Home/CredibilityLogos/CredibilityLogos";
import CredibilityMarkers from "@/components/Home/CredibilityMarkers/CredibilityMarkers";
import Philosophy from "@/components/Home/Philosophy/Philosophy";
import ProductLoop from "@/components/Home/ProductLoop/ProductLoop";
import CTASection from "@/components/Common/CTASection/CTASection";

export const metadata = {
  title: "MetaforIQ | Eric Brousseau | Principal Product Leader",
  description:
    "The professional site of Eric Brousseau, a Principal Product Leader with 20+ years of experience in data, AI/ML, and UX platform capabilities across B2B SaaS and B2C products.",
};

export default function HomePage() {
  return (
    <main className="main">
      <Hero
        kicker="Product Vision to Operations"
        titleIntro="Maximize"
        titleAccent="Continuous Learning"
        subtitle="Product wins are the result of high-quality feedback loops embedded throughout the product lifecycle. Success stems from a culture of cross-functional collaboration that transforms collective learning into validated customer value and measurable business outcomes."
      />
      <CredibilityLogos />
      <CredibilityMarkers />
      <Philosophy />
      <ProductLoop />
      <CTASection
        title="Navigating Complexity with Strategic Intent"
        subtitle="Explore the portfolio of AI/ML and zero-to-one initatives driven by empirical evidence and systems thinking."
        buttonText="See the Impact"
        buttonLink="/impact"
      />
    </main>
  );
}

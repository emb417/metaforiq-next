import Hero from "@/components/Common/Hero/Hero";
import Outcomes from "@/components/Impact/Outcomes/Outcomes";
import CTASection from "@/components/Common/CTASection/CTASection";

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
        subtitle="I lead the transformation of complex technical challenges into products that delight customers and drive business outcomes. By applying systems thinking to organizational and technical siloes, I connect vision and execution to define categories and scale businesses."
      />
      <Outcomes />
      <CTASection
        title="Beyond the Results"
        subtitle="Explore the mindset, values, and perspectives that guide me."
        buttonText="About"
        buttonLink="/about"
      />
    </main>
  );
}

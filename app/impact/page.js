import Hero from "@/components/Common/Hero/Hero";
import Outcomes from "@/components/Impact/Outcomes/Outcomes";
import CTASection from "@/components/Common/CTASection/CTASection";

export const metadata = {
  title: "Impact | MetaforIQ",
  description:
    "Exploring the professional impact of Eric Brousseau. A proven track record of driving business outcomes and product-market fit.",
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

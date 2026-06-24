import { Suspense } from "react";
import Hero from "@/components/Common/Hero/Hero";
import Outcomes from "@/components/Impact/Outcomes/Outcomes";
import CTASection from "@/components/Common/CTASection/CTASection";
import LoadingMessage from "@/components/App/LoadingMessage/LoadingMessage";

export const metadata = {
  title: "Impact | MetaforIQ",
  description:
    "Exploring the professional impact of Eric Brousseau. A proven track record of driving business outcomes and product-market fit.",
};

export default async function ImpactPage({ searchParams }) {
  const resolvedParams = await searchParams;
  const company = resolvedParams?.company;
  const badge = resolvedParams?.badge;
  const suspenseKey = `${company || "all"}-${badge || "all"}`;

  return (
    <main className="main">
      <Hero
        kicker="Impact"
        titleIntro="Technical Complexity to"
        titleAccent="Business Outcomes"
        subtitle="I lead the transformation of complex technical challenges into products that delight customers and drive business outcomes. By applying systems thinking to organizational and technical siloes, I connect vision and execution to define categories and scale businesses."
      />
      <Suspense key={suspenseKey} fallback={<LoadingMessage message="Loading Outcomes..." />}>
        <Outcomes company={company} badge={badge} />
      </Suspense>
      <CTASection
        title="Beyond the Results"
        subtitle="Explore the mindset, values, and perspectives that guide me."
        buttonText="About"
        buttonLink="/about"
      />
    </main>
  );
}

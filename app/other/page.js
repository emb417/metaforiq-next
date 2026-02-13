import Hero from "@/components/App/Hero/Hero";
import CTASection from "@/components/App/CTASection/CTASection";
import Expertise from "@/components/Other/Expertise/Expertise";
import OperatingStyle from "@/components/Other/OperatingStyle/OperatingStyle";
import ServiceCard from "@/components/Other/ServiceCard/ServiceCard";
import ServiceDetail from "@/components/Other/ServiceDetail/ServiceDetail";
import Services from "@/components/Other/Services/Services";
import TechnicalDepth from "@/components/Other/TechnicalDepth/TechnicalDepth";
import WhoIsThisFor from "@/components/Other/WhoIsThisFor/WhoIsThisFor";

export const metadata = {
  title: "Other | Eric Brousseau",
  description:
    "A collection of other components not directly tied to core navigation.",
};

export default function OtherPage() {
  return (
    <main className="main">
      <Hero
        kicker="Other"
        titleIntro="A collection of"
        titleAccent="supporting components."
        subtitle="This page showcases various components that are not part of the primary navigation but demonstrate different aspects of the site's design system and functionality."
      />
      <Expertise />
      <OperatingStyle />
      {/* ServiceCard is typically used within Services or ServiceDetail, 
          so we'll just render one example for demonstration. */}
      <ServiceCard
        title="Example Service"
        description="This is an example service card."
        icon="/path/to/icon.svg" // Placeholder, replace with actual icon path
      />
      <ServiceDetail
        title="Detailed Service Example"
        description="This is a detailed description of an example service."
        approach="Our approach is collaborative and data-driven."
        outcomes="Improved efficiency and measurable results."
        deliverables={["Placeholder Deliverable 1", "Placeholder Deliverable 2"]}
      />
      <Services />
      <TechnicalDepth />
      <WhoIsThisFor />
      <CTASection
        title="Explore Further"
        buttonText="Contact Me"
        buttonLink="mailto:eric@metaforiq.com"
      />
    </main>
  );
}
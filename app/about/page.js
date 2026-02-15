import Hero from "@/components/Common/Hero/Hero";
import Expertise from "@/components/About/Expertise/Expertise";
import TechnicalDepth from "@/components/About/TechnicalDepth/TechnicalDepth";
import PersonalNote from "@/components/About/PersonalNote/PersonalNote";
import Mindset from "@/components/About/Mindset/Mindset";
import Values from "@/components/About/Values/Values";
import Preferences from "@/components/About/Preferences/Preferences";
import CTASection from "@/components/Common/CTASection/CTASection";
import Quote from "@/components/About/Quote/Quote";

export const metadata = {
  title: "About | Eric Brousseau",
  description:
    "The mindset, values, and leadership philosophy of Eric Brousseau, a Principal Product Leader.",
};

export default function AboutPage() {
  return (
    <main className="main">
      <Hero
        kicker="About"
        titleIntro="A systems thinker for"
        titleAccent="the context-driven AI era."
        subtitle="Principal Product Leader with 20+ years of experience driving the discovery and delivery of data, AI/ML, and UX platform capabilities across B2B SaaS and B2C digital products."
      />
      <Quote />
      <Mindset />
      <Values />
      <Preferences />
      <Expertise />
      <TechnicalDepth />
      <PersonalNote />
      <CTASection
        title="Seeking High-Leverage Impact"
        subtitle="I am looking to lead the discovery and delivery of transformative AI-enabled capabilities."
        buttonText="Let's Connect"
        buttonLink="mailto:eric@metaforiq.com"
      />
    </main>
  );
}

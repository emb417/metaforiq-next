import Hero from "@/components/App/Hero/Hero";
import ProfessionalStory from "@/components/About/ProfessionalStory/ProfessionalStory";
import PersonalNote from "@/components/About/PersonalNote/PersonalNote";
import Mindset from "@/components/About/Mindset/Mindset";
import ValuesAndPreferences from "@/components/About/ValuesAndPreferences/ValuesAndPreferences";
import CTASection from "@/components/App/CTASection/CTASection";

export const metadata = {
  title: "About | Eric Brousseau",
  description:
    "The professional story of Eric Brousseau, a Principal Product Leader with 25+ years of experience.",
};

export default function AboutPage() {
  return (
    <main className="main">
      <Hero
        kicker="About"
        titleIntro="A systems thinker for"
        titleAccent="the context-driven era."
        subtitle="I find the synergy of user needs and technical capability to delight customers. By integrating the 'what' of data with the 'why' of metadata, I help realize the full potential of products through evidence-led decisions."
      />
      <ProfessionalStory />
      <PersonalNote />
      <Mindset />
      <ValuesAndPreferences />
      <CTASection
        title="Let's Talk"
        buttonText="Email me."
        buttonLink="mailto:eric@metaforiq.com"
      />
    </main>
  );
}

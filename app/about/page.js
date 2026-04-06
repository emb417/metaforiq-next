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
  title: "About | MetaforIQ",
  description:
    "A deep dive into the mindset, technical expertise, and personal values of Eric Brousseau.",
};

export default function AboutPage() {
  return (
    <main className="main">
      <Hero
        kicker="About"
        titleIntro="A systems thinker for"
        titleAccent="the context-driven AI era."
        subtitle="The bottleneck is shifting away from the velocity of development to the quality 
        of the bets being made. A systems thinker accelerates this process by using generative and 
        agentic technologies to map the complex dependencies between market signals, 
        technical constraints, and customer behavior at a scale that was previously impossible.
        By translating these complex patterns into a clear, shared reality, a leader provides the 
        high-level clarity necessary for collective success."
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

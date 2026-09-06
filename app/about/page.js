import Hero from "@/components/Common/Hero/Hero";
import Expertise from "@/components/About/Expertise/Expertise";
import TechnicalDepth from "@/components/About/TechnicalDepth/TechnicalDepth";
import PersonalNote from "@/components/About/PersonalNote/PersonalNote";
import Mindset from "@/components/About/Mindset/Mindset";
import Values from "@/components/About/Values/Values";
import Preferences from "@/components/About/Preferences/Preferences";
import CTASection from "@/components/Common/CTASection/CTASection";

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
        subtitle="The bottleneck is shifting away from the velocity of development to the judgment applied to what's discovered. As a systems thinker, I see agentic workflows mapping how information flows between agents and humans, drawing on customer behavior, system signals, and external context to surface the highest-quality opportunities. Freed from execution, everyone brings their own insight, intuition, and taste to those opportunities, and that diversity of judgment drives the best outcomes."
      />
      <Mindset />
      <Values />
      <Preferences />
      <Expertise />
      <TechnicalDepth />
      <PersonalNote />
      <CTASection
        title="Like Minded?"
        subtitle="I love meeting new people, learning new things, and sharing my knowledge."
        buttonText="Let's Connect"
        buttonLink="mailto:eric@metaforiq.com"
      />
    </main>
  );
}

import React from "react";
import Hero from "@/components/Hero/Hero";
import Services from "@/components/Services/Services";
import Expertise from "@/components/Expertise/Expertise";
import CTASection from "@/components/CTASection/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <Services />
      <Expertise />
      <CTASection />
    </>
  );
}

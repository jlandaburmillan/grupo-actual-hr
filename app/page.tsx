import { AssociatedSolutions } from "../components/AssociatedSolutions";
import { AudienceMessages } from "../components/AudienceMessages";
import { BlueprintSection } from "../components/BlueprintSection";
import { BrandEssence } from "../components/BrandEssence";
import { CTASection } from "../components/CTASection";
import { Differentiators } from "../components/Differentiators";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { IndustriesSection } from "../components/IndustriesSection";
import { Methodology } from "../components/Methodology";
import { PackagedSolutions } from "../components/PackagedSolutions";
import { PositioningSection } from "../components/PositioningSection";
import { SapHcmSection } from "../components/SapHcmSection";
import { Services } from "../components/Services";
import { SuccessFactorsSection } from "../components/SuccessFactorsSection";
import { ValueProposition } from "../components/ValueProposition";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <BrandEssence />
        <BlueprintSection />
        <PositioningSection />
        <ValueProposition />
        <Services />
        <SapHcmSection />
        <SuccessFactorsSection />
        <AssociatedSolutions />
        <PackagedSolutions />
        <AudienceMessages />
        <IndustriesSection />
        <Methodology />
        <Differentiators />
        <CTASection />
      </main>
      <Footer />
    </>
  );
}

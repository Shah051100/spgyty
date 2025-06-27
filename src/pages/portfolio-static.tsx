import HeroSection from "@/components/portfolio/hero-section";
import AboutSection from "@/components/portfolio/about-section";
import SkillsSection from "@/components/portfolio/skills-section";
import ExperienceSection from "@/components/portfolio/experience-section";
import ResearchSection from "@/components/portfolio/research-section";
import PublicationsSection from "@/components/portfolio/publications-section";
import ContactSectionStatic from "@/components/portfolio/contact-section-static";
import Footer from "@/components/portfolio/footer";
import Navigation from "@/components/portfolio/navigation";

export default function PortfolioStatic() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <SkillsSection />
      <ExperienceSection />
      <ResearchSection />
      <PublicationsSection />
      <ContactSectionStatic />
      <Footer />
    </div>
  );
}
import Navigation from "@/components/portfolio/navigation";
import HeroSection from "@/components/portfolio/hero-section";
import AboutSection from "@/components/portfolio/about-section";
import ResearchSection from "@/components/portfolio/research-section";
import ExperienceSection from "@/components/portfolio/experience-section";
import SkillsSection from "@/components/portfolio/skills-section";
import PublicationsSection from "@/components/portfolio/publications-section";
import ContactSection from "@/components/portfolio/contact-section";
import Footer from "@/components/portfolio/footer";

export default function Portfolio() {
  return (
    <div className="bg-dark-base text-white font-mono overflow-x-hidden">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ResearchSection />
      <ExperienceSection />
      <SkillsSection />
      <PublicationsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}

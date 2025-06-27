import { build } from 'vite';
import { fileURLToPath } from 'url';
import { dirname, resolve } from 'path';
import fs from 'fs';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function buildForGitHubPages() {
  console.log('🚀 Building for GitHub Pages...');
  
  try {
    // Create the static main.tsx entry point
    const staticMainContent = `
import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'

// Import components directly
import HeroSection from "./components/portfolio/hero-section";
import AboutSection from "./components/portfolio/about-section";
import SkillsSection from "./components/portfolio/skills-section";
import ExperienceSection from "./components/portfolio/experience-section";
import ResearchSection from "./components/portfolio/research-section";
import PublicationsSection from "./components/portfolio/publications-section";
import ContactSectionStatic from "./components/portfolio/contact-section-static";
import Footer from "./components/portfolio/footer";
import Navigation from "./components/portfolio/navigation";
import { Toaster } from "./components/ui/toaster";

function Portfolio() {
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
      <Toaster />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Portfolio />
  </React.StrictMode>,
)
`;

    // Write the static entry point
    const staticMainPath = resolve(__dirname, 'client/src/main-github.tsx');
    fs.writeFileSync(staticMainPath, staticMainContent);

    // Update HTML to use the new entry point
    const htmlPath = resolve(__dirname, 'client/index.html');
    const originalHtml = fs.readFileSync(htmlPath, 'utf-8');
    const updatedHtml = originalHtml.replace('/src/main.tsx', '/src/main-github.tsx');
    fs.writeFileSync(htmlPath, updatedHtml);

    // Copy CV to client public directory for proper inclusion
    const cvSource = resolve(__dirname, 'client/public/saadat-cv.pdf');
    if (!fs.existsSync(cvSource)) {
      const originalCv = resolve(__dirname, 'attached_assets/saadat CV..._1751009431321.pdf');
      if (fs.existsSync(originalCv)) {
        fs.copyFileSync(originalCv, cvSource);
        console.log('✅ CV copied to public directory');
      }
    }

    // Build with Vite
    await build({
      root: resolve(__dirname, 'client'),
      build: {
        outDir: resolve(__dirname, 'docs'),
        emptyOutDir: true,
        rollupOptions: {
          output: {
            manualChunks: undefined,
          },
        },
      },
      base: './',
      resolve: {
        alias: {
          '@': resolve(__dirname, 'client/src'),
          '@shared': resolve(__dirname, 'shared'),
          '@assets': resolve(__dirname, 'attached_assets'),
        },
      },
    });

    // Restore original HTML
    fs.writeFileSync(htmlPath, originalHtml);
    
    // Clean up temporary file
    fs.unlinkSync(staticMainPath);

    console.log('✅ GitHub Pages build completed!');
    console.log('📁 Files are in the ./docs directory');
    console.log('🌐 Configure GitHub Pages to use /docs folder');
    
  } catch (error) {
    console.error('❌ Build failed:', error);
    process.exit(1);
  }
}

buildForGitHubPages();
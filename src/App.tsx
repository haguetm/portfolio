/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { HeroSection } from './components/sections/HeroSection';
import { MarqueeSection } from './components/sections/MarqueeSection';
import { AboutSection } from './components/sections/AboutSection';
import { SkillsSection } from './components/sections/SkillsSection';
import { ProjectsSection } from './components/sections/ProjectsSection';
import { ContactSection } from './components/sections/ContactSection';

export default function App() {
  return (
    <main
      className="bg-[#0C0C0C] min-h-screen text-[#D7E2EA] font-['Kanit'] selection:bg-[#B600A8]/30 selection:text-white"
      style={{ overflowX: 'clip' }}
    >
      {/* 1. Hero Section */}
      <HeroSection />

      {/* 2. Marquee Section */}
      <MarqueeSection />

      {/* 3. About Section */}
      <AboutSection />

      {/* 4. Skills Section (formerly Services) */}
      <SkillsSection />

      {/* 5. Projects Section */}
      <ProjectsSection />

      {/* 6. Contact Section */}
      <ContactSection />
    </main>
  );
}

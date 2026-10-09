import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { FadeIn } from '../common/FadeIn';
import { ImagePlaceholder } from '../common/ImagePlaceholder';
import {
  ExternalLink,
  Layout,
  GitBranch,
  PlayCircle,
  Smartphone,
  Heart,
  Globe,
  Workflow,
  Layers,
  FileText,
  LucideIcon,
} from 'lucide-react';

interface ProjectData {
  number: string;
  title: string;
  category: string;
  buttonType: 'github' | 'coming-soon' | 'confidential';
  githubUrl?: string;
  placeholders: {
    leftTop: { label: string; icon: LucideIcon };
    leftBottom: { label: string; icon: LucideIcon };
    rightTall: { label: string; icon: LucideIcon };
  };
}

const projects: ProjectData[] = [
  {
    number: '01',
    title: 'Breezy',
    category: 'Team project - Distributed social network',
    buttonType: 'github',
    githubUrl: 'https://github.com/El-Pouleto-ultimate/breezy-profil-service',
    placeholders: {
      leftTop: { label: 'Interface screenshot', icon: Layout },
      leftBottom: { label: 'Architecture diagram', icon: GitBranch },
      rightTall: { label: 'Demo', icon: PlayCircle },
    },
  },
  {
    number: '02',
    title: 'atractr',
    category: 'Personal project - Dating app built around intentions',
    buttonType: 'coming-soon',
    placeholders: {
      leftTop: { label: 'App screen', icon: Smartphone },
      leftBottom: { label: 'Intentions screen', icon: Heart },
      rightTall: { label: 'Landing page', icon: Globe },
    },
  },
  {
    number: '03',
    title: 'AI purchase-proof analysis',
    category: 'Company project - HighCo Data',
    buttonType: 'confidential',
    placeholders: {
      leftTop: { label: 'Pipeline diagram', icon: Workflow },
      leftBottom: { label: 'Architecture', icon: Layers },
      rightTall: { label: 'Overview', icon: FileText },
    },
  },
];

interface CardProps {
  project: ProjectData;
  index: number;
  totalCards: number;
}

const ProjectCard: React.FC<CardProps> = ({ project, index, totalCards }) => {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start'],
  });

  // Target scale formula: 1 - (totalCards - 1 - index) * 0.03
  const targetScale = 1 - (totalCards - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [0, 1], [1, targetScale]);

  return (
    <div
      ref={containerRef}
      className="h-[85vh] min-h-[600px] flex items-start justify-center sticky top-24 md:top-32 w-full"
      style={{
        top: `calc(5rem + ${index * 28}px)`,
      }}
    >
      <motion.div
        style={{ scale }}
        className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] border-2 border-[#D7E2EA] bg-[#0C0C0C] p-4 sm:p-6 md:p-8 flex flex-col justify-between shadow-2xl transition-shadow"
      >
        {/* Top Row: Huge number, Category, Project Name, and Button on the right */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-[#222834]">
          <div className="flex items-center gap-4 sm:gap-6">
            {/* Huge number (same style as Skills: font-black, color #D7E2EA) */}
            <span
              className="font-black text-[#D7E2EA] leading-none select-none flex-shrink-0"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)' }}
            >
              {project.number}
            </span>

            <div>
              <span className="text-xs sm:text-sm font-mono tracking-widest text-[#8492A0] uppercase block">
                {project.category}
              </span>
              <h3
                className="font-medium text-[#D7E2EA] uppercase tracking-wide leading-tight mt-0.5"
                style={{ fontSize: 'clamp(1.1rem, 2.4vw, 2rem)' }}
              >
                {project.title}
              </h3>
            </div>
          </div>

          {/* Right Button */}
          <div className="flex items-center">
            {project.buttonType === 'github' && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base hover:bg-[#D7E2EA]/10 transition-colors duration-200 cursor-pointer"
              >
                <span>View on GitHub</span>
                <ExternalLink className="w-4 h-4 ml-0.5" />
              </a>
            )}

            {project.buttonType === 'coming-soon' && (
              <span className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-8 py-3 sm:px-10 sm:py-3.5 text-sm sm:text-base opacity-60 cursor-not-allowed select-none">
                Coming soon
              </span>
            )}

            {project.buttonType === 'confidential' && (
              <span className="inline-flex items-center justify-center rounded-full border-2 border-[#D7E2EA] text-[#D7E2EA] font-medium uppercase tracking-widest px-6 py-2.5 sm:px-8 sm:py-3 text-xs sm:text-sm opacity-70 select-none">
                Details limited - confidential
              </span>
            )}
          </div>
        </div>

        {/* Bottom Row: Two-column grid */}
        {/* Left column (40%) has 2 stacked placeholders, Right column (60%) has 1 tall placeholder */}
        <div className="grid grid-cols-1 md:grid-cols-10 gap-4 sm:gap-6 pt-6">
          {/* Left Column (40% -> 4 cols on md) */}
          <div className="md:col-span-4 flex flex-col gap-4 sm:gap-6 justify-between">
            {/* Left Top: height clamp(130px, 16vw, 230px) */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden"
              style={{ height: 'clamp(130px, 16vw, 230px)' }}
            >
              {/* replace with <img src='/images/...'> */}
              <ImagePlaceholder
                icon={project.placeholders.leftTop.icon}
                label={project.placeholders.leftTop.label}
                className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              />
            </div>

            {/* Left Bottom: height clamp(160px, 22vw, 340px) */}
            <div
              className="w-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden"
              style={{ height: 'clamp(160px, 22vw, 340px)' }}
            >
              {/* replace with <img src='/images/...'> */}
              <ImagePlaceholder
                icon={project.placeholders.leftBottom.icon}
                label={project.placeholders.leftBottom.label}
                className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
              />
            </div>
          </div>

          {/* Right Column (60% -> 6 cols on md): 1 tall placeholder */}
          <div className="md:col-span-6 min-h-[300px] md:min-h-[420px] rounded-[40px] sm:rounded-[50px] md:rounded-[60px] overflow-hidden">
            {/* replace with <img src='/images/...'> */}
            <ImagePlaceholder
              icon={project.placeholders.rightTall.icon}
              label={project.placeholders.rightTall.label}
              className="w-full h-full rounded-[40px] sm:rounded-[50px] md:rounded-[60px]"
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export const ProjectsSection: React.FC = () => {
  return (
    <section
      id="projects"
      className="relative bg-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] -mt-10 sm:-mt-12 md:-mt-14 z-20 px-5 sm:px-8 md:px-10 pt-20 sm:pt-24 md:pt-32 pb-32 w-full"
    >
      <div className="max-w-6xl mx-auto">
        {/* Heading: "Projects" with .hero-heading */}
        <FadeIn delay={0} y={40} className="mb-16 sm:mb-20 md:mb-24">
          <h2
            className="hero-heading font-black uppercase text-center leading-none tracking-tight select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Projects
          </h2>
        </FadeIn>

        {/* 3 Sticky-stacking project cards */}
        <div className="relative w-full space-y-12">
          {projects.map((project, idx) => (
            <ProjectCard
              key={project.number}
              project={project}
              index={idx}
              totalCards={projects.length}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { FadeIn } from '../common/FadeIn';

interface SkillItem {
  number: string;
  name: string;
  description: string;
}

export const SkillsSection: React.FC = () => {
  const skills: SkillItem[] = [
    {
      number: '01',
      name: 'Cybersecurity & Networks',
      description:
        'Network analysis and troubleshooting with Wireshark and Packet Tracer, with a focus on securing infrastructures and understanding how traffic really flows.',
    },
    {
      number: '02',
      name: 'Data & AI',
      description:
        'Machine learning pipelines, LLM-based classification and computer vision, from data preparation to evaluation and deployment.',
    },
    {
      number: '03',
      name: 'Embedded & IoT',
      description:
        'Prototyping connected devices with Arduino, sensors and microcontrollers, from circuit to firmware.',
    },
    {
      number: '04',
      name: 'Software Development',
      description:
        'Object-oriented development in C/C++ and Python, with clean, tested and documented code.',
    },
    {
      number: '05',
      name: 'Data Protection',
      description:
        'Mapping sensitive data flows and designing data loss prevention practices inside a company.',
    },
  ];

  return (
    <section
      id="skills"
      className="relative bg-[#FFFFFF] text-[#0C0C0C] rounded-t-[40px] sm:rounded-t-[50px] md:rounded-t-[60px] px-5 sm:px-8 md:px-10 py-20 sm:py-24 md:py-32 z-10 w-full"
    >
      <div className="max-w-5xl mx-auto">
        {/* Heading: "Skills" in #0C0C0C */}
        <FadeIn delay={0} y={40}>
          <h2
            className="text-[#0C0C0C] font-black uppercase text-center leading-none tracking-tight mb-16 sm:mb-20 md:mb-28 select-none"
            style={{ fontSize: 'clamp(3rem, 12vw, 160px)' }}
          >
            Skills
          </h2>
        </FadeIn>

        {/* 5 Service / Skill Items in a vertical list */}
        <div className="w-full">
          {skills.map((skill, index) => (
            <FadeIn
              key={skill.number}
              delay={index * 0.1}
              y={30}
              className={`py-8 sm:py-10 md:py-12 ${
                index !== 0 ? 'border-t border-[#0C0C0C]/15' : ''
              }`}
            >
              <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8 lg:gap-14">
                {/* Number on left: font-black, clamp(3rem, 10vw, 140px), color #0C0C0C */}
                <span
                  className="font-black text-[#0C0C0C] leading-none select-none flex-shrink-0"
                  style={{ fontSize: 'clamp(3rem, 10vw, 140px)' }}
                >
                  {skill.number}
                </span>

                {/* Name + description stacked vertically on right */}
                <div className="flex-1 flex flex-col justify-center">
                  <h3
                    className="font-medium uppercase text-[#0C0C0C] tracking-tight leading-tight"
                    style={{ fontSize: 'clamp(1rem, 2.2vw, 2.1rem)' }}
                  >
                    {skill.name}
                  </h3>
                  <p
                    className="font-light text-[#0C0C0C] leading-relaxed max-w-2xl mt-2 md:mt-3 opacity-60"
                    style={{ fontSize: 'clamp(0.85rem, 1.6vw, 1.25rem)' }}
                  >
                    {skill.description}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

import React from 'react';
import { FadeIn } from '../common/FadeIn';

export const Navbar: React.FC = () => {
  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <FadeIn delay={0} y={-20} as="nav" className="w-full z-30">
      <div className="flex items-center justify-between px-6 md:px-10 pt-6 md:pt-8">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            onClick={(e) => handleScroll(e, item.href)}
            className="text-[#D7E2EA] font-medium uppercase tracking-wider text-sm md:text-lg lg:text-[1.4rem] hover:opacity-70 transition-opacity duration-200 select-none"
          >
            {item.label}
          </a>
        ))}
      </div>
    </FadeIn>
  );
};

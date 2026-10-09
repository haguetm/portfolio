import React, { useState } from 'react';
import { Navbar } from './Navbar';
import { FadeIn } from '../common/FadeIn';
import { Magnet } from '../common/Magnet';
import { ContactButton } from '../common/ContactButton';
import { Camera, Upload } from 'lucide-react';

export const HeroSection: React.FC = () => {
  const [imageSrc, setImageSrc] = useState<string>(() => {
    return (
      localStorage.getItem('maxime_profile_img') ||
      '/images/profile.png'
    );
  });
  const [hasError, setHasError] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const processFile = (file: File) => {
    const reader = new FileReader();
    reader.onload = (event) => {
      const dataUrl = event.target?.result as string;
      if (dataUrl) {
        setImageSrc(dataUrl);
        setHasError(false);
        try {
          localStorage.setItem('maxime_profile_img', dataUrl);
        } catch {
          // ignore localStorage quota error
        }
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      processFile(file);
    }
  };

  const handleImageError = () => {
    if (imageSrc === '/images/profile.png') {
      setImageSrc('/images/Gemini_Generated_Image_mstgfsmstgfsmstg.png');
    } else {
      setHasError(true);
    }
  };

  return (
    <section className="relative h-screen w-full flex flex-col justify-between overflow-x-clip bg-[#0C0C0C]">
      {/* 1. Navbar */}
      <Navbar />

      {/* 2. Hero Heading: "Hi, I'm Maxime" */}
      <div className="w-full overflow-hidden text-center z-0 px-2 sm:px-4 mb-auto mt-1 sm:mt-2 md:mt-3">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero-heading font-black uppercase tracking-tight leading-none whitespace-nowrap w-full text-[12.5vw] sm:text-[13vw] md:text-[14vw] lg:text-[15vw] -mt-1 sm:-mt-3 md:-mt-5 select-none">
            Hi, I&apos;m Maxime
          </h1>
        </FadeIn>
      </div>

      {/* 3. Hero Portrait with Magnet Mouse-Following effect */}
      <div className="absolute left-1/2 -translate-x-1/2 z-10 w-[280px] sm:w-[360px] md:w-[440px] lg:w-[520px] aspect-[4/5] top-1/2 -translate-y-1/2 sm:top-auto sm:translate-y-0 sm:bottom-0 pointer-events-auto">
        <FadeIn delay={0.6} y={30} className="w-full h-full flex justify-center">
          <Magnet
            padding={150}
            strength={3}
            activeTransition="transform 0.3s ease-out"
            inactiveTransition="transform 0.6s ease-in-out"
            className="w-full h-full"
          >
            {hasError ? (
              /* Drag-and-drop upload zone when image file is missing */
              <label
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`w-full h-full rounded-3xl border-2 border-dashed flex flex-col items-center justify-center p-6 text-center cursor-pointer transition-all duration-300 ${
                  isDragging
                    ? 'border-[#B600A8] bg-[#B600A8]/10 scale-105'
                    : 'border-[#D7E2EA]/20 bg-[#16181d]/80 hover:border-[#D7E2EA]/50 hover:bg-[#1a1d24]'
                }`}
              >
                <div className="w-16 h-16 rounded-full bg-[#B600A8]/20 flex items-center justify-center text-[#B600A8] mb-4">
                  <Upload className="w-8 h-8" />
                </div>
                <span className="text-sm font-medium text-white mb-1">
                  Déposez votre photo ici
                </span>
                <span className="text-xs text-[#8E9BAC] mb-4">
                  ou cliquez pour sélectionner votre fichier
                </span>
                <span className="text-xs uppercase tracking-wider font-mono bg-[#B600A8] hover:bg-[#D100C1] text-white px-4 py-2 rounded-full transition-colors select-none">
                  Sélectionner l&apos;image
                </span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleFileUpload}
                  className="hidden"
                />
              </label>
            ) : (
              /* Freestanding Cutout Portrait */
              <div
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className="w-full h-full relative group flex items-end justify-center"
              >
                <img
                  src={imageSrc}
                  alt="Maxime Haguet"
                  onError={handleImageError}
                  className="w-full h-full object-contain object-bottom select-none transition-transform duration-500 group-hover:scale-105 filter drop-shadow-[0_25px_40px_rgba(0,0,0,0.9)]"
                  referrerPolicy="no-referrer"
                />
                <label
                  className="absolute bottom-4 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-200 flex items-center gap-2 cursor-pointer text-[#D7E2EA] z-20 bg-[#16181d]/90 hover:bg-[#20242e] border border-white/20 px-3.5 py-1.5 rounded-full shadow-xl text-xs font-mono tracking-wider select-none whitespace-nowrap"
                  title="Cliquez pour importer ou changer votre fichier image"
                >
                  <Camera className="w-3.5 h-3.5 text-white" />
                  <span>Changer la photo</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileUpload}
                    className="hidden"
                  />
                </label>
              </div>
            )}
          </Magnet>
        </FadeIn>
      </div>

      {/* 4. Bottom bar */}
      <div className="relative z-20 flex justify-between items-end px-6 md:px-10 pb-7 sm:pb-8 md:pb-10 w-full">
        {/* Left paragraph */}
        <FadeIn delay={0.35} y={20}>
          <p
            className="text-[#D7E2EA] font-light uppercase tracking-wide leading-snug max-w-[160px] sm:max-w-[220px] md:max-w-[260px]"
            style={{ fontSize: 'clamp(0.75rem, 1.4vw, 1.5rem)' }}
          >
            engineering apprentice focused on cybersecurity, data and ai
          </p>
        </FadeIn>

        {/* Right Contact button: mailto:maxime.haguet@gmail.com */}
        <FadeIn delay={0.5} y={20}>
          <ContactButton label="Contact Me" href="mailto:maxime.haguet@gmail.com" />
        </FadeIn>
      </div>
    </section>
  );
};

import React, { useRef } from 'react';
import { motion, useScroll, useTransform, MotionValue } from 'framer-motion';

interface AnimatedTextProps {
  text: string;
  className?: string;
}

interface CharProps {
  char: string;
  progress: MotionValue<number>;
  range: [number, number];
}

const AnimatedChar: React.FC<CharProps> = ({ char, progress, range }) => {
  const opacity = useTransform(progress, range, [0.2, 1]);

  return (
    <span className="relative inline-block">
      <span className="opacity-0 select-none pointer-events-none">{char}</span>
      <motion.span
        style={{ opacity }}
        className="absolute left-0 top-0 select-text"
      >
        {char}
      </motion.span>
    </span>
  );
};

export const AnimatedText: React.FC<AnimatedTextProps> = ({ text, className = '' }) => {
  const containerRef = useRef<HTMLParagraphElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start 0.8', 'end 0.2'],
  });

  const totalChars = text.length;
  let charCounter = 0;

  // Split into words so that words never break across lines
  const words = text.split(' ');

  return (
    <p
      ref={containerRef}
      className={`relative inline-block w-full leading-relaxed break-normal [word-break:keep-all] [overflow-wrap:normal] text-pretty ${className}`}
    >
      {words.map((word, wordIndex) => {
        const wordChars = word.split('');
        const startIndex = charCounter;
        charCounter += word.length + 1; // +1 for space

        return (
          <React.Fragment key={wordIndex}>
            <span className="inline-block whitespace-nowrap">
              {wordChars.map((char, charIdx) => {
                const globalIdx = startIndex + charIdx;
                const start = globalIdx / totalChars;
                const end = Math.min(1, (globalIdx + 2) / totalChars);
                return (
                  <AnimatedChar
                    key={charIdx}
                    char={char}
                    progress={scrollYProgress}
                    range={[start, end]}
                  />
                );
              })}
            </span>
            {wordIndex < words.length - 1 && (
              <span className="inline-block whitespace-pre"> </span>
            )}
          </React.Fragment>
        );
      })}
    </p>
  );
};

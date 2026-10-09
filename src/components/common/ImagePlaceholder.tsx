import React from 'react';
import { LucideIcon, Image as ImageIcon } from 'lucide-react';

interface ImagePlaceholderProps {
  icon?: LucideIcon;
  label?: string;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  icon: Icon = ImageIcon,
  label = 'Image placeholder',
  className = '',
}) => {
  return (
    <div
      className={`relative w-full h-full flex flex-col items-center justify-center p-4 text-center select-none overflow-hidden ${className}`}
      style={{
        background: 'linear-gradient(135deg, #16181d 0%, #0C0C0C 100%)',
        border: '1px solid rgba(215, 226, 234, 0.12)',
      }}
    >
      <div className="flex flex-col items-center justify-center gap-2.5">
        <Icon className="w-10 h-10 sm:w-12 sm:h-12 text-[#D7E2EA] opacity-50 flex-shrink-0" />
        {label && (
          <span className="text-[11px] sm:text-xs font-mono uppercase text-[#D7E2EA] opacity-40 tracking-widest px-2">
            {label}
          </span>
        )}
      </div>
    </div>
  );
};

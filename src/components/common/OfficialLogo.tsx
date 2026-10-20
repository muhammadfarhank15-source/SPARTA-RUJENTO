import React from 'react';
import { useApp } from '../../context/AppContext';

interface OfficialLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const OfficialLogo: React.FC<OfficialLogoProps> = ({ className = '', size = 'md' }) => {
  const { uptSettings } = useApp();

  const sizeClasses = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10',
    lg: 'w-14 h-14',
    xl: 'w-20 h-20',
  };

  if (uptSettings.logoUrl) {
    return (
      <img
        src={uptSettings.logoUrl}
        alt="Logo Resmi UPT"
        className={`object-contain rounded-full shadow-sm ${sizeClasses[size]} ${className}`}
      />
    );
  }

  // Official SPARTA RUJENTO Styled Vector Emblem
  return (
    <div
      className={`relative inline-flex items-center justify-center rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-700 shadow-md border border-amber-300 text-white font-bold select-none ${sizeClasses[size]} ${className}`}
      title="Logo Resmi SPARTA RUJENTO"
    >
      <svg
        viewBox="0 0 100 100"
        fill="currentColor"
        className="w-4/5 h-4/5 drop-shadow"
      >
        {/* Outer Shield */}
        <path
          d="M50 5 L88 22 C88 55 72 82 50 95 C28 82 12 55 12 22 Z"
          fill="#0B192C"
          stroke="#FACC15"
          strokeWidth="3.5"
        />
        {/* Inner Golden Wings / Scale Symbol */}
        <circle cx="50" cy="40" r="13" fill="#FACC15" />
        <path
          d="M50 25 L50 62 M34 40 L66 40"
          stroke="#0B192C"
          strokeWidth="3.5"
          strokeLinecap="round"
        />
        {/* Bottom Laurel Branches */}
        <path
          d="M30 63 C40 73 60 73 70 63"
          fill="none"
          stroke="#FACC15"
          strokeWidth="2.5"
          strokeLinecap="round"
        />
        <circle cx="30" cy="63" r="2.5" fill="#FACC15" />
        <circle cx="70" cy="63" r="2.5" fill="#FACC15" />
        {/* Star Top */}
        <polygon
          points="50,11 53,17 60,17 55,22 57,28 50,24 43,28 45,22 40,17 47,17"
          fill="#FACC15"
        />
        {/* Emblem Text "SPARTA" Ribbon */}
        <rect x="24" y="73" width="52" height="13" rx="3" fill="#FACC15" />
        <text
          x="50"
          y="82.5"
          fill="#0B192C"
          fontSize="7.5"
          fontWeight="900"
          fontFamily="Montserrat, sans-serif"
          textAnchor="middle"
          letterSpacing="0.8"
        >
          SPARTA
        </text>
      </svg>
    </div>
  );
};

import React from "react";

const Bride: React.FC = () => {
  return (
    <svg
      viewBox="0 0 200 400"
      className="w-full h-full max-w-[180px] md:max-w-[220px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Lehenga skirt - Red */}
      <path
        d="M20 200 L0 400 L160 400 L140 200 Q80 180 20 200"
        fill="#C41E3A"
        className="drop-shadow-lg"
      />

      {/* Lehenga embroidery */}
      <path
        d="M10 350 Q80 370 150 350"
        stroke="hsl(var(--gold))"
        strokeWidth="3"
        fill="none"
      />
      <path
        d="M15 320 Q80 340 145 320"
        stroke="hsl(var(--gold))"
        strokeWidth="2"
        fill="none"
        opacity="0.7"
      />
      <path
        d="M20 290 Q80 310 140 290"
        stroke="hsl(var(--gold))"
        strokeWidth="2"
        fill="none"
        opacity="0.5"
      />

      {/* Lehenga border */}
      <path
        d="M0 395 L160 395"
        stroke="hsl(var(--gold))"
        strokeWidth="8"
        fill="none"
      />

      {/* Blouse - Red */}
      <path
        d="M40 130 L45 200 L115 200 L120 130 Q80 115 40 130"
        fill="#B91C35"
      />

      {/* Blouse embroidery */}
      <circle
        cx="80"
        cy="160"
        r="15"
        fill="none"
        stroke="hsl(var(--gold))"
        strokeWidth="1.5"
        opacity="0.6"
      />
      <circle
        cx="80"
        cy="160"
        r="8"
        fill="none"
        stroke="hsl(var(--gold))"
        strokeWidth="1"
        opacity="0.4"
      />

      {/* Face - turned left towards groom */}
      <ellipse cx="80" cy="85" rx="32" ry="38" fill="#D4A574" />

      {/* Hair */}
      <path
        d="M45 80 Q40 40 80 30 Q120 40 115 80 Q115 50 80 45 Q45 50 45 80"
        fill="#1a1a1a"
      />

      {/* Hair bun decoration */}
      <circle cx="80" cy="25" r="15" fill="#1a1a1a" />
      <circle cx="80" cy="25" r="8" fill="hsl(var(--gold))" opacity="0.8" />

      {/* Maang tikka */}
      <path d="M80 35 L80 55" stroke="hsl(var(--gold))" strokeWidth="2" />
      <circle cx="80" cy="58" r="5" fill="hsl(var(--gold))" />
      <circle cx="80" cy="58" r="2" fill="#C41E3A" />

      {/* Eyes - looking left towards groom */}
      <ellipse cx="65" cy="80" rx="5" ry="4" fill="#2d2d2d" />
      <ellipse cx="88" cy="80" rx="4" ry="3" fill="#2d2d2d" />

      {/* Eyelashes */}
      <path d="M58 77 L56 74" stroke="#1a1a1a" strokeWidth="1" />
      <path d="M65 76 L65 73" stroke="#1a1a1a" strokeWidth="1" />
      <path d="M72 77 L74 74" stroke="#1a1a1a" strokeWidth="1" />
      <path d="M82 78 L80 75" stroke="#1a1a1a" strokeWidth="1" />
      <path d="M88 77 L88 74" stroke="#1a1a1a" strokeWidth="1" />
      <path d="M94 78 L96 75" stroke="#1a1a1a" strokeWidth="1" />

      {/* Eyebrows */}
      <path
        d="M58 73 Q65 70 72 73"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M82 74 Q88 71 95 74"
        stroke="#1a1a1a"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Bindi */}
      <circle cx="76" cy="68" r="3" fill="#C41E3A" />

      {/* Nose - profile hint facing left */}
      <path
        d="M70 82 L65 94 L70 94"
        stroke="#B8956C"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Nose ring */}
      <circle cx="63" cy="94" r="3" fill="hsl(var(--gold))" />

      {/* Lips */}
      <path d="M65 105 Q75 112 85 107" fill="#E74C60" />
      <path d="M65 105 Q75 100 85 107" fill="#E74C60" opacity="0.7" />

      {/* Earrings - left ear visible */}
      <circle cx="45" cy="90" r="6" fill="hsl(var(--gold))" />
      <circle cx="45" cy="100" r="4" fill="hsl(var(--gold))" />
      <circle cx="45" cy="108" r="3" fill="#C41E3A" />

      {/* Dupatta/Veil - Red with gold */}
      <path
        d="M35 50 Q15 100 10 200 Q5 300 10 400"
        fill="#C41E3A"
        opacity="0.4"
      />
      <path
        d="M125 50 Q145 100 150 200 Q155 300 150 400"
        fill="#C41E3A"
        opacity="0.3"
      />

      {/* Dupatta over head */}
      <path
        d="M30 40 Q80 20 130 40 Q135 60 130 80 Q80 95 30 80 Q25 60 30 40"
        fill="#C41E3A"
        opacity="0.5"
      />
      <path
        d="M30 40 Q80 20 130 40 Q135 60 130 80 Q80 95 30 80 Q25 60 30 40"
        fill="none"
        stroke="hsl(var(--gold))"
        strokeWidth="1"
        opacity="0.5"
      />

      {/* Necklace */}
      <path
        d="M50 125 Q80 145 110 125"
        stroke="hsl(var(--gold))"
        strokeWidth="4"
        fill="none"
      />
      <circle cx="80" cy="140" r="6" fill="hsl(var(--gold))" />
      <circle cx="80" cy="140" r="3" fill="#C41E3A" />
      <circle cx="65" cy="135" r="4" fill="hsl(var(--gold))" />
      <circle cx="95" cy="135" r="4" fill="hsl(var(--gold))" />

      {/* Left arm (in front, reaching toward groom) */}
      <path
        d="M40 140 Q10 180 5 250"
        stroke="#D4A574"
        strokeWidth="16"
        strokeLinecap="round"
        fill="none"
      />

      {/* Right arm (behind body) */}
      <path
        d="M120 140 Q145 180 140 250"
        stroke="#D4A574"
        strokeWidth="14"
        strokeLinecap="round"
        fill="none"
      />

      {/* Bangles - left arm (visible, reaching out) */}
      <circle
        cx="8"
        cy="230"
        r="10"
        fill="none"
        stroke="hsl(var(--gold))"
        strokeWidth="3"
      />
      <circle
        cx="8"
        cy="220"
        r="10"
        fill="none"
        stroke="#C41E3A"
        strokeWidth="2"
      />
      <circle
        cx="8"
        cy="240"
        r="10"
        fill="none"
        stroke="hsl(var(--gold))"
        strokeWidth="2"
      />

      {/* Bangles - right arm */}
      <circle
        cx="140"
        cy="230"
        r="10"
        fill="none"
        stroke="hsl(var(--gold))"
        strokeWidth="3"
      />
      <circle
        cx="140"
        cy="220"
        r="10"
        fill="none"
        stroke="#C41E3A"
        strokeWidth="2"
      />
      <circle
        cx="140"
        cy="240"
        r="10"
        fill="none"
        stroke="hsl(var(--gold))"
        strokeWidth="2"
      />

      {/* Hands with mehndi hint */}
      <ellipse cx="5" cy="260" rx="12" ry="15" fill="#D4A574" />
      <ellipse cx="140" cy="260" rx="12" ry="15" fill="#D4A574" />
      <circle
        cx="5"
        cy="260"
        r="5"
        fill="none"
        stroke="#8B0000"
        strokeWidth="1"
        opacity="0.4"
      />
      <circle
        cx="140"
        cy="260"
        r="5"
        fill="none"
        stroke="#8B0000"
        strokeWidth="1"
        opacity="0.4"
      />
    </svg>
  );
};

export default Bride;

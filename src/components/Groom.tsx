import React from "react";

const Groom: React.FC = () => {
  return (
    <svg
      viewBox="0 0 200 400"
      className="w-full h-full max-w-[180px] md:max-w-[220px]"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Sherwani/Kurta - Black */}
      <path
        d="M70 150 L80 400 L150 400 L155 150 Q115 130 70 150"
        fill="#1a1a1a"
        className="drop-shadow-lg"
      />

      {/* Sherwani collar */}
      <path
        d="M80 150 L95 180 L115 155 L130 175 L150 150 Q115 135 80 150"
        fill="hsl(var(--gold))"
      />

      {/* Sherwani embroidery pattern */}
      <path
        d="M90 200 Q115 210 140 200 M90 250 Q115 260 140 250 M90 300 Q115 310 140 300"
        stroke="hsl(var(--gold))"
        strokeWidth="1.5"
        fill="none"
        opacity="0.6"
      />

      {/* Gold buttons */}
      <circle cx="115" cy="190" r="4" fill="hsl(var(--gold))" />
      <circle cx="115" cy="220" r="4" fill="hsl(var(--gold))" />
      <circle cx="115" cy="250" r="4" fill="hsl(var(--gold))" />

      {/* Face - turned right towards bride */}
      <ellipse cx="110" cy="90" rx="35" ry="40" fill="#D4A574" />

      {/* Hair */}
      <path
        d="M75 75 Q75 40 110 35 Q145 40 145 75 L140 85 Q110 70 80 85 Z"
        fill="#1a1a1a"
      />

      {/* Eyes - looking right */}
      <ellipse cx="100" cy="85" rx="4" ry="3" fill="#2d2d2d" />
      <ellipse cx="125" cy="85" rx="5" ry="3" fill="#2d2d2d" />

      {/* Eyebrows */}
      <path
        d="M94 78 Q100 75 106 78"
        stroke="#1a1a1a"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M118 76 Q125 73 132 76"
        stroke="#1a1a1a"
        strokeWidth="2"
        fill="none"
      />

      {/* Nose - profile hint */}
      <path
        d="M115 88 L120 100 L115 100"
        stroke="#B8956C"
        strokeWidth="1.5"
        fill="none"
      />

      {/* Smile */}
      <path
        d="M105 108 Q115 115 125 110"
        stroke="#8B6E4E"
        strokeWidth="2"
        fill="none"
      />

      {/* Beard shadow */}
      <path
        d="M80 100 Q80 130 110 135 Q140 130 140 100"
        fill="#1a1a1a"
        opacity="0.15"
      />

      {/* Turban/Pagri - Black */}
      <path
        d="M65 65 Q65 20 110 15 Q155 20 155 65 Q155 75 145 80 Q110 60 75 80 Q65 75 65 65"
        fill="#1a1a1a"
      />

      {/* Turban folds */}
      <path
        d="M70 50 Q90 40 110 45 Q130 40 150 50"
        stroke="#333"
        strokeWidth="2"
        fill="none"
      />
      <path
        d="M75 35 Q95 30 110 32 Q125 30 145 35"
        stroke="#333"
        strokeWidth="2"
        fill="none"
      />

      {/* Turban jewel (Kalgi) */}
      <circle cx="110" cy="30" r="8" fill="hsl(var(--gold))" />
      <circle cx="110" cy="30" r="4" fill="hsl(var(--cream))" />

      {/* Feather */}
      <path
        d="M110 22 Q105 5 110 0 Q115 5 110 22"
        fill="hsl(var(--gold-light))"
        opacity="0.8"
      />

      {/* Left arm (behind body) */}
      <path
        d="M70 160 Q50 200 55 260"
        stroke="#1a1a1a"
        strokeWidth="18"
        strokeLinecap="round"
        fill="none"
      />

      {/* Right arm (in front, reaching toward bride) */}
      <path
        d="M150 160 Q170 200 175 250"
        stroke="#1a1a1a"
        strokeWidth="20"
        strokeLinecap="round"
        fill="none"
      />

      {/* Hands */}
      <ellipse cx="55" cy="270" rx="12" ry="15" fill="#D4A574" />
      <ellipse cx="178" cy="258" rx="12" ry="15" fill="#D4A574" />

      {/* Dupatta/Stole - Gold */}
      <path
        d="M65 150 Q40 200 45 300"
        stroke="hsl(var(--gold))"
        strokeWidth="8"
        fill="none"
        opacity="0.8"
      />
    </svg>
  );
};

export default Groom;

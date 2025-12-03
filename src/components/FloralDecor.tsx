import React from "react";

interface FloralDecorProps {
  position: "top-left" | "top-right" | "bottom-left" | "bottom-right";
  className?: string;
}

const FloralDecor: React.FC<FloralDecorProps> = ({
  position,
  className = "",
}) => {
  const rotations: Record<string, string> = {
    "top-left": "rotate-0",
    "top-right": "rotate-90",
    "bottom-right": "rotate-180",
    "bottom-left": "-rotate-90",
  };

  const positions: Record<string, string> = {
    "top-left": "top-0 left-0",
    "top-right": "top-0 right-0",
    "bottom-left": "bottom-0 left-0",
    "bottom-right": "bottom-0 right-0",
  };

  return (
    <svg
      viewBox="0 0 150 150"
      className={`absolute w-24 h-24 md:w-36 md:h-36 opacity-20 ${positions[position]} ${rotations[position]} ${className}`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Paisley motif */}
      <path
        d="M20 80 Q10 40 50 20 Q90 0 100 40 Q110 80 70 100 Q30 120 20 80"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        className="text-primary"
      />
      <path
        d="M30 75 Q25 50 55 35 Q80 20 85 45 Q90 70 60 85 Q35 95 30 75"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="text-primary"
        opacity="0.7"
      />

      {/* Small flower */}
      <circle
        cx="50"
        cy="50"
        r="8"
        fill="currentColor"
        className="text-primary"
        opacity="0.3"
      />
      <circle
        cx="50"
        cy="50"
        r="4"
        fill="currentColor"
        className="text-secondary"
        opacity="0.5"
      />

      {/* Decorative dots */}
      <circle
        cx="70"
        cy="30"
        r="2"
        fill="currentColor"
        className="text-primary"
        opacity="0.5"
      />
      <circle
        cx="85"
        cy="50"
        r="2"
        fill="currentColor"
        className="text-primary"
        opacity="0.5"
      />
      <circle
        cx="75"
        cy="70"
        r="2"
        fill="currentColor"
        className="text-primary"
        opacity="0.5"
      />

      {/* Vine/leaf pattern */}
      <path
        d="M10 90 Q30 85 40 100 Q50 115 70 110"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
        className="text-primary"
        opacity="0.5"
      />

      {/* Small leaves */}
      <ellipse
        cx="25"
        cy="92"
        rx="5"
        ry="3"
        fill="currentColor"
        className="text-primary"
        opacity="0.3"
        transform="rotate(-20 25 92)"
      />
      <ellipse
        cx="55"
        cy="108"
        rx="5"
        ry="3"
        fill="currentColor"
        className="text-primary"
        opacity="0.3"
        transform="rotate(20 55 108)"
      />
    </svg>
  );
};

export default FloralDecor;

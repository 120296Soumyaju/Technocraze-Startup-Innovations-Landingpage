import type React from 'react';
import { cn } from '@/lib/utils'; // Import cn for conditional classes

// Original colors
const bulbGlassColor = "#A0E0D0"; // Light teal/green
const brainColor = "#FA8072"; // Orange/Coral
const bulbBaseColor = "#808080"; // Gray
const tsiTextColor = "#FA8072"; // Coral/Salmon
const taglineColor = "#20B2AA"; // Teal


export function Logo(props: React.SVGProps<SVGSVGElement>) {
  const { className, ...rest } = props; // Destructure className

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 250 60" // Keep original viewBox
      width="250" // Increased width
      height="60" // Increased height (maintaining aspect ratio 250/60)
      aria-label="Technocraze Startup Innovations Logo"
      className={cn(className)} // Allow overriding class
      {...rest} // Pass other props
    >
      {/* Lightbulb Icon Group */}
      <g transform="translate(10, 5)">
        {/* Bulb Glass */}
        <ellipse cx="25" cy="20" rx="18" ry="20" fill={bulbGlassColor + '33'} stroke={bulbGlassColor} strokeWidth="1"/>
        {/* Brain (Simplified Path) */}
        <path
          d="M 15,25 C 10,15 20,10 25,15 C 30,10 40,15 35,25 C 40,30 30,35 25,30 C 20,35 10,30 15,25 Z M 18,28 Q 25 24 32 28 M 20,32 Q 25 29 30 32"
          fill={brainColor}
          stroke={brainColor}
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        {/* Bulb Base */}
        <rect x="17" y="39" width="16" height="8" fill={bulbBaseColor} />
        {/* Base Lines */}
        <line x1="17" y1="42" x2="33" y2="42" stroke="#FFFFFF" strokeWidth="1"/>
        <line x1="17" y1="45" x2="33" y2="45" stroke="#FFFFFF" strokeWidth="1"/>
      </g>

      {/* Text Group */}
      <g transform="translate(65, 0)">
        {/* TSI Text */}
        <text
          x="0"
          y="35" // Adjusted vertical position
          fontFamily="Arial, sans-serif"
          fontSize="36" // Adjusted size
          fontWeight="bold"
          fill={tsiTextColor}
          letterSpacing="2" // Add some letter spacing
        >
          TSI
        </text>

        {/* Tagline Text */}
        <text
          x="0"
          y="50" // Positioned below TSI
          fontFamily="Arial, sans-serif"
          fontSize="10" // Adjusted size
          fontWeight="bold" // Make tagline bold as in image
          fill={taglineColor}
        >
          Technocraze Startup Innovations
        </text>
      </g>
    </svg>
  );
}

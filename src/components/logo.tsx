import type React from 'react';
import { cn } from '@/lib/utils'; // Import cn for conditional classes

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  const { className, ...rest } = props; // Destructure className

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 200 50" // Adjusted viewBox for new aspect ratio
      width="150" // Default width, can be overridden by className
      height="37.5" // Default height, maintaining aspect ratio
      aria-label="Technocraze Startup Innovations Logo"
      className={cn("fill-current", className)} // Apply base fill and allow overriding class
      {...rest} // Pass other props
    >
      <defs>
         {/* Define gradients or filters if needed, keeping simple for now */}
         <linearGradient id="tsiGradient" x1="0%" y1="0%" x2="100%" y2="0%">
           <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
           <stop offset="100%" style={{ stopColor: 'hsl(15, 80%, 60%)', stopOpacity: 1 }} /> {/* Approximation of pinkish color */}
         </linearGradient>
      </defs>

      {/* Simplified Lightbulb Icon */}
      <g transform="translate(10, 0)">
        {/* Bulb */}
        <circle cx="20" cy="20" r="15" fill="hsl(var(--primary) / 0.1)" stroke="hsl(var(--primary))" strokeWidth="1"/>
        {/* Base */}
        <rect x="12" y="34" width="16" height="8" fill="hsl(var(--muted))" />
        <line x1="12" y1="37" x2="28" y2="37" stroke="hsl(var(--muted-foreground))" strokeWidth="1"/>
        <line x1="12" y1="40" x2="28" y2="40" stroke="hsl(var(--muted-foreground))" strokeWidth="1"/>
        {/* Simplified Brain/Filament (Placeholder) */}
        <path d="M15 20 Q 20 15, 25 20 T 15 20" stroke="hsl(var(--primary))" strokeWidth="1" fill="hsl(var(--primary) / 0.3)" />
         <path d="M16 25 Q 20 22, 24 25" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="transparent" />
          <path d="M17 28 Q 20 26, 23 28" stroke="hsl(var(--primary))" strokeWidth="0.5" fill="transparent" />
      </g>

      {/* TSI Text */}
      <text
        x="50" // Positioned next to the bulb
        y="30" // Vertically centered relative to the bulb base
        fontFamily="Arial, sans-serif" // Using a common font
        fontSize="28" // Larger size for TSI
        fontWeight="bold"
        fill="url(#tsiGradient)" // Using gradient for TSI color
        // fill="hsl(var(--primary))" // Fallback or alternative primary color
      >
        TSI
      </text>

      {/* Tagline Text */}
      <text
        x="50" // Aligned with TSI start
        y="45" // Positioned below TSI
        fontFamily="Arial, sans-serif" // Common font
        fontSize="9" // Smaller size for tagline
        fill="hsl(var(--accent))" // Using accent color for tagline
      >
        Technocraze Startup Innovations
      </text>
    </svg>
  );
}

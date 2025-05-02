import type React from 'react';

export function Logo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 100 20"
      width="150"
      height="30"
      aria-label="Technocraze Innovations Logo"
      {...props}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style={{ stopColor: 'hsl(var(--primary))', stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: 'hsl(var(--accent))', stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      {/* Simple abstract shape - Placeholder */}
      <path d="M10 1 L15 19 L5 19 Z" fill="url(#grad1)" />
      <text
        x="20"
        y="15"
        fontFamily="Arial, sans-serif"
        fontSize="14"
        fontWeight="bold"
        fill="hsl(var(--foreground))"
      >
        Technocraze
      </text>
    </svg>
  );
}

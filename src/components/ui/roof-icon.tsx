import React from "react";

export default function RoofIcon({ size = 44 }: { size?: number }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <rect x="1" y="1" width="46" height="46" rx="10" fill="#0a0a0a" stroke="#10B981" strokeOpacity="0.35" strokeWidth="1.5" />
      <path d="M8 27L24 12L40 27" stroke="#10B981" strokeWidth="3.2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12 24.5V35C12 35.5523 12.4477 36 13 36H35C35.5523 36 36 35.5523 36 35V24.5" stroke="#D4AF37" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19.5 36V29C19.5 28.4477 19.9477 28 20.5 28H27.5C28.0523 28 28.5 28.4477 28.5 29V36" stroke="#D4AF37" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

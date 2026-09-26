import React from 'react';

export function TechIcon({ name, className = "tech-svg-icon" }) {
  switch (name) {
    case 'html5':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none">
          <path d="M71 460L30 0h452l-41 460-201 52-200-52z" fill="#E44D26"/>
          <path d="M256 472l164-42.5 33-388.5H256v431z" fill="#F16529"/>
          <path d="M109 95.5h294l-5.5 61H173l5.5 61.5h164l-11 127-75.5 21-75.5-21-5.5-62H120l9 105.5 127 35.5 127-35.5 17.5-199H103.5l5.5-89z" fill="#EBEBEB"/>
          <path d="M256 95.5v61h75l-7 79h-68v61.5l75.5-21 11-127h-86.5V95.5z" fill="#FFFFFF"/>
        </svg>
      );
    case 'css3':
      return (
        <svg className={className} viewBox="0 0 512 512" fill="none">
          <path d="M71 460L30 0h452l-41 460-201 52-200-52z" fill="#1572B6"/>
          <path d="M256 472l164-42.5 33-388.5H256v431z" fill="#33A9DC"/>
          <path d="M109 95.5h294l-5.5 61H173l5.5 61.5h164l-11 127-75.5 21-75.5-21-5.5-62H120l9 105.5 127 35.5 127-35.5 17.5-199H103.5l5.5-89z" fill="#EBEBEB"/>
          <path d="M256 95.5v61h75l-7 79h-68v61.5l75.5-21 11-127h-86.5V95.5z" fill="#FFFFFF"/>
        </svg>
      );
    case 'javascript':
      return (
        <svg className={className} viewBox="0 0 630 630" fill="none">
          <rect width="630" height="630" rx="80" fill="#F7DF1E"/>
          <path d="M165.5 529c-18.5-7-28-19.5-34.5-33.5l36.5-21c5.5 9.5 12.5 16.5 24 16.5 11.5 0 19-5 19-24.5V293h45.5v173.5c0 47.5-27.5 73.5-70.5 73.5-7.5 0-14.5-.5-20-1.5zM388 491.5c11.5 18.5 28.5 31 56 31 23.5 0 38.5-11.5 38.5-27.5 0-19-15.5-26-41.5-37.5l-14-6c-40.5-17.5-67.5-39.5-67.5-86 0-43 33-75.5 84.5-75.5 36.5 0 63 15 80.5 45.5l-33.5 21.5c-9.5-17-22.5-24.5-47-24.5-20.5 0-33 11-33 24.5 0 16.5 11 23.5 35 34l14 6c48 20.5 74.5 42.5 74.5 90 0 51.5-40.5 79.5-91 79.5-48 0-79-24-95.5-56.5l30.5-18.5z" fill="#000000"/>
        </svg>
      );
    case 'react':
      return (
        <svg className={className} viewBox="-11.5 -10.23174 23 20.46348" fill="none">
          <circle cx="0" cy="0" r="2.05" fill="#61DAFB"/>
          <g stroke="#61DAFB" strokeWidth="1" fill="none">
            <ellipse rx="11" ry="4.2"/>
            <ellipse rx="11" ry="4.2" transform="rotate(60)"/>
            <ellipse rx="11" ry="4.2" transform="rotate(120)"/>
          </g>
        </svg>
      );
    case 'react-native':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="5" y="2" width="14" height="20" rx="3" stroke="#61DAFB" strokeWidth="1.5"/>
          <circle cx="12" cy="18" r="1" fill="#61DAFB"/>
          <circle cx="12" cy="10" r="1.5" fill="#61DAFB"/>
          <ellipse cx="12" cy="10" rx="5" ry="2" stroke="#61DAFB" strokeWidth="1"/>
          <ellipse cx="12" cy="10" rx="5" ry="2" transform="rotate(60 12 10)" stroke="#61DAFB" strokeWidth="1"/>
          <ellipse cx="12" cy="10" rx="5" ry="2" transform="rotate(120 12 10)" stroke="#61DAFB" strokeWidth="1"/>
        </svg>
      );
    case 'nextjs':
      return (
        <svg className={className} viewBox="0 0 180 180" fill="none">
          <mask id="next-mask" mask-type="alpha" maskUnits="userSpaceOnUse" x="0" y="0" width="180" height="180">
            <circle cx="90" cy="90" r="90" fill="black"/>
          </mask>
          <g mask="url(#next-mask)">
            <circle cx="90" cy="90" r="90" fill="#000000" stroke="#FFFFFF" strokeWidth="6"/>
            <path d="M149.508 157.52L69.142 54H54V125.97H66.082V69.378L139.99 164.88C143.342 162.613 146.524 160.15 149.508 157.52Z" fill="url(#paint0_linear)"/>
            <rect x="115" y="54" width="12" height="72" fill="url(#paint1_linear)"/>
          </g>
          <defs>
            <linearGradient id="paint0_linear" x1="109" y1="116.5" x2="144.5" y2="160.5" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
            <linearGradient id="paint1_linear" x1="121" y1="54" x2="120.799" y2="106.875" gradientUnits="userSpaceOnUse">
              <stop stopColor="white"/>
              <stop offset="1" stopColor="white" stopOpacity="0"/>
            </linearGradient>
          </defs>
        </svg>
      );
    case 'tailwind':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.336 6.182 14.975 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.336 13.382 8.975 12 6.001 12z" fill="#38BDF8"/>
        </svg>
      );
    case 'bootstrap':
      return (
        <svg className={className} viewBox="0 0 16 16" fill="none">
          <rect width="16" height="16" rx="3.5" fill="#7952B3"/>
          <path d="M4 3h4.688c1.378 0 2.27.356 2.766.974.453.565.626 1.29.626 2.115 0 1.096-.464 1.93-1.374 2.376v.078c1.23.407 1.894 1.348 1.894 2.663 0 .973-.255 1.768-.83 2.32-.63.606-1.597.874-2.87.874H4V3zm2.188 4.298h2.09c.645 0 1.13-.133 1.396-.414.24-.253.355-.618.355-1.077 0-.472-.124-.836-.372-1.082-.266-.263-.73-.39-1.408-.39H6.188v2.963zm0 2.193v3.315h2.392c.69 0 1.205-.143 1.488-.426.27-.27.387-.665.387-1.193 0-.528-.117-.923-.387-1.197-.283-.284-.8-.499-1.517-.499H6.188z" fill="#FFFFFF"/>
        </svg>
      );
    case 'nodejs':
      return (
        <svg className={className} viewBox="0 0 256 289" fill="none">
          <path d="M128 0L8 69.3v150.4L128 289l120-69.3V69.3L128 0z" fill="#339933"/>
          <path d="M128 15.3l106.7 61.6v135.2L128 273.7 21.3 212.1V76.9L128 15.3z" fill="#66CC33"/>
          <path d="M128 144.5l-64-37v74l64 37 64-37v-74l-64 37z" fill="#FFFFFF"/>
        </svg>
      );
    case 'php':
      return (
        <svg className={className} viewBox="0 0 256 154" fill="none">
          <ellipse cx="128" cy="77" rx="128" ry="77" fill="#777BB4"/>
          <path d="M68.5 40.5c-4.5 0-8.2 3.6-8.2 8.1 0 1.2.3 2.4.8 3.4L44.5 86.8c-.8 1.8-.4 3.9 1.1 5.3 1.5 1.4 3.6 1.8 5.5 1.1l20.4-7.5c1.6-.6 2.8-1.9 3.3-3.6l4-14.7h11.2c16 0 27.8-10.7 27.8-26.9 0-16.2-11.8-20-29.3-20H68.5zm4.8 17.5h15.2c6.9 0 11.2 3.4 11.2 9.5 0 6-4.3 9.4-11.2 9.4H69.4l3.9-18.9zM187.5 40.5c-4.5 0-8.2 3.6-8.2 8.1 0 1.2.3 2.4.8 3.4L163.5 86.8c-.8 1.8-.4 3.9 1.1 5.3 1.5 1.4 3.6 1.8 5.5 1.1l20.4-7.5c1.6-.6 2.8-1.9 3.3-3.6l4-14.7h11.2c16 0 27.8-10.7 27.8-26.9 0-16.2-11.8-20-29.3-20h-19.1zm4.8 17.5h15.2c6.9 0 11.2 3.4 11.2 9.5 0 6-4.3 9.4-11.2 9.4h-18.9l3.9-18.9zM128 40.5h17.5l-19 69.5h-17.5L128 40.5z" fill="#FFFFFF"/>
        </svg>
      );
    case 'java':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M4 19c4.5 1.5 11.5 1.5 16 0" stroke="#EA2D2E" strokeWidth="2" strokeLinecap="round"/>
          <path d="M6 22c3.5 1 8.5 1 12 0" stroke="#5382A1" strokeWidth="2" strokeLinecap="round"/>
          <path d="M12 2c2 2-2 4 0 6s2 4 0 6" stroke="#EA2D2E" strokeWidth="1.7" strokeLinecap="round"/>
          <path d="M8 4c1.5 1.5-1.5 3 0 4.5s1.5 3 0 4.5" stroke="#EA2D2E" strokeWidth="1.5" strokeLinecap="round"/>
          <path d="M16 4c1.5 1.5-1.5 3 0 4.5s1.5 3 0 4.5" stroke="#EA2D2E" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'database':
    case 'sql':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="5" rx="9" ry="3" stroke="#00758F" strokeWidth="2" fill="#00758F" fillOpacity="0.2"/>
          <path d="M3 5v6c0 1.66 4.03 3 9 3s9-1.34 9-3V5" stroke="#00758F" strokeWidth="2"/>
          <path d="M3 11v6c0 1.66 4.03 3 9 3s9-1.34 9-3v-6" stroke="#00758F" strokeWidth="2"/>
        </svg>
      );
    case 'api':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="2" y="6" width="20" height="12" rx="3" stroke="#38BDF8" strokeWidth="2" fill="#38BDF8" fillOpacity="0.15"/>
          <path d="M6 14l3-6 3 6M7.2 12.5h3.6M15 8h2.5c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H15v3" stroke="#38BDF8" strokeWidth="1.7" strokeLinecap="round"/>
        </svg>
      );
    case 'integration':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="6" cy="6" r="3" stroke="#F59E0B" strokeWidth="2" fill="#F59E0B" fillOpacity="0.2"/>
          <circle cx="18" cy="6" r="3" stroke="#F59E0B" strokeWidth="2" fill="#F59E0B" fillOpacity="0.2"/>
          <circle cx="12" cy="18" r="3" stroke="#F59E0B" strokeWidth="2" fill="#F59E0B" fillOpacity="0.2"/>
          <path d="M8.5 7.5l7 0M7.5 8.5l3 7M16.5 8.5l-3 7" stroke="#F59E0B" strokeWidth="1.7" strokeLinecap="round"/>
        </svg>
      );
    case 'paypal':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M7 3h7.5c3.5 0 5.5 2 5 5-.6 3.5-3 5.5-6.5 5.5H9.5L7.8 21H4L7 3z" fill="#003087"/>
          <path d="M9.5 8h6c2.5 0 4.2 1.4 3.8 3.8-.5 3-2.6 4.7-5.5 4.7H11.5L10 22H6.5l3-14z" fill="#0079C1"/>
        </svg>
      );
    case 'figma':
      return (
        <svg className={className} viewBox="0 0 38 57" fill="none">
          <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
          <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
          <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
          <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
          <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
        </svg>
      );
    case 'canva':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="11" fill="url(#canva-grad)"/>
          <path d="M13.5 8c-3 0-5 2.5-5 5.5s1.8 5 4.8 5c1.8 0 3-.7 3.8-1.5l-1-1.2c-.6.6-1.5 1.1-2.6 1.1-1.8 0-3-1.4-3-3.4s1.3-3.7 3.2-3.7c1 0 1.8.4 2.4 1l1-1.2C16.3 8.7 15 8 13.5 8z" fill="#FFFFFF"/>
          <defs>
            <linearGradient id="canva-grad" x1="2" y1="2" x2="22" y2="22" gradientUnits="userSpaceOnUse">
              <stop stopColor="#00C4CC"/>
              <stop offset="1" stopColor="#7D2AE8"/>
            </linearGradient>
          </defs>
        </svg>
      );
    case 'wireframe':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="3" y="3" width="18" height="18" rx="2" stroke="#C5A059" strokeWidth="1.8"/>
          <path d="M3 9h18M9 9v12" stroke="#C5A059" strokeWidth="1.8"/>
          <rect x="12" y="12" width="6" height="3" rx="1" fill="#C5A059" fillOpacity="0.4"/>
        </svg>
      );
    case 'prototype':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect x="6" y="2" width="12" height="20" rx="3" stroke="#EC4899" strokeWidth="1.8"/>
          <circle cx="12" cy="18" r="1" fill="#EC4899"/>
          <path d="M9 7h6M9 10h4" stroke="#EC4899" strokeWidth="1.5" strokeLinecap="round"/>
        </svg>
      );
    case 'git':
    case 'github':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.1-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0 0 12 2z" fill="#F05032"/>
        </svg>
      );
    case 'vscode':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M17.5 2.5L7.2 10.5 3 7.3 1 8.5v7l2 1.2 4.2-3.2 10.3 8 4.5-2.2V4.7L17.5 2.5zM17.5 7v10l-6.8-5 6.8-5z" fill="#007ACC"/>
        </svg>
      );
    case 'linux':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <ellipse cx="12" cy="13" rx="7" ry="8" fill="#F0F0F0" stroke="#333333" strokeWidth="1.5"/>
          <circle cx="12" cy="6" r="4" fill="#333333"/>
          <circle cx="10.5" cy="5.5" r="1" fill="#FFFFFF"/>
          <circle cx="13.5" cy="5.5" r="1" fill="#FFFFFF"/>
          <circle cx="10.5" cy="5.5" r="0.5" fill="#000000"/>
          <circle cx="13.5" cy="5.5" r="0.5" fill="#000000"/>
          <path d="M11 7l1 1.5 1-1.5z" fill="#FFA500"/>
          <ellipse cx="7" cy="20" rx="3.5" ry="1.5" fill="#FFA500"/>
          <ellipse cx="17" cy="20" rx="3.5" ry="1.5" fill="#FFA500"/>
        </svg>
      );
    case 'cisco':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M3 13v-2M6 16V8M9 19V5M12 16V8M15 19V5M18 16V8M21 13v-2" stroke="#049FD9" strokeWidth="2.5" strokeLinecap="round"/>
        </svg>
      );
    case 'capcut':
      return (
        <svg className={className} viewBox="0 0 48 48" fill="none">
          <rect width="48" height="48" rx="10" fill="#121212"/>
          <path d="M7 11h14.5l-9.5 13 9.5 13H7l9.5-13L7 11z" fill="#FFFFFF"/>
          <path d="M41 11H26.5l9.5 13-9.5 13H41l-9.5-13L41 11z" fill="#FFFFFF"/>
        </svg>
      );
    case 'laravel':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 7l10 5 10-5-10-5z" fill="#FF2D20"/>
          <path d="M2 17l10 5 10-5M2 12l10 5 10-5" stroke="#FF2D20" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    case 'supabase':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M13.5 2L3 14.5h7.5L9.5 22 20 9.5h-7.5L13.5 2z" fill="#3ECF8E"/>
        </svg>
      );
    case 'postgresql':
    case 'postgres':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 3C7.58 3 4 6.58 4 11c0 2.21.9 4.21 2.35 5.65L7 21h10l.65-4.35C19.1 15.21 20 13.21 20 11c0-4.42-3.58-8-8-8zm-2 10.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zm4 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" fill="#336791"/>
        </svg>
      );
    case 'aspnet':
    case 'dotnet':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#512BD4"/>
          <text x="12" y="16" fill="#FFFFFF" fontSize="8.5" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">.NET</text>
        </svg>
      );
    case 'vbnet':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#0078D7"/>
          <text x="12" y="16" fill="#FFFFFF" fontSize="8.5" fontWeight="800" textAnchor="middle" fontFamily="sans-serif">.NET</text>
        </svg>
      );
    case 'csharp':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <rect width="24" height="24" rx="5" fill="#9B4F96"/>
          <text x="12" y="16.5" fill="#FFFFFF" fontSize="10" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">C#</text>
        </svg>
      );
    case 'c':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="10" fill="#00599C"/>
          <text x="12" y="16.5" fill="#FFFFFF" fontSize="11" fontWeight="900" textAnchor="middle" fontFamily="sans-serif">C</text>
        </svg>
      );
    case 'vite':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M21.5 3.5l-9.5 17-2.5-4.5L18.5 4.5h3z" fill="#BD34FE"/>
          <path d="M12 20.5L2.5 3.5h3l6.5 11.5L18.5 4.5h3L12 20.5z" fill="#41D1FF"/>
          <path d="M11.5 7.5L8 14h3.5l-1.5 5 5.5-7h-3.5l2-4.5h-2.5z" fill="#FFD62E"/>
        </svg>
      );
    case 'netlify':
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <path d="M12 2L2 12l10 10 10-10L12 2zm0 3.5l6.5 6.5L12 18.5 5.5 12 12 5.5z" fill="#00C7B7"/>
        </svg>
      );
    default:
      return (
        <svg className={className} viewBox="0 0 24 24" fill="none">
          <circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="2"/>
          <path d="M12 7v5l3 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        </svg>
      );
  }
}

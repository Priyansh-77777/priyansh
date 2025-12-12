import { Job, MetricData, NavigationItem, WorkItem } from './types';
import { LayoutDashboard, Zap, Brain, TrendingUp } from 'lucide-react';

// Helper to generate sophisticated embedded SVG Game Covers
const createGameCover = (title: string, subtitle: string, type: 'action' | 'sport' | 'casual' | 'anime' | 'strategy', colors: string[]) => {
  let bgPattern = '';
  let overlay = '';
  let textStyle = '';
  
  // Define styles based on genre
  if (type === 'action') {
    // Commando style: Split lighting, grunge
    bgPattern = `
      <defs>
        <linearGradient id="grad-${title}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors[0]};stop-opacity:1" />
          <stop offset="50%" style="stop-color:#0f172a;stop-opacity:1" />
          <stop offset="100%" style="stop-color:${colors[1]};stop-opacity:1" />
        </linearGradient>
        <filter id="noise-${title}">
          <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch"/>
          <feColorMatrix type="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 0.1 0"/>
        </filter>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad-${title})" />
      <rect width="100%" height="100%" filter="url(#noise-${title})" opacity="0.4"/>
    `;
    textStyle = `font-family="Impact, sans-serif" font-weight="900" letter-spacing="2" text-transform="uppercase" filter="drop-shadow(3px 3px 0px rgba(0,0,0,0.5))"`;
  } else if (type === 'sport') {
    // Sports style: Dynamic lines, energy
    bgPattern = `
      <defs>
        <linearGradient id="grad-${title}" x1="0%" y1="0%" x2="100%" y2="0%">
          <stop offset="0%" style="stop-color:${colors[0]};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${colors[1]};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad-${title})" />
      <path d="M-50 400 L500 200 L500 220 L-50 420 Z" fill="white" opacity="0.1"/>
      <path d="M-50 350 L500 150 L500 160 L-50 360 Z" fill="white" opacity="0.1"/>
      <circle cx="50%" cy="30%" r="100" fill="white" opacity="0.1" filter="blur(20px)"/>
    `;
    textStyle = `font-family="Arial, sans-serif" font-weight="900" font-style="italic" letter-spacing="-1" text-transform="uppercase"`;
  } else if (type === 'casual') {
    // Snackula style: Spooky moon, gradient
    bgPattern = `
      <defs>
        <linearGradient id="grad-${title}" x1="0%" y1="100%" x2="0%" y2="0%">
          <stop offset="0%" style="stop-color:${colors[0]};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${colors[1]};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad-${title})" />
      <circle cx="50%" cy="40%" r="120" fill="#fee2e2" opacity="0.15" />
      <path d="M0 500 L100 450 L200 480 L300 440 L400 500 Z" fill="#000" opacity="0.2"/>
    `;
    textStyle = `font-family="Georgia, serif" font-weight="bold" letter-spacing="1"`;
  } else if (type === 'anime') {
    // RedFlag style: Soft gradient, sparkles
    bgPattern = `
      <defs>
        <linearGradient id="grad-${title}" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style="stop-color:${colors[0]};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${colors[1]};stop-opacity:1" />
        </linearGradient>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad-${title})" />
      <circle cx="20%" cy="20%" r="5" fill="white" opacity="0.6"/>
      <circle cx="80%" cy="30%" r="8" fill="white" opacity="0.4"/>
      <circle cx="40%" cy="80%" r="6" fill="white" opacity="0.5"/>
      <rect x="0" y="0" width="100%" height="100%" fill="url(#grad-${title})" opacity="0.8" style="mix-blend-mode: overlay;" />
    `;
    textStyle = `font-family="Comic Sans MS, cursive, sans-serif" font-weight="bold" letter-spacing="0" fill="white" stroke="${colors[1]}" stroke-width="1"`;
  } else if (type === 'strategy') {
      bgPattern = `
      <defs>
        <radialGradient id="grad-${title}" cx="50%" cy="50%" r="70%">
          <stop offset="0%" style="stop-color:${colors[0]};stop-opacity:1" />
          <stop offset="100%" style="stop-color:${colors[1]};stop-opacity:1" />
        </radialGradient>
        <pattern id="grid-${title}" width="30" height="30" patternUnits="userSpaceOnUse">
          <path d="M 30 0 L 0 0 0 30" fill="none" stroke="white" stroke-width="1" opacity="0.1"/>
        </pattern>
      </defs>
      <rect width="100%" height="100%" fill="url(#grad-${title})" />
      <rect width="100%" height="100%" fill="url(#grid-${title})" />
    `;
    textStyle = `font-family="Courier New, monospace" font-weight="bold" letter-spacing="2" text-transform="uppercase"`;
  }

  const svg = `
  <svg width="600" height="750" xmlns="http://www.w3.org/2000/svg">
    ${bgPattern}
    <text x="50%" y="45%" fill="white" text-anchor="middle" dy="0" font-size="48" ${textStyle}>${title}</text>
    <rect x="15%" y="49%" width="70%" height="2" fill="white" opacity="0.5"/>
    <text x="50%" y="54%" font-family="sans-serif" font-size="18" fill="rgba(255,255,255,0.9)" text-anchor="middle" letter-spacing="3" font-weight="600">${subtitle.toUpperCase()}</text>
  </svg>
  `;
  return `data:image/svg+xml;base64,${btoa(svg)}`;
};

export const NAV_ITEMS: NavigationItem[] = [
  { label: 'Impact', id: 'impact' },
  { label: 'Works', id: 'works' },
  { label: 'Experience', id: 'experience' },
  { label: 'Skills', id: 'skills' },
  { label: 'Contact', id: 'contact' },
];

export const HERO_DATA = {
  name: "Priyansh Shekhar",
  title: "Product Manager",
  tagline: "Building AI-Native Products & Scaling 0→1 Execution",
  summary: "Product Manager with a track record of leading 100+ person cross-functional teams and shipping AI-native titles. Expert in high-velocity experimentation, improving D1/D7 retention, and building fully AI-driven content pipelines.",
  contact: {
    phone: "+91 746 403 8099",
    email: "priyansh.shekhar19@gmail.com",
    location: "Bengaluru, India"
  }
};

export const FEATURED_WORKS: WorkItem[] = [
  { 
    title: "Snackula", 
    category: "AI-Native Game", 
    tags: ["GenAI Pipeline", "Casual", "0→1"],
    // Red gradient to match the vampire moon vibe
    image: createGameCover("SNACKULA", "Casual Vampire Sim", "casual", ["#7f1d1d", "#ef4444"]) 
  },
  { 
    title: "RedFlag.exe", 
    category: "Interactive Narrative", 
    tags: ["AI-Driven", "Simulation", "Mobile"],
    // Pink/Blue soft gradient to match anime aesthetic
    image: createGameCover("RedFlag.exe", "Narrative Sim", "anime", ["#ec4899", "#3b82f6"]) 
  },
  { 
    title: "Commando Fire", 
    category: "Action Shooter", 
    tags: ["Multiplayer", "Real-time", "Live Ops"],
    // Blue/Red split lighting 
    image: createGameCover("COMMANDO", "Fire FPS", "action", ["#1e3a8a", "#991b1b"]) 
  },
  { 
    title: "Cricket Legends", 
    category: "Sports Strategy", 
    tags: ["PvP", "Economy Design", "Sports"],
    // Deep blue/cyan futuristic sport
    image: createGameCover("LEGENDS", "Cricket Strategy", "sport", ["#172554", "#06b6d4"]) 
  },
  { 
    title: "Pro Football", 
    category: "Sports Action", 
    tags: ["Multiplayer", "Physics", "Growth"],
    // Teal/Orange energetic contrast
    image: createGameCover("FOOTBALL", "Pro Multiplayer", "sport", ["#c2410c", "#0f766e"]) 
  },
  { 
    title: "Cricket Multi", 
    category: "Gaming Ecosystem", 
    tags: ["Platform", "Social", "Scale"],
    // Red/Yellow versus colors
    image: createGameCover("CRICKET", "Multiplayer", "strategy", ["#b91c1c", "#facc15"]) 
  }
];

export const EXPERIENCE_DATA: Job[] = [
  {
    company: "Terra",
    role: "Product Manager",
    period: "Aug 2024 – Dec 2025",
    description: "Leading 100+ cross-functional members to ship AI-native games and scale production velocity.",
    tags: ["AI-Native", "Leadership", "0→1"],
    achievements: [
      "Scaled production velocity 12× (from 5 games/12 weeks to 5 games/week) by optimizing pipelines.",
      "Product Owner for AI-native hits 'Crazy Girlfriend' & 'Snakula'.",
      "Built an AI-generated micro-drama pipeline enabling automated narrative A/B testing.",
      "Owned PRDs, specs, and metrics for products with 4,000+ DAU."
    ],
    metrics: [
      { label: "D1 Retention", value: "+23%", detail: "35% → 43%" },
      { label: "FTUE Completion", value: "+73%", detail: "45% → 78%" },
      { label: "Session Length", value: "+50%", detail: "6m → 9m" }
    ]
  },
  {
    company: "Studio Sirah",
    role: "Junior Product Manager",
    period: "May 2023 – Feb 2024",
    description: "Focused on monetization optimization and user research to drive economy tuning.",
    tags: ["Monetization", "User Research"],
    achievements: [
      "Executed pricing & SKU A/B tests resulting in a 14% conversion uplift.",
      "Conducted 50+ user interviews to unlock key onboarding and store insights.",
      "Reduced purchase funnel drop-off by 11% through UI/UX optimization.",
      "Improved economy tuning metrics by 8–12%."
    ]
  },
  {
    company: "Level Supermind",
    role: "Product Management Intern",
    period: "Feb 2023 – May 2023",
    description: " drove retention strategies through deep cohort analysis and user feedback loops.",
    tags: ["Retention", "Analytics"],
    achievements: [
      "Analyzed cohorts to implement features driving a 9% retention increase.",
      "Conducted 200+ user research calls to identify and fix drop-off friction points.",
      "Boosted content completion rates by 15%."
    ]
  },
  {
    company: "FrontRow",
    role: "Product Development Intern",
    period: "Apr 2022 – Nov 2022",
    description: "Streamlined operations and improved learning flows for a massive user base.",
    tags: ["EdTech", "Operations"],
    achievements: [
      "Optimized mentorship flow for 10,000+ learners, increasing completion by 12%.",
      "Implemented tracking systems reducing operational overhead by 30%.",
      "Supported foundational research for 0→1 features."
    ]
  }
];

export const RETENTION_DATA: MetricData[] = [
  { name: 'D1 Retention', before: 35, after: 43, label: '35% → 43%' },
  { name: 'D7 Retention', before: 3, after: 10, label: '3% → 10%' },
  { name: 'FTUE', before: 45, after: 78, label: '45% → 78%' },
];

export const SKILL_TAGS = [
  // Strategy
  { id: "Product Strategy", group: 1, radius: 40 },
  { id: "PRDs", group: 1, radius: 35 },
  { id: "A/B Testing", group: 1, radius: 38 },
  { id: "0→1 Execution", group: 1, radius: 45 },
  
  // Technical
  { id: "AI Pipelines", group: 2, radius: 42 },
  { id: "SQL", group: 2, radius: 30 },
  { id: "Unity/C#", group: 2, radius: 28 },
  
  // Tools
  { id: "MixPanel", group: 3, radius: 32 },
  { id: "Figma", group: 3, radius: 34 },
  { id: "CleverTap", group: 3, radius: 30 },
  
  // Soft/Core
  { id: "Leadership", group: 4, radius: 40 },
  { id: "User Research", group: 4, radius: 36 },
  { id: "Scoping", group: 4, radius: 32 },
];

export const HIGHLIGHTS = [
  { icon: <Zap className="w-6 h-6 text-yellow-400" />, title: "12x Velocity", desc: "Scaled production from 5 games/12wks to 5/week" },
  { icon: <TrendingUp className="w-6 h-6 text-green-400" />, title: "+73% FTUE", desc: "Revamped First Time User Experience (45% -> 78%)" },
  { icon: <Brain className="w-6 h-6 text-purple-400" />, title: "AI-Native", desc: "Shipped fully AI-generated narrative pipelines" },
  { icon: <LayoutDashboard className="w-6 h-6 text-blue-400" />, title: "Large Scale", desc: "Managed products with 4,000+ DAU" },
];
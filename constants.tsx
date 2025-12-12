import { Job, MetricData, NavigationItem, WorkItem, CaseStudy } from './types';
import { LayoutDashboard, Zap, Brain, TrendingUp } from 'lucide-react';

export const NAV_ITEMS: NavigationItem[] = [
  { label: 'Impact', id: 'impact' },
  { label: 'Works', id: 'works' },
  { label: 'Case Studies', id: 'case-studies' },
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
    title: "Nomm",
    category: "Personal Project",
    tags: ["Web App", "Food Discovery", "React"],
    webLink: "https://nomm.vercel.app",
    description: "The most insightful fitness tracker. Track meals, connect socially, and get AI-powered insights. Designed for people who want to achieve more with less effort."
  },
  { 
    title: "Kurukshetra: Ascension", 
    category: "Strategy RPG", 
    tags: ["Mythology", "Card Battler", "PVP"],
    androidLink: "https://play.google.com/store/apps/details?hl=en_US&id=com.StudioSirah.KurukshetraAscension",
    iosLink: "https://apps.apple.com/in/app/kurukshetra-ascension/id1601430224",
    description: "A thrilling strategy card game inspired by millennia old Indian lore. Join epic battles and explore a captivating universe as legendary heroes reborn in the Age of Darkness, Kalyug."
  },
  { 
    title: "Snackula", 
    category: "AI-Native Game", 
    tags: ["GenAI Pipeline", "Casual", "0→1"],
    androidLink: "https://play.google.com/store/apps/details?id=com.terrabyte.terra&hl=en_IN",
    iosLink: "https://apps.apple.com/in/app/terra-limitless-gaming-world/id6450105686",
    description: "You play the vampire. Progress depends on breaching human thresholds without force. Read social cues, steer dialogue toward voluntary invitation, and secure entry to feed."
  },
  { 
    title: "RedFlag.exe", 
    category: "Interactive Narrative", 
    tags: ["AI-Driven", "Simulation", "Mobile"],
    androidLink: "https://play.google.com/store/apps/details?id=com.terrabyte.terra&hl=en_IN",
    iosLink: "https://apps.apple.com/in/app/terra-limitless-gaming-world/id6450105686",
    description: "A confined-space puzzle scenario built around conversational manipulation. Navigate a hostile partner’s verbal traps, decode embedded clues, and dismantle layered locks to exit."
  },
  { 
    title: "Commando Fire", 
    category: "Action Shooter", 
    tags: ["Multiplayer", "Real-time", "Live Ops"],
    androidLink: "https://play.google.com/store/apps/details?id=com.terrabyte.terra&hl=en_IN",
    iosLink: "https://apps.apple.com/in/app/terra-limitless-gaming-world/id6450105686",
    description: "A fast-paced tactical FPS where players engage AI opponents across competitive maps. Includes multiplayer and single player vs AI modes. Inspired by Critical Strike."
  },
  { 
    title: "Cricket Legends", 
    category: "Sports Strategy", 
    tags: ["PvP", "Economy Design", "Sports"],
    androidLink: "https://play.google.com/store/apps/details?id=com.terrabyte.terra&hl=en_IN",
    iosLink: "https://apps.apple.com/in/app/terra-limitless-gaming-world/id6450105686",
    description: "A scenario-driven cricket module centered on historic matches. Drop legendary cricketers into modern lineups to break momentum patterns and overturn match outcomes."
  },
  { 
    title: "Pro Football", 
    category: "Sports Action", 
    tags: ["Multiplayer", "Physics", "Growth"],
    androidLink: "https://play.google.com/store/apps/details?id=com.terrabyte.terra&hl=en_IN",
    iosLink: "https://apps.apple.com/in/app/terra-limitless-gaming-world/id6450105686",
    description: "A streamlined mobile football title built around short matches, licensed clubs, and real-world squads. Focus on rapid flow, zero-friction matchmaking, and broadcast-style presentation."
  },
  { 
    title: "Cricket King Multiplayer", 
    category: "Gaming Ecosystem", 
    tags: ["Platform", "Social", "Scale"],
    androidLink: "https://play.google.com/store/apps/details?id=com.terrabyte.terra&hl=en_IN",
    iosLink: "https://apps.apple.com/in/app/terra-limitless-gaming-world/id6450105686",
    description: "An arcade-style cricket simulation. Control batting, bowling, and fielding through intuitive touch controls. Features PvP multiplayer and a career mode unlocking Gully, State, National, and International cups."
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
      title: "Scaling Retention via AI Narratives",
      category: "Growth & Retention",
      summary: "How we leveraged GenAI to create personalized micro-dramas and story arcs, improving D7 retention by 10% in mid-core titles.",
      link: "#"
  },
  {
      title: "Optimizing the FTUE Funnel",
      category: "UX Research",
      summary: "A deep dive into reducing drop-offs by 40% through behavioral cohort analysis and simplifying complex UI flows for casual users.",
      link: "#"
  },
  {
      title: "Economy Balancing for PVP",
      category: "Game Economy",
      summary: "Restructuring the sink/source economy in a multiplayer strategy game to prevent hyperinflation and boost long-term LTV.",
      link: "#"
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
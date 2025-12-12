import { Job, MetricData, NavigationItem, WorkItem, CaseStudyDetail } from './types';
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

export const EXPERIENCE_DATA: Job[] = [
  {
    company: "Terra",
    role: "Product Manager",
    period: "Aug 2024 – Dec 2025",
    description: "Leading 100+ cross-functional members to ship AI-native games and scale production velocity.",
    tags: ["AI-Native", "Leadership", "0→1"],
    achievements: [
      "Scaled production velocity 3× (from 5 games/12 weeks to 5 games/4 weeks) by optimizing pipelines.",
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
  { id: "Product Strategy", group: 1, radius: 40 },
  { id: "PRDs", group: 1, radius: 35 },
  { id: "A/B Testing", group: 1, radius: 38 },
  { id: "0→1 Execution", group: 1, radius: 45 },
  { id: "AI Pipelines", group: 2, radius: 42 },
  { id: "SQL", group: 2, radius: 30 },
  { id: "Unity/C#", group: 2, radius: 28 },
  { id: "MixPanel", group: 3, radius: 32 },
  { id: "Figma", group: 3, radius: 34 },
  { id: "CleverTap", group: 3, radius: 30 },
  { id: "Leadership", group: 4, radius: 40 },
  { id: "User Research", group: 4, radius: 36 },
  { id: "Scoping", group: 4, radius: 32 },
];

export const HIGHLIGHTS = [
  { icon: <Zap className="w-6 h-6 text-yellow-400" />, title: "3x Velocity", desc: "Scaled production from 5 games/12wks to 5/4wks" },
  { icon: <TrendingUp className="w-6 h-6 text-green-400" />, title: "+73% FTUE", desc: "Revamped First Time User Experience (45% -> 78%)" },
  { icon: <Brain className="w-6 h-6 text-purple-400" />, title: "AI-Native", desc: "Shipped fully AI-generated narrative pipelines" },
  { icon: <LayoutDashboard className="w-6 h-6 text-blue-400" />, title: "Large Scale", desc: "Managed products with 4,000+ DAU" },
];

export const CASE_STUDIES: CaseStudyDetail[] = [
  {
    id: "onboarding-funnel",
    title: "Rebuilding an Onboarding Funnel by Converting Ambiguity into Measurable Events",
    category: "Funnel Optimization",
    summary: "Converting an intuition-based onboarding flow into a deterministic event chain, reducing abandonment by 25%.",
    role: "Product Manager",
    focus: "Data instrumentation, friction mapping, decision frameworks",
    scope: "Multi-week funnel redesign",
    sections: [
      {
        type: 'text',
        heading: 'Introduction',
        content: "An onboarding funnel lacked clarity across its steps. Sessions were high, conversion was inconsistent, and the team relied on intuition. There was no event-level data for the micro-interactions that determined a user’s progress. The task was to convert the entire onboarding experience from guesswork to a measurable chain of decisions, identify critical drop-off points, and restructure the flow accordingly."
      },
      {
        type: 'text',
        heading: 'Initial State',
        content: "The onboarding sequence consisted of four steps: entry, education, confirmation, and first meaningful action. The original analytics setup captured only two checkpoints: entry and exit. Nothing in between. The team believed the primary drop happened at the final action step. Without data, this belief remained unchallenged."
      },
      {
        type: 'highlight',
        heading: 'Data Instrumentation',
        content: "The funnel was broken into atomic events: 1. Load onboarding screen, 2. Instruction exposure, 3. UI comprehension interaction, 4. First confirmation attempt, 5. Successful confirmation, 6. First feature discovery, 7. First meaningful action. Each event logged timestamp, dwell-time, and interaction type. This allowed construction of a sequential map where each line represented a probabilistic boundary between intent and success."
      },
      {
        type: 'list',
        heading: 'Insights',
        items: [
          "42% of users abandoned before comprehension.",
          "60% of that subset spent under 2.5 seconds on the instruction screen.",
          "Confirmation had only a 9% drop.",
          "The final action step performed well (>80% conversion among those reaching it).",
          "The assumed bottleneck at final action did not exist. The actual bottleneck was comprehension. The product forced users through two separate instruction views that attempted to teach the same concept twice, increasing cognitive load."
        ]
      },
      {
        type: 'text',
        heading: 'Intervention Design',
        content: "The goal was to compress comprehension without harming clarity. Rules applied: Remove non-critical education, Combine complementary concepts, Retain only material tied directly to the first action success metric, Preserve coherence even with reduced explanation. The two instruction screens collapsed into one. The copy was rewritten to eliminate abstract language. Visual prompts replaced 60% of the text. Timing friction was removed: no forced delay, no multi-step explanation."
      },
      {
        type: 'metric-grid',
        heading: 'Results',
        items: [
          "Drop-off reduced: 42% -> 17%",
          "Time-to-completion: -36%",
          "Completion-Action correlation: Strengthened"
        ]
      },
      {
        type: 'text',
        heading: 'Secondary Insight',
        content: "The data exposed that after the comprehension fix, the next largest drop occurred at confirmation for a subset of users interacting on mid-range Android devices. This revealed an unreported performance issue: the confirmation button became unstable under heavy UI load. A separate fix handled that, producing another measurable increase in completion rate."
      },
      {
        type: 'highlight',
        heading: 'Long-term Value',
        content: "The instrumentation allowed ongoing monitoring. Whenever any part of onboarding regressed, the team could pinpoint the exact boundary where user intent collapsed. This case established a durable rule: ambiguity must be eliminated before design debates begin."
      }
    ]
  },
  {
    id: "cohort-resources",
    title: "Using Cohort Behavior to Reallocate Engineering Resources",
    category: "Resource Strategy",
    summary: "Shifting engineering focus from high-visibility features to high-impact workflows using behavioral segmentation.",
    role: "Product Manager",
    focus: "Data segmentation, feature valuation, cost-to-impact alignment",
    scope: "Quarter-long roadmap restructuring",
    sections: [
      {
        type: 'text',
        heading: 'Introduction',
        content: "Product discussions drifted toward intuitive prioritization. Features with high visibility but low impact consumed engineering cycles because they looked appealing. No behavioral segmentation existed. Decisions lacked grounding. The objective was to create a cohort-driven prioritization model that could reassign engineering resources toward features that moved users across meaningful behavioral milestones."
      },
      {
        type: 'highlight',
        heading: 'Data Reconstruction',
        content: "Cohorts were defined using measurable rules. Explorers: ≤3 sessions, low interaction depth. Repeat Users: 3–12 sessions, consistent workflow engagement. Power Users: 12+ sessions, high variability, deep feature interaction. Each feature was mapped against: Percentage usage by cohort, Time spent per visit, Correlation with churn risk, and Contribution to user progression."
      },
      {
        type: 'list',
        heading: 'Insights',
        items: [
          "72% of new users never reached any 'power' feature.",
          "The platform’s key revenue events originated almost entirely from the repeat-user cohort.",
          "Power users accounted for less than 10% of total traffic.",
          "A high-visibility feature championed by stakeholders served <8% of the user base and had near-zero influence on transitions between cohorts."
        ]
      },
      {
        type: 'text',
        heading: 'Decision Framework',
        content: "To restructure the roadmap, each feature received a compound score: Impact Weight (effect on cohort transition), Cost (engineering time), and Confidence (data-backed probability). Features with low confidence and low impact were deprioritized, regardless of stakeholder enthusiasm."
      },
      {
        type: 'text',
        heading: 'Key Decision',
        content: "A highly marketed UI overhaul targeted power users. Its impact score was negligible. Its engineering cost was high. It was removed from the roadmap. A workflow refinement—previously overlooked—directly affected 60% of explorer-to-repeat transitions. It received highest priority."
      },
      {
        type: 'metric-grid',
        heading: 'Outcome',
        items: [
          "Explorer → Repeat: +26%",
          "Daily Returning Users: Increased",
          "Roadmap: Aligned to Behavior"
        ]
      },
      {
        type: 'highlight',
        heading: 'Long-term Value',
        content: "The scoring model replaced subjective debates with evidence-based prioritization. This case rewired the team’s decision culture. Cohort behavior became the default lens for evaluating the roadmap. The case demonstrated a simple rule: user progression is the only reliable indicator of feature value."
      }
    ]
  },
  {
    id: "stakeholder-prioritization",
    title: "Eliminating Stakeholder Noise with a Formal Prioritization Model",
    category: "Product Operations",
    summary: "Building a structured prioritization model to convert subjective stakeholder requests into quantifiable decisions.",
    role: "Product Manager",
    focus: "Stakeholder alignment, decision frameworks, conflict reduction",
    scope: "8-week prioritization overhaul",
    sections: [
      {
        type: 'text',
        heading: 'Introduction',
        content: "Product direction suffered from contradictory stakeholder feedback. Sales pushed for visibility features. Engineering pushed for technical debt reduction. Design pushed for UX enhancements. No shared framework existed to evaluate tradeoffs. Every meeting produced circular debates. The objective was to build a structured prioritization model that converted subjective requests into quantifiable decisions."
      },
      {
        type: 'text',
        heading: 'Initial State',
        content: "Requests arrived from multiple channels with no metadata: Slack, email, meetings, customer calls. Most items lacked measurable impact. Engineering work was constantly interrupted. Product velocity degraded because half-completed tasks changed priority weekly."
      },
      {
        type: 'highlight',
        heading: 'Model Creation',
        content: "The model required three core attributes: 1. Impact (influence on primary metric), 2. Cost (engineering complexity + QA), 3. Confidence (data-backed vs anecdotal). Impact was weighted highest. Confidence was weighted heavily to penalize unfounded opinions. Every incoming suggestion was converted into a structured card with a problem statement, evidence, and expected metric movement."
      },
      {
        type: 'list',
        heading: 'Insights',
        items: [
          "60% of requests had low impact and low confidence.",
          "25% had moderate impact but high cost.",
          "Only 15% had strong evidence and high potential value.",
          "This revealed why teams felt overwhelmed: the backlog contained noise masquerading as direction."
        ]
      },
      {
        type: 'text',
        heading: 'Key Decision',
        content: "A widely advocated feature demanded a multi-sprint engineering effort. Its impact score was low. Its confidence score was low because the request originated from a single anecdotal account. It was placed in the 'monitor' section rather than the active roadmap. Two overlooked workflow enhancements had the highest scores. These became the new priorities."
      },
      {
        type: 'metric-grid',
        heading: 'Outcome',
        items: [
          "Roadmap: Stabilized",
          "Eng Cycles: Predictable",
          "Conflict: Reduced"
        ]
      },
      {
        type: 'highlight',
        heading: 'Long-term Value',
        content: "The weighted matrix became a foundational tool. It ensured roadmap alignment with measurable goals. It prevented derailment by enthusiasm or anecdotal assumptions. This case demonstrated that prioritization models reduce organizational noise at its source: unstructured decision-making."
      }
    ]
  },
  {
    id: "experiment-rigor",
    title: "Enforcing Experimental Rigor to Avoid Misleading Metrics",
    category: "Data Science",
    summary: "Implementing a standardized experimentation discipline to eliminate statistical ambiguity and false positives.",
    role: "Product Manager",
    focus: "Experiment design, statistical power, decision hygiene",
    scope: "Multi-experiment cycle",
    sections: [
      {
        type: 'text',
        heading: 'Introduction',
        content: "A/B tests became routine but unreliable. Teams ran experiments with insufficient sample sizes, unclear metrics, and inconsistent cleaning rules. This produced false positives, leading to features being rolled out under incorrect assumptions. The objective was to impose a standardized experimentation discipline that eliminated statistical ambiguity."
      },
      {
        type: 'text',
        heading: 'Initial State',
        content: "Typical issues: Variants launched without calculating minimum detectable effect. Metrics defined after results appeared. Cleaning rules differed between experiments. Smaller tests were treated as if they were conclusive. This created a pattern of false wins."
      },
      {
        type: 'highlight',
        heading: 'Standardization Framework',
        content: "The new structure enforced: Clear north-star metric before launch. Guardrail metrics to prevent long-term damage. Power calculations to determine required sample size. Fixed run-time windows to avoid premature conclusions. Uniform cleaning rules for bots, repeated sessions, invalid inputs. No test started until the experiment card passed the checklist."
      },
      {
        type: 'text',
        heading: 'Insight',
        content: "Three ongoing experiments failed the new standards. Their sample sizes were insufficient. Their metrics were undefined or changed mid-test. All were invalidated and restarted. This invalidation prevented major regression: one variant previously celebrated as a success actually reduced long-term engagement when properly tested."
      },
      {
        type: 'text',
        heading: 'Key Decision',
        content: "A feature intended to boost early retention created a short-term spike but produced a 14% drop in long-term engagement when guardrails were applied. The experiment framework exposed this effect. The feature never shipped."
      },
      {
        type: 'metric-grid',
        heading: 'Outcome',
        items: [
          "Interpretation: Eliminated",
          "Results: Deterministic",
          "Statistical Errors: Removed"
        ]
      },
      {
        type: 'highlight',
        heading: 'Long-term Value',
        content: "The team internalized a principle: An experiment without rigor is indistinguishable from opinion. The new framework created decision hygiene across the organization and prevented metric drift caused by repeated false positives. This case established experimentation as an engineering system, not an interpretive ritual."
      }
    ]
  }
];
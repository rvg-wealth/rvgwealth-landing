import {
  BookOpen,
  Globe,
  GraduationCap,
  HeartHandshake,
  Leaf,
  ShieldCheck,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";

export type Service = {
  icon: LucideIcon;
  title: string;
  tagline: string;
  description: string;
  items: string[];
};

// Flagship offering — featured separately from the consultancy grid.
export const flagship: Service = {
  icon: TrendingUp,
  title: "Investment Planning",
  tagline: "Strategic Management",
  description:
    "High-impact strategies tailored to your situation, goals, and aspirations — built across asset allocation, risk, and behavioral finance to grow, protect, and accelerate your wealth.",
  items: [
    "Asset Allocation & Securities",
    "Investment Risk & Performance",
    "Behavioral Finance",
    "Suitability & Objectives",
  ],
};

export const services: Service[] = [
  {
    icon: GraduationCap,
    title: "Financial Education",
    tagline: "The Foundation of Wealth",
    description:
      "We simplify complex financial concepts into practical, actionable insight — so you earn, save, invest, and protect with clarity and confidence.",
    items: [
      "Earn smartly & save effectively",
      "Invest with clarity and strategy",
      "Manage debt & protect your wealth",
      "Plan for your life goals",
    ],
  },
  {
    icon: BookOpen,
    title: "Children Education Consultancy",
    tagline: "Securing Your Child's Future",
    description:
      "Plan domestic and international education with inflation-adjusted projections — without compromising your own financial stability.",
    items: [
      "Inflation-adjusted cost planning",
      "Structured long-term funding",
      "Balance education & lifestyle goals",
    ],
  },
  {
    icon: HeartHandshake,
    title: "Children Marriage Funding",
    tagline: "Plan with Strength & Clarity",
    description:
      "Approach this milestone with structure — aligning expenses with long-term goals while protecting your wealth and stability.",
    items: [
      "Strategic milestone funding",
      "Balance with retirement & wealth goals",
      "Liability & contingency planning",
    ],
  },
  {
    icon: Leaf,
    title: "Retirement Consultancy",
    tagline: "Retire with Confidence",
    description:
      "With longer lifespans, the real risk is outliving your savings. We build logic-driven plans that sustain your lifestyle for 25–30+ years.",
    items: [
      "Longevity & corpus optimization",
      "Income sustainability models",
      "Resilient retirement roadmap",
    ],
  },
  {
    icon: ShieldCheck,
    title: "Insurance Planning",
    tagline: "Protect Your Life. Secure Your Wealth.",
    description:
      "Your financial safety net. We assess your risks, close coverage gaps, and design balanced protection — neither under- nor over-insured.",
    items: [
      "Life & health insurance",
      "Personal accident cover",
      "Child protection plans",
    ],
  },
  {
    icon: Globe,
    title: "NRI Services",
    tagline: "Stay Connected to India",
    description:
      "Structure the right banking and investment solutions across borders — optimized for tax efficiency, repatriation, and RBI compliance.",
    items: [
      "NRE, NRO & FCNR accounts",
      "Multi-currency income management",
      "Compliant cross-border wealth",
    ],
  },
];

export type Tier = {
  name: string;
  stage: string;
  price: string;
  tagline: string;
  popular?: boolean;
  features: string[];
  cta: string;
  ctaredirect: string;
};

export const tiers: Tier[] = [
  {
    name: "Foundation",
    stage: "Start Strong",
    price: "₹7,999",
    tagline:
      "Build a solid financial base — strengthen your fundamentals, financial literacy, and clear, achievable goals.",
    features: [
      "Full Financial “Money Matters” Video Course",
      "Ready-to-use Financial Planning Templates",
      "Exclusive Financial Guidance Book",
    ],
    cta: "Get Started",
    ctaredirect: "https://portal.rvgwealth.com/signup?tier=foundation",
  },
  {
    name: "Growth",
    stage: "Accelerate Progress",
    price: "₹24,999",
    tagline:
      "Take your finances to the next level with personalized, one-on-one strategy and active management.",
    popular: true,
    features: [
      "Everything in Foundation",
      "One-on-One Financial Planning Sessions",
      "Our 6-Step Structured Planning Process",
      "Goal-Based Planning Templates",
    ],
    cta: "Upgrade to Growth",
    ctaredirect: "https://portal.rvgwealth.com/signup?tier=growth",
  },
  {
    name: "Apex",
    stage: "Achieve Excellence",
    price: "₹54,999",
    tagline:
      "Complete financial leadership — a trusted partner to preserve, grow, and optimize your wealth and legacy.",
    features: [
      "Everything in Growth",
      "Dedicated 1-on-1 Priority Advisory",
      "Comprehensive Wealth Management & Roadmap",
      "Ongoing Portfolio Monitoring & Optimization",
      "Risk Management & Wealth Protection",
      "Premium Wealth Building & Legacy Book",
    ],
    cta: "Go Apex",
    ctaredirect: "https://portal.rvgwealth.com/signup?tier=apex",
  },
];

export type Step = { title: string; detail: string };

export const planningProcess: Step[] = [
  {
    title: "Establish Relationship",
    detail: "Define the scope and understand your needs and expectations.",
  },
  {
    title: "Gather Financial Information",
    detail: "Identify your goals, collect data, and understand your situation.",
  },
  {
    title: "Analyze Financial Status",
    detail: "Evaluate your position; assess strengths, gaps, and opportunities.",
  },
  {
    title: "Strategy Development",
    detail: "Build and present personalized recommendations, explained clearly.",
  },
  {
    title: "Implementation",
    detail: "Define responsibilities and support execution and selection.",
  },
  {
    title: "Review & Optimization",
    detail: "Periodic evaluation; adjust strategies as life and goals change.",
  },
];

export const mission =
  "To empower 100,000 middle-class individuals to break free from financial stress and debt — and step into a life of confidence, clarity, and abundance.";

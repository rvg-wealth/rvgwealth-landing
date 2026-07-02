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
  title: "Goal-Based Financial Planning",
  tagline: "Strategic Financial Roadmap",
  description:
    "Personalized frameworks tailored to your aspirations — utilizing logical asset mapping and behavioral finance to help you organize, protect, and build toward your financial milestones.",
  items: [
    "Asset Class Education & Allocation Frameworks",
    "Risk Awareness & Performance Literacy",
    "Behavioral Finance",
    "Goals, Constraints & Suitability",
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
      "Longevity & corpus sustainability mapping",
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
      "We guide you through banking and asset class structures across borders — with a focus on tax efficiency, repatriation, and RBI compliance.",
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
    stage: "Financial Literacy Foundation",
    price: "₹7,999",
    tagline:
      "Build a logic-driven financial base through educational videos, planning templates, and clear, achievable goals.",
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
    stage: "Structured Growth Mapping",
    price: "₹24,999",
    tagline:
      "Take your finances to the next level with interactive, goal-based planning and one-on-one sessions.",
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
    stage: "Strategic Stewardship",
    price: "₹54,999",
    tagline:
      "Comprehensive stewardship — a trusted partner to help you track, protect, and efficiently manage your legacy roadmap.",
    features: [
      "Everything in Growth",
      "Dedicated One-on-One Comprehensive Consultation",
      "Comprehensive Financial Roadmap",
      "Periodic Goal Alignment & Efficiency Review",
      "Risk Awareness & Wealth Protection Planning",
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
    title: "Financial Roadmap Design",
    detail:
      "Build and present a logical goal framework with clearly explained options.",
  },
  {
    title: "Guided Action",
    detail:
      "Define the steps for you to take, with educational support as you select and execute your own plan.",
  },
  {
    title: "Periodic Review & Realignment",
    detail:
      "Evaluate progress toward goals and adjust your roadmap to stay on track with life changes.",
  },
];

export const mission =
  "To empower 100,000 middle-class individuals to break free from financial stress and debt — and step into a life of confidence, clarity, and abundance.";

// SEBI compliance disclosures — shown in the footer and near engagement points.
export const disclaimers = {
  registration:
    "RVGWealth is a financial consultancy specializing in goal-based planning. We provide educational frameworks and logic-driven strategies based on FPSB standards. We are not a SEBI Registered Investment Adviser and do not provide specific securities recommendations for a fee.",
  risk: "Investments in the securities market are subject to market risks. Read all the related documents carefully before investing.",
};

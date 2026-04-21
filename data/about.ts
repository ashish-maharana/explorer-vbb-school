import type { FeatureItem, HeroContent, TimelineItem } from "@/lib/types";

export const aboutHero: HeroContent = {
  eyebrow: "Our Story",
  title: "Built on Values, Driven by the Future",
  description:
    "Explorer & V.B.B. English Medium School was founded to nurture capable, caring, and confident learners through a disciplined yet inspiring educational environment.",
  primaryCta: { label: "View Academics", href: "/academics" },
  secondaryCta: { label: "Admissions Open", href: "/admissions" },
};

export const missionVision = {
  mission:
    "To provide broad, balanced, and future-relevant education that strengthens confidence, creativity, literacy, numeracy, and social-emotional growth.",
  vision:
    "To shape learners who think critically, communicate clearly, and act responsibly in a technology-rich global future.",
};

export const coreValues: FeatureItem[] = [
  { title: "Integrity", description: "We cultivate honesty, discipline, and accountability in daily school life.", icon: "ShieldCheck" },
  { title: "Curiosity", description: "Students are encouraged to ask, explore, and think beyond textbook answers.", icon: "Lightbulb" },
  { title: "Respect", description: "We foster empathy, collaboration, and inclusive behavior in every classroom.", icon: "Handshake" },
  { title: "Excellence", description: "We pursue consistent progress through high standards and personalized support.", icon: "Award" },
];

export const differentiators: FeatureItem[] = [
  { title: "Academic + Human Development", description: "We balance exam readiness with character, confidence, and communication growth.", icon: "UserRoundCheck" },
  { title: "Future-Facing Learning", description: "Technology literacy and innovation mindsets are introduced in age-appropriate ways.", icon: "Atom" },
  { title: "Strong School-Parent Partnership", description: "Transparent communication helps families stay connected with student progress.", icon: "MessagesSquare" },
];

export const philosophyTimeline: TimelineItem[] = [
  {
    year: "Foundation",
    title: "Strong Basics First",
    description: "Students build core literacy and numeracy with conceptual clarity and everyday relevance.",
  },
  {
    year: "Growth",
    title: "Confidence and Communication",
    description: "Public speaking, collaboration, and presentation habits become a core part of development.",
  },
  {
    year: "Expansion",
    title: "Applied Exploration",
    description: "Science, projects, and structured activities deepen practical understanding and curiosity.",
  },
  {
    year: "Future-Ready",
    title: "Innovation Mindset",
    description: "AI awareness, digital literacy, and responsible technology use prepare learners for tomorrow.",
  },
];

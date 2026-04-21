import type { FeatureItem, HeroContent, ProgramItem } from "@/lib/types";

export const aiHero: HeroContent = {
  eyebrow: "Flagship Initiative",
  title: "AI Learning for the Next Generation",
  description:
    "We introduce students to technology-rich learning through guided, age-appropriate programs that strengthen logic, creativity, and responsible digital behavior.",
  primaryCta: { label: "Discover Admissions", href: "/admissions" },
  secondaryCta: { label: "View Academics", href: "/academics" },
};

export const aiPrograms: ProgramItem[] = [
  { title: "AI Foundations", description: "Simple understanding of intelligent systems and how they support real life.", icon: "BotMessageSquare" },
  { title: "Coding & Computational Thinking", description: "Step-by-step coding logic that sharpens sequencing and problem-solving.", icon: "CodeXml" },
  { title: "Robotics & Automation", description: "Hands-on exploratory modules introducing sensors, movement, and automation basics.", icon: "Robot" },
  { title: "Creative AI Projects", description: "Project-based learning where students create, test, and present digital ideas.", icon: "Lightbulb" },
  { title: "Digital Citizenship & Safe AI Use", description: "Ethical and safe use of technology, privacy awareness, and responsible online habits.", icon: "Shield" },
  { title: "Innovation Lab / Future Skills", description: "Integrated lab mindset focused on collaboration, experimentation, and presentation.", icon: "Rocket" },
];

export const howStudentsLearn: FeatureItem[] = [
  { title: "Age-Appropriate Modules", description: "Each level is structured for student readiness, confidence, and engagement.", icon: "Layers3" },
  { title: "Guided Project Learning", description: "Teachers mentor students through build-think-present learning cycles.", icon: "Construction" },
  { title: "Collaborative Exploration", description: "Peer teamwork encourages communication and applied problem-solving.", icon: "GitMerge" },
  { title: "Reflective Improvement", description: "Students review outcomes and improve ideas, building growth mindset.", icon: "RefreshCcwDot" },
];

export const tomorrowSkills = [
  "Problem Solving",
  "Communication",
  "Logical Reasoning",
  "Creative Thinking",
  "Responsible Technology Use",
  "Collaboration",
  "Decision Making",
  "Innovation Mindset",
];

export const showcaseCards: FeatureItem[] = [
  { title: "Idea-to-Prototype Tasks", description: "Students move from concept sketches to working classroom demonstrations.", icon: "GalleryHorizontalEnd" },
  { title: "Presentation-Led Showcases", description: "Teams explain what they built, why it matters, and how it can improve.", icon: "Presentation" },
  { title: "Cross-Disciplinary Thinking", description: "Technology projects are linked with language, science, and mathematics learning.", icon: "Orbit" },
];

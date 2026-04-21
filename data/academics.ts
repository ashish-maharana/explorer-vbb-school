import type { HeroContent, ProgramItem, TimelineItem } from "@/lib/types";

export const academicsHero: HeroContent = {
  eyebrow: "Academics",
  title: "Broad, Balanced, and Future-Relevant Curriculum",
  description:
    "Our academic framework strengthens foundational learning while building analytical thinking, communication skills, and confidence for long-term success.",
  primaryCta: { label: "Admissions Open", href: "/admissions" },
  secondaryCta: { label: "Contact School", href: "/contact" },
};

export const academicPrograms: ProgramItem[] = [
  {
    title: "Computer Science",
    description: "Early digital literacy, coding logic, and technology confidence through guided exploration.",
    icon: "MonitorCog",
  },
  {
    title: "Primary Education",
    description: "Strong foundational literacy and numeracy with conceptual understanding and practice.",
    icon: "School",
  },
  {
    title: "Science",
    description: "Inquiry-led learning with experiments and observation to nurture scientific reasoning.",
    icon: "Beaker",
  },
  {
    title: "Public Speaking",
    description: "Structured speaking opportunities to develop articulation, confidence, and leadership voice.",
    icon: "Megaphone",
  },
  {
    title: "Mathematics",
    description: "Logic-driven mathematics with real-world application and problem-solving precision.",
    icon: "Sigma",
  },
  {
    title: "Languages",
    description: "Language fluency and expression skills for clear communication across contexts.",
    icon: "Languages",
  },
];

export const pedagogy = [
  {
    title: "Teaching Philosophy",
    description:
      "We teach for understanding, not memorization. Every lesson combines concept clarity, guided practice, and reflection.",
    icon: "BookMarked",
  },
  {
    title: "Experiential Learning",
    description:
      "Hands-on activities, labs, and project tasks help students apply classroom learning with confidence.",
    icon: "Blocks",
  },
  {
    title: "Communication Development",
    description:
      "Students regularly present, discuss, and collaborate to strengthen verbal and written expression.",
    icon: "MessagesSquare",
  },
  {
    title: "Foundational Development",
    description:
      "Focused literacy and numeracy reinforcement ensures every learner builds stable academic fundamentals.",
    icon: "Binary",
  },
];

export const learningPathway: TimelineItem[] = [
  {
    year: "Stage 1",
    title: "Foundational Learning",
    description: "Literacy, numeracy, classroom habits, and curiosity-driven learning routines.",
  },
  {
    year: "Stage 2",
    title: "Applied Understanding",
    description: "Students connect concepts with activities, projects, and collaborative discussion.",
  },
  {
    year: "Stage 3",
    title: "Communication and Leadership",
    description: "Speaking, teamwork, and independent thinking become central to learning progression.",
  },
  {
    year: "Stage 4",
    title: "Future Skills",
    description: "Digital literacy, problem-solving, and innovation mindset prepare learners for next-gen opportunities.",
  },
];

import type { FeatureItem, HeroContent, ProgramItem } from "@/lib/types";

export const activitiesHero: HeroContent = {
  eyebrow: "Student Life",
  title: "Beyond the Classroom, Beyond Limits",
  description:
    "Our co-curricular ecosystem helps students grow through creativity, fitness, discipline, leadership, and joyful collaboration.",
  primaryCta: { label: "Explore Admissions", href: "/admissions" },
  secondaryCta: { label: "Contact School", href: "/contact" },
};

export const activityPrograms: ProgramItem[] = [
  { title: "Music", description: "Rhythm, expression, and stage confidence through structured musical engagement.", icon: "Music2" },
  { title: "Sports", description: "Fitness, discipline, and teamwork through regular sports participation.", icon: "Trophy" },
  { title: "Events", description: "Celebrations and showcases that build confidence, ownership, and belonging.", icon: "CalendarCheck2" },
  { title: "Yoga", description: "Balance, focus, and wellness practices that support holistic development.", icon: "Leaf" },
];

export const lifeSkills: FeatureItem[] = [
  { title: "Clubs & Exploratory Circles", description: "Interest-based groups encourage deeper curiosity and peer learning.", icon: "Compass" },
  { title: "Celebrations & Culture", description: "Meaningful events strengthen cultural awareness and community spirit.", icon: "PartyPopper" },
  { title: "Teamwork & Leadership", description: "Collaborative tasks develop decision-making, responsibility, and respect.", icon: "UsersRound" },
  { title: "Wellness Mindset", description: "Physical activity and mindfulness support emotional balance and resilience.", icon: "HeartPulse" },
];

export const galleryItems = [
  { src: "/images/gallery-music.svg", alt: "Students performing in school music session", title: "Music Studio Moments" },
  { src: "/images/gallery-sports.svg", alt: "Students participating in school sports activity", title: "Sports in Action" },
  { src: "/images/gallery-events.svg", alt: "School cultural event stage presentation", title: "Celebration Highlights" },
  { src: "/images/gallery-yoga.svg", alt: "Students practicing yoga with instructor guidance", title: "Mindful Wellness" },
];

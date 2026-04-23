import type { FeatureItem, GalleryItem, HeroContent, ProgramItem } from "@/lib/types";

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

export const campusGalleryItems: GalleryItem[] = [
  { src: "/images/activities/gallery-sports.webp", alt: "Kindergarten students running", title: "Kindergarten students running" },
  { src: "/images/activities/students-taking-oath.webp", alt: "Students taking oath", title: "Students taking oath" },
  { src: "/images/activities/sports-day-medal-winners.webp", alt:  "Sports Day medal winners", title: "Sports Day medal winners" },
  { src: "/images/activities/the-students-lined-up.webp", alt: "The students lined up", title: "The students lined up" },
  { src: "/images/activities/teachers-award-medals-to-winners.webp", alt: "Teachers award medals to winners", title: "Teachers award medals to winners" },
  { src: "/images/activities/students-in-action.webp", alt: "Students in action", title: "Students in action" },
];

export const schoolTripsGalleryItems: GalleryItem[] = [
  { src: "/images/activities/adventure.webp", alt: "Adventure", title: "Adventure" },
  { src: "/images/activities/fun.webp", alt: "Fun", title: "Fun" },
  { src: "/images/activities/climbing.webp", alt: "Climbing", title: "Climbing" },
  { src: "/images/activities/who-will-reach-the-top.webp", alt: "Who will reach the top?", title: "Who will reach the top?" },
  { src: "/images/activities/in-line.webp", alt: "In line", title: "In line" },
  { src: "/images/activities/meal-time.webp", alt: "Meal time!", title: "Meal time!" },
  { src: "/images/activities/were-going-on-a-school-trip.webp", alt: "We're going on a school trip!", title: "We're going on a school trip!" },
  { src: "/images/activities/dance.webp", alt: "Dance", title: "Dance" },
  { src: "/images/activities/colours.webp", alt: "Colours", title: "Colours" },
  { src: "/images/activities/satisfied-at-last.webp", alt: "Satisfied at last", title: "Satisfied at last" },
  { src: "/images/activities/just-chilling.webp", alt: "Just chilling", title: "Just chilling" },
  { src: "/images/activities/all-smiles.webp", alt: "All smiles", title: "All smiles" },
  { src: "/images/activities/on-the-hillside.webp", alt: "On the hillside", title: "On the hillside" },
  { src: "/images/activities/all-of-us.webp", alt: "All of us", title: "All of us" },
  { src: "/images/activities/trip-memories.webp", alt: "Trip memories", title: "Trip memories" },
];

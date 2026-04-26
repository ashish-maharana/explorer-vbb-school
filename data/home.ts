import type {
  AdmissionsUpdatesContent,
  CoCurricularItem,
  CurriculumCardItem,
  FeatureItem,
  GalleryItem,
  HeroContent,
  LegacyStatItem,
  TimelineItem,
} from "@/lib/types";

export const homeHero: HeroContent = {
  eyebrow: "Future-Ready Schooling in Sayan, Surat",
  title: "Where Young Minds Explore the Future",
  description:
    "At Explorer & V.B.B. English Medium School, students build strong academic foundations while developing confidence, creativity, communication, and character for a fast-changing world.",
  imageSrc: "/images/home/learning-campus.webp",
  imageAlt: "Explorer school students and campus learning moments",
  primaryCta: { label: "Admissions Open", href: "/admissions" },
  secondaryCta: { label: "Explore Programs", href: "/academics" },
};

export const imageSlots = {
  learningSection: "/images/home/learning-campus.webp",
  principalSection: "/images/home/principal-students.svg",
  coCurricularSection: "/images/home/co-curricular-activities.webp",
  curriculum: {
    computerScience: "/images/home/curriculum-computer-science.webp",
    primaryEducation: "/images/home/curriculum-primary-education.webp",
    science: "/images/home/curriculum-science.webp",
    publicSpeaking: "/images/home/curriculum-public-speaking.webp",
    mathematics: "/images/home/curriculum-mathematics.webp",
    languages: "/images/home/curriculum-languages.webp",
  },
} as const;

export const learningIntro = {
  title: "Learning Begins With Us",
  paragraphs: [
    "We at Explorer & V.B.B. School offer supportive and engaging learning environments for our students. We help children discover their strengths, learn with confidence, and develop the values needed for life.",
    "Along with strong academics, we focus on confidence, communication, and real-world readiness. Our school nurtures every learner through meaningful classroom experiences and guided co-curricular opportunities.",
  ],
  link: {
    label: "Know More About Us",
    href: "/about",
  },
};

export const schoolAtAGlance = "Our School at a Glance";

export const legacyStats: LegacyStatItem[] = [
  { value: "700+", label: "Happy Families" },
  { value: "30+", label: "Staff" },
  { value: "10+", label: "Classrooms" },
  { value: "5,000+", label: "Alumni" },
];

export const homeHighlights: FeatureItem[] = [
  {
    title: "Strong Academics",
    description: "Concept clarity, regular practice, and guided classroom support help students build confident foundations.",
    icon: "BookMarked",
  },
  {
    title: "Values-Led Culture",
    description: "Discipline, respect, responsibility, and care shape the way students learn and interact every day.",
    icon: "ShieldCheck",
  },
  {
    title: "Confidence Building",
    description: "Speaking, events, activities, and teacher mentoring help children express themselves with courage.",
    icon: "Megaphone",
  },
  {
    title: "Future Learning",
    description: "Digital awareness, practical thinking, and innovation habits prepare students for the world ahead.",
    icon: "Rocket",
  },
];

export const homeLearningPathway: TimelineItem[] = [
  {
    year: "Step 1",
    title: "Foundations First",
    description: "Students strengthen reading, writing, numeracy, discipline, and classroom confidence.",
  },
  {
    year: "Step 2",
    title: "Explore and Apply",
    description: "Lessons connect with activities, discussion, observation, and real examples.",
  },
  {
    year: "Step 3",
    title: "Speak, Lead, Participate",
    description: "Children build confidence through presentation, teamwork, events, and co-curricular opportunities.",
  },
  {
    year: "Step 4",
    title: "Future-Ready Growth",
    description: "Learners develop digital thinking, problem-solving, values, and independent learning habits.",
  },
];

export const homeCampusMoments: GalleryItem[] = [
  {
    src: "/images/activities/students-in-action.webp",
    alt: "Explorer school students participating in an activity",
    title: "Students in Action",
  },
  {
    src: "/images/activities/sports-day-medal-winners.webp",
    alt: "Explorer school sports day medal winners",
    title: "Sports Day Pride",
  },
  {
    src: "/images/activities/all-smiles.webp",
    alt: "Explorer school students smiling during a trip",
    title: "Happy Campus Moments",
  },
  {
    src: "/images/activities/teachers-award-medals-to-winners.webp",
    alt: "Teachers awarding medals to Explorer school students",
    title: "Celebrating Effort",
  },
];

export const homeAdmissionsPreview = [
  {
    step: "01",
    title: "Connect with School",
    description: "Call or visit us to explore class availability, schedules, fees, and the admission process in detail.",
  },
  {
    step: "02",
    title: "Meet and Discuss",
    description: "Share your child's learning needs and get clarity on academics, activities, and school culture.",
  },
  {
    step: "03",
    title: "Complete Admission",
    description: "Submit required documents and complete enrollment formalities with admission guidance.",
  },
];

export const homeQuickLinks = [
  {
    title: "Academics",
    description: "Explore curriculum, pedagogy, and learning stages.",
    icon: "School",
    href: "/academics",
  },
  {
    title: "Activities",
    description: "See sports, music, events, yoga, and campus life.",
    icon: "Trophy",
    href: "/activities",
  },
  {
    title: "AI Learning",
    description: "Discover future skills, coding, and responsible tech use.",
    icon: "BotMessageSquare",
    href: "/ai-learning",
  },
  {
    title: "Admissions",
    description: "Check process, documents, and admission guidance.",
    icon: "ClipboardCheck",
    href: "/admissions",
  },
];

export const principalSection = {
  quote: "We aim at inspiring our students to dream more, learn more, do more, and become more in their respective journeys of life.",
  author: "Maydha Murmu - Principal",
};

export const curriculumOverview = {
  title: "Curriculum Overview",
  description:
    "The curriculum is thoughtfully designed to build strong academic foundations while preparing children for practical, future-ready learning.",
};

export const curriculumCards: CurriculumCardItem[] = [
  {
    title: "Computer Science",
    description: "Hands-on technology and digital thinking, preparing learners for tomorrow.",
    imageSrc: imageSlots.curriculum.computerScience,
    imageAlt: "Computer science curriculum placeholder",
  },
  {
    title: "Primary Education",
    description: "Core literacy and numeracy skills that support every child from the start.",
    imageSrc: imageSlots.curriculum.primaryEducation,
    imageAlt: "Primary education curriculum placeholder",
  },
  {
    title: "Science",
    description: "Curiosity-led experiments and scientific learning through discovery.",
    imageSrc: imageSlots.curriculum.science,
    imageAlt: "Science curriculum placeholder",
  },
  {
    title: "Public Speaking",
    description: "Confidence building through speech, expression, and stage readiness.",
    imageSrc: imageSlots.curriculum.publicSpeaking,
    imageAlt: "Public speaking curriculum placeholder",
  },
  {
    title: "Mathematics",
    description: "Understanding concepts and logic with practical problem-solving methods.",
    imageSrc: imageSlots.curriculum.mathematics,
    imageAlt: "Mathematics curriculum placeholder",
  },
  {
    title: "Languages",
    description: "Better communication through reading, writing, and spoken language skills.",
    imageSrc: imageSlots.curriculum.languages,
    imageAlt: "Languages curriculum placeholder",
  },
];

export const coCurricular = {
  title: "Our Co-curricular Activities",
  description: "Students develop teamwork, discipline, confidence, and creativity through regular activity programs.",
};

export const coCurricularItems: CoCurricularItem[] = [
  {
    title: "Music - Introducing from 2023",
    description: "Music classes encourage rhythm, self-expression, and joy while helping learners improve listening and stage confidence.",
  },
  {
    title: "Sports",
    description: "Our sports curriculum builds teamwork and fitness while teaching discipline, focus, and healthy competition in students.",
  },
  {
    title: "Events",
    description: "School events provide opportunities for students to present talent, collaborate with peers, and participate in meaningful celebrations.",
  },
  {
    title: "Yoga",
    description: "Yoga sessions support physical well-being, mindfulness, and concentration for balanced daily learning.",
  },
];

export const admissionsUpdatesCta: AdmissionsUpdatesContent = {
  title: "Wish to know more about admissions and updates? Subscribe now!",
  description: "Share your details and our team will connect with admission and school update information.",
  fields: [
    { label: "Name", name: "name", type: "text", placeholder: "Name" },
    { label: "Email", name: "email", type: "email", placeholder: "Email Address" },
    { label: "Phone", name: "phone", type: "text", placeholder: "Phone" },
  ],
  message: { label: "Message", name: "message", placeholder: "Your message" },
  submitLabel: "Submit",
};

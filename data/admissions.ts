import type { FeatureItem, HeroContent } from "@/lib/types";

export const admissionsHero: HeroContent = {
  eyebrow: "Admissions 2026-27",
  title: "Admissions Open for Future-Ready Learning",
  description:
    "Join a school environment where academic rigor, communication confidence, and holistic development come together for meaningful student success.",
  imageSrc: "/images/activities/students-taking-oath.webp",
  imageAlt: "Explorer school students gathered for a school ceremony",
  primaryCta: { label: "Start Inquiry", href: "/contact" },
  secondaryCta: { label: "Call Admissions", href: "tel:+919427472781" },
};

export const parentReasons: FeatureItem[] = [
  { title: "Structured Academic Excellence", description: "Focused curriculum with concept clarity and measurable progress.", icon: "ClipboardCheck" },
  { title: "Safe, Supportive Culture", description: "A caring environment that values discipline, respect, and belonging.", icon: "HousePlus" },
  { title: "Confidence-Centered Development", description: "Public speaking, events, and mentorship build strong self-expression.", icon: "MessageCircleHeart" },
  { title: "Future-Oriented Learning", description: "Technology-integrated programs build readiness for tomorrow's world.", icon: "ScanSearch" },
];

export const processSteps = [
  { step: "01", title: "Inquiry", description: "Contact the school by phone, email, or in-person visit for class availability." },
  { step: "02", title: "Campus Interaction", description: "Meet our team, understand the learning model, and discuss student needs." },
  { step: "03", title: "Application Submission", description: "Submit the admission form and required documents for verification." },
  { step: "04", title: "Confirmation", description: "Receive admission confirmation and complete enrollment formalities." },
];

export const eligibility = [
  "Admissions are available for primary and higher classes as per seat availability.",
  "Students are placed in age-appropriate classes based on prior academic records.",
  "Parents are encouraged to meet the school team for curriculum orientation.",
];

export const documents = [
  "Student birth certificate copy",
  "Previous school report card / transfer details (if applicable)",
  "Passport-size photographs of student",
  "Parent/guardian identity and address proof",
  "Relevant medical information, if any",
];

export const admissionFaqs = [
  {
    question: "Is admission open throughout the year?",
    answer:
      "Admissions are generally prioritized for the academic cycle and then subject to seat availability in each class.",
  },
  {
    question: "Do you have a school visit option for parents?",
    answer:
      "Yes. Parents can schedule a visit to understand classroom culture, facilities, and the school learning approach.",
  },
  {
    question: "How does the school support communication skills?",
    answer:
      "Communication is built through class discussions, reading, presentations, public speaking, and activity-based expression.",
  },
  {
    question: "What makes your curriculum future-ready?",
    answer:
      "We combine strong foundational academics with digital literacy, logical thinking, and innovation-focused learning experiences.",
  },
];

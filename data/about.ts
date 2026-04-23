import type {
  AboutQuickNavItem,
  FacultyContent,
  FeatureItem,
  HeroContent,
  ManagementContent,
  TimelineItem,
} from "@/lib/types";

export const aboutHero: HeroContent = {
  eyebrow: "Our Story",
  title: "Built on Values, Driven by the Future",
  description:
    "Explorer & V.B.B. English Medium School nurtures capable, caring, and confident learners through disciplined values and forward-looking education.",
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

export const aboutQuickNav: AboutQuickNavItem[] = [
  { label: "Management", href: "#management" },
  { label: "Faculty", href: "#faculty" },
];

const profilePlaceholder = "/images/campus-future.svg";

export const managementContent: ManagementContent = {
  quickIntro: "Steady leadership and educational clarity guide every classroom decision at Explorer & V.B.B.",
  chairmanMessage: {
    title: "Message from the Chairman",
    intro:
      "Welcome to Explorer & V.B.B. English Medium School, Sayan. Our mission is to help every learner grow with integrity, confidence, and purpose while receiving broad, balanced education.",
    quote: "True education is the harmonious development of the physical, mental, and spiritual powers.",
    quoteSource: "Ellen G. White, Education",
    paragraphs: [
      "As teachers and administrators, we are committed to building an environment where children discover potential and convert it into lasting achievement.",
      "We prepare students to be self-reliant decision-makers, lifelong learners, and responsible citizens who contribute meaningfully to society.",
      "I thank our students, parents, teachers, and well-wishers for being an essential part of this shared journey toward excellence.",
    ],
  },
  leaders: [
    {
      name: "Mr. Borge",
      role: "Chairman",
      imageSrc: "/images/about/chairman.webp",
      imageAlt: "Placeholder portrait for Chairman Mr. Borge",
      bio: "A pioneering education leader guiding the school with long-term vision, value-led governance, and sustained commitment to student growth.",
      tags: ["Leadership", "School Vision"],
    },
    {
      name: "Mr. Obesion Murmu",
      role: "Principal - V.B.B. Memorial High School",
      imageSrc: profilePlaceholder,
      imageAlt: "Placeholder portrait for Principal Mr. Obesion Murmu",
      bio: "Leads the high school wing with a strong focus on academic rigor, student discipline, and mentoring for board-level readiness.",
      tags: ["High School", "Academics"],
    },
    {
      name: "Mrs. Maydha Murmu",
      role: "Principal - Explorer Elementary School",
      imageSrc: profilePlaceholder,
      imageAlt: "Placeholder portrait for Principal Mrs. Maydha Murmu",
      bio: "Leads foundational learning programs with emphasis on literacy, numeracy, confidence-building, and holistic primary development.",
      tags: ["Elementary", "Foundational Learning"],
    },
  ],
};

export const facultyContent: FacultyContent = {
  quickIntro:
    "Our faculty combines subject expertise, student mentorship, and modern teaching methods to support confident, future-ready learners.",
  members: [
    {
      name: "Mrs. Geeta Vaishwakarma",
      role: "Faculty Member",
      imageSrc: "/images/about/geeta-vaishwakarma.webp",
      imageAlt: "Placeholder portrait for Mrs. Geeta Deepak Vaishwakarma",
      bio: "Builds strong classroom foundations through clear teaching and consistent follow-up.",
      tags: ["Foundational Skills"],
    },
    {
      name: "Ms. Jagruti Sonawyo",
      role: "Faculty Member",
      imageSrc: "/images/about/jagruti-sonawyo.webp",
      imageAlt: "Placeholder portrait for Ms. Jagruti Sonawyo",
      bio: "Encourages concept clarity and active participation through structured lesson delivery.",
      tags: ["Classroom Engagement"],
    },
    {
      name: "Mr. Borge",
      role: "Faculty Member",
      imageSrc: "/images/about/divakar-borge.webp",
      imageAlt: "Placeholder portrait for Mr. Divakar Borge",
      bio: "Contributes to school culture with disciplined teaching practices and student guidance.",
      tags: ["Mentoring"],
    },
    {
      name: "Mrs. Binal Thakor",
      role: "Faculty Member",
      imageSrc: "/images/about/binal-thakor.webp",
      imageAlt: "Placeholder portrait for Mrs. Binal Thakor",
      bio: "Builds student confidence through patient instruction and regular reinforcement.",
      tags: ["Student Support"],
    },
    {
      name: "Mrs. Arti Santosh Parkhe",
      role: "Faculty Member",
      imageSrc: "/images/about/arti-santosh-parkhe.webp",
      imageAlt: "Placeholder portrait for Mrs. Arti Santosh Parkhe",
      bio: "Integrates practical examples to make everyday classroom concepts relatable and memorable.",
      tags: ["Applied Learning"],
    },
    {
      name: "Mrs. Senthumarai",
      role: "Faculty Member",
      imageSrc: "/images/about/senthumarai.webp",
      imageAlt: "Placeholder portrait for Mrs. Senthumarai",
      bio: "Promotes consistent classroom discipline while nurturing curiosity and positive habits.",
      tags: ["Learning Culture"],
    },
    {
      name: "Mrs. Nirmala Borge",
      role: "Faculty Member",
      imageSrc: "/images/about/nirmala-borge.webp",
      imageAlt: "Placeholder portrait for Mrs. Nirmala Borge",
      bio: "Focuses on student well-being and foundational understanding across learning levels.",
      tags: ["Student Well-Being"],
    },
    {
      name: "Mrs. Harsha Kiran Lad",
      role: "Faculty Member",
      imageSrc: "/images/about/harsha-kiran-lad.webp",
      imageAlt: "Placeholder portrait for Mrs. Harsha Kiran Lad",
      bio: "Encourages expression, participation, and steady progress through guided practice.",
      tags: ["Communication Growth"],
    },
    {
      name: "Mrs. Meena Patel",
      role: "Faculty Member",
      imageSrc: "/images/about/meena-patel.webp",
      imageAlt: "Placeholder portrait for Mrs. Meena Patel",
      bio: "Works closely with students to strengthen attention, confidence, and classroom performance.",
      tags: ["Individual Guidance"],
    },
    {
      name: "Mr. Anil Patel",
      role: "Faculty Member",
      imageSrc: "/images/about/anil-patel.webp",
      imageAlt: "Placeholder portrait for Mr. Anil Patel",
      bio: "Delivers structured subject instruction with emphasis on consistency and clarity.",
      tags: ["Subject Expertise"],
    },
    {
      name: "Mr. Hamukhbhai Rathod",
      role: "Faculty Member",
      imageSrc: "/images/about/hamukhbhai-rathod.webp",
      imageAlt: "Placeholder portrait for Mr. Hamukhbhai Rathod",
      bio: "Supports balanced student growth through disciplined teaching and mentoring.",
      tags: ["Mentoring"],
    },
    {
      name: "Mrs. Mamta Joshi",
      role: "Faculty Member",
      imageSrc: "/images/about/mamta-joshi.webp",
      imageAlt: "Placeholder portrait for Mrs. Mamta Joshi",
      bio: "Builds classroom confidence through caring instruction and student-first attention.",
      tags: ["Holistic Development"],
    },
    {
      name: "Mrs. Monika Lad",
      role: "Faculty Member",
      imageSrc: "/images/about/monika-lad.webp",
      imageAlt: "Placeholder portrait for Mrs. Monika Lad",
      bio: "Encourages independent thinking and strong study habits in day-to-day learning.",
      tags: ["Study Skills"],
    },
    {
      name: "Mr. Nirag Srivastav",
      role: "Faculty Member",
      imageSrc: "/images/about/nirag-srivastav.webp",
      imageAlt: "Placeholder portrait for Mr. Nirag Srivastav",
      bio: "Uses practical classroom approaches to improve concept retention and confidence.",
      tags: ["Concept Clarity"],
    },
    {
      name: "Mrs. Priyanka Mehta",
      role: "Faculty Member",
      imageSrc: "/images/about/priyanka-mehta.webp",
      imageAlt: "Placeholder portrait for Mrs. Priyanka Mehta",
      bio: "Guides students with a balanced focus on academics, discipline, and communication.",
      tags: ["Balanced Growth"],
    },
    {
      name: "Mrs. Sonal Rana",
      role: "Faculty Member",
      imageSrc: "/images/about/sonal-rana.webp",
      imageAlt: "Placeholder portrait for Mrs. Sonal Rana",
      bio: "Supports consistent classroom progress through clear lesson pacing and feedback.",
      tags: ["Classroom Excellence"],
    },
    {
      name: "Mrs. Trupti Nayak",
      role: "Faculty Member",
      imageSrc: "/images/about/trupti-nayak.webp",
      imageAlt: "Placeholder portrait for Mrs. Trupti Nayak",
      bio: "Promotes active student participation and collaborative learning behaviors.",
      tags: ["Collaboration"],
    },
    {
      name: "Mrs. Vijayata Desai",
      role: "Faculty Member",
      imageSrc: "/images/about/vijayata-desai.webp",
      imageAlt: "Placeholder portrait for Mrs. Vijayata Desai",
      bio: "Develops learner confidence through steady coaching and concept-focused teaching.",
      tags: ["Confidence Building"],
    },
    {
      name: "Mrs. Ankita Gupta",
      role: "Faculty Member",
      imageSrc: "/images/about/ankita-gupta.webp",
      imageAlt: "Placeholder portrait for Mrs. Ankita Gupta",
      bio: "Brings energetic classroom facilitation and reinforces fundamental concepts.",
      tags: ["Engaged Learning"],
    },
    {
      name: "Mrs. Chahat Chawla",
      role: "Faculty Member",
      imageSrc: "/images/about/chahat-chawla.webp",
      imageAlt: "Placeholder portrait for Mrs. Chahat Chawla",
      bio: "Helps students progress through supportive mentoring and regular academic tracking.",
      tags: ["Progress Tracking"],
    },
    {
      name: "Mrs. Hetvi Mistry",
      role: "Faculty Member",
      imageSrc: "/images/about/hetvi-mistry.webp",
      imageAlt: "Placeholder portrait for Mrs. Hetvi Mistry",
      bio: "Encourages curiosity and responsible learning habits with student-centered instruction.",
      tags: ["Student-Centered"],
    },
  ],
};

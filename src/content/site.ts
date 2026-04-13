export type TimetableSession = {
  day: "Monday" | "Wednesday" | "Thursday";
  time: string;
  venue: string;
  addressLine?: string;
  area?: string;
};

export type Testimonial = {
  quote: string;
  name: string;
  context: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const site = {
  club: {
    name: "Chingford Traditional Shotokan Karate Club",
    shortName: "CTSKC",
    established: 1988,
    locationPrimary: "Chingford, London",
    tagline: "Traditional Shotokan. Modern lives. Calm discipline.",
    instructor: {
      name: "Mark Durham",
      grade: "7th Dan",
      summary:
        "Teaching at CTSKC since 1988. Traditional values, patient coaching, and a structured path for beginners.",
    },
  },
  ctas: {
    primary: "Start Your Free Trial",
    secondary: "View Timetable",
  },
  hero: {
    headline: "Start From Zero. Become Something More",
    subheadline:
      "A welcoming karate club for children and adults, whether you're starting from scratch or returning to training.",
    bullets: [
      "Build real confidence",
      "Improve fitness",
      "Structured progression",
      "Beginner friendly",
    ],
  },
  trustStrip:
    "Established 1988 • DBS checked instructors • Child protection trained",
  trust: [
    {
      title: "Structured beginnings",
      description:
        "Clear fundamentals from day one — patient coaching that meets you at your level.",
    },
    {
      title: "Safeguarding in place",
      description:
        "Enhanced DBS checked instructors and child protection training — training you can trust.",
    },
    {
      title: "Decades of teaching",
      description:
        "Established 1988. Traditional Shotokan, taught with calm authority and modern clarity.",
    },
  ],
  beginner: {
    eyebrow: "Starting as a beginner",
    title: "Your first session is built for newcomers",
    intro:
      "No experience needed. You’ll train in a focused, respectful room — with instructors who explain what matters and keep you safe.",
    points: [
      {
        title: "What happens first",
        description:
          "A short introduction, a warm-up, and fundamentals at your pace — you’re never thrown in at the deep end.",
      },
      {
        title: "What to expect",
        description:
          "Comfortable sports clothes are fine. Take breaks when you need them. Control and progression come first.",
      },
      {
        title: "Why people stay",
        description:
          "You’ll feel the structure: steady skill-building, real fitness, and confidence that carries outside the dojo.",
      },
    ],
  },
  benefits: [
    {
      title: "Confidence",
      description: "Stand taller — in body and mind. Small wins compound quickly.",
    },
    {
      title: "Fitness",
      description: "Strength, mobility, and endurance built through purposeful repetition.",
    },
    {
      title: "Discipline",
      description: "A practice that trains attention, control, and calm consistency.",
    },
    {
      title: "Community",
      description: "A local club with real people — supportive, focused, welcoming.",
    },
  ],
  howItWorks: [
    {
      title: "Start your free trial",
      description:
        "Choose a session and send a quick message. We’ll confirm the best first visit for you.",
    },
    {
      title: "Arrive and begin",
      description:
        "You’ll be welcomed in, shown the basics, and coached through fundamentals with clear instruction.",
    },
    {
      title: "Train, then choose your path",
      description:
        "No pressure. If the club fits, we’ll map sensible next steps — one grade, one habit at a time.",
    },
  ],
  classes: [
    {
      title: "Kids",
      description:
        "Confidence, coordination and focus — taught with structure and warmth.",
      tags: ["Beginner-friendly", "Structured", "Supportive"],
    },
    {
      title: "Teens",
      description:
        "A disciplined outlet — fitness, self-control and skill progression.",
      tags: ["Technique", "Fitness", "Confidence"],
    },
    {
      title: "Adults",
      description:
        "Train strength, mobility and calm confidence — at your pace, without ego.",
      tags: ["All levels", "Traditional", "Modern lives"],
    },
    {
      title: "Mixed ability",
      description:
        "Beginners and experienced students training together — with clear pathways.",
      tags: ["Community", "Progression", "Coached"],
    },
  ],
  timetable: {
    sessions: [
      {
        day: "Monday",
        venue: "North Chingford Methodist Church",
        area: "Station Road, Chingford",
        time: "8:00pm – 9:15pm",
      },
      {
        day: "Wednesday",
        venue: "St Theresa's Catholic Church Hall",
        area: "Station Road, Chingford",
        time: "7:00pm – 8:45pm",
      },
      {
        day: "Thursday",
        venue: "Welcome Point",
        area: "South St, Ponders End, Enfield",
        time: "6:00pm – 7:30pm",
      },
    ] satisfies TimetableSession[],
  },
  testimonials: [
    {
      quote:
        "I expected it to be intimidating. It wasn’t. Clear coaching, respectful atmosphere, and I left feeling better than when I arrived.",
      name: "Alex",
      context: "Adult beginner",
    },
    {
      quote:
        "My child’s confidence has improved massively. The structure really helps — and the instructors are calm and attentive.",
      name: "Sam",
      context: "Parent",
    },
    {
      quote:
        "Good traditional training without the ego. You’re encouraged to progress properly — one step at a time.",
      name: "Jamie",
      context: "Returning karateka",
    },
  ] satisfies Testimonial[],
  faq: [
    {
      question: "What should I wear to my first session?",
      answer:
        "Comfortable sports clothing is perfect. If you continue, we’ll help you choose a gi that fits properly.",
    },
    {
      question: "How long does the session last?",
      answer:
        "Most sessions run 75–105 minutes depending on the day. You can take breaks whenever you need.",
    },
    {
      question: "Do I need to be fit already?",
      answer:
        "No. We start where you are. Fitness comes from training — not before it.",
    },
    {
      question: "Can parents watch?",
      answer:
        "Yes, depending on venue space. If you’re unsure, message us and we’ll confirm for that session.",
    },
    {
      question: "Is it safe for beginners?",
      answer:
        "Yes. Beginners focus on fundamentals, control, and safe progression. You’ll be guided closely.",
    },
  ] satisfies FaqItem[],
  contact: {
    email: "info@ctskc.co.uk",
    phone: "020 8524 1548",
    whatsappPreferred: true,
    quickNote:
      "If you’re unsure which class to start with, message us — we’ll recommend the best first session.",
    wednesdayWalkIn:
      "You can also turn up for the Wednesday session at St Theresa’s Catholic Church Hall (7:00pm).",
  },
  /** Photo files in /public/images/ (legacy site naming: `*-t.jpg` thumbnails). */
  assets: {
    logo: "/images/Shotokan.png",
    logoAlt: "Shotokan karate club emblem",
    homeHero: "/images/gallery1.jpg",
    homeHeroAlt: "Karate training — focus and movement in the dojo at CTSKC",
    whyFeature: "/images/group4-1-t.jpg",
    whyFeatureAlt: "Students in practice formation at CTSKC",
    aboutFeature: "/images/group4-2-t.jpg",
    aboutFeatureAlt: "Training session in progress at CTSKC",
  },
  gallery: {
    categories: ["Training", "Technique", "Community", "Gradings"] as const,
    items: [
      {
        src: "/images/gallery1.jpg",
        alt: "Karate training at CTSKC",
        category: "Training",
      },
      {
        src: "/images/big-mixed-group-3-t.jpg",
        alt: "Mixed group of junior and senior students",
        category: "Community",
      },
      {
        src: "/images/group4-1-t.jpg",
        alt: "Students lined up for practice",
        category: "Training",
      },
      {
        src: "/images/group4-2-t.jpg",
        alt: "Class training together",
        category: "Community",
      },
      {
        src: "/images/group4-3-t.jpg",
        alt: "Group kata and basics",
        category: "Technique",
      },
      {
        src: "/images/group-5-blackbelt-t.jpg",
        alt: "Black belt students and instructors",
        category: "Gradings",
      },
      {
        src: "/images/group-bw-t.jpg",
        alt: "Club group — traditional training",
        category: "Community",
      },
    ],
  },
} as const;


export type Proficiency = "core" | "production" | "learning";

export interface SkillItem {
  part: string; // part number, e.g. "01A"
  name: string;
  status: Proficiency;
  note?: string;
}

export interface SkillCategory {
  code: string; // sheet code e.g. "SHEET A"
  title: string;
  description: string;
  items: SkillItem[];
}

export const skillCategories: SkillCategory[] = [
  {
    code: "SHEET A",
    title: "Full-stack",
    description: "What I build interfaces and products with, day to day.",
    items: [
      { part: "A1", name: "TypeScript / JavaScript", status: "production", note: "used in production" },
      { part: "A2", name: "React", status: "production", note: "used in production" },
      { part: "A3", name: "Node.js", status: "production", note: "used in production" },
      { part: "A4", name: "HTML / CSS", status: "core", note: "core" },
    ],
  },
  {
    code: "SHEET B",
    title: "Systems & DSA",
    description: "The structural layer , how I think about problems before I write code.",
    items: [
      { part: "B1", name: "C", status: "core", note: "core" },
      { part: "B2", name: "C++", status: "core", note: "arrays, linked lists, stacks, queues, trees" },
      { part: "B3", name: "Java", status: "core", note: "OOP" },
    ],
  },
  {
    code: "SHEET C",
    title: "Exposure",
    description: "Languages I can read, write, and ship small things in , still building depth.",
    items: [
      { part: "C1", name: "Python", status: "learning" },
      { part: "C2", name: "Go", status: "learning" },
      { part: "C3", name: "Rust", status: "learning" },
    ],
  },
  {
    code: "SHEET D",
    title: "Data & Infra",
    description: "Where the product actually runs and how it stays usable for everyone.",
    items: [
      { part: "D1", name: "SQL", status: "production" },
      { part: "D2", name: "AWS EC2 / cloud computing", status: "production", note: "used in production" },
      { part: "D3", name: "CMS platforms", status: "production" },
      { part: "D4", name: "Accessibility-focused development", status: "core", note: "core to how I work" },
    ],
  },
];

export interface ProjectSection {
  heading: string;
  body: string;
}

export interface Project {
  slug: string;
  code: string; // e.g. "PROJECT 01"
  name: string;
  year: string;
  oneLiner: string;
  impactFirst: string;
  tech: string[];
  outcome: string;
  sections: ProjectSection[];
  links?: { label: string; href: string }[];
}

export const projects: Project[] = [
  {
    slug: "comubridge",
    code: "PROJECT 01",
    name: "Comubridge",
    year: "2024",
    oneLiner: "A communication bridge for people who are hearing-, visually-, or speech-impaired.",
    impactFirst:
      "Comubridge exists because most communication tools quietly assume everyone can hear, see, and speak the same way. This one doesn't. It's a full-stack app built so someone who signs, someone who reads text-to-speech, and someone typing can all end up in the same conversation without one of them doing extra work to be understood.",
    tech: ["React", "Node.js", "AWS EC2", "Accessible UI patterns"],
    outcome:
      "Deployed and running on AWS EC2, with the interface built and tested around screen-reader flows and reduced-motion behavior from the start, not bolted on afterward.",
    sections: [
      {
        heading: "Why it matters",
        body: "Accessibility isn't a feature request in Comubridge, it's the brief. The starting question was: what does a conversation look like when the three people in it are each missing a different channel , hearing, sight, or speech? Every screen had to hold up under at least one of those constraints.",
      },
      {
        heading: "How it's built",
        body: "The frontend is React, talking to a Node.js service layer, deployed on AWS EC2. I focused early decisions on semantic structure and keyboard flow rather than visual polish, since that's what actually determines whether an assistive-tech user can complete a task.",
      },
      {
        heading: "What I'd extend next",
        body: "Real-time captioning latency and offline fallback for low-connectivity users are the two gaps I'd close first if I kept building this out.",
      },
    ],
  },
  {
    slug: "track-o-bar",
    code: "PROJECT 02",
    name: "Track-O-Bar",
    year: "2021–2022",
    oneLiner: "A C/C++ systems project built to actually use data structures, not just study them.",
    impactFirst:
      "Track-O-Bar started as a way to stop treating arrays, linked lists, stacks, queues, and trees as exam answers and start treating them as tools. It's a practical tracking application where each structure earns its place , nothing is there to demonstrate that I know the syllabus.",
    tech: ["C", "C++", "Data structures: arrays, linked lists, stacks, queues, trees"],
    outcome: "Reached the quarter-finals of the e-Yantra Innovation Challenge, 2021–2022.",
    sections: [
      {
        heading: "Why it matters",
        body: "This was the project that made data structures click as design decisions, not homework. Choosing a stack versus a queue versus a tree changed how the whole system behaved, and I had to justify each choice.",
      },
      {
        heading: "How it's built",
        body: "Core logic is written in C and C++, with linked lists and trees handling the structural relationships in the data and stacks/queues managing state and ordering through the system.",
      },
    ],
  },
  {
    slug: "docnatic",
    code: "PROJECT 03",
    name: "Docnatic",
    year: "2023",
    oneLiner: "A full-stack tool for generating and sharing reusable report, letter, and cover-page templates.",
    impactFirst:
      "Docnatic came from a small, annoying, universal problem: people rebuilding the same report or letter template from scratch every time. It cut estimated manual template-search time by 40% by making templates something a community builds and reuses instead of something everyone starts over.",
    tech: ["HTML", "CSS", "JavaScript", "Full-stack architecture"],
    outcome: "Cut estimated manual template search time by ~40% for users.",
    sections: [
      {
        heading: "Why it matters",
        body: "The value wasn't the templates themselves, it was the system around them , versioning, sharing, and reuse , that turned a personal file folder into something a community could build on together.",
      },
      {
        heading: "How it's built",
        body: "A responsive, accessible UI in modern HTML/CSS/JavaScript sits on top of a template storage and versioning layer, designed so sharing and reusing a template takes fewer steps than recreating one.",
      },
    ],
  },
  {
    slug: "gps-safety-device",
    code: "PROJECT 04",
    name: "GPS Safety Device",
    year: "2021",
    oneLiner: "A wearable, real-time GPS tracker designed for personal safety.",
    impactFirst:
      "This was my first real hardware-meets-software project: a wearable device concept focused on one job , giving someone a reliable, real-time location signal in a personal safety scenario, with room to grow into alerting and geofencing.",
    tech: ["Systems design", "Hardware/software integration", "Requirements documentation"],
    outcome: "Documented system requirements and hardware/software integration assumptions for future extension.",
    sections: [
      {
        heading: "Why it matters",
        body: "Personal safety devices fail when they're overbuilt and the core signal , where is this person, right now , gets buried under features. I designed around that one job first.",
      },
      {
        heading: "How it's built",
        body: "I documented the system requirements and the assumptions needed to integrate hardware GPS components with a software layer, along with a path toward alerting and geofencing as future extensions.",
      },
    ],
  },
];

export interface ExperienceEntry {
  role: string;
  org: string;
  period: string;
  bullets: string[];
}

export const experience: ExperienceEntry[] = [
  {
    role: "IT Intern",
    org: "SAFEInvest LLP, Surat, India",
    period: "August2023–January 2024",
    bullets: [
      "Built and maintained a dynamic CMS-based newsletter archive and admin dashboard, improving UI responsiveness, improving user engagement by 40%, cutting user search time by ~40%, and reducing manual content updates by ~50% for non-technical staff, thereby, improving operational efficiency.",
      "Partnered with stakeholders to refine requirements and applied software engineering and UI/UX best practices to design modular frontend/backend components, troubleshoot full-stack issues, and lower user-reported errors.",
    ],
  },
  {
    role: "Junior Computer Lab Technician",
    org: "Fairleigh Dickinson University, NJ, USA",
    period: "September 2025-May 2026",
    bullets: [
      "Maintain and troubleshoot 90+ lab workstations across multiple computer labs, contributing to high system availability and minimal downtime for students and faculty, along with performing OS/application updates, hardware checks, and incident escalation through the SAMI ticketing system to uphold high uptime within SLAs.",
      "Log end-to-end ticket handling by logging, tracking, and communicating incident status, while documenting recurring issues and fixes to reduce repeat tickets and improve support efficiency.",
    ],
  },
  {
    role: "Senior Computer Lab Technician",
    org: "Fairleigh Dickinson University",
    period: "June 2025-Present",
    bullets: [
      "Manage day-to-day operation and maintenance of 90+ lab workstations while assisting with scheduling student workers, ensuring reliable coverage, high availability, and a seamless experience for students and faculty.",
      "Diagnose and resolve hardware, software, and basic network issues; document procedures; and provide input that administration uses to optimize lab operations and implement process improvements.",
    ],
  },
];

export interface EducationEntry {
  degree: string;
  org: string;
  period: string;
  note?: string;
}

export const education: EducationEntry[] = [
  {
    degree: "MS, Computer Science",
    org: "Graduate program",
    period: "2025–2027 · in progress",
    note: "27 of 30 credits complete , remaining coursework plus a 3-credit internship ahead.",
  },
  {
    degree: "B.Tech, Information Technology",
    org: "Veer Narmad South Gujarat University",
    period: "2023",
  },
];

export interface Achievement {
  title: string;
  detail: string;
  year: string;
}

export const achievements: Achievement[] = [
  {
    title: "1st Place , AURO University Pitcher's League",
    detail: "Presented and won first place with a cash prize of ₹10,000.",
    year: "2022–2023",
  },
  {
    title: "Semi-finalist , e-Yantra Innovation Challenge",
    detail: "Reached the semi-finals with the same project presented at Pitcher's League.",
    year: "2022–2023",
  },
  {
    title: "Quarter-finalist , e-Yantra Innovation Challenge",
    detail: "Reached the quarter-finals with Track-O-Bar.",
    year: "2021–2022",
  },
];

export interface CourseInProgress {
  name: string;
  href: string;
}

export const coursesInProgress: CourseInProgress[] = [
  { name: "Google UX Design", href: "https://www.coursera.org/specializations/google-ux-design" },
  { name: "AI Engineer Associate", href: "https://www.coursera.org/specializations/packt-ai-engineer-associate" },
  { name: "Google IT Support", href: "https://www.coursera.org/specializations/google-it-support" },
  { name: "IBM AI Product Manager", href: "https://www.coursera.org/specializations/ibm-ai-product-manager" },
  { name: "Microsoft Azure AI Fundamentals (AI-900)", href: "https://www.coursera.org/specializations/microsoft-azure-ai-900-ai-fundamentals" },
  { name: "Google Cloud: Machine Learning Engineer", href: "https://www.coursera.org/specializations/preparing-for-google-cloud-machine-learning-engineer-professional-certificate" },
];

export interface Hobby {
  title: string;
  detail: string;
}

export const hobbies: Hobby[] = [
  {
    title: "Painting",
    detail: "Mostly texture-driven work , I like surfaces that reward a second look.",
  },
  {
    title: "Mixed-media & DIY",
    detail: "Building things with my hands in whatever material is around , texture experiments, small DIY builds.",
  },
  {
    title: "Furniture assembly",
    detail: "I build IKEA furniture for fun, not just necessity. The instruction sheet is basically a UX case study.",
  },
];

export const nav = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#achievements", label: "Achievements" },
  { href: "#hobbies", label: "Outside Work" },
  { href: "#contact", label: "Contact" },
];

export const site = {
  name: "Isha P Dadawala",
  role: "Product-minded Computer Science graduate student",
  tagline: "I design the parts list before I write the code.",
  email: "you@example.com",
  linkedin: "https://linkedin.com/in/isha-dadawala",
  github: "https://github.com/IshaDadawala",
  resumeHref: "/resume.pdf",
};

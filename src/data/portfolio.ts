// All personal details live here as clearly marked placeholders.
// Replace the [BRACKETED] values with real information — nothing is invented.

export const profile = {
  name: "[FULL NAME]",
  title:
    "B.Tech AI & Data Science Student | AI/ML Enthusiast | Hackathon Winner",
  intro:
    "Building intelligent solutions, solving real-world problems, and turning ideas into impactful technology.",
  location: "[CITY, COUNTRY]",
  email: "[EMAIL ADDRESS]",
  linkedin: "[LINKEDIN URL]",
  github: "[GITHUB URL]",
  resumeUrl: "[RESUME LINK]",
  tagline: "AI & Data Science student building real-world solutions.",
};

export const navLinks = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Achievements", href: "#achievements" },
  { label: "Certifications", href: "#certifications" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const quickFacts = [
  { icon: "🎓", label: "B.Tech – AI & Data Science" },
  { icon: "🏆", label: "2+ Hackathon Wins" },
  { icon: "💻", label: "AI/ML & Development" },
  { icon: "🚀", label: "Project Builder" },
];

export const aboutParagraphs = [
  "I am currently pursuing a B.Tech in Artificial Intelligence & Data Science, where I spend most of my time between coursework, datasets, and side projects.",
  "My core interests sit at the intersection of Artificial Intelligence, Machine Learning, Data Science, and Software Development — I enjoy taking a messy real-world problem and shaping it into something a model or a product can actually solve.",
  "Hackathons are where a lot of that learning gets tested. With 2+ wins so far, they have taught me how to scope an idea fast, build it with a team, and present it clearly under pressure.",
  "Outside of that, I keep learning continuously and keep building — every project adds one more tool to the way I think about problems.",
];

export const education = [
  {
    degree: "B.Tech – Artificial Intelligence & Data Science",
    institution: "[COLLEGE NAME]",
    location: "[COLLEGE LOCATION]",
    duration: "[2023 – 2027]",
    score: "CGPA: [X.XX]",
    coursework:
      "Relevant coursework: [COURSEWORK, e.g. Machine Learning, Data Structures, Statistics]",
  },
  {
    degree: "Higher Secondary / Class XII",
    institution: "[SCHOOL NAME]",
    location: "[SCHOOL LOCATION]",
    duration: "[YEAR – YEAR]",
    score: "Percentage: [XX%]",
    coursework: "",
  },
  {
    degree: "Secondary / Class X",
    institution: "[SCHOOL NAME]",
    location: "[SCHOOL LOCATION]",
    duration: "[YEAR – YEAR]",
    score: "Percentage: [XX%]",
    coursework: "",
  },
];

export const skillGroups = [
  {
    title: "Programming",
    icon: "⌨️",
    skills: ["Python", "Java", "C / C++", "JavaScript"],
  },
  {
    title: "AI & Machine Learning",
    icon: "🧠",
    skills: [
      "Machine Learning",
      "Deep Learning",
      "NLP",
      "Generative AI",
      "Computer Vision",
    ],
  },
  {
    title: "Data Science",
    icon: "📊",
    skills: ["NumPy", "Pandas", "Matplotlib", "SQL"],
  },
  {
    title: "Development",
    icon: "🛠️",
    skills: ["HTML", "CSS", "React", "Node.js", "FastAPI"],
  },
  {
    title: "Tools & Platforms",
    icon: "⚙️",
    skills: ["Git", "GitHub", "VS Code", "Docker", "[OTHER TOOLS]"],
  },
];

export const projectCategories = [
  "All",
  "AI/ML",
  "Web Development",
  "Data Science",
  "Other",
] as const;

export type ProjectCategory = (typeof projectCategories)[number];

export const projects: {
  name: string;
  category: Exclude<ProjectCategory, "All">;
  description: string;
  problem: string;
  tech: string[];
  github: string;
  demo: string;
}[] = [
  {
    name: "[PROJECT NAME]",
    category: "AI/ML",
    description: "[SHORT PROJECT DESCRIPTION]",
    problem: "[PROBLEM THIS PROJECT SOLVES]",
    tech: ["[TECH 1]", "[TECH 2]", "[TECH 3]"],
    github: "[GITHUB REPO LINK]",
    demo: "[LIVE DEMO LINK]",
  },
  {
    name: "[PROJECT NAME]",
    category: "Web Development",
    description: "[SHORT PROJECT DESCRIPTION]",
    problem: "[PROBLEM THIS PROJECT SOLVES]",
    tech: ["[TECH 1]", "[TECH 2]", "[TECH 3]"],
    github: "[GITHUB REPO LINK]",
    demo: "",
  },
  {
    name: "[PROJECT NAME]",
    category: "Data Science",
    description: "[SHORT PROJECT DESCRIPTION]",
    problem: "[PROBLEM THIS PROJECT SOLVES]",
    tech: ["[TECH 1]", "[TECH 2]", "[TECH 3]"],
    github: "[GITHUB REPO LINK]",
    demo: "",
  },
  {
    name: "[PROJECT NAME]",
    category: "Other",
    description: "[SHORT PROJECT DESCRIPTION]",
    problem: "[PROBLEM THIS PROJECT SOLVES]",
    tech: ["[TECH 1]", "[TECH 2]"],
    github: "[GITHUB REPO LINK]",
    demo: "",
  },
];

export const achievements = [
  {
    title: "🏆 Hackathon Winner",
    event: "[HACKATHON NAME]",
    organizer: "[ORGANIZER]",
    year: "[YEAR]",
    position: "[POSITION / RESULT]",
    description: "Secured [POSITION] by developing [PROJECT / IDEA].",
    certificate: "[CERTIFICATE LINK]",
  },
  {
    title: "🏆 Hackathon Winner",
    event: "[HACKATHON NAME]",
    organizer: "[ORGANIZER]",
    year: "[YEAR]",
    position: "[POSITION / RESULT]",
    description: "Secured [POSITION] by developing [PROJECT / IDEA].",
    certificate: "[CERTIFICATE LINK]",
  },
];

export const highlights = [
  { value: "2+", label: "Hackathons Won" },
  { value: "[X]+", label: "Projects Built" },
  { value: "[X]+", label: "Certifications" },
  { value: "[X]+", label: "Technologies" },
  { value: "[X]+", label: "Competitions Participated" },
];

export const certifications = [
  {
    name: "[AI/ML CERTIFICATION NAME]",
    issuer: "[ISSUING ORGANIZATION]",
    date: "[YEAR]",
    skills: ["[SKILL]", "[SKILL]"],
    credentialId: "[CREDENTIAL ID]",
    link: "[CERTIFICATE LINK]",
  },
  {
    name: "[PYTHON CERTIFICATION NAME]",
    issuer: "[ISSUING ORGANIZATION]",
    date: "[YEAR]",
    skills: ["[SKILL]", "[SKILL]"],
    credentialId: "[CREDENTIAL ID]",
    link: "[CERTIFICATE LINK]",
  },
  {
    name: "[DATA SCIENCE CERTIFICATION NAME]",
    issuer: "[ISSUING ORGANIZATION]",
    date: "[YEAR]",
    skills: ["[SKILL]", "[SKILL]"],
    credentialId: "[CREDENTIAL ID]",
    link: "[CERTIFICATE LINK]",
  },
  {
    name: "[GENERATIVE AI CERTIFICATION NAME]",
    issuer: "[ISSUING ORGANIZATION]",
    date: "[YEAR]",
    skills: ["[SKILL]", "[SKILL]"],
    credentialId: "[CREDENTIAL ID]",
    link: "[CERTIFICATE LINK]",
  },
  {
    name: "[CLOUD CERTIFICATION NAME]",
    issuer: "[ISSUING ORGANIZATION]",
    date: "[YEAR]",
    skills: ["[SKILL]", "[SKILL]"],
    credentialId: "[CREDENTIAL ID]",
    link: "[CERTIFICATE LINK]",
  },
  {
    name: "[INTERNSHIP / WORKSHOP CERTIFICATE]",
    issuer: "[ISSUING ORGANIZATION]",
    date: "[YEAR]",
    skills: ["[SKILL]", "[SKILL]"],
    credentialId: "[CREDENTIAL ID]",
    link: "[CERTIFICATE LINK]",
  },
];

export const experience = [
  {
    role: "[ROLE / POSITION]",
    organization: "[ORGANIZATION NAME]",
    duration: "[MONTH YEAR – MONTH YEAR]",
    responsibilities: [
      "[RESPONSIBILITY]",
      "[RESPONSIBILITY]",
      "[RESPONSIBILITY]",
    ],
    achievement: "[KEY ACHIEVEMENT]",
  },
  {
    role: "[ROLE / POSITION]",
    organization: "[ORGANIZATION NAME]",
    duration: "[MONTH YEAR – MONTH YEAR]",
    responsibilities: ["[RESPONSIBILITY]", "[RESPONSIBILITY]"],
    achievement: "[KEY ACHIEVEMENT]",
  },
];

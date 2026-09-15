// =========================================================================
// 🚀 TEMILADE ATUNDE - PORTFOLIO DATA CONFIGURATION
// =========================================================================
// 💡 TIP: Whenever you get a new internship, job, or collaborate on a new
// project, simply edit or add an item to the arrays below! Everything in the
// portfolio will automatically update.
// =========================================================================

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  url?: string;
  tags: string[];
  featured?: boolean;
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  type?: 'internship' | 'job' | 'collaboration' | 'education' | 'founder';
  description?: string;
}

export interface EducationItem {
  school: string;
  degree: string;
  period: string;
  status: string;
}

export const personalInfo = {
  name: "Temilade Atunde",
  role: "Software Engineer",
  email: "temiladeatunde@gmail.com",
  location: "Lagos, Nigeria",
  startedCoding: 2023,
  university: "Redeemer's University",
  major: "Computer Science",
  graduationYear: "2026",
  company: "Temicode",
  github: "https://github.com/Temilade2010",
  bio: "Software Engineer passionate about building reliable, user-focused software. Coding since 2023, studying Computer Science at Redeemer's University (Class of 2026), building mobile apps with Flutter, backend systems with Java, C++, C#, Go, Python & Node.js, and collaborating on open-source projects like ScholeOs.",
  heroSubtitle: "Software Engineer passionate about building reliable, user-focused software. Coding since 2023 · Computer Science at Redeemer's University ('26) · Flutter · Java · C++ · C# · Go · Node.js · Python.",
};

// =========================================================================
// 💼 WORK EXPERIENCE, INTERNSHIPS & COLLABORATIONS
// =========================================================================
// 💡 TO ADD A NEW JOB OR INTERNSHIP: Add an object at the top of the array:
// {
//   period: 'June 2026 - Aug 2026',
//   role: 'Software Engineering Intern',
//   company: 'Company Name',
//   type: 'internship',
// }
// =========================================================================
export const experiences: ExperienceItem[] = [
  {
    period: '2025 - Present',
    role: 'Open Source Collaborator',
    company: 'ScholeOs',
    type: 'collaboration',
    description: 'Active contributor collaborating on the ScholeOs educational platform ecosystem.',
  },
  {
    period: '2025 - Present',
    role: 'Founder & Software Engineer',
    company: 'Temicode',
    type: 'founder',
    description: 'Developing high-performance web applications and digital tools.',
  },
  {
    period: '2022 - 2026',
    role: 'Computer Science Undergraduate',
    company: "Redeemer's University",
    type: 'education',
    description: 'Studying Computer Science with a strong foundation in software engineering, algorithms, and distributed systems.',
  },
  {
    period: '2023 - Present',
    role: 'Flutter & Backend Developer',
    company: 'Independent & Open Source',
    type: 'job',
    description: 'Building cross-platform mobile apps with Flutter & Appwrite, and scalable backend services with Node.js, Python, Java, C++, C#, and Go.',
  },
];

// =========================================================================
// 📂 PROJECTS & COLLABORATIONS
// =========================================================================
// 💡 TO ADD A NEW PROJECT: Add an object to the list below:
// =========================================================================
export const projects: ProjectItem[] = [
  {
    id: 'scholeos',
    title: 'ScholeOs (Collaborative Project)',
    description: 'Collaborating on ScholeOs: an innovative education operating system and school management platform designed for interactive academic workflows and modern student administration.',
    image: '/scholeos.jpg',
    url: 'https://github.com/odulanaprogress/ScholeOS',
    tags: ['Open Source', 'Collaboration', 'EdTech', 'Fullstack', 'Web App'],
    featured: true,
  },
  {
    id: 'notes-app',
    title: 'Notes App (Flutter & Appwrite)',
    description: 'Full-featured cross-platform mobile application built with Flutter and Appwrite.io backend, offering real-time cloud note syncing, category tags, and smooth native 60fps performance.',
    image: '/notes-app.jpg',
    url: 'https://github.com/Temilade2010/notes-app',
    tags: ['Flutter', 'Dart', 'Appwrite.io', 'Mobile App', 'Cloud Sync'],
    featured: true,
  },
  {
    id: 'weather-app',
    title: 'SkyFlow Weather Application',
    description: 'Interactive global weather application delivering live forecast data, climate analytics, temperature trends, and real-time meteorological conditions wherever you are.',
    image: '/weather-app.jpg',
    url: 'https://github.com/Temilade2010/Weather-app',
    tags: ['JavaScript', 'Weather API', 'HTML5/CSS3', 'Responsive UI'],
  },
  {
    id: 'task-tracker',
    title: 'Task Tracker & Daily Planner',
    description: 'Productivity application engineered to manage daily tasks, priority goals, and schedule tracking with smooth state transitions and intuitive UX.',
    image: '/uncutxtra.png',
    url: 'https://github.com/Temilade2010/Task-Tracker',
    tags: ['TypeScript', 'Productivity', 'State Management', 'Web App'],
  },
  {
    id: 'typescript-hero',
    title: 'TypeScript Architecture & Patterns',
    description: 'Comprehensive software engineering patterns, algorithmic solutions, and type-safe systems exploring advanced TypeScript development.',
    image: '/emojidb.png',
    url: 'https://github.com/Temilade2010/typescript-as-an-hero',
    tags: ['TypeScript', 'Design Patterns', 'Open Source', 'Algorithms'],
  },
];

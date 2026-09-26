// =========================================================================
// 🚀 TEMILADE ATUNDE - PORTFOLIO DATA (JAVASCRIPT)
// =========================================================================

export const personalInfo = {
  name: "Temilade Atunde",
  role: "Software Engineer",
  email: "temiladeatunde@gmail.com",
  location: "Lagos, Nigeria",
  startedCoding: 2023,
  university: "Redeemer's University",
  degree: "B.Sc. Computer Science",
  enteredUniversityYear: 2026,
  expectedGraduationYear: "2030",
  graduationClass: "Class of 2030",
  company: "Temicode",
  github: "https://github.com/Temilade2010",
  instagram: "https://www.instagram.com/temi.code/",
  statusBadge: "Available for projects & open source",
  bio: "Hey, I'm Temilade Atunde — a software engineer and Computer Science student at Redeemer's University (Class of '30) based in Lagos. I've been coding since 2023. I build mobile apps with React Native, responsive web apps with React and JavaScript, and backend services with Node.js and Python. I love building practical tools that people actually enjoy using.",
  heroSubtitle: "Software engineer & CS undergraduate at Redeemer's University ('30). Building mobile apps with React Native, clean web apps with React & JavaScript, and contributing to open-source software.",
};

// =========================================================================
// 💼 WORK EXPERIENCE & EDUCATION (HONEST & MODERATE)
// =========================================================================
export const experiences = [
  {
    period: '2026 - 2030 (Expected)',
    role: 'B.Sc. Computer Science Undergraduate',
    company: "Redeemer's University",
    type: 'education',
    description: 'Enrolled in 2026 for a 4-year Computer Science degree. Deep dive into algorithms, computational theory, software design, and database systems.',
  },
  {
    period: '2025 - Present',
    role: 'Open Source Contributor',
    company: 'ScholeOs',
    type: 'collaboration',
    description: 'Collaborating on ScholeOs, an open-source educational platform and student management workspace on GitHub.',
  },
  {
    period: '2025 - Present',
    role: 'Developer & Creator',
    company: 'Temicode',
    type: 'founder',
    description: 'Personal projects lab building practical web utilities, mobile prototypes, and student productivity tools.',
  },
  {
    period: '2023 - Present',
    role: 'Mobile & Web Development',
    company: 'Independent Projects',
    type: 'job',
    description: 'Building cross-platform mobile apps with React Native & Appwrite, and creating interactive, responsive web applications with JavaScript and React.',
  },
];

// =========================================================================
// 📂 PROJECTS (WITH DIRECT GITHUB & LIVE DEMO LINKS)
// =========================================================================
export const projects = [
  {
    id: 'scholeos',
    title: 'ScholeOs (Collaborative School OS)',
    description: 'An open-source educational workspace and school management system designed for students and teachers to coordinate courses, assignments, and grades efficiently.',
    image: '/scholeos.jpg',
    github: 'https://github.com/odulanaprogress/ScholeOS',
    liveDemo: 'https://github.com/odulanaprogress/ScholeOS',
    tags: ['React', 'JavaScript', 'Node.js', 'Open Source', 'EdTech'],
    status: 'Live',
    highlights: [
      'Interactive student & faculty dashboards',
      'Real-time gradebook and curriculum coordination',
      'Collaborative open-source architecture on GitHub'
    ]
  },
  {
    id: 'notes-app',
    title: 'Notes App (React Native & Appwrite)',
    description: 'A clean, fast cross-platform mobile note-taking application powered by Appwrite. Supports offline caching, real-time cloud synchronization, category tags, and smooth 60fps animations.',
    image: '/notes-app.jpg',
    github: 'https://github.com/Temilade2010/notes-app',
    liveDemo: 'https://github.com/Temilade2010/notes-app/releases',
    tags: ['React Native', 'JavaScript', 'Appwrite', 'Mobile App', 'Offline First'],
    status: 'Live',
    highlights: [
      'Local-first note caching with instant cloud synchronization',
      'Clean component architecture with React Native hooks',
      'Instant markdown preview and custom folders'
    ]
  },
  {
    id: 'weather-app',
    title: 'SkyFlow Weather Application',
    description: 'A responsive web application providing live weather updates, atmospheric forecasts, temperature curves, and city search powered by live weather APIs.',
    image: '/weather-app.jpg',
    github: 'https://github.com/Temilade2010/Weather-app',
    liveDemo: 'https://temilade2010.github.io/Weather-app/',
    tags: ['JavaScript', 'HTML5/CSS3', 'Weather API', 'Responsive UI'],
    status: 'Live',
    highlights: [
      'Live geolocation with fallback search across cities',
      'Dynamic weather condition backgrounds and icons',
      'Clean, intuitive mobile-friendly layout'
    ]
  },
  {
    id: 'task-tracker',
    title: 'Task Tracker & Daily Planner',
    description: 'A simple, intuitive productivity app to organize daily tasks, set priorities, and keep track of deadlines with zero clutter and local storage persistence.',
    image: '/uncutxtra.png',
    github: 'https://github.com/Temilade2010/Task-Tracker',
    liveDemo: 'https://github.com/Temilade2010/Task-Tracker',
    tags: ['JavaScript', 'React', 'Local Storage', 'Productivity'],
    status: 'Live',
    highlights: [
      'Quick task creation with priority labels and dates',
      'Instant search and filter by status',
      'Fast client-side persistence'
    ]
  },
  {
    id: 'campuspulse',
    title: 'CampusPulse (Redeemer’s University Companion)',
    description: 'A student companion project for Redeemer’s University, helping students track course timetables, exam countdowns, campus announcements, and academic schedules in one place.',
    image: '/scholeos.jpg',
    github: 'https://github.com/Temilade2010',
    liveDemo: 'https://github.com/Temilade2010',
    tags: ['React Native', 'Node.js', 'Student App', 'In Development'],
    status: 'In Progress',
    highlights: [
      'Course timetable with reminder notifications',
      'Offline-friendly lecture and test schedules',
      'Designed specifically for Redeemer’s University students'
    ]
  }
];

// =========================================================================
// 📝 AUTHENTIC, HUMAN BLOG ARTICLES
// =========================================================================
export const blogArticles = [
  {
    id: 'react-native-appwrite-journey',
    title: 'What I Learned Building a Real-Time Notes App with React Native & Appwrite',
    slug: 'react-native-appwrite-journey',
    date: 'Feb 2026',
    readTime: '4 min read',
    category: 'React Native',
    tag: 'Mobile Development',
    summary: 'A look into how I built my React Native Notes App with Appwrite, how offline caching works, and the lessons learned along the way.',
    claps: 168,
    takeaways: [
      'Why offline-first caching matters when internet connection drops',
      'Structuring state and local storage cleanly with React hooks',
      'Using Appwrite for auth and realtime database updates'
    ],
    content: {
      intro: "When I started working on my Notes App, I wanted an app that felt fast, looked good, and didn't lose notes whenever the Wi-Fi flickered. Here is the journey of how I built it with React Native and Appwrite.",
      sections: [
        {
          heading: '1. Why React Native and Appwrite?',
          body: 'React Native makes it easy to build native-feeling mobile applications with familiar React paradigms and JavaScript. Appwrite gave me an easy-to-use backend with authentication, document database, and realtime listeners out of the box without needing to manage huge server infrastructure.'
        },
        {
          heading: '2. The Importance of Offline-First',
          body: 'At first, every edit was an API call. When connection dropped, the app froze. I learned to save everything locally first into SQLite / AsyncStorage, update the UI immediately, and let a background task sync with Appwrite when online. The user experience improved 10x.'
        },
        {
          heading: '3. What I Would Do Differently',
          body: 'Keep state management simple from day one. Start with minimal hooks before adding complex state machines you don’t need yet.'
        }
      ],
      conclusion: 'Shipping this app taught me more about real-world mobile development than dozens of theoretical tutorials.'
    }
  },
  {
    id: 'redeemers-university-journey',
    title: 'Starting My Computer Science Degree at Redeemer’s University',
    slug: 'redeemers-university-journey',
    date: 'Jan 2026',
    readTime: '4 min read',
    category: 'University',
    tag: 'Student Journey',
    summary: 'Starting university in 2026 (Class of 2030). How I balance academic coursework, personal coding projects, and open source.',
    claps: 245,
    takeaways: [
      'Balancing math and computer science theory with hands-on building',
      'Why open-source collaboration makes coursework much clearer',
      'My goals for the 4 years leading to graduation in 2030'
    ],
    content: {
      intro: "Entering Redeemer's University in 2026 to study Computer Science has been an exciting new chapter. Here is my mindset on making the most of these four years.",
      sections: [
        {
          heading: '1. Theoretical Foundations vs. Coding Skills',
          body: 'Before university, my focus was largely on building apps and learning frameworks. University is teaching me the math, algorithms, and logic underlying everything we take for granted.'
        },
        {
          heading: '2. Building Real Projects on the Side',
          body: 'Theory is best cemented by building. Through Temicode and open source projects like ScholeOs, I apply what I learn in class directly into running code.'
        }
      ],
      conclusion: 'The road to 2030 is all about continuous learning, staying curious, and building software that genuinely helps people.'
    }
  },
  {
    id: 'first-open-source-scholeos',
    title: 'Contributing to Open Source: My Experience with ScholeOs',
    slug: 'first-open-source-scholeos',
    date: 'Dec 2025',
    readTime: '3 min read',
    category: 'Open Source',
    tag: 'Collaboration',
    summary: 'What jumping into an existing open-source GitHub codebase taught me about Git, teamwork, reading code, and clean pull requests.',
    claps: 132,
    takeaways: [
      'Reading other people’s code is a superpower',
      'Writing clear commit messages and PR descriptions',
      'The welcoming nature of the open-source community'
    ],
    content: {
      intro: "Contributing to your first open-source project can be intimidating. Here is how I got started on ScholeOs and why every developer should try it.",
      sections: [
        {
          heading: '1. Overcoming the Fear of the First PR',
          body: 'I was worried my code wouldn’t be good enough. But starting with small UI bug fixes, reading documentation, and asking questions helped me get comfortable with the team.'
        },
        {
          heading: '2. Skills That Tutorials Don’t Teach',
          body: 'Working on ScholeOs taught me real Git workflows: rebasing, resolving merge conflicts, and structuring features modularly so others can review them smoothly.'
        }
      ],
      conclusion: 'Open source is the best developer classroom in the world. If you haven’t made your first PR yet, find an open repo and jump in!'
    }
  }
];

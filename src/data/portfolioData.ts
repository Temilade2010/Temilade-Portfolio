// =========================================================================
// 🚀 TEMILADE ATUNDE - PORTFOLIO DATA CONFIGURATION
// =========================================================================

export interface ProjectItem {
  id: string;
  title: string;
  description: string;
  image: string;
  url?: string;
  tags: string[];
  featured?: boolean;
  isPlanned?: boolean;
  status?: 'Live' | 'In Development' | 'Planned' | 'In Concept';
  plannedTimeline?: string;
  architectureHighlights?: string[];
}

export interface ExperienceItem {
  period: string;
  role: string;
  company: string;
  type?: 'internship' | 'job' | 'collaboration' | 'education' | 'founder';
  description?: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  slug: string;
  date: string;
  readTime: string;
  category: 'Flutter' | 'TypeScript' | 'Systems' | 'Education' | 'Architecture';
  tag: string;
  summary: string;
  claps: number;
  featured?: boolean;
  takeaways: string[];
  content: {
    intro: string;
    sections: {
      heading: string;
      body: string;
      codeSnippet?: {
        language: string;
        code: string;
      };
    }[];
    conclusion: string;
  };
}

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
  twitter: "https://x.com/honour_can_code",
  statusBadge: "Available for projects & open source",
  bio: "Software Engineer passionate about building reliable, user-focused software. Coding since 2023, entered Redeemer's University in 2026 pursuing Computer Science (Class of 2030), engineering mobile apps with Flutter, distributed backends with Go, Java, C++, C#, Python & Node.js, and contributing to open-source ecosystems like ScholeOs.",
  heroSubtitle: "Software Engineer crafting reliable, high-performance systems. Coding since 2023 · Computer Science at Redeemer's University ('30) · Flutter · Go · Java · C++ · C# · TypeScript · Node.js · Python.",
};

// =========================================================================
// 💼 WORK EXPERIENCE & EDUCATION
// =========================================================================
export const experiences: ExperienceItem[] = [
  {
    period: '2026 - 2030 (Expected)',
    role: 'B.Sc. Computer Science Undergraduate',
    company: "Redeemer's University",
    type: 'education',
    description: 'Enrolled in 2026 for a 4-year Computer Science degree. Rigorous focus on data structures, algorithmic analysis, computer systems architecture, and distributed computing.',
  },
  {
    period: '2025 - Present',
    role: 'Open Source Collaborator',
    company: 'ScholeOs',
    type: 'collaboration',
    description: 'Active contributor collaborating on the ScholeOs educational operating system and student management ecosystem on GitHub.',
  },
  {
    period: '2025 - Present',
    role: 'Founder & Software Engineer',
    company: 'Temicode',
    type: 'founder',
    description: 'Engineering modern web applications, developer productivity tools, and experimenting with performance-critical architectures.',
  },
  {
    period: '2023 - Present',
    role: 'Flutter & Backend Developer',
    company: 'Independent & Open Source',
    type: 'job',
    description: 'Architecting cross-platform mobile apps with Flutter & Appwrite, and building scalable API services in Go, Node.js, Java, C++, C#, and Python.',
  },
];

// =========================================================================
// 📂 PROJECTS (ACTIVE & PLANNED ROADMAP)
// =========================================================================
export const projects: ProjectItem[] = [
  // Active & Shipped Projects
  {
    id: 'scholeos',
    title: 'ScholeOs (Collaborative OS)',
    description: 'Collaborating on ScholeOs: an innovative education operating system and school management platform designed for interactive academic workflows and modern student administration.',
    image: '/scholeos.jpg',
    url: 'https://github.com/odulanaprogress/ScholeOS',
    tags: ['Open Source', 'Collaboration', 'EdTech', 'Fullstack', 'Web App'],
    featured: true,
    status: 'Live',
    architectureHighlights: [
      'Role-based student and faculty administration dashboards',
      'Real-time gradebook and curriculum coordination modules',
      'Modular micro-services architecture for academic institutions'
    ]
  },
  {
    id: 'notes-app',
    title: 'Notes App (Flutter & Appwrite)',
    description: 'Full-featured cross-platform mobile application built with Flutter and Appwrite.io backend, offering real-time cloud note syncing, category tags, and smooth native 60fps performance.',
    image: '/notes-app.jpg',
    url: 'https://github.com/Temilade2010/notes-app',
    tags: ['Flutter', 'Dart', 'Appwrite.io', 'Mobile App', 'Cloud Sync'],
    featured: true,
    status: 'Live',
    architectureHighlights: [
      'Offline-first SQLite local caching synced via Appwrite Realtime',
      'State management using Riverpod with clean architecture layers',
      'Instant markdown preview with syntax coloring'
    ]
  },
  {
    id: 'weather-app',
    title: 'SkyFlow Weather Application',
    description: 'Interactive global weather application delivering live forecast data, climate analytics, temperature trends, and real-time meteorological conditions wherever you are.',
    image: '/weather-app.jpg',
    url: 'https://github.com/Temilade2010/Weather-app',
    tags: ['JavaScript', 'Weather API', 'HTML5/CSS3', 'Responsive UI'],
    status: 'Live',
    architectureHighlights: [
      'Geolocation detection with fallback manual city search',
      'Dynamic weather condition UI backgrounds and SVG animations',
      'Hourly & 7-day trend graphing'
    ]
  },
  {
    id: 'task-tracker',
    title: 'Task Tracker & Daily Planner',
    description: 'Productivity application engineered to manage daily tasks, priority goals, and schedule tracking with smooth state transitions and intuitive UX.',
    image: '/uncutxtra.png',
    url: 'https://github.com/Temilade2010/Task-Tracker',
    tags: ['TypeScript', 'Productivity', 'State Management', 'Web App'],
    status: 'Live',
    architectureHighlights: [
      'Drag-and-drop task prioritization columns',
      'Local storage persistence with zero data loss',
      'Custom filtering by tags and due dates'
    ]
  },
  {
    id: 'typescript-hero',
    title: 'TypeScript Architecture & Patterns',
    description: 'Comprehensive software engineering patterns, algorithmic solutions, and type-safe systems exploring advanced TypeScript development.',
    image: '/emojidb.png',
    url: 'https://github.com/Temilade2010/typescript-as-an-hero',
    tags: ['TypeScript', 'Design Patterns', 'Open Source', 'Algorithms'],
    status: 'Live',
    architectureHighlights: [
      'Type-level programming demonstrations (conditional types, mapped types)',
      'Design pattern blueprints (Factory, Observer, CQRS)',
      'Benchmarked data structure implementations'
    ]
  },

  // 🚀 COOL PLANNED PROJECTS
  {
    id: 'campuspulse-run',
    title: 'CampusPulse: Redeemer’s University Companion',
    description: 'A dedicated mobile & web companion app for Redeemer’s University students. Featuring interactive lecture schedules, campus bus tracking, exam countdowns, attendance alerts, and offline lecture material access.',
    image: '/scholeos.jpg',
    tags: ['Flutter', 'Go Backend', 'PostgreSQL', 'University App', 'Offline-First'],
    featured: true,
    isPlanned: true,
    status: 'In Development',
    plannedTimeline: 'Targeting Beta Release 2026/2027',
    architectureHighlights: [
      'Personalized course timetable with push notification alarms',
      'Offline-first document sync for PDF lecture slides and past questions',
      'Departmental study channels and campus event broadcast hub'
    ]
  },
  {
    id: 'omnisync-ai',
    title: 'OmniSync: Local-First Realtime Whiteboard',
    description: 'An ultra-fast collaborative whiteboard and architectural diagramming tool utilizing Conflict-free Replicated Data Types (CRDTs), WebSockets, and WebAssembly for zero-latency multiplayer sketching.',
    image: '/emojidb.png',
    tags: ['TypeScript', 'WebSockets', 'CRDT', 'Canvas API', 'Wasm'],
    featured: true,
    isPlanned: true,
    status: 'Planned',
    plannedTimeline: 'Design Phase · Q4 2026',
    architectureHighlights: [
      'Yjs / Automerge CRDT state synchronization across peers',
      'Infinite 120fps hardware-accelerated canvas renderer',
      'End-to-end encryption with local SQLite export'
    ]
  },
  {
    id: 'hyperquery-engine',
    title: 'HyperQuery: In-Memory Columnar Database',
    description: 'A lightweight, high-performance in-memory columnar query engine written in Go and C++ designed to experiment with vectorized query execution, SIMD operations, and lock-free concurrency.',
    image: '/weather-app.jpg',
    tags: ['Go', 'C++', 'Systems Programming', 'Database Engine', 'SIMD'],
    isPlanned: true,
    status: 'In Concept',
    plannedTimeline: 'Systems Research · 2027',
    architectureHighlights: [
      'Column-oriented storage compression (Run-Length & Bit-packing)',
      'Vectorized query execution engine achieving sub-millisecond aggregations',
      'Custom SQL dialect parser with syntax tree optimization'
    ]
  },
  {
    id: 'codecraft-cli',
    title: 'CodeCraft: Production Microservice Scaffolder',
    description: 'A blazingly fast CLI utility to scaffold battle-tested Flutter mobile setups, Go microservices, and Dockerized Node.js boilerplate with integrated CI/CD, linting, and test mocks in seconds.',
    image: '/uncutxtra.png',
    tags: ['Go / Rust', 'CLI Tool', 'Developer Experience', 'Automation'],
    isPlanned: true,
    status: 'Planned',
    plannedTimeline: 'CLI Prototype · Early 2027',
    architectureHighlights: [
      'Interactive terminal prompts with keyboard navigation',
      'Template generators for clean hexagonal architecture',
      'Automated Dockerfile & GitHub Actions pipeline injection'
    ]
  }
];

// =========================================================================
// 📝 RICH BLOG ARTICLES DATA
// =========================================================================
export const blogArticles: BlogArticle[] = [
  {
    id: 'flutter-appwrite-architecture',
    title: 'Architecting Cross-Platform Mobile Apps with Flutter & Appwrite',
    slug: 'flutter-appwrite-architecture',
    date: 'Feb 18, 2026',
    readTime: '5 min read',
    category: 'Flutter',
    tag: 'Flutter Mobile Engineering',
    summary: 'A comprehensive guide to building resilient, production-ready mobile apps using Flutter and Appwrite. Learn how to handle offline state, real-time database subscriptions, and seamless cloud syncing.',
    claps: 142,
    featured: true,
    takeaways: [
      'Separation of concerns using Repository pattern & Riverpod state management',
      'Optimistic UI updates for snappy 60fps user experience',
      'Handling flaky mobile network connections with offline caching'
    ],
    content: {
      intro: 'When building mobile applications, performance and data consistency are non-negotiable. Flutter offers exceptional rendering speed, but pairing it with a robust backend service like Appwrite elevates the development velocity to another level.',
      sections: [
        {
          heading: '1. The Clean Architecture Setup',
          body: 'Organizing your Flutter project into data, domain, and presentation layers prevents code smell and makes testing trivial. By injecting the Appwrite Client into dedicated repository classes, UI widgets never touch the network directly.',
          codeSnippet: {
            language: 'dart',
            code: `class NotesRepository {\n  final Databases databases;\n  NotesRepository(this.databases);\n\n  Future<List<Note>> fetchNotes() async {\n    final response = await databases.listDocuments(\n      databaseId: 'main_db',\n      collectionId: 'notes_col',\n    );\n    return response.documents.map((doc) => Note.fromJson(doc.data)).toList();\n  }\n}`
          }
        },
        {
          heading: '2. Real-Time Cloud Synchronization',
          body: 'Appwrite’s WebSocket connection allows instant push updates. Whenever a user edits a note on one device, all connected clients receive the change in milliseconds without polling.',
          codeSnippet: {
            language: 'dart',
            code: `final subscription = realtime.subscribe(['databases.main_db.collections.notes_col.documents']);\nsubscription.stream.listen((event) {\n  // Trigger optimistic Riverpod state update\n  ref.read(notesProvider.notifier).syncPayload(event.payload);\n});`
          }
        },
        {
          heading: '3. What We Learned Shipping The Notes App',
          body: 'Always implement local storage with SQLite or Hive first. When users create items while in flight or in transit, the UI must immediately confirm the action and queue background syncing once network connectivity resumes.'
        }
      ],
      conclusion: 'Pairing Flutter with Appwrite allows developers to deliver cross-platform mobile apps with enterprise-level real-time data sync without managing custom server clusters.'
    }
  },
  {
    id: 'typescript-superpowers',
    title: 'TypeScript as a Superpower: Beyond Basic Types',
    slug: 'typescript-superpowers',
    date: 'Jan 08, 2026',
    readTime: '6 min read',
    category: 'TypeScript',
    tag: 'TypeScript & Architecture',
    summary: 'Unlock the real power of TypeScript with advanced generics, template literal types, discriminated unions, and branded types that turn runtime bugs into compile-time impossibility.',
    claps: 208,
    featured: true,
    takeaways: [
      'Discriminated unions ensure exhaustive state handling',
      'Branded types prevent primitive obsession errors',
      'Template literal types for rock-solid event routing'
    ],
    content: {
      intro: 'Many developers stop at interfaces and basic string types, treating TypeScript as mere documentation. But when pushed to its limits, the TypeScript compiler becomes a formidable mathematical proof engine for your software.',
      sections: [
        {
          heading: '1. Eliminating Impossible States with Discriminated Unions',
          body: 'Instead of having flags like isLoading, isError, and data on a single object, wrap states into distinct tagged shapes. This guarantees you never render stale data in an error state.',
          codeSnippet: {
            language: 'typescript',
            code: `type AsyncState<T> =\n  | { status: 'idle' }\n  | { status: 'loading' }\n  | { status: 'success'; data: T }\n  | { status: 'error'; error: Error };\n\nfunction renderUI(state: AsyncState<User>) {\n  switch (state.status) {\n    case 'success':\n      return state.data.name; // Type-safe: data is guaranteed!\n    case 'error':\n      return state.error.message;\n  }\n}`
          }
        },
        {
          heading: '2. Branded Types for Secure Domain Primitives',
          body: 'Prevent accidental mixups between UserIds, OrderIds, and raw strings by stamping types with nominal brands.',
          codeSnippet: {
            language: 'typescript',
            code: `type Brand<K, T> = K & { readonly __brand: T };\ntype UserId = Brand<string, 'UserId'>;\ntype OrderId = Brand<string, 'OrderId'>;\n\nfunction processOrder(userId: UserId, orderId: OrderId) { ... }`
          }
        }
      ],
      conclusion: 'Investing in deep type safety takes slightly more upfront thought, but it eliminates 90% of regressions before code ever touches production.'
    }
  },
  {
    id: 'concurrency-go-vs-java',
    title: 'Concurrency in Go vs Multi-Threading in Java: A Systems Comparison',
    slug: 'concurrency-go-vs-java',
    date: 'Dec 12, 2025',
    readTime: '7 min read',
    category: 'Systems',
    tag: 'Systems & Backend',
    summary: 'Analyzing goroutines, channels, and CSP against Java’s OS threads and modern Virtual Threads (Project Loom). Benchmarks, memory overhead, and architecture trade-offs.',
    claps: 95,
    takeaways: [
      'Goroutines start at just ~2KB of stack space vs ~1MB per OS thread',
      'Go channels make lock-free communication natural',
      'Java Virtual Threads bring lightweight concurrency to enterprise OOP'
    ],
    content: {
      intro: 'High-throughput backend engineering demands effective concurrency. Both Go and Java have solved concurrency in fascinating ways, each tailored to specific engineering cultures.',
      sections: [
        {
          heading: '1. The Elegance of Go Channels & CSP',
          body: 'Go adheres to Rob Pike’s philosophy: "Do not communicate by sharing memory; instead, share memory by communicating." Goroutines scheduled over OS threads in an M:N model handle hundreds of thousands of concurrent requests seamlessly.',
          codeSnippet: {
            language: 'go',
            code: `func worker(tasks <-chan Job, results chan<- Result) {\n  for job := range tasks {\n    results <- process(job)\n  }\n}`
          }
        },
        {
          heading: '2. Java’s Evolution: Virtual Threads',
          body: 'With Java 21+, Project Loom introduced lightweight Virtual Threads, enabling traditional synchronous blocking code to achieve millions of active connections without thread pool exhaustion.'
        }
      ],
      conclusion: 'Whether you choose Go’s simplicity or Java’s enterprise ecosystem, modern backend development is in its golden age of concurrency.'
    }
  },
  {
    id: 'redeemers-university-journey',
    title: 'Starting My Journey at Redeemer’s University (RUN Class of 2030)',
    slug: 'redeemers-university-journey',
    date: 'Nov 24, 2025',
    readTime: '4 min read',
    category: 'Education',
    tag: 'University & Growth',
    summary: 'Entering Redeemer’s University in 2026 for a 4-year Computer Science degree. How I balance academic algorithms, open-source development at ScholeOs, and building Temicode products.',
    claps: 310,
    featured: true,
    takeaways: [
      'Combining theoretical foundations (Discrete Math, Automata) with practical coding',
      'Why open source collaboration accelerates university learning',
      'My 4-year milestone roadmap leading up to graduation in 2030'
    ],
    content: {
      intro: 'Entering Redeemer’s University in 2026 marks a transformative chapter in my life as a software engineer. With an expected graduation in 4 years (Class of 2030), I am dedicated to bridging the gap between deep computer science theory and real-world software craftsmanship.',
      sections: [
        {
          heading: '1. Why Theory Matters Just as Much as Syntax',
          body: 'While anyone can learn a framework in a weekend, understanding time complexity, cache locality, memory allocators, and operating system kernels is what separates good coders from great software engineers.'
        },
        {
          heading: '2. Building in Public: ScholeOs & Temicode',
          body: 'Throughout my 4 years at RUN, I will continue building open-source platforms, collaborating on ScholeOs, and developing CampusPulse to directly improve university life for students.'
        }
      ],
      conclusion: 'The road to 2030 is packed with ambition, relentless coding, and continuous growth. Let’s build the future together.'
    }
  },
  {
    id: 'cpp-memory-mastery',
    title: 'Demystifying C++ Memory Management & Data Structures',
    slug: 'cpp-memory-mastery',
    date: 'Oct 15, 2025',
    readTime: '6 min read',
    category: 'Systems',
    tag: 'C++ Systems Engineering',
    summary: 'Understanding pointers, heap allocation, RAII, smart pointers (std::unique_ptr, std::shared_ptr), and cache-friendly contiguous data structures.',
    claps: 87,
    takeaways: [
      'Resource Acquisition Is Initialization (RAII) eliminates memory leaks',
      'Why std::vector beats linked lists in almost every real-world cache test',
      'Avoiding dangling pointers and undefined behavior'
    ],
    content: {
      intro: 'Writing C++ teaches you how computers actually operate under the hood. There is no garbage collector to save you from memory leaks, which forces you to write disciplined, thoughtful code.',
      sections: [
        {
          heading: '1. The Power of RAII',
          body: 'By tying resource lifetimes to stack object scope, modern C++ ensures that memory, file descriptors, and mutexes are cleaned up deterministically.',
          codeSnippet: {
            language: 'cpp',
            code: `// Safe memory management with smart pointers\nauto buffer = std::make_unique<DataBuffer>(1024);\nbuffer->process(); // Automatically freed when leaving scope!`
          }
        }
      ],
      conclusion: 'Mastering C++ fundamentally changes how you write code in every other language, from TypeScript to Go.'
    }
  }
];

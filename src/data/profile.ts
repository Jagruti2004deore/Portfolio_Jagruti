export const profile = {
  name: "Jagruti Deore",
  fullName: "Jagruti Vijay Deore",
  role: "Java Full Stack Developer",
  location: "Pune, India",
  email: "deorejagruti284@gmail.com",
  phone: "+91 7875846931",
  github: "https://github.com/Jagruti2004deore",
  linkedin: "https://linkedin.com/in/jagruti-deore-80282b319",
  leetcode: "https://leetcode.com/u/jagruti2004",
  resumeUrl: "https://drive.google.com/file/d/1HlSptgrN05HBh4J_eye2rJ6lLI0sgVSz/view?usp=drive_link",
  availability: "Open to full-time SDE / Full Stack roles",
  tagline: "I build full-stack systems, then teach them to think.",
  summary:
    "Computer Science Engineering graduate with internship experience building secure, scalable full-stack web applications using Java, Spring Boot, Spring AI, the MERN stack, REST APIs, JWT authentication, and RBAC. Comfortable in Agile/Scrum environments, real-time systems with WebSocket/WebRTC, AI integration with local LLMs, and cloud deployment.",
};

export const stats = [
  { label: "Internships completed", value: 2, suffix: "" },
  { label: "Production projects shipped", value: 3, suffix: "" },
  { label: "REST API endpoints built", value: 10, suffix: "+" },
  { label: "Concurrent users supported", value: 50, suffix: "+" },
];

export const skillGroups = [
  {
    label: "Languages",
    skills: ["Java", "JavaScript (ES6+)", "TypeScript", "SQL", "HTML5", "CSS3"],
  },
  {
    label: "Frontend",
    skills: ["React.js", "Vite", "Tailwind CSS", "Bootstrap", "Responsive Design"],
  },
  {
    label: "Backend",
    skills: ["Spring Boot", "Spring MVC", "Spring AI", "Hibernate / JPA", "Node.js", "Express.js", "REST API Design"],
  },
  {
    label: "Auth & Security",
    skills: ["JWT Authentication", "RBAC", "Spring Security"],
  },
  {
    label: "AI & LLM",
    skills: ["Spring AI", "Ollama", "RAG", "Prompt Engineering", "Embeddings", "Vector Stores", "Tool Calling", "Chat Memory", "Structured Output"],
  },
  {
    label: "Databases",
    skills: ["PostgreSQL", "MySQL", "MongoDB"],
  },
  {
    label: "Tools & Practices",
    skills: ["Git", "GitHub", "Docker", "Postman", "Maven", "Vercel", "Render", "CI/CD", "Agile/Scrum", "DSA", "OOP", "SDLC"],
  },
];

export const techStack = [
  "Java", "Spring Boot", "Spring AI", "Ollama", "React.js", "TypeScript",
  "Vite", "Tailwind CSS", "PostgreSQL", "MongoDB", "JWT", "Docker",
  "WebSocket", "WebRTC", "GitHub API", "Vercel", "Render",
];

export const experience = [
  {
    role: "Software Developer Intern",
    company: "CVFrameIQ",
    period: "Mar 2026 — May 2026",
    points: [
      "Architected a full-stack application from scratch using Spring Boot, React.js, and Python, designing a scalable backend with 10+ REST API endpoints across 5+ core modules.",
      "Authored end-to-end technical documentation covering system design and API specifications for 3+ core modules; executed 80+ test cases across functional, regression, and integration scenarios, achieving zero critical bugs at release.",
    ],
  },
  {
    role: "Software Developer Intern",
    company: "Innotronix Labs & Trading, Pune",
    period: "Sep 2025 — Nov 2025",
    points: [
      "Resolved 20+ production-level bugs in a live full-stack dashboard built with React.js, TypeScript, and Node.js, reducing downtime by 15%.",
      "Researched and integrated MinIO for high-performance object storage; optimized backend request handling, increasing system throughput by an estimated 20%.",
      "Implemented 3+ feature enhancements integrating React.js UI components with server-side REST APIs across Agile/Scrum sprint cycles.",
    ],
  },
];

export const education = [
  {
    degree: "B.Tech in Computer Science Engineering",
    school: "Sandip University, Nashik",
    period: "2023 — 2026",
    detail: "CGPA: 8.63",
  },
  {
    degree: "Diploma in Electronics & Telecommunication Engineering",
    school: "Government Polytechnic, Nashik",
    period: "2020 — 2023",
    detail: "Aggregate: 65.18%",
  },
];

export const projects = [
  {
    id: "repopilot",
    featured: true,
    name: "RepoPilot AI",
    tagline: "AI-powered GitHub repository analysis platform",
    description:
      "Import any public GitHub repository and get AI-generated architecture review, security analysis, code quality metrics, repository Q&A, and portfolio guidance — all from a layered Spring Boot backend talking to a local LLM through Spring AI.",
    github: "https://github.com/Jagruti2004deore/RepoPilot-AI",
    demo: "",
    techStack: [
      "Java", "Spring Boot", "Spring Security", "Spring AI", "Ollama",
      "PostgreSQL", "React.js", "TypeScript", "Tailwind CSS", "Vite",
      "JWT", "GitHub API", "Maven", "Vercel", "Render",
    ],
    features: [
      "GitHub repository import & analysis",
      "Architecture review & security analysis",
      "Code quality metrics & findings",
      "AI-powered repository Q&A",
      "Portfolio guidance",
      "JWT-secured auth & file exploration",
    ],
    architecture: [
      "User → React Frontend → REST API → Spring Boot",
      "Spring Boot → Service Layer → GitHub API & PostgreSQL",
      "Service Layer → Spring AI → Ollama LLM → AI Response",
      "AI Response → Frontend Dashboard",
    ],
    architectureNote:
      "Layered architecture (Controller → Service → Repository → Database) with secure JWT authentication and clean separation of concerns.",
  },
  {
    id: "collabapp",
    featured: false,
    name: "CollabApp",
    tagline: "Real-time interview collaboration platform",
    description:
      "A real-time collaboration platform supporting 50+ concurrent users with JWT authentication, STOMP WebSocket chat, live presence tracking, and role-based protected rooms — plus WebRTC video, screen sharing, a collaborative code editor, and a synced whiteboard.",
    github: "https://github.com/Jagruti2004deore/Collab_App",
    demo: "",
    techStack: ["Spring Boot", "React.js", "WebSocket", "WebRTC", "PostgreSQL", "JWT", "Tailwind CSS", "Docker", "Vercel", "Render"],
    features: [
      "50+ concurrent users supported",
      "STOMP WebSocket live chat & presence",
      "Role-based protected rooms",
      "WebRTC video calling & screen sharing",
      "Collaborative code editor",
      "Synced whiteboard",
    ],
    architecture: [],
    architectureNote:
      "Containerized with Docker and deployed across Render + Vercel, cutting deployment time by 40%.",
  },
  {
    id: "hams",
    featured: false,
    name: "HAMS",
    tagline: "Hospital Appointment Management System",
    description:
      "A secure full-stack application with role-based access control for Admin and Patient roles, implementing JWT authentication and Spring Security across the full SDLC from requirements through deployment.",
    github: "https://github.com/Jagruti2004deore/hospital-appointment-system",
    demo: "",
    techStack: ["React.js", "Spring Boot", "Spring Security", "JWT", "PostgreSQL", "RESTful APIs", "Git"],
    features: [
      "Role-based access (Admin / Patient)",
      "JWT authentication & Spring Security",
      "10+ scalable REST APIs",
      "500+ appointment records managed",
      "Server-side validation & data integrity",
    ],
    architecture: [],
    architectureNote: "End-to-end SDLC ownership — from requirements through production deployment.",
  },
];

export const NAV_LINKS = [
  { id: "hero", label: "Hero" },
  { id: "about", label: "About Me" },
  { id: "education", label: "Education" },
  { id: "skills", label: "Skills" },
  { id: "certifications", label: "Certifications" },
  { id: "projects", label: "Projects" },
  { id: "contact", label: "Contact" }
];

export const DESIGNER_INFO = {
  name: "ALTHEA ZULEIKA SADICON",
  title: "WEB & MOBILE APPLICATION DEVELOPER",
  role: "BSIT Student",
  bio: "I'm a BSIT student at FEU Institute of Technology specializing in Web and Mobile Application Development. I enjoy building functional, user-friendly digital solutions and turning ideas into websites and mobile applications.",
  aboutDetailed: "Through academic projects and hands-on development, I have gained experience in web development, mobile application development, UI/UX design, programming, and project management. I also enjoy working with teams, learning new technologies, and adapting to different project requirements.",
  location: "BASED IN MANILA, PHILIPPINES",


  stats: [
    { number: "4+", label: "Academic Projects" },
    { number: "3+", label: "Certifications" },
    { number: "2+", label: "Years Coding" },
    { number: "100%", label: "Passion & Drive" }
  ],
  aboutCards: [
    { label: "PROJECT-FOCUSED", sub: "Web & Mobile Development" },
    { label: "TEAM-ORIENTED", sub: "Communication & Collaboration" },
    { label: "PROBLEM-SOLVING", sub: "Adaptability & Critical Thinking" },
    { label: "DETAIL-FOCUSED", sub: "UI/UX & User Experience" }
  ]
};

export const PROJECTS_DATA = [
  {
    id: "savr",
    number: "01",
    title: "SAVR",
    subtitle: "Food Donation Management System",
    category: "Web & Mobile Application",
    image: "/assets/project_safegate.png",
    accentColor: "#84cc16",
    accentGlow: "rgba(132, 204, 22, 0.4)",
    description: "A web and mobile system developed for the Philippine FoodBank Foundation Inc. to support food donation management, inventory, logistics, meal planning, disaster intelligence, donation requests, distribution, and reporting.",
    metrics: "Role: Project Manager & Frontend Mobile Developer • Live at savrdonate.com",
    liveUrl: "https://savrdonate.com/",
    tags: ["React Native", "Web Development", "Mobile App", "Project Management", "Live Production"]
  },
  {
    id: "fairall",
    number: "02",
    title: "FAIRALL",
    subtitle: "Systems Integration & Architecture",
    category: "Web Application",
    image: "/assets/project_event_ticket.png",
    accentColor: "#3b82f6",
    accentGlow: "rgba(59, 130, 246, 0.4)",
    description: "A donation and payment management application integrating donor and administrator workflows with PayPal for online payment processing.",
    metrics: "Role: Developer",
    tags: ["Systems Integration", "PayPal API", "Web Development", "Full-Stack"]
  },
  {
    id: "vitaly-tea",
    number: "03",
    title: "VITALY TEA",
    subtitle: "Tea Shop & Printing Service Hub",
    category: "Web Application",
    image: "/assets/project_loopin.png",
    accentColor: "#f59e0b",
    accentGlow: "rgba(245, 158, 11, 0.4)",
    description: "A cozy tea shop and printing service web platform featuring an interactive beverage ordering menu, printing service catalog, customer testimonials, news & blogs, and responsive UI design.",
    metrics: "Role: Web Developer • Live on Netlify",
    liveUrl: "https://moonlit-pithivier-1e4971.netlify.app/",
    tags: ["HTML/CSS", "JavaScript", "Netlify Deployment", "E-Commerce & Services", "UI Design"]
  },
  {
    id: "cybersecurity",
    number: "04",
    title: "IT & CYBERSECURITY PROJECTS",
    subtitle: "Networking & Cybersecurity",
    category: "Academic Projects",
    image: "/assets/project_landing.png",
    accentColor: "#ef4444",
    accentGlow: "rgba(239, 68, 68, 0.4)",
    description: "Hands-on projects involving Linux, networking, system processes, endpoint analysis, cybersecurity concepts, and network security activities.",
    metrics: "Role: Student Researcher",
    tags: ["Linux", "Networking", "Cybersecurity", "Cisco"]
  }
];

export const EDUCATION_DATA = [
  {
    id: 1,
    level: "Tertiary Education",
    degree: "Bachelor of Science in Information Technology",
    institution: "FEU Institute of Technology",
    location: "Manila, Philippines",
    years: "2023 - 2027",
    detail: "Specialization in Web and Mobile Application Development.",
    achievements: []
  },
  {
    id: 2,
    level: "Senior High School (SHS)",
    degree: "Information and Communications Technology (ICT) Strand",
    institution: "Emilio Aguinaldo College – Cavite",
    location: "Cavite, Philippines",
    years: "2021 - 2023",
    detail: "With High Honors",
    achievements: ["With High Honors"]
  }
];

export const SKILLS_CATEGORIES = [
  {
    category: "Web & Mobile Development",
    skills: ["WEB DEVELOPMENT", "MOBILE APPLICATION DEVELOPMENT", "FRONT-END DEVELOPMENT", "BACK-END DEVELOPMENT", "RESPONSIVE DESIGN", "DATABASE MANAGEMENT", "API INTEGRATION"]
  },
  {
    category: "Programming & Technologies",
    skills: ["HTML & CSS", "JAVASCRIPT", "JAVA", "PHP", "SQL", "GIT & GITHUB", "REACT / WEB TECHNOLOGIES"]
  },
  {
    category: "Design & Workflow",
    skills: ["UI/UX DESIGN", "FIGMA", "CANVA", "PROTOTYPING", "WIREFRAMING", "VS CODE", "PROJECT MANAGEMENT"]
  }
];

export const CERTIFICATIONS_DATA = [
  {
    id: 1,
    title: "Cisco DevNet Associate",
    issuer: "Cisco",
    date: "2026",
    credentialId: "CISCO-DEVNET-2026",
    badgeColor: "#3b82f6",
    description: "Certification focused on software development, APIs, application development, automation, and modern network-based development."
  },
  {
    id: 2,
    title: "PMI Project Management Ready",
    issuer: "Project Management Institute",
    date: "2026",
    credentialId: "PMI-PMR-2026",
    badgeColor: "#84cc16",
    description: "Certification covering project management fundamentals, planning, teamwork, communication, and project execution."
  },
  {
    id: 3,
    title: "Cisco CCNA Enterprise Networking, Security & Automation",
    issuer: "Cisco",
    date: "2025",
    credentialId: "CISCO-CCNA-2025",
    badgeColor: "#f59e0b",
    description: "Training covering networking fundamentals, security concepts, network automation, and enterprise networking technologies."
  },
  {
    id: 4,
    title: "Cisco Linux Essentials",
    issuer: "Cisco",
    date: "2025",
    credentialId: "CISCO-LINUX-2025",
    badgeColor: "#ef4444",
    description: "Fundamentals of Linux operating systems, command-line tools, file management, permissions, and basic system administration."
  }
];

export const WORK_PROCESS = [
  { step: "01", title: "Discover", subtitle: "Understand the problem and requirements", icon: "Search" },
  { step: "02", title: "Plan", subtitle: "Define features, workflows, and project goals", icon: "Layout" },
  { step: "03", title: "Design", subtitle: "Create interfaces, wireframes, and user flows", icon: "Figma" },
  { step: "04", title: "Develop", subtitle: "Build functional web and mobile applications", icon: "Cpu" },
  { step: "05", title: "Test", subtitle: "Identify issues and improve functionality", icon: "Sliders" },
  { step: "06", title: "Deliver", subtitle: "Finalize, document, and present the project", icon: "CheckCircle2" }
];

export const CONTACT_INFO = {
  email: "sadiconaltheazuleika@gmail.com",
  linkedin: "https://www.linkedin.com/in/altheazuleikasadicon",
  github: "https://github.com/altheazuleikasadicon",
  portfolio: "https://althea.dev"
};

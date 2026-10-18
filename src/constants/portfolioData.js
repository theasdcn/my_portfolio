export const NAV_LINKS = [
  { id: "hero", label: "Home" },
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
    { number: "12", label: "Certifications" },
    { number: "2+", label: "Years Coding" },
    { number: "100%", label: "Passion & Drive" }
  ],
  aboutCards: [
    { label: "PROJECT-FOCUSED", sub: "Web & Mobile Development" },
    { label: "TEAM-ORIENTED", sub: "Communication & Collaboration" },
    { label: "PROBLEM-SOLVING", sub: "Adaptability & Critical Thinking" },
    { label: "DETAIL-FOCUSED", sub: "UI/UX & User Experience" }
  ],
  // Shown under "Beyond the code" in About Me. `icon` must match a key in
  // INTEREST_ICONS inside AboutMe.jsx.
  interests: [
    { icon: "travel", label: "Traveling", sub: "Exploring and adventurous" },
    { icon: "fashion", label: "Fashion", sub: "Style, aesthetics & creative expression" },
    { icon: "food", label: "Eating", sub: "Food is my love language" },
    { icon: "books", label: "Reading Books", sub: "Always one more chapter" }
  ],
  interestsIntro: "When the laptop closes, these are the things that keep me curious.",
  funFact: {
    label: "FUN FACT",
    count: 11,
    headline: "I love animals — I have 11 cats!",
    sub: "Yes, eleven! My home is always lively, full of purrs, and I wouldn't have it any other way."
  }
};

export const PROJECTS_DATA = [
  {
    id: "savr",
    title: "SAVR",
    subtitle: "Food Donation Management System",
    category: "Web & Mobile Application",
    categoryKey: "web-mobile",
    image: "/assets/project_savr.png",
    accentColor: "#84cc16",
    accentGlow: "rgba(132, 204, 22, 0.4)",
    description: "A comprehensive web and mobile platform developed for the Philippine FoodBank Foundation Inc. to streamline food donation logistics, real-time inventory tracking, meal planning, donation requests, distribution, and analytical reporting.",
    metrics: "Role: Project Manager, Frontend Mobile Developer",
    liveUrl: "https://savrdonate.com/",
    githubUrl: "https://github.com/altheazuleikasadicon",
    tags: ["React Native", "Web Development", "Mobile App", "Project Management"],
    features: [
      "Real-time Food Donation & Inventory Tracking",
      "Disaster Intelligence & Relief Response Dashboard",
      "Automated Donor & Beneficiary Matching",
      "Logistics Route Management & Meal Planning",
      "Comprehensive Analytics & Reporting Tools"
    ],
    roleDetails: "Managed project timelines and deliverables while leading the front-end mobile development using React Native to ensure seamless user experience."
  },
  {
    id: "vitaly-tea",
    title: "VITALY TEA",
    subtitle: "Tea Shop & Printing Service Hub",
    category: "Web Application",
    categoryKey: "web",
    image: "/assets/project_vitalytea.png",
    accentColor: "#f59e0b",
    accentGlow: "rgba(245, 158, 11, 0.4)",
    description: "An interactive web platform built for a hybrid tea shop and printing service hub. Features a responsive beverage ordering catalog, customizable printing request form, customer reviews, blog updates, and custom Y2K visual design.",
    metrics: "Role: Project Manager, Frontend & Backend Developer",
    liveUrl: "https://moonlit-pithivier-1e4971.netlify.app/",
    githubUrl: "https://github.com/theasdcn",
    tags: ["HTML/CSS", "JavaScript", "E-Commerce & Services", "UI/UX Design"],
    features: [
      "Interactive Digital Ordering Menu for Beverages",
      "Customizable Printing Service Catalog & Upload Form",
      "Responsive Layout with Vintage & Modern Styling",
      "Customer Testimonials & News/Blog Engine",
      "Fast Static Deployment with Netlify Automation"
    ],
    roleDetails: "Served as Project Manager and sole developer responsible for end-to-end architecture, UI/UX wireframing, responsive frontend design, dynamic cart ordering logic, printing request submission handlers, and cloud deployment on Netlify."
  },
  {
    id: "teddiursa-airlines",
    title: "TEDDIURSA AIRLINES",
    subtitle: "Intergalactic Space Flight Booking & Passenger Management System",
    category: "Web Application",
    categoryKey: "web",
    image: "/assets/project_teddiursa.png",
    accentColor: "#8b5cf6",
    accentGlow: "rgba(139, 92, 246, 0.4)",
    description: "A full-stack space tourism web platform that lets travelers explore planetary destinations, browse celestial flight schedules, calculate dynamic fares, and book voyages across the Milky Way. Features end-to-end flight reservations, automated ticket generation, and a centralized admin management dashboard with full CRUD operations for passengers and flights.",
    metrics: "Role: Frontend Developer",
    liveUrl: "https://teddiursa-airlines.onrender.com",
    githubUrl: "https://github.com/briee1w/teddiursa-airlines",
    client: "Space Tourism & Flight Booking Platform",
    tags: ["PHP 8", "PostgreSQL", "MongoDB", "Docker", "JavaScript (ES6+)", "HTML5/CSS3", "RESTful Handlers"],
    features: [
      "End-to-End Intergalactic Flight Booking & Dynamic Fare Calculation",
      "Automated Passenger Boarding Pass & Ticket Generation",
      "Centralized Administrator Dashboard with Full CRUD Operations",
      "Dual-Database Architecture with PostgreSQL & MongoDB",
      "Dockerized Containerization & Cloud Deployment on Render"
    ],
    roleDetails: "Focused on frontend development, building the responsive flight booking views, passenger seat selection, dynamic ticket generation display, and space-themed UI styling."
  },
  {
    id: "brewha-cafe",
    title: "BREW-HA CAFÉ",
    subtitle: "E-Commerce Cafe & Online Ordering System",
    category: "Web Application",
    categoryKey: "web",
    image: "/assets/project_brewha.png",
    accentColor: "#794628",
    accentGlow: "rgba(121, 70, 40, 0.4)",
    description: "A full-stack e-commerce web platform for Brew-Ha Café, featuring an interactive ordering catalog for handcrafted coffees, fruit refreshers, artisan pastries, and specialty pastas. Features real-time cart calculations with customizable drink sizes and pastry quantities, delivery fee estimations, customer authentication, live order tracking, and a centralized administrative dashboard with full CRUD operations for menu inventory, registered users, and active orders.",
    metrics: "Role: Frontend Developer",
    liveUrl: "https://brewha-cafe.onrender.com/index.html",
    githubUrl: "https://github.com/theasdcn/brewha-cafe",
    repoUrl: "https://github.com/theasdcn/brewha-cafe",
    tags: ["PHP", "JavaScript", "HTML/CSS", "SQLite / MySQL", "Vercel Deployment", "REST APIs", "E-Commerce"],
    features: [
      "Interactive Ordering Catalog with customizable drink sizes & pastry quantities",
      "Real-time Cart Calculations & Dynamic Delivery Fee Estimations",
      "Customer Authentication, Session Management & Live Order Tracking",
      "Centralized Administrative Dashboard with Full CRUD for Menu Inventory, Users & Active Orders",
      "Single-entrypoint Serverless Routing & Relational Database Architecture (MySQL / SQLite)"
    ],
    roleDetails: "Focused on frontend web development, user interface design, interactive drink and pastry catalog ordering system, dynamic cart calculations, and responsive cross-device layout."
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
    detail: "Graduated With High Honors.",
    achievements: []
  }
];

export const SKILLS_CATEGORIES = [
  {
    category: "Web & Mobile Development",
    skills: ["WEB DEVELOPMENT", "MOBILE APPLICATION DEVELOPMENT", "FRONT-END DEVELOPMENT", "BACK-END DEVELOPMENT", "RESPONSIVE DESIGN", "DATABASE MANAGEMENT", "API INTEGRATION"]
  },
  {
    category: "Programming & Technologies",
    skills: ["HTML & CSS", "JAVASCRIPT", "TAILWIND CSS", "NODE.JS", "PHP", "CODEIGNITER", "SQL", "SQLITE", "APACHE", "JAVA", "DOCKER", "GIT & GITHUB", "REACT / WEB TECHNOLOGIES"]
  },
  {
    category: "Design & Workflow",
    skills: ["UI/UX DESIGN", "FIGMA", "CANVA", "PROTOTYPING", "WIREFRAMING", "VS CODE", "PROJECT MANAGEMENT"]
  }
];

export const CERTIFICATIONS_DATA = [
  {
    id: 1,
    title: "DevNet Associate",
    issuer: "Cisco",
    issuerCode: "CISCO",
    date: "April 2026",
    credentialId: "754e7ef0-d7a9-4e1b-b8f2-5b56e5e83f14",
    badgeColor: "#049FD9",
    sealType: "gold",
    verificationUrl: "https://www.credly.com/badges/754e7ef0-d7a9-4e1b-b8f2-5b56e5e83f14",
    description: "Validates technical mastery in software development, REST API integrations, network automation, CI/CD pipelines, and application deployment on Cisco infrastructure.",
    competencies: ["REST APIs", "Network Automation", "Python", "CI/CD Pipelines", "Infrastructure as Code", "Cisco Platforms"]
  },
  {
    id: 2,
    title: "PMI Project Management Ready™",
    issuer: "Project Management Institute (PMI)",
    issuerCode: "PMI",
    date: "March 2026",
    credentialId: "6e339f36-0f23-46d3-9b0f-b98206e59d34",
    badgeColor: "#FF6900",
    sealType: "gold",
    verificationUrl: "https://www.credly.com/badges/6e339f36-0f23-46d3-9b0f-b98206e59d34",
    description: "Certification covering project management methodologies, Agile & Waterfall frameworks, scope and schedule planning, risk mitigation, and stakeholder leadership.",
    competencies: ["Project Lifecycle", "Agile & Waterfall", "Business Analysis", "Risk Management", "Stakeholder Leadership"]
  },
  {
    id: 3,
    title: "CCNA: Enterprise Networking, Security, and Automation",
    issuer: "Cisco",
    issuerCode: "CISCO",
    date: "December 2025",
    credentialId: "81b46979-2833-431b-b419-46295be00a8f",
    badgeColor: "#049FD9",
    sealType: "gold",
    verificationUrl: "https://www.credly.com/badges/81b46979-2833-431b-b419-46295be00a8f",
    description: "Comprehensive credentials covering enterprise IP routing (OSPFv2), switching architectures, network security protocols, VLAN segmentation, and network automation.",
    competencies: ["Enterprise Routing & OSPF", "Network Security & ACLs", "VPNs & WAN", "Network Automation & REST APIs", "QoS Management"]
  },
  {
    id: 4,
    title: "Linux Essentials",
    issuer: "Cisco & Linux Professional Institute",
    issuerCode: "LPI",
    date: "November 2025",
    credentialId: "ed2772e9-7066-4289-b225-d063468dd838",
    badgeColor: "#F59E0B",
    sealType: "gold",
    verificationUrl: "https://www.credly.com/badges/ed2772e9-7066-4289-b225-d063468dd838",
    description: "Certification in Linux operating system fundamentals, command-line interface (CLI) navigation, open-source software, processes, storage, and security permissions.",
    competencies: ["Linux OS Architecture", "Bash Command Line & CLI", "File Permissions", "System Processes", "Open Source Concepts"]
  },
  {
    id: 5,
    title: "CCNA: Switching, Routing, and Wireless Essentials",
    issuer: "Cisco",
    issuerCode: "CISCO",
    date: "March 2025",
    credentialId: "a5234a74-d38d-48c3-98e6-06fc17a3d20d",
    badgeColor: "#049FD9",
    sealType: "gold",
    verificationUrl: "https://www.credly.com/badges/a5234a74-d38d-48c3-98e6-06fc17a3d20d",
    description: "Covers configuration and troubleshooting of enterprise switches, routers, VLANs, inter-VLAN routing, STP, EtherChannel, DHCPv4/SLAAC, and WLAN architectures.",
    competencies: ["VLANs & Inter-VLAN Routing", "Spanning Tree (STP)", "EtherChannel", "DHCPv4 & SLAAC", "Wireless LANs (WLAN)"]
  },
  {
    id: 6,
    title: "IT Specialist - Python",
    issuer: "Certiport, a Pearson VUE business",
    issuerCode: "CERTIPORT",
    date: "February 2025",
    credentialId: "b6102e74-b13b-413e-98b7-105703f56578",
    badgeColor: "#3776AB",
    sealType: "gold",
    verificationUrl: "https://www.credly.com/badges/b6102e74-b13b-413e-98b7-105703f56578",
    description: "Validates core proficiency in Python programming, syntax, data structures, control flow, functions, algorithmic problem solving, file operations, and troubleshooting.",
    competencies: ["Python 3 Core", "Data Structures", "Control Flow & Loops", "Functions & Modules", "File I/O & Error Handling"]
  },
  {
    id: 7,
    title: "Cisco Certified Support Technician Networking (CCST Networking) - Lifetime",
    issuer: "Cisco",
    issuerCode: "CISCO",
    date: "February 2025",
    credentialId: "35cbc92b-e365-4911-afb7-281fa3b86292",
    badgeColor: "#049FD9",
    sealType: "gold",
    verificationUrl: "https://www.credly.com/badges/35cbc92b-e365-4911-afb7-281fa3b86292",
    description: "Lifetime certification demonstrating first-principles networking mastery, including network operations, diagnostic troubleshooting, IP protocols, device configuration, and security.",
    competencies: ["Network Operations", "Troubleshooting & Diagnostics", "TCP/IP Protocols", "IP Addressing & Subnetting", "Network Security"]
  },
  {
    id: 8,
    title: "CCNA: Introduction to Networks",
    issuer: "Cisco",
    issuerCode: "CISCO",
    date: "February 2025",
    credentialId: "bd13369d-0a7d-4dfe-8b71-fec629227d6c",
    badgeColor: "#049FD9",
    sealType: "gold",
    verificationUrl: "https://www.credly.com/badges/bd13369d-0a7d-4dfe-8b71-fec629227d6c",
    description: "Foundational architecture covering OSI & TCP/IP models, IPv4/IPv6 addressing and subnetting, Ethernet principles, and basic network device configuration.",
    competencies: ["OSI & TCP/IP Model", "IPv4 & IPv6 Subnetting", "Ethernet Architecture", "Cisco Packet Tracer", "Device Hardening"]
  },
  {
    id: 9,
    title: "Javascript Essentials : Build Interactive Websites",
    issuer: "Ethel Programming Computer Programming Services",
    issuerCode: "EPCPS",
    date: "October 2026",
    credentialId: "EPCPS-JS-202610",
    badgeColor: "#F59E0B",
    sealType: "gold",
    image: "/assets/cert_javascript_essentials.png",
    verificationUrl: "/assets/cert_javascript_essentials.png",
    description: "Intensive technical certification demonstrating proficiency in modern JavaScript (ES6+), DOM manipulation, dynamic event handling, and interactive web architecture.",
    competencies: ["JavaScript ES6+", "DOM Manipulation", "Interactive Web", "Event Handling", "Web Development"]
  },
  {
    id: 10,
    title: "Code-Lab Hands-On Program Lead,Build,Connect",
    issuer: "Ethel Programming Computer Programming Services",
    issuerCode: "EPCPS",
    date: "September 2026",
    credentialId: "EPCPS-CODELAB-202609",
    badgeColor: "#2563EB",
    sealType: "gold",
    image: "/assets/cert_codelab_hands_on.png",
    verificationUrl: "/assets/cert_codelab_hands_on.png",
    description: "Hands-on collaborative program covering end-to-end coding practices, agile team leadership, component integration, and practical software construction.",
    competencies: ["Hands-On Coding", "Program Leadership", "Team Collaboration", "System Integration", "Problem Solving"]
  },
  {
    id: 11,
    title: "UI AND UX for Web Developers",
    issuer: "Ethel Programming Computer Programming Services",
    issuerCode: "EPCPS",
    date: "September 2026",
    credentialId: "EPCPS-UIUX-202609",
    badgeColor: "#10B981",
    sealType: "gold",
    image: "/assets/cert_uiux_webdev.png",
    verificationUrl: "/assets/cert_uiux_webdev.png",
    description: "Specialized training in user interface & user experience design systems, wireframing, responsive layouts, usability heuristics, and developer-to-designer handoffs.",
    competencies: ["UI/UX Design", "User-Centered Design", "Wireframing", "Web Design Systems", "Visual Hierarchy"]
  },
  {
    id: 12,
    title: "Software Development",
    issuer: "Ethel Programming Computer Programming Services",
    issuerCode: "EPCPS",
    date: "September 2026",
    credentialId: "EPCPS-SWDEV-202609",
    badgeColor: "#8B5CF6",
    sealType: "gold",
    image: "/assets/cert_software_dev.png",
    verificationUrl: "/assets/cert_software_dev.png",
    description: "Foundational software engineering credentials emphasizing clean code principles, SDLC lifecycle methodologies, architecture patterns, and industry best practices.",
    competencies: ["Software Engineering", "SDLC Methodologies", "Architecture Principles", "Code Quality", "Development Best Practices"]
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
  linkedin: "https://www.linkedin.com/in/althea-zuleika-sadicon-1754271ba/",
  briefcase: "https://paraverse.feutech.edu.ph/briefcase/profile/126013202T",
  github: "https://github.com/theasdcn",
  portfolio: "https://althea.dev"
};

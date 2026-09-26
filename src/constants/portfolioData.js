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
    categoryKey: "web-mobile",
    image: "/assets/project_savr.png",
    accentColor: "#84cc16",
    accentGlow: "rgba(132, 204, 22, 0.4)",
    description: "A comprehensive web and mobile platform developed for the Philippine FoodBank Foundation Inc. to streamline food donation logistics, real-time inventory tracking, meal planning, disaster intelligence, donation requests, distribution, and analytical reporting.",
    metrics: "Role: Project Manager & Frontend Mobile Developer • Live Production Platform",
    liveUrl: "https://savrdonate.com/",
    githubUrl: "https://github.com/altheazuleikasadicon",
    tags: ["React Native", "Web Development", "Mobile App", "Project Management", "Live Production"],
    features: [
      "Real-time Food Donation & Inventory Tracking",
      "Disaster Intelligence & Relief Response Dashboard",
      "Automated Donor & Beneficiary Matching",
      "Logistics Route Management & Meal Planning",
      "Comprehensive Analytics & Reporting Tools"
    ],
    roleDetails: "Managed project timelines and deliverables while leading the front-end mobile development using React Native to ensure seamless user experience for donors and volunteers."
  },
  {
    id: "fairall",
    number: "02",
    title: "FAIRALL",
    subtitle: "Systems Integration & Architecture",
    category: "Web Application",
    categoryKey: "systems",
    image: "/assets/project_fairall.png",
    accentColor: "#3b82f6",
    accentGlow: "rgba(59, 130, 246, 0.4)",
    description: "A modern donation and payment management platform engineered to connect donor portals with administrator workflows, featuring real-time financial tracking, automated receipts, and secure PayPal REST API integration.",
    metrics: "Role: Full-Stack Systems Developer • API Integration Specialist",
    liveUrl: "https://github.com/altheazuleikasadicon",
    githubUrl: "https://github.com/altheazuleikasadicon",
    tags: ["Systems Integration", "PayPal API", "Web Development", "Full-Stack Architecture", "Payment Gateway"],
    features: [
      "Seamless PayPal REST API Payment Gateway Integration",
      "Administrator Financial Dashboard & Audit Trail",
      "Donor Workflow & Transaction History Management",
      "Automated Receipt Generation & Instant Email Alerts",
      "Role-Based Access Control (RBAC) Security System"
    ],
    roleDetails: "Designed and implemented the full systems integration architecture, payment gateway handlers, and donor-admin data pipelines."
  },
  {
    id: "vitaly-tea",
    number: "03",
    title: "VITALY TEA",
    subtitle: "Tea Shop & Printing Service Hub",
    category: "Web Application",
    categoryKey: "web-mobile",
    image: "/assets/project_vitalytea.png",
    accentColor: "#f59e0b",
    accentGlow: "rgba(245, 158, 11, 0.4)",
    description: "An interactive web platform built for a hybrid tea shop and printing service hub. Features a responsive beverage ordering catalog, customizable printing request form, customer reviews, blog updates, and custom Y2K visual design.",
    metrics: "Role: Web Developer & UI Designer • Deployed on Netlify",
    liveUrl: "https://moonlit-pithivier-1e4971.netlify.app/",
    githubUrl: "https://github.com/altheazuleikasadicon",
    tags: ["HTML/CSS", "JavaScript", "Netlify Deployment", "E-Commerce & Services", "UI/UX Design"],
    features: [
      "Interactive Digital Ordering Menu for Beverages",
      "Customizable Printing Service Catalog & Upload Form",
      "Responsive Layout with Vintage & Modern Styling",
      "Customer Testimonials & News/Blog Engine",
      "Fast Static Deployment with Netlify Automation"
    ],
    roleDetails: "Sole developer responsible for UI/UX wireframing, frontend development, dynamic ordering logic, and cloud deployment."
  },
  {
    id: "cybersecurity",
    number: "04",
    title: "IT & CYBERSECURITY PROJECTS",
    subtitle: "Networking & Cybersecurity",
    category: "Academic Projects",
    categoryKey: "academic",
    image: "/assets/project_cybersecurity.png",
    accentColor: "#ef4444",
    accentGlow: "rgba(239, 68, 68, 0.4)",
    description: "A collection of hands-on networking and cybersecurity lab implementations, including Cisco enterprise topologies, Linux administration, Packet Tracer simulations, endpoint threat analysis, and network security protocol configurations.",
    metrics: "Role: Student Researcher & Network Security Specialist",
    liveUrl: "https://github.com/altheazuleikasadicon",
    githubUrl: "https://github.com/altheazuleikasadicon",
    tags: ["Linux", "Networking", "Cybersecurity", "Cisco Packet Tracer", "Enterprise Security"],
    features: [
      "Cisco Enterprise Network Topology & Routing Protocols (OSPF, VLANs)",
      "Linux Server Administration & Permission Hardening",
      "Endpoint Security Analysis & Threat Monitoring Labs",
      "Network Automation Scripts & Packet Packet Capture Diagnostics",
      "DevNet API Integration & Infrastructure Automation"
    ],
    roleDetails: "Executed lab configurations, enterprise network topology designs, and security auditing as part of Cisco CCNA & DevNet certification courses."
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
    issuer: "Cisco Networking Academy",
    issuerCode: "CISCO",
    date: "2026",
    credentialId: "CISCO-DEVNET-2026",
    badgeColor: "#049FD9",
    sealType: "gold",
    verificationUrl: "https://www.credly.com/org/cisco/badge/cisco-certified-devnet-associate",
    description: "Validates technical mastery in software development, REST API integrations, network automation, CI/CD pipelines, and application deployment on Cisco infrastructure.",
    competencies: ["REST APIs", "Network Automation", "Python", "CI/CD Pipelines", "Infrastructure as Code"]
  },
  {
    id: 2,
    title: "PMI Project Management Ready",
    issuer: "Project Management Institute (PMI)",
    issuerCode: "PMI",
    date: "2026",
    credentialId: "PMI-PMR-2026",
    badgeColor: "#FF6900",
    sealType: "gold",
    verificationUrl: "https://www.credly.com/org/project-management-institute/badge/pmi-project-management-ready",
    description: "Certification covering project management methodologies, Agile & Waterfall frameworks, scope and schedule planning, risk mitigation, and stakeholder leadership.",
    competencies: ["Project Lifecycle", "Agile & Waterfall", "Risk Management", "Resource Planning", "Stakeholder Leadership"]
  },
  {
    id: 3,
    title: "Cisco CCNA Enterprise Networking, Security & Automation",
    issuer: "Cisco Networking Academy",
    issuerCode: "CISCO",
    date: "2025",
    credentialId: "CISCO-CCNA-ENSA-2025",
    badgeColor: "#049FD9",
    sealType: "bronze",
    verificationUrl: "https://www.credly.com/org/cisco/badge/ccna-enterprise-networking-security-and-automation",
    description: "Comprehensive credentials covering enterprise IP routing (OSPFv2/v3), switching architectures, network security protocols, VLAN segmentation, and automation scripts.",
    competencies: ["Enterprise Routing & OSPF", "Network Security & ACLs", "VLAN Segmentation", "Network Automation", "Cisco IOS"]
  },
  {
    id: 4,
    title: "Cisco CCNA Automation",
    issuer: "Cisco Networking Academy",
    issuerCode: "CISCO",
    date: "2025",
    credentialId: "CISCO-CCNA-AUTO-2025",
    badgeColor: "#049FD9",
    sealType: "gold",
    verificationUrl: "https://www.credly.com/org/cisco/badge/ccna-automation",
    description: "Focuses on programmatic network configuration, RESTCONF, NETCONF, Python network scripts, JSON/YAML data encoding, and modern controller-based architectures.",
    competencies: ["Network Automation", "RESTCONF / NETCONF", "Python Scripting", "JSON / YAML", "Cisco DNA Center"]
  },
  {
    id: 5,
    title: "Cisco CCNA Switching, Routing & Wireless Essentials",
    issuer: "Cisco Networking Academy",
    issuerCode: "CISCO",
    date: "2025",
    credentialId: "CISCO-CCNA-SRWE-2025",
    badgeColor: "#049FD9",
    sealType: "gold",
    verificationUrl: "https://www.credly.com/org/cisco/badge/ccna-switching-routing-and-wireless-essentials",
    description: "Covers configuration and troubleshooting of enterprise switches, routers, VLANs, STP, EtherChannel, DHCPv4/v6, SLAAC, and WLAN wireless network architectures.",
    competencies: ["Switching & Routing", "VLANs & Trunks", "Spanning Tree (STP)", "EtherChannel", "Wireless LANs (WLAN)"]
  },
  {
    id: 6,
    title: "Cisco CCNA Introduction to Networks",
    issuer: "Cisco Networking Academy",
    issuerCode: "CISCO",
    date: "2024",
    credentialId: "CISCO-CCNA-ITN-2024",
    badgeColor: "#049FD9",
    sealType: "gold",
    verificationUrl: "https://www.credly.com/org/cisco/badge/ccna-introduction-to-networks",
    description: "Foundational architecture covering OSI & TCP/IP models, IPv4/IPv6 addressing and subnetting, Ethernet principles, and basic network device configuration.",
    competencies: ["OSI & TCP/IP Model", "IPv4 & IPv6 Subnetting", "Ethernet Architecture", "Cisco Packet Tracer", "Device Hardening"]
  },
  {
    id: 7,
    title: "Cisco Linux Essentials",
    issuer: "Cisco & Linux Professional Institute",
    issuerCode: "LPI",
    date: "2025",
    credentialId: "CISCO-LINUX-2025",
    badgeColor: "#F59E0B",
    sealType: "gold",
    verificationUrl: "https://www.credly.com/org/cisco/badge/linux-essentials",
    description: "Certification in Linux operating system fundamentals, command-line interface (CLI) mastery, Bash shell scripting, security permissions, and system administration.",
    competencies: ["Linux OS Architecture", "Bash Scripting & CLI", "File Systems & Permissions", "User Administration", "Security Concepts"]
  },
  {
    id: 8,
    title: "Cisco Cybersecurity Essentials",
    issuer: "Cisco Networking Academy",
    issuerCode: "CISCO",
    date: "2024",
    credentialId: "CISCO-CYBER-2024",
    badgeColor: "#DC2626",
    sealType: "bronze",
    verificationUrl: "https://www.credly.com/org/cisco/badge/cybersecurity-essentials",
    description: "Covers tactical cybersecurity principles, threat actor profiles, vulnerability assessments, encryption fundamentals, firewall policies, and incident mitigation.",
    competencies: ["Threat Analysis", "Cryptography & SSL", "Firewalls & Defense", "Network Vulnerabilities", "Security Compliance"]
  },
  {
    id: 9,
    title: "Cisco Python Essentials",
    issuer: "Cisco & OpenEDG Python Institute",
    issuerCode: "PYTHON",
    date: "2025",
    credentialId: "CISCO-PYTHON-2025",
    badgeColor: "#3776AB",
    sealType: "gold",
    verificationUrl: "https://www.credly.com/org/cisco/badge/python-essentials-1",
    description: "Certification demonstrating proficiency in core Python programming, data structures, algorithmic problem solving, object-oriented concepts, and API integration.",
    competencies: ["Python 3 Core", "Data Structures & OOP", "Algorithms & Logic", "Exception Handling", "Automation Scripts"]
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

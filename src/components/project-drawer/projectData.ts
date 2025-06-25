import { Project } from "@/types";

export const projects: Project[] = [
  {
    id: 1,
    title: "Gharana Food Delivery",
    category: "Mobile App",
    image: "/placeholder.svg",
    description: "A comprehensive food delivery app with real-time tracking and seamless user experience.",
    client: "Gharana Foods",
    duration: "6 Months",
    role: "Lead UX/UI Designer",
    tags: ["UX Design", "Mobile App", "Food Tech"],
    featured: true
  },
  {
    id: 2,
    title: "LG Cyclops AR",
    category: "AR/VR",
    image: "/placeholder.svg",
    description: "Augmented reality application for industrial maintenance and training.",
    client: "LG Electronics",
    duration: "8 Months",
    role: "AR/VR Designer",
    tags: ["AR/VR", "Industrial", "Training"],
    featured: true
  },
  {
    id: 3,
    title: "Welbilt Kitchen Connect",
    category: "IoT Platform",
    image: "/placeholder.svg",
    description: "IoT platform for commercial kitchen management and monitoring.",
    client: "Welbilt Inc.",
    duration: "4 Months",
    role: "Product Designer",
    tags: ["IoT", "Dashboard", "Commercial"],
    featured: true
  },
  {
    id: 4,
    title: "Digital Banking Platform",
    category: "Fintech",
    image: "/placeholder.svg",
    description: "Modern banking interface with focus on user experience and security.",
    client: "Regional Bank",
    duration: "5 Months",
    role: "UX Designer",
    tags: ["Fintech", "Banking", "Security"],
    featured: false
  },
  {
    id: 5,
    title: "Healthcare Dashboard",
    category: "Healthcare",
    image: "/placeholder.svg",
    description: "Medical data visualization and patient management system.",
    client: "MedTech Solutions",
    duration: "7 Months",
    role: "Product Designer",
    tags: ["Healthcare", "Dashboard", "Data Viz"],
    featured: false
  },
  {
    id: 6,
    title: "E-learning Platform",
    category: "Education",
    image: "/placeholder.svg",
    description: "Interactive learning platform with gamification elements.",
    client: "EduTech Innovations",
    duration: "6 Months",
    role: "UX/UI Designer",
    tags: ["Education", "E-learning", "Gamification"],
    featured: false
  },
  {
    id: 7,
    title: "Smart Home Control",
    category: "IoT",
    image: "/placeholder.svg",
    description: "Unified control interface for smart home devices and automation.",
    client: "Home Automation Co.",
    duration: "4 Months",
    role: "Product Designer",
    tags: ["IoT", "Smart Home", "Mobile"],
    featured: false
  },
  {
    id: 8,
    title: "P&G Research Razor – UX/UI Redesign",
    category: "Industrial UX",
    image: "/placeholder.svg",
    description: "A comprehensive UX redesign of P&G's Datalogger application used in industrial and research environments.",
    client: "Procter & Gamble",
    duration: "3 Months",
    role: "Lead UX/UI Designer & Researcher",
    tags: ["UX Research", "UI Design", "Accessibility", "Industrial Design"],
    featured: true
  }
];

export const categories = [
  "All",
  "Mobile App",
  "AR/VR",
  "IoT Platform",
  "Fintech",
  "Healthcare",
  "Education",
  "IoT",
  "Industrial UX"
];

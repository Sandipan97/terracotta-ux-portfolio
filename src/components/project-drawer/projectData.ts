
export interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client: string;
  duration: string;
  role: string;
  tags: string[];
  featured: boolean;
  slug?: string;
}

export interface ProjectFileData {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  duration?: string;
  results?: string;
  slug?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    slug: "gharana-food-delivery",
    title: "Gharana - Home Food Delivery App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "A mobile platform that bridges the gap between home-based cloud kitchens and customers seeking authentic, homemade meals.",
    client: "Gharana Food Tech",
    duration: "8 Months",
    role: "Lead UX/UI Designer",
    tags: ["Mobile App Design", "UX Research", "UI Design"],
    featured: true
  },
  {
    id: 2,
    title: "Heuristic and Accessibility Revamp Project - P&G Datalogger",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Complete revamp of P&G's industrial data logging system with focus on accessibility and improved usability.",
    client: "Procter & Gamble",
    duration: "6 Months",
    role: "Lead UX/UI Designer",
    tags: ["UX Design", "Accessibility", "Industrial"],
    featured: true
  },
  {
    id: 3,
    slug: "welbilt-kitchen-connect",
    title: "Design System and Revamp Project - Welbilt Kitchen Connect",
    category: "Design Systems",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    description: "Created a comprehensive design system for Welbilt's kitchen management platform, improving consistency and development efficiency.",
    client: "Welbilt Inc.",
    duration: "8 Months",
    role: "Senior UX Designer & Design System Lead",
    tags: ["Design Systems", "IoT Platform", "Commercial"],
    featured: true
  },
  {
    id: 4,
    slug: "lg-cyclops-ar",
    title: "AR Interactive User Manual - LG Cyclops",
    category: "AR Projects",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Designed an augmented reality solution that transforms the traditional product manual into an interactive experience.",
    client: "LG Electronics",
    duration: "4 Months",
    role: "AR/VR Designer",
    tags: ["AR/VR", "Industrial", "Training"],
    featured: true
  },
  {
    id: 5,
    title: "Oxygen Concentrator O2C Project - Merritt Innovation Solutions & IISc",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Developed a user-centered interface for a portable oxygen concentrator device for medical use.",
    client: "Merritt Innovation Solutions & IISc",
    duration: "5 Months",
    role: "Product Designer",
    tags: ["Healthcare", "Product Design", "Medical"],
    featured: true
  },
  {
    id: 6,
    title: "Dripometer - IV Drip Monitoring System - IISc",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Designed an innovative monitoring system for intravenous drips to improve accuracy and patient safety.",
    client: "IISc",
    duration: "7 Months",
    role: "Product Designer",
    tags: ["Healthcare", "Product Design", "Medical"],
    featured: false
  },
  {
    id: 7,
    title: "Farm Monitoring Mobile Application - HCLTech",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Developed a comprehensive mobile application for farmers to monitor crops, soil conditions, and weather patterns.",
    client: "HCLTech",
    duration: "6 Months",
    role: "UX Designer",
    tags: ["UX Design", "Mobile App", "Agriculture"],
    featured: false
  },
  {
    id: 8,
    title: "Toy Anatomy - Kids Toy Project - IISc",
    category: "Educational Design",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Created an educational toy system that helps children learn about human anatomy through interactive play.",
    client: "IISc",
    duration: "4 Months",
    role: "Product Designer",
    tags: ["Education", "Product Design", "Interactive"],
    featured: false
  },
  {
    id: 9,
    slug: "pg-research-razor",
    title: "P&G Research Razor – UX/UI Redesign",
    category: "Industrial UX",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "A comprehensive UX redesign of P&G's Datalogger application used in industrial and research environments.",
    client: "Procter & Gamble",
    duration: "3 Months",
    role: "Lead UX/UI Designer & Researcher",
    tags: ["UX Research", "UI Design", "Accessibility", "Industrial Design"],
    featured: true
  }
];

export const projectFiles: ProjectFileData[] = projects.map(project => ({
  id: project.id,
  title: project.title,
  category: project.category,
  image: project.image,
  description: project.description,
  duration: project.duration,
  slug: project.slug,
  results: project.id === 1 ? "200% increase in home chef registrations" :
           project.id === 2 ? "Reduced error rate by 45%" :
           project.id === 3 ? "Accelerated development by 35%" :
           project.id === 4 ? "Reduced support calls by 60%" :
           project.id === 5 ? "Improved user satisfaction by 85%" :
           project.id === 6 ? "Increased monitoring accuracy by 95%" :
           project.id === 7 ? "Improved crop yield by 28%" :
           project.id === 8 ? "Increased learning outcomes by 40%" :
           undefined
}));

export const categories = [
  "All",
  "Mobile App",
  "UX Design",
  "Design Systems", 
  "AR Projects",
  "Product Design",
  "Educational Design",
  "Industrial UX"
];

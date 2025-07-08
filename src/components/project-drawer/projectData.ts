
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
    slug: "pg-research-razor",
    title: "P&G Research Razor – UX/UI Redesign",
    category: "Industrial UX",
    image: "/lovable-uploads/c2dfb2fc-13e4-4095-a586-8bbe9a0d451f.png",
    description: "A comprehensive UX redesign of P&G's Datalogger application used in industrial and research environments.",
    client: "Procter & Gamble",
    duration: "3 Months",
    role: "Lead UX/UI Designer & Researcher",
    tags: ["UX Research", "UI Design", "Accessibility", "Industrial Design"],
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
    slug: "dripometer",
    title: "Dripometer - IV Drip Monitoring System",
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
    id: 6,
    slug: "toy-anatomy",
    title: "Toy Anatomy - Kids Educational Project",
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
    id: 7,
    slug: "o2c-project",
    title: "Oxygen Concentrator O2C Project",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Developed a user-centered interface for a portable oxygen concentrator device for medical use.",
    client: "Merritt Innovation Solutions & IISc",
    duration: "5 Months",
    role: "Product Designer",
    tags: ["Healthcare", "Product Design", "Medical"],
    featured: false
  },
  {
    id: 8,
    slug: "farm-monitoring",
    title: "Farm Monitoring Mobile Application",
    category: "UX Design",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Developed a comprehensive mobile application for farmers to monitor crops, soil conditions, and weather patterns.",
    client: "HCLTech",
    duration: "6 Months",
    role: "UX Designer",
    tags: ["UX Design", "Mobile App", "Agriculture"],
    featured: false
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
           project.id === 2 ? "45% reduction in error rates" :
           project.id === 3 ? "35% faster development cycles" :
           project.id === 4 ? "60% reduction in support calls" :
           project.id === 5 ? "95% increase in monitoring accuracy" :
           project.id === 6 ? "40% improvement in learning outcomes" :
           project.id === 7 ? "85% improvement in user satisfaction" :
           project.id === 8 ? "28% improvement in crop yield tracking" :
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

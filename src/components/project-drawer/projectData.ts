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
  videoThumbnail?: string;
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
  videoThumbnail?: string;
}

// Import video thumbnail service
import { getProjectThumbnail } from '@/services/videoThumbnailService';

export const projects: Project[] = [
  {
    id: 1,
    slug: "gharana-food-delivery",
    title: "Gharana - Home Food Delivery App", // data-lovable-editable="project-1-title"
    category: "Mobile App", // data-lovable-editable="project-1-category"
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "A mobile platform that bridges the gap between home-based cloud kitchens and customers seeking authentic, homemade meals.", // data-lovable-editable="project-1-description"
    client: "Gharana Food Tech", // data-lovable-editable="project-1-client"
    duration: "8 Months", // data-lovable-editable="project-1-duration"
    role: "Lead UX/UI Designer", // data-lovable-editable="project-1-role"
    tags: ["Mobile App Design", "UX Research", "UI Design"],
    featured: true
  },
  {
    id: 3,
    slug: "welbilt-kitchen-connect",
    title: "Design System and Revamp Project - Welbilt Kitchen Connect",
    category: "Design Systems",
    image: "/lovable-uploads/db2f25b4-a19e-4e24-a2d9-20cc8fc37b83.png",
    description: "Created a comprehensive design system for Welbilt's kitchen management platform, improving consistency and development efficiency.",
    client: "Welbilt Inc.",
    duration: "8 Months",
    role: "Senior UX Designer & Design System Lead",
    tags: ["Design Systems", "IoT Platform", "Commercial"],
    featured: true
  },
  {
    id: 4,
    slug: "cyclops-ar-manual",
    title: "Cyclops AR Interactive User Manual",
    category: "AR Projects",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Revolutionizing product manuals with augmented reality - an immersive experience that simplifies setup, enhances understanding, and delights users.",
    client: "HCL Technologies",
    duration: "6 Months",
    role: "Lead AR/UX Designer",
    tags: ["AR/VR", "Interactive Design", "User Experience", "Product Innovation"],
    featured: true,
    videoThumbnail: getProjectThumbnail("cyclops-ar-manual")
  },
  {
    id: 5,
    slug: "dripometer",
    title: "Dripometer - IV Drip Monitoring System",
    category: "Product Design", 
    image: "/lovable-uploads/201d2ccf-b36e-4854-851b-d57c09f12002.png",
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
    image: "/lovable-uploads/372faad7-f0e0-4aa8-beb3-7dbe762163ee.png",
    description: "Developed a comprehensive mobile application for farmers to monitor crops, soil conditions, and weather patterns.",
    client: "HCLTech",
    duration: "6 Months",
    role: "UX Designer",
    tags: ["UX Design", "Mobile App", "Agriculture"],
    featured: false,
    videoThumbnail: getProjectThumbnail("farm-monitoring")
  },
  {
    id: 9,
    slug: "pg-datalogger",
    title: "P&G Datalogger UX Revamp",
    category: "Industrial UX",
    image: "/lovable-uploads/45a7df38-b06b-4dd3-9680-2ad85a0a40be.png",
    description: "A complete redesign of the Datalogger application to enhance usability, performance, and reliability with modern UX standards.",
    client: "Procter & Gamble",
    duration: "6 Months",
    role: "Lead UX/UI Designer",
    tags: ["UX Research", "UI Design", "Industrial UX", "Design Systems"],
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
  videoThumbnail: project.videoThumbnail,
  results: project.id === 1 ? "200% increase in home chef registrations" :
           project.id === 3 ? "35% faster development cycles" :
           project.id === 4 ? "75% reduction in manual printing costs" :
           project.id === 5 ? "95% increase in monitoring accuracy" :
           project.id === 6 ? "40% improvement in learning outcomes" :
           project.id === 7 ? "85% improvement in user satisfaction" :
           project.id === 8 ? "28% improvement in crop yield tracking" :
           project.id === 9 ? "Reduced user errors by 60% and improved task completion" :
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

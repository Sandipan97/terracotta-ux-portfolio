
export interface ProjectFileData {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  results?: string;
  duration?: string;
  slug?: string;
}

export const projectFiles: ProjectFileData[] = [
  {
    id: 1,
    title: "Heuristic and Accessibility Revamp Project - P&G Datalogger",
    category: "UX",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Complete UX overhaul focusing on accessibility compliance and improved usability for industrial data logging systems.",
    results: "45% error reduction",
    duration: "4 months"
  },
  {
    id: 2,
    title: "Design System and Revamp Project - Welbilt Kitchen Connect",
    category: "Design Systems",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Comprehensive design system creation for kitchen management platform, improving consistency and development efficiency.",
    results: "35% faster development",
    duration: "6 months",
    slug: "welbilt-kitchen-connect"
  },
  {
    id: 3,
    title: "AR Interactive User Manual - LG Cyclops",
    category: "AR Projects",
    image: "https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Augmented reality solution transforming traditional product manuals into interactive experiences.",
    results: "60% support call reduction",
    duration: "5 months",
    slug: "lg-cyclops-ar"
  },
  {
    id: 4,
    title: "Oxygen Concentrator O2C Project",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "User-centered interface design for portable oxygen concentrator device for medical applications.",
    results: "85% user satisfaction",
    duration: "4 months"
  },
  {
    id: 5,
    title: "Dripometer - IV Drip Monitoring System",
    category: "Product Design",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Innovative monitoring system for intravenous drips improving accuracy and patient safety.",
    results: "95% accuracy improvement",
    duration: "3 months"
  },
  {
    id: 6,
    title: "Farm Monitoring Mobile Application",
    category: "UI",
    image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Mobile application for farmers to monitor crops, soil conditions, and weather patterns.",
    results: "28% crop yield improvement",
    duration: "5 months"
  },
  {
    id: 7,
    title: "Toy Anatomy - Kids Educational Project",
    category: "Research",
    image: "https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Educational toy system helping children learn human anatomy through interactive play.",
    results: "40% learning improvement",
    duration: "6 months"
  }
];

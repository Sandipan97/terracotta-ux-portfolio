
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  results?: string;
  featured?: boolean;
};

const allProjects: Project[] = [
  {
    id: 1,
    title: "Heuristic and Accessibility Revamp Project - P&G Datalogger",
    category: "B2B Solutions",
    image: "/projects/datalogger.jpg",
    description: "Complete revamp of P&G's industrial data logging system with focus on accessibility and improved usability.",
    results: "Reduced error rate by 45%",
    featured: true
  },
  {
    id: 2,
    title: "Design System and Revamp Project - Welbilt Kitchen Connect",
    category: "Design Systems",
    image: "/projects/kitchen-connect.jpg",
    description: "Created a comprehensive design system for Welbilt's kitchen management platform, improving consistency and development efficiency.",
    results: "Accelerated development by 35%",
    featured: true
  },
  {
    id: 3,
    title: "AR Interactive User Manual - LG Cyclops",
    category: "AR Projects",
    image: "/projects/ar-manual.jpg",
    description: "Designed an augmented reality solution that transforms the traditional product manual into an interactive experience.",
    results: "Reduced support calls by 60%",
    featured: true
  },
  {
    id: 4,
    title: "Oxygen Concentrator O2C Project - Merritt Innovation Solutions & IISc",
    category: "Biomedical Design",
    image: "/projects/oxygen-concentrator.jpg",
    description: "Developed a user-centered interface for a portable oxygen concentrator device for medical use.",
    results: "Improved user satisfaction by 85%",
    featured: true
  },
  {
    id: 5,
    title: "Dripometer - IV Drip Monitoring System - IISc",
    category: "Biomedical Design",
    image: "/projects/dripometer.jpg",
    description: "Designed an innovative monitoring system for intravenous drips to improve accuracy and patient safety.",
    results: "Increased monitoring accuracy by 95%"
  },
  {
    id: 6,
    title: "Farm Monitoring Mobile Application - HCLTech",
    category: "Mobile Apps",
    image: "/projects/farm-app.jpg",
    description: "Developed a comprehensive mobile application for farmers to monitor crops, soil conditions, and weather patterns.",
    results: "Improved crop yield by 28%"
  },
  {
    id: 7,
    title: "Toy Anatomy - Kids Toy Project - IISc",
    category: "Educational Design",
    image: "/projects/toy-anatomy.jpg",
    description: "Created an educational toy system that helps children learn about human anatomy through interactive play.",
    results: "Increased learning outcomes by 40%"
  }
];

const categories = ["All", "B2B Solutions", "Design Systems", "AR Projects", "Biomedical Design", "Mobile Apps", "Educational Design"];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");
  
  const filteredProjects = selectedCategory === "All" 
    ? allProjects 
    : allProjects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-bengali-terracotta py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-heading text-4xl md:text-5xl font-bold text-white mb-4">
              My Projects
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              A showcase of my UX design and research work across various industries and technologies
            </p>
          </div>
        </section>
        
        {/* Projects Filter */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-wrap justify-center gap-3 mb-12">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "outline"}
                  className={
                    selectedCategory === category
                      ? "bg-bengali-terracotta hover:bg-bengali-terracotta/90 text-white"
                      : "border-bengali-terracotta text-bengali-terracotta hover:bg-bengali-terracotta hover:text-white"
                  }
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-bengali-terracotta/80 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <Link to={`/projects/${project.id}`}>
                        <Button className="bg-white text-bengali-terracotta hover:bg-bengali-mustard hover:text-bengali-dark">
                          View Case Study
                        </Button>
                      </Link>
                    </div>
                    <div className="absolute top-4 left-4 bg-bengali-mustard text-bengali-dark text-xs px-3 py-1 rounded-full">
                      {project.category}
                    </div>
                    {project.featured && (
                      <div className="absolute top-4 right-4 bg-bengali-red text-white text-xs px-3 py-1 rounded-full">
                        Featured
                      </div>
                    )}
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-semibold text-bengali-dark mb-2">
                      {project.title}
                    </h3>
                    <p className="text-bengali-dark/70 mb-4">
                      {project.description}
                    </p>
                    {project.results && (
                      <div className="text-bengali-red font-medium mb-4">
                        Result: {project.results}
                      </div>
                    )}
                    <Link 
                      to={`/projects/${project.id}`}
                      className="inline-flex items-center text-bengali-terracotta hover:text-bengali-red transition-colors font-medium"
                    >
                      View Details <ArrowRight size={16} className="ml-2" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-bengali-terracotta text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Let's discuss how my UX design and research expertise can help your next project succeed.
            </p>
            <Button className="bg-bengali-mustard text-bengali-dark hover:bg-white" asChild>
              <Link to="/contact">Get in Touch</Link>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;

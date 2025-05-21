import { useState } from 'react';
import { Button } from './ui/button';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  results?: string;
};

const featuredProjects: Project[] = [
  {
    id: 1,
    title: "Heuristic and Accessibility Revamp Project - P&G Datalogger",
    category: "B2B Solutions",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Complete revamp of P&G's industrial data logging system with focus on accessibility and improved usability.",
    results: "Reduced error rate by 45%"
  },
  {
    id: 2,
    title: "Design System and Revamp Project - Welbilt Kitchen Connect",
    category: "Design Systems",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Created a comprehensive design system for Welbilt's kitchen management platform, improving consistency and development efficiency.",
    results: "Accelerated development by 35%"
  },
  {
    id: 3,
    title: "AR Interactive User Manual - LG Cyclops",
    category: "AR Projects",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Designed an augmented reality solution that transforms the traditional product manual into an interactive experience.",
    results: "Reduced support calls by 60%"
  },
  {
    id: 4,
    title: "Oxygen Concentrator O2C Project - Merritt Innovation Solutions & IISc",
    category: "Biomedical Design",
    image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    description: "Developed a user-centered interface for a portable oxygen concentrator device for medical use.",
    results: "Improved user satisfaction by 85%"
  }
];

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="featured-projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-bengali-dark mb-4">Featured Projects</h2>
          <p className="text-bengali-dark/70 max-w-2xl mx-auto">
            A selection of my most impactful work across various domains and industries
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProjects.slice(0, 3).map((project) => (
            <div 
              key={project.id}
              className="group bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
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
              </div>
              <div className="p-6">
                <h3 className="font-heading text-xl font-semibold text-bengali-dark mb-2">
                  {project.title}
                </h3>
                <p className="text-bengali-dark/70 mb-4">
                  {project.description}
                </p>
                {project.results && (
                  <div className="text-bengali-red font-medium">
                    Result: {project.results}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link to="/projects">
            <Button className="bg-bengali-terracotta hover:bg-bengali-mustard text-white hover:text-bengali-dark">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

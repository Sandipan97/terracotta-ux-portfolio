
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
    title: "Healthcare Patient Portal Redesign",
    category: "B2B Solutions",
    image: "/placeholder.svg",
    description: "Redesigned the patient portal for a major healthcare provider, improving patient engagement and satisfaction.",
    results: "Increased user retention by 32%"
  },
  {
    id: 2,
    title: "AR Navigation Application",
    category: "AR Projects",
    image: "/placeholder.svg",
    description: "Developed an AR wayfinding solution for complex indoor environments like hospitals and shopping malls.",
    results: "Reduced navigation time by 45%"
  },
  {
    id: 3,
    title: "Biomedical Monitoring Device Interface",
    category: "Biomedical Design",
    image: "/placeholder.svg",
    description: "Created an intuitive interface for a complex biomedical monitoring device used by healthcare professionals.",
    results: "Decreased training time by 60%"
  },
  {
    id: 4,
    title: "AI-Powered Design System",
    category: "AI in Design",
    image: "/placeholder.svg",
    description: "Designed and implemented an AI-powered design system that adapts to user preferences and behaviors.",
    results: "Streamlined workflow by 40%"
  }
];

const FeaturedProjects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  return (
    <section id="featured-projects" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bengali-dark mb-4">Featured Projects</h2>
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
                <h3 className="font-display text-xl font-semibold text-bengali-dark mb-2">
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
            <Button className="bg-bengali-dark hover:bg-bengali-terracotta text-white">
              View All Projects <ArrowRight size={16} className="ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;

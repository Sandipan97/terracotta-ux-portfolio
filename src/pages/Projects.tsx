
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
    title: "Healthcare Patient Portal Redesign",
    category: "B2B Solutions",
    image: "/placeholder.svg",
    description: "Redesigned the patient portal for a major healthcare provider, improving patient engagement and satisfaction.",
    results: "Increased user retention by 32%",
    featured: true
  },
  {
    id: 2,
    title: "AR Navigation Application",
    category: "AR Projects",
    image: "/placeholder.svg",
    description: "Developed an AR wayfinding solution for complex indoor environments like hospitals and shopping malls.",
    results: "Reduced navigation time by 45%",
    featured: true
  },
  {
    id: 3,
    title: "Biomedical Monitoring Device Interface",
    category: "Biomedical Design",
    image: "/placeholder.svg",
    description: "Created an intuitive interface for a complex biomedical monitoring device used by healthcare professionals.",
    results: "Decreased training time by 60%",
    featured: true
  },
  {
    id: 4,
    title: "AI-Powered Design System",
    category: "AI in Design",
    image: "/placeholder.svg",
    description: "Designed and implemented an AI-powered design system that adapts to user preferences and behaviors.",
    results: "Streamlined workflow by 40%",
    featured: true
  },
  {
    id: 5,
    title: "Finance Management Mobile App",
    category: "Mobile Apps",
    image: "/placeholder.svg",
    description: "Designed a personal finance management app with intuitive visualizations and automated insights.",
    results: "95% user satisfaction rate"
  },
  {
    id: 6,
    title: "Supply Chain Management Dashboard",
    category: "B2B Solutions",
    image: "/placeholder.svg",
    description: "Created a comprehensive dashboard for supply chain managers to monitor and optimize operations.",
    results: "Reduced decision-making time by 35%"
  },
  {
    id: 7,
    title: "VR Medical Training Platform",
    category: "AR Projects",
    image: "/placeholder.svg",
    description: "Designed a VR platform for medical students to practice procedures in a realistic but safe environment.",
    results: "Improved learning outcomes by 28%"
  },
  {
    id: 8,
    title: "E-commerce Personalization System",
    category: "AI in Design",
    image: "/placeholder.svg",
    description: "Developed a personalized shopping experience powered by AI recommendations.",
    results: "Increased conversion rate by 24%"
  }
];

const categories = ["All", "B2B Solutions", "AR Projects", "Biomedical Design", "AI in Design", "Mobile Apps"];

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
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
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
                    <h3 className="font-display text-xl font-semibold text-bengali-dark mb-2">
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
            <h2 className="font-display text-3xl md:text-4xl font-bold mb-6">
              Interested in Working Together?
            </h2>
            <p className="text-white/80 max-w-2xl mx-auto mb-8">
              Let's discuss how my UX design and research expertise can help your next project succeed.
            </p>
            <Button className="bg-white text-bengali-terracotta hover:bg-bengali-mustard hover:text-bengali-dark" asChild>
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Projects;

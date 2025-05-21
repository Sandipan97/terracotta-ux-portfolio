
import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';

type Project = {
  id: number;
  title: string;
  category: string;
  image: string;
  description: string;
  client?: string;
  duration?: string;
  role?: string;
  overview?: string;
  challenge?: string;
  solution?: string;
  process?: {
    title: string;
    description: string;
    image?: string;
  }[];
  results?: string;
  testimonial?: {
    quote: string;
    author: string;
    title: string;
  };
};

const projects: Project[] = [
  {
    id: 1,
    title: "Healthcare Patient Portal Redesign",
    category: "B2B Solutions",
    image: "/placeholder.svg",
    client: "National Healthcare Provider",
    duration: "6 months",
    role: "Lead UX Designer & Researcher",
    description: "Redesigned the patient portal for a major healthcare provider, improving patient engagement and satisfaction.",
    overview: "This project involved a complete redesign of a healthcare provider's patient portal used by over 2 million patients. The existing portal had poor usability, leading to low engagement and frequent support calls.",
    challenge: "The main challenges included designing for diverse user groups (from teenagers to seniors), ensuring accessibility, integrating with legacy systems, and maintaining security and privacy compliance.",
    solution: "I led a user-centered design process that included extensive research, iterative prototyping, and continuous testing. The redesigned portal featured a simplified dashboard, personalized health insights, and intuitive navigation.",
    process: [
      {
        title: "Research",
        description: "Conducted 30+ user interviews, analyzed support tickets, and created detailed personas representing key user groups.",
        image: "/placeholder.svg"
      },
      {
        title: "Design",
        description: "Developed wireframes and high-fidelity prototypes with a focus on clarity and accessibility.",
        image: "/placeholder.svg"
      },
      {
        title: "Testing",
        description: "Conducted multiple rounds of usability testing with real patients to iterate and refine the design.",
        image: "/placeholder.svg"
      },
      {
        title: "Implementation",
        description: "Worked closely with developers to ensure the design was implemented accurately and efficiently.",
        image: "/placeholder.svg"
      }
    ],
    results: "The redesigned portal led to a 32% increase in user retention, a 45% decrease in support calls, and a 76% improvement in user satisfaction scores.",
    testimonial: {
      quote: "The redesigned portal has transformed how our patients interact with our services. The intuitive design has significantly improved patient engagement and reduced the burden on our support staff.",
      author: "Dr. Sarah Johnson",
      title: "Chief Medical Officer"
    }
  },
  {
    id: 2,
    title: "AR Navigation Application",
    category: "AR Projects",
    image: "/placeholder.svg",
    client: "Tech Innovation Labs",
    duration: "8 months",
    role: "Senior UX Designer & AR Specialist",
    description: "Developed an AR wayfinding solution for complex indoor environments like hospitals and shopping malls.",
    overview: "This project aimed to create an augmented reality navigation system that would help users navigate complex indoor environments without the limitations of traditional GPS.",
    challenge: "Creating an intuitive AR interface that worked seamlessly in various lighting conditions and didn't overwhelm users with information was a significant challenge.",
    solution: "I designed a minimalist AR interface that used directional arrows, distance indicators, and subtle visual cues to guide users. The application also incorporated audio cues for accessibility.",
    process: [
      {
        title: "Research",
        description: "Studied user behavior in complex environments and reviewed existing AR navigation solutions.",
        image: "/placeholder.svg"
      },
      {
        title: "Conceptualization",
        description: "Created multiple concept designs and tested them in real environments to evaluate effectiveness.",
        image: "/placeholder.svg"
      },
      {
        title: "Prototyping",
        description: "Developed interactive AR prototypes and conducted in-field testing with various user groups.",
        image: "/placeholder.svg"
      },
      {
        title: "Refinement",
        description: "Iterated on the design based on user feedback, focusing on simplicity and reliability.",
        image: "/placeholder.svg"
      }
    ],
    results: "The AR navigation app reduced navigation time by 45% compared to traditional maps and signage, with a 92% user satisfaction rate.",
    testimonial: {
      quote: "This AR navigation solution has revolutionized how visitors find their way around our hospital. It's particularly valuable for helping anxious patients and visitors reach their destinations with minimal stress.",
      author: "Mark Williams",
      title: "Hospital Operations Director"
    }
  },
  // Add more detailed project data as needed
];

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id || "1");
  
  const project = projects.find(p => p.id === projectId);
  const nextProject = projects.find(p => p.id === projectId + 1) || projects[0];
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Project Not Found</h1>
          <Link to="/projects">
            <Button>Return to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-bengali-terracotta py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row gap-8 items-center">
              <div className="w-full md:w-1/2">
                <div className="text-white/80 mb-2">
                  {project.category}
                </div>
                <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
                  {project.title}
                </h1>
                <p className="text-white/90 text-lg mb-8">
                  {project.description}
                </p>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
                  {project.client && (
                    <div>
                      <div className="text-white/70 text-sm">Client</div>
                      <div className="text-white font-medium">{project.client}</div>
                    </div>
                  )}
                  {project.duration && (
                    <div>
                      <div className="text-white/70 text-sm">Duration</div>
                      <div className="text-white font-medium">{project.duration}</div>
                    </div>
                  )}
                  {project.role && (
                    <div>
                      <div className="text-white/70 text-sm">My Role</div>
                      <div className="text-white font-medium">{project.role}</div>
                    </div>
                  )}
                </div>
              </div>
              <div className="w-full md:w-1/2">
                <div className="rounded-lg overflow-hidden shadow-2xl">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-auto"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Project Overview */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="font-display text-3xl font-bold text-bengali-dark mb-6">
                Project Overview
              </h2>
              <p className="text-bengali-dark/80 text-lg mb-10">
                {project.overview}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-display text-xl font-semibold text-bengali-dark mb-4">
                    The Challenge
                  </h3>
                  <p className="text-bengali-dark/80">
                    {project.challenge}
                  </p>
                </div>
                <div className="bg-gray-50 p-6 rounded-lg">
                  <h3 className="font-display text-xl font-semibold text-bengali-dark mb-4">
                    The Solution
                  </h3>
                  <p className="text-bengali-dark/80">
                    {project.solution}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Design Process */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="font-display text-3xl font-bold text-bengali-dark mb-10 text-center">
              Design Process
            </h2>
            
            <div className="max-w-5xl mx-auto">
              {project.process?.map((step, index) => (
                <div key={index} className="mb-16 last:mb-0">
                  <div className="flex flex-col md:flex-row gap-8 items-center">
                    <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                      <div className="bg-white p-6 rounded-lg shadow-md">
                        <div className="text-bengali-terracotta font-medium mb-2">
                          Step {index + 1}
                        </div>
                        <h3 className="font-display text-2xl font-semibold text-bengali-dark mb-4">
                          {step.title}
                        </h3>
                        <p className="text-bengali-dark/80">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                      <div className="rounded-lg overflow-hidden shadow-md">
                        <img 
                          src={step.image || '/placeholder.svg'} 
                          alt={step.title}
                          className="w-full h-auto"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
        
        {/* Results */}
        <section className="py-16 bg-bengali-terracotta text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-display text-3xl font-bold mb-8">
              Results & Impact
            </h2>
            <p className="text-white/90 text-xl max-w-3xl mx-auto">
              {project.results}
            </p>
          </div>
        </section>
        
        {/* Testimonial */}
        {project.testimonial && (
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-3xl mx-auto bg-white p-8 rounded-lg shadow-lg border-l-4 border-bengali-mustard">
                <blockquote className="text-bengali-dark/80 text-lg italic mb-6">
                  "{project.testimonial.quote}"
                </blockquote>
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-bengali-terracotta/20 rounded-full flex items-center justify-center">
                    <span className="text-bengali-terracotta font-bold text-xl">
                      {project.testimonial.author.charAt(0)}
                    </span>
                  </div>
                  <div className="ml-4">
                    <div className="font-semibold text-bengali-dark">
                      {project.testimonial.author}
                    </div>
                    <div className="text-bengali-dark/70 text-sm">
                      {project.testimonial.title}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Next Project */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-center">
              <Link to="/projects" className="flex items-center text-bengali-terracotta hover:text-bengali-red transition-colors mb-4 md:mb-0">
                <ArrowLeft size={16} className="mr-2" /> Back to Projects
              </Link>
              
              <Link 
                to={`/projects/${nextProject.id}`}
                className="flex items-center group"
              >
                <div className="text-right mr-4">
                  <div className="text-sm text-bengali-dark/70">Next Project</div>
                  <div className="font-medium text-bengali-dark group-hover:text-bengali-terracotta transition-colors">
                    {nextProject.title}
                  </div>
                </div>
                <ArrowRight size={16} className="text-bengali-terracotta" />
              </Link>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;

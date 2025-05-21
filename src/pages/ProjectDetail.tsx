import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { useEffect } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { EditableImage } from '@/components/ui/editable-image';

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
  userPersona?: {
    title: string;
    description: string;
    image?: string;
  }[];
  userFlows?: {
    title: string;
    description: string;
    image?: string;
  }[];
  researchMethods?: {
    title: string;
    description: string;
    image?: string;
  }[];
  process?: {
    title: string;
    description: string;
    image?: string;
  }[];
  ideation?: {
    title: string;
    description: string;
    image?: string;
  }[];
  prototyping?: {
    title: string;
    description: string;
    image?: string;
  }[];
  results?: string;
  testimonial?: {
    quote: string;
    author: string;
    title: string;
    image?: string;
  };
};

const projects: Project[] = [
  {
    id: 1,
    title: "Heuristic and Accessibility Revamp Project - P&G Datalogger",
    category: "B2B Solutions",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    client: "Procter & Gamble",
    duration: "6 months",
    role: "Lead UX Designer & Accessibility Specialist",
    description: "Complete revamp of P&G's industrial data logging system with focus on accessibility and improved usability.",
    overview: "P&G's data logging system was critical for monitoring manufacturing processes but suffered from poor usability and accessibility issues. This project involved a complete redesign focused on heuristic principles and accessibility standards.",
    challenge: "The existing system had high error rates, steep learning curve, and was not accessible to users with disabilities. It needed to maintain complex functionality while becoming significantly easier to use.",
    solution: "I led a comprehensive redesign process that included detailed heuristic evaluation, accessibility audit, and user-centered design approach to create an intuitive, compliant interface.",
    userPersona: [
      {
        title: "Factory Floor Operators",
        description: "Production workers who need to quickly log data while handling other tasks. Often wearing protective gear that limits dexterity.",
        image: "https://images.unsplash.com/photo-1618281377501-88c2328802de?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Quality Analysts",
        description: "Technical staff who analyze data logs for quality control and need to extract meaningful patterns efficiently.",
        image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }
    ],
    userFlows: [
      {
        title: "Data Entry Flow",
        description: "Redesigned flow reduced the steps needed to log data from 7 to 3, with clear feedback at each stage.",
        image: "https://images.unsplash.com/photo-1574887427561-d3d5d58c9273?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Error Recovery Flow",
        description: "New intuitive error handling system that guides users through remediation steps.",
        image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    researchMethods: [
      {
        title: "Heuristic Evaluation",
        description: "Conducted detailed evaluation using Nielsen's heuristics to identify usability issues.",
        image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Accessibility Audit",
        description: "Performed WCAG 2.1 AA compliance audit to identify accessibility barriers.",
        image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Contextual Inquiry",
        description: "Observed users in their actual work environment to understand real usage patterns and challenges.",
        image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    process: [
      {
        title: "Discovery",
        description: "Conducted stakeholder interviews, user observations, and system analysis to understand the full scope of issues.",
        image: "https://images.unsplash.com/photo-1542626991-cbc4e32524cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Analysis",
        description: "Mapped current pain points and prioritized issues based on impact to user productivity and error rates.",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    ideation: [
      {
        title: "Design Workshop",
        description: "Facilitated collaborative workshops with end users and stakeholders to generate solution ideas.",
        image: "https://images.unsplash.com/photo-1544531585-9847b68c8c86?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Interface Concepts",
        description: "Developed multiple interface concepts focusing on clarity, error prevention, and accessibility.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    prototyping: [
      {
        title: "Low-Fidelity Wireframes",
        description: "Created initial wireframes to test navigation and information architecture concepts.",
        image: "https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "High-Fidelity Prototype",
        description: "Developed interactive prototype with WCAG compliance features built in.",
        image: "https://images.unsplash.com/photo-1559028012-481c04fa702d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    results: "The redesigned system reduced error rates by 45%, decreased training time by 60%, and achieved WCAG 2.1 AA compliance. Overall productivity increased by 32% as measured by data logging completion times.",
    testimonial: {
      quote: "The redesign has transformed how our production team interacts with the data logging system. Tasks that used to cause frustration are now intuitive, and the accessibility improvements have made the system usable for all our team members.",
      author: "Sarah Johnson",
      title: "Operations Manager, P&G",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  },
  {
    id: 2,
    title: "Design System and Revamp Project - Welbilt Kitchen Connect",
    category: "Design Systems",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    client: "Welbilt",
    duration: "8 months",
    role: "Senior UX Designer & Design System Lead",
    description: "Created a comprehensive design system for Welbilt's kitchen management platform, improving consistency and development efficiency.",
    overview: "Welbilt's Kitchen Connect platform needed a consistent design language across its expanding ecosystem of digital products. I led the creation of a scalable design system and platform revamp.",
    challenge: "The platform had grown organically with inconsistent UI patterns, making it difficult to maintain and scale. Different teams were creating divergent experiences that confused users.",
    solution: "I designed a comprehensive design system with modular components, clear usage guidelines, and documentation that enabled consistency while allowing for product-specific customizations.",
    userPersona: [
      {
        title: "Kitchen Managers",
        description: "Restaurant professionals responsible for kitchen operations, inventory, and staff management.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Equipment Technicians",
        description: "Technical staff who monitor and maintain kitchen equipment performance.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }
    ],
    userFlows: [
      {
        title: "Equipment Monitoring Flow",
        description: "Streamlined flow for quickly checking the status of all kitchen equipment.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Inventory Management Flow",
        description: "Redesigned inventory process reducing time to complete common tasks by 35%.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    researchMethods: [
      {
        title: "Component Audit",
        description: "Catalogued all existing UI components across the platform to identify redundancies and inconsistencies.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "User Interviews",
        description: "Conducted interviews with users to understand pain points with the current interface.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    process: [
      {
        title: "System Architecture",
        description: "Mapped the component hierarchy and established the foundational design tokens and principles.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Component Design",
        description: "Created a library of accessible, responsive components with defined states and behaviors.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    ideation: [
      {
        title: "Pattern Library",
        description: "Developed a comprehensive pattern library addressing common use cases across the platform.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Visual Design Concepts",
        description: "Created visual design direction balancing brand identity with usability requirements.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    prototyping: [
      {
        title: "Component Prototypes",
        description: "Built interactive prototypes of key components to test with developers and users.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "System Documentation",
        description: "Created comprehensive documentation and guidelines for implementation.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    results: "The design system accelerated development velocity by 35%, reduced design inconsistencies by 90%, and improved user satisfaction scores by 45%. New features are now implemented 60% faster.",
    testimonial: {
      quote: "The design system has transformed how we build products. What used to take weeks now takes days, and our users appreciate the consistent, intuitive experience across all our digital tools.",
      author: "Michael Torres",
      title: "Product Director, Welbilt",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  },
  {
    id: 3,
    title: "AR Interactive User Manual - LG Cyclops",
    category: "AR Projects",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    client: "LG Electronics",
    duration: "10 months",
    role: "Lead UX Designer for AR Experiences",
    description: "Designed an augmented reality solution that transforms the traditional product manual into an interactive experience.",
    overview: "LG's Cyclops project aimed to revolutionize product manuals by using AR to provide contextual, interactive guidance for home appliances. The goal was to reduce support calls and improve the user experience.",
    challenge: "Traditional product manuals are often ignored by users, leading to improper use, maintenance issues, and high support costs. AR interfaces present unique design challenges in spatial interaction and cognitive load.",
    solution: "I designed an intuitive AR interface that recognizes appliance components and overlays contextual instructions, maintenance procedures, and troubleshooting guidance directly on the physical product.",
    userPersona: [
      {
        title: "New Appliance Owners",
        description: "Customers who have just purchased an LG appliance and need to learn how to use it effectively.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "DIY Maintainers",
        description: "Users who prefer to perform basic maintenance and troubleshooting themselves rather than calling support.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }
    ],
    userFlows: [
      {
        title: "First-time Setup Flow",
        description: "AR-guided process for unboxing and setting up new appliances with spatial markers.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Troubleshooting Flow",
        description: "Interactive diagnostic process that guides users through common issues with visual cues.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    researchMethods: [
      {
        title: "AR Usability Testing",
        description: "Conducted specialized testing to understand how users interact with spatial interfaces.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Support Call Analysis",
        description: "Analyzed common support issues to prioritize features for the AR experience.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    process: [
      {
        title: "Spatial Mapping",
        description: "Developed a system for accurately recognizing and mapping appliance components in 3D space.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Information Architecture",
        description: "Created a contextual information structure that presents the right guidance at the right time.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    ideation: [
      {
        title: "Interaction Models",
        description: "Explored various AR interaction paradigms to find the most intuitive approach for users.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Visual Treatment",
        description: "Designed visual elements that work effectively as overlays on physical objects.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    prototyping: [
      {
        title: "AR Mockups",
        description: "Created simulated AR views to test information presentation and visual hierarchy.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Working Prototype",
        description: "Developed functional AR prototype for usability testing with actual appliances.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    results: "The AR manual reduced support calls by 60%, increased user confidence in self-maintenance by 75%, and improved overall customer satisfaction scores by 35%.",
    testimonial: {
      quote: "The AR manual has redefined how our customers interact with our products. It's intuitive, helpful, and actually makes setting up and maintaining appliances an enjoyable experience.",
      author: "David Kim",
      title: "Head of Customer Experience, LG Electronics",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  },
  {
    id: 4,
    title: "Oxygen Concentrator O2C Project - Merritt Innovation Solutions & IISc",
    category: "Biomedical Design",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    client: "Merritt Innovation Solutions & Indian Institute of Science",
    duration: "12 months",
    role: "Lead UX Researcher & Medical Device Interface Designer",
    description: "Developed a user-centered interface for a portable oxygen concentrator device for medical use.",
    overview: "This collaborative project with IISc aimed to create an affordable, user-friendly portable oxygen concentrator for use in both clinical settings and home care, with a focus on usability for non-technical users.",
    challenge: "Medical devices often have interfaces designed by engineers for engineers, making them difficult for patients and caregivers to use safely and effectively, particularly in emergency situations.",
    solution: "I led the design of an intuitive interface with clear visual feedback, simplified controls, and thoughtful error prevention that could be used correctly even under stress.",
    userPersona: [
      {
        title: "Home Care Patients",
        description: "Individuals with respiratory conditions who need to operate the device themselves.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Family Caregivers",
        description: "Non-medical family members responsible for helping patients with device operation.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Clinical Staff",
        description: "Healthcare professionals who need to quickly set up and adjust the device in medical settings.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }
    ],
    userFlows: [
      {
        title: "Device Setup Flow",
        description: "Simplified process for initial setup with minimal steps and clear guidance.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Emergency Adjustment Flow",
        description: "One-touch flow for rapidly increasing oxygen flow in distress situations.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    researchMethods: [
      {
        title: "Contextual Inquiry",
        description: "Observed users in home and clinical environments to understand real usage patterns.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Cognitive Walkthrough",
        description: "Conducted detailed walkthroughs focusing on learnability for first-time users.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Simulation Testing",
        description: "Tested interface usability under simulated stress and emergency conditions.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    process: [
      {
        title: "Risk Analysis",
        description: "Conducted comprehensive analysis of potential use errors and their consequences.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Information Hierarchy",
        description: "Developed clear hierarchy of controls and information based on criticality and frequency.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    ideation: [
      {
        title: "Control Concepts",
        description: "Explored various control mechanisms optimized for users with limited dexterity.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Display Options",
        description: "Tested different display formats for optimal readability in various lighting conditions.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    prototyping: [
      {
        title: "Physical Interface Mockups",
        description: "Created tangible prototypes to test ergonomics and physical interaction.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Digital Interface Simulation",
        description: "Developed interactive simulation of the digital display and alert system.",
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    results: "The final design achieved 98% first-time use success rate, reduced critical errors by 87%, and improved user satisfaction by 85% compared to existing devices.",
    testimonial: {
      quote: "This project exemplifies how human-centered design can transform medical technology. The interface makes this complex device accessible to users of all backgrounds, potentially saving lives through its intuitive design.",
      author: "Dr. Amit Patel",
      title: "Director of Medical Innovation, IISc",
      image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  }
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
          <h1 className="text-2xl font-bold mb-4 font-heading">Project Not Found</h1>
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
        {/* Full-width Hero Image Section - No overlay */}
        <section className="w-full">
          <EditableImage 
            src={project.image} 
            alt={project.title}
            className="w-full h-[70vh] object-cover"
            fallbackSrc="/placeholder.svg"
          />
        </section>

        {/* Dark Terracotta Title and Project Details Tile */}
        <section className="py-12 bg-bengali-terracotta text-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-white/80 mb-2 text-lg">
                {project.category}
              </div>
              <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                {project.title}
              </h1>
              <p className="text-lg">
                {project.description}
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
                {project.client && (
                  <div>
                    <h3 className="text-white/80 text-sm mb-1">Client</h3>
                    <p className="font-medium">{project.client}</p>
                  </div>
                )}
                
                {project.duration && (
                  <div>
                    <h3 className="text-white/80 text-sm mb-1">Duration</h3>
                    <p className="font-medium">{project.duration}</p>
                  </div>
                )}
                
                {project.role && (
                  <div>
                    <h3 className="text-white/80 text-sm mb-1">My Role</h3>
                    <p className="font-medium">{project.role}</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* Project Details */}
        <section className="py-12 bg-white">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              {project.overview && (
                <div className="mb-8">
                  <h2 className="font-heading text-2xl font-bold text-bengali-dark mb-4">
                    Overview
                  </h2>
                  <p className="text-bengali-dark/80">
                    {project.overview}
                  </p>
                </div>
              )}
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                {project.challenge && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-heading text-xl font-semibold text-bengali-dark mb-4">
                      The Challenge
                    </h3>
                    <p className="text-bengali-dark/80">
                      {project.challenge}
                    </p>
                  </div>
                )}
                
                {project.solution && (
                  <div className="bg-gray-50 p-6 rounded-lg">
                    <h3 className="font-heading text-xl font-semibold text-bengali-dark mb-4">
                      The Solution
                    </h3>
                    <p className="text-bengali-dark/80">
                      {project.solution}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
        
        {/* User Personas & Flows */}
        {(project.userPersona || project.userFlows) && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                
                {project.userPersona && (
                  <div className="mb-16">
                    <h2 className="font-heading text-3xl font-bold text-bengali-dark mb-10 text-center">
                      User Personas
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {project.userPersona.map((persona, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                          <div className="mb-4 h-48 overflow-hidden rounded-lg">
                            <EditableImage 
                              src={persona.image || 'https://images.unsplash.com/photo-1494172892981-ce47ca2da1fa?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'} 
                              alt={persona.title}
                              className="w-full h-full object-cover"
                              fallbackSrc="/placeholder.svg"
                            />
                          </div>
                          <h3 className="font-heading text-xl font-semibold text-bengali-dark mb-2">
                            {persona.title}
                          </h3>
                          <p className="text-bengali-dark/80">
                            {persona.description}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.userFlows && (
                  <div>
                    <h2 className="font-heading text-3xl font-bold text-bengali-dark mb-10 text-center">
                      User Flows & Journeys
                    </h2>
                    {project.userFlows.map((flow, index) => (
                      <div key={index} className="mb-10 last:mb-0">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                          <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                              <h3 className="font-heading text-2xl font-semibold text-bengali-dark mb-4">
                                {flow.title}
                              </h3>
                              <p className="text-bengali-dark/80">
                                {flow.description}
                              </p>
                            </div>
                          </div>
                          <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                            <div className="rounded-lg overflow-hidden shadow-md">
                              <EditableImage 
                                src={flow.image || '/placeholder.svg'} 
                                alt={flow.title}
                                className="w-full h-auto"
                                fallbackSrc="/placeholder.svg"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </section>
        )}
        
        {/* Research Methods */}
        {project.researchMethods && (
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="font-heading text-3xl font-bold text-bengali-dark mb-10 text-center">
                Research Methods
              </h2>
              
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.researchMethods.map((method, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-bengali-terracotta">
                      <h3 className="font-heading text-xl font-semibold text-bengali-dark mb-4">
                        {method.title}
                      </h3>
                      <p className="text-bengali-dark/80 mb-4">
                        {method.description}
                      </p>
                      {method.image && (
                        <div className="rounded-lg overflow-hidden">
                          <EditableImage 
                            src={method.image} 
                            alt={method.title}
                            className="w-full h-auto"
                            fallbackSrc="/placeholder.svg"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Design Process */}
        {project.process && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="font-heading text-3xl font-bold text-bengali-dark mb-10 text-center">
                Design Process
              </h2>
              
              <div className="max-w-5xl mx-auto">
                {project.process.map((step, index) => (
                  <div key={index} className="mb-16 last:mb-0">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                          <div className="text-bengali-terracotta font-medium mb-2">
                            Step {index + 1}
                          </div>
                          <h3 className="font-heading text-2xl font-semibold text-bengali-dark mb-4">
                            {step.title}
                          </h3>
                          <p className="text-bengali-dark/80">
                            {step.description}
                          </p>
                        </div>
                      </div>
                      <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <EditableImage 
                            src={step.image || '/placeholder.svg'} 
                            alt={step.title}
                            className="w-full h-auto"
                            fallbackSrc="/placeholder.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Ideation */}
        {project.ideation && (
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="font-heading text-3xl font-bold text-bengali-dark mb-10 text-center">
                Ideation
              </h2>
              
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.ideation.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="font-heading text-xl font-semibold text-bengali-dark mb-4">
                        {item.title}
                      </h3>
                      <p className="text-bengali-dark/80 mb-4">
                        {item.description}
                      </p>
                      {item.image && (
                        <div className="rounded-lg overflow-hidden">
                          <EditableImage 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-auto"
                            fallbackSrc="/placeholder.svg"
                          />
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        )}
        
        {/* Prototyping */}
        {project.prototyping && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="font-heading text-3xl font-bold text-bengali-dark mb-10 text-center">
                Prototyping
              </h2>
              
              <div className="max-w-5xl mx-auto">
                {project.prototyping.map((proto, index) => (
                  <div key={index} className="mb-16 last:mb-0">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                          <h3 className="font-heading text-2xl font-semibold text-bengali-dark mb-4">
                            {proto.title}
                          </h3>
                          <p className="text-bengali-dark/80">
                            {proto.description}
                          </p>
                        </div>
                      </div>
                      <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <EditableImage 
                            src={proto.image || '/placeholder.svg'} 
                            alt={proto.title}
                            className="w-full h-auto"
                            fallbackSrc="/placeholder.svg"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
        
        {/* Results */}
        <section className="py-16 bg-bengali-terracotta text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-heading text-3xl font-bold mb-8">
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
                  <Avatar className="w-12 h-12 border-2 border-bengali-terracotta/20">
                    <AvatarImage src={project.testimonial.image || "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"} alt={project.testimonial.author} />
                    <AvatarFallback className="bg-bengali-terracotta/20 text-bengali-terracotta font-bold">
                      {project.testimonial.author.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
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

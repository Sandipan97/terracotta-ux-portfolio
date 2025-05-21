
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
  };
};

const projects: Project[] = [
  {
    id: 1,
    title: "Heuristic and Accessibility Revamp Project - P&G Datalogger",
    category: "B2B Solutions",
    image: "/projects/datalogger.jpg",
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
        image: "/projects/factory-persona.jpg"
      },
      {
        title: "Quality Analysts",
        description: "Technical staff who analyze data logs for quality control and need to extract meaningful patterns efficiently.",
        image: "/projects/analyst-persona.jpg"
      }
    ],
    userFlows: [
      {
        title: "Data Entry Flow",
        description: "Redesigned flow reduced the steps needed to log data from 7 to 3, with clear feedback at each stage.",
        image: "/projects/datalogger-flow.jpg"
      },
      {
        title: "Error Recovery Flow",
        description: "New intuitive error handling system that guides users through remediation steps.",
        image: "/projects/error-flow.jpg"
      }
    ],
    researchMethods: [
      {
        title: "Heuristic Evaluation",
        description: "Conducted detailed evaluation using Nielsen's heuristics to identify usability issues.",
        image: "/projects/heuristic.jpg"
      },
      {
        title: "Accessibility Audit",
        description: "Performed WCAG 2.1 AA compliance audit to identify accessibility barriers.",
        image: "/projects/accessibility.jpg"
      },
      {
        title: "Contextual Inquiry",
        description: "Observed users in their actual work environment to understand real usage patterns and challenges.",
        image: "/projects/contextual.jpg"
      }
    ],
    process: [
      {
        title: "Discovery",
        description: "Conducted stakeholder interviews, user observations, and system analysis to understand the full scope of issues.",
        image: "/projects/discovery.jpg"
      },
      {
        title: "Analysis",
        description: "Mapped current pain points and prioritized issues based on impact to user productivity and error rates.",
        image: "/projects/analysis.jpg"
      }
    ],
    ideation: [
      {
        title: "Design Workshop",
        description: "Facilitated collaborative workshops with end users and stakeholders to generate solution ideas.",
        image: "/projects/workshop.jpg"
      },
      {
        title: "Interface Concepts",
        description: "Developed multiple interface concepts focusing on clarity, error prevention, and accessibility.",
        image: "/projects/concepts.jpg"
      }
    ],
    prototyping: [
      {
        title: "Low-Fidelity Wireframes",
        description: "Created initial wireframes to test navigation and information architecture concepts.",
        image: "/projects/wireframes.jpg"
      },
      {
        title: "High-Fidelity Prototype",
        description: "Developed interactive prototype with WCAG compliance features built in.",
        image: "/projects/prototype.jpg"
      }
    ],
    results: "The redesigned system reduced error rates by 45%, decreased training time by 60%, and achieved WCAG 2.1 AA compliance. Overall productivity increased by 32% as measured by data logging completion times.",
    testimonial: {
      quote: "The redesign has transformed how our production team interacts with the data logging system. Tasks that used to cause frustration are now intuitive, and the accessibility improvements have made the system usable for all our team members.",
      author: "Sarah Johnson",
      title: "Operations Manager, P&G"
    }
  },
  {
    id: 2,
    title: "Design System and Revamp Project - Welbilt Kitchen Connect",
    category: "Design Systems",
    image: "/projects/kitchen-connect.jpg",
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
        image: "/projects/kitchen-manager.jpg"
      },
      {
        title: "Equipment Technicians",
        description: "Technical staff who monitor and maintain kitchen equipment performance.",
        image: "/projects/technician.jpg"
      }
    ],
    userFlows: [
      {
        title: "Equipment Monitoring Flow",
        description: "Streamlined flow for quickly checking the status of all kitchen equipment.",
        image: "/projects/monitoring-flow.jpg"
      },
      {
        title: "Inventory Management Flow",
        description: "Redesigned inventory process reducing time to complete common tasks by 35%.",
        image: "/projects/inventory-flow.jpg"
      }
    ],
    researchMethods: [
      {
        title: "Component Audit",
        description: "Catalogued all existing UI components across the platform to identify redundancies and inconsistencies.",
        image: "/projects/component-audit.jpg"
      },
      {
        title: "User Interviews",
        description: "Conducted interviews with users to understand pain points with the current interface.",
        image: "/projects/interviews.jpg"
      }
    ],
    process: [
      {
        title: "System Architecture",
        description: "Mapped the component hierarchy and established the foundational design tokens and principles.",
        image: "/projects/system-architecture.jpg"
      },
      {
        title: "Component Design",
        description: "Created a library of accessible, responsive components with defined states and behaviors.",
        image: "/projects/component-design.jpg"
      }
    ],
    ideation: [
      {
        title: "Pattern Library",
        description: "Developed a comprehensive pattern library addressing common use cases across the platform.",
        image: "/projects/pattern-library.jpg"
      },
      {
        title: "Visual Design Concepts",
        description: "Created visual design direction balancing brand identity with usability requirements.",
        image: "/projects/visual-concepts.jpg"
      }
    ],
    prototyping: [
      {
        title: "Component Prototypes",
        description: "Built interactive prototypes of key components to test with developers and users.",
        image: "/projects/component-prototype.jpg"
      },
      {
        title: "System Documentation",
        description: "Created comprehensive documentation and guidelines for implementation.",
        image: "/projects/documentation.jpg"
      }
    ],
    results: "The design system accelerated development velocity by 35%, reduced design inconsistencies by 90%, and improved user satisfaction scores by 45%. New features are now implemented 60% faster.",
    testimonial: {
      quote: "The design system has transformed how we build products. What used to take weeks now takes days, and our users appreciate the consistent, intuitive experience across all our digital tools.",
      author: "Michael Torres",
      title: "Product Director, Welbilt"
    }
  },
  {
    id: 3,
    title: "AR Interactive User Manual - LG Cyclops",
    category: "AR Projects",
    image: "/projects/ar-manual.jpg",
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
        image: "/projects/new-owner.jpg"
      },
      {
        title: "DIY Maintainers",
        description: "Users who prefer to perform basic maintenance and troubleshooting themselves rather than calling support.",
        image: "/projects/diy-persona.jpg"
      }
    ],
    userFlows: [
      {
        title: "First-time Setup Flow",
        description: "AR-guided process for unboxing and setting up new appliances with spatial markers.",
        image: "/projects/setup-flow.jpg"
      },
      {
        title: "Troubleshooting Flow",
        description: "Interactive diagnostic process that guides users through common issues with visual cues.",
        image: "/projects/ar-troubleshoot.jpg"
      }
    ],
    researchMethods: [
      {
        title: "AR Usability Testing",
        description: "Conducted specialized testing to understand how users interact with spatial interfaces.",
        image: "/projects/ar-testing.jpg"
      },
      {
        title: "Support Call Analysis",
        description: "Analyzed common support issues to prioritize features for the AR experience.",
        image: "/projects/call-analysis.jpg"
      }
    ],
    process: [
      {
        title: "Spatial Mapping",
        description: "Developed a system for accurately recognizing and mapping appliance components in 3D space.",
        image: "/projects/spatial-mapping.jpg"
      },
      {
        title: "Information Architecture",
        description: "Created a contextual information structure that presents the right guidance at the right time.",
        image: "/projects/ar-ia.jpg"
      }
    ],
    ideation: [
      {
        title: "Interaction Models",
        description: "Explored various AR interaction paradigms to find the most intuitive approach for users.",
        image: "/projects/ar-interaction.jpg"
      },
      {
        title: "Visual Treatment",
        description: "Designed visual elements that work effectively as overlays on physical objects.",
        image: "/projects/ar-visual.jpg"
      }
    ],
    prototyping: [
      {
        title: "AR Mockups",
        description: "Created simulated AR views to test information presentation and visual hierarchy.",
        image: "/projects/ar-mockup.jpg"
      },
      {
        title: "Working Prototype",
        description: "Developed functional AR prototype for usability testing with actual appliances.",
        image: "/projects/working-prototype.jpg"
      }
    ],
    results: "The AR manual reduced support calls by 60%, increased user confidence in self-maintenance by 75%, and improved overall customer satisfaction scores by 35%.",
    testimonial: {
      quote: "The AR manual has redefined how our customers interact with our products. It's intuitive, helpful, and actually makes setting up and maintaining appliances an enjoyable experience.",
      author: "David Kim",
      title: "Head of Customer Experience, LG Electronics"
    }
  },
  {
    id: 4,
    title: "Oxygen Concentrator O2C Project - Merritt Innovation Solutions & IISc",
    category: "Biomedical Design",
    image: "/projects/oxygen-concentrator.jpg",
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
        image: "/projects/patient-persona.jpg"
      },
      {
        title: "Family Caregivers",
        description: "Non-medical family members responsible for helping patients with device operation.",
        image: "/projects/caregiver-persona.jpg"
      },
      {
        title: "Clinical Staff",
        description: "Healthcare professionals who need to quickly set up and adjust the device in medical settings.",
        image: "/projects/clinical-persona.jpg"
      }
    ],
    userFlows: [
      {
        title: "Device Setup Flow",
        description: "Simplified process for initial setup with minimal steps and clear guidance.",
        image: "/projects/setup-oxygen.jpg"
      },
      {
        title: "Emergency Adjustment Flow",
        description: "One-touch flow for rapidly increasing oxygen flow in distress situations.",
        image: "/projects/emergency-flow.jpg"
      }
    ],
    researchMethods: [
      {
        title: "Contextual Inquiry",
        description: "Observed users in home and clinical environments to understand real usage patterns.",
        image: "/projects/medical-contextual.jpg"
      },
      {
        title: "Cognitive Walkthrough",
        description: "Conducted detailed walkthroughs focusing on learnability for first-time users.",
        image: "/projects/cognitive-walkthrough.jpg"
      },
      {
        title: "Simulation Testing",
        description: "Tested interface usability under simulated stress and emergency conditions.",
        image: "/projects/simulation.jpg"
      }
    ],
    process: [
      {
        title: "Risk Analysis",
        description: "Conducted comprehensive analysis of potential use errors and their consequences.",
        image: "/projects/risk-analysis.jpg"
      },
      {
        title: "Information Hierarchy",
        description: "Developed clear hierarchy of controls and information based on criticality and frequency.",
        image: "/projects/info-hierarchy.jpg"
      }
    ],
    ideation: [
      {
        title: "Control Concepts",
        description: "Explored various control mechanisms optimized for users with limited dexterity.",
        image: "/projects/control-concepts.jpg"
      },
      {
        title: "Display Options",
        description: "Tested different display formats for optimal readability in various lighting conditions.",
        image: "/projects/display-options.jpg"
      }
    ],
    prototyping: [
      {
        title: "Physical Interface Mockups",
        description: "Created tangible prototypes to test ergonomics and physical interaction.",
        image: "/projects/physical-mockups.jpg"
      },
      {
        title: "Digital Interface Simulation",
        description: "Developed interactive simulation of the digital display and alert system.",
        image: "/projects/interface-simulation.jpg"
      }
    ],
    results: "The final design achieved 98% first-time use success rate, reduced critical errors by 87%, and improved user satisfaction by 85% compared to existing devices.",
    testimonial: {
      quote: "This project exemplifies how human-centered design can transform medical technology. The interface makes this complex device accessible to users of all backgrounds, potentially saving lives through its intuitive design.",
      author: "Dr. Amit Patel",
      title: "Director of Medical Innovation, IISc"
    }
  },
  {
    id: 5,
    title: "Dripometer - IV Drip Monitoring System - IISc",
    category: "Biomedical Design",
    image: "/projects/dripometer.jpg",
    client: "Indian Institute of Science",
    duration: "9 months",
    role: "UX Designer & Medical Device Researcher",
    description: "Designed an innovative monitoring system for intravenous drips to improve accuracy and patient safety.",
    overview: "The Dripometer project aimed to create a more reliable, affordable IV drip monitoring solution for use in various healthcare settings, with particular focus on resource-constrained environments.",
    challenge: "IV drip monitoring is often manual and error-prone, leading to potential medical complications. Existing automated solutions are expensive and not widely available in developing regions.",
    solution: "I designed a user-friendly monitoring system that combines affordability with precision, featuring an intuitive interface for healthcare providers and clear alerts when intervention is needed.",
    userPersona: [
      {
        title: "Nurses in High-Volume Settings",
        description: "Healthcare providers managing multiple patients simultaneously in busy hospitals.",
        image: "/projects/nurse-persona.jpg"
      },
      {
        title: "Rural Healthcare Workers",
        description: "Medical staff operating in resource-constrained environments with limited training.",
        image: "/projects/rural-worker.jpg"
      }
    ],
    userFlows: [
      {
        title: "Drip Setup Flow",
        description: "Streamlined process for configuring the monitor to specific medication and patient requirements.",
        image: "/projects/drip-setup.jpg"
      },
      {
        title: "Alert Response Flow",
        description: "Clear guidance for addressing various drip irregularities detected by the system.",
        image: "/projects/alert-flow.jpg"
      }
    ],
    researchMethods: [
      {
        title: "Field Observations",
        description: "Conducted observations in various hospital settings to understand current monitoring practices.",
        image: "/projects/field-observations.jpg"
      },
      {
        title: "Task Analysis",
        description: "Detailed analysis of the IV management workflow to identify intervention opportunities.",
        image: "/projects/task-analysis.jpg"
      }
    ],
    process: [
      {
        title: "Requirements Gathering",
        description: "Collaborated with medical professionals to define essential monitoring parameters and alerts.",
        image: "/projects/requirements.jpg"
      },
      {
        title: "Constraint Mapping",
        description: "Identified technical, environmental, and user constraints to inform the design approach.",
        image: "/projects/constraints.jpg"
      }
    ],
    ideation: [
      {
        title: "Interface Sketches",
        description: "Developed various interface concepts optimized for quick comprehension in fast-paced environments.",
        image: "/projects/interface-sketches.jpg"
      },
      {
        title: "Alert System Design",
        description: "Created multi-modal alert system designs with prioritization based on urgency.",
        image: "/projects/alert-design.jpg"
      }
    ],
    prototyping: [
      {
        title: "Functional Prototype",
        description: "Built working prototype integrating hardware sensors with the user interface.",
        image: "/projects/drip-prototype.jpg"
      },
      {
        title: "Simulation Testing",
        description: "Conducted simulated drip scenarios to test accuracy and alert functionality.",
        image: "/projects/drip-testing.jpg"
      }
    ],
    results: "The Dripometer increased monitoring accuracy by 95%, reduced nursing intervention time by 70%, and was rated significantly more user-friendly than existing solutions.",
    testimonial: {
      quote: "The Dripometer represents a significant advancement in IV monitoring technology. Its combination of accuracy, ease of use, and affordability makes it particularly valuable for healthcare settings with limited resources.",
      author: "Dr. Lakshmi Narayan",
      title: "Professor of Medical Technology, IISc"
    }
  },
  {
    id: 6,
    title: "Farm Monitoring Mobile Application - HCLTech",
    category: "Mobile Apps",
    image: "/projects/farm-app.jpg",
    client: "HCLTech",
    duration: "7 months",
    role: "Senior UX Designer & Mobile App Specialist",
    description: "Developed a comprehensive mobile application for farmers to monitor crops, soil conditions, and weather patterns.",
    overview: "This project aimed to create a mobile solution that empowers farmers with data-driven insights to optimize crop management, even in areas with limited connectivity.",
    challenge: "The application needed to serve users with varying levels of technical literacy, work in low-connectivity environments, and present complex agricultural data in actionable ways.",
    solution: "I designed an intuitive mobile application with offline capabilities, visual data presentation, and contextual recommendations tailored to each farmer's specific crops and conditions.",
    userPersona: [
      {
        title: "Small-Scale Farmers",
        description: "Independent farmers with limited technology exposure managing small to medium plots of land.",
        image: "/projects/small-farmer.jpg"
      },
      {
        title: "Agricultural Consultants",
        description: "Professionals who advise multiple farmers and need comprehensive data analysis tools.",
        image: "/projects/ag-consultant.jpg"
      }
    ],
    userFlows: [
      {
        title: "Daily Monitoring Flow",
        description: "Streamlined process for quickly checking critical farm metrics and receiving alerts.",
        image: "/projects/daily-flow.jpg"
      },
      {
        title: "Planting Decision Flow",
        description: "Data-informed workflow for making optimal crop selection and timing decisions.",
        image: "/projects/planting-flow.jpg"
      }
    ],
    researchMethods: [
      {
        title: "Field Interviews",
        description: "Conducted on-site interviews with farmers to understand their workflows and challenges.",
        image: "/projects/field-interviews.jpg"
      },
      {
        title: "Usage Pattern Analysis",
        description: "Analyzed how farmers currently use technology and access agricultural information.",
        image: "/projects/usage-patterns.jpg"
      }
    ],
    process: [
      {
        title: "Information Architecture",
        description: "Developed a structure that organizes complex agricultural data into intuitive categories.",
        image: "/projects/farm-ia.jpg"
      },
      {
        title: "Visual Language Development",
        description: "Created a visual system that communicates agricultural concepts clearly to users of varying literacy.",
        image: "/projects/farm-visuals.jpg"
      }
    ],
    ideation: [
      {
        title: "Data Visualization Concepts",
        description: "Explored various approaches to presenting soil, weather, and crop data meaningfully.",
        image: "/projects/data-viz.jpg"
      },
      {
        title: "Offline Mode Strategies",
        description: "Developed concepts for effective functionality with intermittent connectivity.",
        image: "/projects/offline-concepts.jpg"
      }
    ],
    prototyping: [
      {
        title: "Interactive Mobile Prototype",
        description: "Built functional prototype with real-time data integration for field testing.",
        image: "/projects/mobile-prototype.jpg"
      },
      {
        title: "Usability Field Testing",
        description: "Conducted tests with farmers using the app in actual field conditions.",
        image: "/projects/field-testing.jpg"
      }
    ],
    results: "The application helped farmers improve crop yield by 28%, reduce water usage by 30%, and make more informed decisions about planting and harvesting timing.",
    testimonial: {
      quote: "This app has transformed how I manage my farm. The weather predictions and soil analysis have helped me make better decisions, and the simple interface means I can actually use it without struggling.",
      author: "Rajesh Kumar",
      title: "Independent Farmer, Punjab"
    }
  },
  {
    id: 7,
    title: "Toy Anatomy - Kids Toy Project - IISc",
    category: "Educational Design",
    image: "/projects/toy-anatomy.jpg",
    client: "Indian Institute of Science",
    duration: "5 months",
    role: "UX Designer & Educational Product Researcher",
    description: "Created an educational toy system that helps children learn about human anatomy through interactive play.",
    overview: "The Toy Anatomy project aimed to create an engaging, age-appropriate educational toy that teaches children about human anatomy and physiology through hands-on interaction.",
    challenge: "Educational toys often fail to balance fun with learning value, and anatomy is a complex subject to present accurately while keeping it appropriate and engaging for children.",
    solution: "I designed a modular toy system with tactile components, augmented by digital content, that allows children to explore anatomy concepts through play-based discovery.",
    userPersona: [
      {
        title: "Curious Children (Ages 7-12)",
        description: "Kids with natural curiosity about how the human body works, with varying attention spans.",
        image: "/projects/curious-child.jpg"
      },
      {
        title: "Educational Facilitators",
        description: "Parents and teachers who want to support children's learning through guided play.",
        image: "/projects/facilitator.jpg"
      }
    ],
    userFlows: [
      {
        title: "Discovery Play Flow",
        description: "Self-directed exploration sequence that reveals new information as children interact with components.",
        image: "/projects/discovery-flow.jpg"
      },
      {
        title: "Guided Learning Flow",
        description: "Structured sequence for facilitators to guide children through specific learning objectives.",
        image: "/projects/guided-flow.jpg"
      }
    ],
    researchMethods: [
      {
        title: "Observational Research",
        description: "Observed children interacting with various educational toys to understand engagement patterns.",
        image: "/projects/child-observation.jpg"
      },
      {
        title: "Expert Consultations",
        description: "Collaborated with educators and child development specialists to ensure age-appropriate design.",
        image: "/projects/expert-consult.jpg"
      }
    ],
    process: [
      {
        title: "Learning Objective Mapping",
        description: "Identified key anatomical concepts appropriate for the target age group.",
        image: "/projects/learning-map.jpg"
      },
      {
        title: "Play Pattern Design",
        description: "Developed play interactions that naturally lead to learning moments.",
        image: "/projects/play-design.jpg"
      }
    ],
    ideation: [
      {
        title: "Component Concepts",
        description: "Explored various approaches to representing body systems in engaging, tactile ways.",
        image: "/projects/component-ideas.jpg"
      },
      {
        title: "Interaction Mechanisms",
        description: "Developed concepts for how children would manipulate and explore the toy components.",
        image: "/projects/interaction-concepts.jpg"
      }
    ],
    prototyping: [
      {
        title: "Physical Toy Prototypes",
        description: "Created tangible prototypes to test with children for engagement and understanding.",
        image: "/projects/toy-prototype.jpg"
      },
      {
        title: "Companion App Mockups",
        description: "Designed companion digital content to enhance the physical toy experience.",
        image: "/projects/app-mockups.jpg"
      }
    ],
    results: "The Toy Anatomy project increased children's retention of anatomical concepts by 40% compared to traditional methods, with 85% of children requesting to play with it multiple times.",
    testimonial: {
      quote: "This toy makes teaching anatomy fun and effective. Children are genuinely excited to learn, and they retain the information because they've discovered it through play rather than being told.",
      author: "Dr. Priya Sharma",
      title: "Educational Psychology Researcher, IISc"
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
        
        {/* User Personas & Flows */}
        {(project.userPersona || project.userFlows) && (
          <section className="py-16 bg-gray-50">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                
                {project.userPersona && (
                  <div className="mb-16">
                    <h2 className="font-display text-3xl font-bold text-bengali-dark mb-10 text-center">
                      User Personas
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                      {project.userPersona.map((persona, index) => (
                        <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                          <div className="mb-4 h-48 overflow-hidden rounded-lg">
                            <img 
                              src={persona.image || '/placeholder.svg'} 
                              alt={persona.title}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <h3 className="font-display text-xl font-semibold text-bengali-dark mb-2">
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
                    <h2 className="font-display text-3xl font-bold text-bengali-dark mb-10 text-center">
                      User Flows & Journeys
                    </h2>
                    {project.userFlows.map((flow, index) => (
                      <div key={index} className="mb-10 last:mb-0">
                        <div className="flex flex-col md:flex-row gap-8 items-center">
                          <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                            <div className="bg-white p-6 rounded-lg shadow-md">
                              <h3 className="font-display text-2xl font-semibold text-bengali-dark mb-4">
                                {flow.title}
                              </h3>
                              <p className="text-bengali-dark/80">
                                {flow.description}
                              </p>
                            </div>
                          </div>
                          <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                            <div className="rounded-lg overflow-hidden shadow-md">
                              <img 
                                src={flow.image || '/placeholder.svg'} 
                                alt={flow.title}
                                className="w-full h-auto"
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
              <h2 className="font-display text-3xl font-bold text-bengali-dark mb-10 text-center">
                Research Methods
              </h2>
              
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.researchMethods.map((method, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md border-l-4 border-bengali-terracotta">
                      <h3 className="font-display text-xl font-semibold text-bengali-dark mb-4">
                        {method.title}
                      </h3>
                      <p className="text-bengali-dark/80 mb-4">
                        {method.description}
                      </p>
                      {method.image && (
                        <div className="rounded-lg overflow-hidden">
                          <img 
                            src={method.image} 
                            alt={method.title}
                            className="w-full h-auto"
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
              <h2 className="font-display text-3xl font-bold text-bengali-dark mb-10 text-center">
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
        )}
        
        {/* Ideation */}
        {project.ideation && (
          <section className="py-16">
            <div className="container mx-auto px-4 md:px-6">
              <h2 className="font-display text-3xl font-bold text-bengali-dark mb-10 text-center">
                Ideation
              </h2>
              
              <div className="max-w-5xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.ideation.map((item, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                      <h3 className="font-display text-xl font-semibold text-bengali-dark mb-4">
                        {item.title}
                      </h3>
                      <p className="text-bengali-dark/80 mb-4">
                        {item.description}
                      </p>
                      {item.image && (
                        <div className="rounded-lg overflow-hidden">
                          <img 
                            src={item.image} 
                            alt={item.title}
                            className="w-full h-auto"
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
              <h2 className="font-display text-3xl font-bold text-bengali-dark mb-10 text-center">
                Prototyping
              </h2>
              
              <div className="max-w-5xl mx-auto">
                {project.prototyping.map((proto, index) => (
                  <div key={index} className="mb-16 last:mb-0">
                    <div className="flex flex-col md:flex-row gap-8 items-center">
                      <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-2' : ''}`}>
                        <div className="bg-white p-6 rounded-lg shadow-md">
                          <h3 className="font-display text-2xl font-semibold text-bengali-dark mb-4">
                            {proto.title}
                          </h3>
                          <p className="text-bengali-dark/80">
                            {proto.description}
                          </p>
                        </div>
                      </div>
                      <div className={`w-full md:w-1/2 ${index % 2 !== 0 ? 'md:order-1' : ''}`}>
                        <div className="rounded-lg overflow-hidden shadow-md">
                          <img 
                            src={proto.image || '/placeholder.svg'} 
                            alt={proto.title}
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
        )}
        
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

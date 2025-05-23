import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

// Import all project components
import ProjectHero from '@/components/project/ProjectHero';
import ProjectOverview from '@/components/project/ProjectOverview';
import UserPersonas from '@/components/project/UserPersonas';
import UserFlows from '@/components/project/UserFlows';
import ResearchMethods from '@/components/project/ResearchMethods';
import DesignProcess from '@/components/project/DesignProcess';
import Ideation from '@/components/project/Ideation';
import Prototyping from '@/components/project/Prototyping';
import ProjectResults from '@/components/project/ProjectResults';
import ProjectTestimonial from '@/components/project/ProjectTestimonial';
import ProjectNavigation from '@/components/project/ProjectNavigation';

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
  projectType?: string[];
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
    projectType: ["B2B", "Enterprise", "Accessibility"],
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
    projectType: ["Design System", "Enterprise", "UX Design"],
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
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=80"
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
        image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=80"
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
    projectType: ["Augmented Reality", "Interactive", "UX Design"],
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
    projectType: ["Medical", "Biomedical", "Interface Design"],
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
  },
  {
    id: 5,
    title: "Dripometer - IV Drip Monitoring System - IISc",
    category: "Biomedical Design",
    image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    client: "Indian Institute of Science (IISc)",
    duration: "9 months",
    role: "Lead UX Designer & Medical Device Interface Specialist",
    projectType: ["Medical", "Biomedical", "IoT"],
    description: "Designed an innovative monitoring system for intravenous drips to improve accuracy and patient safety.",
    overview: "The Dripometer project aimed to create a reliable, user-friendly monitoring system for intravenous drips that could alert medical staff to irregularities while being accessible to both professional and home caregivers.",
    challenge: "IV drips are critical medical interventions, but monitoring them is often manual and error-prone. Creating a device that could automatically monitor flow rates without disrupting existing medical workflows was a significant challenge.",
    solution: "I designed an intuitive interface with clear visual indicators and a simple alert system that could be understood by users with varying levels of medical training, from doctors to home caregivers.",
    userPersona: [
      {
        title: "Hospital Nurses",
        description: "Healthcare professionals managing multiple patients who need efficient monitoring tools to reduce their cognitive load.",
        image: "https://images.unsplash.com/photo-1584516150774-d9dc0e103d8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Home Caregivers",
        description: "Family members without formal medical training who need clear, unambiguous guidance on maintaining proper IV care.",
        image: "https://images.unsplash.com/photo-1574098255495-81c23a7d4112?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }
    ],
    userFlows: [
      {
        title: "Initial Setup Flow",
        description: "Streamlined process for attaching the device to an existing IV line with minimal disruption.",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Alert Response Flow",
        description: "Clear step-by-step guidance when flow irregularities are detected, with appropriate urgency indicators.",
        image: "https://images.unsplash.com/photo-1600443299762-7a1c563a7d25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    researchMethods: [
      {
        title: "Clinical Observations",
        description: "Shadowed nurses during IV management to understand real-world challenges and constraints.",
        image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Prototype Testing",
        description: "Conducted simulated scenarios with healthcare professionals to validate usability in high-stress situations.",
        image: "https://images.unsplash.com/photo-1576671414121-aa0c81c869e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    process: [
      {
        title: "Requirements Gathering",
        description: "Collaborated with medical professionals to define critical monitoring parameters and alert thresholds.",
        image: "https://images.unsplash.com/photo-1598984807193-d4eece638c9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Medical Workflow Integration",
        description: "Designed the system to complement existing medical protocols without adding unnecessary complexity.",
        image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    ideation: [
      {
        title: "Visual Communication System",
        description: "Developed a universal visual language that conveys critical information regardless of medical training level.",
        image: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Physical Form Exploration",
        description: "Explored various physical designs that would be unobtrusive in medical settings while remaining highly visible when needed.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    prototyping: [
      {
        title: "Interface Mockups",
        description: "Created high-fidelity mockups of the digital display and control system with focus on legibility under various lighting conditions.",
        image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Alert Simulation",
        description: "Prototyped and tested the alert system to ensure it effectively communicated urgency without causing alarm fatigue.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    results: "The Dripometer achieved 95% accuracy in flow rate monitoring, reduced alert response time by 67%, and was rated as 'highly intuitive' by 92% of tested users with no prior medical experience.",
    testimonial: {
      quote: "The Dripometer has transformed how we manage IVs on our busy ward. The interface is so intuitive that even new staff members can respond appropriately to alerts with minimal training.",
      author: "Dr. Priya Sharma",
      title: "Head of Nursing, General Hospital",
      image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  },
  {
    id: 6,
    title: "Farm Monitoring Mobile Application - HCLTech",
    category: "Mobile Apps",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    client: "HCL Technologies",
    duration: "7 months",
    role: "Senior UX Designer & Mobile App Specialist",
    projectType: ["Mobile", "IoT", "Agricultural"],
    description: "Developed a comprehensive mobile application for farmers to monitor crops, soil conditions, and weather patterns.",
    overview: "This project aimed to create an accessible mobile application that empowers farmers with data-driven insights to optimize crop yield, reduce resource waste, and implement sustainable farming practices.",
    challenge: "Many farmers in developing regions have limited technical knowledge but could greatly benefit from agricultural technology. The app needed to present complex data in an accessible way while functioning reliably in rural areas with poor connectivity.",
    solution: "I designed a highly visual interface with offline capabilities that presents environmental data, crop health metrics, and actionable recommendations in a simple, intuitive format optimized for outdoor use.",
    userPersona: [
      {
        title: "Traditional Farmers",
        description: "Experienced agricultural workers with limited technology exposure who need straightforward interfaces with clear benefits.",
        image: "https://images.unsplash.com/photo-1597465468518-59dda87a1b20?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Agricultural Technicians",
        description: "Field workers with technical knowledge who help implement modern farming techniques and need detailed data views.",
        image: "https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }
    ],
    userFlows: [
      {
        title: "Daily Field Check",
        description: "Optimized flow for quickly scanning multiple field conditions during morning inspections.",
        image: "https://images.unsplash.com/photo-1595100417477-5a7ffdad731b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Resource Planning Flow",
        description: "Streamlined process for planning water, fertilizer and pesticide application based on environmental data.",
        image: "https://images.unsplash.com/photo-1464297162474-d9335c580361?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    researchMethods: [
      {
        title: "Field Interviews",
        description: "Conducted on-site interviews with farmers across different regions and farming methods.",
        image: "https://images.unsplash.com/photo-1606041643091-4b1e473646c7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Usability Testing in Field Conditions",
        description: "Tested prototypes under bright sunlight, with dirty hands, and in poor connectivity areas.",
        image: "https://images.unsplash.com/photo-1593038057485-36e94543af24?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    process: [
      {
        title: "Environmental Constraint Analysis",
        description: "Mapped physical, environmental, and infrastructure constraints that would impact app usage.",
        image: "https://images.unsplash.com/photo-1500651230702-0e2d8a49d4ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Visual Interface Mapping",
        description: "Created a simplified visual language that uses universal agricultural symbols and color coding.",
        image: "https://images.unsplash.com/photo-1536303158031-c868b371399f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    ideation: [
      {
        title: "Offline-First Architecture",
        description: "Designed data synchronization patterns that prioritize offline usability with strategic updates when connectivity is available.",
        image: "https://images.unsplash.com/photo-1517292987719-0369a794ec0f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Simplified Data Visualization",
        description: "Developed visualization methods that present complex agricultural metrics as actionable insights.",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    prototyping: [
      {
        title: "High-Contrast Interface Mockups",
        description: "Created interfaces specifically designed for outdoor visibility and readability.",
        image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "One-Handed Interaction Design",
        description: "Optimized layouts for one-handed operation while users are holding tools or equipment.",
        image: "https://images.unsplash.com/photo-1544147212-4c3cd4a8720a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    results: "The app increased crop yields by an average of 28%, reduced water usage by 32%, and was successfully adopted by over 15,000 farmers within the first six months of launch.",
    testimonial: {
      quote: "This app has changed how I manage my fields. The soil moisture alerts alone have saved me thousands in irrigation costs, and I can plan my day more effectively knowing exactly which fields need attention.",
      author: "Raj Patel",
      title: "Farm Owner, Gujarat",
      image: "https://images.unsplash.com/photo-1540569014015-19a7be504e3a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  },
  {
    id: 7,
    title: "Toy Anatomy - Kids Toy Project - IISc",
    category: "Educational Design",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    client: "Indian Institute of Science (IISc)",
    duration: "5 months",
    role: "UX Designer & Educational Content Developer",
    projectType: ["Educational", "Interactive", "Kids"],
    description: "Created an educational toy system that helps children learn about human anatomy through interactive play.",
    overview: "The Toy Anatomy project was designed to make human anatomy education engaging and accessible for children aged 6-12, combining physical toys with digital components to create an immersive learning experience.",
    challenge: "Teaching complex anatomical concepts to young children requires simplification without sacrificing accuracy. The challenge was creating a system that was entertaining enough to maintain engagement while delivering meaningful educational content.",
    solution: "I designed a modular toy system with augmented reality components that allows children to explore anatomical systems through guided play, using progressive disclosure to gradually introduce more complex concepts as learning progresses.",
    userPersona: [
      {
        title: "Curious Learners (Ages 6-8)",
        description: "Younger children who are beginning to explore scientific concepts and need highly visual, tactile experiences.",
        image: "https://images.unsplash.com/photo-1617331140180-e8262094733a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Active Explorers (Ages 9-12)",
        description: "Older children who can grasp more abstract concepts and are interested in how bodily systems interconnect.",
        image: "https://images.unsplash.com/photo-1617727553252-65863c156eb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Parent Educators",
        description: "Parents who assist with educational activities and need clear guidance to facilitate learning.",
        image: "https://images.unsplash.com/photo-1623500606895-0ebb9b489eb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }
    ],
    userFlows: [
      {
        title: "Discovery Play Flow",
        description: "Unstructured exploration that introduces basic anatomical structures through tactile interaction.",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Guided Learning Flow",
        description: "Structured activities that build progressive understanding of how body systems function together.",
        image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    researchMethods: [
      {
        title: "Child Observation Studies",
        description: "Observed how children interact with educational toys and identified patterns of engagement and learning.",
        image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Educational Expert Consultation",
        description: "Collaborated with child development specialists and science educators to ensure age-appropriate content.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Interactive Prototype Testing",
        description: "Iteratively tested prototypes with children to refine engagement mechanics and educational impact.",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    process: [
      {
        title: "Educational Goal Definition",
        description: "Established clear learning objectives aligned with elementary science curriculum standards.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Play Pattern Mapping",
        description: "Identified effective play patterns that naturally lead to discovery and retention of scientific concepts.",
        image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    ideation: [
      {
        title: "Physical-Digital Integration",
        description: "Explored seamless connections between physical toy components and digital augmentation for enhanced learning.",
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Progressive Discovery System",
        description: "Designed a layered approach to anatomy education that reveals complexity at appropriate developmental stages.",
        image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    prototyping: [
      {
        title: "Physical Toy Models",
        description: "Created tactile prototypes with varying textures and mechanisms to represent different body systems.",
        image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "AR Learning Scenarios",
        description: "Developed augmented reality scenarios that animate static toy components to demonstrate physiological processes.",
        image: "https://images.unsplash.com/photo-1558236714-d1a6333ba154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    results: "The Toy Anatomy system increased science test scores by 40% among participating children and maintained engagement for an average of 45 minutes per session, significantly longer than comparable educational toys.",
    testimonial: {
      quote: "My daughter hasn't put down her Toy Anatomy set since we bought it. She's now teaching her younger brother about the circulatory system, and I'm learning things I never knew! The way it combines physical play with digital elements is brilliant.",
      author: "Neha Gupta",
      title: "Parent and Elementary Educator",
      image: "https://images.unsplash.com/photo-1567532939604-b6b5b0db2604?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
    }
  }
];

const ProjectDetail = () => {
  const { id } = useParams();
  const projectId = parseInt(id || "1");
  const navigate = useNavigate();
  const contentRef = useRef<HTMLDivElement>(null);
  
  const project = projects.find(p => p.id === projectId);
  const nextProject = projects.find(p => p.id === projectId + 1) || projects[0];
  
  const { scrollYProgress } = useScroll();
  const heroScale = useTransform(scrollYProgress, [0, 0.3], [1, 1.1]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [projectId]);

  const goBack = () => {
    navigate(-1);
  };

  const scrollToContent = () => {
    contentRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

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
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <ProjectHero 
          project={project}
          heroScale={heroScale}
          onBack={goBack}
          onScrollToContent={scrollToContent}
        />

        {/* Content Anchor */}
        <div ref={contentRef}></div>

        {/* Project Overview */}
        <ProjectOverview project={project} />
        
        {/* User Personas & Flows */}
        {(project.userPersona || project.userFlows) && (
          <section className="py-12 xs:py-16 bg-gradient-to-b from-gray-50 to-white">
            <div className="container mx-auto px-4 md:px-6">
              <div className="max-w-5xl mx-auto">
                {project.userPersona && (
                  <UserPersonas userPersona={project.userPersona} />
                )}
                
                {project.userFlows && (
                  <UserFlows userFlows={project.userFlows} />
                )}
              </div>
            </div>
          </section>
        )}
        
        {/* Research Methods */}
        {project.researchMethods && (
          <ResearchMethods researchMethods={project.researchMethods} />
        )}
        
        {/* Design Process */}
        {project.process && (
          <DesignProcess process={project.process} />
        )}
        
        {/* Ideation */}
        {project.ideation && (
          <Ideation ideation={project.ideation} />
        )}
        
        {/* Prototyping */}
        {project.prototyping && (
          <Prototyping prototyping={project.prototyping} />
        )}
        
        {/* Results */}
        {project.results && (
          <ProjectResults results={project.results} />
        )}
        
        {/* Testimonial */}
        {project.testimonial && (
          <ProjectTestimonial testimonial={project.testimonial} />
        )}
        
        {/* Navigation */}
        <ProjectNavigation nextProject={nextProject} />
      </main>
      
      <Footer />
    </div>
  );
};

export default ProjectDetail;

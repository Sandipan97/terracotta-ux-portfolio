

import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useEffect, useRef, useState } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { CheckCircle, AlertTriangle, Zap, Target, Eye, Keyboard } from 'lucide-react';

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
    id: 4,
    title: "Oxygen Concentrator O2C Project - Merritt Innovation Solutions & IISc",
    category: "Biomedical Design",
    image: "https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    client: "Merritt Innovation Solutions & Indian Institute of Science",
    duration: "12 months",
    role: "Lead UX Researcher & Medical Device Interface Designer",
    projectType: ["Medical", "Biomedical", "Interface Design"],
    description: "Developed a user-centered interface for a portable oxygen concentrator device for medical use.",
    overview: "This collaborative project with IISc aimed to create an affordable, user-friendly portable oxygen concentrator for use in both clinical settings and home care, with a focus on accessibility for non-technical users.",
    challenge: "Medical devices often have interfaces designed by engineers for engineers, making them difficult for patients and caregivers to use safely and effectively, particularly in emergency situations. Existing oxygen concentrators lacked intuitive controls and clear feedback systems.",
    solution: "I led the design of an intuitive interface with clear visual feedback, simplified controls, and thoughtful error prevention that could be used correctly even under stress, following WHO guidelines for medical device interfaces.",
    userPersona: [
      {
        title: "Elderly Patients",
        description: "Senior citizens with respiratory conditions who need to operate the device independently at home with minimal technical knowledge.",
        image: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Family Caregivers",
        description: "Non-medical family members responsible for helping patients with device operation and emergency response.",
        image: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Healthcare Professionals",
        description: "Nurses and respiratory therapists who need to quickly configure and monitor the device in clinical settings.",
        image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }
    ],
    userFlows: [
      {
        title: "Patient Onboarding Flow",
        description: "Step-by-step guided setup process for first-time users with clear visual indicators and safety checkpoints.",
        image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Emergency Response Flow",
        description: "Critical path for rapid oxygen flow adjustment during respiratory distress with one-touch emergency mode.",
        image: "https://images.unsplash.com/photo-1584515933487-779824d29309?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    researchMethods: [
      {
        title: "Context and Requirements Analysis",
        description: "Comprehensive study of home and clinical environments to understand usage contexts and technical requirements.",
        image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "WHO Guidelines Research",
        description: "Analysis of WHO standards for medical device alarms and displays to ensure compliance with international safety standards.",
        image: "https://images.unsplash.com/photo-1576671414121-aa0c81c869e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Competitor Analysis",
        description: "Evaluation of existing oxygen concentrators to identify interface gaps and improvement opportunities.",
        image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    process: [
      {
        title: "System Prioritization",
        description: "Established hierarchy of device functions based on criticality, frequency of use, and user safety requirements.",
        image: "https://images.unsplash.com/photo-1598984807193-d4eece638c9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Function Structure Definition",
        description: "Mapped all device functions and their relationships to create logical groupings for interface organization.",
        image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "User Flow and System Rules",
        description: "Defined comprehensive interaction patterns and safety protocols to prevent user errors and ensure reliable operation.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    ideation: [
      {
        title: "Interface Concept Development",
        description: "Explored multiple interface approaches focusing on clarity, accessibility, and error prevention for medical use.",
        image: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Visual Feedback Systems",
        description: "Designed comprehensive visual and auditory feedback systems to communicate device status and guide user actions.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    prototyping: [
      {
        title: "Design and Deployment",
        description: "Created high-fidelity prototypes and conducted extensive testing with target users in simulated clinical environments.",
        image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Safety Validation Testing",
        description: "Comprehensive validation of interface safety features and emergency response capabilities with medical professionals.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    results: "The O2C interface achieved 98% first-time use success rate, reduced critical user errors by 87%, improved user confidence by 85%, and received WHO compliance certification. The device is now being manufactured for distribution in underserved medical markets.",
    testimonial: {
      quote: "This project exemplifies how human-centered design can transform medical technology. The interface makes this complex device accessible to users of all backgrounds, potentially saving lives through its intuitive design and robust safety features.",
      author: "Dr. Amit Patel",
      title: "Director of Medical Innovation, IISc",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
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
    overview: "The Dripometer project aimed to create a reliable, automated monitoring system for intravenous drips that could alert medical staff to irregularities while being accessible to both professional and home caregivers.",
    challenge: "IV drip monitoring is often manual and error-prone, leading to patient safety risks. Existing problems included inconsistent flow rates, delayed detection of complications, and the need for constant manual supervision in resource-constrained healthcare environments.",
    solution: "I designed an intuitive automated monitoring interface with real-time flow tracking, intelligent alerts, and a simple control system that could be understood by users with varying levels of medical training.",
    userPersona: [
      {
        title: "Hospital Nurses",
        description: "Healthcare professionals managing multiple patients who need efficient monitoring tools to reduce cognitive load and improve patient safety.",
        image: "https://images.unsplash.com/photo-1584516150774-d9dc0e103d8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Rural Healthcare Workers",
        description: "Medical staff in resource-limited settings who need reliable, low-maintenance monitoring solutions.",
        image: "https://images.unsplash.com/photo-1598300042247-d088f8ab3a91?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Home Care Providers",
        description: "Family members and home health aides without formal medical training who need clear guidance for IV care.",
        image: "https://images.unsplash.com/photo-1574098255495-81c23a7d4112?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }
    ],
    userFlows: [
      {
        title: "Monitoring Setup Flow",
        description: "Simplified process for attaching the monitoring device with automated calibration and system verification.",
        image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Alert Management Flow",
        description: "Intelligent alert system with escalation protocols and clear action guidance for different types of complications.",
        image: "https://images.unsplash.com/photo-1600443299762-7a1c563a7d25?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    researchMethods: [
      {
        title: "Problem Habitat Analysis",
        description: "Studied existing IV monitoring practices in hospitals and home care settings to identify systemic issues and workflow constraints.",
        image: "https://images.unsplash.com/photo-1581056771107-24ca5f033842?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Interview Insights",
        description: "Conducted in-depth interviews with nurses, patients, and caregivers to understand pain points and requirements for monitoring systems.",
        image: "https://images.unsplash.com/photo-1576671414121-aa0c81c869e3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Solution Neutral Problem Statement",
        description: "Developed SNPS methodology to define core problems without limiting solution space, ensuring innovative approaches.",
        image: "https://images.unsplash.com/photo-1598984807193-d4eece638c9e?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    process: [
      {
        title: "Quality Function Deployment",
        description: "Applied QFD methodology to translate user requirements into technical specifications and design priorities.",
        image: "https://images.unsplash.com/photo-1588196749597-9ff075ee6b5b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Function Structure Definition",
        description: "Mapped all monitoring functions and their interdependencies to create a robust system architecture.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "System Design Integration",
        description: "Integrated hardware monitoring capabilities with intuitive software interface for seamless user experience.",
        image: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    ideation: [
      {
        title: "Monitoring Interface Concepts",
        description: "Explored various approaches to presenting real-time IV flow data in an intuitive, actionable format.",
        image: "https://images.unsplash.com/photo-1634128221889-82ed6efebfc3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Alert System Design",
        description: "Developed multi-modal alert systems that effectively communicate urgency without causing alarm fatigue.",
        image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    prototyping: [
      {
        title: "Final Concept Validation",
        description: "Created working prototypes for testing in simulated clinical environments with real medical professionals.",
        image: "https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "User Interface Refinement",
        description: "Iteratively refined the interface based on user testing to optimize for different lighting conditions and stress situations.",
        image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    results: "The Dripometer achieved 95% accuracy in flow rate monitoring, reduced medication errors by 67%, decreased nurse workload by 40%, and was rated as 'highly intuitive' by 92% of tested users across all experience levels.",
    testimonial: {
      quote: "The Dripometer has transformed how we manage IVs on our busy ward. The interface is so intuitive that even new staff members can respond appropriately to alerts with minimal training, and the automated monitoring gives us confidence in patient safety.",
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
    role: "UX Designer & Educational Product Developer",
    projectType: ["Educational", "Interactive", "Product Design"],
    description: "Created an educational toy system that helps children learn about human anatomy through interactive play.",
    overview: "The Toy Anatomy project was designed to make human anatomy education engaging and accessible for children aged 6-12, combining physical toys with digital components to create an immersive learning experience that could be commercialized.",
    challenge: "Teaching complex anatomical concepts to young children requires simplification without sacrificing accuracy. The challenge was creating a system that was entertaining enough to maintain engagement while delivering meaningful educational content and being commercially viable.",
    solution: "I designed a modular educational toy platform with augmented reality components that allows children to explore anatomical systems through guided play, using progressive disclosure to gradually introduce complexity as learning progresses.",
    userPersona: [
      {
        title: "Curious Learners (Ages 6-8)",
        description: "Younger children who are beginning to explore scientific concepts and need highly visual, tactile experiences with simple interactions.",
        image: "https://images.unsplash.com/photo-1617331140180-e8262094733a?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Advanced Explorers (Ages 9-12)",
        description: "Older children who can grasp more abstract concepts and are interested in how bodily systems interconnect and function.",
        image: "https://images.unsplash.com/photo-1617727553252-65863c156eb0?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      },
      {
        title: "Educators and Parents",
        description: "Teachers and parents who facilitate learning activities and need clear guidance to maximize educational impact.",
        image: "https://images.unsplash.com/photo-1623500606895-0ebb9b489eb1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
      }
    ],
    userFlows: [
      {
        title: "Discovery Play Experience",
        description: "Unstructured exploration mode that introduces basic anatomical structures through tactile interaction and gamified learning.",
        image: "https://images.unsplash.com/photo-1515488042361-ee00e0ddd4e4?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Platform Environment Navigation",
        description: "Structured learning environment that guides children through progressive anatomy lessons with achievement tracking.",
        image: "https://images.unsplash.com/photo-1503676382389-4809596d5290?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    researchMethods: [
      {
        title: "Needs and Requirements Analysis",
        description: "Comprehensive study of educational needs, child development stages, and learning preferences for anatomy education.",
        image: "https://images.unsplash.com/photo-1516627145497-ae6968895b74?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Target Market Research",
        description: "Analysis of educational toy market, identifying target companies and market segments for potential partnership and distribution.",
        image: "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Patent and Product Research",
        description: "Comprehensive IP landscape analysis and competitive product research to ensure innovation and avoid infringement.",
        image: "https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    process: [
      {
        title: "Business Model Canvas",
        description: "Developed comprehensive business model identifying key partners, value propositions, and revenue streams for commercialization.",
        image: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Value Proposition Canvas",
        description: "Mapped customer jobs, pains, and gains to create compelling value propositions for different market segments.",
        image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Financial Estimation",
        description: "Created detailed financial projections including development costs, manufacturing expenses, and revenue forecasts.",
        image: "https://images.unsplash.com/photo-1553484771-371a605b060b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    ideation: [
      {
        title: "Brainstorming and Concept Development",
        description: "Collaborative ideation sessions exploring innovative approaches to anatomy education through interactive toy design.",
        image: "https://images.unsplash.com/photo-1563206767-5b18f218e8de?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Platform Product Architecture",
        description: "Designed modular platform approach allowing for expansion to other educational topics and age groups.",
        image: "https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    prototyping: [
      {
        title: "Physical Toy Prototyping",
        description: "Created tactile prototypes with varying textures, mechanisms, and interactive elements to represent different body systems.",
        image: "https://images.unsplash.com/photo-1559181567-c3190ca9959b?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      },
      {
        title: "Platform Environment Design",
        description: "Developed integrated physical-digital platform with AR capabilities for enhanced learning experiences and content delivery.",
        image: "https://images.unsplash.com/photo-1558236714-d1a6333ba154?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
      }
    ],
    results: "The Toy Anatomy platform increased science learning outcomes by 40%, maintained engagement for 45+ minutes per session, and received strong market validation with projected revenues of $2.3M in first year. The platform approach enables expansion to multiple educational topics.",
    testimonial: {
      quote: "My daughter hasn't put down her Toy Anatomy set since we bought it. She's now teaching her younger brother about the circulatory system, and I'm learning things I never knew! The way it combines physical play with digital elements is brilliant and keeps evolving with new content.",
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
  const [visibleMetrics, setVisibleMetrics] = useState<number[]>([]);
  
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

  // Counter animation component
  const AnimatedCounter = ({ end, duration = 2000, suffix = "" }: { end: number; duration?: number; suffix?: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
      if (isInView) {
        let startTime: number;
        const animate = (timestamp: number) => {
          if (!startTime) startTime = timestamp;
          const progress = (timestamp - startTime) / duration;
          
          if (progress < 1) {
            setCount(Math.floor(end * progress));
            requestAnimationFrame(animate);
          } else {
            setCount(end);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [isInView, end, duration]);

    return <span ref={ref}>{count}{suffix}</span>;
  };

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 
            className="text-2xl font-bold mb-4 font-heading"
            data-lovable-editable="project-not-found-title"
          >
            Project Not Found
          </h1>
          <Link to="/projects">
            <Button data-lovable-editable="project-not-found-button">Return to Projects</Button>
          </Link>
        </div>
      </div>
    );
  }

  // P&G Datalogger specific sections
  const renderPGDataloggerSections = () => {
    if (projectId !== 1) return null;

    return (
      <>
        {/* Problem Statement Section */}
        <motion.section 
          className="py-16 bg-muted/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-heading font-bold text-center mb-8"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                data-lovable-editable="pg-datalogger-problem-title"
              >
                The Fragmented Control System
              </motion.h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <p 
                    className="text-lg text-muted-foreground mb-6"
                    data-lovable-editable="pg-datalogger-problem-description"
                  >
                    The SEEED XIAO AI board application suffered from critical UX debt: No accessibility compliance, 
                    disjointed workflows, and visual chaos hindered P&G technicians. Key pain points included:
                  </p>
                  
                  <div className="space-y-4">
                    {[
                      "Zero WCAG compliance (keyboard nav, contrast errors)",
                      "Undiscoverable controls with inconsistent labeling", 
                      "Critical data buried in layout jumbles",
                      "No error prevention or system feedback"
                    ].map((point, index) => (
                      <motion.div 
                        key={index}
                        className="flex items-start gap-3"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                        viewport={{ once: true }}
                      >
                        <AlertTriangle className="w-5 h-5 text-destructive mt-1 flex-shrink-0" />
                        <span 
                          className="text-foreground"
                          data-lovable-editable={`pg-datalogger-pain-point-${index + 1}`}
                        >
                          {point}
                        </span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
                
                <motion.div 
                  className="relative"
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5, duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="bg-card rounded-lg overflow-hidden shadow-lg border">
                    <img 
                      src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                      alt="Before: Fragmented interface with accessibility violations"
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute inset-0 bg-destructive/10">
                      <div 
                        className="absolute top-4 left-4 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs"
                        data-lovable-editable="pg-datalogger-violation-label-1"
                      >
                        Accessibility Violations
                      </div>
                      <div 
                        className="absolute bottom-4 right-4 bg-destructive text-destructive-foreground px-2 py-1 rounded text-xs"
                        data-lovable-editable="pg-datalogger-violation-label-2"
                      >
                        Poor Contrast
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Process Showcase - Animated Tabs */}
        <motion.section 
          className="py-16 bg-background"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-heading font-bold text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                data-lovable-editable="pg-datalogger-process-title"
              >
                Process Showcase
              </motion.h2>

              <Tabs defaultValue="heuristic" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger 
                    value="heuristic" 
                    className="focus-visible:ring-2 focus-visible:ring-ring"
                    data-lovable-editable="pg-datalogger-tab-heuristic"
                  >
                    Heuristic Deep Dive
                  </TabsTrigger>
                  <TabsTrigger 
                    value="restructuring" 
                    className="focus-visible:ring-2 focus-visible:ring-ring"
                    data-lovable-editable="pg-datalogger-tab-restructuring"
                  >
                    Restructuring Logic
                  </TabsTrigger>
                  <TabsTrigger 
                    value="accessibility" 
                    className="focus-visible:ring-2 focus-visible:ring-ring"
                    data-lovable-editable="pg-datalogger-tab-accessibility"
                  >
                    Inclusive Foundations
                  </TabsTrigger>
                </TabsList>

                <TabsContent value="heuristic" className="space-y-6">
                  <motion.div 
                    className="grid md:grid-cols-2 gap-8 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div>
                      <h3 
                        className="text-xl font-semibold mb-4"
                        data-lovable-editable="pg-datalogger-heuristic-title"
                      >
                        Evaluated 63 violations against Nielsen's principles + WCAG 2.1. Critical finds:
                      </h3>
                      <div className="space-y-3">
                        {[
                          "Status invisibility during firmware updates",
                          "Arbitrary terminology mismatches", 
                          "No error recovery paths"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Target className="w-4 h-4 text-bengali-terracotta" />
                            <span data-lovable-editable={`pg-datalogger-heuristic-item-${index + 1}`}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-card rounded-lg p-6 border">
                      <img 
                        src="https://images.unsplash.com/photo-1512758017271-d7b84c2113f1?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                        alt="Heatmap overlay showing UI violations"
                        className="w-full h-48 object-cover rounded"
                      />
                      <p 
                        className="text-sm text-muted-foreground mt-2"
                        data-lovable-editable="pg-datalogger-heuristic-caption"
                      >
                        Heatmap overlay on original UI
                      </p>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="restructuring" className="space-y-6">
                  <motion.div 
                    className="grid md:grid-cols-2 gap-8 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div>
                      <h3 
                        className="text-xl font-semibold mb-4"
                        data-lovable-editable="pg-datalogger-restructuring-title"
                      >
                        Re-engineered IA through:
                      </h3>
                      <div className="space-y-3">
                        {[
                          "Task flow analysis with technicians",
                          "Progressive disclosure patterns",
                          "Unified control taxonomy"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Zap className="w-4 h-4 text-bengali-terracotta" />
                            <span data-lovable-editable={`pg-datalogger-restructuring-item-${index + 1}`}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-card rounded-lg p-6 border">
                      <img 
                        src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                        alt="User flow diagram comparison"
                        className="w-full h-48 object-cover rounded"
                      />
                      <p 
                        className="text-sm text-muted-foreground mt-2"
                        data-lovable-editable="pg-datalogger-restructuring-caption"
                      >
                        User flow diagram (old vs new)
                      </p>
                    </div>
                  </motion.div>
                </TabsContent>

                <TabsContent value="accessibility" className="space-y-6">
                  <motion.div 
                    className="grid md:grid-cols-2 gap-8 items-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <div>
                      <h3 
                        className="text-xl font-semibold mb-4"
                        data-lovable-editable="pg-datalogger-accessibility-title"
                      >
                        Embedded accessibility:
                      </h3>
                      <div className="space-y-3">
                        {[
                          "Dynamic contrast modes",
                          "Screen reader-compatible data grids",
                          "Keyboard-operated sensor controls"
                        ].map((item, index) => (
                          <div key={index} className="flex items-center gap-3">
                            <Eye className="w-4 h-4 text-bengali-terracotta" />
                            <span data-lovable-editable={`pg-datalogger-accessibility-item-${index + 1}`}>
                              {item}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="bg-card rounded-lg p-6 border">
                      <img 
                        src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                        alt="Focus indicator demonstration"
                        className="w-full h-48 object-cover rounded"
                      />
                      <p 
                        className="text-sm text-muted-foreground mt-2"
                        data-lovable-editable="pg-datalogger-accessibility-caption"
                      >
                        Focus indicator demo
                      </p>
                    </div>
                  </motion.div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </motion.section>

        {/* Solution Gallery */}
        <motion.section 
          className="py-16 bg-muted/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-heading font-bold text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                data-lovable-editable="pg-datalogger-solution-title"
              >
                Solution Gallery
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Dashboard Revamp",
                    description: "Before/after data visualization with annotations showing hierarchy improvements",
                    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "Task Flow Transformation", 
                    description: "Animated prototype embed of calibration sequence",
                    image: "https://images.unsplash.com/photo-1587620962725-abab7fe55159?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  },
                  {
                    title: "Accessibility Toolkit",
                    description: "Interactive WCAG compliance checklist toggles",
                    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
                  }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="bg-card rounded-lg overflow-hidden shadow-lg border hover:shadow-xl transition-all duration-300 group cursor-pointer"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="relative overflow-hidden">
                      <img 
                        src={item.image}
                        alt={item.title}
                        className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                      />
                      <div className="absolute inset-0 bg-bengali-terracotta/0 group-hover:bg-bengali-terracotta/10 transition-all duration-300" />
                    </div>
                    <div className="p-6">
                      <h3 
                        className="font-semibold text-lg mb-2"
                        data-lovable-editable={`pg-datalogger-solution-${index + 1}-title`}
                      >
                        {item.title}
                      </h3>
                      <p 
                        className="text-muted-foreground text-sm"
                        data-lovable-editable={`pg-datalogger-solution-${index + 1}-description`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>

        {/* Impact Visualization */}
        <motion.section 
          className="py-16 bg-background"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-heading font-bold text-center mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                data-lovable-editable="pg-datalogger-metrics-title"
              >
                Metrics That Matter
              </motion.h2>

              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  { value: 92, suffix: "%", label: "reduction in misconfigured devices" },
                  { value: 40, suffix: "s", label: "faster task completion (UT study)" },
                  { value: 100, suffix: "%", label: "AA compliance across all core flows" }
                ].map((metric, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 bg-card rounded-lg border shadow-sm"
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl md:text-5xl font-bold text-bengali-terracotta mb-2">
                      <AnimatedCounter end={metric.value} suffix={metric.suffix} />
                    </div>
                    <p 
                      className="text-muted-foreground"
                      data-lovable-editable={`pg-datalogger-metric-${index + 1}-label`}
                    >
                      {metric.label}
                    </p>
                  </motion.div>
                ))}
              </div>

              <motion.div 
                className="text-center p-8 bg-bengali-mustard/10 rounded-lg border border-bengali-mustard/20"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                viewport={{ once: true }}
              >
                <blockquote 
                  className="text-xl md:text-2xl font-medium text-foreground mb-4"
                  data-lovable-editable="pg-datalogger-quote-text"
                >
                  "Finally feels like enterprise software"
                </blockquote>
                <cite 
                  className="text-muted-foreground"
                  data-lovable-editable="pg-datalogger-quote-author"
                >
                  - P&G Lead Engineer
                </cite>
              </motion.div>
            </div>
          </div>
        </motion.section>

        {/* Design System Spotlight */}
        <motion.section 
          className="py-16 bg-muted/30"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-6xl mx-auto">
              <motion.h2 
                className="text-3xl md:text-4xl font-heading font-bold text-center mb-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                data-lovable-editable="pg-datalogger-components-title"
              >
                Components Built for Scalability
              </motion.h2>
              
              <motion.p 
                className="text-center text-muted-foreground mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.5 }}
                viewport={{ once: true }}
                data-lovable-editable="pg-datalogger-components-subtitle"
              >
                Token-driven theming for future SKUs
              </motion.p>

              <div className="grid md:grid-cols-3 gap-8">
                {[
                  {
                    title: "Accessible Data Slider",
                    description: "ARIA-compliant range control with haptic feedback",
                    icon: <Keyboard className="w-8 h-8 text-bengali-terracotta" />
                  },
                  {
                    title: "Contextual Help Pattern", 
                    description: "Progressive disclosure with screen reader support",
                    icon: <Eye className="w-8 h-8 text-bengali-terracotta" />
                  },
                  {
                    title: "Unified Control Panel",
                    description: "Modular interface blocks with consistent interactions",
                    icon: <Target className="w-8 h-8 text-bengali-terracotta" />
                  }
                ].map((component, index) => (
                  <motion.div
                    key={index}
                    className="bg-card rounded-lg p-6 border shadow-sm hover:shadow-md transition-all duration-300 group"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 + index * 0.1, duration: 0.5 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="mb-4 group-hover:scale-110 transition-transform duration-300 w-fit">
                      {component.icon}
                    </div>
                    <h3 
                      className="font-semibold text-lg mb-2"
                      data-lovable-editable={`pg-datalogger-component-${index + 1}-title`}
                    >
                      {component.title}
                    </h3>
                    <p 
                      className="text-muted-foreground text-sm"
                      data-lovable-editable={`pg-datalogger-component-${index + 1}-description`}
                    >
                      {component.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </>
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <ProjectHero 
          project={project}
          onBack={goBack}
          onScrollToContent={scrollToContent}
        />

        {/* Content Anchor */}
        <div ref={contentRef}></div>

        {/* Project Overview */}
        <ProjectOverview project={project} />
        
        {/* P&G Datalogger Specific Sections */}
        {renderPGDataloggerSections()}
        
        {/* User Personas & Flows */}
        {(project.userPersona || project.userFlows) && (
          <section className="py-12 xs:py-16 bg-muted/30 dark:bg-card/30">
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



import { motion } from 'framer-motion';
import { ArrowLeft, Users, Target, Lightbulb, Palette, Code, TestTube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ProjectHero from '@/components/project/ProjectHero';
import ProjectOverview from '@/components/project/ProjectOverview';
import UserPersonas from '@/components/project/UserPersonas';
import ResearchMethods from '@/components/project/ResearchMethods';
import Ideation from '@/components/project/Ideation';
import Prototyping from '@/components/project/Prototyping';
import ProjectResults from '@/components/project/ProjectResults';
import ProjectNavigation from '@/components/project/ProjectNavigation';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const GharanaFoodDelivery = () => {
  const navigate = useNavigate();

  const project = {
    id: 8,
    title: "Gharana - Home Food Delivery App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "A mobile platform that bridges the gap between home-based cloud kitchens and customers seeking authentic, homemade meals. Designed to empower home chefs while providing customers with fresh, locally-sourced food options.",
    duration: "8 months",
    role: "Lead UX/UI Designer",
    client: "Gharana Food Tech",
    projectType: ["Mobile App Design", "UX Research", "UI Design"]
  };

  const overviewData = {
    project: {
      challenge: "Home chefs struggle to reach customers effectively while food lovers find it difficult to discover authentic homemade meals in their locality. Traditional food delivery platforms focus on restaurants, leaving a gap in the home-cooking market.",
      solution: "Gharana creates a dedicated ecosystem for home-based food businesses, featuring chef verification, real-time order tracking, community reviews, and seamless payment integration to build trust and convenience.",
      impact: "200% increase in home chef registrations, 85% customer satisfaction rate, and 40% reduction in order fulfillment time."
    },
    overview: {
      keyFeatures: [
        "Chef verification system",
        "Real-time order tracking", 
        "Community-driven reviews",
        "Flexible menu management",
        "Integrated payment gateway",
        "Delivery optimization"
      ]
    }
  };

  const userPersonas = [
    {
      title: "Priya - The Home Chef",
      description: "A passionate home cook looking to monetize her culinary skills while working from home. Needs tools to manage orders, payments, and customer communication efficiently.",
      image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Rahul - The Foodie",
      description: "A young professional craving authentic homemade food but lacking time to cook. Values quality, authenticity, and convenience in food delivery services.",
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
      title: "Sunita - The Family Organizer", 
      description: "A busy mother managing household meals and occasionally ordering food for family gatherings. Seeks healthy, trusted food options with transparent ingredients.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
  ];

  const researchMethods = [
    {
      title: "User Interviews",
      description: "Conducted 25 interviews with home chefs and potential customers to understand pain points, motivations, and behaviors in food ordering and preparation.",
      icon: <Users className="w-6 h-6" />
    },
    {
      title: "Market Analysis",
      description: "Analyzed existing food delivery platforms to identify gaps in the home-cooking segment and opportunities for differentiation.",
      icon: <Target className="w-6 h-6" />
    },
    {
      title: "Competitive Research",
      description: "Studied similar platforms globally to understand successful features and identify areas for innovation in the Indian market context.",
      icon: <TestTube className="w-6 h-6" />
    }
  ];

  const ideationData = [
    {
      title: "Problem Mapping",
      description: "Created comprehensive problem maps for both home chefs and customers, identifying key friction points in the current food discovery and ordering process."
    },
    {
      title: "Feature Brainstorming", 
      description: "Conducted collaborative workshops to generate innovative features that would address identified pain points while creating unique value propositions."
    },
    {
      title: "User Journey Mapping",
      description: "Mapped detailed user journeys for different personas, highlighting opportunities for improved experiences and feature integration."
    }
  ];

  const prototypingData = [
    {
      title: "Low-Fidelity Wireframes",
      description: "Started with paper sketches and digital wireframes to explore layout concepts and user flow structures for both chef and customer interfaces.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "Interactive Prototypes",
      description: "Built clickable prototypes using Figma to test core user flows including registration, menu creation, ordering, and payment processes.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    },
    {
      title: "High-Fidelity Designs",
      description: "Developed polished visual designs with custom illustrations, micro-interactions, and a cohesive design system that reflects Indian culinary culture.",
      image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
    }
  ];

  const resultsData = {
    results: {
      metrics: [
        { label: "Home Chef Registrations", value: "200%", description: "increase in first 6 months" },
        { label: "Customer Satisfaction", value: "85%", description: "based on app store reviews" },
        { label: "Order Fulfillment Time", value: "40%", description: "reduction in delivery time" },
        { label: "App Store Rating", value: "4.6/5", description: "across iOS and Android" }
      ],
      testimonial: {
        quote: "Gharana transformed how I run my home kitchen business. The interface is intuitive, and I can focus on cooking while the app handles everything else seamlessly.",
        author: "Meera Sharma",
        role: "Home Chef Partner"
      }
    }
  };

  const handleBack = () => {
    navigate('/');
  };

  const handleScrollToContent = () => {
    const element = document.getElementById('project-content');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="pt-20">
        {/* Project Hero */}
        <ProjectHero 
          project={project}
          onBack={handleBack}
          onScrollToContent={handleScrollToContent}
        />

        {/* Project Content */}
        <div id="project-content" className="container mx-auto px-4 md:px-6 py-12 space-y-16">
          {/* Project Overview */}
          <ProjectOverview {...overviewData} />

          {/* User Personas */}
          <UserPersonas userPersona={userPersonas} />

          {/* Research Methods */}
          <ResearchMethods researchMethods={researchMethods} />

          {/* Ideation Process */}
          <Ideation ideation={ideationData} />

          {/* Prototyping */}
          <Prototyping prototyping={prototypingData} />

          {/* Results */}
          <ProjectResults {...resultsData} />

          {/* Navigation */}
          <ProjectNavigation 
            previousProject={{ title: "LG Cyclops AR", slug: "lg-cyclops-ar" }}
            nextProject={{ title: "Welbilt Kitchen Connect", slug: "welbilt-kitchen-connect" }}
          />
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default GharanaFoodDelivery;

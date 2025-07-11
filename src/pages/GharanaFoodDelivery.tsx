import { motion } from 'framer-motion';
import { ArrowLeft, Users, Target, Lightbulb, Palette, Code, TestTube } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
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
import { EditableImage } from '@/components/ui/editable-image';

const GharanaFoodDelivery = () => {
  const navigate = useNavigate();

  const project = {
    id: 1,
    title: "Gharana - Home Food Delivery App",
    category: "Mobile App",
    image: "https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
    description: "A mobile platform that bridges the gap between home-based cloud kitchens and customers seeking authentic, homemade meals. Designed to empower home chefs while providing customers with fresh, locally-sourced food options.",
    duration: "8 Months",
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

  const projectResults = "The Gharana app achieved remarkable success with a 200% increase in home chef registrations within the first 6 months, 85% customer satisfaction rate based on app store reviews, and 40% reduction in order fulfillment time. The platform successfully bridged the gap between home chefs and customers, creating a thriving ecosystem for authentic homemade food delivery.";

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="w-full relative h-[50vh] overflow-hidden">
          <motion.div 
            className="absolute top-4 left-4 z-30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button 
              onClick={goBack}
              variant="secondary" 
              className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background hover:text-amber-600 transition-all duration-300 border border-border/50"
              size="icon"
            >
              <ArrowLeft size={20} />
            </Button>
          </motion.div>

          <motion.div 
            className="absolute inset-0 z-10"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <EditableImage 
              src="https://images.unsplash.com/photo-1721322800607-8c38375eef04?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Gharana - Home Food Delivery App"
              className="w-full h-full object-cover"
              fallbackSrc="/placeholder.svg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10"></div>
          </motion.div>
        </section>

        {/* Project Information */}
        <section className="w-full bg-background/95 backdrop-blur-sm py-12 border-b border-border/30 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-600 hover:text-white transition-all duration-300 border border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800/30 dark:hover:bg-amber-700">
                  <span data-lovable-editable="gharana-badge-mobile-app">Mobile App</span>
                </Badge>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-600 hover:text-white transition-all duration-300 border border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800/30 dark:hover:bg-amber-700">
                  <span data-lovable-editable="gharana-badge-ux-research">UX Research</span>
                </Badge>
                <Badge className="bg-amber-100 text-amber-800 hover:bg-amber-600 hover:text-white transition-all duration-300 border border-amber-200 dark:bg-amber-900/20 dark:text-amber-300 dark:border-amber-800/30 dark:hover:bg-amber-700">
                  <span data-lovable-editable="gharana-badge-ui-design">UI Design</span>
                </Badge>
              </div>

              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-header text-center md:text-left" data-lovable-editable="gharana-main-title">
                {project.title}
              </h1>
              
              <p className="text-lg mb-8 text-muted-foreground text-center md:text-left max-w-4xl leading-relaxed" data-lovable-editable="gharana-main-description">
                {project.description}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <motion.div 
                  className="bg-background/60 backdrop-blur-sm p-5 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-amber-600 text-sm font-medium mb-2 uppercase tracking-wide dark:text-amber-400" data-lovable-editable="gharana-client-label">Client</h3>
                  <p className="font-semibold text-foreground" data-lovable-editable="gharana-client-name">{project.client}</p>
                </motion.div>
                
                <motion.div 
                  className="bg-background/60 backdrop-blur-sm p-5 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-amber-600 text-sm font-medium mb-2 uppercase tracking-wide dark:text-amber-400" data-lovable-editable="gharana-duration-label">Duration</h3>
                  <p className="font-semibold text-foreground" data-lovable-editable="gharana-duration-value">{project.duration}</p>
                </motion.div>
                
                <motion.div 
                  className="bg-background/60 backdrop-blur-sm p-5 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-amber-600 text-sm font-medium mb-2 uppercase tracking-wide dark:text-amber-400" data-lovable-editable="gharana-role-label">My Role</h3>
                  <p className="font-semibold text-foreground" data-lovable-editable="gharana-role-value">{project.role}</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Content */}
        <div id="project-content" className="container mx-auto px-4 md:px-6 py-12 space-y-16">
          {/* Project Overview */}
          <section className="mb-12 xs:mb-16">
            <motion.h2
              className="font-heading text-xl xs:text-2xl md:text-3xl font-bold text-foreground mb-6 xs:mb-10 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-lovable-editable="gharana-overview-title"
            >
              Project Overview
            </motion.h2>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 xs:gap-12">
              <motion.div
                className="space-y-6 xs:space-y-8"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="bg-background/60 backdrop-blur-sm p-6 xs:p-8 rounded-2xl border border-border/50 shadow-lg dark-glow-card">
                  <h3 className="font-heading text-lg xs:text-xl font-semibold text-foreground mb-4" data-lovable-editable="gharana-challenge-title">
                    Challenge
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm xs:text-base" data-lovable-editable="gharana-challenge-text">
                    {overviewData.project.challenge}
                  </p>
                </div>

                <div className="bg-background/60 backdrop-blur-sm p-6 xs:p-8 rounded-2xl border border-border/50 shadow-lg dark-glow-card">
                  <h3 className="font-heading text-lg xs:text-xl font-semibold text-foreground mb-4" data-lovable-editable="gharana-solution-title">
                    Solution
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-sm xs:text-base" data-lovable-editable="gharana-solution-text">
                    {overviewData.project.solution}
                  </p>
                </div>
              </motion.div>

              <motion.div
                className="bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900/10 dark:to-amber-800/20 p-6 xs:p-8 rounded-2xl border border-amber-200 dark:border-amber-800/20 dark-glow-card"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h3 className="font-heading text-lg xs:text-xl font-semibold text-foreground mb-6" data-lovable-editable="gharana-features-title">
                  Key Features
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 xs:gap-4">
                  {overviewData.overview.keyFeatures.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-white/70 dark:bg-background/50 rounded-xl border border-amber-200/50 dark:border-border/30"
                    >
                      <div className="w-2 h-2 bg-amber-600 dark:bg-amber-400 rounded-full flex-shrink-0" />
                      <span className="text-foreground text-sm xs:text-base font-medium" data-lovable-editable={`gharana-feature-${index}`}>
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            <motion.div
              className="mt-8 xs:mt-12 bg-gradient-to-r from-amber-600 to-amber-700 dark:from-amber-700 dark:to-amber-800 text-white p-6 xs:p-8 rounded-2xl text-center dark-glow-medium"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="font-heading text-lg xs:text-xl font-semibold mb-4" data-lovable-editable="gharana-impact-title">
                Project Impact
              </h3>
              <p className="text-white/90 leading-relaxed text-sm xs:text-base max-w-3xl mx-auto" data-lovable-editable="gharana-impact-text">
                {overviewData.project.impact}
              </p>
            </motion.div>
          </section>

          {/* User Personas */}
          <section className="mb-12 xs:mb-16 relative">
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(245,158,11)_1px,_transparent_0)] bg-[size:30px_30px]"></div>
            </div>
            
            <motion.h2 
              className="font-heading text-xl xs:text-2xl md:text-3xl font-bold text-foreground mb-6 xs:mb-10 text-center relative z-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              data-lovable-editable="gharana-personas-title"
            >
              User Personas
            </motion.h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 xs:gap-8 relative z-10">
              {userPersonas.map((persona, index) => (
                <motion.div 
                  key={index} 
                  className="group bg-background/60 backdrop-blur-sm p-4 xs:p-6 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-500 dark-glow-card"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -8, scale: 1.02 }}
                >
                  <div className="mb-4 h-32 xs:h-48 overflow-hidden rounded-xl border border-border/30 dark-glow-image">
                    <img 
                      src={persona.image} 
                      alt={persona.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  
                  <div className="space-y-2">
                    <h3 className="font-heading text-base xs:text-xl font-semibold text-foreground group-hover:text-amber-600 dark:group-hover:text-amber-400 transition-colors duration-300" data-lovable-editable={`gharana-persona-title-${index}`}>
                      {persona.title}
                    </h3>
                    <p className="text-muted-foreground text-sm xs:text-base leading-relaxed" data-lovable-editable={`gharana-persona-description-${index}`}>
                      {persona.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Research Methods */}
          <ResearchMethods researchMethods={researchMethods} />

          {/* Ideation Process */}
          <Ideation ideation={ideationData} />

          {/* Prototyping */}
          <Prototyping prototyping={prototypingData} />

          {/* Results */}
          <ProjectResults results={projectResults} />

          {/* Navigation */}
          <ProjectNavigation 
            nextProject={{ id: 2, title: "Welbilt Kitchen Connect" }}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default GharanaFoodDelivery;

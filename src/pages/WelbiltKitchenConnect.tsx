import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect } from 'react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import UniversalStickyNavigation from '@/components/ui/universal-sticky-navigation';
import HeroSection from '@/components/welbilt/HeroSection';
import BeforeAfterShowcase from '@/components/welbilt/BeforeAfterShowcase';
import DesignSystemGallery from '@/components/welbilt/DesignSystemGallery';
import ProcessTimeline from '@/components/welbilt/ProcessTimeline';
import { ObjectiveMethodologies } from '@/components/welbilt/ObjectiveMethodologies';
import { EnhancedDesignSolutions } from '@/components/welbilt/EnhancedDesignSolutions';
import { ResearchQuestions } from '@/components/welbilt/ResearchQuestions';
import { DetailedSolutions } from '@/components/welbilt/DetailedSolutions';
import ProjectTestimonial from '@/components/project/ProjectTestimonial';

const WelbiltKitchenConnect = () => {
  const navigate = useNavigate();
  
  // Add preload link for hero image
  useEffect(() => {
    const preloadLink = document.createElement('link');
    preloadLink.rel = 'preload';
    preloadLink.href = '/lovable-uploads/Welbilt showcase.webp';
    preloadLink.as = 'image';
    preloadLink.fetchPriority = 'high';
    document.head.appendChild(preloadLink);

    // Update meta tags for better social media previews
    const updateMetaTags = () => {
      const metaTags = [
        { property: 'og:title', content: 'Welbilt Kitchen Connect - IoT Platform Redesign' },
        { property: 'og:description', content: 'Transforming kitchen equipment management through intuitive design and enhanced user experience for commercial kitchen operators.' },
        { property: 'og:image', content: `${window.location.origin}/lovable-uploads/Welbilt showcase.webp` },
        { property: 'og:url', content: window.location.href },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: `${window.location.origin}/lovable-uploads/Welbilt showcase.webp` }
      ];

      metaTags.forEach(({ property, name, content }) => {
        const selector = property ? `meta[property="${property}"]` : `meta[name="${name}"]`;
        let meta = document.querySelector(selector);
        
        if (!meta) {
          meta = document.createElement('meta');
          if (property) meta.setAttribute('property', property);
          if (name) meta.setAttribute('name', name);
          document.head.appendChild(meta);
        }
        
        meta.setAttribute('content', content);
      });
    };

    updateMetaTags();

    return () => {
      document.head.removeChild(preloadLink);
    };
  }, []);

  const handleBack = () => {
    navigate('/projects');
  };

  const navigationSections = [{
    id: 'overview',
    label: 'Overview'
  }, {
    id: 'objective',
    label: 'Objective'
  }, {
    id: 'transformation',
    label: 'Transformation'
  }, {
    id: 'design-system',
    label: 'Design System'
  }, {
    id: 'process',
    label: 'Process'
  }, {
    id: 'solutions',
    label: 'Solutions'
  }, {
    id: 'detailed-solutions',
    label: 'Detailed Solutions'
  }, {
    id: 'impact',
    label: 'Impact'
  }];

  const containerVariants = {
    hidden: {
      opacity: 0
    },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };
  const itemVariants = {
    hidden: {
      opacity: 0,
      y: 20
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6
      }
    }
  };

  const testimonial = {
    quote: "I want to take a moment to sincerely thank you for the incredible work you've contributed during your time on the KitchenConnect project. From the very beginning-well before we even kicked off the Material UI implementation-it was clear that you brought a sharp eye for UX, a deep understanding of functionality, and a thoughtful, analytical approach to every challenge. Your ability to connect the dots and dive deep into complex UX puzzles has been a game-changer for us. I especially appreciated how you took the lead in evaluating the current state of our portal, identifying major UX gaps, and highlighting where human-centered design was missing...Beyond your technical contributions, I'm incredibly grateful for the leadership and support you provided, especially when I was away.",
    author: "Nour Daghstani",
    title: "Project Lead, WELBILT",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  };

  const impactTiles = [
    {
      title: "Big Win @ NAFEM 25",
      description: "Industry Recognition",
      theme: "warm-golden"
    },
    {
      title: "New Customers - QT, Ice-o-matic etc",
      description: "Market Expansion", 
      theme: "warm-sage"
    },
    {
      title: "Revamped Welbilt",
      description: "Platform Transformation",
      theme: "warm-terracotta"
    }
  ];

  const getTileTheme = (theme: string) => {
    switch (theme) {
      case 'warm-golden':
        return 'bg-gradient-to-br from-warm-golden-light/25 to-warm-golden-light/10 border-warm-golden-light/40';
      case 'warm-sage':
        return 'bg-gradient-to-br from-warm-sage-light/25 to-warm-sage-light/10 border-warm-sage-light/40';
      case 'warm-terracotta':
        return 'bg-gradient-to-br from-warm-terracotta-light/25 to-warm-terracotta-light/10 border-warm-terracotta-light/40';
      default:
        return 'bg-card border-border';
    }
  };

  return <div className="min-h-screen bg-background">
      <Navbar />
      <UniversalStickyNavigation sections={navigationSections} />
      
      <main>
        {/* Back Button */}
        <section className="w-full py-8 pt-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div initial={{
            opacity: 0,
            x: -20
          }} animate={{
            opacity: 1,
            x: 0
          }} transition={{
            delay: 0.3,
            duration: 0.5
          }}>
               <Button onClick={handleBack} variant="outline" size="icon" aria-label="Go back to projects">
                <ArrowLeft size={20} />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Hero Section */}
        <div id="overview">
          <HeroSection />
        </div>

        {/* Objective Section - Moved above Transformation */}
        <div id="objective">
          <ObjectiveMethodologies />
        </div>

        {/* Before & After Transformation */}
        <div id="transformation">
          <BeforeAfterShowcase />
        </div>

        {/* Design System Gallery */}
        <div id="design-system">
          <DesignSystemGallery />
        </div>

        {/* Process Timeline */}
        <div id="process">
          <ProcessTimeline />
        </div>

        {/* Additional Sections */}
        <div id="solutions">
          <EnhancedDesignSolutions />
        </div>
        
        <div id="detailed-solutions">
          <DetailedSolutions />
        </div>

        {/* Testimonial Section */}
        <section id="impact" className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-8 text-center" data-lovable-editable="welbilt-testimonial-title">
                Client Testimonial
              </h2>
              
              <ProjectTestimonial testimonial={testimonial} />
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-12">
                {impactTiles.map((tile, index) => (
                  <motion.div 
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2 }}
                    className={`${getTileTheme(tile.theme)} rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 text-center border`}
                  >
                    <div className="text-lg font-semibold text-foreground mb-2" data-lovable-editable={`welbilt-tile-${index + 1}`}>
                      {tile.title}
                    </div>
                    <div className="text-muted-foreground">{tile.description}</div>
                  </motion.div>
                ))}
              </div>
              
              <motion.div className="mt-12 text-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button variant="default" className="text-lg px-8 py-3" onClick={() => navigate('/contact')}>
                    Let's Build Something Great
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};

export default WelbiltKitchenConnect;

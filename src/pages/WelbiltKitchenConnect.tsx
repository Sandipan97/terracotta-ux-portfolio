
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
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
import { KeyFindings } from '@/components/welbilt/KeyFindings';
import { DetailedSolutions } from '@/components/welbilt/DetailedSolutions';

const WelbiltKitchenConnect = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/projects');
  };

  const navigationSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'objective', label: 'Objective' },
    { id: 'transformation', label: 'Transformation' },
    { id: 'design-system', label: 'Design System' },
    { id: 'process', label: 'Process' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'research', label: 'Research' },
    { id: 'findings', label: 'Findings' },
    { id: 'impact', label: 'Impact' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <UniversalStickyNavigation sections={navigationSections} />
      
      <main>
        {/* Back Button */}
        <section className="w-full py-8 pt-24 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
               <Button 
                onClick={handleBack}
                variant="outline" 
                size="icon"
                aria-label="Go back to projects"
              >
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
        <div id="research">
          <ResearchQuestions />
        </div>
        <div id="findings">
          <KeyFindings />
        </div>
        <div id="detailed-solutions">
          <DetailedSolutions />
        </div>

        {/* Final Impact Section */}
        <section id="impact" className="py-20 bg-muted/20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
               <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-8" data-lovable-editable="welbilt-impact-title">
                 Transformative Impact
               </h2>
              <blockquote className="text-xl md:text-2xl text-muted-foreground max-w-4xl mx-auto italic leading-relaxed mb-8" data-lovable-editable="welbilt-impact-quote">
                "A well-crafted design system is not just about consistency—it's about empowering teams to build better experiences faster."
              </blockquote>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                    <div className="text-4xl font-bold text-foreground mb-2">35%</div>
                    <div className="text-muted-foreground">Development Acceleration</div>
                  </div>
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                    <div className="text-4xl font-bold text-foreground mb-2">85%</div>
                    <div className="text-muted-foreground">User Satisfaction</div>
                  </div>
                  <div className="bg-card rounded-2xl p-6 border border-border shadow-sm">
                    <div className="text-4xl font-bold text-foreground mb-2">50+</div>
                    <div className="text-muted-foreground">Design Components</div>
                  </div>
              </div>
              
              <motion.div className="mt-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    variant="default"
                    className="text-lg px-8 py-3"
                    onClick={() => navigate('/contact')}
                  >
                    Let's Build Something Great
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WelbiltKitchenConnect;

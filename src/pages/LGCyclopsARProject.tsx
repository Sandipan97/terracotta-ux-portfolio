import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { EditableImage } from '@/components/ui/editable-image';
import { StickyNavigation } from '@/components/lg-cyclops/StickyNavigation';
import { ObjectiveMethodologies } from '@/components/lg-cyclops/ObjectiveMethodologies';
import { EnhancedDesignSolutions } from '@/components/lg-cyclops/EnhancedDesignSolutions';
import { ResearchQuestions } from '@/components/lg-cyclops/ResearchQuestions';
import { KeyFindings } from '@/components/lg-cyclops/KeyFindings';
import { DetailedSolutions } from '@/components/lg-cyclops/DetailedSolutions';

const LGCyclopsARProject = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Sticky Navigation */}
        <StickyNavigation />

        {/* Hero Image Section - Fixed Height */}
        <section className="w-full relative h-[40vh] md:h-[60vh] overflow-hidden">
          <motion.div 
            className="absolute top-4 left-4 z-30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button 
              onClick={goBack}
              variant="secondary" 
              className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background hover:text-indigo-600 transition-all duration-300 border border-border/50"
              size="icon"
            >
              <ArrowLeft size={20} />
            </Button>
          </motion.div>

          <motion.div 
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <EditableImage 
              src="https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="AR Interactive User Manual - LG Cyclops"
              className="w-full h-full object-cover"
              fallbackSrc="/placeholder.svg"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
        </section>

        {/* Content Tile Section - Clean Background */}
        <section className="w-full bg-background border-b">
          <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
               <Badge className="bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-800/30 hover:bg-indigo-200 dark:hover:bg-indigo-900/30 transition-all duration-300" 
                      tabIndex={0} role="button" aria-label="AR Design tag">
                  🥽 AR Design
                </Badge>
                <Badge className="bg-purple-100 dark:bg-purple-900/20 text-purple-800 dark:text-purple-200 border border-purple-200 dark:border-purple-800/30 hover:bg-purple-200 dark:hover:bg-purple-900/30 transition-all duration-300" 
                      tabIndex={0} role="button" aria-label="User Experience tag">
                  👤 User Experience
                </Badge>
                <Badge className="bg-indigo-100 dark:bg-indigo-900/20 text-indigo-800 dark:text-indigo-200 border border-indigo-200 dark:border-indigo-800/30 hover:bg-indigo-200 dark:hover:bg-indigo-900/30 transition-all duration-300" 
                      tabIndex={0} role="button" aria-label="Interactive Design tag">
                  ⚡ Interactive Design
                </Badge>
              </div>

              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground text-center md:text-left">
                AR Interactive User Manual - LG Cyclops
              </h1>
              
              <p className="text-lg mb-8 text-muted-foreground text-center md:text-left max-w-4xl leading-relaxed">
                A transformative AR-based digital manual for LG consumer products, replacing traditional printed guides with immersive, interactive experiences that enhance user comprehension and reduce environmental impact.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <motion.div 
                  className="bg-card border border-border p-5 rounded-xl hover:bg-muted/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-muted-foreground text-sm font-medium mb-2 uppercase tracking-wide">Client</h3>
                  <p className="font-semibold text-foreground">LG Electronics</p>
                </motion.div>
                
                <motion.div 
                  className="bg-card border border-border p-5 rounded-xl hover:bg-muted/50 transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-muted-foreground text-sm font-medium mb-2 uppercase tracking-wide">Duration</h3>
                  <p className="font-semibold text-foreground">6 Months</p>
                </motion.div>
                
                <motion.div 
                  className="bg-card border border-border p-5 rounded-xl hover:bg-muted/50 transition-all duration-300 sm:col-span-2 lg:col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-muted-foreground text-sm font-medium mb-2 uppercase tracking-wide">My Role</h3>
                  <p className="font-semibold text-foreground">AR/UX Designer</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Objective & Methodologies */}
        <ObjectiveMethodologies />

        {/* Enhanced Design Solutions */}
        <EnhancedDesignSolutions />

        {/* Research Questions */}
        <ResearchQuestions />

        {/* Key Findings */}
        <KeyFindings />

        {/* Detailed Solutions */}
        <DetailedSolutions />

        {/* Final Takeaway */}
        <section className="py-16 bg-gradient-to-br from-indigo-600 to-purple-600">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-header mb-6">
                Final Takeaway
              </h2>
              <blockquote className="text-xl text-white max-w-4xl mx-auto italic leading-relaxed mb-8">
                "It's not enough to build usable products—we must build experiences that bring joy, clarity, and confidence."
              </blockquote>
              <p className="text-white text-lg">
                — Inspired by Don Norman
              </p>
              <Button 
                className="mt-8 bg-white text-indigo-600 hover:bg-indigo-100 hover:text-indigo-700 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-600"
                onClick={() => navigate('/contact')}
                aria-label="Contact to discuss AR projects"
              >
                Discuss AR Projects
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LGCyclopsARProject;
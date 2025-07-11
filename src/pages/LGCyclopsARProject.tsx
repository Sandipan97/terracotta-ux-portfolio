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
              className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background hover:text-indigo-600 transition-all duration-300 border border-border/50"
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
              src="https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="AR Interactive User Manual - LG Cyclops"
              className="w-full h-full object-cover"
              fallbackSrc="/placeholder.svg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 to-purple-900/60 z-10"></div>
          </motion.div>
        </section>

        {/* Project Information */}
        <section className="w-full bg-slate-900/95 backdrop-blur-sm py-12 border-b border-indigo-500/20 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
               <Badge className="bg-white text-indigo-900 hover:bg-indigo-50 transition-all duration-300 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-900" 
                      tabIndex={0} role="button" aria-label="AR Design tag">
                  🥽 AR Design
                </Badge>
                <Badge className="bg-white text-purple-900 hover:bg-purple-50 transition-all duration-300 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-purple-900" 
                      tabIndex={0} role="button" aria-label="User Experience tag">
                  👤 User Experience
                </Badge>
                <Badge className="bg-white text-indigo-900 hover:bg-indigo-50 transition-all duration-300 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-indigo-900" 
                      tabIndex={0} role="button" aria-label="Interactive Design tag">
                  ⚡ Interactive Design
                </Badge>
              </div>

              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-header text-center md:text-left">
                AR Interactive User Manual - LG Cyclops
              </h1>
              
              <p className="text-lg mb-8 text-white text-center md:text-left max-w-4xl leading-relaxed">
                A transformative AR-based digital manual for LG consumer products, replacing traditional printed guides with immersive, interactive experiences that enhance user comprehension and reduce environmental impact.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <motion.div 
                  className="bg-indigo-900/30 backdrop-blur-sm p-5 rounded-2xl border border-indigo-500/30 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-wide">Client</h3>
                  <p className="font-semibold text-white">LG Electronics</p>
                </motion.div>
                
                <motion.div 
                  className="bg-indigo-900/30 backdrop-blur-sm p-5 rounded-2xl border border-indigo-500/30 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-wide">Duration</h3>
                  <p className="font-semibold text-white">6 Months</p>
                </motion.div>
                
                <motion.div 
                  className="bg-indigo-900/30 backdrop-blur-sm p-5 rounded-2xl border border-indigo-500/30 shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-wide">My Role</h3>
                  <p className="font-semibold text-white">UX Designer & AR Experience Designer</p>
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
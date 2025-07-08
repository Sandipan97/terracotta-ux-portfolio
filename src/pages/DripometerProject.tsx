import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { EditableImage } from '@/components/ui/editable-image';
import StickyNavigation from '@/components/dripometer/StickyNavigation';
import ObjectiveMethodologies from '@/components/dripometer/ObjectiveMethodologies';
import ResearchQuestions from '@/components/dripometer/ResearchQuestions';
import KeyFindings from '@/components/dripometer/KeyFindings';
import DesignSolutions from '@/components/dripometer/DesignSolutions';
import MethodTranslation from '@/components/dripometer/MethodTranslation';
import ProjectStatus from '@/components/dripometer/ProjectStatus';

const DripometerProject = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <StickyNavigation />
      
      <main className="pt-32">
        {/* Back Button */}
        <section className="w-full py-8">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button 
                onClick={goBack}
                variant="secondary" 
                className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background hover:text-emerald-600 transition-all duration-300 border border-border/50"
                size="icon"
                aria-label="Go back to projects"
              >
                <ArrowLeft size={20} />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="w-full relative min-h-[70vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 1.1, filter: "blur(4px)" }}
              animate={{ scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <EditableImage 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                alt="Dripometer - IV Drip Monitoring System"
                className="w-full h-full object-cover"
                fallbackSrc="/placeholder.svg"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/60 to-teal-900/80"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-center text-white"
            >
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                <Badge className="bg-white text-emerald-900 hover:bg-emerald-50 transition-all duration-300 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-900" 
                       tabIndex={0} role="button" aria-label="Healthcare tag">
                  🏥 Healthcare
                </Badge>
                <Badge className="bg-white text-teal-900 hover:bg-teal-50 transition-all duration-300 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-teal-900" 
                       tabIndex={0} role="button" aria-label="Product Design tag">
                  🎨 Product Design
                </Badge>
                <Badge className="bg-white text-emerald-900 hover:bg-emerald-50 transition-all duration-300 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-900" 
                       tabIndex={0} role="button" aria-label="Medical Device tag">
                  🔬 Medical Device
                </Badge>
                <Badge className="bg-white text-emerald-900 hover:bg-emerald-50 transition-all duration-300 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-900" 
                       tabIndex={0} role="button" aria-label="Research tag">
                  📊 Research
                </Badge>
              </div>

              <h1 className="font-heading text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                Dripometer
              </h1>
              
              <h2 className="text-2xl md:text-4xl font-semibold mb-8 text-white">
                IV Drip Monitoring System: Portfolio for PD Recruiters
              </h2>
              
              <p className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-white">
                A clinically robust, affordable IV drip monitoring device designed for resource-constrained medical environments. 
                This project demonstrates end-to-end product design from user research to deployment-ready prototypes.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-4xl mx-auto">
                <motion.div 
                  className="bg-emerald-900/30 backdrop-blur-sm p-5 rounded-2xl border border-emerald-500/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                >
                  <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-wide">Client</h3>
                  <p className="font-semibold text-white">IISc Bangalore</p>
                </motion.div>
                
                <motion.div 
                  className="bg-emerald-900/30 backdrop-blur-sm p-5 rounded-2xl border border-emerald-500/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                >
                  <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-wide">Duration</h3>
                  <p className="font-semibold text-white">7 Months</p>
                </motion.div>
                
                <motion.div 
                  className="bg-emerald-900/30 backdrop-blur-sm p-5 rounded-2xl border border-emerald-500/30"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                >
                  <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-wide">My Role</h3>
                  <p className="font-semibold text-white">Lead Product Designer</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Research-Driven Content Sections */}
        <ObjectiveMethodologies />
        <ResearchQuestions />
        <KeyFindings />
        <DesignSolutions />
        <MethodTranslation />
        <ProjectStatus />
      </main>
      
      <Footer />
    </div>
  );
};

export default DripometerProject;
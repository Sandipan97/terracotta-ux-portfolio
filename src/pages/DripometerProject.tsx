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

        {/* Animated Hero Section */}
        <section className="w-full relative min-h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 1.1, filter: "blur(4px)" }}
              animate={{ scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <EditableImage 
                src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80" 
                alt="Medical ward with IV stands and monitoring equipment"
                className="w-full h-full object-cover"
                fallbackSrc="/placeholder.svg"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-emerald-900/70 to-teal-900/90"></div>
            
            {/* Animated nurse walking past IV stands */}
            <div className="absolute inset-0 flex items-center justify-center">
              <motion.div
                className="relative w-full max-w-6xl mx-auto"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5, duration: 1 }}
              >
                {/* IV stands with status indicators */}
                <div className="absolute bottom-1/4 left-1/4 flex space-x-8">
                  {[0, 1, 2].map((index) => (
                    <motion.div
                      key={index}
                      className="w-4 h-16 bg-white/20 rounded-full relative"
                      initial={{ opacity: 0.3 }}
                      animate={{ opacity: index === 1 ? 1 : 0.5 }}
                      transition={{ 
                        repeat: Infinity, 
                        duration: 3, 
                        delay: index * 0.5,
                        repeatType: "reverse"
                      }}
                    >
                      <motion.div
                        className={`absolute -top-2 -left-2 w-8 h-8 rounded-full ${
                          index === 1 ? 'bg-emerald-400' : 'bg-gray-400'
                        } flex items-center justify-center`}
                        animate={index === 1 ? { 
                          scale: [1, 1.2, 1],
                          opacity: [0.7, 1, 0.7]
                        } : {}}
                        transition={{ 
                          repeat: Infinity, 
                          duration: 2,
                          ease: "easeInOut"
                        }}
                      >
                        <div className="w-3 h-3 bg-white rounded-full" />
                      </motion.div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-20">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center text-white"
            >
              {/* Mission Statement */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 1 }}
              >
                <div className="bg-emerald-600/20 backdrop-blur-sm border border-emerald-400/30 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
                  <h2 className="text-xl md:text-2xl font-semibold text-emerald-100 mb-4">
                    🎯 Mission
                  </h2>
                  <p className="text-lg md:text-xl leading-relaxed text-white">
                    Bringing ICU-grade infusion monitoring to rural clinics, NICUs, and overburdened wards — without ICU costs.
                  </p>
                </div>
              </motion.div>

              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {[
                  { label: "Healthcare Innovation", icon: "🏥", color: "emerald" },
                  { label: "Product Design", icon: "🎨", color: "teal" },
                  { label: "Medical Device", icon: "🔬", color: "emerald" },
                  { label: "Research-Driven", icon: "📊", color: "cyan" }
                ].map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 1.5 + index * 0.1 }}
                  >
                    <Badge className="bg-white/10 backdrop-blur-sm text-white border border-white/20 hover:bg-white/20 transition-all duration-300 px-3 py-1">
                      {badge.icon} {badge.label}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              <motion.h1 
                className="font-heading text-5xl md:text-8xl font-bold mb-8"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <span className="bg-gradient-to-r from-emerald-300 via-teal-300 to-cyan-300 bg-clip-text text-transparent">
                  Dripometer
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed text-emerald-100 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                A comprehensive case study demonstrating end-to-end product design methodology — from stakeholder research through deployment-ready prototypes.
              </motion.p>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
                {[
                  { label: "Client", value: "IISc Bangalore", icon: "🏛️" },
                  { label: "Duration", value: "7 Months", icon: "⏱️" },
                  { label: "My Role", value: "Lead Product Designer", icon: "👨‍🎨" }
                ].map((item, index) => (
                  <motion.div 
                    key={item.label}
                    className="bg-white/5 backdrop-blur-md p-6 rounded-2xl border border-white/10 hover:bg-white/10 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 2 + index * 0.2 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h3 className="text-emerald-200 text-sm font-medium mb-2 uppercase tracking-wide">
                      {item.label}
                    </h3>
                    <p className="font-semibold text-white text-lg">{item.value}</p>
                  </motion.div>
                ))}
              </div>

              {/* Scroll Indicator */}
              <motion.div
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 3 }}
              >
                <motion.div
                  className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center"
                  animate={{ y: [0, 10, 0] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                >
                  <motion.div
                    className="w-1.5 h-1.5 bg-white rounded-full mt-2"
                    animate={{ y: [0, 12, 0] }}
                    transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                  />
                </motion.div>
                <p className="text-white/70 text-sm mt-2">Scroll to explore</p>
              </motion.div>
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
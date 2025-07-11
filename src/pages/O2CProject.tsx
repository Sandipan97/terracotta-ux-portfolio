import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { EditableImage } from '@/components/ui/editable-image';
import UniversalStickyNavigation from '@/components/ui/universal-sticky-navigation';
import ObjectiveMethodologies from '@/components/o2c/ObjectiveMethodologies';
import ResearchQuestions from '@/components/o2c/ResearchQuestions';
import UserPersonas from '@/components/o2c/UserPersonas';
import KeyFindings from '@/components/o2c/KeyFindings';
import DesignSolutions from '@/components/o2c/DesignSolutions';
import ProjectTakeaways from '@/components/o2c/ProjectTakeaways';

const O2CProject = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const navigationSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'objective', label: 'Objective' },
    { id: 'research', label: 'Research' },
    { id: 'personas', label: 'Personas' },
    { id: 'findings', label: 'Findings' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'takeaways', label: 'Takeaways' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <UniversalStickyNavigation sections={navigationSections} />
      
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
                className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background hover:text-cyan-600 transition-all duration-300 border border-border/50"
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
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Oxygen Concentrator O2C Project - WHO-compliant medical device interface"
                className="w-full h-full object-cover"
                fallbackSrc="/placeholder.svg"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/50 to-blue-900/70"></div>
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
                <div className="bg-cyan-600/20 backdrop-blur-sm border border-cyan-400/30 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
                  <h2 className="text-xl md:text-2xl font-semibold text-cyan-100 mb-4">
                    🎯 Mission
                  </h2>
                  <p className="text-lg md:text-xl leading-relaxed text-white">
                    Design WHO-compliant oxygen concentrator interfaces for diverse economic user groups across post-COVID India.
                  </p>
                </div>
              </motion.div>

              <div className="flex flex-wrap gap-3 mb-8 justify-center">
                {[
                  { label: "WHO Compliance", icon: "🏥", color: "cyan" },
                  { label: "UX Research", icon: "🎨", color: "blue" },
                  { label: "Medical Device", icon: "🔬", color: "cyan" },
                  { label: "Accessibility Design", icon: "♿", color: "blue" }
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
                <span className="bg-gradient-to-r from-cyan-300 via-blue-300 to-teal-300 bg-clip-text text-transparent">
                  O2C Project
                </span>
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl max-w-5xl mx-auto leading-relaxed text-cyan-100 mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                A comprehensive WHO-compliant UX design case study for oxygen concentrators serving diverse socio-economic segments in post-COVID India.
              </motion.p>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 max-w-5xl mx-auto">
                {[
                  { label: "Client", value: "Merritt Innovation & IISc", icon: "🏛️" },
                  { label: "Duration", value: "5 Months", icon: "⏱️" },
                  { label: "My Role", value: "Senior Product Designer", icon: "👨‍🎨" }
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
                    <h3 className="text-cyan-200 text-sm font-medium mb-2 uppercase tracking-wide">
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
        <div id="objective">
          <ObjectiveMethodologies />
        </div>
        <div id="research">
          <ResearchQuestions />
        </div>
        <div id="personas">
          <UserPersonas />
        </div>
        <div id="findings">
          <KeyFindings />
        </div>
        <div id="solutions">
          <DesignSolutions />
        </div>
        <div id="takeaways">
          <ProjectTakeaways />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default O2CProject;
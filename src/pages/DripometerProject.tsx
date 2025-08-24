
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
import ProcessTimeline from '@/components/dripometer/ProcessTimeline';
import TechnicalArchitecture from '@/components/dripometer/TechnicalArchitecture';

const DripometerProject = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const navigationSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'objective', label: 'Objective' },
    { id: 'research', label: 'Research' },
    { id: 'findings', label: 'Findings' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'methods', label: 'Methods' },
    { id: 'status', label: 'Status' },
    { id: 'timeline', label: 'Timeline' },
    { id: 'architecture', label: 'Architecture' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <StickyNavigation sections={navigationSections} />
      
      <main className="pt-32">
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
              className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background hover:text-emerald-600 transition-all duration-300 border border-border/50 shadow-lg hover:shadow-xl"
              size="icon"
              aria-label="Go back to projects"
            >
              <ArrowLeft size={20} />
            </Button>
          </motion.div>

          <motion.div
            initial={{ scale: 1.1, filter: "blur(4px)" }}
            animate={{ scale: 1, filter: "blur(0px)" }}
            transition={{ duration: 1.5, ease: "easeOut" }}
            className="absolute inset-0"
          >
            <EditableImage 
              src="/lovable-uploads/8c47a62f-b4cc-4527-8ebc-ee8c7518fc4c.png" 
              alt="Dripometer 2.0 - Advanced IV Drip Monitoring Device with digital display and LED indicators"
              className="w-full h-full object-cover"
              fallbackSrc="/placeholder.svg"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
        </section>

        {/* Enhanced Content Tile Section */}
        <section id="overview" className="w-full bg-gradient-to-br from-emerald-50/30 via-white to-teal-50/30 dark:from-emerald-950/20 dark:via-gray-900 dark:to-teal-950/20 border-b">
          <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-6xl mx-auto text-center"
            >
              {/* Enhanced Mission Statement */}
              <motion.div
                className="mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-gradient-to-r from-emerald-100/90 via-emerald-50/80 to-teal-100/90 dark:from-emerald-900/30 dark:via-emerald-950/20 dark:to-teal-900/30 border-2 border-emerald-200/60 dark:border-emerald-800/60 rounded-3xl p-8 mb-10 max-w-5xl mx-auto shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-500">
                  <div className="flex items-center justify-center gap-3 mb-6">
                    <div className="bg-gradient-to-r from-emerald-500 to-emerald-600 p-3 rounded-xl shadow-lg">
                      <span className="text-2xl">🎯</span>
                    </div>
                    <h2 className="text-2xl md:text-3xl font-bold text-emerald-800 dark:text-emerald-200">
                      Mission Statement
                    </h2>
                  </div>
                  <p className="text-xl md:text-2xl leading-relaxed text-emerald-700 dark:text-emerald-300 font-medium">
                    Bringing ICU-grade infusion monitoring to rural clinics, NICUs, and overburdened wards — without ICU costs.
                  </p>
                </div>
              </motion.div>

              {/* Enhanced Badge Section */}
              <div className="flex flex-wrap gap-4 mb-10 justify-center">
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
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                    className="group"
                  >
                    <Badge className={`bg-gradient-to-r from-${badge.color}-100 to-${badge.color}-50 dark:from-${badge.color}-900/40 dark:to-${badge.color}-950/30 text-${badge.color}-800 dark:text-${badge.color}-200 border-2 border-${badge.color}-200/60 dark:border-${badge.color}-800/60 hover:border-${badge.color}-300 dark:hover:border-${badge.color}-700 transition-all duration-300 px-4 py-2 text-sm font-semibold shadow-lg hover:shadow-xl group-hover:scale-105`}>
                      <span className="text-lg mr-2">{badge.icon}</span>
                      {badge.label}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              {/* Enhanced Title */}
              <motion.h1 
                className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold mb-8 bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Dripometer
              </motion.h1>
              
              <motion.p 
                className="text-xl md:text-2xl max-w-4xl mx-auto leading-relaxed text-muted-foreground mb-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                A comprehensive case study demonstrating end-to-end product design methodology — from stakeholder research through deployment-ready prototypes.
              </motion.p>

              {/* Enhanced Project Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                {[
                  { label: "Client", value: "IISc Bangalore", icon: "🏛️", color: "emerald" },
                  { label: "Duration", value: "7 Months", icon: "⏱️", color: "teal" },
                  { label: "My Role", value: "Lead Product Designer", icon: "👨‍🎨", color: "cyan" }
                ].map((item, index) => (
                  <motion.div 
                    key={item.label}
                    className={`bg-gradient-to-br from-${item.color}-50/80 to-white dark:from-${item.color}-950/30 dark:to-gray-900/50 border-2 border-${item.color}-200/50 dark:border-${item.color}-800/50 p-8 rounded-2xl hover:border-${item.color}-300 dark:hover:border-${item.color}-700 transition-all duration-500 shadow-lg hover:shadow-2xl backdrop-blur-sm group`}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.02, y: -5 }}
                  >
                    <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{item.icon}</div>
                    <h3 className={`text-${item.color}-600 dark:text-${item.color}-400 text-sm font-bold mb-3 uppercase tracking-wider`}>
                      {item.label}
                    </h3>
                    <p className="font-bold text-foreground text-xl">{item.value}</p>
                  </motion.div>
                ))}
              </div>
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
        <div id="findings">
          <KeyFindings />
        </div>
        <div id="solutions">
          <DesignSolutions />
        </div>
        <div id="methods">
          <MethodTranslation />
        </div>
        <div id="status">
          <ProjectStatus />
        </div>
        
        {/* Process Timeline */}
        <div id="timeline">
          <ProcessTimeline />
        </div>
        
        {/* Technical Architecture */}
        <div id="architecture">
          <TechnicalArchitecture />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default DripometerProject;

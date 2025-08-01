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
              className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background hover:text-emerald-600 transition-all duration-300 border border-border/50"
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
              src="/lovable-uploads/7fd5c57c-a8aa-4fc9-af30-aaa2cce4294b.png" 
              alt="Dripometer - IV Drip Monitoring Device with LED indicators and digital display"
              className="w-full h-full object-cover"
              fallbackSrc="/placeholder.svg"
            />
          </motion.div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40"></div>
        </section>

        {/* Content Tile Section - Clean Background */}
        <section id="overview" className="w-full bg-background border-b">
          <div className="container mx-auto px-4 md:px-6 py-8 md:py-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-6xl mx-auto text-center"
            >
              {/* Mission Statement */}
              <motion.div
                className="mb-8"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <div className="bg-emerald-100 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-800/30 rounded-2xl p-6 mb-8 max-w-4xl mx-auto">
                  <h2 className="text-xl md:text-2xl font-semibold text-emerald-800 dark:text-emerald-200 mb-4">
                    🎯 Mission
                  </h2>
                  <p className="text-lg md:text-xl leading-relaxed text-emerald-700 dark:text-emerald-300">
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
                    transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  >
                    <Badge className="bg-emerald-100 dark:bg-emerald-900/20 text-emerald-800 dark:text-emerald-200 border border-emerald-200 dark:border-emerald-800/30 hover:bg-emerald-200 dark:hover:bg-emerald-900/30 transition-all duration-300 px-3 py-1">
                      {badge.icon} {badge.label}
                    </Badge>
                  </motion.div>
                ))}
              </div>

              <motion.h1 
                className="font-heading text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.3 }}
              >
                Dripometer
              </motion.h1>
              
              <motion.p 
                className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-muted-foreground mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                A comprehensive case study demonstrating end-to-end product design methodology — from stakeholder research through deployment-ready prototypes.
              </motion.p>

              {/* Project Details Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {[
                  { label: "Client", value: "IISc Bangalore", icon: "🏛️" },
                  { label: "Duration", value: "7 Months", icon: "⏱️" },
                  { label: "My Role", value: "Lead Product Designer", icon: "👨‍🎨" }
                ].map((item, index) => (
                  <motion.div 
                    key={item.label}
                    className="bg-card border border-border p-6 rounded-xl hover:bg-muted/50 transition-all duration-300"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.7 + index * 0.1 }}
                    whileHover={{ scale: 1.02 }}
                  >
                    <div className="text-2xl mb-2">{item.icon}</div>
                    <h3 className="text-muted-foreground text-sm font-medium mb-2 uppercase tracking-wide">
                      {item.label}
                    </h3>
                    <p className="font-semibold text-foreground text-lg">{item.value}</p>
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
import { motion } from 'framer-motion';
import { ArrowLeft, Monitor, ToggleLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EditableImage } from '@/components/ui/editable-image';
import { useNavigate } from 'react-router-dom';
import UniversalStickyNavigation from '@/components/ui/universal-sticky-navigation';
import { ObjectiveMethodologies } from '@/components/pg-research/ObjectiveMethodologies';
import { KeyFindings } from '@/components/pg-research/KeyFindings';
import { DesignSolutions } from '@/components/pg-research/DesignSolutions';
import { MeasurableImpact } from '@/components/pg-research/MeasurableImpact';
import { FutureEnhancements } from '@/components/pg-research/FutureEnhancements';
import { FinalShowcase } from '@/components/pg-research/FinalShowcase';

const PGResearchRazor = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/projects');
  };

  const navigationSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'goals', label: 'Goals' },
    { id: 'audit', label: 'Audit' },
    { id: 'problems', label: 'Problems' },
    { id: 'solutions', label: 'Solutions' },
    { id: 'impact', label: 'Impact' },
    { id: 'future', label: 'Future' },
    { id: 'showcase', label: 'Showcase' }
  ];

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <UniversalStickyNavigation sections={navigationSections} />
      
      {/* Hero Section - "From Legacy to Modern" */}
      <section id="overview" className="w-full relative h-[60vh] overflow-hidden">
        {/* Back button */}
        <motion.div 
          className="absolute top-4 left-4 z-30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button 
            onClick={handleBack}
            variant="secondary" 
            className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background hover:text-blue-600 transition-all duration-300 border border-border/50"
            size="icon"
          >
            <ArrowLeft size={20} />
          </Button>
        </motion.div>

        {/* Animated Legacy-to-Modern Comparison */}
        <motion.div 
          className="absolute inset-0 z-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          {/* Split View Container */}
          <div className="relative w-full h-full flex">
            {/* Legacy Side */}
            <div className="w-1/2 relative overflow-hidden">
              <EditableImage 
                src="/placeholder.svg" 
                alt="Legacy P&G Datalogger Interface"
                className="w-full h-full object-cover grayscale"
                fallbackSrc="/placeholder.svg"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-red-900/60 to-red-800/40"></div>
              <div className="absolute bottom-4 left-4 text-white">
                <div className="text-sm font-medium">BEFORE</div>
                <div className="text-xs opacity-80">Legacy Interface</div>
              </div>
            </div>
            
            {/* Modern Side */}
            <div className="w-1/2 relative overflow-hidden">
              <EditableImage 
                src="/placeholder.svg" 
                alt="Modern P&G Datalogger Interface"
                className="w-full h-full object-cover"
                fallbackSrc="/placeholder.svg"
              />
              <div className="absolute inset-0 bg-gradient-to-l from-blue-900/60 to-blue-800/40"></div>
              <div className="absolute bottom-4 right-4 text-white text-right">
                <div className="text-sm font-medium">AFTER</div>
                <div className="text-xs opacity-80">Modern Interface</div>
              </div>
            </div>

            {/* Center Divider with Toggle Animation */}
            <motion.div 
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-20"
              animate={{ 
                rotate: [0, 180, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <div className="w-16 h-16 bg-background/90 backdrop-blur-sm rounded-full flex items-center justify-center border border-border/50">
                <ToggleLeft className="w-8 h-8 text-blue-600" />
              </div>
            </motion.div>
          </div>
          
          {/* Hero Text Overlay */}
          <div className="absolute inset-0 bg-black/30 z-15"></div>
          <div className="absolute inset-0 flex items-center justify-center z-20">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="text-center text-white max-w-4xl px-4"
            >
              <div className="text-sm font-medium text-blue-200 mb-2">FROM LEGACY TO MODERN</div>
              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-4">
                Reimagining Industrial UX
              </h1>
              <h2 className="text-xl md:text-2xl mb-6 text-gray-200">
                for P&G Datalogger
              </h2>
              <p className="text-lg mb-8 text-gray-300 max-w-2xl mx-auto">
                A complete redesign of the Datalogger application to enhance usability, performance, and reliability
              </p>
              <Button 
                onClick={() => scrollToSection('goals')}
                className="bg-blue-600 hover:bg-blue-700 text-white"
                size="lg"
              >
                View Full Case Study
              </Button>
            </motion.div>
          </div>
        </motion.div>
      </section>

      {/* Project Overview Section */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="flex flex-wrap gap-2 mb-6 justify-center">
                <Badge className="bg-blue-500/10 text-blue-600 border border-blue-500/20">UX Research</Badge>
                <Badge className="bg-blue-500/10 text-blue-600 border border-blue-500/20">UI Design</Badge>
                <Badge className="bg-blue-500/10 text-blue-600 border border-blue-500/20">Accessibility</Badge>
                <Badge className="bg-blue-500/10 text-blue-600 border border-blue-500/20">Industrial Design</Badge>
                <Badge className="bg-blue-500/10 text-blue-600 border border-blue-500/20">Heuristic Evaluation</Badge>
              </div>

              <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
                P&G Datalogger - UX Revamp
              </h2>
              
              <p className="text-muted-foreground max-w-4xl mx-auto leading-relaxed">
                The Datalogger application is a critical tool used by P&G for device data logging and configuration. 
                The legacy system had usability issues, lacked modern design standards, and was prone to user errors. 
                This project aimed to modernize the interface, improve accessibility, and enhance system feedback.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
            >
              <div>
                <h3 className="font-heading text-2xl font-bold mb-6 text-foreground">
                  Critical Industrial Tool
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Used across P&G's global research facilities for device data logging and configuration, 
                  the Datalogger interface needed a complete UX overhaul to meet modern usability standards 
                  while maintaining industrial reliability.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Monitor className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Enhanced usability through heuristic evaluation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <ToggleLeft className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Improved accessibility with dark mode support</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Monitor className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Enhanced security with password protection</span>
                  </div>
                </div>
              </div>
              <div className="bg-background/60 backdrop-blur-sm p-6 rounded-lg border border-border/50">
                <EditableImage 
                  src="/placeholder.svg" 
                  alt="P&G Datalogger Redesigned Dashboard"
                  className="w-full h-64 object-cover rounded-lg"
                  fallbackSrc="/placeholder.svg"
                />
                <div className="mt-4 text-center">
                  <div className="text-sm font-medium text-foreground">Redesigned Dashboard</div>
                  <div className="text-xs text-muted-foreground">Clean interface with logical grouping</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UX Goals & Strategy */}
      <div id="goals">
        <ObjectiveMethodologies />
      </div>

      {/* UX Audit & Key Problems */}
      <div id="audit">
        <KeyFindings />
      </div>

      {/* UX Solutions & Redesign */}
      <div id="solutions">
        <DesignSolutions />
      </div>

      {/* Measurable Impact */}
      <div id="impact">
        <MeasurableImpact />
      </div>

      {/* Future Enhancements */}
      <div id="future">
        <FutureEnhancements />
      </div>

      {/* Final UI Showcase */}
      <div id="showcase">
        <FinalShowcase />
      </div>
    </div>
  );
};

export default PGResearchRazor;
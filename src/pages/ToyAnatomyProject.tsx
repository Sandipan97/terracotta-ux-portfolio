import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { EditableImage } from '@/components/ui/editable-image';
import UniversalStickyNavigation from '@/components/ui/universal-sticky-navigation';
import ObjectiveMethodologies from '@/components/toy-anatomy/ObjectiveMethodologies';
import ResearchQuestions from '@/components/toy-anatomy/ResearchQuestions';
import UserPersonas from '@/components/toy-anatomy/UserPersonas';
import PlatformOverview from '@/components/toy-anatomy/PlatformOverview';
import KeyFeatures from '@/components/toy-anatomy/KeyFeatures';
import MarketInsights from '@/components/toy-anatomy/MarketInsights';
import StrategicVision from '@/components/toy-anatomy/StrategicVision';
import UserJourneys from '@/components/toy-anatomy/UserJourneys';
import PrototypeValidation from '@/components/toy-anatomy/PrototypeValidation';
import FutureVision from '@/components/toy-anatomy/FutureVision';

const ToyAnatomyProject = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const navigationSections = [
    { id: 'overview', label: 'Overview' },
    { id: 'objective', label: 'Objective' },
    { id: 'research', label: 'Research' },
    { id: 'personas', label: 'Personas' },
    { id: 'platform', label: 'Platform' },
    { id: 'features', label: 'Features' },
    { id: 'market', label: 'Market' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'journeys', label: 'Journeys' },
    { id: 'prototype', label: 'Prototype' },
    { id: 'future', label: 'Future' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <UniversalStickyNavigation sections={navigationSections} />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section id="overview" className="w-full relative h-[50vh] overflow-hidden">
          <motion.div 
            className="absolute top-4 left-4 z-30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button 
              onClick={goBack}
              variant="secondary" 
              className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background hover:text-orange-600 transition-all duration-300 border border-border/50"
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
              src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Toy Anatomy - Kids Educational Project"
              className="w-full h-full object-cover"
              fallbackSrc="/placeholder.svg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-orange-900/40 to-amber-900/60 z-10"></div>
          </motion.div>
        </section>

        {/* Project Information */}
        <section className="w-full bg-orange-900/95 backdrop-blur-sm py-12 border-b border-orange-500/20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                <Badge className="bg-white text-orange-900 hover:bg-orange-50 transition-all duration-300 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-900" 
                       tabIndex={0} role="button" aria-label="Mechatronic Design tag">
                  🔌 Mechatronic Design
                </Badge>
                <Badge className="bg-white text-amber-900 hover:bg-amber-50 transition-all duration-300 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-900" 
                       tabIndex={0} role="button" aria-label="STEM Education tag">
                  🧬 STEM Education
                </Badge>
                <Badge className="bg-white text-orange-900 hover:bg-orange-50 transition-all duration-300 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-900" 
                       tabIndex={0} role="button" aria-label="Product Strategy tag">
                  📈 Product Strategy
                </Badge>
              </div>

              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white text-center md:text-left">
                Toy Anatomy - Mechatronic Learning Platform
              </h1>
              
              <p className="text-lg mb-8 text-white text-center md:text-left max-w-4xl leading-relaxed">
                Interactive, modular anatomy simulator that educates children (aged 5–13) through playful, tactile, and mechatronics-enhanced experience — turning human biology into fun, hands-on learning that talks, lights up, and responds to touch.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <motion.div 
                  className="bg-orange-900/30 backdrop-blur-sm p-5 rounded-2xl border border-orange-500/30 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-wide">Client</h3>
                  <p className="font-semibold text-white">IISc Bangalore</p>
                </motion.div>
                
                <motion.div 
                  className="bg-orange-900/30 backdrop-blur-sm p-5 rounded-2xl border border-orange-500/30 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-wide">Duration</h3>
                  <p className="font-semibold text-white">4 Months</p>
                </motion.div>
                
                  <motion.div 
                  className="bg-orange-900/30 backdrop-blur-sm p-5 rounded-2xl border border-orange-500/30 shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-wide">My Role</h3>
                  <p className="font-semibold text-white">Product Designer & Strategist</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Main Content Sections */}
        <div id="objective">
          <ObjectiveMethodologies />
        </div>
        <div id="research">
          <ResearchQuestions />
        </div>
        <div id="personas">
          <UserPersonas />
        </div>
        <div id="platform">
          <PlatformOverview />
        </div>
        <div id="features">
          <KeyFeatures />
        </div>
        <div id="market">
          <MarketInsights />
        </div>
        <div id="strategy">
          <StrategicVision />
        </div>
        <div id="journeys">
          <UserJourneys />
        </div>
        <div id="prototype">
          <PrototypeValidation />
        </div>
        <div id="future">
          <FutureVision />
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default ToyAnatomyProject;
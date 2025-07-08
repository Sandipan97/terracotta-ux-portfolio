import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { EditableImage } from '@/components/ui/editable-image';
import { StickyNavigation } from '@/components/welbilt/StickyNavigation';
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
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      <Navbar />
      <StickyNavigation />
      
      <main className="pt-20">
        {/* Back Button */}
        <section className="w-full py-8">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button 
                onClick={handleBack}
                variant="secondary" 
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                size="icon"
              >
                <ArrowLeft size={20} />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="w-full relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 1.1, filter: "blur(4px)" }}
              animate={{ scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <EditableImage 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="Welbilt Kitchen Connect Hero"
                className="w-full h-full object-cover"
                fallbackSrc="/placeholder.svg"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-blue-900/80"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center text-white"
            >
              <motion.div className="flex flex-wrap gap-2 mb-6 justify-center" variants={itemVariants}>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30">
                  Kitchen Management
                </Badge>
                <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/30">
                  Design System
                </Badge>
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30">
                  Enterprise UX
                </Badge>
              </motion.div>

              <motion.h1 
                className="font-heading text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                variants={itemVariants}
              >
                Welbilt Kitchen Connect
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-4xl font-semibold mb-8 text-blue-300"
                variants={itemVariants}
              >
                Design System & Platform Revamp
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-200"
                variants={itemVariants}
              >
                A comprehensive redesign of Welbilt's kitchen management platform, featuring a complete design system 
                that improved development efficiency by 35% and enhanced user experience across all touchpoints.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* New Structured Content */}
        <ObjectiveMethodologies />
        <EnhancedDesignSolutions />
        <ResearchQuestions />
        <KeyFindings />
        <DetailedSolutions />

        {/* Final Impact Section */}
        <section id="impact" className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-8">
                Transformative Impact
              </h2>
              <blockquote className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto italic leading-relaxed mb-8">
                "A well-crafted design system is not just about consistency—it's about empowering teams to build better experiences faster."
              </blockquote>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-white mb-2">35%</div>
                  <div className="text-blue-100">Development Acceleration</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-white mb-2">85%</div>
                  <div className="text-blue-100">User Satisfaction</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-white mb-2">50+</div>
                  <div className="text-blue-100">Design Components</div>
                </div>
              </div>
              
              <motion.div className="mt-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
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
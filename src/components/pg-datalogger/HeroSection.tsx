import { motion } from 'framer-motion';
import { ArrowLeft, Eye } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';
import { EditableImage } from '@/components/ui/editable-image';

export const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full relative min-h-[70vh] overflow-hidden bg-gradient-to-br from-bengali-terracotta/5 to-bengali-red/10">
      <motion.div 
        className="absolute top-4 left-4 z-30"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Button 
          onClick={() => navigate(-1)}
          variant="secondary" 
          className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background hover:text-bengali-terracotta transition-all duration-300 border border-border/50"
          size="icon"
        >
          <ArrowLeft size={20} />
        </Button>
      </motion.div>

      <div className="container mx-auto px-4 md:px-6 relative z-10 h-full flex items-center min-h-[70vh]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="mb-6">
              <span className="text-bengali-terracotta font-medium uppercase tracking-wide text-sm">
                UX Case Study
              </span>
            </div>
            
            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">
              From Legacy to <span className="text-bengali-terracotta">Modern</span>
            </h1>
            
            <h2 className="text-xl md:text-2xl text-muted-foreground mb-6 font-medium">
              Reimagining Industrial UX for P&G Datalogger
            </h2>
            
            <p className="text-lg mb-8 text-muted-foreground leading-relaxed max-w-xl">
              A complete redesign of the Datalogger application to enhance usability, performance, and reliability.
            </p>
            
            <Button 
              className="bg-bengali-terracotta hover:bg-bengali-red text-white px-8 py-3 text-lg"
              onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
            >
              <Eye className="mr-2 h-5 w-5" />
              View Full Case Study
            </Button>
          </motion.div>

          {/* Animated Comparison */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <div className="bg-background/60 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-xl">
              <div className="text-center mb-4">
                <span className="text-sm font-medium text-muted-foreground">Legacy vs Modern Interface</span>
              </div>
              
              {/* Animated comparison slider */}
              <motion.div 
                className="relative h-64 rounded-lg overflow-hidden border border-border"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="absolute inset-0 grid grid-cols-2">
                  <div className="bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-gray-500 rounded mx-auto mb-2"></div>
                      <span className="text-xs text-gray-700">Legacy UI</span>
                    </div>
                  </div>
                  <div className="bg-gradient-to-br from-bengali-terracotta/20 to-bengali-red/20 flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-bengali-terracotta rounded-lg mx-auto mb-2 shadow-lg"></div>
                      <span className="text-xs text-bengali-terracotta font-medium">Modern UI</span>
                    </div>
                  </div>
                </div>
                
                {/* Animated separator */}
                <motion.div 
                  className="absolute top-0 left-1/2 w-1 h-full bg-white shadow-lg"
                  animate={{ x: [-10, 10, -10] }}
                  transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                ></motion.div>
              </motion.div>

              <div className="mt-4 flex justify-center">
                <motion.div
                  className="flex space-x-2"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  <div className="w-2 h-2 bg-bengali-terracotta rounded-full"></div>
                  <div className="w-2 h-2 bg-bengali-terracotta rounded-full"></div>
                  <div className="w-2 h-2 bg-bengali-terracotta rounded-full"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
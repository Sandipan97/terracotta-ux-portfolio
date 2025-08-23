
import { motion } from 'framer-motion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowDown, Play } from 'lucide-react';
import { OptimizedEditableImage } from '@/components/ui/optimized-editable-image';

const HeroSection = () => {
  const scrollToNext = () => {
    const element = document.getElementById('transformation');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-white via-gray-50 to-blue-50">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, rgba(59, 130, 246, 0.15) 1px, transparent 0)`,
          backgroundSize: '32px 32px'
        }}></div>
      </div>

      {/* Hero Images */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4">
          {/* Before State */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative group"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white border">
              <OptimizedEditableImage 
                src="https://Sandipan97.github.io/terracotta-ux-portfolio/public/lovable-uploads/WBoldDashboard.webp"
                alt="Legacy kitchen management interface"
                className="w-full h-full"
                objectFit="cover"
                editableKey="welbilt-hero-before-image"
                fallbackSrc="/placeholder.svg"
                priority="critical"
                eager={true}
              />
              <div className="absolute inset-0 bg-red-500/20"></div>
              <div className="absolute bottom-4 left-4">
                <Badge variant="outline" className="bg-white/90 text-red-700 border-red-200">
                  <span data-lovable-editable="welbilt-hero-before-badge">Before: Legacy System</span>
                </Badge>
              </div>
            </div>
          </motion.div>

          {/* After State */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.7 }}
            className="relative group"
          >
            <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-white border">
              <OptimizedEditableImage 
                src="https://Sandipan97.github.io/terracotta-ux-portfolio/public/lovable-uploads/WBnewDashboard.webp"
                alt="Modern kitchen management interface"
                className="w-full h-full"
                objectFit="cover"
                editableKey="welbilt-hero-after-image"
                fallbackSrc="/placeholder.svg"
                priority="critical"
                eager={true}
              />
              <div className="absolute inset-0 bg-green-500/20"></div>
              <div className="absolute bottom-4 left-4">
                <Badge variant="outline" className="bg-white/90 text-green-700 border-green-200">
                  <span data-lovable-editable="welbilt-hero-after-badge">After: Modern Design System</span>
                </Badge>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Content Overlay */}
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center bg-white/80 backdrop-blur-sm rounded-3xl p-8 md:p-12 max-w-4xl mx-auto border border-white/20 shadow-xl"
        >
          <motion.div 
            className="flex flex-wrap gap-2 mb-6 justify-center"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <Badge variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
              <span data-lovable-editable="welbilt-hero-badge-1">🏪 Kitchen Management</span>
            </Badge>
            <Badge variant="secondary" className="bg-purple-50 text-purple-700 border-purple-200">
              <span data-lovable-editable="welbilt-hero-badge-2">🎨 Design System</span>
            </Badge>
            <Badge variant="secondary" className="bg-green-50 text-green-700 border-green-200">
              <span data-lovable-editable="welbilt-hero-badge-3">🏢 Enterprise UX</span>
            </Badge>
          </motion.div>

          <motion.h1 
            className="font-heading text-4xl md:text-7xl font-bold mb-6 text-gray-900"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            data-lovable-editable="welbilt-hero-title"
          >
            Welbilt Kitchen Connect
          </motion.h1>
          
          <motion.h2 
            className="text-2xl md:text-4xl font-semibold mb-8 text-gray-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            data-lovable-editable="welbilt-hero-subtitle"
          >
            Design System & Platform Revamp
          </motion.h2>
          
          <motion.p 
            className="text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-gray-600 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            data-lovable-editable="welbilt-hero-description"
          >
            A comprehensive redesign of Welbilt's KITCHENCONNECT platform, featuring a complete design system 
            that gained new customers for Welbilt, increased our revenue, and enhanced user experience across all touchpoints.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
          >
            <Button variant="default" size="lg" className="px-8 py-3 text-lg">
              <Play className="mr-2" size={20} />
              <span data-lovable-editable="welbilt-hero-btn-1">View Case Study</span>
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3 text-lg">
              <span data-lovable-editable="welbilt-hero-btn-2">View Design System</span>
            </Button>
          </motion.div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.8 }}
            className="grid grid-cols-3 gap-4 text-center"
          >
            <div>
              <div className="text-2xl font-bold text-primary" data-lovable-editable="welbilt-hero-stat-1-value">Gained New Customers</div>
              <div className="text-sm text-gray-600" data-lovable-editable="welbilt-hero-stat-1-label">QT, Ice-o-Matic etc</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary" data-lovable-editable="welbilt-hero-stat-2-value">15+</div>
              <div className="text-sm text-gray-600" data-lovable-editable="welbilt-hero-stat-2-label">Interconneted Features</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary" data-lovable-editable="welbilt-hero-stat-3-value">NAFEM 2025</div>
              <div className="text-sm text-gray-600" data-lovable-editable="welbilt-hero-stat-3-label">Peak User Satisfaction</div>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.button
        onClick={scrollToNext}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-3 bg-white/80 backdrop-blur-sm rounded-full shadow-lg border border-white/20 hover:bg-white transition-colors duration-300"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.4, duration: 0.8 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <ArrowDown className="text-gray-600" size={24} />
      </motion.button>
    </section>
  );
};

export default HeroSection;

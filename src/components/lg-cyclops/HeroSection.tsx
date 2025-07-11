import { motion } from 'framer-motion';
import { ArrowLeft, Play, Smartphone, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EditableImage } from '@/components/ui/editable-image';
import { useNavigate } from 'react-router-dom';

export const HeroSection = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className="w-full relative min-h-screen overflow-hidden bg-gradient-to-br from-bengali-terracotta/5 via-background to-bengali-mustard/5">
      {/* Back Button */}
      <motion.div 
        className="absolute top-4 left-4 z-30"
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3, duration: 0.5 }}
      >
        <Button 
          onClick={goBack}
          variant="secondary" 
          className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-bengali-terracotta hover:text-white transition-all duration-300 border border-border/50"
          size="icon"
        >
          <ArrowLeft size={20} />
        </Button>
      </motion.div>

      {/* Floating Appliance Icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-8 h-8 text-bengali-terracotta/20"
            style={{
              left: `${20 + (i * 15)}%`,
              top: `${30 + (i % 3) * 20}%`,
            }}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, -10, 0],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{
              duration: 4 + i * 0.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="w-full h-full bg-current rounded-lg opacity-50" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-4 md:px-6 pt-24 pb-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Badges */}
            <div className="flex flex-wrap gap-3">
              <Badge className="bg-bengali-terracotta text-white hover:bg-bengali-terracotta/90 transition-all duration-300">
                🥽 AR Design
              </Badge>
              <Badge className="bg-bengali-mustard text-bengali-dark hover:bg-bengali-mustard/90 transition-all duration-300">
                📱 Mobile Experience
              </Badge>
              <Badge className="bg-bengali-red text-white hover:bg-bengali-red/90 transition-all duration-300">
                🏠 Smart Home
              </Badge>
            </div>

            {/* Main Headlines */}
            <div className="space-y-4">
              <motion.h1 
                className="font-heading text-4xl md:text-6xl font-bold text-foreground leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                Revolutionizing Product Manuals with{' '}
                <span className="text-bengali-terracotta">Augmented Reality</span>
              </motion.h1>
              
              <motion.p 
                className="text-xl text-muted-foreground leading-relaxed max-w-2xl"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
              >
                An immersive experience that simplifies setup, enhances understanding, and delights users 
                through contextual AR guidance for LG consumer products.
              </motion.p>
            </div>

            {/* CTA Buttons */}
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
            >
              <Button 
                onClick={scrollToDemo}
                className="bg-bengali-terracotta hover:bg-bengali-red text-white px-8 py-6 text-lg font-semibold transition-all duration-300 transform hover:scale-105"
              >
                <Play className="w-5 h-5 mr-2" />
                View Full Case Study
              </Button>
              <Button 
                variant="outline"
                className="border-bengali-terracotta text-bengali-terracotta hover:bg-bengali-terracotta hover:text-white px-8 py-6 text-lg transition-all duration-300"
              >
                <Download className="w-5 h-5 mr-2" />
                Download App
              </Button>
            </motion.div>

            {/* Key Stats */}
            <motion.div 
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border/50"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.0 }}
            >
              <div className="text-center">
                <div className="text-2xl font-bold text-bengali-terracotta">60%</div>
                <div className="text-sm text-muted-foreground">Support Reduction</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-bengali-terracotta">15+</div>
                <div className="text-sm text-muted-foreground">Languages</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold text-bengali-terracotta">95%</div>
                <div className="text-sm text-muted-foreground">Eco Impact</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual Section - AR Demonstration */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            {/* Main AR Demo Visual */}
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-bengali-terracotta/20 to-bengali-mustard/20 rounded-3xl blur-3xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
              
              <motion.div
                className="relative bg-background/50 backdrop-blur-sm border border-bengali-terracotta/20 rounded-3xl p-8 shadow-2xl"
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <EditableImage 
                  src="https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="AR microwave placement demonstration"
                  className="w-full h-80 object-cover rounded-2xl"
                  fallbackSrc="/placeholder.svg"
                />
                
                {/* AR Overlay Animation */}
                <motion.div
                  className="absolute inset-8 rounded-2xl border-2 border-bengali-mustard/50"
                  animate={{
                    scale: [1, 1.05, 1],
                    opacity: [0.5, 0.8, 0.5],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                {/* Floating AR Elements */}
                <div className="absolute -top-4 -right-4 bg-bengali-terracotta text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                  AR Enabled
                </div>
              </motion.div>
            </div>

            {/* Legacy vs Modern Comparison */}
            <motion.div 
              className="mt-8 grid grid-cols-2 gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
            >
              <div className="bg-muted/30 border border-muted-foreground/20 rounded-xl p-4 text-center">
                <div className="text-sm text-muted-foreground mb-2">Before</div>
                <div className="text-xs text-muted-foreground">Complex printed manuals</div>
              </div>
              <div className="bg-bengali-terracotta/10 border border-bengali-terracotta/30 rounded-xl p-4 text-center">
                <div className="text-sm text-bengali-terracotta mb-2">After</div>
                <div className="text-xs text-bengali-terracotta">Intuitive AR guidance</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-bengali-terracotta/50 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-bengali-terracotta rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};
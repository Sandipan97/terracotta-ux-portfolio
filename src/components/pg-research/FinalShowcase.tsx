import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Sun, Moon, Monitor } from 'lucide-react';
import { useState } from 'react';
import { EditableImage } from '@/components/ui/editable-image';
import { Button } from '@/components/ui/button';

export const FinalShowcase = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [currentTheme, setCurrentTheme] = useState<'light' | 'dark'>('light');

  const showcaseItems = [
    {
      title: 'Main Dashboard',
      description: 'Clean, organized interface with logical grouping and clear visual hierarchy',
      lightImage: '/placeholder.svg',
      darkImage: '/placeholder.svg'
    },
    {
      title: 'Alarm Configuration',
      description: 'Streamlined alarm settings with toggle switches and instant feedback',
      lightImage: '/placeholder.svg',
      darkImage: '/placeholder.svg'
    },
    {
      title: 'Time & Date Settings',
      description: 'Simplified time configuration with clear CTAs and validation',
      lightImage: '/placeholder.svg',
      darkImage: '/placeholder.svg'
    },
    {
      title: 'Developer Options',
      description: 'Secure, password-protected developer tools with enhanced safety',
      lightImage: '/placeholder.svg',
      darkImage: '/placeholder.svg'
    },
    {
      title: 'Alert System',
      description: 'Visual toast notifications and in-app alerts for real-time feedback',
      lightImage: '/placeholder.svg',
      darkImage: '/placeholder.svg'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % showcaseItems.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + showcaseItems.length) % showcaseItems.length);
  };

  const currentItem = showcaseItems[currentSlide];
  const currentImage = currentTheme === 'light' ? currentItem.lightImage : currentItem.darkImage;

  return (
    <section id="showcase" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Final UI Showcase
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              A visual celebration of the modernized P&G Datalogger interface, showcasing the transformation from legacy to modern design
            </p>
          </motion.div>

          {/* Theme Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex justify-center mb-8"
          >
            <div className="bg-background/80 backdrop-blur-sm p-2 rounded-lg border border-border/50 flex items-center gap-2">
              <Button
                variant={currentTheme === 'light' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setCurrentTheme('light')}
                className="flex items-center gap-2"
              >
                <Sun className="w-4 h-4" />
                Light Mode
              </Button>
              <Button
                variant={currentTheme === 'dark' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setCurrentTheme('dark')}
                className="flex items-center gap-2"
              >
                <Moon className="w-4 h-4" />
                Dark Mode
              </Button>
            </div>
          </motion.div>

          {/* Main Carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-background/80 backdrop-blur-sm rounded-lg border border-border/50 overflow-hidden"
          >
            {/* Carousel Header */}
            <div className="bg-muted/30 p-6 border-b border-border/50">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-xl text-foreground mb-2">
                    {currentItem.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {currentItem.description}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={prevSlide}
                    className="hover:bg-muted/50"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </Button>
                  <span className="text-sm text-muted-foreground px-3">
                    {currentSlide + 1} of {showcaseItems.length}
                  </span>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={nextSlide}
                    className="hover:bg-muted/50"
                  >
                    <ChevronRight className="w-5 h-5" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Carousel Content */}
            <div className="relative">
              <motion.div
                key={`${currentSlide}-${currentTheme}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3 }}
                className="aspect-video"
              >
                <EditableImage 
                  src={currentImage}
                  alt={`${currentItem.title} - ${currentTheme} mode`}
                  className="w-full h-full object-cover"
                  fallbackSrc="/placeholder.svg"
                />
              </motion.div>

              {/* Theme Indicator */}
              <div className="absolute top-4 right-4 bg-background/90 backdrop-blur-sm px-3 py-1 rounded-full flex items-center gap-2 text-sm">
                {currentTheme === 'light' ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                {currentTheme === 'light' ? 'Light Mode' : 'Dark Mode'}
              </div>
            </div>

            {/* Navigation Dots */}
            <div className="p-6 flex justify-center">
              <div className="flex gap-2">
                {showcaseItems.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-200 ${
                      index === currentSlide
                        ? 'bg-blue-600 scale-110'
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Design Alignment Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-12 text-center"
          >
            <div className="bg-gradient-to-br from-blue-50 to-green-50 dark:from-blue-950/20 dark:to-green-950/20 p-8 rounded-lg border border-blue-200/50 dark:border-blue-800/50">
              <Monitor className="w-12 h-12 text-blue-600 mx-auto mb-4" />
              <h3 className="font-heading text-xl font-bold text-foreground mb-4">
                Modern UX Standards Achieved
              </h3>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                The redesigned P&G Datalogger interface now aligns with contemporary UX standards while 
                maintaining the robust functionality required for industrial applications. The new design 
                enhances user productivity, reduces errors, and provides a more accessible experience for 
                all users across P&G's global operations.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
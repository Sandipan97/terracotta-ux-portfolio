import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Monitor, Smartphone, Tablet, Sun, Moon, Play, Pause, ChevronLeft, ChevronRight } from 'lucide-react';

export const FinalUIShowcase = () => {
  const [currentView, setCurrentView] = useState(0);
  const [isDark, setIsDark] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);

  const showcaseViews = [
    {
      title: "Main Dashboard",
      description: "Clean, organized interface with logical grouping and clear navigation",
      device: "desktop"
    },
    {
      title: "Device Configuration",
      description: "Intuitive settings panel with real-time feedback and validation",
      device: "desktop"
    },
    {
      title: "Alert System",
      description: "Comprehensive notification system with visual and contextual alerts",
      device: "desktop"
    },
    {
      title: "Mobile Experience",
      description: "Fully responsive design optimized for mobile and tablet devices",
      device: "mobile"
    },
    {
      title: "Dark Mode",
      description: "Professional dark theme with optimized contrast and accessibility",
      device: "desktop"
    }
  ];

  const features = [
    "Logical information architecture",
    "Real-time system feedback",
    "Enhanced security controls",
    "Accessibility compliance",
    "Responsive design",
    "Theme customization"
  ];

  const nextView = () => {
    setCurrentView((prev) => (prev + 1) % showcaseViews.length);
  };

  const prevView = () => {
    setCurrentView((prev) => (prev - 1 + showcaseViews.length) % showcaseViews.length);
  };

  // Auto-advance carousel
  useEffect(() => {
    if (!isPlaying) return;
    
    const interval = setInterval(() => {
      nextView();
    }, 4000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Final UI Showcase
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A visual celebration of the final product, showcasing how the redesign aligns with 
              modern UX standards and enhances the overall user experience.
            </p>
          </div>

          {/* Interactive Showcase */}
          <div className="bg-background border border-border rounded-2xl p-8 shadow-lg mb-12">
            {/* Controls */}
            <div className="flex flex-wrap items-center justify-between mb-8 gap-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => setIsPlaying(!isPlaying)}
                  className="flex items-center space-x-2 px-4 py-2 bg-bengali-terracotta hover:bg-bengali-red text-white rounded-lg transition-all duration-300"
                >
                  {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  <span className="text-sm">{isPlaying ? 'Pause' : 'Play'}</span>
                </button>

                <div className="flex items-center space-x-2">
                  <button
                    onClick={prevView}
                    className="p-2 border border-border rounded-lg hover:bg-muted transition-colors duration-300"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={nextView}
                    className="p-2 border border-border rounded-lg hover:bg-muted transition-colors duration-300"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Monitor className="w-5 h-5 text-muted-foreground" />
                  <Tablet className="w-5 h-5 text-muted-foreground" />
                  <Smartphone className="w-5 h-5 text-muted-foreground" />
                </div>

                <button
                  onClick={() => setIsDark(!isDark)}
                  className="flex items-center space-x-2 px-3 py-2 border border-border rounded-lg hover:bg-muted transition-colors duration-300"
                >
                  {isDark ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
                  <span className="text-sm">{isDark ? 'Light' : 'Dark'}</span>
                </button>
              </div>
            </div>

            {/* Main Showcase Area */}
            <div className="relative">
              <motion.div
                key={currentView}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="text-center mb-6"
              >
                <h3 className="text-xl font-bold text-foreground mb-2">
                  {showcaseViews[currentView].title}
                </h3>
                <p className="text-muted-foreground">
                  {showcaseViews[currentView].description}
                </p>
              </motion.div>

              {/* Mockup Display */}
              <motion.div
                key={`${currentView}-${isDark}`}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className={`relative mx-auto rounded-2xl border-2 overflow-hidden transition-all duration-500 ${
                  showcaseViews[currentView].device === 'mobile' 
                    ? 'max-w-sm aspect-[9/16]' 
                    : 'max-w-4xl aspect-[16/10]'
                } ${
                  isDark 
                    ? 'bg-gray-900 border-gray-700' 
                    : 'bg-white border-gray-200'
                }`}
              >
                {/* Header Bar */}
                <div className={`h-12 border-b flex items-center px-4 ${
                  isDark 
                    ? 'bg-gray-800 border-gray-700' 
                    : 'bg-gray-50 border-gray-200'
                }`}>
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  <div className={`flex-1 text-center text-sm font-medium ${
                    isDark ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    P&G Datalogger - {showcaseViews[currentView].title}
                  </div>
                </div>

                {/* Content Area */}
                <div className={`p-6 h-full ${
                  isDark ? 'bg-gray-900' : 'bg-white'
                }`}>
                  {/* Navigation */}
                  <div className={`flex items-center space-x-4 mb-6 pb-4 border-b ${
                    isDark ? 'border-gray-700' : 'border-gray-200'
                  }`}>
                    <div className="bg-bengali-terracotta/20 p-2 rounded-lg">
                      <Monitor className="w-5 h-5 text-bengali-terracotta" />
                    </div>
                    <h4 className={`font-semibold ${isDark ? 'text-white' : 'text-gray-900'}`}>
                      {showcaseViews[currentView].title}
                    </h4>
                  </div>

                  {/* Content Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                    <div className={`p-4 rounded-lg border ${
                      isDark 
                        ? 'bg-gray-800 border-gray-700' 
                        : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-bengali-terracotta rounded-full"></div>
                        <span className={`text-sm font-medium ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          System Status
                        </span>
                      </div>
                      <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        Connected and operational
                      </div>
                    </div>

                    <div className={`p-4 rounded-lg border ${
                      isDark 
                        ? 'bg-gray-800 border-gray-700' 
                        : 'bg-gray-50 border-gray-200'
                    }`}>
                      <div className="flex items-center space-x-2 mb-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                        <span className={`text-sm font-medium ${
                          isDark ? 'text-gray-300' : 'text-gray-700'
                        }`}>
                          Data Logging
                        </span>
                      </div>
                      <div className={`text-xs ${isDark ? 'text-gray-400' : 'text-gray-500'}`}>
                        Active recording
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-3">
                    <button className="px-4 py-2 bg-bengali-terracotta hover:bg-bengali-red text-white rounded-lg text-sm transition-colors duration-300">
                      Configure
                    </button>
                    <button className={`px-4 py-2 border rounded-lg text-sm transition-colors duration-300 ${
                      isDark
                        ? 'border-gray-600 text-gray-300 hover:bg-gray-800'
                        : 'border-gray-300 text-gray-700 hover:bg-gray-50'
                    }`}>
                      View Logs
                    </button>
                  </div>
                </div>
              </motion.div>

              {/* Progress Indicators */}
              <div className="flex justify-center space-x-2 mt-6">
                {showcaseViews.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentView(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentView 
                        ? 'bg-bengali-terracotta scale-125' 
                        : 'bg-muted hover:bg-bengali-terracotta/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Key Features Grid */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12"
          >
            {features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-border p-6 rounded-xl hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-bengali-terracotta rounded-full"></div>
                  <span className="text-foreground font-medium">{feature}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Final Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-bengali-terracotta/5 p-8 rounded-2xl border border-bengali-terracotta/20 text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Modern UX Standards Achieved
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              The redesigned P&G Datalogger represents a successful transformation from legacy industrial 
              software to a modern, user-centered application that prioritizes efficiency, security, and 
              accessibility while maintaining the robust functionality required for industrial operations.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
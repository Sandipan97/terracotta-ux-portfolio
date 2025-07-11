import { motion } from 'framer-motion';
import { Monitor, Sun, Moon, Lock, Clock, Bell, Settings, Shield, Database, Zap } from 'lucide-react';
import { useState } from 'react';

export const DesignSystemComponents = () => {
  const [isDark, setIsDark] = useState(false);

  const components = [
    {
      title: "Login Modal",
      icon: Lock,
      category: "Authentication",
      description: "Secure access with password protection"
    },
    {
      title: "Time/Date Picker",
      icon: Clock,
      category: "Input Controls",
      description: "Intuitive time and date selection"
    },
    {
      title: "Alert System",
      icon: Bell,
      category: "Feedback",
      description: "Toast notifications and system alerts"
    },
    {
      title: "Theme Toggle",
      icon: isDark ? Sun : Moon,
      category: "Interface",
      description: "Dark/Light mode switching"
    },
    {
      title: "Developer Options",
      icon: Settings,
      category: "Advanced",
      description: "Protected developer settings panel"
    },
    {
      title: "Device Status",
      icon: Monitor,
      category: "Monitoring",
      description: "Real-time device status display"
    },
    {
      title: "Security Panel",
      icon: Shield,
      category: "Security",
      description: "Role-based access controls"
    },
    {
      title: "Data Configuration",
      icon: Database,
      category: "Configuration",
      description: "Buffer size and capture rate settings"
    },
    {
      title: "Auto-Reconnect",
      icon: Zap,
      category: "Connectivity",
      description: "Automatic connection management"
    }
  ];

  return (
    <section className="py-16 bg-gradient-to-br from-bengali-terracotta/5 to-bengali-red/10">
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
              Design System & Components
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto mb-8">
              A robust design system created with modular components, supporting both light and dark themes 
              with accessibility standards and responsive layouts.
            </p>
            
            {/* Theme Toggle */}
            <motion.button
              onClick={() => setIsDark(!isDark)}
              className="inline-flex items-center px-6 py-3 bg-bengali-terracotta hover:bg-bengali-red text-white rounded-lg transition-all duration-300"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              {isDark ? <Sun className="w-5 h-5 mr-2" /> : <Moon className="w-5 h-5 mr-2" />}
              {isDark ? 'Switch to Light' : 'Switch to Dark'}
            </motion.button>
          </div>

          {/* Component Gallery */}
          <div className={`p-8 rounded-2xl border transition-all duration-500 ${
            isDark 
              ? 'bg-gray-900 border-gray-700' 
              : 'bg-background border-border'
          }`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {components.map((component, index) => (
                <motion.div
                  key={component.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group"
                >
                  <div className={`p-6 rounded-xl border transition-all duration-300 hover:shadow-lg ${
                    isDark
                      ? 'bg-gray-800 border-gray-600 hover:border-orange-500'
                      : 'bg-background border-border hover:border-bengali-terracotta/50'
                  }`}>
                    <div className="flex items-center justify-between mb-4">
                      <div className={`p-3 rounded-lg transition-all duration-300 ${
                        isDark
                          ? 'bg-orange-500/20 group-hover:bg-orange-500/30'
                          : 'bg-bengali-terracotta/10 group-hover:bg-bengali-terracotta/20'
                      }`}>
                        <component.icon className={`w-6 h-6 transition-colors duration-300 ${
                          isDark
                            ? 'text-orange-400 group-hover:text-orange-300'
                            : 'text-bengali-terracotta group-hover:text-bengali-red'
                        }`} />
                      </div>
                      <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                        isDark
                          ? 'bg-gray-700 text-gray-300'
                          : 'bg-muted text-muted-foreground'
                      }`}>
                        {component.category}
                      </span>
                    </div>

                    <h3 className={`font-semibold mb-2 transition-colors duration-300 ${
                      isDark
                        ? 'text-white group-hover:text-orange-300'
                        : 'text-foreground group-hover:text-bengali-terracotta'
                    }`}>
                      {component.title}
                    </h3>
                    
                    <p className={`text-sm ${
                      isDark ? 'text-gray-400' : 'text-muted-foreground'
                    }`}>
                      {component.description}
                    </p>

                    {/* Component Preview */}
                    <div className={`mt-4 h-20 rounded-lg border-2 border-dashed flex items-center justify-center transition-all duration-300 ${
                      isDark
                        ? 'border-gray-600 bg-gray-700/50 group-hover:border-orange-500/50'
                        : 'border-border bg-muted/50 group-hover:border-bengali-terracotta/50'
                    }`}>
                      <span className={`text-xs ${
                        isDark ? 'text-gray-500' : 'text-muted-foreground'
                      }`}>
                        Component Preview
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Design System Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            >
              <div className={`text-center p-6 rounded-xl border ${
                isDark
                  ? 'bg-gray-800 border-gray-600'
                  : 'bg-background border-border'
              }`}>
                <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  isDark
                    ? 'bg-orange-500/20'
                    : 'bg-bengali-terracotta/10'
                }`}>
                  <Sun className={`w-6 h-6 ${
                    isDark ? 'text-orange-400' : 'text-bengali-terracotta'
                  }`} />
                </div>
                <h4 className={`font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-foreground'
                }`}>
                  Theme Support
                </h4>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-muted-foreground'
                }`}>
                  Complete light and dark mode implementation
                </p>
              </div>

              <div className={`text-center p-6 rounded-xl border ${
                isDark
                  ? 'bg-gray-800 border-gray-600'
                  : 'bg-background border-border'
              }`}>
                <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  isDark
                    ? 'bg-orange-500/20'
                    : 'bg-bengali-terracotta/10'
                }`}>
                  <Monitor className={`w-6 h-6 ${
                    isDark ? 'text-orange-400' : 'text-bengali-terracotta'
                  }`} />
                </div>
                <h4 className={`font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-foreground'
                }`}>
                  Responsive Design
                </h4>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-muted-foreground'
                }`}>
                  Mobile-first responsive components
                </p>
              </div>

              <div className={`text-center p-6 rounded-xl border ${
                isDark
                  ? 'bg-gray-800 border-gray-600'
                  : 'bg-background border-border'
              }`}>
                <div className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center ${
                  isDark
                    ? 'bg-orange-500/20'
                    : 'bg-bengali-terracotta/10'
                }`}>
                  <Shield className={`w-6 h-6 ${
                    isDark ? 'text-orange-400' : 'text-bengali-terracotta'
                  }`} />
                </div>
                <h4 className={`font-semibold mb-2 ${
                  isDark ? 'text-white' : 'text-foreground'
                }`}>
                  Accessibility
                </h4>
                <p className={`text-sm ${
                  isDark ? 'text-gray-400' : 'text-muted-foreground'
                }`}>
                  WCAG compliant with proper contrast ratios
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
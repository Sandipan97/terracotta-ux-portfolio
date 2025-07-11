import { motion } from 'framer-motion';
import { CheckCircle, Layout, Moon, Bell, Clock, Shield, Settings, AlertCircle } from 'lucide-react';

export const UXSolutionsRedesign = () => {
  const solutions = [
    {
      icon: Layout,
      title: "Clear Headers & Logical Grouping",
      description: "Added structured navigation with clear categorization and visual hierarchy",
      beforeDesc: "No clear organization",
      afterDesc: "Structured sections with headers"
    },
    {
      icon: Moon,
      title: "Dark/Light Mode Toggle",
      description: "Implemented theme switching for optimal viewing in different environments",
      beforeDesc: "Single light theme only",
      afterDesc: "Dynamic theme switching"
    },
    {
      icon: Bell,
      title: "Visual Alert System",
      description: "Built comprehensive toast notification system for real-time feedback",
      beforeDesc: "Hidden serial port alerts",
      afterDesc: "Prominent visual notifications"
    },
    {
      icon: Clock,
      title: "Simplified Time Setting",
      description: "Streamlined time configuration with clear CTAs and mode selection",
      beforeDesc: "Confusing multiple modes",
      afterDesc: "Intuitive time controls"
    },
    {
      icon: Shield,
      title: "Password Protection",
      description: "Added authentication layer for developer options and sensitive settings",
      beforeDesc: "Open access to all settings",
      afterDesc: "Secured admin access"
    },
    {
      icon: Settings,
      title: "Grouped Alarm Settings",
      description: "Consolidated alarm configuration with toggle controls and immediate feedback",
      beforeDesc: "Scattered across interface",
      afterDesc: "Centralized alarm controls"
    },
    {
      icon: AlertCircle,
      title: "System Status Display",
      description: "Disabled conflicting actions during read/write operations with clear status",
      beforeDesc: "No operation feedback",
      afterDesc: "Real-time status updates"
    },
    {
      icon: CheckCircle,
      title: "Crash Alert System",
      description: "Added crash detection with troubleshooting steps and recovery options",
      beforeDesc: "Hidden system crashes",
      afterDesc: "Visible crash alerts with guidance"
    }
  ];

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
              UX Solutions & Redesign
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Systematic implementation of design solutions that address each identified problem 
              with user-centered improvements.
            </p>
          </div>

          <div className="space-y-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.title}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background border border-border rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300"
              >
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  {/* Content */}
                  <div className="p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <div className="bg-bengali-terracotta/10 p-3 rounded-lg mr-4">
                        <solution.icon className="w-6 h-6 text-bengali-terracotta" />
                      </div>
                      <span className="text-xs font-medium text-bengali-terracotta uppercase tracking-wide">
                        Solution {index + 1}
                      </span>
                    </div>
                    
                    <h3 className="font-bold text-foreground mb-3 text-xl">
                      {solution.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {solution.description}
                    </p>

                    <div className="space-y-3">
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-red-500 rounded-full mr-3"></div>
                        <span className="text-sm text-muted-foreground">
                          <strong>Before:</strong> {solution.beforeDesc}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-3"></div>
                        <span className="text-sm text-muted-foreground">
                          <strong>After:</strong> {solution.afterDesc}
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Before/After Mockup */}
                  <div className="bg-muted/30 p-8 flex items-center justify-center">
                    <div className="w-full max-w-md">
                      <div className="text-center mb-4">
                        <span className="text-sm font-medium text-muted-foreground">Before / After</span>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-4">
                        {/* Before */}
                        <div className="bg-gray-300 h-32 rounded-lg flex items-center justify-center border-2 border-red-200">
                          <span className="text-gray-600 text-xs text-center px-2">Legacy UI</span>
                        </div>
                        
                        {/* After */}
                        <div className="bg-gradient-to-br from-bengali-terracotta/20 to-bengali-red/20 h-32 rounded-lg flex items-center justify-center border-2 border-bengali-terracotta/30">
                          <span className="text-bengali-terracotta text-xs text-center px-2 font-medium">Modern UI</span>
                        </div>
                      </div>

                      {/* Animation indicator */}
                      <div className="flex justify-center mt-4">
                        <motion.div
                          className="flex space-x-1"
                          animate={{ opacity: [0.5, 1, 0.5] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <div className="w-2 h-2 bg-bengali-terracotta rounded-full"></div>
                          <div className="w-2 h-2 bg-bengali-terracotta rounded-full"></div>
                          <div className="w-2 h-2 bg-bengali-terracotta rounded-full"></div>
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Implementation Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-bengali-terracotta/5 p-8 rounded-2xl border border-bengali-terracotta/20"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Implementation Highlights
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <CheckCircle className="w-12 h-12 text-bengali-terracotta mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">User-Centered Design</h4>
                <p className="text-muted-foreground text-sm">Every solution based on user needs and workflow optimization</p>
              </div>
              
              <div className="text-center">
                <Shield className="w-12 h-12 text-bengali-terracotta mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Enhanced Security</h4>
                <p className="text-muted-foreground text-sm">Role-based access and authentication for sensitive operations</p>
              </div>
              
              <div className="text-center">
                <Bell className="w-12 h-12 text-bengali-terracotta mx-auto mb-3" />
                <h4 className="font-semibold text-foreground mb-2">Real-Time Feedback</h4>
                <p className="text-muted-foreground text-sm">Comprehensive notification system for system transparency</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
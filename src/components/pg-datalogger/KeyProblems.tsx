import { motion } from 'framer-motion';
import { AlertTriangle, Eye, Shield, Clock, Zap, Settings, Bell, Bug } from 'lucide-react';

export const KeyProblems = () => {
  const problems = [
    {
      icon: Eye,
      title: "No Clear Categorization",
      description: "No clear categorization or headers to organize information",
      impact: "High",
      impactColor: "bg-red-500"
    },
    {
      icon: Settings,
      title: "Missing Dark Mode",
      description: "No dark mode toggle for different lighting conditions",
      impact: "Medium",
      impactColor: "bg-orange-500"
    },
    {
      icon: Bell,
      title: "Hidden Alerts",
      description: "Alerts only visible via serial port, not in the UI",
      impact: "High",
      impactColor: "bg-red-500"
    },
    {
      icon: Clock,
      title: "Confusing Time Setting",
      description: "Multiple time modes without clear guidance or CTAs",
      impact: "High",
      impactColor: "bg-red-500"
    },
    {
      icon: Shield,
      title: "No Password Protection",
      description: "Developer options accessible without authentication",
      impact: "Critical",
      impactColor: "bg-red-600"
    },
    {
      icon: Zap,
      title: "Scattered Alarm Settings",
      description: "Alarm configuration spread across interface without logic",
      impact: "Medium",
      impactColor: "bg-orange-500"
    },
    {
      icon: Bug,
      title: "Hidden System Crashes",
      description: "System crashes not reflected in user interface",
      impact: "Critical",
      impactColor: "bg-red-600"
    },
    {
      icon: AlertTriangle,
      title: "Illogical Button Placement",
      description: "Important buttons placed in counterintuitive locations",
      impact: "Medium",
      impactColor: "bg-orange-500"
    }
  ];

  return (
    <section className="py-16 bg-muted/30">
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
              Key UX Problems Identified
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Through comprehensive analysis, we identified critical usability issues that were 
              impacting user efficiency and system reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {problems.map((problem, index) => (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <div className="bg-background p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  {/* Impact indicator */}
                  <div className="flex items-center justify-between mb-4">
                    <problem.icon className="w-8 h-8 text-bengali-terracotta" />
                    <div className="flex items-center space-x-2">
                      <div className={`w-3 h-3 rounded-full ${problem.impactColor}`}></div>
                      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wide">
                        {problem.impact}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-semibold text-foreground mb-3 text-lg group-hover:text-bengali-terracotta transition-colors duration-300">
                    {problem.title}
                  </h3>
                  
                  <p className="text-muted-foreground text-sm mb-4">
                    {problem.description}
                  </p>

                  {/* Problem illustration */}
                  <div className="bg-muted/50 h-24 rounded-lg flex items-center justify-center border border-border group-hover:border-bengali-terracotta/30 transition-colors duration-300">
                    <span className="text-xs text-muted-foreground">UI Issue Screenshot</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Impact Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-background p-8 rounded-2xl border border-border shadow-lg"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Problem Impact Analysis
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <div className="text-center">
                <div className="bg-red-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  3
                </div>
                <h4 className="font-semibold text-foreground mb-1">Critical Issues</h4>
                <p className="text-muted-foreground text-sm">Requiring immediate attention</p>
              </div>
              
              <div className="text-center">
                <div className="bg-red-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  3
                </div>
                <h4 className="font-semibold text-foreground mb-1">High Impact</h4>
                <p className="text-muted-foreground text-sm">Significantly affecting UX</p>
              </div>
              
              <div className="text-center">
                <div className="bg-orange-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  2
                </div>
                <h4 className="font-semibold text-foreground mb-1">Medium Impact</h4>
                <p className="text-muted-foreground text-sm">Moderate usability concerns</p>
              </div>
              
              <div className="text-center">
                <div className="bg-bengali-terracotta text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-xl">
                  8
                </div>
                <h4 className="font-semibold text-foreground mb-1">Total Issues</h4>
                <p className="text-muted-foreground text-sm">Identified and prioritized</p>
              </div>
            </div>

            <div className="mt-8 p-6 bg-muted/30 rounded-xl">
              <h4 className="font-semibold text-foreground mb-3 flex items-center">
                <AlertTriangle className="w-5 h-5 text-bengali-terracotta mr-2" />
                Key Insights
              </h4>
              <ul className="space-y-2 text-muted-foreground text-sm">
                <li>• Security vulnerabilities posed significant operational risks</li>
                <li>• Information architecture issues created user confusion and errors</li>
                <li>• Lack of visual feedback reduced system transparency and trust</li>
                <li>• Poor organization led to inefficient workflows and task completion</li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
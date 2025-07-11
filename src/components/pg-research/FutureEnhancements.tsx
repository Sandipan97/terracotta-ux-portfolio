import { motion } from 'framer-motion';
import { Users, BarChart3, TestTube, Zap, Shield, Smartphone } from 'lucide-react';

export const FutureEnhancements = () => {
  const enhancements = [
    {
      title: 'Role-based Access Control',
      description: 'Implement granular permissions for different user types and departments',
      icon: Shield,
      timeline: 'Q1 2024',
      priority: 'High',
      color: 'blue'
    },
    {
      title: 'Full User Management',
      description: 'Complete user lifecycle management with profiles and preferences',
      icon: Users,
      timeline: 'Q2 2024',
      priority: 'High',
      color: 'green'
    },
    {
      title: 'Usability Testing',
      description: 'Comprehensive testing with real users in production environments',
      icon: TestTube,
      timeline: 'Q2 2024',
      priority: 'Medium',
      color: 'purple'
    },
    {
      title: 'Performance Profiling',
      description: 'Advanced monitoring and optimization of system performance',
      icon: Zap,
      timeline: 'Q3 2024',
      priority: 'Medium',
      color: 'orange'
    },
    {
      title: 'Feature Usage Analytics',
      description: 'Data-driven insights into user behavior and feature adoption',
      icon: BarChart3,
      timeline: 'Q3 2024',
      priority: 'Low',
      color: 'teal'
    },
    {
      title: 'Mobile Companion App',
      description: 'Mobile interface for remote monitoring and basic configuration',
      icon: Smartphone,
      timeline: 'Q4 2024',
      priority: 'Low',
      color: 'red'
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      blue: 'bg-blue-600/10 text-blue-600 border-blue-200 dark:border-blue-800',
      green: 'bg-green-600/10 text-green-600 border-green-200 dark:border-green-800',
      purple: 'bg-purple-600/10 text-purple-600 border-purple-200 dark:border-purple-800',
      orange: 'bg-orange-600/10 text-orange-600 border-orange-200 dark:border-orange-800',
      teal: 'bg-teal-600/10 text-teal-600 border-teal-200 dark:border-teal-800',
      red: 'bg-red-600/10 text-red-600 border-red-200 dark:border-red-800'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High':
        return 'bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300';
      case 'Medium':
        return 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300';
      case 'Low':
        return 'bg-green-100 text-green-700 dark:bg-green-900 dark:text-green-300';
      default:
        return 'bg-gray-100 text-gray-700 dark:bg-gray-900 dark:text-gray-300';
    }
  };

  return (
    <section id="future" className="py-16 bg-muted/30">
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
              Future Enhancements
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Strategic roadmap for continued improvement and expansion of the P&G Datalogger system
            </p>
          </motion.div>

          {/* Roadmap Timeline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-background/80 backdrop-blur-sm p-8 rounded-lg border border-border/50 mb-12"
          >
            <h3 className="font-semibold text-xl text-foreground mb-6 text-center">
              2024 Development Roadmap
            </h3>
            
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-600 to-green-600"></div>
              
              <div className="space-y-8">
                {['Q1 2024', 'Q2 2024', 'Q3 2024', 'Q4 2024'].map((quarter, index) => {
                  const quarterEnhancements = enhancements.filter(e => e.timeline === quarter);
                  
                  return (
                    <div key={quarter} className="relative flex items-start">
                      <div className="absolute left-6 w-4 h-4 bg-blue-600 rounded-full border-4 border-background"></div>
                      <div className="ml-16">
                        <h4 className="font-semibold text-lg text-foreground mb-4">{quarter}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                          {quarterEnhancements.map((enhancement, enhIndex) => (
                            <div 
                              key={enhancement.title}
                              className={`bg-background/60 p-4 rounded-lg border ${getColorClasses(enhancement.color)}`}
                            >
                              <div className="flex items-center justify-between mb-2">
                                <enhancement.icon className="w-5 h-5" />
                                <span className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(enhancement.priority)}`}>
                                  {enhancement.priority}
                                </span>
                              </div>
                              <h5 className="font-medium text-foreground mb-1">{enhancement.title}</h5>
                              <p className="text-sm text-muted-foreground">{enhancement.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Enhancement Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {enhancements.map((enhancement, index) => (
              <motion.div
                key={enhancement.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`bg-background/80 backdrop-blur-sm p-6 rounded-lg border ${getColorClasses(enhancement.color)} hover:shadow-lg transition-all duration-300 group cursor-pointer`}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-10 h-10 ${getColorClasses(enhancement.color)} rounded-lg flex items-center justify-center`}>
                    <enhancement.icon className="w-5 h-5" />
                  </div>
                  <div className="text-right">
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${getPriorityColor(enhancement.priority)} mb-1`}>
                      {enhancement.priority}
                    </div>
                    <div className="text-sm text-muted-foreground">{enhancement.timeline}</div>
                  </div>
                </div>
                
                <h3 className="font-semibold text-lg text-foreground mb-3 group-hover:text-blue-600 transition-colors">
                  {enhancement.title}
                </h3>
                
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {enhancement.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
import { motion } from 'framer-motion';
import { Users, Settings, TestTube, BarChart3, Zap, MapPin, ArrowRight, Calendar } from 'lucide-react';
import { useState } from 'react';

export const FutureEnhancements = () => {
  const [hoveredFeature, setHoveredFeature] = useState<number | null>(null);

  const roadmapItems = [
    {
      icon: Users,
      title: "Role-Based Access Control",
      description: "Implement comprehensive user roles with granular permissions for different organizational levels",
      timeline: "Q2 2024",
      priority: "High",
      details: "Advanced user management with custom roles, permissions, and audit trails",
      status: "planning"
    },
    {
      icon: Settings,
      title: "Full User Management System",
      description: "Complete user lifecycle management with onboarding, training modules, and activity tracking",
      timeline: "Q3 2024",
      priority: "High",
      details: "User profiles, preferences, training completion tracking, and performance analytics",
      status: "research"
    },
    {
      icon: TestTube,
      title: "Usability Testing Program",
      description: "Establish ongoing usability testing with real users across different industrial environments",
      timeline: "Q2 2024",
      priority: "Medium",
      details: "Regular user testing sessions, A/B testing framework, and continuous feedback loops",
      status: "upcoming"
    },
    {
      icon: BarChart3,
      title: "Performance Analytics",
      description: "Advanced profiling and monitoring tools for system performance optimization",
      timeline: "Q4 2024",
      priority: "Medium",
      details: "Real-time performance monitoring, bottleneck identification, and optimization recommendations",
      status: "planning"
    },
    {
      icon: Zap,
      title: "Feature Usage Analytics",
      description: "Comprehensive analytics to understand feature adoption and user behavior patterns",
      timeline: "Q3 2024",
      priority: "Medium",
      details: "Heat maps, user journey analytics, feature usage statistics, and behavioral insights",
      status: "research"
    },
    {
      icon: MapPin,
      title: "Multi-Location Support",
      description: "Extend system capabilities for multiple facility management and centralized monitoring",
      timeline: "Q1 2025",
      priority: "Low",
      details: "Cross-facility data synchronization, centralized dashboards, and location-based configurations",
      status: "future"
    }
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'planning': return 'bg-yellow-500';
      case 'research': return 'bg-blue-500';
      case 'upcoming': return 'bg-green-500';
      case 'future': return 'bg-purple-500';
      default: return 'bg-gray-500';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'text-red-500 bg-red-50 border-red-200';
      case 'Medium': return 'text-orange-500 bg-orange-50 border-orange-200';
      case 'Low': return 'text-green-500 bg-green-50 border-green-200';
      default: return 'text-gray-500 bg-gray-50 border-gray-200';
    }
  };

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
              Future Enhancements
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Planned improvements and roadmap for continued evolution of the P&G Datalogger system, 
              focusing on scalability, advanced features, and enhanced user experience.
            </p>
          </div>

          {/* Roadmap Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-0.5 bg-bengali-terracotta/30 transform md:-translate-x-0.5"></div>

            <div className="space-y-8">
              {roadmapItems.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className={`relative flex items-center ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  } flex-col md:flex-row`}
                  onMouseEnter={() => setHoveredFeature(index)}
                  onMouseLeave={() => setHoveredFeature(null)}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-bengali-terracotta rounded-full transform md:-translate-x-1/2 border-4 border-background z-10">
                    <div className={`w-full h-full rounded-full ${getStatusColor(item.status)} opacity-75`}></div>
                  </div>

                  {/* Content Card */}
                  <div className={`w-full md:w-5/12 ml-16 md:ml-0 ${
                    index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                  }`}>
                    <motion.div
                      className="bg-background border border-border rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                      whileHover={{ scale: 1.02 }}
                    >
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex items-center space-x-3">
                          <div className="bg-bengali-terracotta/10 p-3 rounded-lg">
                            <item.icon className="w-6 h-6 text-bengali-terracotta" />
                          </div>
                          <div>
                            <h3 className="font-bold text-foreground text-lg">
                              {item.title}
                            </h3>
                            <div className="flex items-center space-x-2 mt-1">
                              <Calendar className="w-4 h-4 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{item.timeline}</span>
                            </div>
                          </div>
                        </div>
                        <span className={`px-2 py-1 rounded-full text-xs font-medium border ${getPriorityColor(item.priority)}`}>
                          {item.priority}
                        </span>
                      </div>

                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {item.description}
                      </p>

                      {/* Expandable details */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: hoveredFeature === index ? 'auto' : 0,
                          opacity: hoveredFeature === index ? 1 : 0
                        }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="bg-muted/30 p-4 rounded-lg border border-border">
                          <h4 className="font-semibold text-foreground mb-2 flex items-center">
                            <ArrowRight className="w-4 h-4 text-bengali-terracotta mr-2" />
                            Implementation Details
                          </h4>
                          <p className="text-sm text-muted-foreground">
                            {item.details}
                          </p>
                        </div>
                      </motion.div>

                      {/* Status indicator */}
                      <div className="flex items-center space-x-2 mt-4">
                        <div className={`w-2 h-2 rounded-full ${getStatusColor(item.status)}`}></div>
                        <span className="text-xs text-muted-foreground capitalize font-medium">
                          {item.status.replace('_', ' ')}
                        </span>
                      </div>
                    </motion.div>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block w-2/12"></div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Status Legend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="mt-12 bg-background p-6 rounded-xl border border-border"
          >
            <h3 className="font-semibold text-foreground mb-4 text-center">Development Status</h3>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                { status: 'planning', label: 'In Planning', color: 'bg-yellow-500' },
                { status: 'research', label: 'Research Phase', color: 'bg-blue-500' },
                { status: 'upcoming', label: 'Starting Soon', color: 'bg-green-500' },
                { status: 'future', label: 'Future Release', color: 'bg-purple-500' }
              ].map((item) => (
                <div key={item.status} className="flex items-center space-x-2">
                  <div className={`w-3 h-3 rounded-full ${item.color}`}></div>
                  <span className="text-sm text-muted-foreground">{item.label}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Vision Statement */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-12 bg-bengali-terracotta/5 p-8 rounded-2xl border border-bengali-terracotta/20 text-center"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Our Vision for the Future
            </h3>
            <p className="text-lg text-muted-foreground max-w-4xl mx-auto">
              Transform the P&G Datalogger into a comprehensive, intelligent industrial management platform 
              that not only meets current operational needs but anticipates future challenges through 
              data-driven insights and continuous user experience optimization.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
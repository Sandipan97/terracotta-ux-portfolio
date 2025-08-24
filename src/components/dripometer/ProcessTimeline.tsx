
import { motion } from 'framer-motion';
import { Users, Search, Lightbulb, TestTube, Cog, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { EditableImage } from '@/components/ui/editable-image';

const ProcessTimeline = () => {
  const phases = [
    {
      icon: Users,
      title: "Stakeholder Research",
      description: "Healthcare worker interviews and needs assessment",
      duration: "4 weeks",
      image: "/lovable-uploads/nurses.png",
      alt: "Healthcare workers in hospital setting",
      color: "emerald"
    },
    {
      icon: Search,
      title: "Market Analysis",
      description: "Competitive landscape and technology review",
      duration: "2 weeks", 
      image: "/lovable-uploads/O2C competitors.png",
      alt: "Medical device market research and competitive analysis",
      color: "teal"
    },
    {
      icon: Lightbulb,
      title: "Concept Development",
      description: "Ideation and initial design concepts",
      duration: "3 weeks",
      image: "/lovable-uploads/d7004b56-b3d9-4f38-b006-2c629ba78879.png",
      alt: "Design brainstorming and concept sketches",
      color: "cyan"
    },
    {
      icon: TestTube,
      title: "Prototyping",
      description: "Hardware prototypes and user testing",
      duration: "8 weeks",
      image: "/lovable-uploads/8c47a62f-b4cc-4527-8ebc-ee8c7518fc4c.png",
      alt: "Medical device prototyping process",
      color: "blue"
    },
    {
      icon: Cog,
      title: "Refinement",
      description: "Design iteration based on feedback",
      duration: "4 weeks",
      image: "/lovable-uploads/Drip-steal.png",
      alt: "Product refinement and testing",
      color: "indigo"
    },
    {
      icon: Rocket,
      title: "Deployment Ready",
      description: "Final validation and production preparation",
      duration: "2 weeks",
      image: "/lovable-uploads/Ward panic.png",
      alt: "Final product ready for deployment",
      color: "purple"
    }
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      emerald: {
        card: "bg-gradient-to-br from-emerald-50 to-emerald-100/50 dark:from-emerald-950/30 dark:to-emerald-900/20 border-emerald-200/50 dark:border-emerald-800/50 hover:border-emerald-300 dark:hover:border-emerald-700",
        icon: "bg-gradient-to-br from-emerald-500 to-emerald-600 text-white shadow-emerald-500/25",
        dot: "bg-emerald-600 shadow-lg shadow-emerald-600/30",
        badge: "bg-emerald-600 text-white shadow-lg shadow-emerald-600/25"
      },
      teal: {
        card: "bg-gradient-to-br from-teal-50 to-teal-100/50 dark:from-teal-950/30 dark:to-teal-900/20 border-teal-200/50 dark:border-teal-800/50 hover:border-teal-300 dark:hover:border-teal-700",
        icon: "bg-gradient-to-br from-teal-500 to-teal-600 text-white shadow-teal-500/25",
        dot: "bg-teal-600 shadow-lg shadow-teal-600/30",
        badge: "bg-teal-600 text-white shadow-lg shadow-teal-600/25"
      },
      cyan: {
        card: "bg-gradient-to-br from-cyan-50 to-cyan-100/50 dark:from-cyan-950/30 dark:to-cyan-900/20 border-cyan-200/50 dark:border-cyan-800/50 hover:border-cyan-300 dark:hover:border-cyan-700",
        icon: "bg-gradient-to-br from-cyan-500 to-cyan-600 text-white shadow-cyan-500/25",
        dot: "bg-cyan-600 shadow-lg shadow-cyan-600/30",
        badge: "bg-cyan-600 text-white shadow-lg shadow-cyan-600/25"
      },
      blue: {
        card: "bg-gradient-to-br from-blue-50 to-blue-100/50 dark:from-blue-950/30 dark:to-blue-900/20 border-blue-200/50 dark:border-blue-800/50 hover:border-blue-300 dark:hover:border-blue-700",
        icon: "bg-gradient-to-br from-blue-500 to-blue-600 text-white shadow-blue-500/25",
        dot: "bg-blue-600 shadow-lg shadow-blue-600/30",
        badge: "bg-blue-600 text-white shadow-lg shadow-blue-600/25"
      },
      indigo: {
        card: "bg-gradient-to-br from-indigo-50 to-indigo-100/50 dark:from-indigo-950/30 dark:to-indigo-900/20 border-indigo-200/50 dark:border-indigo-800/50 hover:border-indigo-300 dark:hover:border-indigo-700",
        icon: "bg-gradient-to-br from-indigo-500 to-indigo-600 text-white shadow-indigo-500/25",
        dot: "bg-indigo-600 shadow-lg shadow-indigo-600/30",
        badge: "bg-indigo-600 text-white shadow-lg shadow-indigo-600/25"
      },
      purple: {
        card: "bg-gradient-to-br from-purple-50 to-purple-100/50 dark:from-purple-950/30 dark:to-purple-900/20 border-purple-200/50 dark:border-purple-800/50 hover:border-purple-300 dark:hover:border-purple-700",
        icon: "bg-gradient-to-br from-purple-500 to-purple-600 text-white shadow-purple-500/25",
        dot: "bg-purple-600 shadow-lg shadow-purple-600/30",
        badge: "bg-purple-600 text-white shadow-lg shadow-purple-600/25"
      }
    };
    return colorMap[color as keyof typeof colorMap];
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50/30 via-teal-50/20 to-cyan-50/30 dark:from-emerald-950/10 dark:via-teal-950/10 dark:to-cyan-950/10">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 bg-emerald-100/80 dark:bg-emerald-900/40 px-4 py-2 rounded-full mb-6 border border-emerald-200/50 dark:border-emerald-800/50">
            <Rocket className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
            <span className="text-sm font-medium text-emerald-700 dark:text-emerald-300">Design Process Journey</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-emerald-900 dark:text-emerald-100 bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
            From Research to Reality
          </h2>
          <p className="text-xl text-emerald-700/80 dark:text-emerald-300/80 max-w-3xl mx-auto leading-relaxed">
            A comprehensive 23-week journey transforming healthcare needs into a deployment-ready medical device
          </p>
        </motion.div>

        {/* Desktop Timeline */}
        <div className="hidden lg:block">
          <div className="relative">
            {/* Enhanced timeline path */}
            <div className="absolute top-40 left-0 right-0 h-2 bg-gradient-to-r from-emerald-200 via-teal-300 via-cyan-400 via-blue-400 via-indigo-400 to-purple-500 rounded-full shadow-lg" />
            
            <div className="grid grid-cols-6 gap-6">
              {phases.map((phase, index) => {
                const Icon = phase.icon;
                const colorClasses = getColorClasses(phase.color);
                
                return (
                  <motion.div
                    key={index}
                    className="relative"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Card className={`relative z-10 ${colorClasses.card} shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 backdrop-blur-sm border-2`}>
                      <CardContent className="p-6">
                        <div className="mb-4 h-40 overflow-hidden rounded-xl relative group">
                          <EditableImage
                            src={phase.image}
                            alt={phase.alt}
                            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                            fallbackSrc="/placeholder.svg"
                          />
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>
                        
                        <div className="text-center space-y-3">
                          <div className={`${colorClasses.icon} p-3 rounded-xl mb-3 flex justify-center mx-auto w-fit shadow-lg`}>
                            <Icon className="w-6 h-6" />
                          </div>
                          <h3 className="text-lg font-bold text-gray-900 dark:text-gray-100 leading-tight">
                            {phase.title}
                          </h3>
                          <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                            {phase.description}
                          </p>
                          <div className={`${colorClasses.badge} px-3 py-1.5 rounded-full text-xs font-semibold inline-block`}>
                            {phase.duration}
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    {/* Enhanced timeline dot */}
                    <div className={`absolute -bottom-12 left-1/2 transform -translate-x-1/2 w-8 h-8 ${colorClasses.dot} rounded-full border-4 border-white dark:border-gray-900 z-20 flex items-center justify-center`}>
                      <Icon className="text-white w-4 h-4" />
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Enhanced Mobile Timeline */}
        <div className="lg:hidden space-y-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const colorClasses = getColorClasses(phase.color);
            
            return (
              <motion.div
                key={index}
                className="relative"
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start gap-6">
                  <div className={`flex-shrink-0 w-14 h-14 ${colorClasses.dot} rounded-full flex items-center justify-center shadow-xl border-4 border-white dark:border-gray-900`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  
                  <Card className={`flex-1 ${colorClasses.card} shadow-xl hover:shadow-2xl transition-all duration-500 backdrop-blur-sm border-2 transform hover:-translate-y-1`}>
                    <CardContent className="p-6">
                      <div className="mb-4 h-48 overflow-hidden rounded-xl relative group">
                        <EditableImage
                          src={phase.image}
                          alt={phase.alt}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                          fallbackSrc="/placeholder.svg"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      </div>
                      
                      <div className="space-y-3">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
                          {phase.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                          {phase.description}
                        </p>
                        <div className={`${colorClasses.badge} px-4 py-2 rounded-full text-sm font-semibold inline-block`}>
                          {phase.duration}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
                
                {/* Connecting line */}
                {index < phases.length - 1 && (
                  <div className="absolute left-7 top-14 w-0.5 h-16 bg-gradient-to-b from-current to-transparent opacity-30" />
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Enhanced Summary Stats */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20"
        >
          <Card className="bg-gradient-to-r from-white via-emerald-50/30 to-teal-50/30 dark:from-gray-900 dark:via-emerald-950/20 dark:to-teal-950/20 border-2 border-emerald-200/50 dark:border-emerald-800/50 shadow-2xl backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                {[
                  { value: "23", label: "Weeks Duration", color: "emerald", icon: "⏱️" },
                  { value: "15+", label: "Stakeholders", color: "teal", icon: "👥" },
                  { value: "ICU-Grade", label: "Monitoring Level", color: "cyan", icon: "🏥" },
                  { value: "5+", label: "Hospitals Visited", color: "blue", icon: "🏨" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="space-y-3"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 0.1 * index }}
                    viewport={{ once: true }}
                  >
                    <div className="text-4xl">{stat.icon}</div>
                    <div className={`text-4xl font-bold bg-gradient-to-r from-${stat.color}-600 to-${stat.color}-700 bg-clip-text text-transparent`}>
                      {stat.value}
                    </div>
                    <div className="text-gray-600 dark:text-gray-300 font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </section>
  );
};

export default ProcessTimeline;


import { motion } from 'framer-motion';
import { Users, Search, Lightbulb, TestTube, Cog, Rocket } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { EditableImage } from '@/components/ui/editable-image';

const ProcessTimeline = () => {
  const phases = [{
    icon: Users,
    title: "Stakeholder Research",
    description: "Healthcare worker interviews and needs assessment",
    duration: "4 weeks",
    image: "/lovable-uploads/nurses.png",
    alt: "Healthcare workers in hospital setting",
    color: "emerald"
  }, {
    icon: Search,
    title: "Market Analysis",
    description: "Competitive landscape and technology review",
    duration: "2 weeks",
    image: "/lovable-uploads/O2C competitors.png",
    alt: "Medical device market research and competitive analysis",
    color: "teal"
  }, {
    icon: Lightbulb,
    title: "Concept Development",
    description: "Ideation and initial design concepts",
    duration: "3 weeks",
    image: "/lovable-uploads/d7004b56-b3d9-4f38-b006-2c629ba78879.png",
    alt: "Design brainstorming and concept sketches",
    color: "cyan"
  }, {
    icon: TestTube,
    title: "Prototyping",
    description: "Hardware prototypes and user testing",
    duration: "8 weeks",
    image: "/lovable-uploads/8c47a62f-b4cc-4527-8ebc-ee8c7518fc4c.png",
    alt: "Medical device prototyping process",
    color: "blue"
  }, {
    icon: Cog,
    title: "Refinement",
    description: "Design iteration based on feedback",
    duration: "4 weeks",
    image: "/lovable-uploads/Drip-steal.png",
    alt: "Product refinement and testing",
    color: "indigo"
  }, {
    icon: Rocket,
    title: "Deployment Ready",
    description: "Final validation and production preparation",
    duration: "2 weeks",
    image: "/lovable-uploads/Ward panic.png",
    alt: "Final product ready for deployment",
    color: "purple"
  }];

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
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-emerald-50/30 to-teal-50/30 dark:from-emerald-950/10 dark:to-teal-950/10">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-900 dark:text-emerald-100">
            Development Timeline
          </h2>
          <p className="text-lg text-emerald-700 dark:text-emerald-300 max-w-3xl mx-auto leading-relaxed">
            A systematic approach from stakeholder research to deployment-ready medical device
          </p>
        </motion.div>

        {/* Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {phases.map((phase, index) => {
            const Icon = phase.icon;
            const colors = getColorClasses(phase.color);
            
            return (
              <motion.div
                key={phase.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ y: -8 }}
              >
                <Card className={`${colors.card} transition-all duration-300 hover:shadow-xl`}>
                  <CardContent className="p-6">
                    {/* Phase Image */}
                    <div className="relative mb-4 aspect-video overflow-hidden rounded-lg">
                      <EditableImage
                        src={phase.image}
                        alt={phase.alt}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                        fallbackSrc="/placeholder.svg"
                      />
                    </div>

                    {/* Icon and Title */}
                    <div className="flex items-start gap-3 mb-3">
                      <div className={`w-10 h-10 rounded-full ${colors.icon} flex items-center justify-center flex-shrink-0`}>
                        <Icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-foreground mb-1">
                          {phase.title}
                        </h3>
                        <div className={`inline-block px-2 py-1 rounded-full text-xs font-medium ${colors.badge}`}>
                          {phase.duration}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {phase.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;

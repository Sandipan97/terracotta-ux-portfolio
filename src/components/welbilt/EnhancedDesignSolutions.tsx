import { motion } from 'framer-motion';
import { Palette, Code, Zap, Users, ArrowRight, FileImage } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const solutions = [
  {
    id: 'design-system',
    icon: Palette,
    title: "Unified Design System",
    description: "Created 50+ reusable components with consistent patterns, colors, and typography to eliminate design debt and accelerate development.",
    impact: "35% faster development",
    tags: ["Component Library", "Design Tokens", "Documentation"],
    anchor: "detailed-design-system"
  },
  {
    id: 'workflow-optimization',
    icon: Zap,
    title: "Streamlined Workflows",
    description: "Redesigned kitchen operation flows to reduce cognitive load and minimize errors during peak service hours.",
    impact: "60% error reduction",
    tags: ["User Experience", "Process Design", "Efficiency"],
    anchor: "detailed-workflows"
  },
  {
    id: 'user-interface',
    icon: Code,
    title: "Intuitive Interface Design",
    description: "Simplified complex controls into logical groupings with clear visual hierarchy and contextual feedback systems.",
    impact: "85% user satisfaction",
    tags: ["UI Design", "Usability", "Accessibility"],
    anchor: "detailed-interface"
  },
  {
    id: 'collaboration-tools',
    icon: Users,
    title: "Team Collaboration Features",
    description: "Enhanced communication between kitchen staff and management through real-time updates and status indicators.",
    impact: "40% time savings",
    tags: ["Communication", "Real-time", "Team Management"],
    anchor: "detailed-collaboration"
  }
];

interface EnhancedDesignSolutionsProps {
  showDetailed?: boolean;
}

export const EnhancedDesignSolutions = ({ showDetailed = false }: EnhancedDesignSolutionsProps) => {
  const scrollToDetailed = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="solutions" className="py-20 bg-gradient-to-br from-blue-600/20 to-cyan-600/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="font-heading text-3xl md:text-5xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Design Solutions
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Transforming research insights into actionable design solutions that drive measurable business outcomes
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => (
              <motion.div
                key={solution.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -5 }}
                className="group"
              >
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-blue-500/30 backdrop-blur-sm h-full hover:border-cyan-500/50 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-4">
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center border border-slate-600/50">
                        <FileImage className="w-6 h-6 text-gray-400" />
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{solution.title}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {solution.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-blue-500/20 text-blue-300 border-blue-500/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-300 leading-relaxed mb-4">{solution.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-cyan-400 font-semibold">{solution.impact}</span>
                        <span className="text-gray-400 ml-2">improvement</span>
                      </div>
                      
                      {!showDetailed && (
                        <Button
                          onClick={() => scrollToDetailed(solution.anchor)}
                          variant="outline"
                          size="sm"
                          className="border-cyan-500/50 text-cyan-300 hover:bg-cyan-500/20 hover:border-cyan-500 group-hover:translate-x-1 transition-all duration-300"
                        >
                          View Full Solution
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {!showDetailed && (
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-gray-400 text-sm">
                Scroll down for detailed solution breakdowns and implementation insights
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
import { motion } from 'framer-motion';
import { Mic, RotateCcw, Globe, Eye, Shield, ArrowRight, FileImage } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const solutions = [
  {
    id: 'voice-guidance',
    icon: Mic,
    title: "Voice-Guided AR Interface",
    description: "Multi-language voice instructions synchronized with visual AR overlays for hands-free operation guidance.",
    impact: "89% user preference",
    tags: ["Voice UI", "Accessibility", "Multi-language"],
    anchor: "detailed-voice-guidance"
  },
  {
    id: '3d-interaction',
    icon: RotateCcw,
    title: "3D Product Interaction",
    description: "360° product visualization with dimensional arrows and interactive component highlighting for spatial understanding.",
    impact: "73% setup time reduction",
    tags: ["3D Visualization", "Spatial UI", "Interactive"],
    anchor: "detailed-3d-interaction"
  },
  {
    id: 'multilingual',
    icon: Globe,
    title: "Global Accessibility",
    description: "Seamless language switching with cultural adaptations and universal visual symbols for global markets.",
    impact: "15+ languages supported",
    tags: ["Localization", "Cultural Design", "Accessibility"],
    anchor: "detailed-multilingual"
  },
  {
    id: 'visual-guidance',
    icon: Eye,
    title: "Real-Time Visual Guidance",
    description: "Step-by-step animated overlays with contextual hints and progress indicators for complex procedures.",
    impact: "85% task completion rate",
    tags: ["Animation", "Visual Feedback", "Progressive Disclosure"],
    anchor: "detailed-visual-guidance"
  },
  {
    id: 'safety-features',
    icon: Shield,
    title: "Safety & Precaution Overlays",
    description: "Proactive safety warnings, child lock indicators, and hazard prevention through contextual AR alerts.",
    impact: "Zero safety incidents",
    tags: ["Safety Design", "Alert Systems", "Risk Prevention"],
    anchor: "detailed-safety-features"
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
    <section id="solutions" className="py-20 bg-gradient-to-br from-indigo-600/20 to-purple-600/20">
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
              AR Design Solutions
            </motion.h2>
            <motion.p 
              className="text-xl text-indigo-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Transforming traditional product documentation into immersive, accessible experiences through cutting-edge AR technology
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <Card className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 border-indigo-500/30 backdrop-blur-sm h-full hover:border-purple-500/50 transition-all duration-300">
                  <CardHeader className="pb-4">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center mb-4">
                        <solution.icon className="w-8 h-8 text-white" />
                      </div>
                      <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center border border-slate-600/50">
                        <FileImage className="w-6 h-6 text-gray-400" />
                      </div>
                    </div>
                    <CardTitle className="text-white text-xl mb-2">{solution.title}</CardTitle>
                    <div className="flex flex-wrap gap-2">
                      {solution.tags.map((tag, tagIndex) => (
                        <Badge key={tagIndex} variant="secondary" className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-gray-300 leading-relaxed mb-4">{solution.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="text-sm">
                        <span className="text-purple-400 font-semibold">{solution.impact}</span>
                        <span className="text-gray-400 ml-2">improvement</span>
                      </div>
                      
                      {!showDetailed && (
                        <Button
                          onClick={() => scrollToDetailed(solution.anchor)}
                          variant="outline"
                          size="sm"
                          className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-500 group-hover:translate-x-1 transition-all duration-300"
                        >
                          View Details
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
                Scroll down for detailed implementation insights and user research findings
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};
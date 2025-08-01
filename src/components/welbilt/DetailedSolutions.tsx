import { motion } from 'framer-motion';
import { Palette, Zap, Code, Users, FileImage, CheckCircle, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const detailedSolutions = [
  {
    id: 'detailed-design-system',
    icon: Palette,
    title: "Unified Design System Implementation",
    subtitle: "Building consistency across the entire platform",
    challenge: "Fragmented design patterns causing 65% development delays",
    approach: "Created comprehensive component library with design tokens, documentation, and implementation guidelines",
    components: [
      "50+ reusable UI components",
      "Unified color and typography system",
      "Responsive grid and spacing tokens",
      "Accessibility-first design patterns"
    ],
    outcomes: [
      "35% faster development cycles",
      "90% reduction in design inconsistencies",
      "Improved developer experience and adoption"
    ],
    technologies: ["Figma", "Storybook", "Design Tokens", "CSS-in-JS"]
  },
  {
    id: 'detailed-workflows',
    icon: Zap,
    title: "Streamlined Kitchen Workflows",
    subtitle: "Optimizing operations for peak efficiency",
    challenge: "Complex workflows causing 40% longer task completion times",
    approach: "Redesigned user journeys with simplified navigation, contextual actions, and predictive interfaces",
    components: [
      "Simplified navigation with logical grouping",
      "Context-aware action suggestions",
      "One-click common operations",
      "Progressive disclosure for complex tasks"
    ],
    outcomes: [
      "60% reduction in operational errors",
      "40% faster task completion",
      "Improved staff confidence and satisfaction"
    ],
    technologies: ["User Journey Mapping", "Workflow Analysis", "Prototype Testing"]
  },
  {
    id: 'detailed-interface',
    icon: Code,
    title: "Intuitive Interface Architecture",
    subtitle: "Creating clarity in complex kitchen operations",
    challenge: "Poor visual hierarchy leading to 60% of user errors",
    approach: "Implemented clear information architecture with improved visual hierarchy and contextual feedback systems",
    components: [
      "Clear visual hierarchy and typography",
      "Contextual feedback and status indicators",
      "Error prevention and recovery patterns",
      "Mobile-responsive touch interfaces"
    ],
    outcomes: [
      "85% improvement in user satisfaction",
      "70% reduction in training time",
      "Consistent experience across devices"
    ],
    technologies: ["React", "TypeScript", "Responsive Design", "Accessibility Standards"]
  },
  {
    id: 'detailed-collaboration',
    icon: Users,
    title: "Enhanced Team Collaboration",
    subtitle: "Connecting kitchen teams in real-time",
    challenge: "Communication gaps causing 30% of service delays",
    approach: "Developed real-time communication tools with status tracking and automated notifications",
    components: [
      "Real-time status dashboard",
      "Automated notification system",
      "Team coordination tools",
      "Performance tracking and insights"
    ],
    outcomes: [
      "40% reduction in coordination time",
      "30% fewer service delays",
      "Improved team communication and morale"
    ],
    technologies: ["WebSocket", "Real-time APIs", "Push Notifications", "Data Visualization"]
  }
];

export const DetailedSolutions = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <motion.h2 
              className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              data-lovable-editable="welbilt-detailed-title"
            >
              Detailed Solutions
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              data-lovable-editable="welbilt-detailed-description"
            >
              In-depth look at how research insights transformed into actionable design solutions
            </motion.p>
          </div>

          <div className="space-y-16">
            {detailedSolutions.map((solution, index) => {
              const Icon = solution.icon;
              
              return (
                <motion.div
                  key={solution.id}
                  id={solution.id}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="scroll-mt-24"
                >
                  <Card className="bg-white border-gray-200 shadow-lg overflow-hidden">
                    <CardHeader className="pb-8">
                      <div className="flex items-start gap-6">
                        <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-3xl flex items-center justify-center flex-shrink-0">
                          <Icon className="w-10 h-10 text-white" />
                        </div>
                        <div className="flex-1">
                          <CardTitle className="text-gray-900 text-2xl md:text-3xl mb-2">{solution.title}</CardTitle>
                          <p className="text-gray-600 text-lg">{solution.subtitle}</p>
                        </div>
                        <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center border border-gray-200">
                          <FileImage className="w-8 h-8 text-gray-500" />
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent className="space-y-8">
                      {/* Challenge & Approach */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div className="bg-red-50 border border-red-200 rounded-xl p-6">
                          <h4 className="text-red-700 font-semibold mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-red-600 rounded-full"></div>
                            Challenge
                          </h4>
                          <p className="text-gray-700 leading-relaxed">{solution.challenge}</p>
                        </div>
                        
                        <div className="bg-green-50 border border-green-200 rounded-xl p-6">
                          <h4 className="text-green-700 font-semibold mb-3 flex items-center gap-2">
                            <div className="w-2 h-2 bg-green-600 rounded-full"></div>
                            Our Approach
                          </h4>
                          <p className="text-gray-700 leading-relaxed">{solution.approach}</p>
                        </div>
                      </div>

                      {/* Components & Outcomes */}
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        <div>
                          <h4 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
                            <Code className="w-5 h-5 text-blue-600" />
                            Key Components
                          </h4>
                          <ul className="space-y-3">
                            {solution.components.map((component, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 flex-shrink-0"></div>
                                <span className="text-gray-700">{component}</span>
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="text-gray-900 font-semibold mb-4 flex items-center gap-2">
                            <CheckCircle className="w-5 h-5 text-green-600" />
                            Measured Outcomes
                          </h4>
                          <ul className="space-y-3">
                            {solution.outcomes.map((outcome, idx) => (
                              <li key={idx} className="flex items-start gap-3">
                                <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" />
                                <span className="text-gray-700">{outcome}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div>
                        <h4 className="text-gray-900 font-semibold mb-4">Technologies & Methods</h4>
                        <div className="flex flex-wrap gap-2">
                          {solution.technologies.map((tech, idx) => (
                            <Badge key={idx} variant="secondary" className="bg-blue-50 text-blue-700 border-blue-200">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation to Impact */}
          <motion.div 
            className="text-center mt-16"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 rounded-full border border-gray-200">
              <span className="text-gray-700 text-sm">Ready to see the impact?</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
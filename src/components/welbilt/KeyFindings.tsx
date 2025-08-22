
import { motion } from 'framer-motion';
import { TrendingUp, FileImage, ChevronDown, ArrowRight, AlertTriangle, CheckCircle, Zap } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const findings = [
  {
    id: 'finding-1',
    title: "Critical Usability Gaps in Kitchen Operations",
    type: "challenge",
    icon: AlertTriangle,
    summary: "65% of kitchen errors traced to interface design issues",
    details: "Our analysis revealed that inconsistent button placements, unclear visual hierarchy, and lack of contextual feedback were causing significant operational inefficiencies during peak service hours.",
    visualNote: "Heat map analysis of user interactions",
    impact: "60% error reduction potential",
    solutionAnchor: "detailed-interface",
    color: "warm-rust"
  },
  {
    id: 'finding-2',
    title: "Design System Fragmentation Impact",
    type: "insight",
    icon: Zap,
    summary: "Development teams 65% slower without design standards",
    details: "Developers spent excessive time recreating components and resolving design inconsistencies. The lack of a unified design system created technical debt and slowed feature delivery significantly.",
    visualNote: "Development velocity comparison chart",
    impact: "35% development acceleration achieved",
    solutionAnchor: "detailed-design-system",
    color: "warm-golden"
  },
  {
    id: 'finding-3',
    title: "Communication Bottlenecks in Kitchen Workflow",
    type: "opportunity",
    icon: CheckCircle,
    summary: "Real-time updates could eliminate 30% of order delays",
    details: "Kitchen staff relied on verbal communication and manual status updates, leading to coordination issues. Implementing visual status indicators and automated notifications showed immediate improvement potential.",
    visualNote: "Kitchen workflow timing analysis",
    impact: "40% time savings in team coordination",
    solutionAnchor: "detailed-collaboration",
    color: "warm-sage"
  }
];

export const KeyFindings = () => {
  const scrollToSolution = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const getColorScheme = (color: string) => {
    switch (color) {
      case 'warm-rust':
        return {
          bg: 'bg-gradient-to-br from-warm-rust-light/15 to-warm-rust-light/5',
          border: 'border-warm-rust-light/40',
          icon: 'bg-gradient-to-br from-warm-rust to-warm-rust/90',
          text: 'text-warm-rust',
          badge: 'bg-warm-rust-light/20 text-warm-rust border-warm-rust-light/40'
        };
      case 'warm-golden':
        return {
          bg: 'bg-gradient-to-br from-warm-golden-light/15 to-warm-golden-light/5',
          border: 'border-warm-golden-light/40',
          icon: 'bg-gradient-to-br from-warm-golden to-warm-golden-hover',
          text: 'text-warm-golden',
          badge: 'bg-warm-golden-light/20 text-warm-golden border-warm-golden-light/40'
        };
      case 'warm-sage':
        return {
          bg: 'bg-gradient-to-br from-warm-sage-light/15 to-warm-sage-light/5',
          border: 'border-warm-sage-light/40',
          icon: 'bg-gradient-to-br from-warm-sage to-warm-sage/90',
          text: 'text-warm-sage',
          badge: 'bg-warm-sage-light/20 text-warm-sage border-warm-sage-light/40'
        };
      default:
        return {
          bg: 'bg-white',
          border: 'border-gray-200',
          icon: 'bg-gray-500',
          text: 'text-gray-600',
          badge: 'bg-gray-50 text-gray-600 border-gray-200'
        };
    }
  };

  return (
    <section id="findings" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              data-lovable-editable="welbilt-findings-title"
            >
              Key Findings
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              data-lovable-editable="welbilt-findings-description"
            >
              Critical insights that drove our design decisions and solution prioritization
            </motion.p>
          </div>

          <Accordion type="multiple" className="space-y-6">
            {findings.map((finding, index) => {
              const colorScheme = getColorScheme(finding.color);
              const Icon = finding.icon;
              
              return (
                <motion.div
                  key={finding.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <AccordionItem 
                    value={finding.id} 
                    className={`border rounded-2xl ${colorScheme.bg} ${colorScheme.border} shadow-lg hover:shadow-xl transition-all duration-300`}
                  >
                    <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                      <div className="flex items-center gap-6 w-full">
                        {/* Finding Icon */}
                        <div className={`w-14 h-14 ${colorScheme.icon} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-lg`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>

                        {/* Finding Content */}
                        <div className="flex-1 text-left">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-gray-900 text-xl" data-lovable-editable={`welbilt-finding-${index}-title`}>{finding.title}</h3>
                            <Badge className={`${colorScheme.badge} shadow-sm`}>
                              <span data-lovable-editable={`welbilt-finding-${index}-type`}>{finding.type}</span>
                            </Badge>
                          </div>
                          <p className={`${colorScheme.text} text-lg font-medium`} data-lovable-editable={`welbilt-finding-${index}-summary`}>{finding.summary}</p>
                        </div>

                        {/* Visual Indicator */}
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-gray-50/80 rounded-lg flex items-center justify-center border border-gray-200/60 backdrop-blur-sm">
                            <FileImage className="w-6 h-6 text-gray-500" />
                          </div>
                          <ChevronDown className="w-5 h-5 text-gray-500 group-data-[state=open]:rotate-180 transition-transform duration-200" />
                        </div>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="px-8 pb-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Detailed Analysis */}
                        <div className="lg:col-span-2">
                          <div className="bg-gray-50/80 rounded-xl p-6 border border-gray-200/60 shadow-sm backdrop-blur-sm">
                            <h4 className="text-gray-900 font-semibold mb-3" data-lovable-editable="welbilt-finding-analysis-label">Detailed Analysis</h4>
                            <p className="text-gray-700 leading-relaxed mb-4" data-lovable-editable={`welbilt-finding-${index}-details`}>{finding.details}</p>
                            
                            <div className="flex items-center gap-3 text-sm">
                              <div className="flex items-center gap-2">
                                <TrendingUp className={`w-4 h-4 ${colorScheme.text}`} />
                                <span className={colorScheme.text}>
                                  <span data-lovable-editable="welbilt-finding-impact-label">Impact: </span>
                                  <span data-lovable-editable={`welbilt-finding-${index}-impact`} className="font-medium">{finding.impact}</span>
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Visual Support & Action */}
                        <div className="space-y-4">
                          {/* Visual Note */}
                          <Card className="bg-gray-50/80 border-gray-200/60 shadow-sm backdrop-blur-sm">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3 mb-3">
                                <FileImage className="w-5 h-5 text-gray-500" />
                                <span className="text-gray-900 text-sm font-medium" data-lovable-editable="welbilt-finding-visual-label">Visual Support</span>
                              </div>
                              <p className="text-gray-600 text-sm" data-lovable-editable={`welbilt-finding-${index}-visual`}>{finding.visualNote}</p>
                            </CardContent>
                          </Card>

                          {/* Solution Link */}
                          <Button
                            onClick={() => scrollToSolution(finding.solutionAnchor)}
                            className={`w-full ${colorScheme.icon} hover:opacity-90 text-white border-0 shadow-lg hover:shadow-xl transition-all duration-300`}
                          >
                            <span data-lovable-editable={`welbilt-finding-${index}-btn`}>View Solution</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>
                </motion.div>
              );
            })}
          </Accordion>

          {/* Summary Stats */}
          <motion.div 
            className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
          >
            <Card className="bg-gradient-to-br from-warm-golden-light/20 to-warm-golden-light/5 border-warm-golden-light/40 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-gray-900 mb-2" data-lovable-editable="welbilt-finding-stat-1-value">3</div>
                <div className="text-warm-golden text-sm font-medium" data-lovable-editable="welbilt-finding-stat-1-label">Critical Findings</div>
                <div className="text-gray-600 text-xs mt-1" data-lovable-editable="welbilt-finding-stat-1-desc">Driving Design Decisions</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-warm-sage-light/20 to-warm-sage-light/5 border-warm-sage-light/40 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-gray-900 mb-2" data-lovable-editable="welbilt-finding-stat-2-value">65%</div>
                <div className="text-warm-sage text-sm font-medium" data-lovable-editable="welbilt-finding-stat-2-label">Performance Gap</div>
                <div className="text-gray-600 text-xs mt-1" data-lovable-editable="welbilt-finding-stat-2-desc">Identified & Addressed</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-warm-terracotta-light/20 to-warm-terracotta-light/5 border-warm-terracotta-light/40 text-center shadow-lg hover:shadow-xl transition-all duration-300">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-gray-900 mb-2" data-lovable-editable="welbilt-finding-stat-3-value">4</div>
                <div className="text-warm-terracotta text-sm font-medium" data-lovable-editable="welbilt-finding-stat-3-label">Solution Areas</div>
                <div className="text-gray-600 text-xs mt-1" data-lovable-editable="welbilt-finding-stat-3-desc">Directly Targeted</div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

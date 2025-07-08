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
    color: "red"
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
    color: "blue"
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
    color: "green"
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
      case 'red':
        return {
          bg: 'from-red-500/10 to-orange-500/10',
          border: 'border-red-500/30',
          icon: 'from-red-500 to-orange-500',
          text: 'text-red-300',
          badge: 'bg-red-500/20 text-red-300 border-red-500/30'
        };
      case 'blue':
        return {
          bg: 'from-blue-500/10 to-cyan-500/10',
          border: 'border-blue-500/30',
          icon: 'from-blue-500 to-cyan-500',
          text: 'text-blue-300',
          badge: 'bg-blue-500/20 text-blue-300 border-blue-500/30'
        };
      case 'green':
        return {
          bg: 'from-green-500/10 to-emerald-500/10',
          border: 'border-green-500/30',
          icon: 'from-green-500 to-emerald-500',
          text: 'text-green-300',
          badge: 'bg-green-500/20 text-green-300 border-green-500/30'
        };
      default:
        return {
          bg: 'from-slate-500/10 to-gray-500/10',
          border: 'border-slate-500/30',
          icon: 'from-slate-500 to-gray-500',
          text: 'text-slate-300',
          badge: 'bg-slate-500/20 text-slate-300 border-slate-500/30'
        };
    }
  };

  return (
    <section id="findings" className="py-20 bg-slate-900/50 backdrop-blur-sm">
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
              Key Findings
            </motion.h2>
            <motion.p 
              className="text-xl text-blue-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
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
                    className={`border rounded-2xl bg-gradient-to-br ${colorScheme.bg} backdrop-blur-sm ${colorScheme.border}`}
                  >
                    <AccordionTrigger className="px-8 py-6 hover:no-underline group">
                      <div className="flex items-center gap-6 w-full">
                        {/* Finding Icon */}
                        <div className={`w-14 h-14 bg-gradient-to-br ${colorScheme.icon} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                          <Icon className="w-7 h-7 text-white" />
                        </div>

                        {/* Finding Content */}
                        <div className="flex-1 text-left">
                          <div className="flex items-center gap-3 mb-2">
                            <h3 className="font-semibold text-white text-xl">{finding.title}</h3>
                            <Badge className={colorScheme.badge}>
                              {finding.type}
                            </Badge>
                          </div>
                          <p className={`${colorScheme.text} text-lg`}>{finding.summary}</p>
                        </div>

                        {/* Visual Indicator */}
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center border border-slate-600/50">
                            <FileImage className="w-6 h-6 text-gray-400" />
                          </div>
                          <ChevronDown className="w-5 h-5 text-gray-400 group-data-[state=open]:rotate-180 transition-transform duration-200" />
                        </div>
                      </div>
                    </AccordionTrigger>
                    
                    <AccordionContent className="px-8 pb-8">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Detailed Analysis */}
                        <div className="lg:col-span-2">
                          <div className="bg-white/5 rounded-xl p-6 border border-white/10">
                            <h4 className="text-white font-semibold mb-3">Detailed Analysis</h4>
                            <p className="text-gray-300 leading-relaxed mb-4">{finding.details}</p>
                            
                            <div className="flex items-center gap-3 text-sm">
                              <div className="flex items-center gap-2">
                                <TrendingUp className={`w-4 h-4 ${colorScheme.text}`} />
                                <span className={colorScheme.text}>Impact: {finding.impact}</span>
                              </div>
                            </div>
                          </div>
                        </div>

                        {/* Visual Support & Action */}
                        <div className="space-y-4">
                          {/* Visual Note */}
                          <Card className="bg-white/5 border-white/10">
                            <CardContent className="p-4">
                              <div className="flex items-center gap-3 mb-3">
                                <FileImage className="w-5 h-5 text-gray-400" />
                                <span className="text-white text-sm font-medium">Visual Support</span>
                              </div>
                              <p className="text-gray-300 text-sm">{finding.visualNote}</p>
                            </CardContent>
                          </Card>

                          {/* Solution Link */}
                          <Button
                            onClick={() => scrollToSolution(finding.solutionAnchor)}
                            className={`w-full bg-gradient-to-r ${colorScheme.icon} hover:opacity-90 text-white border-0`}
                          >
                            View Solution
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
            <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-white mb-2">3</div>
                <div className="text-blue-300 text-sm">Critical Findings</div>
                <div className="text-gray-400 text-xs mt-1">Driving Design Decisions</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-green-500/10 to-emerald-500/10 border-green-500/30 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-white mb-2">65%</div>
                <div className="text-green-300 text-sm">Performance Gap</div>
                <div className="text-gray-400 text-xs mt-1">Identified & Addressed</div>
              </CardContent>
            </Card>
            
            <Card className="bg-gradient-to-br from-purple-500/10 to-pink-500/10 border-purple-500/30 text-center">
              <CardContent className="p-6">
                <div className="text-3xl font-bold text-white mb-2">4</div>
                <div className="text-purple-300 text-sm">Solution Areas</div>
                <div className="text-gray-400 text-xs mt-1">Directly Targeted</div>
              </CardContent>
            </Card>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
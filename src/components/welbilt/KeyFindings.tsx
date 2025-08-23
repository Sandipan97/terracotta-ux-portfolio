
import { motion } from 'framer-motion';
import { TrendingUp, FileImage, ChevronDown, ArrowRight, AlertTriangle, CheckCircle, Zap } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const findings = [{
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
}, {
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
}, {
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
}];

export const KeyFindings = () => {
  const scrollToSolution = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
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
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
            Key Research Findings
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Critical insights that shaped our design strategy and solutions
          </p>
        </motion.div>

        <div className="space-y-8">
          {findings.map((finding, index) => {
            const colorScheme = getColorScheme(finding.color);
            const IconComponent = finding.icon;
            
            return (
              <motion.div
                key={finding.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className={`${colorScheme.bg} ${colorScheme.border} border-2 overflow-hidden hover:shadow-lg transition-all duration-300`}>
                  <CardContent className="p-8">
                    <div className="flex flex-col lg:flex-row gap-6">
                      {/* Icon and Header */}
                      <div className="flex-shrink-0">
                        <div className={`${colorScheme.icon} p-4 rounded-2xl shadow-lg`}>
                          <IconComponent className="w-8 h-8 text-white" />
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-4">
                        <div className="flex flex-wrap items-start justify-between gap-4">
                          <div>
                            <Badge className={`${colorScheme.badge} mb-3 text-sm font-medium border`}>
                              {finding.type.charAt(0).toUpperCase() + finding.type.slice(1)}
                            </Badge>
                            <h3 className="text-2xl font-bold text-foreground mb-2">
                              {finding.title}
                            </h3>
                            <p className={`text-lg font-semibold ${colorScheme.text} mb-3`}>
                              {finding.summary}
                            </p>
                          </div>
                          
                          <div className="text-right">
                            <div className={`text-sm font-medium ${colorScheme.text} mb-1`}>
                              Impact
                            </div>
                            <div className="text-lg font-bold text-foreground">
                              {finding.impact}
                            </div>
                          </div>
                        </div>

                        <Accordion type="single" collapsible className="w-full">
                          <AccordionItem value={finding.id} className="border-none">
                            <AccordionTrigger className="hover:no-underline py-2">
                              <span className="text-sm font-medium text-muted-foreground">
                                View detailed analysis
                              </span>
                            </AccordionTrigger>
                            <AccordionContent className="pt-4">
                              <div className="space-y-4">
                                <p className="text-muted-foreground leading-relaxed">
                                  {finding.details}
                                </p>
                                
                                <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between pt-4 border-t border-border/50">
                                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                                    <FileImage className="w-4 h-4" />
                                    <span>{finding.visualNote}</span>
                                  </div>
                                  
                                  <Button
                                    variant="outline"
                                    size="sm"
                                    onClick={() => scrollToSolution(finding.solutionAnchor)}
                                    className={`${colorScheme.text} border-current hover:bg-current/10`}
                                  >
                                    View Solution
                                    <ArrowRight className="w-4 h-4 ml-2" />
                                  </Button>
                                </div>
                              </div>
                            </AccordionContent>
                          </AccordionItem>
                        </Accordion>
                      </div>
                    </div>
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


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
    anchor: "detailed-design-system",
    theme: "warm-terracotta"
  },
  {
    id: 'workflow-optimization',
    icon: Zap,
    title: "Streamlined Workflows",
    description: "Redesigned kitchen operation flows to reduce cognitive load and minimize errors during peak service hours.",
    impact: "60% error reduction",
    tags: ["User Experience", "Process Design", "Efficiency"],
    anchor: "detailed-workflows",
    theme: "warm-golden"
  },
  {
    id: 'user-interface',
    icon: Code,
    title: "Intuitive Interface Design",
    description: "Simplified complex controls into logical groupings with clear visual hierarchy and contextual feedback systems.",
    impact: "85% user satisfaction",
    tags: ["UI Design", "Usability", "Accessibility"],
    anchor: "detailed-interface",
    theme: "warm-sage"
  },
  {
    id: 'collaboration-tools',
    icon: Users,
    title: "Team Collaboration Features",
    description: "Enhanced communication between kitchen staff and management through real-time updates and status indicators.",
    impact: "40% time savings",
    tags: ["Communication", "Real-time", "Team Management"],
    anchor: "detailed-collaboration",
    theme: "warm-rust"
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

  const getThemeClasses = (theme: string) => {
    switch (theme) {
      case 'warm-terracotta':
        return {
          bg: 'bg-gradient-to-br from-warm-terracotta-light/15 to-warm-terracotta-light/5',
          icon: 'bg-gradient-to-br from-warm-terracotta to-warm-terracotta-hover',
          border: 'border-warm-terracotta-light/40 hover:border-warm-terracotta-light/60',
          impact: 'text-warm-terracotta'
        };
      case 'warm-golden':
        return {
          bg: 'bg-gradient-to-br from-warm-golden-light/15 to-warm-golden-light/5',
          icon: 'bg-gradient-to-br from-warm-golden to-warm-golden-hover',
          border: 'border-warm-golden-light/40 hover:border-warm-golden-light/60',
          impact: 'text-warm-golden'
        };
      case 'warm-sage':
        return {
          bg: 'bg-gradient-to-br from-warm-sage-light/15 to-warm-sage-light/5',
          icon: 'bg-gradient-to-br from-warm-sage to-warm-sage/90',
          border: 'border-warm-sage-light/40 hover:border-warm-sage-light/60',
          impact: 'text-warm-sage'
        };
      case 'warm-rust':
        return {
          bg: 'bg-gradient-to-br from-warm-rust-light/15 to-warm-rust-light/5',
          icon: 'bg-gradient-to-br from-warm-rust to-warm-rust/90',
          border: 'border-warm-rust-light/40 hover:border-warm-rust-light/60',
          impact: 'text-warm-rust'
        };
      default:
        return {
          bg: 'bg-card',
          icon: 'bg-blue-600',
          border: 'border-blue-300',
          impact: 'text-blue-700'
        };
    }
  };

  return (
    <section id="solutions" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              data-lovable-editable="welbilt-solutions-title"
            >
              Design Solutions
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              data-lovable-editable="welbilt-solutions-description"
            >
              Transforming research insights into actionable design solutions that drive measurable business outcomes
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {solutions.map((solution, index) => {
              const themeClasses = getThemeClasses(solution.theme);
              return (
                <motion.div
                  key={solution.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, y: -5 }}
                  className="group"
                >
                  <Card className={`${themeClasses.bg} border ${themeClasses.border} h-full transition-all duration-300 shadow-lg hover:shadow-xl`}>
                    <CardHeader className="pb-4">
                      <div className="flex items-start justify-between mb-4">
                        <div className={`w-16 h-16 ${themeClasses.icon} rounded-2xl flex items-center justify-center mb-4 shadow-lg`}>
                          <solution.icon className="w-8 h-8 text-white" />
                        </div>
                        <div className="w-12 h-12 bg-muted/60 rounded-lg flex items-center justify-center border-border border backdrop-blur-sm">
                          <FileImage className="w-6 h-6 text-muted-foreground" />
                        </div>
                      </div>
                      <CardTitle className="text-foreground text-xl mb-2" data-lovable-editable={`welbilt-solution-${index}-title`}>{solution.title}</CardTitle>
                      <div className="flex flex-wrap gap-2">
                        {solution.tags.map((tag, tagIndex) => (
                          <Badge key={tagIndex} variant="secondary" className="bg-background/70 backdrop-blur-sm border-current/20 hover:bg-background/90 transition-colors">
                            <span data-lovable-editable={`welbilt-solution-${index}-tag-${tagIndex}`}>{tag}</span>
                          </Badge>
                        ))}
                      </div>
                    </CardHeader>
                    <CardContent className="pt-0">
                      <p className="text-muted-foreground leading-relaxed mb-4" data-lovable-editable={`welbilt-solution-${index}-description`}>{solution.description}</p>
                      
                      <div className="flex items-center justify-between">
                        <div className="text-sm">
                          <span className={`${themeClasses.impact} font-semibold`} data-lovable-editable={`welbilt-solution-${index}-impact`}>{solution.impact}</span>
                          <span className="text-muted-foreground ml-2" data-lovable-editable="welbilt-solution-improvement-label">improvement</span>
                        </div>
                        
                        {!showDetailed && (
                          <Button
                            onClick={() => scrollToDetailed(solution.anchor)}
                            variant="outline"
                            size="sm"
                            className="group-hover:translate-x-1 transition-all duration-300 bg-background/60 backdrop-blur-sm hover:bg-background/90"
                          >
                            <span data-lovable-editable={`welbilt-solution-${index}-btn`}>View Full Solution</span>
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          {!showDetailed && (
            <motion.div 
              className="text-center mt-12"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              <p className="text-muted-foreground text-sm" data-lovable-editable="welbilt-solutions-scroll-note">
                Scroll down for detailed solution breakdowns and implementation insights
              </p>
            </motion.div>
          )}
        </motion.div>
      </div>
    </section>
  );
};

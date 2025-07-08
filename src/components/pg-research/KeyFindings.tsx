import { motion } from 'framer-motion';
import { TrendingUp, Users, Eye, Clock, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const findings = [
  {
    id: 'error-reduction',
    icon: TrendingUp,
    metric: "45%",
    title: "Error Rate Reduction",
    description: "Significant decrease in user errors through improved interface design and clearer information hierarchy.",
    details: [
      "Simplified data entry forms",
      "Better error validation feedback",
      "Intuitive navigation flow"
    ]
  },
  {
    id: 'user-satisfaction',
    icon: Users,
    metric: "92%",
    title: "User Satisfaction",
    description: "High satisfaction rate from lab technicians and researchers using the redesigned interface.",
    details: [
      "Improved workflow efficiency",
      "Reduced learning curve",
      "Enhanced visual clarity"
    ]
  },
  {
    id: 'accessibility-score',
    icon: Eye,
    metric: "98%",
    title: "WCAG Compliance",
    description: "Near-perfect accessibility compliance score, making the application usable for all team members.",
    details: [
      "Color contrast optimization",
      "Screen reader compatibility",
      "Keyboard navigation support"
    ]
  },
  {
    id: 'task-completion',
    icon: Clock,
    metric: "60%",
    title: "Faster Task Completion",
    description: "Streamlined workflows and improved interface design led to significant time savings.",
    details: [
      "Optimized data logging process",
      "Quick access to frequently used features",
      "Reduced cognitive load"
    ]
  }
];

export const KeyFindings = () => {
  return (
    <section id="findings" className="py-20 bg-slate-50 dark:bg-slate-900/50">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Key Findings & Results
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Measurable improvements achieved through systematic UX redesign and accessibility enhancements
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {findings.map((finding, index) => (
              <motion.div
                key={finding.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-background/80 backdrop-blur-sm border-border/50 hover:border-blue-500/50 transition-all duration-300 h-full group">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                        <finding.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-blue-600 dark:text-blue-400">
                          {finding.metric}
                        </div>
                        <CardTitle className="text-foreground text-lg">{finding.title}</CardTitle>
                      </div>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {finding.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-500" />
                        Contributing Factors
                      </h4>
                      <ul className="space-y-2">
                        {finding.details.map((detail, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            {detail}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 rounded-2xl text-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <h3 className="font-heading text-2xl font-bold mb-4">
              Overall Impact
            </h3>
            <p className="text-white/90 leading-relaxed max-w-4xl mx-auto">
              The redesigned P&G Datalogger application successfully addressed critical usability issues, 
              resulting in improved productivity, enhanced accessibility, and higher user satisfaction among 
              industrial researchers and lab technicians.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
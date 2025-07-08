import { motion } from 'framer-motion';
import { Search, Users, Target, Settings, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const methodologies = [
  {
    id: 'heuristic-evaluation',
    icon: Search,
    title: "Heuristic Evaluation",
    description: "Comprehensive analysis of the existing P&G Datalogger interface using Nielsen's 10 usability principles to identify critical usability issues.",
    findings: [
      "Poor information hierarchy causing confusion",
      "Inadequate error handling and feedback",
      "Complex navigation reducing efficiency"
    ]
  },
  {
    id: 'user-research', 
    icon: Users,
    title: "User Research & Interviews",
    description: "Conducted in-depth interviews with industrial researchers and lab technicians to understand workflow pain points and needs.",
    findings: [
      "73% of users struggled with data visualization",
      "85% needed better accessibility features",
      "92% wanted simplified navigation"
    ]
  },
  {
    id: 'accessibility-audit',
    icon: Target,
    title: "Accessibility Audit",
    description: "Thorough WCAG 2.1 compliance assessment to ensure the application meets accessibility standards for diverse users.",
    findings: [
      "Multiple color contrast violations",
      "Missing alt text for data visualizations", 
      "Keyboard navigation issues"
    ]
  },
  {
    id: 'competitive-analysis',
    icon: Settings,
    title: "Competitive Analysis",
    description: "Analyzed similar industrial data logging systems to identify best practices and opportunities for innovation.",
    findings: [
      "Industry standard features missing",
      "Opportunities for mobile optimization",
      "Better data export capabilities needed"
    ]
  }
];

export const ObjectiveMethodologies = () => {
  return (
    <section id="objective" className="py-20 bg-slate-50 dark:bg-slate-900/50">
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
              Research Objective & Methodologies
            </motion.h2>
            <motion.p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Systematic approach to identifying and solving critical usability issues in industrial data logging
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {methodologies.map((method, index) => (
              <motion.div
                key={method.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-background/80 backdrop-blur-sm border-border/50 hover:border-blue-500/50 transition-all duration-300 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center">
                        <method.icon className="w-6 h-6 text-white" />
                      </div>
                      <CardTitle className="text-foreground text-xl">{method.title}</CardTitle>
                    </div>
                    <p className="text-muted-foreground leading-relaxed">
                      {method.description}
                    </p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <h4 className="font-semibold text-foreground flex items-center gap-2">
                        <ArrowRight className="w-4 h-4 text-blue-500" />
                        Key Findings
                      </h4>
                      <ul className="space-y-2">
                        {method.findings.map((finding, idx) => (
                          <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2 flex-shrink-0" />
                            {finding}
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
              Research Objective
            </h3>
            <p className="text-white/90 leading-relaxed max-w-4xl mx-auto">
              To redesign P&G's Datalogger application by addressing critical usability issues, improving accessibility compliance, 
              and creating an intuitive interface that enhances productivity for industrial researchers and lab technicians.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
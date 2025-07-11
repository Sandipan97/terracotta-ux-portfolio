import { motion } from 'framer-motion';
import { Zap, Eye, Shield, TrendingUp, Users, Smartphone } from 'lucide-react';

export const UXGoalsStrategy = () => {
  const goals = [
    {
      icon: Zap,
      title: "Performance & Power Efficiency",
      description: "Optimize system responsiveness and reduce resource consumption"
    },
    {
      icon: Eye,
      title: "User-Friendliness & Accessibility",
      description: "Create intuitive interfaces that work for all skill levels"
    },
    {
      icon: Shield,
      title: "Stability & Reliability",
      description: "Ensure consistent performance and error prevention"
    },
    {
      icon: TrendingUp,
      title: "Scalability",
      description: "Design systems that can grow with business needs"
    }
  ];

  const processSteps = [
    { label: "Audit", description: "Current state analysis" },
    { label: "Evaluation", description: "Heuristic assessment" },
    { label: "Redesign", description: "Solution development" },
    { label: "Validation", description: "Testing & feedback" }
  ];

  return (
    <section className="py-16 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
              UX Goals & Strategy
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Our comprehensive approach focused on transforming the legacy system into a modern, 
              efficient, and user-friendly application.
            </p>
          </div>

          {/* Primary Goals */}
          <div className="mb-16">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">Primary Goals</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {goals.map((goal, index) => (
                <motion.div
                  key={goal.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="bg-background p-6 rounded-xl shadow-lg border border-border hover:shadow-xl transition-all duration-300"
                >
                  <goal.icon className="w-12 h-12 text-bengali-terracotta mb-4" />
                  <h4 className="font-semibold text-foreground mb-3 text-lg">
                    {goal.title}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {goal.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* UX Process Timeline */}
          <div className="bg-background p-8 rounded-2xl border border-border shadow-lg">
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">UX Process</h3>
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-bengali-terracotta to-bengali-red transform -translate-y-1/2 rounded-full"></div>
              
              {/* Process steps */}
              <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.label}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: index * 0.2 }}
                    viewport={{ once: true }}
                    className="text-center"
                  >
                    <div className="bg-bengali-terracotta text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 font-bold text-lg shadow-lg">
                      {index + 1}
                    </div>
                    <h4 className="font-semibold text-foreground mb-2 text-lg">
                      {step.label}
                    </h4>
                    <p className="text-muted-foreground text-sm">
                      {step.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Additional methodology points */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-background p-6 rounded-xl border border-border"
            >
              <Users className="w-8 h-8 text-bengali-terracotta mb-4" />
              <h4 className="font-semibold text-foreground mb-3">
                Heuristic Evaluation & Journey Mapping
              </h4>
              <p className="text-muted-foreground">
                Conducted comprehensive heuristic evaluation using Nielsen's principles and 
                mapped user journeys to identify critical friction points.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-background p-6 rounded-xl border border-border"
            >
              <Smartphone className="w-8 h-8 text-bengali-terracotta mb-4" />
              <h4 className="font-semibold text-foreground mb-3">
                UI & Hardware Integration Audit
              </h4>
              <p className="text-muted-foreground">
                Audited UI components, layout patterns, interactions, and hardware integration 
                to ensure seamless system performance.
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
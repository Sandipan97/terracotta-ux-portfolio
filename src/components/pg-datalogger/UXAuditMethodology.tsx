import { motion } from 'framer-motion';
import { Search, CheckCircle, Users, FileText, Target, Lightbulb } from 'lucide-react';

export const UXAuditMethodology = () => {
  const approaches = [
    {
      icon: Search,
      title: "Requirement Analysis",
      description: "Problem identification and stakeholder needs assessment",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: CheckCircle,
      title: "Heuristic Evaluation",
      description: "Applied Nielsen's usability principles for systematic assessment",
      color: "from-green-500 to-green-600"
    },
    {
      icon: FileText,
      title: "UI Audit",
      description: "Layout, interaction patterns, and visual hierarchy analysis",
      color: "from-purple-500 to-purple-600"
    },
    {
      icon: Target,
      title: "UX Standards Audit",
      description: "Design consistency and accessibility compliance review",
      color: "from-orange-500 to-orange-600"
    },
    {
      icon: Users,
      title: "User Journey Mapping",
      description: "Identified friction points and workflow inefficiencies",
      color: "from-teal-500 to-teal-600"
    },
    {
      icon: Lightbulb,
      title: "Design Validation",
      description: "Stakeholder feedback and iterative refinement process",
      color: "from-pink-500 to-pink-600"
    }
  ];

  return (
    <section className="py-16 bg-background">
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
              UX Audit & Methodology
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              A systematic approach to understanding the current system's limitations and 
              developing evidence-based solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {approaches.map((approach, index) => (
              <motion.div
                key={approach.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="relative group"
              >
                <div className="bg-background p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-r ${approach.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <approach.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-3 text-lg">
                    {approach.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {approach.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Process Flow Visualization */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-muted/30 p-8 rounded-2xl border border-border"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8 text-center">
              Our UX Process Flow
            </h3>
            
            <div className="relative">
              {/* Desktop flow */}
              <div className="hidden md:block">
                <div className="flex items-center justify-between relative">
                  {approaches.slice(0, 3).map((step, index) => (
                    <div key={index} className="flex items-center">
                      <div className="bg-bengali-terracotta text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                        {index + 1}
                      </div>
                      {index < 2 && (
                        <div className="w-24 h-1 bg-bengali-terracotta/30 mx-4"></div>
                      )}
                    </div>
                  ))}
                </div>
                <div className="flex items-center justify-between mt-8 relative">
                  {approaches.slice(3).map((step, index) => (
                    <div key={index + 3} className="flex items-center">
                      <div className="bg-bengali-terracotta text-white w-10 h-10 rounded-full flex items-center justify-center font-bold">
                        {index + 4}
                      </div>
                      {index < 2 && (
                        <div className="w-24 h-1 bg-bengali-terracotta/30 mx-4"></div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile flow */}
              <div className="md:hidden space-y-4">
                {approaches.map((step, index) => (
                  <div key={index} className="flex items-center">
                    <div className="bg-bengali-terracotta text-white w-8 h-8 rounded-full flex items-center justify-center font-bold text-sm mr-4">
                      {index + 1}
                    </div>
                    <span className="text-sm font-medium text-foreground">{step.title}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-8 p-6 bg-background rounded-xl border border-border">
              <h4 className="font-semibold text-foreground mb-3">Key Methodology Highlights</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-bengali-terracotta mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Comprehensive stakeholder interviews and requirements gathering</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-bengali-terracotta mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Systematic heuristic evaluation using established UX principles</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-bengali-terracotta mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Detailed user journey mapping with pain point identification</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="w-4 h-4 text-bengali-terracotta mr-2 mt-1 flex-shrink-0" />
                  <span className="text-sm">Iterative design validation with continuous stakeholder feedback</span>
                </li>
              </ul>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
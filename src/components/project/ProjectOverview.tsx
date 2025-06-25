
import { motion } from 'framer-motion';
import { Target, Search, Lightbulb, Shield, Accessibility } from 'lucide-react';

type Project = {
  overview?: string;
  challenge?: string;
  solution?: string;
};

interface ProjectOverviewProps {
  project: Project;
}

const ProjectOverview = ({ project }: ProjectOverviewProps) => {
  // Override content for P&G Research Razor project (project ID 1)
  const pgProjectContent = {
    overview: "A comprehensive UX redesign of P&G's Datalogger application used in industrial and research environments. Through systematic heuristic evaluation and user-centered design principles, we transformed a complex industrial interface into an intuitive, accessible, and secure application that serves researchers and industrial users across P&G's global operations.",
    challenge: "The legacy Datalogger interface suffered from 15 critical usability gaps including poor navigation structure, inconsistent interaction patterns, lack of visual feedback, scattered controls, accessibility issues, and security vulnerabilities. Industrial users were experiencing frustration with complex time settings, unclear alarm configurations, and system crashes during critical data operations.",
    solution: "Implemented a comprehensive redesign featuring logical information architecture, consolidated settings with clear groupings, enhanced accessibility with light/dark mode toggle, real-time feedback systems, password-protected developer options, and streamlined workflows. The solution includes a complete design system with reusable components and improved security protocols."
  };

  const displayProject = pgProjectContent;

  return (
    <section className="py-12 bg-background relative overflow-hidden dark-glow-subtle">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden z-0">
        <motion.div 
          className="absolute top-20 right-20 w-64 h-64 rounded-full bg-blue-500/5 filter blur-3xl" 
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3]
          }} 
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }} 
        />
        <motion.div 
          className="absolute bottom-20 left-20 w-80 h-80 rounded-full bg-slate-500/5 filter blur-2xl" 
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.5, 0.2]
          }} 
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut"
          }} 
        />
      </div>

      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* UX Research & Evaluation Section */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="flex items-center mb-6">
              <Search className="w-8 h-8 text-blue-600 mr-4" />
              <h2 
                className="font-heading text-xl xs:text-2xl md:text-3xl font-bold text-foreground"
                data-lovable-editable="true"
                data-lovable-key="ux-research-title"
              >
                UX Research & Evaluation
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-background/60 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-lg">
                <h3 
                  className="font-semibold text-lg mb-3 text-blue-600"
                  data-lovable-editable="true"
                  data-lovable-key="objective-title"
                >
                  🎯 Objective
                </h3>
                <p 
                  className="text-muted-foreground text-sm leading-relaxed"
                  data-lovable-editable="true"
                  data-lovable-key="objective-content"
                >
                  To identify and resolve usability issues in the legacy Datalogger interface, ensuring a seamless experience for industrial users.
                </p>
              </div>
              <div className="bg-background/60 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-lg">
                <h3 
                  className="font-semibold text-lg mb-3 text-blue-600"
                  data-lovable-editable="true"
                  data-lovable-key="methodology-title"
                >
                  🧠 Methodology
                </h3>
                <ul 
                  className="text-muted-foreground text-sm space-y-2"
                  data-lovable-editable="true"
                  data-lovable-key="methodology-list"
                >
                  <li>• Requirement Analysis</li>
                  <li>• Heuristic Evaluation</li>
                  <li>• UX/UI Recommendations</li>
                  <li>• Code-Feature Mapping</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Key Findings Section */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h2 
              className="font-heading text-xl xs:text-2xl md:text-3xl font-bold text-foreground mb-6"
              data-lovable-editable="true"
              data-lovable-key="key-findings-title"
            >
              📊 Key Findings
            </h2>
            <div className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 p-6 rounded-2xl border border-red-200/50 dark:border-red-800/50">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h3 
                    className="font-bold text-2xl text-red-600 mb-2"
                    data-lovable-editable="true"
                    data-lovable-key="usability-gaps-number"
                  >
                    15 Usability Gaps Identified
                  </h3>
                  <ul 
                    className="text-red-700 dark:text-red-300 space-y-1 text-sm"
                    data-lovable-editable="true"
                    data-lovable-key="usability-gaps-list"
                  >
                    <li>• Poor navigation and categorization</li>
                    <li>• Lack of visual feedback</li>
                    <li>• Inconsistent interaction patterns</li>
                    <li>• Scattered controls and poor layout logic</li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <div className="w-24 h-24 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
                    <Target className="w-12 h-12 text-red-600" />
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Design Solutions Section */}
          <motion.div 
            className="mb-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <div className="flex items-center mb-6">
              <Lightbulb className="w-8 h-8 text-blue-600 mr-4" />
              <h2 
                className="font-heading text-xl xs:text-2xl md:text-3xl font-bold text-foreground"
                data-lovable-editable="true"
                data-lovable-key="design-solutions-title"
              >
                🛠️ UX Design Solutions
              </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-background/60 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 
                  className="font-semibold text-lg mb-4 text-blue-600 flex items-center"
                  data-lovable-editable="true"
                  data-lovable-key="navigation-title"
                >
                  🧭 Navigation & Layout
                </h3>
                <ul 
                  className="text-muted-foreground text-sm space-y-2"
                  data-lovable-editable="true"
                  data-lovable-key="navigation-improvements"
                >
                  <li>• Logical grouping of settings</li>
                  <li>• Clear headers and labels</li>
                  <li>• Improved visual hierarchy</li>
                </ul>
              </div>
              <div className="bg-background/60 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 
                  className="font-semibold text-lg mb-4 text-blue-600 flex items-center"
                  data-lovable-editable="true"
                  data-lovable-key="accessibility-title"
                >
                  <Accessibility className="w-5 h-5 mr-2" />
                  Accessibility
                </h3>
                <ul 
                  className="text-muted-foreground text-sm space-y-2"
                  data-lovable-editable="true"
                  data-lovable-key="accessibility-improvements"
                >
                  <li>• Light/Dark mode toggle</li>
                  <li>• Enhanced contrast and readability</li>
                  <li>• Toast alerts for feedback</li>
                </ul>
              </div>
              <div className="bg-background/60 backdrop-blur-sm p-6 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300">
                <h3 
                  className="font-semibold text-lg mb-4 text-blue-600 flex items-center"
                  data-lovable-editable="true"
                  data-lovable-key="security-title"
                >
                  <Shield className="w-5 h-5 mr-2" />
                  Security
                </h3>
                <ul 
                  className="text-muted-foreground text-sm space-y-2"
                  data-lovable-editable="true"
                  data-lovable-key="security-improvements"
                >
                  <li>• Password-protected developer options</li>
                  <li>• Admin-only access alerts</li>
                  <li>• Enhanced data protection</li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Impact Assessment Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <h2 
              className="font-heading text-xl xs:text-2xl md:text-3xl font-bold text-foreground mb-6"
              data-lovable-editable="true"
              data-lovable-key="impact-assessment-title"
            >
              📈 Impact Assessment
            </h2>
            <div className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 p-6 rounded-2xl border border-green-200/50 dark:border-green-800/50">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                <div 
                  className="text-center p-4"
                  data-lovable-editable="true"
                  data-lovable-key="impact-usability"
                >
                  <div className="text-2xl mb-2">✅</div>
                  <h4 className="font-semibold text-green-700 dark:text-green-300 mb-1">Improved Usability</h4>
                  <p className="text-sm text-green-600 dark:text-green-400">Clearer navigation and logical grouping</p>
                </div>
                <div 
                  className="text-center p-4"
                  data-lovable-editable="true"
                  data-lovable-key="impact-errors"
                >
                  <div className="text-2xl mb-2">⚠️</div>
                  <h4 className="font-semibold text-orange-700 dark:text-orange-300 mb-1">Reduced Errors</h4>
                  <p className="text-sm text-orange-600 dark:text-orange-400">Disabled conflicting actions and added alerts</p>
                </div>
                <div 
                  className="text-center p-4 md:col-span-2 lg:col-span-1"
                  data-lovable-editable="true"
                  data-lovable-key="impact-feedback"
                >
                  <div className="text-2xl mb-2">🔔</div>
                  <h4 className="font-semibold text-blue-700 dark:text-blue-300 mb-1">Enhanced Feedback</h4>
                  <p className="text-sm text-blue-600 dark:text-blue-400">Real-time visual cues and toast messages</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProjectOverview;

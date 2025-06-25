
import { motion } from 'framer-motion';
import { ArrowLeft, Target, Search, Lightbulb, Shield, Accessibility, AlertTriangle, CheckCircle, Bell, Lock, Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { EditableImage } from '@/components/ui/editable-image';
import { useNavigate } from 'react-router-dom';

const PGResearchRazor = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/projects');
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="w-full relative h-[50vh] overflow-hidden">
        {/* Back button */}
        <motion.div 
          className="absolute top-4 left-4 z-30"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <Button 
            onClick={handleBack}
            variant="secondary" 
            className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background hover:text-blue-600 transition-all duration-300 border border-border/50"
            size="icon"
          >
            <ArrowLeft size={20} />
          </Button>
        </motion.div>

        {/* Hero Image */}
        <motion.div 
          className="absolute inset-0 z-10"
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        >
          <EditableImage 
            src="/placeholder.svg" 
            alt="P&G Research Razor Datalogger Interface"
            className="w-full h-full object-cover"
            fallbackSrc="/placeholder.svg"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10"></div>
        </motion.div>
      </section>

      {/* Project Header */}
      <section className="w-full bg-background/95 backdrop-blur-sm py-12 border-b border-border/30">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="max-w-6xl mx-auto text-center"
          >
            <div className="flex flex-wrap gap-2 mb-6 justify-center">
              <Badge className="bg-blue-500/10 text-blue-600 border border-blue-500/20">UX Research</Badge>
              <Badge className="bg-blue-500/10 text-blue-600 border border-blue-500/20">UI Design</Badge>
              <Badge className="bg-blue-500/10 text-blue-600 border border-blue-500/20">Accessibility</Badge>
              <Badge className="bg-blue-500/10 text-blue-600 border border-blue-500/20">Industrial Design</Badge>
            </div>

            <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground">
              P&G Research Razor – UX/UI Redesign
            </h1>
            
            <p className="text-lg mb-8 text-muted-foreground max-w-4xl mx-auto leading-relaxed">
              A comprehensive UX redesign of P&G's Datalogger application used in industrial and research environments. The goal was to enhance usability, accessibility, and security through heuristic evaluation, user-centered design, and modern UI practices.
            </p>

            <Button 
              onClick={() => scrollToSection('research')}
              className="bg-blue-600 hover:bg-blue-700 text-white"
              size="lg"
            >
              View Design Process
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Project Summary */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-6xl mx-auto"
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-6 text-foreground">Project Summary</h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  This project focused on transforming a complex industrial interface into an intuitive, 
                  accessible, and secure application that serves researchers and industrial users across 
                  P&G's global operations.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <Target className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Enhanced usability through heuristic evaluation</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Improved security with password protection</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Accessibility className="w-5 h-5 text-blue-600" />
                    <span className="text-sm">Better accessibility with theme toggle</span>
                  </div>
                </div>
              </div>
              <div className="bg-background/60 backdrop-blur-sm p-6 rounded-2xl border border-border/50">
                <EditableImage 
                  src="/placeholder.svg" 
                  alt="Legacy UI vs Redesigned UI Comparison"
                  className="w-full h-64 object-cover rounded-lg"
                  fallbackSrc="/placeholder.svg"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* UX Research & Evaluation */}
      <section id="research" className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <div className="flex items-center justify-center mb-6">
                <Search className="w-8 h-8 text-blue-600 mr-4" />
                <h2 className="font-heading text-3xl font-bold text-foreground">UX Research & Evaluation</h2>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-background/60 backdrop-blur-sm p-8 rounded-2xl border border-border/50"
              >
                <h3 className="font-semibold text-xl mb-4 text-blue-600 flex items-center">
                  <Target className="w-6 h-6 mr-3" />
                  Objective
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To identify and resolve usability issues in the legacy Datalogger interface, 
                  ensuring a seamless experience for industrial users.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-background/60 backdrop-blur-sm p-8 rounded-2xl border border-border/50"
              >
                <h3 className="font-semibold text-xl mb-4 text-blue-600 flex items-center">
                  <Lightbulb className="w-6 h-6 mr-3" />
                  Methodology
                </h3>
                <ul className="text-muted-foreground space-y-2">
                  <li>• Requirement Analysis</li>
                  <li>• Heuristic Evaluation</li>
                  <li>• UX/UI Recommendations</li>
                  <li>• Code-Feature Mapping</li>
                </ul>
              </motion.div>
            </div>

            {/* Key Findings */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-gradient-to-br from-red-50 to-orange-50 dark:from-red-950/20 dark:to-orange-950/20 p-8 rounded-2xl border border-red-200/50 dark:border-red-800/50"
            >
              <h3 className="font-heading text-2xl font-bold text-foreground mb-6">Key Findings</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold text-3xl text-red-600 mb-4">15 Usability Gaps Identified</h4>
                  <ul className="text-red-700 dark:text-red-300 space-y-2">
                    <li>• Poor navigation and categorization</li>
                    <li>• Lack of visual feedback</li>
                    <li>• Inconsistent interaction patterns</li>
                    <li>• Scattered controls and poor layout logic</li>
                  </ul>
                </div>
                <div className="flex items-center justify-center">
                  <EditableImage 
                    src="/placeholder.svg" 
                    alt="UX Findings Infographic"
                    className="w-full max-w-sm h-64 object-contain"
                    fallbackSrc="/placeholder.svg"
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* UX Design Solutions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">UX Design Solutions</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-background/60 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-semibold text-lg mb-4 text-blue-600">Navigation & Layout</h3>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• Logical grouping of settings</li>
                  <li>• Clear headers and labels</li>
                  <li>• Improved visual hierarchy</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-background/60 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-semibold text-lg mb-4 text-blue-600 flex items-center">
                  <Accessibility className="w-5 h-5 mr-2" />
                  Accessibility
                </h3>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• Light/Dark mode toggle</li>
                  <li>• Enhanced contrast and readability</li>
                  <li>• Toast alerts for feedback</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-background/60 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-semibold text-lg mb-4 text-blue-600 flex items-center">
                  <Shield className="w-5 h-5 mr-2" />
                  Security
                </h3>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• Password-protected developer options</li>
                  <li>• Admin-only access alerts</li>
                </ul>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-background/60 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <h3 className="font-semibold text-lg mb-4 text-blue-600">Functional Enhancements</h3>
                <ul className="text-muted-foreground text-sm space-y-2">
                  <li>• Consolidated time setting modes</li>
                  <li>• Grouped alarm settings</li>
                  <li>• Real-time feedback</li>
                </ul>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-background/60 backdrop-blur-sm p-8 rounded-2xl border border-border/50"
            >
              <h3 className="font-semibold text-xl mb-6 text-blue-600">Component Gallery</h3>
              <EditableImage 
                src="/placeholder.svg" 
                alt="Redesigned UI Components Carousel"
                className="w-full h-64 object-cover rounded-lg"
                fallbackSrc="/placeholder.svg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Problem-Solution Matrix */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">UX Problem-Solution Matrix</h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background/60 backdrop-blur-sm rounded-2xl border border-border/50 overflow-hidden"
            >
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-blue-50 dark:bg-blue-950/20">
                    <tr>
                      <th className="px-6 py-4 text-left font-semibold text-blue-600">Problem</th>
                      <th className="px-6 py-4 text-left font-semibold text-blue-600">Recommendation</th>
                      <th className="px-6 py-4 text-left font-semibold text-blue-600">Severity</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border/50">
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">No clear categorization</td>
                      <td className="px-6 py-4">Add headers and logical grouping</td>
                      <td className="px-6 py-4">
                        <Badge className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">High</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">Dark mode issues</td>
                      <td className="px-6 py-4">Add toggle for light/dark mode</td>
                      <td className="px-6 py-4">
                        <Badge className="bg-yellow-100 text-yellow-700 dark:bg-yellow-900 dark:text-yellow-300">Medium</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">Alerts only via serial logs</td>
                      <td className="px-6 py-4">Introduce standard alert system</td>
                      <td className="px-6 py-4">
                        <Badge className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">High</Badge>
                      </td>
                    </tr>
                    <tr className="hover:bg-muted/50 transition-colors">
                      <td className="px-6 py-4">UI crashes during read/write</td>
                      <td className="px-6 py-4">Add loading indicators and disable buttons</td>
                      <td className="px-6 py-4">
                        <Badge className="bg-red-100 text-red-700 dark:bg-red-900 dark:text-red-300">High</Badge>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Design System Components */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Design System Components</h2>
              <p className="text-muted-foreground mb-8">Interactive components designed in Figma</p>
            </motion.div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
              {[
                'Login Modal', 'Time & Date Settings', 'Alarm Configuration', 'Data Capture Rate',
                'Device Sensitivity', 'Format Modal', 'Auto-Reconnect', 'Static Alerts'
              ].map((component, index) => (
                <motion.div
                  key={component}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-background/60 backdrop-blur-sm p-4 rounded-lg border border-border/50 text-center hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-full h-20 bg-muted/50 rounded mb-3 flex items-center justify-center">
                    <Palette className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <p className="text-sm font-medium">{component}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
              className="text-center"
            >
              <p className="text-blue-600 font-medium">💡 Complete design flow available in the Figma file.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Assessment */}
      <section className="py-16 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Impact Assessment</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-12">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-950/20 dark:to-green-900/20 p-6 rounded-2xl border border-green-200/50 dark:border-green-800/50 text-center"
              >
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="font-semibold text-green-700 dark:text-green-300 mb-2">Improved Usability</h3>
                <p className="text-sm text-green-600 dark:text-green-400">Clearer navigation and logical grouping</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-950/20 dark:to-orange-900/20 p-6 rounded-2xl border border-orange-200/50 dark:border-orange-800/50 text-center"
              >
                <AlertTriangle className="w-12 h-12 text-orange-600 mx-auto mb-4" />
                <h3 className="font-semibold text-orange-700 dark:text-orange-300 mb-2">Reduced Errors</h3>
                <p className="text-sm text-orange-600 dark:text-orange-400">Disabled conflicting actions and added alerts</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 }}
                className="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-950/20 dark:to-blue-900/20 p-6 rounded-2xl border border-blue-200/50 dark:border-blue-800/50 text-center"
              >
                <Bell className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="font-semibold text-blue-700 dark:text-blue-300 mb-2">Enhanced Feedback</h3>
                <p className="text-sm text-blue-600 dark:text-blue-400">Real-time visual cues and toast messages</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-950/20 dark:to-purple-900/20 p-6 rounded-2xl border border-purple-200/50 dark:border-purple-800/50 text-center"
              >
                <Lock className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="font-semibold text-purple-700 dark:text-purple-300 mb-2">Increased Security</h3>
                <p className="text-sm text-purple-600 dark:text-purple-400">Admin-only access alerts</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gradient-to-br from-teal-50 to-teal-100 dark:from-teal-950/20 dark:to-teal-900/20 p-6 rounded-2xl border border-teal-200/50 dark:border-teal-800/50 text-center"
              >
                <Accessibility className="w-12 h-12 text-teal-600 mx-auto mb-4" />
                <h3 className="font-semibold text-teal-700 dark:text-teal-300 mb-2">Better Accessibility</h3>
                <p className="text-sm text-teal-600 dark:text-teal-400">Theme toggle and clearer CTAs</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.6 }}
              className="bg-background/60 backdrop-blur-sm p-8 rounded-2xl border border-border/50"
            >
              <h3 className="font-semibold text-xl mb-6 text-blue-600 text-center">Impact Metrics Chart</h3>
              <EditableImage 
                src="/placeholder.svg" 
                alt="Impact Metrics Chart"
                className="w-full h-64 object-contain"
                fallbackSrc="/placeholder.svg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Future Improvements */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl font-bold text-foreground mb-6">Future Improvements</h2>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {[
                'Role-based access control (RBAC)',
                'Full user management system',
                'Usability testing with real users',
                'Performance profiling',
                'Feature usage analytics'
              ].map((improvement, index) => (
                <motion.div
                  key={improvement}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-background/60 backdrop-blur-sm p-6 rounded-2xl border border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/20 rounded-full flex items-center justify-center">
                      <span className="text-blue-600 font-bold text-sm">{index + 1}</span>
                    </div>
                    <h3 className="font-semibold text-foreground">{improvement}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
              className="bg-background/60 backdrop-blur-sm p-8 rounded-2xl border border-border/50"
            >
              <h3 className="font-semibold text-xl mb-6 text-blue-600 text-center">Future Roadmap Timeline</h3>
              <EditableImage 
                src="/placeholder.svg" 
                alt="Future Roadmap Timeline"
                className="w-full h-64 object-contain"
                fallbackSrc="/placeholder.svg"
              />
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PGResearchRazor;

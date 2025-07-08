import { motion } from 'framer-motion';
import { Target, Users, BarChart, MessageSquare, Lightbulb, ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

const methodologies = [
  {
    icon: Users,
    title: "User Research",
    description: "Conducted in-depth interviews with kitchen staff and managers to understand pain points and workflows",
    connection: "research-q1"
  },
  {
    icon: BarChart,
    title: "Usability Analysis",
    description: "Evaluated existing system performance and identified critical inefficiencies in daily operations",
    connection: "research-q2"
  },
  {
    icon: MessageSquare,
    title: "Stakeholder Workshops",
    description: "Facilitated collaborative sessions with development teams and business stakeholders",
    connection: "research-q3"
  },
  {
    icon: Lightbulb,
    title: "Design Thinking",
    description: "Applied systematic design methodology to transform insights into actionable solutions",
    connection: "research-q4"
  }
];

export const ObjectiveMethodologies = () => {
  return (
    <section id="objective" className="py-20 bg-slate-900/30 backdrop-blur-sm">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <Accordion type="single" defaultValue="objective" collapsible className="space-y-6">
            {/* Objective Section */}
            <AccordionItem value="objective" className="border border-blue-500/30 rounded-2xl bg-gradient-to-br from-blue-500/10 to-cyan-500/10 backdrop-blur-sm">
              <AccordionTrigger className="px-8 py-6 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">Project Objective</h2>
                    <p className="text-blue-300 mt-1">Transform kitchen management through systematic design</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <div className="bg-white/5 rounded-xl p-6 border border-blue-500/20">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Create a comprehensive design system and platform redesign for Welbilt's kitchen management solution 
                    that addresses inconsistent user experiences, accelerates development cycles, and improves operational 
                    efficiency for commercial kitchen staff while maintaining scalability for future product evolution.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <div className="text-2xl font-bold text-cyan-400">35%</div>
                      <div className="text-sm text-gray-300">Development Speed</div>
                    </div>
                    <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <div className="text-2xl font-bold text-cyan-400">50+</div>
                      <div className="text-sm text-gray-300">Design Components</div>
                    </div>
                    <div className="text-center p-4 bg-blue-500/10 rounded-lg border border-blue-500/20">
                      <div className="text-2xl font-bold text-cyan-400">85%</div>
                      <div className="text-sm text-gray-300">User Satisfaction</div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Methodologies Section */}
            <AccordionItem value="methodologies" className="border border-cyan-500/30 rounded-2xl bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm">
              <AccordionTrigger className="px-8 py-6 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-full flex items-center justify-center">
                    <BarChart className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">Research Methodologies</h2>
                    <p className="text-cyan-300 mt-1">Systematic approach to understanding user needs</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {methodologies.map((method, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Card className="bg-white/5 border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-300 h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-blue-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <method.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white text-lg mb-2">{method.title}</h3>
                              <p className="text-gray-300 text-sm leading-relaxed">{method.description}</p>
                              <div className="mt-3 flex items-center gap-2">
                                <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                                <span className="text-xs text-cyan-300">Connects to Research Question {index + 1}</span>
                              </div>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
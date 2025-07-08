import { motion } from 'framer-motion';
import { Target, Users, BarChart, Smartphone, Leaf, ChevronDown } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';

const methodologies = [
  {
    icon: Users,
    title: "User Research",
    description: "Conducted in-depth interviews with homemakers to understand pain points with traditional manuals",
    connection: "research-q1"
  },
  {
    icon: BarChart,
    title: "Usability Testing",
    description: "Compared traditional printed manuals against AR prototypes across different age groups",
    connection: "research-q2"
  },
  {
    icon: Smartphone,
    title: "Technical Prototyping",
    description: "Developed AR interaction patterns optimized for kitchen environments and mobile devices",
    connection: "research-q3"
  },
  {
    icon: Leaf,
    title: "Environmental Impact Analysis",
    description: "Measured sustainability benefits of digital vs printed manual distribution",
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
            <AccordionItem value="objective" className="border border-indigo-500/30 rounded-2xl bg-gradient-to-br from-indigo-500/10 to-purple-500/10 backdrop-blur-sm">
              <AccordionTrigger className="px-8 py-6 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">Project Objective</h2>
                    <p className="text-indigo-300 mt-1">Transform traditional product manuals through immersive AR experiences</p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-8 pb-8">
                <div className="bg-white/5 rounded-xl p-6 border border-indigo-500/20">
                  <p className="text-gray-300 leading-relaxed text-lg">
                    Replace traditional printed product manuals with an immersive augmented reality experience that 
                    enhances user comprehension, reduces environmental impact, and provides real-time, contextual 
                    guidance for LG consumer products. The solution aims to make product setup, operation, and 
                    maintenance more intuitive and accessible across global markets.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-6">
                    <div className="text-center p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                      <div className="text-2xl font-bold text-cyan-400">60%</div>
                      <div className="text-sm text-gray-300">Reduction in Support Calls</div>
                    </div>
                    <div className="text-center p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                      <div className="text-2xl font-bold text-cyan-400">15+</div>
                      <div className="text-sm text-gray-300">Languages Supported</div>
                    </div>
                    <div className="text-center p-4 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                      <div className="text-2xl font-bold text-cyan-400">95%</div>
                      <div className="text-sm text-gray-300">Environmental Impact Reduction</div>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* Methodologies Section */}
            <AccordionItem value="methodologies" className="border border-purple-500/30 rounded-2xl bg-gradient-to-br from-purple-500/10 to-indigo-500/10 backdrop-blur-sm">
              <AccordionTrigger className="px-8 py-6 hover:no-underline">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-full flex items-center justify-center">
                    <BarChart className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-left">
                    <h2 className="font-heading text-2xl md:text-3xl font-bold text-white">Research Methodologies</h2>
                    <p className="text-purple-300 mt-1">Systematic approach to understanding user needs and technical constraints</p>
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
                      <Card className="bg-white/5 border-purple-500/20 hover:border-purple-500/40 transition-all duration-300 h-full">
                        <CardContent className="p-6">
                          <div className="flex items-start gap-4">
                            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-lg flex items-center justify-center flex-shrink-0">
                              <method.icon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <h3 className="font-semibold text-white text-lg mb-2">{method.title}</h3>
                              <p className="text-gray-300 text-sm leading-relaxed">{method.description}</p>
                              <div className="mt-3 flex items-center gap-2">
                                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                                <span className="text-xs text-purple-300">Connects to Research Question {index + 1}</span>
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
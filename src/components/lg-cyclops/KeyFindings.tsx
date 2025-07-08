import { motion } from 'framer-motion';
import { TrendingUp, Clock, Mic, Globe, Shield, ChevronDown, FileImage } from 'lucide-react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const keyFindings = [
  {
    id: 'setup-time-reduction',
    icon: Clock,
    title: "73% Reduction in Setup Time",
    metric: "73%",
    description: "AR guidance with voice instructions dramatically reduced the time users needed to set up kitchen appliances compared to traditional printed manuals.",
    details: "Average setup time decreased from 15 minutes to 4 minutes across all tested appliances. Users particularly benefited from 3D spatial visualization of component placement.",
    visualPlaceholder: "Setup time comparison chart showing before/after metrics",
    tags: ["Time Efficiency", "User Experience", "Task Completion"]
  },
  {
    id: 'voice-preference',
    icon: Mic,
    title: "89% User Preference for Voice + Visual Cues",
    metric: "89%",
    description: "Combined audio-visual guidance proved overwhelmingly preferred over text-only or visual-only instruction methods.",
    details: "Users across all age groups (25-70) showed strong preference for synchronized voice guidance with AR overlays. Accessibility scores improved significantly for users with visual impairments.",
    visualPlaceholder: "User preference survey results and demographic breakdown",
    tags: ["Voice UI", "Accessibility", "User Preference"]
  },
  {
    id: 'language-accessibility',
    icon: Globe,
    title: "Universal Accessibility Across 15+ Languages",
    metric: "15+",
    description: "Multilingual voice guidance with cultural adaptations successfully served diverse global markets without compromising user experience.",
    details: "Localization framework supported 15 languages with cultural adaptations for visual symbols and interaction patterns. 94% satisfaction across all tested markets.",
    visualPlaceholder: "Global adoption map with language distribution and satisfaction scores",
    tags: ["Localization", "Global Reach", "Cultural Design"]
  },
  {
    id: 'support-reduction',
    icon: Shield,
    title: "60% Reduction in Customer Support Calls",
    metric: "60%",
    description: "Self-service capabilities through AR guidance significantly reduced the need for customer support interactions.",
    details: "Support call volume decreased from 12,000 to 4,800 monthly calls. Most common issues (setup, troubleshooting) were resolved through AR guidance without human intervention.",
    visualPlaceholder: "Support call volume trends and issue resolution rates",
    tags: ["Support Efficiency", "Self-Service", "Cost Reduction"]
  },
  {
    id: 'environmental-impact',
    icon: TrendingUp,
    title: "95% Environmental Impact Reduction",
    metric: "95%",
    description: "Digital AR manuals eliminated paper waste and reduced carbon footprint from printing and distribution logistics.",
    details: "Eliminated 2.3 million printed manuals annually, saving 276 tons of paper and reducing CO2 emissions by 1,150 tons per year across global operations.",
    visualPlaceholder: "Environmental impact infographic with carbon footprint metrics",
    tags: ["Sustainability", "Environmental", "Carbon Reduction"]
  }
];

export const KeyFindings = () => {
  return (
    <section id="findings" className="py-20 bg-gradient-to-br from-purple-900/20 to-indigo-900/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="font-heading text-3xl md:text-4xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Key Research Findings
            </motion.h2>
            <motion.p 
              className="text-xl text-purple-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Evidence-based insights that shaped our AR design decisions and drove measurable business outcomes
            </motion.p>
          </div>

          <Accordion type="multiple" className="space-y-6">
            {keyFindings.map((finding, index) => (
              <AccordionItem 
                key={finding.id} 
                value={finding.id}
                className="border border-purple-500/30 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm hover:border-indigo-500/50 transition-all duration-300"
              >
                <AccordionTrigger className="px-8 py-6 hover:no-underline">
                  <motion.div 
                    className="flex items-center gap-6 w-full"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center">
                      <finding.icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="flex-1 text-left">
                      <div className="flex items-center gap-4 mb-2">
                        <h3 className="font-heading text-xl font-bold text-white">{finding.title}</h3>
                        <div className="text-3xl font-bold text-purple-400">{finding.metric}</div>
                      </div>
                      <p className="text-gray-300">{finding.description}</p>
                    </div>
                    <div className="w-12 h-12 bg-slate-700/50 rounded-lg flex items-center justify-center border border-slate-600/50">
                      <FileImage className="w-6 h-6 text-gray-400" />
                    </div>
                  </motion.div>
                </AccordionTrigger>
                <AccordionContent className="px-8 pb-8">
                  <Card className="bg-white/5 border-purple-500/20">
                    <CardContent className="p-6">
                      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        <div className="lg:col-span-2">
                          <h4 className="text-indigo-300 font-semibold mb-3">Detailed Analysis</h4>
                          <p className="text-gray-300 leading-relaxed mb-4">{finding.details}</p>
                          
                          <div className="flex flex-wrap gap-2">
                            {finding.tags.map((tag, tagIndex) => (
                              <Badge key={tagIndex} variant="secondary" className="bg-purple-500/20 text-purple-300 border-purple-500/30">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                        </div>
                        
                        <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                          <div className="text-center">
                            <FileImage className="w-16 h-16 text-gray-400 mx-auto mb-3" />
                            <p className="text-sm text-gray-400">{finding.visualPlaceholder}</p>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};
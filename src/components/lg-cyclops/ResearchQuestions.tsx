import { motion } from 'framer-motion';
import { Search, Users, Smartphone, Leaf, ArrowDownRight, ArrowRight } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

const researchQuestions = [
  {
    id: 'comprehension-barriers',
    icon: Users,
    question: "How can AR technology reduce manual comprehension barriers for diverse user groups?",
    methodology: "User Research",
    connection: 1,
    insight: "73% of users struggled with spatial understanding in traditional manuals",
    solution: "voice-guidance",
    solutionText: "Voice-Guided AR Interface"
  },
  {
    id: 'interaction-patterns',
    icon: Smartphone,
    question: "What interaction patterns work best for kitchen appliance guidance in AR environments?",
    methodology: "Usability Testing",
    connection: 2,
    insight: "360° visualization increased task completion by 85%",
    solution: "3d-interaction",
    solutionText: "3D Product Interaction"
  },
  {
    id: 'age-accessibility',
    icon: Search,
    question: "How can we make AR accessible across different age groups and technical skill levels?",
    methodology: "Technical Prototyping",
    connection: 3,
    insight: "Voice + visual cues worked for 89% of users aged 25-70",
    solution: "multilingual",
    solutionText: "Global Accessibility"
  },
  {
    id: 'environmental-impact',
    icon: Leaf,
    question: "What's the measurable environmental impact of digital vs printed manual distribution?",
    methodology: "Impact Analysis",
    connection: 4,
    insight: "95% reduction in carbon footprint with digital AR manuals",
    solution: "safety-features",
    solutionText: "Comprehensive AR Framework"
  }
];

export const ResearchQuestions = () => {
  const scrollToSolution = (solutionId: string) => {
    const element = document.getElementById(`detailed-${solutionId}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="research" className="py-20 bg-slate-900/50 backdrop-blur-sm">
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
              Research Questions
            </motion.h2>
            <motion.p 
              className="text-xl text-indigo-300 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Systematic investigation driving evidence-based design decisions
            </motion.p>
          </div>

          <div className="space-y-8">
            {researchQuestions.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="relative"
              >
                <Card className="bg-gradient-to-r from-indigo-900/20 to-purple-900/20 border-indigo-500/30 backdrop-blur-sm hover:border-purple-500/50 transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-start gap-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-xl flex items-center justify-center">
                          <span className="text-white font-bold text-lg">{item.connection}</span>
                        </div>
                        <div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center">
                          <item.icon className="w-5 h-5 text-indigo-300" />
                        </div>
                      </div>
                      <div className="flex-1">
                        <CardTitle className="text-white text-lg mb-2">{item.question}</CardTitle>
                        <div className="flex items-center gap-3 mb-4">
                          <span className="text-sm text-indigo-300 bg-indigo-500/20 px-3 py-1 rounded-full">
                            Connected to: {item.methodology}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="ml-16 space-y-4">
                      <div className="bg-slate-800/50 rounded-lg p-4 border border-slate-700/50">
                        <h4 className="text-purple-300 font-semibold mb-2 flex items-center gap-2">
                          <ArrowDownRight className="w-4 h-4" />
                          Key Finding
                        </h4>
                        <p className="text-gray-300">{item.insight}</p>
                      </div>
                      
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2 text-sm text-gray-400">
                          <ArrowRight className="w-4 h-4" />
                          <span>This insight led to:</span>
                          <span className="text-purple-300 font-medium">{item.solutionText}</span>
                        </div>
                        <Button
                          onClick={() => scrollToSolution(item.solution)}
                          variant="outline"
                          size="sm"
                          className="border-purple-500/50 text-purple-300 hover:bg-purple-500/20 hover:border-purple-500"
                        >
                          See Solution
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Connection Line to Next Question */}
                {index < researchQuestions.length - 1 && (
                  <div className="absolute left-6 top-full w-px h-8 bg-gradient-to-b from-indigo-500 to-purple-500 opacity-50" />
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
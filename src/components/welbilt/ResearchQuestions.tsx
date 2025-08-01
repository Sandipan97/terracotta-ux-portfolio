import { motion } from 'framer-motion';
import { Search, ArrowRight, HelpCircle, Target } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const researchQuestions = [
  {
    id: 'q1',
    number: '01',
    question: "How can we reduce cognitive load for kitchen staff during peak hours?",
    methodology: "User Research & Workflow Analysis",
    insight: "Staff spend 40% more time navigating complex menus during rush periods",
    solutionAnchor: "detailed-workflows",
    methodIcon: Target
  },
  {
    id: 'q2',
    number: '02',
    question: "What design patterns cause the most confusion in kitchen equipment management?",
    methodology: "Usability Analysis & Error Tracking",
    insight: "Inconsistent button placements led to 60% of operational errors",
    solutionAnchor: "detailed-interface",
    methodIcon: Search
  },
  {
    id: 'q3',
    number: '03',
    question: "How can real-time communication improve kitchen coordination?",
    methodology: "Stakeholder Workshops & Observation",
    insight: "Miscommunication causes 30% of order delays and quality issues",
    solutionAnchor: "detailed-collaboration",
    methodIcon: HelpCircle
  },
  {
    id: 'q4',
    number: '04',
    question: "What development inefficiencies stem from design inconsistencies?",
    methodology: "Design Thinking & Developer Interviews",
    insight: "Teams spent 65% more time on design implementation without standards",
    solutionAnchor: "detailed-design-system",
    methodIcon: Target
  }
];

export const ResearchQuestions = () => {
  const scrollToSolution = (anchor: string) => {
    const element = document.getElementById(anchor);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section id="research" className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <motion.h2 
              className="font-heading text-3xl md:text-5xl font-bold text-gray-900 mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              Research Questions
            </motion.h2>
            <motion.p 
              className="text-xl text-gray-600 max-w-3xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              Key questions that guided our research methodology and shaped our design solutions
            </motion.p>
          </div>

          <div className="space-y-6">
            {researchQuestions.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="bg-white border-gray-200 shadow-lg hover:border-blue-300 transition-all duration-300 group">
                  <CardContent className="p-8">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center">
                      {/* Question Number */}
                      <div className="lg:col-span-1">
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center">
                          <span className="text-white text-xl font-bold">{item.number}</span>
                        </div>
                      </div>

                      {/* Question Content */}
                      <div className="lg:col-span-7">
                        <h3 className="text-gray-900 text-xl font-semibold mb-3">{item.question}</h3>
                        
                        {/* Methodology Connection */}
                        <div className="flex items-center gap-3 mb-4">
                          <div className="flex items-center gap-2 px-3 py-1 bg-blue-50 rounded-full border border-blue-200">
                            <item.methodIcon className="w-4 h-4 text-blue-600" />
                            <span className="text-blue-700 text-sm">{item.methodology}</span>
                          </div>
                          <div className="w-8 h-px bg-gradient-to-r from-blue-400 to-transparent"></div>
                        </div>

                        {/* Key Insight */}
                        <div className="bg-cyan-50 border border-cyan-200 rounded-lg p-4">
                          <div className="flex items-start gap-3">
                            <div className="w-6 h-6 bg-cyan-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                              <div className="w-2 h-2 bg-cyan-600 rounded-full"></div>
                            </div>
                            <div>
                              <span className="text-cyan-700 text-sm font-medium">Key Insight</span>
                              <p className="text-gray-700 text-sm mt-1">{item.insight}</p>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Solution Link */}
                      <div className="lg:col-span-4 flex justify-end">
                        <Button
                          onClick={() => scrollToSolution(item.solutionAnchor)}
                          variant="outline"
                          className="border-cyan-300 text-cyan-700 hover:bg-cyan-50 hover:border-cyan-400 group-hover:translate-x-2 transition-all duration-300"
                        >
                          See Solution
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </Button>
                      </div>
                    </div>

                    {/* Connection Line for Visual Flow */}
                    {index < researchQuestions.length - 1 && (
                      <div className="flex justify-center mt-6">
                        <div className="w-px h-8 bg-gradient-to-b from-blue-300 to-transparent"></div>
                      </div>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Flow Indicator */}
          <motion.div 
            className="text-center mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8 }}
          >
            <div className="inline-flex items-center gap-3 px-6 py-3 bg-gray-100 rounded-full border border-gray-200">
              <Search className="w-5 h-5 text-blue-600" />
              <span className="text-gray-700 text-sm">Research Questions</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700 text-sm">Design Solutions</span>
              <ArrowRight className="w-4 h-4 text-blue-600" />
              <span className="text-gray-700 text-sm">Measurable Impact</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
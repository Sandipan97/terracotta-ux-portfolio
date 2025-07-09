import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const MarketInsights = () => {
  const marketData = [
    { segment: "Educational Toys", tam: "$24.3 Billion", cagr: "15%" },
    { segment: "STEM Toy Market", tam: "Growing to $17B+", cagr: "7%" },
    { segment: "Indian Toy Market", tam: "₹10,000 Cr+", cagr: "13–16%" }
  ];

  const painPoints = [
    "Static models lack interactivity",
    "Kids fear medical environments", 
    "Most STEM toys ignore biology"
  ];

  const competitors = [
    { brand: "Smartivity", interaction: "Medium", modularity: "Static", price: "₹999" },
    { brand: "MyAskro CPR", interaction: "High", modularity: "Static", price: "₹15,999" },
    { brand: "IMM Torso Kit", interaction: "Low", modularity: "Static", price: "₹3,500" },
    { brand: "Ours", interaction: "✅ High", modularity: "✅ Modular", price: "₹1,500–₹5,000" }
  ];

  return (
    <section id="market" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="market-insights" className="w-full">
            <AccordionItem value="market-insights" className="border border-cyan-200/50 rounded-2xl px-6 bg-cyan-50/30 dark:bg-cyan-900/10 dark:border-cyan-800/50">
              <AccordionTrigger className="text-xl font-semibold text-foreground hover:text-cyan-600 dark:hover:text-cyan-400 py-6">
                📈 MARKET INSIGHTS
                <span className="ml-2 text-sm text-muted-foreground">[Bar Chart: Market Growth vs Product Interactivity]</span>
              </AccordionTrigger>
              <AccordionContent className="pb-6">
                <div className="space-y-6">
                  <div className="bg-background/60 rounded-lg p-6 border border-cyan-200/30 dark:border-cyan-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-4">Market Size & Growth (TAM 2020–2024)</h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-cyan-200/50">
                            <th className="text-left py-3 px-4 font-semibold text-foreground bg-cyan-100/50 dark:bg-cyan-900/20 rounded-tl-lg">
                              Segment
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground bg-cyan-100/50 dark:bg-cyan-900/20">
                              TAM 2020–2024 (Est.)
                            </th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground bg-cyan-100/50 dark:bg-cyan-900/20 rounded-tr-lg">
                              CAGR
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          {marketData.map((data, index) => (
                            <motion.tr
                              key={index}
                              className="border-b border-cyan-200/30 hover:bg-cyan-50/30 dark:hover:bg-cyan-900/10 transition-colors"
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <td className="py-3 px-4 font-medium text-cyan-700 dark:text-cyan-400">
                                {data.segment}
                              </td>
                              <td className="py-3 px-4 text-muted-foreground">
                                {data.tam}
                              </td>
                              <td className="py-3 px-4 text-muted-foreground">
                                {data.cagr}
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-background/60 rounded-lg p-6 border border-cyan-200/30 dark:border-cyan-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-4">Pain Points in Current Market:</h3>
                    <div className="space-y-2">
                      {painPoints.map((point, index) => (
                        <motion.div
                          key={index}
                          className="flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <span className="text-cyan-600 dark:text-cyan-400 mr-2">•</span>
                          <span className="text-muted-foreground">{point}</span>
                        </motion.div>
                      ))}
                    </div>
                  </div>

                  <div className="bg-background/60 rounded-lg p-6 border border-cyan-200/30 dark:border-cyan-800/30">
                    <h3 className="font-bold text-lg text-foreground mb-4 flex items-center">
                      👁️‍🗨️ COMPETITIVE ANALYSIS SNAPSHOT
                      <span className="ml-2 text-sm text-muted-foreground">[Side-by-Side Toy Comparison Cards]</span>
                    </h3>
                    <div className="overflow-x-auto">
                      <table className="w-full border-collapse">
                        <thead>
                          <tr className="border-b border-cyan-200/50">
                            <th className="text-left py-3 px-4 font-semibold text-foreground bg-cyan-100/50 dark:bg-cyan-900/20 rounded-tl-lg">Brand</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground bg-cyan-100/50 dark:bg-cyan-900/20">Interaction</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground bg-cyan-100/50 dark:bg-cyan-900/20">Modularity</th>
                            <th className="text-left py-3 px-4 font-semibold text-foreground bg-cyan-100/50 dark:bg-cyan-900/20 rounded-tr-lg">Price Range</th>
                          </tr>
                        </thead>
                        <tbody>
                          {competitors.map((comp, index) => (
                            <motion.tr
                              key={index}
                              className={`border-b border-cyan-200/30 transition-colors ${
                                comp.brand === "Ours" 
                                  ? "bg-cyan-100/50 dark:bg-cyan-900/20" 
                                  : "hover:bg-cyan-50/30 dark:hover:bg-cyan-900/10"
                              }`}
                              initial={{ opacity: 0, x: -20 }}
                              whileInView={{ opacity: 1, x: 0 }}
                              transition={{ duration: 0.5, delay: index * 0.1 }}
                              viewport={{ once: true }}
                            >
                              <td className="py-3 px-4 font-medium text-cyan-700 dark:text-cyan-400">
                                {comp.brand}
                              </td>
                              <td className="py-3 px-4 text-muted-foreground">
                                {comp.interaction}
                              </td>
                              <td className="py-3 px-4 text-muted-foreground">
                                {comp.modularity}
                              </td>
                              <td className="py-3 px-4 text-muted-foreground">
                                {comp.price}
                              </td>
                            </motion.tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default MarketInsights;
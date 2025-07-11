import { motion } from 'framer-motion';
import { DollarSign, Leaf, TrendingUp, Globe } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const impactMetrics = [
  { icon: DollarSign, title: "Cost Savings", value: "95%", description: "Reduction in printing costs", color: "bengali-terracotta" },
  { icon: Leaf, title: "Sustainability", value: "100%", description: "Paperless distribution", color: "bengali-mustard" },
  { icon: Globe, title: "Accessibility", value: "15+", description: "Languages supported", color: "bengali-red" },
  { icon: TrendingUp, title: "User Experience", value: "92%", description: "Satisfaction rating", color: "bengali-terracotta" }
];

export const BusinessImpact = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-bengali-terracotta/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              📊 Business Impact
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Measurable ROI and sustainability benefits across all business metrics
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impactMetrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className={`bg-gradient-to-br from-${metric.color}/10 to-${metric.color}/5 border-${metric.color}/20 text-center h-full`}>
                  <CardContent className="p-6">
                    <metric.icon className={`w-8 h-8 text-${metric.color} mx-auto mb-4`} />
                    <div className={`text-3xl font-bold text-${metric.color} mb-2`}>{metric.value}</div>
                    <h3 className="font-semibold text-foreground mb-2">{metric.title}</h3>
                    <p className="text-sm text-muted-foreground">{metric.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
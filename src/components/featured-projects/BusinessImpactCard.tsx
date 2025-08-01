import { motion } from 'framer-motion';
import { Card, CardContent, CardHeader, CardTitle } from '../ui/card';
import { Badge } from '../ui/badge';
import { TrendingUp, Users, DollarSign, Clock } from 'lucide-react';

interface BusinessMetric {
  icon: any;
  label: string;
  value: string;
  improvement: string;
  color: string;
}

interface BusinessImpactCardProps {
  title: string;
  description: string;
  metrics: BusinessMetric[];
  projectType: string;
  industry: string;
}

const BusinessImpactCard = ({ title, description, metrics, projectType, industry }: BusinessImpactCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="mb-8"
    >
      <Card className="bg-white/95 backdrop-blur-md shadow-xl border border-warm-terracotta/20">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle className="text-warm-clay text-xl">{title}</CardTitle>
              <p className="text-warm-clay/70 mt-2">{description}</p>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-warm-terracotta/10 text-warm-terracotta border-warm-terracotta/20">
                {projectType}
              </Badge>
              <Badge variant="secondary" className="bg-warm-rust/10 text-warm-rust border-warm-rust/20">
                {industry}
              </Badge>
            </div>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className={`p-3 rounded-lg bg-${metric.color}/10 mx-auto w-fit mb-3`}>
                  <metric.icon className={`w-6 h-6 text-${metric.color}`} />
                </div>
                <div className={`text-2xl font-bold text-${metric.color} mb-1`}>
                  {metric.value}
                </div>
                <div className="text-sm text-warm-clay/60 mb-1">
                  {metric.label}
                </div>
                <div className="text-xs text-warm-golden font-medium">
                  {metric.improvement}
                </div>
              </motion.div>
            ))}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BusinessImpactCard;
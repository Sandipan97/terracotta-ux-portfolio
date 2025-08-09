
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
      <Card className="bg-card/95 backdrop-blur-md shadow-xl border-border">
        <CardHeader>
          <div className="flex justify-between items-start">
            <div>
              <CardTitle 
                className="text-foreground text-xl"
                data-lovable-editable="business-impact-title"
              >
                {title}
              </CardTitle>
              <p 
                className="text-muted-foreground mt-2"
                data-lovable-editable="business-impact-description"
              >
                {description}
              </p>
            </div>
            <div className="flex gap-2">
              <Badge variant="secondary" className="bg-muted text-muted-foreground border-border">
                <span data-lovable-editable="business-impact-project-type">{projectType}</span>
              </Badge>
              <Badge variant="secondary" className="bg-muted text-muted-foreground border-border">
                <span data-lovable-editable="business-impact-industry">{industry}</span>
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
                <div className="text-sm text-muted-foreground mb-1">
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

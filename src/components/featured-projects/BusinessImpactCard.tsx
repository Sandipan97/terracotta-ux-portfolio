
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

const BusinessImpactCard = ({
  title,
  description,
  metrics,
  projectType,
  industry
}: BusinessImpactCardProps) => {
  return (
    <motion.div 
      className="mb-16"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <Card className="bg-gradient-to-br from-primary/5 to-primary/10 border-primary/20">
        <CardHeader className="text-center pb-6">
          <CardTitle className="text-2xl font-bold text-foreground mb-2">
            {title}
          </CardTitle>
          <p className="text-muted-foreground">
            {description}
          </p>
          <div className="flex gap-2 justify-center mt-4">
            <Badge variant="outline" className="border-primary/30 text-primary">
              {projectType}
            </Badge>
            <Badge variant="outline" className="border-primary/30 text-primary">
              {industry}
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {metrics.map((metric, index) => {
              const IconComponent = metric.icon;
              return (
                <div key={index} className="text-center">
                  <div className="w-12 h-12 mx-auto mb-3 bg-primary/10 rounded-full flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <div className="text-2xl font-bold text-primary mb-1">
                    {metric.value}
                  </div>
                  <div className="text-xs text-muted-foreground mb-1">
                    {metric.label}
                  </div>
                  <div className="text-xs text-primary font-medium">
                    {metric.improvement}
                  </div>
                </div>
              );
            })}
          </div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default BusinessImpactCard;

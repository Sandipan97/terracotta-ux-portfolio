
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Award, Users, Lightbulb, TrendingUp } from 'lucide-react';

const ExecutiveSummaryCard = () => {
  const credentials = [
    { icon: Award, label: "4+ Years of Design", color: "warm-terracotta" },
    { icon: Users, label: "Creative & Analytical", color: "warm-rust" },
    { icon: Lightbulb, label: "IISc Alumnus", color: "warm-golden" },
    { icon: TrendingUp, label: "Mining User Satisfaction", color: "warm-terracotta" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="mb-4 lg:mb-6 w-full"
    >
      <Card className="bg-card/90 backdrop-blur-md border-border shadow-xl">
        <CardContent className="p-4 lg:p-6">
          <h3 className="text-base lg:text-lg xl:text-xl font-semibold text-foreground mb-3 lg:mb-4">
            Senior UX Designer & Design Systems Expert
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 lg:gap-3">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center space-x-2 lg:space-x-3"
              >
                <div className={`p-1.5 lg:p-2 rounded-lg bg-${credential.color}/10`}>
                  <credential.icon className={`w-3 h-3 lg:w-4 lg:h-4 text-${credential.color}`} />
                </div>
                <span className="text-xs lg:text-sm font-medium text-foreground leading-tight">
                  {credential.label}
                </span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-3 lg:mt-4 pt-3 lg:pt-4 border-t border-border"
          >
            <div className="flex flex-wrap gap-1.5 lg:gap-2">
              <Badge variant="secondary" className="bg-muted text-muted-foreground border-border text-xs">
                Design Systems
              </Badge>
              <Badge variant="secondary" className="bg-muted text-muted-foreground border-border text-xs">
                User Research
              </Badge>
              <Badge variant="secondary" className="bg-muted text-muted-foreground border-border text-xs">
                Product Strategy
              </Badge>
               <Badge variant="secondary" className="bg-muted text-muted-foreground border-border text-xs">
                AI Integration
              </Badge>
               <Badge variant="secondary" className="bg-muted text-muted-foreground border-border text-xs">
                AR Design
              </Badge>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExecutiveSummaryCard;

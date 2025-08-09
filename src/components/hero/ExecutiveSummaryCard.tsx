
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Award, Users, Lightbulb, TrendingUp } from 'lucide-react';

const ExecutiveSummaryCard = () => {
  const credentials = [
    { icon: Award, label: "5+ Years Experience", color: "warm-terracotta" },
    { icon: Users, label: "24+ Projects", color: "warm-rust" },
    { icon: Lightbulb, label: "IISc Graduate", color: "warm-golden" },
    { icon: TrendingUp, label: "40% User Satisfaction Increase", color: "warm-sage" }
  ];

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3, duration: 0.6 }}
      className="mb-6"
    >
      <Card className="bg-card/90 backdrop-blur-md border-border shadow-xl">
        <CardContent className="p-6">
          <h3 className="text-lg font-semibold text-foreground mb-4">
            Senior UX Designer & Product Manager
          </h3>
          <div className="grid grid-cols-2 gap-3">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-center space-x-2"
              >
                <div className={`p-2 rounded-lg bg-${credential.color}/10`}>
                  <credential.icon className={`w-4 h-4 text-${credential.color}`} />
                </div>
                <span className="text-sm font-medium text-foreground">
                  {credential.label}
                </span>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="mt-4 pt-4 border-t border-border"
          >
            <div className="flex flex-wrap gap-2">
              <Badge variant="secondary" className="bg-muted text-muted-foreground border-border">
                Design Systems
              </Badge>
              <Badge variant="secondary" className="bg-muted text-muted-foreground border-border">
                User Research
              </Badge>
              <Badge variant="secondary" className="bg-muted text-muted-foreground border-border">
                Product Strategy
              </Badge>
            </div>
          </motion.div>
        </CardContent>
      </Card>
    </motion.div>
  );
};

export default ExecutiveSummaryCard;

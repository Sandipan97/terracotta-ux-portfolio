
import { motion } from 'framer-motion';
import { Badge } from '../ui/badge';
import { Card, CardContent } from '../ui/card';
import { Award, Users, Lightbulb, TrendingUp } from 'lucide-react';

const ExecutiveSummaryCard = () => {
  const credentials = [
    { icon: Award, label: "5 Years of Design and Counting", color: "warm-terracotta" },
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
      <Card className="bg-card/95 backdrop-blur-md border-border shadow-2xl hover:shadow-3xl transition-all duration-300 overflow-hidden">
        <CardContent className="p-8 lg:p-10 relative">
          {/* Subtle gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-warm-golden/5 via-transparent to-warm-terracotta/5 pointer-events-none" />
          
          {/* Header */}
          <div className="relative z-10 mb-8 lg:mb-10">
            <h3 className="text-xl lg:text-2xl xl:text-3xl font-bold text-foreground mb-3 leading-tight bg-gradient-to-r from-warm-terracotta to-warm-golden bg-clip-text text-transparent">
              Senior UX Designer & Design Systems Expert
            </h3>
            <div className="w-20 h-0.5 bg-gradient-to-r from-warm-golden to-warm-terracotta rounded-full" />
          </div>

          {/* Credentials Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 lg:gap-7 mb-8 lg:mb-10 relative z-10">
            {credentials.map((credential, index) => (
              <motion.div
                key={credential.label}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="flex items-start space-x-4 lg:space-x-5 p-4 lg:p-5 rounded-xl bg-card/50 backdrop-blur-sm border border-border/50 hover:border-warm-golden/30 transition-all duration-300 hover:transform hover:scale-[1.02] shadow-lg hover:shadow-xl"
              >
                <div className={`p-3 lg:p-4 rounded-lg bg-${credential.color}/10 border border-${credential.color}/20 flex-shrink-0`}>
                  <credential.icon className={`w-5 h-5 lg:w-6 lg:h-6 text-${credential.color}`} />
                </div>
                <span className="text-base lg:text-lg font-semibold text-foreground leading-relaxed flex-1">
                  {credential.label}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Skills Badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
            className="pt-8 lg:pt-10 border-t border-gradient-to-r from-transparent via-border to-transparent relative z-10"
          >
            <div className="flex flex-wrap gap-3 lg:gap-4 justify-center sm:justify-start">
              <Badge variant="secondary" className="bg-warm-golden/10 text-warm-golden border-warm-golden/30 hover:bg-warm-golden/20 transition-all duration-300 text-sm lg:text-base font-semibold px-4 py-2 rounded-full">
                Design Systems
              </Badge>
              <Badge variant="secondary" className="bg-warm-golden/10 text-warm-golden border-warm-golden/30 hover:bg-warm-golden/20 transition-all duration-300 text-sm lg:text-base font-semibold px-4 py-2 rounded-full">
                User Research
              </Badge>
              <Badge variant="secondary" className="bg-warm-golden/10 text-warm-golden border-warm-golden/30 hover:bg-warm-golden/20 transition-all duration-300 text-sm lg:text-base font-semibold px-4 py-2 rounded-full">
                Product Strategy
              </Badge>
              <Badge variant="secondary" className="bg-warm-golden/10 text-warm-golden border-warm-golden/30 hover:bg-warm-golden/20 transition-all duration-300 text-sm lg:text-base font-semibold px-4 py-2 rounded-full">
                AI Integration
              </Badge>
              <Badge variant="secondary" className="bg-warm-golden/10 text-warm-golden border-warm-golden/30 hover:bg-warm-golden/20 transition-all duration-300 text-sm lg:text-base font-semibold px-4 py-2 rounded-full">
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

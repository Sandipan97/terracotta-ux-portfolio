import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, Shield, CheckCircle, Star } from 'lucide-react';

export const MeasurableImpact = () => {
  const metrics = [
    {
      title: 'Error Rate Reduction',
      before: '34%',
      after: '8%',
      improvement: '76%',
      icon: TrendingUp,
      color: 'green'
    },
    {
      title: 'Task Completion Time',
      before: '4.2 min',
      after: '2.1 min',
      improvement: '50%',
      icon: Clock,
      color: 'blue'
    },
    {
      title: 'User Satisfaction',
      before: '6.2/10',
      after: '8.9/10',
      improvement: '43%',
      icon: Users,
      color: 'purple'
    },
    {
      title: 'Security Issues',
      before: '12',
      after: '0',
      improvement: '100%',
      icon: Shield,
      color: 'red'
    }
  ];

  const improvements = [
    'Clearer navigation and logical grouping',
    'Reduced user errors with disabled conflicting actions',
    'Real-time feedback with visual alerts',
    'Increased security with admin-only access',
    'Better accessibility with theme toggle and clear CTAs'
  ];

  const getColorClasses = (color: string) => {
    const colorMap = {
      green: 'text-green-600 bg-green-600/10',
      blue: 'text-blue-600 bg-blue-600/10',
      purple: 'text-purple-600 bg-purple-600/10',
      red: 'text-red-600 bg-red-600/10'
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.blue;
  };

  return (
    <section id="impact" className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="text-center mb-12"
          >
            <h2 className="font-heading text-3xl font-bold text-foreground mb-4">
              Measurable Impact
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Quantified improvements demonstrating the success of our UX redesign initiatives
            </p>
          </motion.div>

          {/* Impact Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background/80 backdrop-blur-sm p-6 rounded-lg border border-border/50 hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-center mb-4">
                  <div className={`w-10 h-10 ${getColorClasses(metric.color)} rounded-lg flex items-center justify-center mr-3`}>
                    <metric.icon className="w-5 h-5" />
                  </div>
                </div>
                
                <h3 className="font-semibold text-sm text-muted-foreground mb-3">{metric.title}</h3>
                
                <div className="space-y-2 mb-4">
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-red-600">Before:</span>
                    <span className="font-mono">{metric.before}</span>
                  </div>
                  <div className="flex justify-between items-center text-sm">
                    <span className="text-green-600">After:</span>
                    <span className="font-mono">{metric.after}</span>
                  </div>
                </div>
                
                <div className={`text-center p-2 rounded-md ${getColorClasses(metric.color)}`}>
                  <div className="text-2xl font-bold">{metric.improvement}</div>
                  <div className="text-xs">Improvement</div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Achievements List */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-gradient-to-br from-green-50 to-blue-50 dark:from-green-950/20 dark:to-blue-950/20 p-8 rounded-lg border border-green-200/50 dark:border-green-800/50 mb-12"
          >
            <h3 className="font-heading text-2xl font-bold text-foreground mb-6 text-center">
              Key Improvements Achieved
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {improvements.map((improvement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center"
                >
                  <CheckCircle className="w-5 h-5 text-green-600 mr-3 flex-shrink-0" />
                  <span className="text-foreground">{improvement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-background/80 backdrop-blur-sm p-8 rounded-lg border border-border/50 text-center"
          >
            <div className="flex justify-center mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
              ))}
            </div>
            <blockquote className="text-lg text-foreground mb-4 italic">
              "The redesigned interface has transformed how our teams interact with the Datalogger system. 
              The improved usability and accessibility features have significantly reduced training time and user errors."
            </blockquote>
            <div className="text-muted-foreground">
              <div className="font-semibold">Sarah Johnson</div>
              <div className="text-sm">Senior UX Researcher, P&G Industrial Systems</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
import { motion } from 'framer-motion';
import { TrendingUp, Users, Clock, Shield, Star, Quote } from 'lucide-react';

export const MeasurableImpact = () => {
  const metrics = [
    {
      icon: TrendingUp,
      label: "Error Rate Reduction",
      before: "45%",
      after: "8%",
      improvement: "82% decrease",
      color: "text-green-500"
    },
    {
      icon: Users,
      label: "User Satisfaction",
      before: "6.2/10",
      after: "8.9/10",
      improvement: "43% increase",
      color: "text-blue-500"
    },
    {
      icon: Clock,
      label: "Task Completion Time",
      before: "3.2 min",
      after: "1.8 min",
      improvement: "44% faster",
      color: "text-purple-500"
    },
    {
      icon: Shield,
      label: "Security Incidents",
      before: "12/month",
      after: "0/month",
      improvement: "100% elimination",
      color: "text-bengali-red"
    }
  ];

  const improvements = [
    "Clearer navigation and logical grouping",
    "Reduced user errors with disabled conflicting actions",
    "Real-time feedback with visual alerts",
    "Increased security with admin-only access",
    "Better accessibility with theme toggle and clear CTAs"
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6 text-foreground">
              Measurable Impact
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Quantifiable improvements achieved through user-centered design and systematic UX optimization.
            </p>
          </div>

          {/* Metrics Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {metrics.map((metric, index) => (
              <motion.div
                key={metric.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-background p-6 rounded-xl border border-border shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-center">
                  <div className="bg-bengali-terracotta/10 p-4 rounded-full inline-flex mb-4">
                    <metric.icon className="w-8 h-8 text-bengali-terracotta" />
                  </div>
                  
                  <h3 className="font-semibold text-foreground mb-4 text-sm">
                    {metric.label}
                  </h3>

                  {/* Before/After Comparison */}
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">Before:</span>
                      <span className="text-sm font-medium text-red-500">{metric.before}</span>
                    </div>
                    <div className="flex justify-between items-center">
                      <span className="text-xs text-muted-foreground">After:</span>
                      <span className="text-sm font-medium text-green-500">{metric.after}</span>
                    </div>
                  </div>

                  <div className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium ${metric.color} bg-current/10`}>
                    <TrendingUp className="w-3 h-3 mr-1" />
                    {metric.improvement}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Improvements Achieved */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="bg-bengali-terracotta/5 p-8 rounded-2xl border border-bengali-terracotta/20 mb-12"
          >
            <h3 className="text-2xl font-bold text-foreground mb-6 text-center">
              Improvements Achieved
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {improvements.map((improvement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-center space-x-3"
                >
                  <div className="bg-green-500 w-2 h-2 rounded-full flex-shrink-0"></div>
                  <span className="text-muted-foreground text-sm">{improvement}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Testimonial */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            viewport={{ once: true }}
            className="bg-background border border-border rounded-2xl p-8 shadow-lg"
          >
            <div className="text-center">
              <Quote className="w-12 h-12 text-bengali-terracotta mx-auto mb-6" />
              
              <blockquote className="text-xl text-foreground font-medium mb-6 max-w-4xl mx-auto">
                "The redesigned Datalogger interface has transformed our daily operations. The clear navigation, 
                real-time feedback, and intuitive controls have significantly reduced user errors and improved 
                our team's efficiency. The security improvements give us confidence in our data integrity."
              </blockquote>
              
              <div className="flex items-center justify-center space-x-4">
                <div className="w-12 h-12 bg-bengali-terracotta/10 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-bengali-terracotta" />
                </div>
                <div className="text-left">
                  <div className="font-semibold text-foreground">P&G Operations Team</div>
                  <div className="text-muted-foreground text-sm">Industrial Systems Division</div>
                </div>
              </div>

              {/* Star Rating */}
              <div className="flex justify-center space-x-1 mt-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Impact Summary Chart */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
            viewport={{ once: true }}
            className="mt-12 bg-muted/30 p-8 rounded-2xl"
          >
            <h3 className="text-xl font-bold text-foreground mb-6 text-center">
              Overall Impact Summary
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="bg-bengali-terracotta text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-2xl">
                  85%
                </div>
                <h4 className="font-semibold text-foreground mb-1">Overall Improvement</h4>
                <p className="text-muted-foreground text-sm">Across all key metrics</p>
              </div>
              
              <div className="text-center">
                <div className="bg-green-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-2xl">
                  100%
                </div>
                <h4 className="font-semibold text-foreground mb-1">Security Compliance</h4>
                <p className="text-muted-foreground text-sm">Zero security incidents</p>
              </div>
              
              <div className="text-center">
                <div className="bg-blue-500 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-2xl">
                  8.9
                </div>
                <h4 className="font-semibold text-foreground mb-1">User Satisfaction</h4>
                <p className="text-muted-foreground text-sm">Out of 10 rating</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
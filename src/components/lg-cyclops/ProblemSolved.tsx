import { motion } from 'framer-motion';
import { DollarSign, Leaf, Frown, TrendingDown, TrendingUp, CheckCircle } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';

const problemData = [
  {
    icon: DollarSign,
    title: "High Printing Costs",
    before: "Companies spend $2.5M annually on manual printing",
    after: "95% cost reduction with digital distribution",
    improvement: 95,
    color: "bengali-terracotta"
  },
  {
    icon: Leaf,
    title: "Environmental Impact",
    before: "500,000 printed manuals per year",
    after: "Zero paper waste with AR manuals",
    improvement: 100,
    color: "bengali-mustard"
  },
  {
    icon: Frown,
    title: "User Frustration",
    before: "73% users struggle with setup instructions",
    after: "92% user satisfaction with AR guidance",
    improvement: 89,
    color: "bengali-red"
  }
];

const companyIcons = [
  { name: "LG", color: "bengali-terracotta" },
  { name: "Samsung", color: "bengali-mustard" },
  { name: "Panasonic", color: "bengali-red" }
];

export const ProblemSolved = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-background to-bengali-terracotta/5">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          {/* Section Header */}
          <div className="text-center mb-16">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
                💡 The Problem We Solved
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Consumer electronics companies face mounting challenges with traditional product manuals
              </p>
            </motion.div>
          </div>

          {/* Companies Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mb-16"
          >
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Industry Leaders Facing These Challenges
              </h3>
              <div className="flex justify-center items-center gap-8">
                {companyIcons.map((company, index) => (
                  <motion.div
                    key={company.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className={`w-20 h-20 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg bg-${company.color}`}
                  >
                    {company.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Problem Comparison Cards */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {problemData.map((problem, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 + index * 0.1 }}
              >
                <Card className={`h-full bg-gradient-to-br from-${problem.color}/10 to-${problem.color}/5 border-${problem.color}/20 hover:border-${problem.color}/40 transition-all duration-300 group`}>
                  <CardContent className="p-6">
                    {/* Header */}
                    <div className="flex items-center gap-3 mb-6">
                      <div className={`w-12 h-12 bg-${problem.color} rounded-full flex items-center justify-center`}>
                        <problem.icon className="w-6 h-6 text-white" />
                      </div>
                      <h3 className="font-heading text-lg font-bold text-foreground">
                        {problem.title}
                      </h3>
                    </div>

                    {/* Before Section */}
                    <div className="mb-6 p-4 bg-muted/30 rounded-lg border border-muted-foreground/20">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingDown className="w-4 h-4 text-red-500" />
                        <span className="text-sm font-semibold text-muted-foreground">Before</span>
                      </div>
                      <p className="text-sm text-foreground">{problem.before}</p>
                    </div>

                    {/* After Section */}
                    <div className={`mb-6 p-4 bg-${problem.color}/10 rounded-lg border border-${problem.color}/20`}>
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className={`w-4 h-4 text-${problem.color}`} />
                        <span className={`text-sm font-semibold text-${problem.color}`}>After</span>
                      </div>
                      <p className="text-sm text-foreground">{problem.after}</p>
                    </div>

                    {/* Improvement Progress */}
                    <div className="space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">Improvement</span>
                        <span className={`text-lg font-bold text-${problem.color}`}>
                          {problem.improvement}%
                        </span>
                      </div>
                      <Progress 
                        value={problem.improvement} 
                        className="h-3"
                      />
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Summary Infographic */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7 }}
            className="bg-gradient-to-br from-bengali-terracotta/10 to-bengali-mustard/10 rounded-3xl p-8 border border-bengali-terracotta/20"
          >
            <div className="text-center mb-8">
              <h3 className="font-heading text-2xl font-bold text-foreground mb-4">
                Traditional vs AR Manual Comparison
              </h3>
              <p className="text-muted-foreground">
                The transformation impact across key business metrics
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Traditional Problems */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground text-lg mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  Traditional Printed Manuals
                </h4>
                <div className="space-y-3">
                  {[
                    "Costly printing and distribution",
                    "Language barriers and updates",
                    "Environmental impact concerns",
                    "Complex setup instructions",
                    "High support call volume"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-red-500/20 flex items-center justify-center mt-0.5">
                        <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      </div>
                      <span className="text-sm text-muted-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* AR Solutions */}
              <div className="space-y-4">
                <h4 className="font-semibold text-foreground text-lg mb-4 flex items-center gap-2">
                  <div className="w-3 h-3 bg-bengali-terracotta rounded-full"></div>
                  AR Interactive Manuals
                </h4>
                <div className="space-y-3">
                  {[
                    "Zero printing costs, instant updates",
                    "15+ languages, voice guidance",
                    "100% paperless, sustainable solution",
                    "Visual 3D instructions, intuitive",
                    "60% reduction in support calls"
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-bengali-terracotta mt-0.5" />
                      <span className="text-sm text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
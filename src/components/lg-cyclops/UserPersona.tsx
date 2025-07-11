import { motion } from 'framer-motion';
import { Heart, Clock, Home, Users, Smartphone, Zap } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const julieGoals = [
  {
    icon: Heart,
    text: "Cook healthy meals for my family",
    category: "Health"
  },
  {
    icon: Clock,
    text: "Save time on meal preparation",
    category: "Efficiency"
  },
  {
    icon: Users,
    text: "Reduce kitchen stress with clear guidance",
    category: "Peace of Mind"
  }
];

const julieFrustrations = [
  {
    icon: Smartphone,
    text: "Complex manual instructions are confusing",
    impact: "High"
  },
  {
    icon: Zap,
    text: "Advanced features seem too technical",
    impact: "Medium"
  },
  {
    icon: Home,
    text: "Limited time between family responsibilities",
    impact: "High"
  }
];

export const UserPersona = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-bengali-mustard/5 to-background">
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
                👩‍🍳 User Persona: Julie the Homemaker
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Meet Julie, our primary user persona who inspired the empathy-driven design approach
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            {/* Julie's Profile */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-8"
            >
              {/* Main Profile Card */}
              <Card className="bg-gradient-to-br from-bengali-mustard/10 to-bengali-terracotta/10 border-bengali-mustard/30 overflow-hidden">
                <CardContent className="p-0">
                  {/* Profile Header */}
                  <div className="relative bg-bengali-mustard p-6 text-bengali-dark">
                    <div className="flex items-center gap-4">
                      <div className="w-20 h-20 bg-white rounded-full flex items-center justify-center text-2xl">
                        👩‍🍳
                      </div>
                      <div>
                        <h3 className="font-heading text-2xl font-bold">Julie Tanaka</h3>
                        <p className="text-bengali-dark/80">Homemaker & Mother</p>
                        <div className="flex gap-2 mt-2">
                          <Badge variant="secondary" className="bg-white/20 text-bengali-dark">
                            Age 35
                          </Badge>
                          <Badge variant="secondary" className="bg-white/20 text-bengali-dark">
                            Tokyo, Japan
                          </Badge>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Profile Details */}
                  <div className="p-6 space-y-6">
                    <div>
                      <h4 className="font-semibold text-foreground mb-3">Background</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        Julie is a dedicated homemaker from Tokyo with two young children and elderly in-laws 
                        living with her family. She manages a busy household and wants modern appliances that 
                        simplify her daily cooking routine without adding complexity.
                      </p>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div className="text-center p-3 bg-bengali-terracotta/10 rounded-lg">
                        <Users className="w-6 h-6 text-bengali-terracotta mx-auto mb-2" />
                        <div className="text-sm font-semibold text-foreground">Family Size</div>
                        <div className="text-xs text-muted-foreground">6 members</div>
                      </div>
                      <div className="text-center p-3 bg-bengali-mustard/10 rounded-lg">
                        <Home className="w-6 h-6 text-bengali-dark mx-auto mb-2" />
                        <div className="text-sm font-semibold text-foreground">Location</div>
                        <div className="text-xs text-muted-foreground">Urban Tokyo</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quote */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="relative"
              >
                <Card className="bg-bengali-terracotta/10 border-bengali-terracotta/30">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <div className="text-4xl text-bengali-terracotta mb-4">"</div>
                      <blockquote className="text-foreground italic text-lg leading-relaxed mb-4">
                        I want a microwave with advanced features, but the manual is so thick and confusing. 
                        I just need clear, simple guidance that doesn't make me feel overwhelmed.
                      </blockquote>
                      <div className="text-sm text-muted-foreground">- Julie's typical experience</div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* Goals & Frustrations */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="space-y-8"
            >
              {/* Goals Section */}
              <Card className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/10 dark:to-emerald-900/10 border-green-200 dark:border-green-800">
                <CardContent className="p-6">
                  <h4 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">
                      <Heart className="w-4 h-4 text-white" />
                    </div>
                    Julie's Goals
                  </h4>
                  <div className="space-y-4">
                    {julieGoals.map((goal, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5 + index * 0.1 }}
                        className="flex items-start gap-3 p-3 bg-white/50 dark:bg-green-900/20 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-green-100 dark:bg-green-800 rounded-full flex items-center justify-center flex-shrink-0">
                          <goal.icon className="w-4 h-4 text-green-600 dark:text-green-400" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-foreground">{goal.text}</p>
                          <span className="text-xs text-green-600 dark:text-green-400">{goal.category}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Frustrations Section */}
              <Card className="bg-gradient-to-br from-red-50 to-rose-50 dark:from-red-900/10 dark:to-rose-900/10 border-red-200 dark:border-red-800">
                <CardContent className="p-6">
                  <h4 className="font-heading text-xl font-bold text-foreground mb-6 flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-500 rounded-full flex items-center justify-center">
                      <Zap className="w-4 h-4 text-white" />
                    </div>
                    Julie's Frustrations
                  </h4>
                  <div className="space-y-4">
                    {julieFrustrations.map((frustration, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.6 + index * 0.1 }}
                        className="flex items-start gap-3 p-3 bg-white/50 dark:bg-red-900/20 rounded-lg"
                      >
                        <div className="w-8 h-8 bg-red-100 dark:bg-red-800 rounded-full flex items-center justify-center flex-shrink-0">
                          <frustration.icon className="w-4 h-4 text-red-600 dark:text-red-400" />
                        </div>
                        <div className="flex-1">
                          <p className="text-sm font-medium text-foreground">{frustration.text}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <span className="text-xs text-red-600 dark:text-red-400">Impact:</span>
                            <Badge 
                              variant={frustration.impact === 'High' ? 'destructive' : 'secondary'}
                              className="text-xs"
                            >
                              {frustration.impact}
                            </Badge>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* AR Solution Preview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 }}
              >
                <Card className="bg-gradient-to-br from-bengali-terracotta/10 to-bengali-mustard/10 border-bengali-terracotta/30">
                  <CardContent className="p-6 text-center">
                    <div className="w-12 h-12 bg-bengali-terracotta rounded-full flex items-center justify-center mx-auto mb-4">
                      <Smartphone className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="font-heading text-lg font-bold text-foreground mb-2">
                      How AR Helps Julie
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      The AR manual provides Julie with intuitive visual guidance, voice instructions in Japanese, 
                      and step-by-step interactions that make advanced features feel approachable and simple.
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
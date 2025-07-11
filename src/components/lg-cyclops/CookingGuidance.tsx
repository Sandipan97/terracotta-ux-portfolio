import { motion } from 'framer-motion';
import { ChefHat, Clock, Timer, Volume2 } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';

export const CookingGuidance = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-bengali-mustard/5 to-background">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
              🍽️ Control Panel & Cooking Guidance
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Interactive cooking features with 401 pre-calibrated recipes and voice-guided instructions
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <Card className="bg-gradient-to-br from-bengali-terracotta/10 to-bengali-mustard/10 border-bengali-terracotta/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <ChefHat className="w-8 h-8 text-bengali-terracotta" />
                    <h3 className="font-heading text-xl font-bold text-foreground">Recipe Selection</h3>
                  </div>
                  <p className="text-muted-foreground mb-4">
                    Choose from 401 pre-calibrated recipes with automatic time and power adjustments
                  </p>
                  <div className="text-center p-4 bg-bengali-terracotta/10 rounded-lg">
                    <div className="text-3xl font-bold text-bengali-terracotta mb-2">401</div>
                    <div className="text-sm text-muted-foreground">Pre-calibrated Recipes</div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <Card className="bg-gradient-to-br from-bengali-mustard/10 to-bengali-red/10 border-bengali-mustard/20">
                <CardContent className="p-8">
                  <div className="text-center">
                    <h3 className="font-heading text-2xl font-bold text-foreground mb-6">
                      Control Panel Interface
                    </h3>
                    <div className="grid grid-cols-3 gap-4 mb-6">
                      {[...Array(9)].map((_, i) => (
                        <Button
                          key={i}
                          variant="outline"
                          className="h-12 border-bengali-mustard/30 hover:bg-bengali-mustard hover:text-bengali-dark"
                        >
                          {i + 1}
                        </Button>
                      ))}
                    </div>
                    <div className="flex items-center justify-center gap-2 text-bengali-mustard">
                      <Volume2 className="w-5 h-5" />
                      <span className="text-sm">Voice guidance active</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
import { motion } from 'framer-motion';
import { Play, Download, Smartphone, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { EditableImage } from '@/components/ui/editable-image';

export const DemoProofOfConcept = () => {
  return (
    <section id="demo" className="py-20 bg-gradient-to-br from-bengali-mustard/5 to-background">
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
                🎥 Demo & Proof of Concept
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                Experience the AR manual in action with real-world validation and hands-on demonstration
              </p>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Video Demo Section */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="space-y-6"
            >
              {/* Video Player */}
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-br from-bengali-terracotta/20 to-bengali-red/20 rounded-2xl blur-2xl opacity-50 group-hover:opacity-70 transition-opacity duration-500" />
                
                <Card className="relative bg-card/50 backdrop-blur-sm border-bengali-terracotta/20 overflow-hidden">
                  <CardContent className="p-0">
                    <div className="relative">
                      <EditableImage 
                        src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                        alt="AR manual demonstration video"
                        className="w-full h-64 object-cover"
                        fallbackSrc="/placeholder.svg"
                      />
                      
                      {/* Play Button Overlay */}
                      <motion.div
                        className="absolute inset-0 bg-black/30 flex items-center justify-center cursor-pointer"
                        whileHover={{ backgroundColor: "rgba(0,0,0,0.4)" }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className="w-20 h-20 bg-bengali-terracotta rounded-full flex items-center justify-center shadow-2xl"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          animate={{
                            boxShadow: [
                              "0 0 0 0 rgba(215, 48, 39, 0.7)",
                              "0 0 0 20px rgba(215, 48, 39, 0)",
                            ],
                          }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          <Play className="w-8 h-8 text-white ml-1" fill="white" />
                        </motion.div>
                      </motion.div>

                      {/* Video Badge */}
                      <div className="absolute top-4 left-4 bg-bengali-terracotta text-white px-3 py-1 rounded-full text-sm font-semibold">
                        Live Demo
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>

              {/* Video Description */}
              <div className="space-y-4">
                <h3 className="font-heading text-2xl font-bold text-foreground">
                  Watch the AR Manual in Action
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  See how users interact with virtual appliances in their real kitchen environment, 
                  with step-by-step guidance and voice instructions that make setup effortless.
                </p>
                
                {/* Video Stats */}
                <div className="grid grid-cols-3 gap-4">
                  <div className="text-center p-3 bg-bengali-terracotta/10 rounded-lg border border-bengali-terracotta/20">
                    <div className="text-lg font-bold text-bengali-terracotta">3:42</div>
                    <div className="text-xs text-muted-foreground">Duration</div>
                  </div>
                  <div className="text-center p-3 bg-bengali-mustard/10 rounded-lg border border-bengali-mustard/20">
                    <div className="text-lg font-bold text-bengali-dark">4K</div>
                    <div className="text-xs text-muted-foreground">Quality</div>
                  </div>
                  <div className="text-center p-3 bg-bengali-red/10 rounded-lg border border-bengali-red/20">
                    <div className="text-lg font-bold text-bengali-red">Live</div>
                    <div className="text-xs text-muted-foreground">Real-time</div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* App Download Section */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              {/* Prerequisites Card */}
              <Card className="bg-gradient-to-br from-bengali-mustard/10 to-bengali-terracotta/10 border-bengali-mustard/30">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-bengali-mustard rounded-full flex items-center justify-center flex-shrink-0">
                      <Smartphone className="w-6 h-6 text-bengali-dark" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                        Prerequisites
                      </h3>
                      <p className="text-muted-foreground mb-4">
                        To experience the full AR manual, you'll need:
                      </p>
                      <ul className="space-y-2">
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-bengali-terracotta" />
                          <span>HCL Cyclops IUM app installed</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-bengali-terracotta" />
                          <span>Android AR-enabled device</span>
                        </li>
                        <li className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-bengali-terracotta" />
                          <span>Adequate lighting conditions</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Download CTA */}
              <Card className="bg-gradient-to-br from-bengali-terracotta/10 to-bengali-red/10 border-bengali-terracotta/30">
                <CardContent className="p-6 text-center">
                  <div className="space-y-4">
                    <div className="w-16 h-16 bg-bengali-terracotta rounded-full flex items-center justify-center mx-auto">
                      <Download className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-bold text-foreground mb-2">
                        Download the App
                      </h3>
                      <p className="text-muted-foreground text-sm mb-4">
                        Get the HCL Cyclops IUM app to experience AR manuals firsthand
                      </p>
                    </div>
                    <div className="space-y-3">
                      <Button 
                        className="w-full bg-bengali-terracotta hover:bg-bengali-red text-white transition-all duration-300"
                        size="lg"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download for Android
                      </Button>
                      <Button 
                        variant="outline"
                        className="w-full border-bengali-terracotta text-bengali-terracotta hover:bg-bengali-terracotta hover:text-white transition-all duration-300"
                      >
                        View on Play Store
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Device Compatibility */}
              <div className="text-center space-y-3">
                <p className="text-sm text-muted-foreground">Compatible with ARCore devices</p>
                <div className="flex justify-center gap-4 text-xs text-muted-foreground">
                  <span>• Android 7.0+</span>
                  <span>• ARCore Support</span>
                  <span>• 3GB RAM+</span>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
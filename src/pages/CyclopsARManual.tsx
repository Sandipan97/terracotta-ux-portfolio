import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { ArrowLeft, Play, Download, Smartphone, Users, Lightbulb, Shield, ChefHat, Sparkles, BarChart3, Cog, Globe, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { EditableImage } from "@/components/ui/editable-image";
import ProcessTimeline from "@/components/cyclops-ar/ProcessTimeline";
import ARTechnologyShowcase from "@/components/cyclops-ar/ARTechnologyShowcase";

export default function CyclopsARManual() {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate("/projects");
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 }
  };

  const stagger = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background/95 to-muted/30">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-secondary/10 animate-pulse" />
        
        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button 
              variant="ghost" 
              onClick={handleBack}
              className="mb-8 hover:bg-background/50"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Projects
            </Button>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div {...fadeInUp}>
              <Badge variant="secondary" className="mb-4">
                AR Innovation Project
              </Badge>
              <h1 className="text-4xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Revolutionizing Product Manuals with Augmented Reality
              </h1>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                An immersive experience that simplifies setup, enhances understanding, and delights users through cutting-edge AR technology.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="group">
                  <Play className="mr-2 h-5 w-5 group-hover:scale-110 transition-transform" />
                  View Demo
                </Button>
                <Button variant="outline" size="lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download App
                </Button>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 rounded-2xl p-8 border border-border/50">
                <EditableImage
                  src="https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                  alt="AR microwave placement demonstration"
                  className="w-full h-full object-cover rounded-xl"
                  fallbackSrc="https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary/20 rounded-full animate-pulse" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-accent/20 rounded-full animate-bounce" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Demo & Proof of Concept */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Demo & Proof of Concept</h2>
            <p className="text-muted-foreground">Real-world validation of our AR manual technology</p>
          </motion.div>

          <motion.div {...fadeInUp} className="space-y-8">
            <Card className="overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video bg-muted/50 relative group cursor-pointer">
                  <EditableImage
                    src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="AR manual demo video thumbnail"
                    className="w-full h-full object-cover"
                    fallbackSrc="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button size="lg" className="rounded-full w-16 h-16 group-hover:scale-110 transition-transform">
                      <Play className="w-6 h-6" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <div className="bg-accent/10 p-6 rounded-xl border border-accent/20">
              <p className="text-sm text-muted-foreground mb-2">
                <strong>Prerequisite:</strong> HCL Cyclops IUM app on Android AR-enabled device
              </p>
              <Button variant="secondary" className="w-full sm:w-auto">
                <Smartphone className="mr-2 h-4 w-4" />
                Download HCL Cyclops App
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* The Problem We Solved */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Lightbulb className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">The Problem We Solved</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Consumer electronics companies face significant challenges with traditional product manuals
            </p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" className="grid md:grid-cols-3 gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="text-center p-6 h-full hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <BarChart3 className="w-8 h-8 text-red-600" />
                  </div>
                  <CardTitle className="text-red-600">High Costs</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Companies spend heavily on printing, shipping, and updating traditional manuals
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="text-center p-6 h-full hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Globe className="w-8 h-8 text-orange-600" />
                  </div>
                  <CardTitle className="text-orange-600">Environmental Impact</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Paper manuals contribute to deforestation and waste
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="text-center p-6 h-full hover:shadow-lg transition-all">
                <CardHeader>
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users className="w-8 h-8 text-blue-600" />
                  </div>
                  <CardTitle className="text-blue-600">User Frustration</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">
                    Traditional manuals are hard to follow and understand
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* User Persona */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Meet Julie: Our Primary User</h2>
            <p className="text-muted-foreground">Empathy-driven design through relatable personas</p>
          </motion.div>

          <motion.div {...fadeInUp}>
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="p-8">
                  <div className="flex items-center mb-6">
                    <EditableImage
                      src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                      alt="Julie - Homemaker persona"
                      className="w-16 h-16 rounded-full object-cover mr-4"
                      fallbackSrc="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
                    />
                    <div>
                      <h3 className="text-xl font-semibold">Julie the Homemaker</h3>
                      <p className="text-muted-foreground">35 years old, Japan</p>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <div>
                      <h4 className="font-semibold mb-2">Background</h4>
                      <p className="text-sm text-muted-foreground">
                        Mother of two with in-laws, wants advanced kitchen appliances but struggles with complex manuals
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold mb-2">Goals</h4>
                      <ul className="text-sm text-muted-foreground space-y-1">
                        <li>• Cook healthy meals efficiently</li>
                        <li>• Reduce stress during meal preparation</li>
                        <li>• Use advanced appliance features</li>
                      </ul>
                    </div>
                  </div>
                </div>
                
                <div className="bg-gradient-to-br from-primary/10 to-accent/10 p-8 flex items-center">
                  <div className="space-y-4">
                    <div className="bg-background/80 p-4 rounded-lg shadow-sm">
                      <p className="text-sm italic">
                        "I want a microwave that's easy to use without reading a thick manual"
                      </p>
                    </div>
                    <div className="bg-background/80 p-4 rounded-lg shadow-sm">
                      <p className="text-sm italic">
                        "Why can't technology just show me what to do?"
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* AR Workflow */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">How the AR Manual Works</h2>
            <p className="text-muted-foreground">Simple steps to an immersive experience</p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" className="grid md:grid-cols-4 gap-6">
            {[
              { icon: Smartphone, title: "Select Product", desc: "Choose your appliance from the catalog" },
              { icon: Sparkles, title: "Scan Surface", desc: "Point camera at placement area" },
              { icon: Cog, title: "Place Virtually", desc: "Position 3D model in your space" },
              { icon: Heart, title: "Interact", desc: "Explore features with voice guidance" }
            ].map((step, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-6 h-full hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <step.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center mx-auto mb-2 text-sm font-bold">
                      {index + 1}
                    </div>
                    <CardTitle className="text-lg">{step.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Interactive Features */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Interactive Features & Animations</h2>
            <p className="text-muted-foreground">Immersive product interactions with voice guidance</p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" className="grid md:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Cog className="w-5 h-5 mr-2 text-primary" />
                    Product Interactions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <p className="font-medium">Available Actions:</p>
                    <ul className="text-sm text-muted-foreground space-y-1">
                      <li>• Open/close microwave door</li>
                      <li>• Rotate product 360°</li>
                      <li>• View internal dimensions</li>
                      <li>• Explore cooking capacity</li>
                    </ul>
                  </div>
                  <div className="bg-muted/50 p-4 rounded-lg">
                    <p className="text-sm">
                      <strong>Voice Guidance:</strong> Each interaction includes audio instructions and tips
                    </p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Sparkles className="w-5 h-5 mr-2 text-primary" />
                    Visual Feedback
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <EditableImage
                    src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="AR interaction demonstration"
                    className="w-full h-48 object-cover rounded-lg"
                    fallbackSrc="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  />
                  <p className="text-sm text-muted-foreground">
                    Smooth animations and visual cues guide users through each interaction
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Safety & Setup */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Safety & Setup Guidance</h2>
            <p className="text-muted-foreground">Comprehensive safety instructions and setup assistance</p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" className="space-y-6">
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Safety Instructions</CardTitle>
                </CardHeader>
                <CardContent className="grid md:grid-cols-3 gap-4">
                  <div className="text-center p-4 bg-red-50 rounded-lg">
                    <Shield className="w-8 h-8 text-red-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Child Lock</p>
                    <p className="text-xs text-muted-foreground">Activate safety features</p>
                  </div>
                  <div className="text-center p-4 bg-orange-50 rounded-lg">
                    <Cog className="w-8 h-8 text-orange-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Door Checks</p>
                    <p className="text-xs text-muted-foreground">Ensure proper sealing</p>
                  </div>
                  <div className="text-center p-4 bg-blue-50 rounded-lg">
                    <ChefHat className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                    <p className="text-sm font-medium">Cooking Precautions</p>
                    <p className="text-xs text-muted-foreground">Safe cooking practices</p>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Setup Process</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">1</div>
                      <div>
                        <p className="font-medium">Placement</p>
                        <p className="text-sm text-muted-foreground">Position microwave on stable, level surface</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">2</div>
                      <div>
                        <p className="font-medium">Turntable Installation</p>
                        <p className="text-sm text-muted-foreground">Install ring and glass tray properly</p>
                      </div>
                    </div>
                    <div className="flex items-start space-x-4">
                      <div className="w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">3</div>
                      <div>
                        <p className="font-medium">Power Connection</p>
                        <p className="text-sm text-muted-foreground">Connect to appropriate electrical outlet</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Control Panel & Cooking */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <ChefHat className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Control Panel & Cooking Guidance</h2>
            <p className="text-muted-foreground">Intuitive cooking with 401 pre-calibrated recipes</p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" className="grid lg:grid-cols-2 gap-8">
            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Recipe Selection</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <EditableImage
                    src="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                    alt="Microwave control panel interface"
                    className="w-full h-48 object-cover rounded-lg"
                    fallbackSrc="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  />
                  <div className="space-y-4">
                    <div className="bg-primary/10 p-4 rounded-lg">
                      <p className="font-medium text-primary">401 Pre-calibrated Recipes</p>
                      <p className="text-sm text-muted-foreground">Organized by category with number coding</p>
                    </div>
                    <div className="grid grid-cols-2 gap-2 text-sm">
                      <div>• Select recipe category</div>
                      <div>• Choose specific dish</div>
                      <div>• Set weight/portion</div>
                      <div>• Start cooking</div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Cooking Process</CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    <div className="bg-muted/50 p-4 rounded-lg">
                      <h4 className="font-medium mb-2">Step-by-step Guidance</h4>
                      <ul className="text-sm space-y-1 text-muted-foreground">
                        <li>1. Weight/time selection</li>
                        <li>2. Power level adjustment</li>
                        <li>3. Start button activation</li>
                        <li>4. Progress monitoring</li>
                        <li>5. Completion alert</li>
                      </ul>
                    </div>
                    
                    <div className="bg-green-50 p-4 rounded-lg">
                      <h4 className="font-medium text-green-700 mb-2">Voice Features</h4>
                      <p className="text-sm text-green-600">
                        Audio instructions guide users through each cooking step with timing alerts
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Maintenance & Cleaning */}
      <section className="py-20 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-12">
            <Sparkles className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Maintenance & Cleaning</h2>
            <p className="text-muted-foreground">Keep your appliance in perfect condition</p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" className="space-y-8">
            <motion.div variants={fadeInUp}>
              <Card>
                <CardHeader>
                  <CardTitle>Cleaning Instructions</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Sparkles className="w-8 h-8 text-yellow-600" />
                      </div>
                      <h4 className="font-medium mb-2">Lemon Cleaning</h4>
                      <p className="text-sm text-muted-foreground">Use lemon juice for natural deodorizing</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Shield className="w-8 h-8 text-blue-600" />
                      </div>
                      <h4 className="font-medium mb-2">Gentle Cloth</h4>
                      <p className="text-sm text-muted-foreground">Soft, damp cloth for interior cleaning</p>
                    </div>
                    
                    <div className="text-center">
                      <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                        <Cog className="w-8 h-8 text-green-600" />
                      </div>
                      <h4 className="font-medium mb-2">Element Care</h4>
                      <p className="text-sm text-muted-foreground">Proper heating element maintenance</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div variants={fadeInUp}>
              <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
                <h4 className="font-medium mb-2 text-green-700">AR Cleaning Guide</h4>
                <p className="text-sm text-green-600">
                  Interactive AR demonstrations show exactly how to clean each component safely and effectively
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Business Impact */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <BarChart3 className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Business Impact</h2>
            <p className="text-muted-foreground">Measurable ROI and sustainability benefits</p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Cost Savings", value: "75%", desc: "Reduction in printing & shipping", color: "text-green-600" },
              { title: "Device Access", value: "100%", desc: "Cross-platform availability", color: "text-blue-600" },
              { title: "Update Speed", value: "90%", desc: "Faster content publishing", color: "text-purple-600" },
              { title: "User Satisfaction", value: "85%", desc: "Improved user experience", color: "text-orange-600" }
            ].map((metric, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-6 hover:shadow-lg transition-all">
                  <CardContent className="space-y-4">
                    <div className={`text-3xl font-bold ${metric.color}`}>
                      {metric.value}
                    </div>
                    <h4 className="font-medium">{metric.title}</h4>
                    <p className="text-sm text-muted-foreground">{metric.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Process Timeline */}
      <ProcessTimeline />

      {/* AR Technology Showcase */}
      <ARTechnologyShowcase />

      {/* Design Process */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Design & Development Process</h2>
            <p className="text-muted-foreground">User-centered design with XRDD methodology</p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" className="space-y-8">
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { phase: "Empathize", icon: Heart, desc: "User research & persona development" },
                { phase: "Define", icon: Lightbulb, desc: "Problem statement & requirements" },
                { phase: "Ideate", icon: Sparkles, desc: "AR solution brainstorming" },
                { phase: "Prototype", icon: Cog, desc: "AR experience development" },
                { phase: "Validate", icon: Shield, desc: "User testing & refinement" }
              ].map((step, index) => (
                <motion.div key={index} variants={fadeInUp}>
                  <Card className="text-center p-4 hover:shadow-lg transition-all">
                    <CardContent className="space-y-3">
                      <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto">
                        <step.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h4 className="font-medium text-sm">{step.phase}</h4>
                      <p className="text-xs text-muted-foreground">{step.desc}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>

            <motion.div variants={fadeInUp}>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle>Extended Reality Design & Development (XRDD)</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground mb-4">
                    Our specialized XRDD approach ensures optimal AR experiences through:
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <ul className="space-y-2 text-sm">
                      <li>• Spatial interaction design</li>
                      <li>• Voice interface integration</li>
                      <li>• 3D model optimization</li>
                    </ul>
                    <ul className="space-y-2 text-sm">
                      <li>• Performance optimization</li>
                      <li>• Cross-device compatibility</li>
                      <li>• Accessibility considerations</li>
                    </ul>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Summary */}
      <section className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div {...fadeInUp} className="text-center mb-16">
            <Globe className="w-12 h-12 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold mb-4">Solution Summary</h2>
            <p className="text-muted-foreground">Comprehensive AR manual capabilities</p>
          </motion.div>

          <motion.div variants={stagger} initial="initial" whileInView="animate" className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Multilingual Support", icon: Globe, desc: "Global accessibility in multiple languages" },
              { title: "Virtual Try-Before-Buy", icon: Sparkles, desc: "Experience products before purchase" },
              { title: "Remote Assistance", icon: Users, desc: "Expert help through AR guidance" },
              { title: "Configuration Guide", icon: Cog, desc: "Step-by-step setup assistance" }
            ].map((feature, index) => (
              <motion.div key={index} variants={fadeInUp}>
                <Card className="text-center p-6 h-full hover:shadow-lg transition-all">
                  <CardHeader>
                    <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <feature.icon className="w-8 h-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Thank You & Contact */}
      <section className="py-20 px-4 bg-gradient-to-br from-primary/10 via-accent/5 to-secondary/10">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInUp} className="space-y-8">
            <div className="space-y-4">
              <Heart className="w-16 h-16 text-primary mx-auto" />
              <h2 className="text-4xl font-bold">Thank You</h2>
              <p className="text-xl text-muted-foreground">
                Let's build the future of product experiences together
              </p>
            </div>

            <Separator className="max-w-xs mx-auto" />

            <div className="space-y-6">
              <p className="text-muted-foreground">
                Ready to revolutionize your product manuals with AR technology?
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg">
                  Start Collaboration
                </Button>
                <Button variant="outline" size="lg">
                  Download Demo
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
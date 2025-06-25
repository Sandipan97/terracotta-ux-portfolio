
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowLeft, Play, Globe, Zap, Users, TrendingUp, Eye, Shield, Settings, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useRef } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const LGCyclopsARProject = () => {
  const navigate = useNavigate();
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const heroScale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.8]);

  const goBack = () => {
    navigate(-1);
  };

  const features = [
    { name: "Voice Guidance", hasVoice: true, icon: <Users className="w-4 h-4" /> },
    { name: "Open/Close", description: "Door opens/closes", hasVoice: true, icon: <Eye className="w-4 h-4" /> },
    { name: "Dimensions", description: "3D arrow indicators", hasVoice: true, icon: <Zap className="w-4 h-4" /> },
    { name: "Capacity", description: "Animated volume indicator", hasVoice: true, icon: <Settings className="w-4 h-4" /> },
    { name: "Rotation", description: "360° product spin", hasVoice: true, icon: <Shield className="w-4 h-4" /> },
    { name: "Child Lock", description: "Lock icon toggle", hasVoice: true, icon: <Shield className="w-4 h-4" /> },
    { name: "Menu Selection", description: "Dial animation", hasVoice: true, icon: <Settings className="w-4 h-4" /> },
    { name: "Cleaning", description: "Lemon steam effect", hasVoice: true, icon: <Wrench className="w-4 h-4" /> }
  ];

  const designStages = [
    "Empathize & Discover",
    "Define & Ideate", 
    "Prototype & Validate",
    "Design & Build",
    "QA & Deploy",
    "Distribute & Measure"
  ];

  const interactionSections = [
    {
      title: "Overview",
      steps: ["Open/Close animation", "Dimensions with 3D arrows", "Capacity with animated volume", "Rotation with 360° spin"]
    },
    {
      title: "Safety & Precautions", 
      steps: ["Pop-up voice guidance", "Child lock toggle", "Installation instructions"]
    },
    {
      title: "Setup",
      steps: ["Ring and tray placement animations", "Countertop clearance guidance"]
    },
    {
      title: "Control Panel",
      steps: ["401 pre-calibrated menus", "Dial-based selection", "Cooking completion alerts"]
    },
    {
      title: "Maintenance",
      steps: ["Cleaning animations", "Lemon steam demo", "Heating element repositioning"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-16 md:pt-20">
        {/* Hero Section */}
        <section ref={heroRef} className="relative h-screen overflow-hidden bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800">
          <motion.div 
            className="absolute top-4 left-4 z-30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button 
              onClick={goBack}
              variant="secondary" 
              className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
              size="icon"
            >
              <ArrowLeft size={20} />
            </Button>
          </motion.div>

          <motion.div 
            className="absolute inset-0"
            style={{ scale: heroScale, opacity: heroOpacity }}
          >
            <img 
              src="https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-1.2.1&auto=format&fit=crop&w=1920&q=80" 
              alt="AR Interactive User Manual - LG Cyclops"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/40 via-blue-900/60 to-indigo-800/80"></div>
          </motion.div>

          <div className="relative z-20 flex items-center justify-center h-full text-center text-white px-4">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="max-w-4xl"
            >
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="mb-6"
              >
                <Badge className="bg-blue-500/20 text-blue-100 border border-blue-400/30 mb-4">
                  🧪 Proof of Concept
                </Badge>
              </motion.div>
              
              <h1 className="font-heading text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-blue-100 to-indigo-200 bg-clip-text text-transparent">
                Interactive User Manual
              </h1>
              <h2 className="text-2xl md:text-3xl font-light mb-8 text-blue-100">
                Augmented Reality Experience
              </h2>
              <p className="text-lg md:text-xl text-blue-100/90 max-w-3xl mx-auto leading-relaxed">
                A transformative AR-based digital manual for LG consumer products, replacing traditional printed guides. 
                This solution enhances user experience, reduces environmental impact, and provides real-time, interactive product guidance.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12 text-center">
                The Challenge
              </h2>
              
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <motion.div
                  initial={{ opacity: 0, x: -50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="space-y-6"
                >
                  {[
                    { icon: "📦", title: "High Costs", desc: "Expensive printing and distribution of physical manuals" },
                    { icon: "🌱", title: "Environmental Impact", desc: "Significant paper waste and carbon footprint" },
                    { icon: "🤯", title: "Poor Engagement", desc: "Users struggle with traditional manual formats" },
                    { icon: "📉", title: "Limited Guidance", desc: "Lack of real-time, intuitive product guidance" }
                  ].map((problem, index) => (
                    <motion.div
                      key={index}
                      className="flex items-start gap-4 p-4 rounded-lg hover:bg-muted/50 transition-colors"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <span className="text-2xl">{problem.icon}</span>
                      <div>
                        <h3 className="font-semibold text-lg mb-1">{problem.title}</h3>
                        <p className="text-muted-foreground">{problem.desc}</p>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  <img 
                    src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                    alt="Manual cost comparison infographic"
                    className="w-full rounded-lg shadow-xl"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/20 to-transparent rounded-lg"></div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto text-center"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12">
                Design Process
              </h2>
              
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                {designStages.map((stage, index) => (
                  <motion.div
                    key={index}
                    className="relative p-4 bg-background rounded-lg shadow-sm border hover:shadow-lg transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold text-sm mb-3 mx-auto group-hover:scale-110 transition-transform">
                      {index + 1}
                    </div>
                    <p className="text-sm font-medium text-center leading-tight">{stage}</p>
                    {index < designStages.length - 1 && (
                      <div className="hidden lg:block absolute top-1/2 -right-2 w-4 h-0.5 bg-gradient-to-r from-indigo-400 to-blue-400 transform -translate-y-1/2"></div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* User Persona */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12 text-center">
                Meet Julie the Homemaker
              </h2>
              
              <motion.div
                className="bg-gradient-to-br from-indigo-50 to-blue-50 dark:from-indigo-950/20 dark:to-blue-950/20 rounded-2xl p-8 shadow-xl border border-indigo-100 dark:border-indigo-800"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" 
                      alt="Julie the Homemaker persona"
                      className="w-32 h-32 rounded-full mx-auto md:mx-0 mb-4 object-cover border-4 border-white shadow-lg"
                    />
                    <div className="text-center md:text-left">
                      <h3 className="text-2xl font-bold mb-2">Julie</h3>
                      <p className="text-indigo-600 dark:text-indigo-400 font-medium mb-4">Age: 35 | Location: Japan | Role: Homemaker</p>
                    </div>
                  </div>
                  
                  <div className="space-y-6">
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-green-700 dark:text-green-400">Goals</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Cook healthy meals</li>
                        <li>• Reduce daily stress</li>
                        <li>• Buy the best for family</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-red-700 dark:text-red-400">Frustrations</h4>
                      <ul className="space-y-1 text-muted-foreground">
                        <li>• Complex product manuals</li>
                        <li>• Lack of clear guidance</li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-lg mb-2 text-blue-700 dark:text-blue-400">Needs</h4>
                      <p className="text-muted-foreground">Efficient, intuitive, and accessible product setup</p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* AR Experience Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12 text-center">
                AR Experience Features
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-background p-6 rounded-xl shadow-lg border hover:shadow-xl transition-all duration-300 group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="flex items-center justify-between mb-4">
                      <div className="p-2 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg group-hover:scale-110 transition-transform">
                        {feature.icon}
                      </div>
                      {feature.hasVoice && (
                        <Badge variant="secondary" className="text-xs bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400">
                          🎤 Voice
                        </Badge>
                      )}
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{feature.name}</h3>
                    {feature.description && (
                      <p className="text-muted-foreground text-sm">{feature.description}</p>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Interaction Breakdown */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12 text-center">
                Interaction Breakdown
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {interactionSections.map((section, index) => (
                  <motion.div
                    key={index}
                    className="bg-muted/50 p-6 rounded-xl border"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <h3 className="font-semibold text-xl mb-4 text-indigo-600 dark:text-indigo-400">{section.title}</h3>
                    <ul className="space-y-2">
                      {section.steps.map((step, stepIndex) => (
                        <li key={stepIndex} className="flex items-start gap-2 text-muted-foreground">
                          <span className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></span>
                          <span className="text-sm">{step}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Multilingual Support */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8">
                🌍 Global Accessibility
              </h2>
              
              <div className="grid md:grid-cols-3 gap-6 mb-8">
                <div className="p-6 bg-background rounded-lg shadow-sm border">
                  <Globe className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Multilingual</h3>
                  <p className="text-muted-foreground text-sm">Local language voice guidance</p>
                </div>
                <div className="p-6 bg-background rounded-lg shadow-sm border">
                  <Eye className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Accessible</h3>
                  <p className="text-muted-foreground text-sm">Visual + audio cues for every interaction</p>
                </div>
                <div className="p-6 bg-background rounded-lg shadow-sm border">
                  <Zap className="w-12 h-12 text-indigo-500 mx-auto mb-4" />
                  <h3 className="font-semibold mb-2">Universal</h3>
                  <p className="text-muted-foreground text-sm">Works on any AR-enabled Android device</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-12 text-center">
                Business Impact
              </h2>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
                {[
                  { icon: "💰", title: "Cost Savings", desc: "Reduced printing and logistics" },
                  { icon: "🌱", title: "Sustainability", desc: "Lower carbon footprint" },
                  { icon: "📲", title: "Accessibility", desc: "Anytime, anywhere access" },
                  { icon: "⚡", title: "Agility", desc: "Easy updates and version control" },
                  { icon: "🤝", title: "Engagement", desc: "Interactive, intuitive, and delightful" }
                ].map((impact, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-6 bg-muted/50 rounded-xl border hover:shadow-lg transition-all duration-300"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <div className="text-4xl mb-4">{impact.icon}</div>
                    <h3 className="font-semibold text-lg mb-2">{impact.title}</h3>
                    <p className="text-muted-foreground text-sm">{impact.desc}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Proof of Concept */}
        <section className="py-16 bg-gradient-to-br from-indigo-900 via-blue-900 to-indigo-800 text-white">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold mb-8">
                🚀 Proof of Concept
              </h2>
              
              <p className="text-xl mb-8 text-blue-100">
                Built using HCL's Cyclops IUM app on Android AR-enabled devices. 
                Demonstrated real-time interaction with LG's Charcoal Convection Microwave.
              </p>
              
              <motion.div
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                  alt="AR User Manual Demo"
                  className="w-full max-w-2xl mx-auto rounded-lg shadow-2xl"
                />
                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors rounded-lg flex items-center justify-center">
                  <motion.div
                    className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center"
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="w-8 h-8 text-white ml-1" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final Takeaway */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <blockquote className="text-2xl md:text-3xl font-light text-muted-foreground mb-8 italic leading-relaxed">
                "It's not enough to build usable products—we must build experiences that bring joy, clarity, and confidence."
              </blockquote>
              <cite className="text-lg text-muted-foreground">
                — Inspired by Don Norman
              </cite>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-indigo-600 to-blue-600 text-white">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
                Ready to Transform Your Product Experience?
              </h2>
              <p className="text-xl mb-8 text-blue-100 max-w-2xl mx-auto">
                Let's discuss how AR and immersive technologies can revolutionize your user manuals and product interactions.
              </p>
              <Button 
                className="bg-white text-indigo-600 hover:bg-blue-50 transition-all duration-300 text-lg px-8 py-3"
                onClick={() => navigate('/contact')}
              >
                Start Your AR Journey
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LGCyclopsARProject;

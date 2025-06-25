
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Play, Volume2, Eye, Smartphone, Globe, TrendingUp, Zap, Heart, Leaf } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { EditableImage } from '@/components/ui/editable-image';

const WelbiltKitchenConnect = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate('/projects');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  const slideInLeft = {
    hidden: { opacity: 0, x: -50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  };

  const features = [
    { feature: "Voice Guidance", animation: "Open/Close Door", voice: true },
    { feature: "Dimensions", animation: "3D arrow indicators", voice: true },
    { feature: "Capacity", animation: "Animated volume indicator", voice: true },
    { feature: "Rotation", animation: "360° product spin", voice: true },
    { feature: "Child Lock", animation: "Lock icon toggle", voice: true },
    { feature: "Menu Selection", animation: "Dial animation", voice: true },
    { feature: "Cleaning", animation: "Lemon steam effect", voice: true }
  ];

  const designProcess = [
    "Empathize & Discover",
    "Define & Ideate", 
    "Prototype & Validate",
    "Design & Build",
    "QA & Deploy",
    "Distribute & Measure"
  ];

  const impactMetrics = [
    { label: "Cost Savings", value: "65%", icon: TrendingUp },
    { label: "Sustainability", value: "90%", icon: Leaf },
    { label: "User Engagement", value: "85%", icon: Heart },
    { label: "Accessibility", value: "100%", icon: Globe }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-blue-900 to-slate-900">
      <Navbar />
      
      <main className="pt-20">
        {/* Back Button */}
        <section className="w-full py-8">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <Button 
                onClick={handleBack}
                variant="secondary" 
                className="bg-white/10 backdrop-blur-sm text-white hover:bg-white/20 transition-all duration-300 border border-white/20"
                size="icon"
              >
                <ArrowLeft size={20} />
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Hero Section */}
        <section className="w-full relative min-h-[80vh] flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0">
            <motion.div
              initial={{ scale: 1.1, filter: "blur(4px)" }}
              animate={{ scale: 1, filter: "blur(0px)" }}
              transition={{ duration: 1.5, ease: "easeOut" }}
            >
              <EditableImage 
                src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
                alt="AR Interactive User Manual Hero"
                className="w-full h-full object-cover"
                fallbackSrc="/placeholder.svg"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-indigo-900/60 to-blue-900/80"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center text-white"
            >
              <motion.div className="flex flex-wrap gap-2 mb-6 justify-center" variants={itemVariants}>
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30">
                  AR Experience
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30">
                  Interactive Design
                </Badge>
                <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/30">
                  User Manual
                </Badge>
              </motion.div>

              <motion.h1 
                className="font-heading text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent"
                variants={itemVariants}
              >
                Interactive User Manual (IUM)
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-4xl font-semibold mb-8 text-cyan-300"
                variants={itemVariants}
              >
                Augmented Reality Experience
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-200"
                variants={itemVariants}
              >
                A transformative AR-based digital manual for LG consumer products, replacing traditional printed guides. 
                This solution enhances user experience, reduces environmental impact, and provides real-time, interactive product guidance.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Problem Statement */}
        <section className="py-20 bg-slate-900/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-6xl mx-auto"
            >
              <motion.h2 
                className="font-heading text-3xl md:text-5xl font-bold text-center text-white mb-16"
                variants={itemVariants}
              >
                Problem Statement
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                <motion.div variants={slideInLeft}>
                  <EditableImage 
                    src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
                    alt="Manual Cost Comparison Infographic"
                    className="w-full h-64 object-cover rounded-2xl shadow-2xl"
                    fallbackSrc="/placeholder.svg"
                  />
                </motion.div>

                <motion.div 
                  className="space-y-6"
                  variants={itemVariants}
                >
                  {[
                    { icon: "📦", text: "High cost of printing and distributing physical manuals" },
                    { icon: "🌱", text: "Environmental impact of paper waste" },
                    { icon: "🤯", text: "Poor user engagement with traditional manuals" },
                    { icon: "📉", text: "Lack of real-time, intuitive guidance" }
                  ].map((problem, index) => (
                    <motion.div
                      key={index}
                      className="flex items-center gap-4 p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10"
                      whileHover={{ scale: 1.02, backgroundColor: "rgba(255,255,255,0.1)" }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-2xl">{problem.icon}</span>
                      <p className="text-gray-200">{problem.text}</p>
                    </motion.div>
                  ))}
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-20 bg-gradient-to-r from-indigo-900/50 to-blue-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-6xl mx-auto"
            >
              <motion.h2 
                className="font-heading text-3xl md:text-5xl font-bold text-center text-white mb-16"
                variants={itemVariants}
              >
                Design Process
              </motion.h2>

              <div className="relative">
                {/* Glowing Path */}
                <div className="absolute top-1/2 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full opacity-50"></div>
                
                <div className="grid grid-cols-1 md:grid-cols-6 gap-8">
                  {designProcess.map((step, index) => (
                    <motion.div
                      key={index}
                      className="relative text-center"
                      variants={itemVariants}
                      custom={index}
                      whileHover={{ scale: 1.05 }}
                    >
                      <div className="bg-gradient-to-br from-cyan-500 to-blue-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
                        <span className="text-white font-bold text-xl">{index + 1}</span>
                      </div>
                      <h3 className="text-white font-semibold text-sm">{step}</h3>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* User Persona */}
        <section className="py-20 bg-slate-900/80">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h2 
                className="font-heading text-3xl md:text-5xl font-bold text-white mb-16"
                variants={itemVariants}
              >
                User Persona
              </motion.h2>

              <motion.div
                className="perspective-1000"
                variants={itemVariants}
                whileHover={{ rotateY: 5 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30 backdrop-blur-sm">
                  <CardHeader className="text-center">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-400 flex items-center justify-center">
                      <span className="text-4xl font-bold text-white">👩‍🍳</span>
                    </div>
                    <CardTitle className="text-2xl text-white">Julie the Homemaker</CardTitle>
                    <p className="text-cyan-300">Age: 35 | Location: Japan | Role: Homemaker</p>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-left">
                      <div className="bg-white/5 p-4 rounded-xl">
                        <h4 className="text-cyan-400 font-semibold mb-2">Goals</h4>
                        <p className="text-gray-300 text-sm">Cook healthy meals, reduce stress, buy the best for family</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl">
                        <h4 className="text-red-400 font-semibold mb-2">Frustrations</h4>
                        <p className="text-gray-300 text-sm">Complex manuals, lack of guidance</p>
                      </div>
                      <div className="bg-white/5 p-4 rounded-xl">
                        <h4 className="text-green-400 font-semibold mb-2">Needs</h4>
                        <p className="text-gray-300 text-sm">Efficient, intuitive, and accessible product setup</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* AR Experience Features */}
        <section className="py-20 bg-gradient-to-br from-blue-900/50 to-indigo-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-6xl mx-auto"
            >
              <motion.h2 
                className="font-heading text-3xl md:text-5xl font-bold text-center text-white mb-16"
                variants={itemVariants}
              >
                AR Experience Features
              </motion.h2>

              <div className="overflow-x-auto">
                <table className="w-full bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10">
                  <thead>
                    <tr className="border-b border-white/10">
                      <th className="text-left p-4 text-cyan-400 font-semibold">Feature</th>
                      <th className="text-left p-4 text-cyan-400 font-semibold">Animation</th>
                      <th className="text-center p-4 text-cyan-400 font-semibold">Voice Guidance</th>
                    </tr>
                  </thead>
                  <tbody>
                    {features.map((feature, index) => (
                      <motion.tr
                        key={index}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <td className="p-4 text-white font-medium">{feature.feature}</td>
                        <td className="p-4 text-gray-300">{feature.animation}</td>
                        <td className="p-4 text-center">
                          {feature.voice && <Volume2 className="w-5 h-5 text-green-400 mx-auto" />}
                        </td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>

              <motion.div className="mt-12" variants={itemVariants}>
                <Carousel className="max-w-4xl mx-auto">
                  <CarouselContent>
                    {[1, 2, 3, 4].map((item) => (
                      <CarouselItem key={item}>
                        <div className="p-4">
                          <Card className="bg-white/5 border-white/10">
                            <CardContent className="p-8">
                              <EditableImage 
                                src={`https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80`}
                                alt={`AR UI Screen ${item}`}
                                className="w-full h-64 object-cover rounded-xl mb-4"
                                fallbackSrc="/placeholder.svg"
                              />
                              <h3 className="text-white text-xl font-semibold text-center">AR Interface {item}</h3>
                            </CardContent>
                          </Card>
                        </div>
                      </CarouselItem>
                    ))}
                  </CarouselContent>
                  <CarouselPrevious className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
                  <CarouselNext className="bg-white/10 border-white/20 text-white hover:bg-white/20" />
                </Carousel>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Business Impact */}
        <section className="py-20 bg-slate-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-6xl mx-auto"
            >
              <motion.h2 
                className="font-heading text-3xl md:text-5xl font-bold text-center text-white mb-16"
                variants={itemVariants}
              >
                Business Impact
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                {impactMetrics.map((metric, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center"
                  >
                    <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30 backdrop-blur-sm h-full">
                      <CardContent className="p-8">
                        <metric.icon className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                        <motion.div
                          className="text-4xl font-bold text-white mb-2"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                          {metric.value}
                        </motion.div>
                        <p className="text-gray-300">{metric.label}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Proof of Concept */}
        <section className="py-20 bg-gradient-to-r from-indigo-900/50 to-blue-900/50">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={containerVariants}
              className="max-w-4xl mx-auto text-center"
            >
              <motion.h2 
                className="font-heading text-3xl md:text-5xl font-bold text-white mb-8"
                variants={itemVariants}
              >
                Proof of Concept
              </motion.h2>

              <motion.p 
                className="text-xl text-gray-200 mb-12"
                variants={itemVariants}
              >
                Built using HCL's Cyclops IUM app on Android AR-enabled devices. 
                Demonstrated real-time interaction with LG's Charcoal Convection Microwave.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="relative group cursor-pointer"
                whileHover={{ scale: 1.02 }}
              >
                <EditableImage 
                  src="https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                  alt="AR User Manual Demo"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                  fallbackSrc="/placeholder.svg"
                />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    <Play className="w-16 h-16 text-white" />
                  </motion.div>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Final Takeaway */}
        <section className="py-20 bg-gradient-to-br from-cyan-600 to-blue-600">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-8">
                Final Takeaway
              </h2>
              <blockquote className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto italic leading-relaxed mb-8">
                "It's not enough to build usable products—we must build experiences that bring joy, clarity, and confidence."
              </blockquote>
              <p className="text-white/80 text-lg">– Inspired by Don Norman</p>
              
              <motion.div className="mt-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
                    onClick={() => navigate('/contact')}
                  >
                    Let's Create Something Amazing
                  </Button>
                </motion.div>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default WelbiltKitchenConnect;

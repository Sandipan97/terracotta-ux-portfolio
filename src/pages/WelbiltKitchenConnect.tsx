
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Users, Target, Lightbulb, Palette, Code, TestTube, Rocket } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
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

  const designProcess = [
    {
      icon: Users,
      title: "Research & Discovery",
      description: "Conducted user interviews and analyzed existing kitchen management workflows"
    },
    {
      icon: Target,
      title: "Problem Definition",
      description: "Identified key pain points in restaurant kitchen operations and equipment management"
    },
    {
      icon: Lightbulb,
      title: "Ideation",
      description: "Brainstormed solutions focusing on real-time monitoring and predictive maintenance"
    },
    {
      icon: Palette,
      title: "Design System",
      description: "Created comprehensive design system with components, patterns, and guidelines"
    },
    {
      icon: Code,
      title: "Prototyping",
      description: "Built interactive prototypes to validate design concepts and user flows"
    },
    {
      icon: TestTube,
      title: "Testing",
      description: "Conducted usability testing with kitchen staff and managers"
    },
    {
      icon: Rocket,
      title: "Implementation",
      description: "Collaborated with development team for successful product launch"
    }
  ];

  const achievements = [
    {
      metric: "35%",
      label: "Faster Development",
      description: "Design system accelerated development cycle"
    },
    {
      metric: "60%",
      label: "Reduced Errors",
      description: "Improved kitchen workflow accuracy"
    },
    {
      metric: "85%",
      label: "User Satisfaction",
      description: "Positive feedback from kitchen staff"
    },
    {
      metric: "40%",
      label: "Time Savings",
      description: "Reduced equipment maintenance time"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
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
                alt="Welbilt Kitchen Connect Hero"
                className="w-full h-full object-cover"
                fallbackSrc="/placeholder.svg"
              />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 to-blue-900/80"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="text-center text-white"
            >
              <motion.div className="flex flex-wrap gap-2 mb-6 justify-center" variants={itemVariants}>
                <Badge className="bg-blue-500/20 text-blue-300 border-blue-500/30 hover:bg-blue-500/30">
                  Kitchen Management
                </Badge>
                <Badge className="bg-indigo-500/20 text-indigo-300 border-indigo-500/30 hover:bg-indigo-500/30">
                  Design System
                </Badge>
                <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-500/30 hover:bg-cyan-500/30">
                  Enterprise UX
                </Badge>
              </motion.div>

              <motion.h1 
                className="font-heading text-4xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"
                variants={itemVariants}
              >
                Welbilt Kitchen Connect
              </motion.h1>
              
              <motion.h2 
                className="text-2xl md:text-4xl font-semibold mb-8 text-blue-300"
                variants={itemVariants}
              >
                Design System & Platform Revamp
              </motion.h2>
              
              <motion.p 
                className="text-lg md:text-xl max-w-4xl mx-auto leading-relaxed text-gray-200"
                variants={itemVariants}
              >
                A comprehensive redesign of Welbilt's kitchen management platform, featuring a complete design system 
                that improved development efficiency by 35% and enhanced user experience across all touchpoints.
              </motion.p>
            </motion.div>
          </div>
        </section>

        {/* Project Overview */}
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
                Project Overview
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-blue-400 mb-4">The Challenge</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    Welbilt's kitchen management platform had grown organically over time, resulting in 
                    inconsistent user experiences, scattered design patterns, and slow development cycles. 
                    Kitchen staff struggled with complex workflows, while the development team faced 
                    challenges maintaining design consistency.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Inconsistent UI patterns across modules
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Slow development and design handoffs
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                      Poor usability for kitchen staff
                    </li>
                  </ul>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h3 className="text-2xl font-bold text-cyan-400 mb-4">The Solution</h3>
                  <p className="text-gray-300 leading-relaxed mb-6">
                    I led the creation of a comprehensive design system and platform redesign that 
                    established consistent patterns, improved user workflows, and accelerated development. 
                    The new system focused on kitchen staff needs while ensuring scalability for future features.
                  </p>
                  <ul className="space-y-2 text-gray-300">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      Unified design system with 50+ components
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      Streamlined workflows for kitchen operations
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full"></div>
                      35% faster development cycles
                    </li>
                  </ul>
                </motion.div>
              </div>

              <motion.div variants={itemVariants}>
                <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <EditableImage 
                      src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                      alt="Kitchen Connect Dashboard"
                      className="w-full h-64 object-cover rounded-xl mb-4"
                      fallbackSrc="/placeholder.svg"
                    />
                    <h3 className="text-white text-xl font-semibold text-center">Modern Kitchen Management Dashboard</h3>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Design Process */}
        <section className="py-20 bg-gradient-to-r from-blue-900/50 to-indigo-900/50">
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {designProcess.map((step, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    custom={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center"
                  >
                    <Card className="bg-gradient-to-br from-blue-500/10 to-cyan-500/10 border-blue-500/30 backdrop-blur-sm h-full">
                      <CardHeader>
                        <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4">
                          <step.icon className="w-8 h-8 text-white" />
                        </div>
                        <CardTitle className="text-white text-xl">{step.title}</CardTitle>
                      </CardHeader>
                      <CardContent>
                        <p className="text-gray-300">{step.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Achievements */}
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
                Key Achievements
              </motion.h2>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="text-center"
                  >
                    <Card className="bg-gradient-to-br from-cyan-500/10 to-blue-500/10 border-cyan-500/30 backdrop-blur-sm h-full">
                      <CardContent className="p-8">
                        <motion.div
                          className="text-4xl font-bold text-white mb-2"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.8, delay: index * 0.2 }}
                        >
                          {achievement.metric}
                        </motion.div>
                        <h3 className="text-cyan-400 font-semibold mb-2">{achievement.label}</h3>
                        <p className="text-gray-300 text-sm">{achievement.description}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Final Takeaway */}
        <section className="py-20 bg-gradient-to-br from-blue-600 to-cyan-600">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-8">
                Design System Impact
              </h2>
              <blockquote className="text-xl md:text-2xl text-white/90 max-w-4xl mx-auto italic leading-relaxed mb-8">
                "A well-crafted design system is not just about consistency—it's about empowering teams to build better experiences faster."
              </blockquote>
              
              <motion.div className="mt-12">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    className="bg-white text-blue-600 hover:bg-gray-100 text-lg px-8 py-3"
                    onClick={() => navigate('/contact')}
                  >
                    Let's Build Something Great
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

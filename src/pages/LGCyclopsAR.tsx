
import { motion } from 'framer-motion';
import { ArrowLeft, Eye, Smartphone, Users, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { EditableImage } from '@/components/ui/editable-image';

const LGCyclopsAR = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="w-full relative h-[50vh] overflow-hidden">
          <motion.div 
            className="absolute top-4 left-4 z-30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button 
              onClick={goBack}
              variant="secondary" 
              className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background hover:text-bengali-terracotta transition-all duration-300 border border-border/50"
              size="icon"
            >
              <ArrowLeft size={20} />
            </Button>
          </motion.div>

          <motion.div 
            className="absolute inset-0 z-10"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
          >
            <EditableImage 
              src="https://images.unsplash.com/photo-1592478411213-6153e4ebc696?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="AR Interactive User Manual - LG Cyclops"
              className="w-full h-full object-cover"
              fallbackSrc="/placeholder.svg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40 z-10"></div>
          </motion.div>
        </section>

        {/* Project Information */}
        <section className="w-full bg-background/95 backdrop-blur-sm py-12 border-b border-border/30 relative overflow-hidden">
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                <Badge className="bg-bengali-terracotta/10 text-bengali-terracotta hover:bg-bengali-terracotta hover:text-white transition-all duration-300 border border-bengali-terracotta/20">
                  AR Design
                </Badge>
                <Badge className="bg-bengali-terracotta/10 text-bengali-terracotta hover:bg-bengali-terracotta hover:text-white transition-all duration-300 border border-bengali-terracotta/20">
                  User Experience
                </Badge>
                <Badge className="bg-bengali-terracotta/10 text-bengali-terracotta hover:bg-bengali-terracotta hover:text-white transition-all duration-300 border border-bengali-terracotta/20">
                  Interactive Design
                </Badge>
              </div>

              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-foreground text-center md:text-left">
                AR Interactive User Manual - LG Cyclops
              </h1>
              
              <p className="text-lg mb-8 text-muted-foreground text-center md:text-left max-w-4xl leading-relaxed">
                Designed an augmented reality solution that transforms the traditional product manual into an interactive experience, making complex product information accessible and engaging through immersive AR technology.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <motion.div 
                  className="bg-background/60 backdrop-blur-sm p-5 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-bengali-terracotta text-sm font-medium mb-2 uppercase tracking-wide">Client</h3>
                  <p className="font-semibold text-foreground">LG Electronics</p>
                </motion.div>
                
                <motion.div 
                  className="bg-background/60 backdrop-blur-sm p-5 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-bengali-terracotta text-sm font-medium mb-2 uppercase tracking-wide">Duration</h3>
                  <p className="font-semibold text-foreground">4 Months</p>
                </motion.div>
                
                <motion.div 
                  className="bg-background/60 backdrop-blur-sm p-5 rounded-2xl border border-border/50 shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-bengali-terracotta text-sm font-medium mb-2 uppercase tracking-wide">My Role</h3>
                  <p className="font-semibold text-foreground">UX Designer & AR Experience Designer</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Project Overview */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-8 text-center text-foreground">
                Project Overview
              </h2>
              
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="mb-6">
                  Traditional product manuals are often complex, hard to navigate, and fail to provide users with the immediate, contextual help they need. The LG Cyclops AR project aimed to revolutionize how users interact with product documentation by creating an immersive augmented reality experience.
                </p>
                
                <p className="mb-6">
                  This innovative solution overlays digital information directly onto the physical product, allowing users to point their device at any component and instantly access relevant instructions, troubleshooting tips, and interactive guides.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Key Features */}
        <section className="py-16 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-6xl mx-auto"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-center text-foreground">
                Key Features
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <motion.div
                  className="bg-background p-6 rounded-xl shadow-lg border border-border"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Eye className="w-12 h-12 text-bengali-terracotta mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                    Visual Recognition
                  </h3>
                  <p className="text-muted-foreground">
                    Advanced computer vision technology identifies product components in real-time for accurate AR overlay placement.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-background p-6 rounded-xl shadow-lg border border-border"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Smartphone className="w-12 h-12 text-bengali-terracotta mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                    Mobile-First Design
                  </h3>
                  <p className="text-muted-foreground">
                    Optimized for smartphones and tablets, making the AR manual accessible to users anywhere, anytime.
                  </p>
                </motion.div>

                <motion.div
                  className="bg-background p-6 rounded-xl shadow-lg border border-border"
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Users className="w-12 h-12 text-bengali-terracotta mb-4" />
                  <h3 className="font-heading text-xl font-semibold mb-3 text-foreground">
                    User-Centric Interface
                  </h3>
                  <p className="text-muted-foreground">
                    Intuitive AR interface designed based on extensive user research and usability testing.
                  </p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Results */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-12 text-foreground">
                Project Results
              </h2>
              
              <div className="bg-gradient-to-br from-bengali-terracotta to-bengali-red p-8 rounded-2xl text-white mb-8">
                <TrendingUp className="w-16 h-16 mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">60% Reduction in Support Calls</h3>
                <p className="text-lg opacity-90">
                  The AR manual significantly reduced the need for customer support, as users could find answers independently through the interactive experience.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-muted/50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-foreground mb-2">User Engagement</h4>
                  <p className="text-3xl font-bold text-bengali-terracotta mb-2">+85%</p>
                  <p className="text-muted-foreground">Increase in manual usage and completion rates</p>
                </div>
                
                <div className="bg-muted/50 p-6 rounded-xl">
                  <h4 className="text-xl font-semibold text-foreground mb-2">Task Completion</h4>
                  <p className="text-3xl font-bold text-bengali-terracotta mb-2">+70%</p>
                  <p className="text-muted-foreground">Improvement in successful task completion</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-bengali-terracotta to-bengali-red">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Interested in AR Design?
              </h2>
              <p className="text-white/90 max-w-2xl mx-auto mb-8">
                Let's discuss how AR and immersive technologies can transform your user experience.
              </p>
              <Button 
                className="bg-white text-bengali-terracotta hover:bg-bengali-mustard hover:text-bengali-dark transition-all duration-300"
                onClick={() => navigate('/contact')}
              >
                Get in Touch
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default LGCyclopsAR;

import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { EditableImage } from '@/components/ui/editable-image';

const ToyAnatomyProject = () => {
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
              className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background hover:text-orange-600 transition-all duration-300 border border-border/50"
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
              src="https://images.unsplash.com/photo-1473091534298-04dcbce3278c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Toy Anatomy - Kids Educational Project"
              className="w-full h-full object-cover"
              fallbackSrc="/placeholder.svg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-orange-900/40 to-amber-900/60 z-10"></div>
          </motion.div>
        </section>

        {/* Project Information */}
        <section className="w-full bg-orange-900/95 backdrop-blur-sm py-12 border-b border-orange-500/20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                <Badge className="bg-white text-orange-900 hover:bg-orange-50 transition-all duration-300 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-900" 
                       tabIndex={0} role="button" aria-label="Educational Design tag">
                  🎓 Educational Design
                </Badge>
                <Badge className="bg-white text-amber-900 hover:bg-amber-50 transition-all duration-300 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-amber-900" 
                       tabIndex={0} role="button" aria-label="Interactive Learning tag">
                  🧠 Interactive Learning
                </Badge>
                <Badge className="bg-white text-orange-900 hover:bg-orange-50 transition-all duration-300 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-orange-900" 
                       tabIndex={0} role="button" aria-label="Product Design tag">
                  🎨 Product Design
                </Badge>
              </div>

              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white text-center md:text-left">
                Toy Anatomy - Kids Educational Project
              </h1>
              
              <p className="text-lg mb-8 text-white text-center md:text-left max-w-4xl leading-relaxed">
                An innovative educational toy system designed to teach children about human anatomy through interactive play, making complex biological concepts accessible and engaging for young learners.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <motion.div 
                  className="bg-orange-900/30 backdrop-blur-sm p-5 rounded-2xl border border-orange-500/30 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-wide">Client</h3>
                  <p className="font-semibold text-white">IISc Bangalore</p>
                </motion.div>
                
                <motion.div 
                  className="bg-orange-900/30 backdrop-blur-sm p-5 rounded-2xl border border-orange-500/30 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-wide">Duration</h3>
                  <p className="font-semibold text-white">4 Months</p>
                </motion.div>
                
                <motion.div 
                  className="bg-orange-900/30 backdrop-blur-sm p-5 rounded-2xl border border-orange-500/30 shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-wide">My Role</h3>
                  <p className="font-semibold text-white">Lead Educational Designer</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Design Features */}
        <section className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
                Educational Design Solutions
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Creating engaging learning experiences that make complex anatomy concepts accessible to children through play-based education.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <motion.div
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-foreground mb-3">Interactive Components</h3>
                <p className="text-muted-foreground">Modular toy pieces that children can assemble to learn about different organ systems.</p>
              </motion.div>

              <motion.div
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-amber-500/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-amber-500 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-foreground mb-3">Age-Appropriate Design</h3>
                <p className="text-muted-foreground">Safe, colorful materials and sizing designed specifically for children aged 6-12 years.</p>
              </motion.div>

              <motion.div
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-orange-500/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-orange-500 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-foreground mb-3">Educational Value</h3>
                <p className="text-muted-foreground">Curriculum-aligned content that supports STEM education and scientific curiosity.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Learning Impact */}
        <section className="py-16 bg-gradient-to-br from-orange-600 to-amber-600">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8">
                Educational Impact
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                 <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm border border-white/30">
                   <div className="text-4xl font-bold text-white mb-2">40%</div>
                   <div className="text-white">Learning Improvement</div>
                 </div>
                 <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm border border-white/30">
                   <div className="text-4xl font-bold text-white mb-2">85%</div>
                   <div className="text-white">Engagement Rate</div>
                 </div>
                 <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm border border-white/30">
                   <div className="text-4xl font-bold text-white mb-2">12+</div>
                   <div className="text-white">Body Systems Covered</div>
                 </div>
              </div>

              <blockquote className="text-xl text-white max-w-4xl mx-auto italic leading-relaxed mb-8">
                "The best educational tools don't feel like learning—they feel like discovery and play."
              </blockquote>
              
              <Button 
                className="bg-white text-orange-600 hover:bg-orange-100 hover:text-orange-700 transition-all duration-300"
                onClick={() => navigate('/contact')}
              >
                Discuss Educational Design
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ToyAnatomyProject;
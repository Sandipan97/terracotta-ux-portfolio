import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { EditableImage } from '@/components/ui/editable-image';

const O2CProject = () => {
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
              className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background hover:text-cyan-600 transition-all duration-300 border border-border/50"
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
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Oxygen Concentrator O2C Project"
              className="w-full h-full object-cover"
              fallbackSrc="/placeholder.svg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-cyan-900/40 to-blue-900/60 z-10"></div>
          </motion.div>
        </section>

        {/* Project Information */}
        <section className="w-full bg-cyan-900/95 backdrop-blur-sm py-12 border-b border-cyan-500/20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                <Badge className="bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500 hover:text-white transition-all duration-300 border border-cyan-500/30">
                  Healthcare
                </Badge>
                <Badge className="bg-blue-500/20 text-blue-300 hover:bg-blue-500 hover:text-white transition-all duration-300 border border-blue-500/30">
                  Product Design
                </Badge>
                <Badge className="bg-cyan-500/20 text-cyan-300 hover:bg-cyan-500 hover:text-white transition-all duration-300 border border-cyan-500/30">
                  Medical Device
                </Badge>
              </div>

              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white text-center md:text-left">
                Oxygen Concentrator O2C Project
              </h1>
              
              <p className="text-lg mb-8 text-cyan-200 text-center md:text-left max-w-4xl leading-relaxed">
                A comprehensive UX design project for a portable oxygen concentrator, focusing on creating an intuitive user interface that prioritizes patient safety and ease of use in critical medical situations.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <motion.div 
                  className="bg-cyan-900/30 backdrop-blur-sm p-5 rounded-2xl border border-cyan-500/30 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-cyan-300 text-sm font-medium mb-2 uppercase tracking-wide">Client</h3>
                  <p className="font-semibold text-white">Merritt Innovation Solutions & IISc</p>
                </motion.div>
                
                <motion.div 
                  className="bg-cyan-900/30 backdrop-blur-sm p-5 rounded-2xl border border-cyan-500/30 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-cyan-300 text-sm font-medium mb-2 uppercase tracking-wide">Duration</h3>
                  <p className="font-semibold text-white">5 Months</p>
                </motion.div>
                
                <motion.div 
                  className="bg-cyan-900/30 backdrop-blur-sm p-5 rounded-2xl border border-cyan-500/30 shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-cyan-300 text-sm font-medium mb-2 uppercase tracking-wide">My Role</h3>
                  <p className="font-semibold text-white">Senior Product Designer</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Design Solutions */}
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
                Design Solutions
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Developing user-centered interfaces for critical medical equipment that prioritize safety, clarity, and accessibility.
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
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-foreground mb-3">Critical Safety Interface</h3>
                <p className="text-muted-foreground">Clear visual indicators and fail-safe controls designed for emergency medical situations.</p>
              </motion.div>

              <motion.div
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-blue-500/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-foreground mb-3">Portable Design</h3>
                <p className="text-muted-foreground">Compact, lightweight interface optimized for home and mobile medical use.</p>
              </motion.div>

              <motion.div
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-cyan-500 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-foreground mb-3">Patient-Centered UX</h3>
                <p className="text-muted-foreground">Intuitive controls designed for patients and caregivers with varying technical expertise.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Project Impact */}
        <section className="py-16 bg-gradient-to-br from-cyan-600 to-blue-600">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8">
                Design Impact
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-white mb-2">85%</div>
                  <div className="text-cyan-100">User Satisfaction</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-white mb-2">70%</div>
                  <div className="text-cyan-100">Setup Time Reduction</div>
                </div>
                <div className="bg-white/10 rounded-2xl p-6 backdrop-blur-sm">
                  <div className="text-4xl font-bold text-white mb-2">90%</div>
                  <div className="text-cyan-100">Safety Compliance</div>
                </div>
              </div>

              <blockquote className="text-xl text-cyan-100 max-w-4xl mx-auto italic leading-relaxed mb-8">
                "In medical device design, every interface decision can impact patient outcomes—clarity and safety must be paramount."
              </blockquote>
              
              <Button 
                className="bg-white text-cyan-600 hover:bg-cyan-100 hover:text-cyan-700 transition-all duration-300"
                onClick={() => navigate('/contact')}
              >
                Discuss Medical Device Design
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default O2CProject;
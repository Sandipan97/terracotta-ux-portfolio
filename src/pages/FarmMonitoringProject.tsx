import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { EditableImage } from '@/components/ui/editable-image';

const FarmMonitoringProject = () => {
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
              className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background hover:text-green-600 transition-all duration-300 border border-border/50"
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
              src="https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Farm Monitoring Mobile Application"
              className="w-full h-full object-cover"
              fallbackSrc="/placeholder.svg"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-green-900/40 to-emerald-900/60 z-10"></div>
          </motion.div>
        </section>

        {/* Project Information */}
        <section className="w-full bg-green-900/95 backdrop-blur-sm py-12 border-b border-green-500/20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="max-w-6xl mx-auto"
            >
              <div className="flex flex-wrap gap-2 mb-6 justify-center md:justify-start">
                <Badge className="bg-white text-green-900 hover:bg-green-50 transition-all duration-300 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-900" 
                       tabIndex={0} role="button" aria-label="Agriculture tag">
                  🌾 Agriculture
                </Badge>
                <Badge className="bg-white text-emerald-900 hover:bg-emerald-50 transition-all duration-300 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-emerald-900" 
                       tabIndex={0} role="button" aria-label="Mobile App tag">
                  📱 Mobile App
                </Badge>
                <Badge className="bg-white text-green-900 hover:bg-green-50 transition-all duration-300 border border-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-green-900" 
                       tabIndex={0} role="button" aria-label="UX Design tag">
                  🎨 UX Design
                </Badge>
              </div>

              <h1 className="font-heading text-4xl md:text-6xl font-bold mb-6 text-white text-center md:text-left">
                Farm Monitoring Mobile Application
              </h1>
              
              <p className="text-lg mb-8 text-white text-center md:text-left max-w-4xl leading-relaxed">
                A comprehensive mobile application designed to help farmers monitor crop conditions, soil health, and weather patterns in real-time, enabling data-driven agricultural decisions for improved yields.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                <motion.div 
                  className="bg-green-900/30 backdrop-blur-sm p-5 rounded-2xl border border-green-500/30 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.7 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-wide">Client</h3>
                  <p className="font-semibold text-white">HCLTech</p>
                </motion.div>
                
                <motion.div 
                  className="bg-green-900/30 backdrop-blur-sm p-5 rounded-2xl border border-green-500/30 shadow-lg hover:shadow-xl transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-wide">Duration</h3>
                  <p className="font-semibold text-white">6 Months</p>
                </motion.div>
                
                <motion.div 
                  className="bg-green-900/30 backdrop-blur-sm p-5 rounded-2xl border border-green-500/30 shadow-lg hover:shadow-xl transition-all duration-300 sm:col-span-2 lg:col-span-1"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.9 }}
                  whileHover={{ y: -2, scale: 1.02 }}
                >
                  <h3 className="text-white text-sm font-medium mb-2 uppercase tracking-wide">My Role</h3>
                  <p className="font-semibold text-white">Lead UX Designer</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* App Features */}
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
                Key Features & Solutions
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto">
                Empowering farmers with technology-driven insights for smarter agricultural decisions and improved crop management.
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
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-foreground mb-3">Real-Time Monitoring</h3>
                <p className="text-muted-foreground">Live tracking of soil moisture, temperature, and crop health indicators through IoT sensors.</p>
              </motion.div>

              <motion.div
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-emerald-500/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-emerald-500 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-foreground mb-3">Weather Integration</h3>
                <p className="text-muted-foreground">Comprehensive weather forecasting with alerts for optimal planting and harvesting times.</p>
              </motion.div>

              <motion.div
                className="bg-card/50 backdrop-blur-sm p-6 rounded-xl border border-border"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-12 h-12 bg-green-500/20 rounded-lg flex items-center justify-center mb-4">
                  <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                </div>
                <h3 className="font-semibold text-foreground mb-3">Data Analytics</h3>
                <p className="text-muted-foreground">Advanced analytics dashboard providing insights into crop performance and yield predictions.</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Agricultural Impact */}
        <section className="py-16 bg-gradient-to-br from-green-600 to-emerald-600">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-8">
                Agricultural Impact
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto mb-12">
                 <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm border border-white/30">
                   <div className="text-4xl font-bold text-white mb-2">28%</div>
                   <div className="text-white">Yield Improvement</div>
                 </div>
                 <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm border border-white/30">
                   <div className="text-4xl font-bold text-white mb-2">35%</div>
                   <div className="text-white">Water Conservation</div>
                 </div>
                 <div className="bg-white/20 rounded-2xl p-6 backdrop-blur-sm border border-white/30">
                   <div className="text-4xl font-bold text-white mb-2">50%</div>
                   <div className="text-white">Decision Speed</div>
                 </div>
              </div>

              <blockquote className="text-xl text-white max-w-4xl mx-auto italic leading-relaxed mb-8">
                "Technology in agriculture isn't about replacing tradition—it's about enhancing farmers' wisdom with data-driven insights."
              </blockquote>
              
              <Button 
                className="bg-white text-green-600 hover:bg-green-100 hover:text-green-700 transition-all duration-300"
                onClick={() => navigate('/contact')}
              >
                Discuss AgTech Projects
              </Button>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FarmMonitoringProject;
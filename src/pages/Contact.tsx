
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, ExternalLink, Download, MapPin, Clock, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { motion } from 'framer-motion';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon."
      });
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      setIsSubmitting(false);
    }, 1500);
  };

  const contactInfo = [
    {
      icon: Mail,
      title: "Email",
      value: "sandipannaskar.job@gmail.com",
      link: "mailto:sandipannaskar.job@gmail.com"
    },
    {
      icon: Phone,
      title: "Phone",
      value: "+91 7327095861",
      link: "tel:+917327095861"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "Connect with me",
      link: "https://www.linkedin.com/in/sandipan-naskar-129a88155/"
    },
    {
      icon: ExternalLink,
      title: "Behance",
      value: "View my portfolio",
      link: "https://www.behance.net/sandipannaskar"
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Enhanced Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-bengali-terracotta via-bengali-mustard to-bengali-terracotta-light dark:from-bengali-terracotta dark:via-bengali-mustard dark:to-bengali-red py-24">
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute -top-10 -left-10 w-32 h-32 rounded-full bg-white/10 dark:bg-black/10"
              animate={{ 
                y: [0, 20, 0],
                x: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 8,
                ease: "easeInOut"
              }}
            />
            <motion.div 
              className="absolute top-1/2 -right-16 w-24 h-24 rounded-full bg-white/5 dark:bg-black/5"
              animate={{ 
                y: [0, -15, 0],
                x: [0, -5, 0],
                rotate: [0, 180, 360]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 12,
                ease: "linear"
              }}
            />
            <motion.div 
              className="absolute bottom-10 left-1/3 w-16 h-16 rounded-full bg-white/8 dark:bg-black/8"
              animate={{ 
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{ 
                repeat: Infinity, 
                duration: 6,
                ease: "easeInOut"
              }}
            />
          </div>

          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <h1 className="font-display text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
                Get in Touch
              </h1>
              <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90 font-medium leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Let's create something amazing together!
              </p>
              
              {/* Availability Status */}
              <motion.div 
                className="inline-flex items-center bg-white/20 dark:bg-black/20 backdrop-blur-sm rounded-full px-6 py-3 text-white"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ repeat: Infinity, duration: 2 }}
                >
                  <CheckCircle className="w-5 h-5 mr-2 text-green-400" />
                </motion.div>
                Currently Available for New Projects
              </motion.div>
            </motion.div>
          </div>
        </section>
        
        {/* Enhanced Contact Form and Info */}
        <section className="py-20 bg-background relative">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
              {/* Enhanced Contact Form */}
              <motion.div 
                className="relative"
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-bengali-terracotta/5 to-bengali-mustard/5 dark:from-bengali-terracotta/10 dark:to-bengali-mustard/10 rounded-2xl blur-3xl"></div>
                <div className="relative bg-card/80 dark:bg-card/60 backdrop-blur-xl p-8 md:p-10 rounded-2xl shadow-2xl border border-border/50 dark-glow-card">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                    Send a Message
                  </h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-8">
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-3">
                        Your Name
                      </label>
                      <Input 
                        id="name" 
                        name="name" 
                        value={formData.name} 
                        onChange={handleChange} 
                        placeholder="Enter your full name" 
                        required 
                        className="h-12 border-2 border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-bengali-terracotta dark:focus-visible:ring-bengali-mustard focus-visible:border-transparent transition-all duration-300 rounded-lg" 
                      />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-3">
                        Your Email
                      </label>
                      <Input 
                        id="email" 
                        name="email" 
                        value={formData.email} 
                        onChange={handleChange} 
                        type="email" 
                        placeholder="your.email@example.com" 
                        required 
                        className="h-12 border-2 border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-bengali-terracotta dark:focus-visible:ring-bengali-mustard focus-visible:border-transparent transition-all duration-300 rounded-lg" 
                      />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.01 }}
                      transition={{ duration: 0.2 }}
                    >
                      <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-3">
                        Your Message
                      </label>
                      <Textarea 
                        id="message" 
                        name="message" 
                        value={formData.message} 
                        onChange={handleChange} 
                        placeholder="Tell me about your project, ideas, or how we can collaborate..." 
                        rows={6} 
                        required 
                        className="border-2 border-border/50 bg-background/50 text-foreground placeholder:text-muted-foreground focus-visible:ring-2 focus-visible:ring-bengali-terracotta dark:focus-visible:ring-bengali-mustard focus-visible:border-transparent transition-all duration-300 rounded-lg resize-none" 
                      />
                    </motion.div>
                    
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button 
                        type="submit" 
                        disabled={isSubmitting} 
                        className="w-full h-12 bg-bengali-terracotta hover:bg-bengali-terracotta-light text-white dark:bg-bengali-mustard dark:hover:bg-bengali-mustard-light shadow-lg hover:shadow-2xl transition-all duration-300 text-lg font-semibold rounded-lg"
                      >
                        {isSubmitting ? (
                          <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                            className="w-5 h-5 border-2 border-white border-t-transparent rounded-full"
                          />
                        ) : (
                          'Send Message'
                        )}
                      </Button>
                    </motion.div>
                  </form>
                </div>
              </motion.div>
              
              {/* Enhanced Contact Information */}
              <motion.div 
                className="space-y-8"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <div className="relative bg-card/60 dark:bg-card/40 backdrop-blur-xl p-8 md:p-10 rounded-2xl border border-border/50 dark-glow-card">
                  <h2 className="font-display text-3xl font-bold text-foreground mb-8">
                    Let's Connect
                  </h2>
                  
                  <div className="space-y-6">
                    {contactInfo.map((item, index) => (
                      <motion.a
                        key={index}
                        href={item.link}
                        target={item.link.startsWith('http') ? '_blank' : undefined}
                        rel={item.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="flex items-center p-4 bg-background/50 dark:bg-background/30 rounded-xl hover:bg-bengali-terracotta/10 dark:hover:bg-bengali-mustard/10 transition-all duration-300 group border border-border/30"
                        whileHover={{ scale: 1.02, x: 10 }}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.1 }}
                      >
                        <div className="w-12 h-12 rounded-full bg-bengali-terracotta/10 dark:bg-bengali-mustard/10 flex items-center justify-center mr-4 group-hover:bg-bengali-terracotta/20 dark:group-hover:bg-bengali-mustard/20 transition-colors duration-300">
                          <item.icon className="w-6 h-6 text-bengali-terracotta dark:text-bengali-mustard" />
                        </div>
                        <div>
                          <h4 className="font-semibold text-foreground text-lg">{item.title}</h4>
                          <p className="text-muted-foreground group-hover:text-bengali-terracotta dark:group-hover:text-bengali-mustard transition-colors duration-300">
                            {item.value}
                          </p>
                        </div>
                        {item.link.startsWith('http') && (
                          <ExternalLink className="w-5 h-5 ml-auto text-muted-foreground group-hover:text-bengali-terracotta dark:group-hover:text-bengali-mustard transition-colors duration-300" />
                        )}
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Response Time Card */}
                <motion.div 
                  className="relative bg-gradient-to-br from-bengali-terracotta/10 to-bengali-mustard/10 dark:from-bengali-terracotta/20 dark:to-bengali-mustard/20 backdrop-blur-xl p-6 rounded-2xl border border-border/50"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 }}
                >
                  <div className="flex items-center mb-4">
                    <Clock className="w-6 h-6 text-bengali-terracotta dark:text-bengali-mustard mr-3" />
                    <h3 className="font-semibold text-foreground text-lg">Quick Response</h3>
                  </div>
                  <p className="text-muted-foreground">
                    I typically respond within <span className="font-semibold text-bengali-terracotta dark:text-bengali-mustard">24 hours</span> during weekdays. 
                    For urgent inquiries, feel free to call directly.
                  </p>
                </motion.div>

                {/* Resume Download */}
                <motion.div 
                  className="pt-4"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6 }}
                >
                  <Button className="w-full h-12 bg-gradient-to-r from-bengali-terracotta to-bengali-mustard hover:from-bengali-terracotta-light hover:to-bengali-mustard-light text-white shadow-lg hover:shadow-2xl transition-all duration-300 text-lg font-semibold rounded-lg">
                    <Download className="mr-3 h-5 w-5" /> 
                    Download Resume (PDF)
                  </Button>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>
        
        {/* Enhanced Location Section */}
        <section className="py-16 bg-muted/20 dark:bg-card/20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              className="text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl font-bold text-foreground mb-6">
                Location & Availability
              </h2>
              <p className="text-muted-foreground max-w-3xl mx-auto text-lg leading-relaxed">
                Based in <span className="font-semibold text-bengali-terracotta dark:text-bengali-mustard">Bangalore, India</span>. 
                Available for remote work globally and on-site projects within India.
              </p>
            </motion.div>
            
            <motion.div 
              className="max-w-6xl mx-auto h-96 bg-gradient-to-br from-background to-muted/50 dark:from-card/50 dark:to-background rounded-2xl overflow-hidden border border-border/50 shadow-xl relative"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-bengali-terracotta/5 to-bengali-mustard/5 dark:from-bengali-terracotta/10 dark:to-bengali-mustard/10"></div>
              <div className="w-full h-full flex items-center justify-center relative z-10">
                <div className="text-center space-y-4">
                  <MapPin className="w-16 h-16 text-bengali-terracotta dark:text-bengali-mustard mx-auto" />
                  <div className="text-2xl font-semibold text-foreground">Interactive Map</div>
                  <div className="text-muted-foreground">Bangalore, Karnataka, India</div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-br from-bengali-terracotta via-bengali-mustard to-bengali-red dark:from-bengali-terracotta-light dark:via-bengali-mustard-light dark:to-bengali-red-light relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10 dark:bg-black/20"></div>
          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-8 drop-shadow-lg">
                Let's Create Something Amazing Together
              </h2>
              <p className="text-white/90 max-w-3xl mx-auto mb-10 text-lg leading-relaxed">
                Whether you're looking for a UX designer for your next project, a speaker for your event, 
                or just want to connect, I'd love to hear from you and explore the possibilities.
              </p>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
              >
                <Button 
                  size="lg" 
                  className="bg-white text-bengali-terracotta hover:bg-white/90 shadow-2xl hover:shadow-3xl transition-all duration-300 px-8 py-4 text-lg font-semibold"
                >
                  Schedule a Call
                </Button>
              </motion.div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;

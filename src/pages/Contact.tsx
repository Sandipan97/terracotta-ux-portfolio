
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github, ExternalLink, Download } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';

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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      
      setFormData({
        name: '',
        email: '',
        message: ''
      });
      
      setIsSubmitting(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-bengali-terracotta py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
              Get in Touch
            </h1>
            <p className="text-white/90 text-lg mb-8 max-w-2xl mx-auto">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
            </p>
          </div>
        </section>
        
        {/* Contact Form and Info */}
        <section className="py-16">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-gray-50 p-8 rounded-lg shadow-md">
                <h2 className="font-display text-2xl font-bold text-bengali-dark mb-6">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-bengali-dark mb-2">
                      Your Name
                    </label>
                    <Input 
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      required
                      className="border-bengali-dark/20 focus-visible:ring-bengali-terracotta"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-bengali-dark mb-2">
                      Your Email
                    </label>
                    <Input 
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      type="email"
                      placeholder="john@example.com"
                      required
                      className="border-bengali-dark/20 focus-visible:ring-bengali-terracotta"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-bengali-dark mb-2">
                      Your Message
                    </label>
                    <Textarea 
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="I'd like to discuss a project..."
                      rows={5}
                      required
                      className="border-bengali-dark/20 focus-visible:ring-bengali-terracotta"
                    />
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-bengali-red hover:bg-bengali-terracotta text-white"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="font-display text-2xl font-bold text-bengali-dark mb-6">
                  Contact Information
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-bengali-terracotta mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-bengali-dark">Email</h4>
                      <a href="mailto:contact@example.com" className="text-bengali-dark/70 hover:text-bengali-terracotta transition-colors">
                        contact@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-bengali-terracotta mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-bengali-dark">Phone</h4>
                      <a href="tel:+919876543210" className="text-bengali-dark/70 hover:text-bengali-terracotta transition-colors">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Linkedin className="h-6 w-6 text-bengali-terracotta mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-bengali-dark">LinkedIn</h4>
                      <a href="#" className="text-bengali-dark/70 hover:text-bengali-terracotta transition-colors flex items-center">
                        linkedin.com/in/yourprofile
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Github className="h-6 w-6 text-bengali-terracotta mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-bengali-dark">Behance</h4>
                      <a href="#" className="text-bengali-dark/70 hover:text-bengali-terracotta transition-colors flex items-center">
                        behance.net/yourprofile
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-bengali-dark/10">
                  <h3 className="font-medium text-bengali-dark mb-4">
                    Download My Resume
                  </h3>
                  <Button className="w-full bg-bengali-terracotta hover:bg-bengali-terracotta/90 text-white">
                    <Download className="mr-2 h-4 w-4" /> Download Resume (PDF)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Location Map */}
        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-bengali-dark mb-4">
                Location
              </h2>
              <p className="text-bengali-dark/70 max-w-2xl mx-auto">
                Based in Bangalore, India. Available for remote work and on-site projects.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto h-96 bg-gray-200 rounded-lg overflow-hidden">
              {/* Placeholder for map */}
              <div className="w-full h-full flex items-center justify-center bg-bengali-dark/5">
                <div className="text-bengali-dark/60 text-lg">
                  Interactive Map
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-bengali-mustard">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-bengali-dark mb-6">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-bengali-dark/80 max-w-2xl mx-auto mb-8">
              Whether you're looking for a UX designer for your next project, a speaker for your event, or just want to connect, I'd love to hear from you.
            </p>
            <Button size="lg" className="bg-bengali-red hover:bg-bengali-terracotta text-white">
              Schedule a Call
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default Contact;

import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, Linkedin, Github, ExternalLink, Download } from 'lucide-react';
import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
const Contact = () => {
  const {
    toast
  } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const {
      name,
      value
    } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
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
  return <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-pantone to-red-pantone-dark dark:from-red-pantone-light dark:to-red-pantone py-20">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h1 data-lovable-editable="contact-hero-title" className="font-display text-4xl md:text-5xl font-bold mb-4 text-yellow-400">
              Get in Touch
            </h1>
            <p data-lovable-editable="contact-hero-description" className="text-lg mb-8 max-w-2xl mx-auto text-orange-600 font-semibold">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision
            </p>
          </div>
        </section>
        
        {/* Contact Form and Info */}
        <section className="py-16 bg-background dark:bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-card/50 dark:bg-card/80 backdrop-blur-sm p-8 rounded-lg shadow-md border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6" data-lovable-editable="contact-form-title">
                  Send a Message
                </h2>
                
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2" data-lovable-editable="contact-form-name-label">
                      Your Name
                    </label>
                    <Input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="John Doe" required className="border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-red-pantone dark:focus-visible:ring-non-photo-blue-light" />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2" data-lovable-editable="contact-form-email-label">
                      Your Email
                    </label>
                    <Input id="email" name="email" value={formData.email} onChange={handleChange} type="email" placeholder="john@example.com" required className="border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-red-pantone dark:focus-visible:ring-non-photo-blue-light" />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2" data-lovable-editable="contact-form-message-label">
                      Your Message
                    </label>
                    <Textarea id="message" name="message" value={formData.message} onChange={handleChange} placeholder="I'd like to discuss a project..." rows={5} required className="border-border bg-background text-foreground placeholder:text-muted-foreground focus-visible:ring-red-pantone dark:focus-visible:ring-non-photo-blue-light" />
                  </div>
                  
                  <Button type="submit" disabled={isSubmitting} className="w-full bg-red-pantone hover:bg-red-pantone-dark text-white dark:bg-red-pantone-light dark:hover:bg-red-pantone shadow-lg hover:shadow-xl transition-all duration-300" data-lovable-editable="contact-form-submit-button">
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div className="bg-card/30 dark:bg-card/60 backdrop-blur-sm p-8 rounded-lg border border-border">
                <h2 className="font-display text-2xl font-bold text-foreground mb-6" data-lovable-editable="contact-info-title">
                  Contact Information
                </h2>
                
                <div className="space-y-8">
                  <div className="flex items-start">
                    <Mail className="h-6 w-6 text-red-pantone dark:text-non-photo-blue-light mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground" data-lovable-editable="contact-email-title">
                        Email
                      </h4>
                      <a href="mailto:contact@example.com" className="text-muted-foreground hover:text-red-pantone dark:hover:text-non-photo-blue-light transition-colors" data-lovable-editable="contact-email">
                        contact@example.com
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Phone className="h-6 w-6 text-red-pantone dark:text-non-photo-blue-light mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground" data-lovable-editable="contact-phone-title">
                        Phone
                      </h4>
                      <a href="tel:+919876543210" className="text-muted-foreground hover:text-red-pantone dark:hover:text-non-photo-blue-light transition-colors" data-lovable-editable="contact-phone">
                        +91 98765 43210
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Linkedin className="h-6 w-6 text-red-pantone dark:text-non-photo-blue-light mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground" data-lovable-editable="contact-linkedin-title">
                        LinkedIn
                      </h4>
                      <a href="#" className="text-muted-foreground hover:text-red-pantone dark:hover:text-non-photo-blue-light transition-colors flex items-center" data-lovable-editable="contact-linkedin-url">
                        linkedin.com/in/yourprofile
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                  
                  <div className="flex items-start">
                    <Github className="h-6 w-6 text-red-pantone dark:text-non-photo-blue-light mr-4 mt-1" />
                    <div>
                      <h4 className="font-medium text-foreground" data-lovable-editable="contact-behance-title">
                        Behance
                      </h4>
                      <a href="#" className="text-muted-foreground hover:text-red-pantone dark:hover:text-non-photo-blue-light transition-colors flex items-center" data-lovable-editable="contact-behance-url">
                        behance.net/yourprofile
                        <ExternalLink className="h-4 w-4 ml-1" />
                      </a>
                    </div>
                  </div>
                </div>
                
                <div className="mt-10 pt-8 border-t border-border">
                  <h3 className="font-medium text-foreground mb-4" data-lovable-editable="contact-resume-title">
                    Download My Resume
                  </h3>
                  <Button className="w-full bg-red-pantone hover:bg-red-pantone/90 text-white dark:bg-red-pantone-light dark:hover:bg-red-pantone shadow-lg hover:shadow-xl transition-all duration-300" data-lovable-editable="contact-resume-button">
                    <Download className="mr-2 h-4 w-4" /> 
                    Download Resume (PDF)
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Location Map */}
        <section className="py-12 bg-muted/30 dark:bg-card/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="text-center mb-10">
              <h2 className="font-display text-3xl font-bold text-foreground mb-4" data-lovable-editable="contact-location-title">
                Location
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto" data-lovable-editable="contact-location-description">
                Based in Bangalore, India. Available for remote work and on-site projects.
              </p>
            </div>
            
            <div className="max-w-5xl mx-auto h-96 bg-muted/50 dark:bg-card/50 rounded-lg overflow-hidden border border-border">
              {/* Placeholder for map */}
              <div className="w-full h-full flex items-center justify-center">
                <div className="text-muted-foreground text-lg" data-lovable-editable="contact-map-placeholder">
                  Interactive Map
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-non-photo-blue to-non-photo-blue-dark dark:from-non-photo-blue-light dark:to-non-photo-blue">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-berkeley-blue dark:text-background mb-6" data-lovable-editable="contact-cta-title">
              Let's Create Something Amazing Together
            </h2>
            <p className="text-berkeley-blue/80 dark:text-background/80 max-w-2xl mx-auto mb-8" data-lovable-editable="contact-cta-description">
              Whether you're looking for a UX designer for your next project, a speaker for your event, or just want to connect, I'd love to hear from you.
            </p>
            <Button size="lg" className="bg-red-pantone hover:bg-red-pantone-dark text-white dark:bg-red-pantone-light dark:hover:bg-red-pantone shadow-lg hover:shadow-xl transition-all duration-300" data-lovable-editable="contact-cta-button">
              Schedule a Call
            </Button>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>;
};
export default Contact;
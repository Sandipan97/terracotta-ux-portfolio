
import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin } from 'lucide-react';

const ContactPreview = () => {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-bengali-dark mb-6">
              Let's Work Together
            </h2>
            <p className="text-bengali-dark/80 mb-8">
              I'm always interested in hearing about new projects and opportunities. 
              Whether you have a question or just want to say hello, I'll do my best to get back to you!
            </p>
            
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-bengali-terracotta/10 flex items-center justify-center mr-4">
                  <Mail className="text-bengali-terracotta" size={18} />
                </div>
                <span className="text-bengali-dark">hello@uxdesigner.com</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-bengali-terracotta/10 flex items-center justify-center mr-4">
                  <Phone className="text-bengali-terracotta" size={18} />
                </div>
                <span className="text-bengali-dark">+91 98765 43210</span>
              </div>
              <div className="flex items-center">
                <div className="w-10 h-10 rounded-full bg-bengali-terracotta/10 flex items-center justify-center mr-4">
                  <MapPin className="text-bengali-terracotta" size={18} />
                </div>
                <span className="text-bengali-dark">Bangalore, India</span>
              </div>
            </div>
            
            <Button asChild className="bg-bengali-terracotta hover:bg-bengali-terracotta/90 text-white">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
          
          <div className="relative">
            <div className="aspect-square bg-white p-6 rounded-lg shadow-xl">
              <img 
                src="https://images.unsplash.com/photo-1587560699334-bea93391dcef?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Designer workspace with design tools"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <div className="absolute -top-6 -left-6 w-full h-full border-4 border-bengali-mustard rounded-lg z-0"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;

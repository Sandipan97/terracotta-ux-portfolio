
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Mail, Phone, Linkedin, Github } from 'lucide-react';
import { Link } from 'react-router-dom';

const ContactPreview = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-bengali-dark mb-4">
            Let's Connect
          </h2>
          <p className="text-bengali-dark/70 max-w-2xl mx-auto">
            Interested in working together? Reach out to discuss opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="bg-gray-50 p-8 rounded-lg">
            <h3 className="font-display text-2xl font-semibold text-bengali-dark mb-6">
              Send a Message
            </h3>
            <form className="space-y-4">
              <div>
                <Input placeholder="Your Name" className="border-bengali-dark/20 focus-visible:ring-bengali-terracotta" />
              </div>
              <div>
                <Input placeholder="Your Email" type="email" className="border-bengali-dark/20 focus-visible:ring-bengali-terracotta" />
              </div>
              <div>
                <Textarea placeholder="Your Message" rows={4} className="border-bengali-dark/20 focus-visible:ring-bengali-terracotta" />
              </div>
              <Button className="w-full bg-bengali-red hover:bg-bengali-terracotta text-white">
                Send Message
              </Button>
            </form>
          </div>

          <div>
            <h3 className="font-display text-2xl font-semibold text-bengali-dark mb-6">
              Contact Information
            </h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <Mail className="h-6 w-6 text-bengali-terracotta mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-bengali-dark">Email</h4>
                  <p className="text-bengali-dark/70">contact@example.com</p>
                </div>
              </div>
              <div className="flex items-start">
                <Phone className="h-6 w-6 text-bengali-terracotta mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-bengali-dark">Phone</h4>
                  <p className="text-bengali-dark/70">+91 98765 43210</p>
                </div>
              </div>
              <div className="flex items-start">
                <Linkedin className="h-6 w-6 text-bengali-terracotta mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-bengali-dark">LinkedIn</h4>
                  <a href="#" className="text-bengali-dark/70 hover:text-bengali-terracotta transition-colors">
                    linkedin.com/in/yourprofile
                  </a>
                </div>
              </div>
              <div className="flex items-start">
                <Github className="h-6 w-6 text-bengali-terracotta mr-4 mt-1" />
                <div>
                  <h4 className="font-medium text-bengali-dark">Behance</h4>
                  <a href="#" className="text-bengali-dark/70 hover:text-bengali-terracotta transition-colors">
                    behance.net/yourprofile
                  </a>
                </div>
              </div>
            </div>
            
            <div className="mt-8">
              <Link to="/contact">
                <Button className="w-full bg-bengali-mustard hover:bg-bengali-mustard/90 text-bengali-dark">
                  View Full Contact Details
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPreview;

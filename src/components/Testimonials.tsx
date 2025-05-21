
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { Button } from './ui/button';

type Testimonial = {
  id: number;
  name: string;
  title: string;
  company: string;
  content: string;
  rating: number;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Priya Sharma",
    title: "Product Manager",
    company: "HealthTech Innovations",
    content: "Working with a UX professional of this caliber completely transformed our product. Their research-driven approach and innovative design solutions increased our user engagement by 40% and helped us secure additional funding.",
    rating: 5
  },
  {
    id: 2,
    name: "Rajiv Mehta",
    title: "CTO",
    company: "TechSphere Solutions",
    content: "An exceptional UX designer who combines deep research skills with creative design thinking. They led the redesign of our enterprise platform, resulting in a 35% reduction in support tickets and overwhelmingly positive client feedback.",
    rating: 5
  },
  {
    id: 3,
    name: "Ananya Patel",
    title: "VP of Product",
    company: "Nexus Innovations",
    content: "A true UX leader who elevated our entire design practice. Their work on our AR application set new standards in the industry and directly contributed to winning three major client contracts.",
    rating: 5
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-20 bg-bengali-terracotta">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            Feedback from clients and colleagues I've had the pleasure to work with
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-10 relative">
            <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 bg-bengali-mustard text-bengali-dark px-6 py-2 rounded-full font-medium">
              {testimonials[activeIndex].company}
            </div>
            
            <div className="flex mb-6">
              {[...Array(testimonials[activeIndex].rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 fill-bengali-mustard text-bengali-mustard" />
              ))}
            </div>
            
            <blockquote className="mb-6 text-bengali-dark text-lg italic">
              "{testimonials[activeIndex].content}"
            </blockquote>
            
            <div className="flex items-center">
              <div className="w-12 h-12 bg-bengali-terracotta/20 rounded-full flex items-center justify-center">
                <span className="text-bengali-terracotta font-bold text-xl">
                  {testimonials[activeIndex].name.charAt(0)}
                </span>
              </div>
              <div className="ml-4">
                <div className="font-semibold text-bengali-dark">
                  {testimonials[activeIndex].name}
                </div>
                <div className="text-bengali-dark/70 text-sm">
                  {testimonials[activeIndex].title}
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-4">
            <Button 
              variant="outline" 
              size="icon"
              onClick={prevTestimonial}
              className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-bengali-terracotta"
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            
            <Button 
              variant="outline" 
              size="icon"
              onClick={nextTestimonial}
              className="bg-white/20 backdrop-blur-sm border-white text-white hover:bg-white hover:text-bengali-terracotta"
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

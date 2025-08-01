
import { useState, useEffect } from 'react';
import TestimonialCard from './testimonials/TestimonialCard';

type Testimonial = {
  id: number;
  quote: string;
  author: string;
  title: string;
  company: string;
  image: string;
};

const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Exceptional research methodology and strategic thinking. The user insights delivered directly influenced our product roadmap and increased user satisfaction by 40%. A true partner in product success.",
    author: "Sarah Johnson",
    title: "Product Director",
    company: "Welbilt Kitchen Connect",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 2,
    quote: "The design system and component library delivered has transformed our development velocity. We've reduced design-to-development time by 60% while maintaining exceptional quality.",
    author: "Michael Torres",
    title: "VP of Engineering",
    company: "PG Electronics",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  },
  {
    id: 3,
    quote: "The AR manual interface designed for our appliances exceeded all expectations. Support call volume decreased by 60% while customer satisfaction scores reached an all-time high.",
    author: "David Kim",
    title: "Head of Customer Experience",
    company: "LG Electronics",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
  }
];

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Client Impact & Recognition
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Quantified results and testimonials from senior stakeholders across Fortune 500 companies
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <TestimonialCard 
              key={testimonial.id}
              testimonial={testimonial}
              isActive={index === activeIndex}
            />
          ))}
        </div>
        
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveIndex(index)}
              className={`w-3 h-3 rounded-full mx-1 transition-colors ${
                index === activeIndex ? 'bg-primary' : 'bg-muted-foreground/50'
              }`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;

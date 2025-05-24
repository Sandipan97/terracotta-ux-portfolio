import { useState, useEffect } from 'react';
import { Card, CardContent } from './ui/card';
import { Avatar, AvatarImage, AvatarFallback } from './ui/avatar';
type Testimonial = {
  id: number;
  quote: string;
  author: string;
  title: string;
  company: string;
  image: string;
};
const testimonials: Testimonial[] = [{
  id: 1,
  quote: "One of the most thorough researchers I've worked with. The insights gathered led to product changes that increased our user satisfaction by 40%.",
  author: "Sarah Johnson",
  title: "Product Director",
  company: "Welbilt",
  image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
}, {
  id: 2,
  quote: "The design system created for our platform has transformed how we build products. Development is faster and our user experience is more consistent.",
  author: "Michael Torres",
  title: "CTO",
  company: "Kitchen Connect",
  image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
}, {
  id: 3,
  quote: "The AR interface designed for our product manual reduced support calls by 60%. An innovative solution that exceeded our expectations.",
  author: "David Kim",
  title: "Head of Customer Experience",
  company: "LG Electronics",
  image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&auto=format&fit=crop&w=256&q=80"
}];
const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(current => (current + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);
  return <section className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me
          </p>
        </div>
        
        <div className="relative max-w-4xl mx-auto">
          {testimonials.map((testimonial, index) => <div key={testimonial.id} className={`transition-opacity duration-500 ${index === activeIndex ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 right-0'}`}>
              <Card className="border-border shadow-md bg-card">
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center">
                    <Avatar className="w-20 h-20 border-4 border-background shadow-lg mb-6">
                      <AvatarImage src={testimonial.image} alt={testimonial.author} />
                      <AvatarFallback>{testimonial.author[0]}</AvatarFallback>
                    </Avatar>
                    
                    <blockquote className="text-xl italic text-foreground/90 mb-6">
                      "{testimonial.quote}"
                    </blockquote>
                    
                    <div>
                      <div className="font-medium text-foreground">
                        {testimonial.author}
                      </div>
                      <div className="text-muted-foreground">
                        {testimonial.title}, {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>)}
        </div>
        
        <div className="flex justify-center mt-6">
          {testimonials.map((_, index) => <button key={index} onClick={() => setActiveIndex(index)} className={`w-3 h-3 rounded-full mx-1 transition-colors ${index === activeIndex ? 'bg-bengali-terracotta' : 'bg-muted-foreground/50'}`} aria-label={`Go to testimonial ${index + 1}`} />)}
        </div>
      </div>
    </section>;
};
export default Testimonials;

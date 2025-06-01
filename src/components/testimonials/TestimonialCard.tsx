
import { motion } from 'framer-motion';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarImage, AvatarFallback } from '../ui/avatar';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  title: string;
  company: string;
  image: string;
}

interface TestimonialCardProps {
  testimonial: Testimonial;
  isActive: boolean;
}

const TestimonialCard = ({ testimonial, isActive }: TestimonialCardProps) => {
  return (
    <div className={`transition-opacity duration-500 ${isActive ? 'opacity-100' : 'opacity-0 absolute top-0 left-0 right-0'}`}>
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
    </div>
  );
};

export default TestimonialCard;


import { Button } from './ui/button';
import { Link } from 'react-router-dom';
import { Avatar, AvatarFallback } from './ui/avatar';
import { EditableImage } from './ui/editable-image';

const AboutPreview = () => {
  return (
    <section className="py-20 bg-background dark:bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="relative z-10">
              <Avatar className="w-64 h-64 md:w-80 md:h-80 rounded-lg shadow-xl border border-border">
                <EditableImage 
                  alt="Designer portrait" 
                  src="/lovable-uploads/c6d0389c-5302-42f4-bcd2-ed57dd41c370.jpg" 
                  className="w-full h-full object-cover rounded-lg" 
                  fallbackSrc="/placeholder.svg"
                />
                <AvatarFallback className="bg-muted text-foreground text-4xl font-bold">UX</AvatarFallback>
              </Avatar>
            </div>
            <div className="absolute top-12 -right-4 md:-right-12 z-0">
              <div className="w-24 h-24 md:w-40 md:h-40 bg-non-photo-blue dark:bg-non-photo-blue-light rounded-lg opacity-60"></div>
            </div>
            <div className="absolute -bottom-4 -left-4 md:-left-12 z-0">
              <div className="w-24 h-24 md:w-40 md:h-40 bg-red-pantone dark:bg-red-pantone-light rounded-lg opacity-60"></div>
            </div>
          </div>
          
          <div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
              About Me
            </h2>
            <p className="text-muted-foreground mb-6">
              I'm a UX Designer and Researcher with over 5 years of experience creating user-centered 
              digital products that solve real problems. My background combines formal education in design 
              from the Indian Institute of Science with practical experience working with clients across 
              multiple industries.
            </p>
            <p className="text-muted-foreground mb-8">
              I specialize in research-driven design, creating accessible interfaces, and building 
              comprehensive design systems that scale. My approach involves deep user empathy, 
              rigorous testing, and collaborative problem-solving.
            </p>
            
            <div className="grid grid-cols-2 gap-4 mb-8">
              <div>
                <div className="text-3xl font-bold text-red-pantone dark:text-red-pantone-light">
                  5+
                </div>
                <div className="text-muted-foreground">
                  Years Experience
                </div>
              </div>
              <div>
                <div className="text-3xl font-bold text-red-pantone dark:text-red-pantone-light">
                  24+
                </div>
                <div className="text-muted-foreground">
                  Projects Completed
                </div>
              </div>
            </div>
            
            <Button asChild className="bg-red-pantone hover:bg-red-pantone/90 text-white dark:bg-red-pantone-light dark:hover:bg-red-pantone shadow-lg hover:shadow-xl transition-all duration-300">
              <Link to="/about">Learn More About Me</Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

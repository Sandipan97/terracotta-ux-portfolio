
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import Skills from '@/components/Skills';
import DesignProcess from '@/components/DesignProcess';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import ResumeManager from '@/components/ResumeManager';

const About = () => {
  const experienceItems = [
    {
      period: "2020 - Present",
      title: "Senior UX Designer",
      company: "TechInnovate Solutions",
      description: "Leading user experience strategy and design for enterprise B2B applications, with a focus on healthcare and biomedical interfaces. Manage a team of 3 junior designers."
    },
    {
      period: "2018 - 2020",
      title: "UX Designer",
      company: "DesignFirst Agency",
      description: "Designed user experiences for mobile applications and websites across various industries. Conducted user research and usability testing to inform design decisions."
    },
    {
      period: "2017 - 2018",
      title: "UX/UI Designer Intern",
      company: "InnovateTech Startups",
      description: "Assisted in the design of user interfaces for early-stage startups. Collaborated with product managers and developers to implement designs."
    }
  ];

  const educationItems = [
    {
      period: "2015 - 2017",
      degree: "Master's in Design",
      school: "Indian Institute of Science (IISc)",
      description: "Specialized in Human-Computer Interaction and User Experience Design. Thesis on 'Designing Intuitive Interfaces for Complex Biomedical Systems'."
    },
    {
      period: "2011 - 2015",
      degree: "Bachelor's in Computer Science",
      school: "Indian Institute of Technology",
      description: "Focused on software development and design principles. Minor in Psychology."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-red-pantone to-red-pantone-dark dark:from-red-pantone-light dark:to-red-pantone py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div>
                <h1 
                  className="font-display text-4xl md:text-5xl font-bold text-white mb-4"
                  data-lovable-editable="about-hero-title"
                >
                  About Me
                </h1>
                <p 
                  className="text-white/90 text-lg mb-8"
                  data-lovable-editable="about-hero-description"
                >
                  A passionate UX Designer and Researcher with 5 years of experience creating impactful digital experiences
                </p>
                <div className="flex gap-4">
                  <ResumeManager isEditing={false} />
                </div>
              </div>
              <div className="flex justify-center md:justify-end">
                <div className="w-64 h-64 rounded-full overflow-hidden border-4 border-white shadow-xl">
                  <img 
                    src="/placeholder.svg" 
                    alt="Senior UX Designer and Researcher" 
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
        
        {/* Biography Section */}
        <section className="py-16 bg-background dark:bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 
                className="font-display text-3xl font-bold text-foreground mb-6"
                data-lovable-editable="about-story-title"
              >
                My Story
              </h2>
              <div className="prose prose-lg text-muted-foreground max-w-none space-y-4">
                <p data-lovable-editable="about-story-paragraph-1">
                  As a Senior UX Designer and Researcher with 5 years of industry experience, I've dedicated my career to creating intuitive, research-driven digital experiences that solve complex problems and delight users.
                </p>
                <p data-lovable-editable="about-story-paragraph-2">
                  After earning my Master's in Design from the prestigious Indian Institute of Science (IISc), where I specialized in human-computer interaction, I've worked across various domains including healthcare, enterprise solutions, and emerging technologies like AR/VR and AI-driven interfaces.
                </p>
                <p data-lovable-editable="about-story-paragraph-3">
                  My approach combines rigorous research methods with creative design thinking. I believe that great design starts with deeply understanding user needs, behaviors, and contexts. This philosophy has allowed me to create solutions that not only look beautiful but also deliver measurable business impact.
                </p>
                <p data-lovable-editable="about-story-paragraph-4">
                  I'm particularly passionate about designing for complex systems where intuitive interfaces can significantly enhance user productivity and satisfaction. My experience in biomedical design has taught me the importance of precision and clarity when lives may depend on the usability of an interface.
                </p>
                <p data-lovable-editable="about-story-paragraph-5">
                  Throughout my career, I've had the privilege of leading design teams, mentoring junior designers, and collaborating with cross-functional teams to bring innovative products to market. I thrive in collaborative environments where design is recognized as a strategic function that drives business success.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        {/* Resume Management in Edit Mode */}
        <section className="py-8 bg-muted/30 dark:bg-card/30">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h3 
                className="font-display text-2xl font-bold text-foreground mb-6"
                data-lovable-editable="about-resume-management-title"
              >
                Resume Management
              </h3>
              <div className="bg-card/50 dark:bg-card/80 backdrop-blur-sm p-6 rounded-lg shadow-md border border-border">
                <ResumeManager isEditing={true} />
              </div>
            </div>
          </div>
        </section>
        
        {/* Skills Section */}
        <Skills />
        
        {/* Design Process Section */}
        <DesignProcess />
        
        {/* Experience Section */}
        <section className="py-16 bg-muted/30 dark:bg-card/30">
          <div className="container mx-auto px-4 md:px-6">
            <h2 
              className="font-display text-3xl font-bold text-foreground mb-10 text-center"
              data-lovable-editable="about-experience-title"
            >
              Professional Experience
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-12">
                {experienceItems.map((item, index) => (
                  <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-red-pantone dark:before:bg-non-photo-blue-light before:rounded-full before:z-10 before:mt-0.5">
                    <div className="absolute left-1 top-3 h-full w-0.5 bg-red-pantone/30 dark:bg-non-photo-blue-light/30" style={{ display: index === experienceItems.length - 1 ? 'none' : 'block' }}></div>
                    <div className="bg-card/50 dark:bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border">
                      <div 
                        className="text-cerulean dark:text-cerulean-light font-medium"
                        data-lovable-editable={`about-experience-${index}-period`}
                      >
                        {item.period}
                      </div>
                      <h3 
                        className="font-display text-xl font-semibold text-foreground mt-2"
                        data-lovable-editable={`about-experience-${index}-title`}
                      >
                        {item.title}
                      </h3>
                      <div 
                        className="text-red-pantone dark:text-red-pantone-light mb-4"
                        data-lovable-editable={`about-experience-${index}-company`}
                      >
                        {item.company}
                      </div>
                      <p 
                        className="text-muted-foreground"
                        data-lovable-editable={`about-experience-${index}-description`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Education Section */}
        <section className="py-16 bg-background dark:bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <h2 
              className="font-display text-3xl font-bold text-foreground mb-10 text-center"
              data-lovable-editable="about-education-title"
            >
              Education
            </h2>
            <div className="max-w-3xl mx-auto">
              <div className="space-y-12">
                {educationItems.map((item, index) => (
                  <div key={index} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-2 before:w-2 before:h-2 before:bg-berkeley-blue dark:before:bg-berkeley-blue-light before:rounded-full before:z-10 before:mt-0.5">
                    <div className="absolute left-1 top-3 h-full w-0.5 bg-berkeley-blue/30 dark:bg-berkeley-blue-light/30" style={{ display: index === educationItems.length - 1 ? 'none' : 'block' }}></div>
                    <div className="bg-card/50 dark:bg-card/80 backdrop-blur-sm p-6 rounded-lg border border-border">
                      <div 
                        className="text-cerulean dark:text-cerulean-light font-medium"
                        data-lovable-editable={`about-education-${index}-period`}
                      >
                        {item.period}
                      </div>
                      <h3 
                        className="font-display text-xl font-semibold text-foreground mt-2"
                        data-lovable-editable={`about-education-${index}-degree`}
                      >
                        {item.degree}
                      </h3>
                      <div 
                        className="text-berkeley-blue dark:text-berkeley-blue-light mb-4"
                        data-lovable-editable={`about-education-${index}-school`}
                      >
                        {item.school}
                      </div>
                      <p 
                        className="text-muted-foreground"
                        data-lovable-editable={`about-education-${index}-description`}
                      >
                        {item.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
        
        {/* Call to Action */}
        <section className="py-16 bg-gradient-to-br from-non-photo-blue to-non-photo-blue-dark dark:from-non-photo-blue-light dark:to-non-photo-blue">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <h2 
              className="font-display text-3xl md:text-4xl font-bold text-berkeley-blue dark:text-background mb-6"
              data-lovable-editable="about-cta-title"
            >
              Ready to Work Together?
            </h2>
            <p 
              className="text-berkeley-blue/80 dark:text-background/80 max-w-2xl mx-auto mb-8"
              data-lovable-editable="about-cta-description"
            >
              I'm currently available for freelance projects, full-time opportunities, and consulting engagements.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button 
                className="bg-red-pantone hover:bg-red-pantone/90 text-white dark:bg-red-pantone-light dark:hover:bg-red-pantone shadow-lg hover:shadow-xl transition-all duration-300" 
                asChild
              >
                <a 
                  href="/contact"
                  data-lovable-editable="about-cta-contact-button"
                >
                  Get in Touch
                </a>
              </Button>
              <ResumeManager />
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default About;

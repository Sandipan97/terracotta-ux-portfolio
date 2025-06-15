
import { useState } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Skills from '@/components/Skills';
import ProjectDrawer from '@/components/ProjectDrawer';
import DesignSuite from '@/components/DesignSuite';
import DesignProcess from '@/components/DesignProcess';
import FeaturedProjects from '@/components/FeaturedProjects';
import AboutPreview from '@/components/AboutPreview';
import Testimonials from '@/components/Testimonials';
import ContactForm from '@/components/ContactForm';
import Footer from '@/components/Footer';
import PageBackground from '@/components/PageBackground';
import FloatingChatbot from '@/components/chatbot/FloatingChatbot';

const HomePage = () => {
  const [backgroundTheme, setBackgroundTheme] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-background relative">
      <PageBackground theme={backgroundTheme} />
      
      <div id="hero" className="bg-background relative z-10">
        <Navbar />
        <Hero />
      </div>
      <div id="skills" className="bg-muted/30 dark:bg-card/30 relative z-10">
        <Skills />
      </div>
      <div id="project-drawer" className="bg-background relative z-10">
        <ProjectDrawer />
      </div>
      <div id="featured-projects" className="bg-muted/30 dark:bg-card/30 relative z-10">
        <FeaturedProjects />
      </div>
      <div id="design-suite" className="bg-muted/30 dark:bg-card/30 relative z-10">
        <DesignSuite />
      </div>
      <div id="design-process" className="bg-background relative z-10">
        <DesignProcess onBackgroundChange={setBackgroundTheme} />
      </div>
      <div id="about-preview" className="bg-background relative z-10">
        <AboutPreview />
      </div>
      <div id="testimonials" className="bg-background relative z-10">
        <Testimonials />
      </div>
      <div id="contact" className="bg-muted/30 dark:bg-card/30 relative z-10">
        <ContactForm />
      </div>
      <Footer />
      
      {/* Floating Chatbot */}
      <FloatingChatbot />
    </div>
  );
};

export default HomePage;

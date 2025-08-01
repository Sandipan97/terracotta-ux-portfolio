
import { Link } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';
import { Button } from './ui/button';
import ResumeManager from './ResumeManager';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-berkeley-blue dark:bg-background text-white dark:text-foreground border-t dark:border-border">
      <div className="container mx-auto px-4 md:px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 
              className="font-display text-xl font-bold mb-4 text-white dark:text-foreground"
              data-lovable-editable="footer-portfolio-title"
            >
              Portfolio
            </h3>
            <p 
              className="text-white/70 dark:text-muted-foreground mb-4 max-w-xs"
              data-lovable-editable="footer-portfolio-description"
            >
              Senior UX Designer and Researcher with expertise in creating impactful user experiences through research and innovation.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 dark:text-muted-foreground hover:text-red-pantone dark:hover:text-red-pantone-light transition-colors">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" className="text-white/70 dark:text-muted-foreground hover:text-red-pantone dark:hover:text-red-pantone-light transition-colors">
                <span className="sr-only">Behance</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 7h-7v-2h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14h-8.027c.13 3.211 3.483 3.312 4.588 2.029h3.168zm-12.726 0h4v-10h-4v10zm1.55-15.772c.634 0 1.141.308 1.375.773.255.504.261 1.13.04 1.639-.222.506-.739.848-1.375.848-.657 0-1.195-.383-1.415-.917-.204-.51-.197-1.09.044-1.597.234-.467.743-.746 1.331-.746zm-3.207 5.772c-.029-3.018 2.341-5.726 5.568-5.726 3.474 0 5.338 2.33 5.338 5.317 0 3.297-1.989 5.803-5.543 5.803-3.449 0-5.353-2.338-5.363-5.394zm12.95 5v-10h-4v10h4z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-xl font-bold mb-4 text-white dark:text-foreground">Navigation</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-white/70 dark:text-muted-foreground hover:text-red-pantone dark:hover:text-red-pantone-light transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-white/70 dark:text-muted-foreground hover:text-red-pantone dark:hover:text-red-pantone-light transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/projects" className="text-white/70 dark:text-muted-foreground hover:text-red-pantone dark:hover:text-red-pantone-light transition-colors">
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-white/70 dark:text-muted-foreground hover:text-red-pantone dark:hover:text-red-pantone-light transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 
              className="font-display text-xl font-bold mb-4 text-white dark:text-foreground"
              data-lovable-editable="footer-contact-title"
            >
              Get in Touch
            </h3>
            <ul className="space-y-3">
              <li className="text-white/70 dark:text-muted-foreground">
                <span className="block font-medium">Email:</span>
                contact@example.com
              </li>
              <li className="text-white/70 dark:text-muted-foreground">
                <span className="block font-medium">Phone:</span>
                +91 98765 43210
              </li>
            </ul>
            <ResumeManager />
          </div>
        </div>
        
        <div className="border-t border-white/10 dark:border-border pt-8 flex flex-col md:flex-row justify-between items-center">
          <div className="text-white/50 dark:text-muted-foreground text-sm mb-4 md:mb-0">
            &copy; 2025 Senior UX Designer and Researcher. All rights reserved.
          </div>
          <Button 
            variant="outline" 
            size="icon"
            onClick={scrollToTop}
            className="border-white/30 dark:border-border text-white dark:text-foreground hover:bg-white hover:text-berkeley-blue dark:hover:bg-card dark:hover:text-foreground rounded-full"
            aria-label="Scroll to top"
          >
            <ArrowUp className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

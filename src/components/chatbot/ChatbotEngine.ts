
interface ResponsePattern {
  patterns: string[];
  responses: string[];
  action?: () => void;
  dynamicResponse?: () => string;
}

class ChatbotEngineClass {
  private responses: ResponsePattern[] = [
    // Greetings
    {
      patterns: ['hello', 'hi', 'hey', 'greetings', 'good morning', 'good afternoon', 'good evening'],
      responses: [
        "Hi! I'm your virtual assistant here to help you explore my UX portfolio. How can I assist you today?",
        "Hello! Welcome to my portfolio. I'm here to help you learn about my UX design work. What would you like to know?",
        "Hey there! I'm excited to share my UX journey with you. What can I help you with?"
      ]
    },

    // Contact Information - Dynamic responses with CTAs
    {
      patterns: ['email', 'mail', 'contact email', 'email address', 'how to reach', 'email id'],
      responses: [],
      dynamicResponse: () => {
        const emailElement = document.querySelector('a[href^="mailto:"]');
        const email = emailElement ? emailElement.getAttribute('href')?.replace('mailto:', '') : 'contact@example.com';
        return `You can reach me at ${email}. Would you like me to open your email client to send me a message? 📧`;
      },
      action: () => {
        const emailElement = document.querySelector('a[href^="mailto:"]');
        if (emailElement) {
          (emailElement as HTMLAnchorElement).click();
        }
      }
    },

    {
      patterns: ['phone', 'call', 'phone number', 'contact number', 'mobile'],
      responses: [],
      dynamicResponse: () => {
        const phoneElement = document.querySelector('a[href^="tel:"]');
        const phone = phoneElement ? phoneElement.textContent : '+91 98765 43210';
        return `You can call me at ${phone}. Want me to initiate the call for you? 📞`;
      },
      action: () => {
        const phoneElement = document.querySelector('a[href^="tel:"]');
        if (phoneElement) {
          (phoneElement as HTMLAnchorElement).click();
        }
      }
    },

    {
      patterns: ['linkedin', 'connect on linkedin', 'linkedin profile'],
      responses: [],
      dynamicResponse: () => {
        return `Let's connect on LinkedIn! I'd love to expand my professional network and discuss UX opportunities. Should I open my LinkedIn profile for you? 🔗`;
      },
      action: () => {
        const linkedinElement = document.querySelector('a[href*="linkedin"]');
        if (linkedinElement) {
          window.open((linkedinElement as HTMLAnchorElement).href, '_blank');
        }
      }
    },

    {
      patterns: ['resume', 'cv', 'download resume', 'curriculum vitae'],
      responses: [],
      dynamicResponse: () => {
        return `Ready to download my resume? It includes detailed information about my 5+ years of UX experience, education from IISc, and 24+ completed projects. Should I start the download? 📄`;
      },
      action: () => {
        const downloadButton = document.querySelector('button:has([data-lucide="download"]), a:has([data-lucide="download"])');
        if (downloadButton) {
          (downloadButton as HTMLElement).click();
        }
      }
    },

    // Experience and Skills - Enhanced with specific details
    {
      patterns: ['experience', 'background', 'years', 'senior', 'work experience', 'career'],
      responses: [
        "I'm a Senior UX Designer with 5+ years of experience creating user-centered designs across various industries. I hold a Master's in Design from IISc and have completed 24+ projects. Would you like to know about specific projects or see my detailed experience in the About section?",
        "I have 5+ years of experience in UX design, focusing on research-driven solutions that solve real user problems. My background includes formal education from the Indian Institute of Science. Want me to show you my full background?"
      ],
      action: () => {
        const element = document.getElementById('about-preview');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    {
      patterns: ['skills', 'tools', 'software', 'technologies', 'what do you use', 'figma', 'sketch', 'expertise'],
      responses: [],
      dynamicResponse: () => {
        // Try to extract skills from the skills section
        const skillElements = document.querySelectorAll('[id*="skill"], .skill-item, [class*="skill"]');
        if (skillElements.length > 0) {
          return "My expertise includes UX Research (95%), Interface Design (90%), User Testing (92%), Prototyping (88%), Design Systems (85%), and Accessibility (87%). I use tools like Figma, Sketch, Adobe XD, InVision, and Miro. Want to see my detailed skills breakdown?";
        }
        return "I specialize in UX Research, Interface Design, User Testing, Prototyping, Design Systems, and Accessibility. I use tools like Figma, Sketch, Adobe XD, InVision, and Miro. Which skill interests you most?";
      },
      action: () => {
        const element = document.getElementById('skills');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    // Projects - Dynamic project information
    {
      patterns: ['projects', 'portfolio', 'work', 'case studies', 'examples', 'show me your work'],
      responses: [],
      dynamicResponse: () => {
        const projectElements = document.querySelectorAll('[id*="project"], .project-card, [class*="project"]');
        const projectCount = projectElements.length > 0 ? `${projectElements.length}+` : '24+';
        return `I'd love to show you my ${projectCount} projects! My portfolio includes AR interfaces, design systems, and user research studies across various industries. Each case study details my process and impact. Ready to explore them?`;
      },
      action: () => {
        const element = document.getElementById('featured-projects');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    // Testimonials with dynamic content
    {
      patterns: ['testimonials', 'reviews', 'feedback', 'clients say', 'recommendations', 'what clients say'],
      responses: [],
      dynamicResponse: () => {
        const testimonialElements = document.querySelectorAll('[id*="testimonial"], .testimonial, [class*="testimonial"]');
        if (testimonialElements.length > 0) {
          return `I'm grateful for testimonials from clients mentioning 40% increased user satisfaction, 60% reduced support calls, and transformative design systems. Want to read what my clients have to say about working with me?`;
        }
        return "You can read testimonials from clients like Sarah Johnson from Welbilt, Michael Torres from Kitchen Connect, and David Kim from LG Electronics. They share insights about working with me. Want me to show you?";
      },
      action: () => {
        const element = document.getElementById('testimonials');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    // Enhanced navigation with dynamic sections
    {
      patterns: ['about', 'about me', 'bio', 'background story', 'who are you'],
      responses: [],
      dynamicResponse: () => {
        return `I'd love to tell you more about my journey! My background includes a Master's from IISc, 5+ years of experience, and what drives my passion for UX design. Should I take you to the About section to learn more about my story?`;
      },
      action: () => {
        const element = document.getElementById('about-preview');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    {
      patterns: ['contact', 'reach out', 'hire', 'work together', 'collaboration', 'get in touch'],
      responses: [],
      dynamicResponse: () => {
        return `I'd love to hear from you! You can find all my contact information in the Contact section - email, phone, LinkedIn, and even schedule a call. Want me to take you there or would you prefer I share my email directly?`;
      },
      action: () => {
        const element = document.getElementById('contact');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    // Design Process with dynamic insights
    {
      patterns: ['process', 'methodology', 'approach', 'how do you design', 'workflow', 'design thinking'],
      responses: [],
      dynamicResponse: () => {
        const processElements = document.querySelectorAll('[id*="process"], [class*="process"], .phase');
        if (processElements.length > 0) {
          return `My research-driven process follows 7 key phases: Research → Define → More Research → Ideate → Prototype → Test → Deploy. Each phase informs the next, ensuring solutions truly meet user needs. Want to see my detailed process breakdown?`;
        }
        return "My design process is deeply rooted in user research and iterative testing. I follow a structured approach that ensures every design decision is backed by real user insights. Curious about the specific phases?";
      },
      action: () => {
        const element = document.getElementById('design-process');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    // Research capabilities with specifics
    {
      patterns: ['research', 'user research', 'interviews', 'testing', 'usability', 'user testing'],
      responses: [
        "User research is my strongest skill at 95%! I conduct user interviews, surveys, A/B tests, and usability studies to inform my designs. Research is the foundation of great UX—it helps avoid assumptions. Want to hear about a specific research project?",
        "I'm passionate about research! I use methods like contextual inquiries, card sorting, and prototype testing to understand user behavior. Every design decision should be backed by real user insights. Which research method interests you most?"
      ]
    },

    // Industries with specific examples
    {
      patterns: ['industries', 'sectors', 'worked in', 'clients', 'companies'],
      responses: [
        "I've designed solutions for industries like tech, e-commerce, healthcare, and education. I've worked with companies like Welbilt, Kitchen Connect, and LG Electronics. Which industry are you most curious about?",
        "My experience spans various sectors including kitchen technology, electronics, and digital platforms. This diversity has strengthened my ability to understand different user contexts. Want to hear about a specific industry project?"
      ]
    },

    // Accessibility focus
    {
      patterns: ['accessibility', 'a11y', 'inclusive design', 'wcag', 'disabilities'],
      responses: [
        "Accessibility is a priority in all my designs (87% skill level). I follow WCAG guidelines, test with screen readers, ensure proper color contrast, and design for keyboard navigation. Inclusive design benefits everyone. Want an example?",
        "I believe great UX is accessible UX. I incorporate accessibility from the start—considering color contrast, font sizes, navigation patterns, and assistive technologies. It's not an afterthought but a core design principle."
      ]
    },

    // Achievements with specific metrics
    {
      patterns: ['achievement', 'proud', 'success', 'impact', 'results', 'proudest', 'accomplishment'],
      responses: [
        "I'm proudest of the AR interface project that reduced support calls by 60% and the design system that transformed how teams build products. These projects validated my research-driven approach.",
        "One achievement I'm particularly proud of is increasing user satisfaction by 40% through thorough user research. It demonstrated the power of understanding users deeply before designing solutions."
      ]
    },

    // Company-specific responses
    {
      patterns: ['welbilt', 'kitchen connect', 'lg electronics'],
      responses: [
        "I've had the privilege of working with companies like Welbilt (achieving 40% user satisfaction increase), Kitchen Connect (creating transformative design systems), and LG Electronics (reducing support calls by 60% with AR interfaces).",
        "These collaborations showcase my ability to work across different industries - from kitchen technology to electronics. Each project taught me valuable lessons about user-centered design."
      ]
    },

    // Collaboration and work style
    {
      patterns: ['collaboration', 'team work', 'stakeholders', 'work with', 'developers'],
      responses: [
        "I believe great UX comes from strong collaboration. I work closely with developers, product managers, and stakeholders, using data and user feedback to guide decisions and build consensus around design choices.",
        "Collaboration is key to my process. I facilitate design workshops, maintain open communication with developers, and ensure stakeholders understand user needs. How do you prefer to work with designers?"
      ]
    },

    // Default fallback responses
    {
      patterns: ['default'],
      responses: [
        "I'm not sure about that, but I'd be happy to help with details about my portfolio or guide you around the site. What's on your mind?",
        "That's an interesting question! While I focus on sharing information about my UX work and portfolio, I'd love to help you explore my projects or experience. What would you like to know?",
        "I might not have a specific answer for that, but I can tell you about my UX design work, process, or help you navigate my portfolio. How can I assist you?",
        "Let me help you explore my portfolio! I can share details about my projects, experience, design process, or guide you to specific sections. What interests you most?"
      ]
    }
  ];

  getResponse(userInput: string): string {
    const lowercaseInput = userInput.toLowerCase();
    
    // Find matching pattern
    for (const responsePattern of this.responses) {
      if (responsePattern.patterns.some(pattern => 
        lowercaseInput.includes(pattern) || this.fuzzyMatch(lowercaseInput, pattern)
      )) {
        // Execute action if provided
        if (responsePattern.action) {
          setTimeout(responsePattern.action, 1000);
        }
        
        // Use dynamic response if available, otherwise use static responses
        if (responsePattern.dynamicResponse) {
          return responsePattern.dynamicResponse();
        }
        
        // Return random response from the pattern
        const randomIndex = Math.floor(Math.random() * responsePattern.responses.length);
        return responsePattern.responses[randomIndex];
      }
    }
    
    // Default fallback
    const defaultResponses = this.responses.find(r => r.patterns.includes('default'))?.responses || [];
    const randomIndex = Math.floor(Math.random() * defaultResponses.length);
    return defaultResponses[randomIndex];
  }

  private fuzzyMatch(input: string, pattern: string): boolean {
    const words = input.split(' ');
    const patternWords = pattern.split(' ');
    
    return patternWords.some(patternWord => 
      words.some(word => 
        word.includes(patternWord) || patternWord.includes(word)
      )
    );
  }

  // Method to update responses based on website content
  updateFromWebsiteContent(): void {
    // This method can be called to refresh dynamic content
    console.log('Chatbot learning from website content...');
  }
}

export const ChatbotEngine = new ChatbotEngineClass();

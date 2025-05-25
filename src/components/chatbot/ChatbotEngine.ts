
interface ResponsePattern {
  patterns: string[];
  responses: string[];
  action?: () => void;
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

    // Experience and Skills - Updated to match portfolio
    {
      patterns: ['experience', 'background', 'years', 'senior', 'work experience', 'career'],
      responses: [
        "I'm a Senior UX Designer with 5+ years of experience creating user-centered designs across various industries. I hold a Master's in Design from IISc and have completed 24+ projects. Would you like to know about specific projects?",
        "I have 5+ years of experience in UX design, focusing on research-driven solutions that solve real user problems. My background includes formal education from the Indian Institute of Science. What aspect interests you most?"
      ]
    },

    {
      patterns: ['skills', 'tools', 'software', 'technologies', 'what do you use', 'figma', 'sketch'],
      responses: [
        "I specialize in UX Research (95%), Interface Design (90%), User Testing (92%), Prototyping (88%), Design Systems (85%), and Accessibility (87%). I use tools like Figma, Sketch, Adobe XD, InVision, and Miro. Which skill interests you?",
        "My core competencies include user research, wireframing, interaction design, and usability testing. I'm passionate about accessibility and ensure all designs meet WCAG guidelines. Want to know more about any specific skill?"
      ]
    },

    {
      patterns: ['industries', 'sectors', 'worked in', 'clients', 'companies'],
      responses: [
        "I've designed solutions for industries like tech, e-commerce, healthcare, and education. I've worked with companies like Welbilt, Kitchen Connect, and LG Electronics. Which industry are you most curious about?",
        "My experience spans various sectors including kitchen technology, electronics, and digital platforms. This diversity has strengthened my ability to understand different user contexts. Want to hear about a specific industry project?"
      ]
    },

    // Design Process - Updated to match your process
    {
      patterns: ['process', 'methodology', 'approach', 'how do you design', 'workflow', 'design thinking'],
      responses: [
        "My research-driven process follows 7 key phases: Research → Define → More Research → Ideate → Prototype → Test → Deploy. Each phase informs the next, ensuring solutions truly meet user needs. Which phase would you like me to elaborate on?",
        "I follow a user-centered design process that starts with deep user research, followed by defining problems, ideation, prototyping, and iterative testing. I believe in data-driven design decisions. Curious about a specific step?"
      ]
    },

    {
      patterns: ['research', 'user research', 'interviews', 'testing', 'usability', 'user testing'],
      responses: [
        "User research is my strongest skill at 95%! I conduct user interviews, surveys, A/B tests, and usability studies to inform my designs. Research is the foundation of great UX—it helps avoid assumptions. Want to hear about a specific research project?",
        "I'm passionate about research! I use methods like contextual inquiries, card sorting, and prototype testing to understand user behavior. Every design decision should be backed by real user insights. Which research method interests you most?"
      ]
    },

    {
      patterns: ['accessibility', 'a11y', 'inclusive design', 'wcag', 'disabilities'],
      responses: [
        "Accessibility is a priority in all my designs (87% skill level). I follow WCAG guidelines, test with screen readers, ensure proper color contrast, and design for keyboard navigation. Inclusive design benefits everyone. Want an example?",
        "I believe great UX is accessible UX. I incorporate accessibility from the start—considering color contrast, font sizes, navigation patterns, and assistive technologies. It's not an afterthought but a core design principle."
      ]
    },

    // Projects and Portfolio - Updated with real achievements
    {
      patterns: ['projects', 'portfolio', 'work', 'case studies', 'examples', 'show me your work'],
      responses: [
        "I'd love to show you my work! I've completed 24+ projects across various industries. You can explore my case studies in the projects section. Would you like me to take you there or tell you about a specific project?",
        "My portfolio showcases projects including AR interfaces, design systems, and user research studies. Each case study details my process and impact. Want to check them out?"
      ],
      action: () => {
        const element = document.getElementById('featured-projects');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    {
      patterns: ['challenging project', 'difficult', 'complex', 'hardest project', 'biggest challenge'],
      responses: [
        "One challenging project was designing an AR interface for LG Electronics' product manual, which reduced support calls by 60%. The key was balancing technical constraints with user needs through extensive testing.",
        "I worked on a complex kitchen technology platform for Welbilt where I had to understand industrial workflows. Through intensive user research, I created solutions that improved user satisfaction by 40%."
      ]
    },

    {
      patterns: ['achievement', 'proud', 'success', 'impact', 'results', 'proudest'],
      responses: [
        "I'm proudest of the AR interface project that reduced support calls by 60% and the design system that transformed how teams build products. These projects validated my research-driven approach.",
        "One achievement I'm particularly proud of is increasing user satisfaction by 40% through thorough user research. It demonstrated the power of understanding users deeply before designing solutions."
      ]
    },

    // Navigation - Updated to match your sections
    {
      patterns: ['about', 'about me', 'bio', 'background', 'resume', 'cv'],
      responses: [
        "You can learn more about my background in the About section! I'll take you there. It includes my Master's from IISc, 5+ years of experience, and what drives my passion for UX design.",
        "My full background is detailed in the About section, including my education from the Indian Institute of Science and 24+ completed projects. Want me to navigate you there?"
      ],
      action: () => {
        const element = document.getElementById('about-preview');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    {
      patterns: ['contact', 'reach out', 'hire', 'work together', 'collaboration', 'email'],
      responses: [
        "I'd love to hear from you! You can find my contact information in the Contact section. I'm always open to discussing new opportunities and collaborations.",
        "Let's connect! My contact details are in the Contact section. Whether it's about a project, consultation, or just to chat about UX, I'm here. Want me to take you there?"
      ],
      action: () => {
        const element = document.getElementById('contact');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    {
      patterns: ['testimonials', 'reviews', 'feedback', 'clients say', 'recommendations'],
      responses: [
        "You can read testimonials from clients like Sarah Johnson from Welbilt, Michael Torres from Kitchen Connect, and David Kim from LG Electronics. They share insights about working with me. Want me to show you?",
        "I'm grateful for testimonials mentioning 40% increased user satisfaction, 60% reduced support calls, and design systems that transformed development. Their feedback is in the Testimonials section."
      ],
      action: () => {
        const element = document.getElementById('testimonials');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    {
      patterns: ['skills section', 'abilities', 'what you can do', 'expertise'],
      responses: [
        "My skills section shows my expertise levels: UX Research (95%), Interface Design (90%), User Testing (92%), Prototyping (88%), Design Systems (85%), and Accessibility (87%). I'll take you there!",
        "The Skills section showcases my technical abilities across the UX spectrum. You'll see my strongest areas are research and testing. Want to explore my full capabilities?"
      ],
      action: () => {
        const element = document.getElementById('skills');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    // Collaboration and Work Style
    {
      patterns: ['collaboration', 'team work', 'stakeholders', 'work with', 'developers'],
      responses: [
        "I believe great UX comes from strong collaboration. I work closely with developers, product managers, and stakeholders, using data and user feedback to guide decisions and build consensus around design choices.",
        "Collaboration is key to my process. I facilitate design workshops, maintain open communication with developers, and ensure stakeholders understand user needs. How do you prefer to work with designers?"
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
}

export const ChatbotEngine = new ChatbotEngineClass();

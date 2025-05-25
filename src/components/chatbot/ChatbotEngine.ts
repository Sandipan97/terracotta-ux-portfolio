
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

    // Experience and Skills
    {
      patterns: ['experience', 'background', 'years', 'senior', 'work experience', 'career'],
      responses: [
        "I'm a Senior UX Designer with 5+ years of experience creating user-centered designs across various industries. I hold a Master's in Design from IISc and specialize in research, prototyping, and usability testing. Would you like to know about specific projects?",
        "I have extensive experience in UX design, focusing on research-driven solutions that solve real user problems. My background includes work in tech, e-commerce, and digital products. What aspect interests you most?"
      ]
    },

    {
      patterns: ['skills', 'tools', 'software', 'technologies', 'what do you use', 'figma', 'sketch'],
      responses: [
        "I use tools like Figma, Sketch, and Adobe XD for design, InVision for prototyping, and Miro for collaboration. I'm also skilled in user research, wireframing, interaction design, and usability testing. Which part of my workflow interests you?",
        "My toolkit includes Figma for design systems, InVision for prototypes, and various research tools for user testing. I'm passionate about accessibility and ensure all designs meet WCAG guidelines. Want to know more about any specific skill?"
      ]
    },

    {
      patterns: ['industries', 'sectors', 'worked in', 'clients', 'companies'],
      responses: [
        "I've designed solutions for industries like tech, e-commerce, healthcare, and education. Each has taught me unique ways to solve user problems and adapt to different user needs. Which industry are you most curious about?",
        "My experience spans various sectors including fintech, healthcare apps, and educational platforms. This diversity has strengthened my ability to understand different user contexts. Want to hear about a specific industry project?"
      ]
    },

    // Design Process
    {
      patterns: ['process', 'methodology', 'approach', 'how do you design', 'workflow', 'design thinking'],
      responses: [
        "My process starts with deep user research—understanding needs through interviews and surveys—followed by ideation, wireframing, prototyping, and iterative testing. I believe in data-driven design decisions. Curious about a specific step?",
        "I follow a user-centered design process: Research → Define → Ideate → Prototype → Test → Deploy. Each phase informs the next, ensuring solutions truly meet user needs. Which phase would you like me to elaborate on?"
      ]
    },

    {
      patterns: ['research', 'user research', 'interviews', 'testing', 'usability', 'user testing'],
      responses: [
        "Absolutely! I conduct user interviews, surveys, A/B tests, and usability studies to inform my designs. Research is the foundation of great UX—it helps avoid assumptions and creates solutions users actually need. Want to hear about a specific research project?",
        "User research is my passion! I use methods like contextual inquiries, card sorting, and prototype testing to understand user behavior. Every design decision should be backed by real user insights. Which research method interests you most?"
      ]
    },

    {
      patterns: ['accessibility', 'a11y', 'inclusive design', 'wcag', 'disabilities'],
      responses: [
        "Accessibility is a priority in all my designs. I follow WCAG guidelines, test with screen readers, ensure proper color contrast, and design for keyboard navigation. Inclusive design benefits everyone, not just users with disabilities. Want an example of how I've implemented this?",
        "I believe great UX is accessible UX. I incorporate accessibility from the start—considering color contrast, font sizes, navigation patterns, and assistive technologies. It's not an afterthought but a core design principle."
      ]
    },

    // Projects and Portfolio
    {
      patterns: ['projects', 'portfolio', 'work', 'case studies', 'examples', 'show me your work'],
      responses: [
        "I'd love to show you my work! You can explore my case studies in the projects section. I have examples ranging from mobile apps to complex web platforms. Would you like me to take you there or tell you about a specific project?",
        "My portfolio showcases various projects including user research studies, mobile app redesigns, and design system creation. Each case study details my process and impact. Want to check them out?"
      ],
      action: () => {
        const element = document.getElementById('featured-projects');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    {
      patterns: ['challenging project', 'difficult', 'complex', 'hardest project', 'biggest challenge'],
      responses: [
        "One of my most challenging projects was redesigning a complex healthcare app under tight deadlines. I tackled it through intensive user research and rapid prototyping, which led to a 40% improvement in task completion rates. The key was balancing user needs with clinical requirements.",
        "I once worked on a fintech app where users were abandoning the onboarding process. Through user interviews, I discovered the complexity was overwhelming. My simplified design increased completion rates by 65%. Want more details about the process?"
      ]
    },

    {
      patterns: ['achievement', 'proud', 'success', 'impact', 'results', 'proudest'],
      responses: [
        "I'm proudest of a project where I increased user engagement by 75% through a complete UX overhaul. It involved extensive research, multiple iterations, and close collaboration with developers. The success validated my research-driven approach.",
        "One achievement I'm particularly proud of is designing an accessible mobile app that won a usability award. It demonstrated that inclusive design can be both beautiful and functional. Would you like to see this project?"
      ]
    },

    // Navigation
    {
      patterns: ['about', 'about me', 'bio', 'background', 'resume', 'cv'],
      responses: [
        "You can learn more about my background and journey in the About section. I'll take you there! It includes my education, experience, and what drives my passion for UX design.",
        "My full background is detailed in the About section, including my Master's from IISc and 5+ years of experience. Want me to navigate you there?"
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
        "You can read testimonials from clients and colleagues in the Testimonials section. They share insights about working with me and the impact of my designs. Want me to show you?",
        "I'm grateful for the kind words from past clients and team members. Their testimonials are in the Testimonials section - they speak to both my design skills and collaborative approach."
      ],
      action: () => {
        const element = document.getElementById('testimonials');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }
    },

    {
      patterns: ['skills section', 'abilities', 'what you can do', 'expertise'],
      responses: [
        "My skills and expertise are detailed in the Skills section, covering everything from design tools to research methodologies. I'll take you there to explore my full capabilities!",
        "The Skills section showcases my technical abilities, design expertise, and soft skills. It's organized to give you a complete picture of what I bring to projects."
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

    {
      patterns: ['disagreement', 'conflict', 'pushback', 'stakeholder disagreement'],
      responses: [
        "I handle disagreements by leaning on user data and testing results to back up design decisions. I listen to stakeholder concerns and find solutions that balance user needs with business goals. Communication and empathy are crucial.",
        "When there's pushback, I try to understand the underlying concerns and present user research that supports my design decisions. Often, demonstrating the user impact helps align everyone around the best solution."
      ]
    },

    // Inspiration and Philosophy
    {
      patterns: ['inspiration', 'inspire', 'motivated', 'philosophy', 'design philosophy'],
      responses: [
        "I'm inspired by the potential of design to solve real problems and improve people's lives. I draw inspiration from user behavior, minimalist design principles, and innovative interfaces that prioritize clarity and usability.",
        "My design philosophy centers on empathy and simplicity. I believe the best designs are invisible—they just work. I'm inspired by solutions that make complex tasks feel effortless. What inspires your interest in UX?"
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

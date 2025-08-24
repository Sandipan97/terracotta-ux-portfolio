import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, CheckCircle, AlertTriangle, Lightbulb, BarChart3, Clock, Shield, Eye, Zap } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { EditableImage } from '@/components/ui/editable-image';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import StickyNavigation from '@/components/pg-datalogger/StickyNavigation';
import ProcessTimeline from '@/components/pg-datalogger/ProcessTimeline';
import { useEffect } from 'react';
import { imagePreloader } from '@/services/imagePreloader';

const PGDataloggerProject = () => {
  const navigate = useNavigate();

  // Preload critical images on component mount
  useEffect(() => {
    const criticalImages = [
      '/lovable-uploads/PG heroimg.webp',
      'https://sandipan97.github.io/terracotta-ux-portfolio/public/lovable-uploads/PGold.webp',
      'https://sandipan97.github.io/terracotta-ux-portfolio/public/lovable-uploads/PGnew.webp',
      'https://sandipan97.github.io/terracotta-ux-portfolio/public/lovable-uploads/pg heuristic 2.webp',
      '/lovable-uploads/b4c2ae55-67cd-4940-9279-f65e91d622c6.png'
    ];

    imagePreloader.preloadMultiple(criticalImages, { priority: 'high', eager: true });
  }, []);
  
  const navigationSections = [{
    id: 'overview',
    label: 'Overview'
  }, {
    id: 'goals',
    label: 'Goals'
  }, {
    id: 'audit',
    label: 'Audit'
  }, {
    id: 'problems',
    label: 'Problems'
  }, {
    id: 'solutions',
    label: 'Solutions'
  }, {
    id: 'design-system',
    label: 'Design System'
  }, {
    id: 'process',
    label: 'Process'
  }, {
    id: 'impact',
    label: 'Impact'
  }, {
    id: 'future',
    label: 'Future'
  }];
  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 30
    },
    animate: {
      opacity: 1,
      y: 0
    },
    transition: {
      duration: 0.6
    }
  };
  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  const problems = [{
    title: "No Clear Categorization",
    description: "Interface lacked headers and logical grouping",
    impact: "High",
    color: "destructive"
  }, {
    title: "Missing Dark Mode",
    description: "No theme toggle for different lighting conditions",
    impact: "Medium",
    color: "secondary"
  }, {
    title: "Hidden Alerts",
    description: "Critical alerts only visible via serial port",
    impact: "High",
    color: "destructive"
  }, {
    title: "Confusing Time Settings",
    description: "Multiple modes without clear guidance",
    impact: "Medium",
    color: "secondary"
  }, {
    title: "No Security Controls",
    description: "Developer options lacked password protection",
    impact: "High",
    color: "destructive"
  }, {
    title: "Scattered Alarm Settings",
    description: "Settings were unclear and poorly organized",
    impact: "Medium",
    color: "secondary"
  }];
  const solutions = [{
    title: "Logical Grouping & Headers",
    description: "Added clear navigation and organized content sections",
    icon: <BarChart3 className="w-5 h-5" />
  }, {
    title: "Dark/Light Mode Toggle",
    description: "Introduced theme switching for better accessibility",
    icon: <Eye className="w-5 h-5" />
  }, {
    title: "Visual Alert System",
    description: "Built toast notifications and visual feedback",
    icon: <AlertTriangle className="w-5 h-5" />
  }, {
    title: "Simplified Time Setting",
    description: "Clear CTAs and streamlined interaction flow",
    icon: <Clock className="w-5 h-5" />
  }, {
    title: "Password Protection",
    description: "Added security for developer and admin options",
    icon: <Shield className="w-5 h-5" />
  }, {
    title: "Grouped Alarm Settings",
    description: "Organized controls with toggles and instant feedback",
    icon: <Zap className="w-5 h-5" />
  }];
  const components = ["Login Modal", "Time/Date Picker", "Alarm Settings", "Data Capture Rate", "Buffer Size Controls", "Device Sensitivity", "Port Configuration", "Developer Options", "Format Modal", "Device Status", "Auto-reconnect Toggle"];
  const futureEnhancements = ["Role-based Access Control", "Full User Management System", "Performance Profiling", "Feature Usage Analytics", "Advanced Usability Testing"];
  const handleBack = () => {
    navigate('/projects');
  };

  return <div className="min-h-screen bg-background">
      <Navbar />
      <StickyNavigation sections={navigationSections} />
      
      {/* Hero Image Section - Optimized for Critical Loading */}
      <section id="overview" className="w-full relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <button onClick={handleBack} className="absolute top-4 left-4 z-30 inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors px-3 py-2 rounded-lg border border-border/50">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </button>

        <EditableImage 
          src="/lovable-uploads/PG heroimg.webp" 
          alt="P&G Datalogger Project Hero" 
          className="w-full h-full object-cover"
          objectFit="cover"
          objectPosition="center"
          priority="critical"
          eager={true}
          width="1920"
          height="1080"
          editableKey="pg-datalogger-hero-image"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/20 to-black/40" />
      </section>

      {/* Content Tile Section - Clean Background */}
      <section className="w-full bg-background border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <motion.div className="max-w-6xl mx-auto text-center" initial="initial" animate="animate" variants={staggerContainer}>
            <motion.div variants={fadeInUp}>
              <Badge variant="outline" className="mb-4">
                Industrial UX • P&G
              </Badge>
            </motion.div>

            <motion.h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent" variants={fadeInUp} data-lovable-editable="pg-datalogger-main-title">
              From Legacy to Modern
            </motion.h1>

            <motion.h2 className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto" variants={fadeInUp} data-lovable-editable="pg-datalogger-subtitle">
              Reimagining Industrial UX for P&G Datalogger
            </motion.h2>

            <motion.p className="text-lg text-muted-foreground mb-12 max-w-2xl mx-auto" variants={fadeInUp} data-lovable-editable="pg-datalogger-description">
              A complete redesign of the Datalogger application to enhance usability, performance, and reliability.
            </motion.p>

            <motion.div variants={fadeInUp}>
              <Button size="lg" className="text-white">
                View Full Case Study
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Project Overview - Optimized Image Loading */}
      <section className="py-12 sm:py-16 md:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-12 sm:mb-16" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{
          once: true
        }}>
            <motion.h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-6" variants={fadeInUp} data-lovable-editable="pg-datalogger-overview-title">
              Project Overview
            </motion.h2>
            <motion.div className="max-w-4xl mx-auto space-y-6 text-base sm:text-lg text-muted-foreground" variants={fadeInUp}>
              <p data-lovable-editable="pg-datalogger-overview-description-1">
                The Datalogger application is a critical tool used by P&G for device data logging and configuration.
                The legacy system had significant usability issues, lacked modern design standards, and was prone to user errors.
              </p>
              <p data-lovable-editable="pg-datalogger-overview-description-2">
                This project aimed to modernize the interface, improve accessibility, and enhance system feedback to create 
                a more reliable and user-friendly experience for industrial operators.
              </p>
            </motion.div>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 items-center">
            <motion.div initial="initial" whileInView="animate" variants={fadeInUp} viewport={{
            once: true
          }}>
              <EditableImage 
                src="https://sandipan97.github.io/terracotta-ux-portfolio/public/lovable-uploads/PGold.webp" 
                alt="Legacy P&G Datalogger interface showing unstructured layout" 
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover object-center rounded-xl shadow-lg" 
                objectFit="cover" 
                objectPosition="center"
                priority="high"
                eager={true}
                width="800"
                height="400"
                editableKey="pg-datalogger-before-image" 
              />
            </motion.div>

            <motion.div initial="initial" whileInView="animate" variants={fadeInUp} viewport={{
            once: true
          }}>
              <EditableImage 
                src="https://sandipan97.github.io/terracotta-ux-portfolio/public/lovable-uploads/PGnew.webp"  
                alt="Modern redesigned P&G Datalogger dashboard" 
                className="w-full h-[300px] sm:h-[350px] md:h-[400px] object-cover object-center rounded-xl shadow-lg" 
                objectFit="cover" 
                objectPosition="center"
                priority="high"
                eager={true}
                width="800"
                height="400"
                editableKey="pg-datalogger-after-image" 
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline */}
      <div id="process">
        <ProcessTimeline />
      </div>

      {/* UX Goals & Strategy */}
      <section id="goals" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{
          once: true
        }}>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={fadeInUp} data-lovable-editable="pg-datalogger-goals-title">
              UX Goals & Strategy
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            icon: <Zap className="w-8 h-8" />,
            title: "Performance",
            desc: "Improve power efficiency and speed"
          }, {
            icon: <Eye className="w-8 h-8" />,
            title: "Accessibility",
            desc: "Enhance user-friendliness for all users"
          }, {
            icon: <Shield className="w-8 h-8" />,
            title: "Reliability",
            desc: "Ensure stability and scalability"
          }, {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Evaluation",
            desc: "Conduct heuristic assessment"
          }, {
            icon: <Clock className="w-8 h-8" />,
            title: "Journey Mapping",
            desc: "Identify user friction points"
          }, {
            icon: <CheckCircle className="w-8 h-8" />,
            title: "Integration",
            desc: "Audit UI and hardware connection"
          }].map((goal, index) => <motion.div key={index} initial="initial" whileInView="animate" variants={fadeInUp} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <Card className="h-full text-center p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-primary mb-4 flex justify-center">
                      {goal.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{goal.title}</h3>
                    <p className="text-muted-foreground">{goal.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* UX Audit & Methodology - Optimized Heuristic Framework Image */}
      <section id="audit" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{
          once: true
        }}>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={fadeInUp} data-lovable-editable="pg-datalogger-audit-title">
              UX Audit & Methodology
            </motion.h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            <motion.div initial="initial" whileInView="animate" variants={fadeInUp} viewport={{
            once: true
          }}>
              <Card className="p-8">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl">Our Approach</CardTitle>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200">
                      Heuristic Evaluation
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {["Requirement analysis and problem identification", "Heuristic evaluation using Nielsen's principles", "UI audit for layout, interaction, and visual hierarchy", "UX audit for design standards compliance", "User journey mapping to identify friction points", "Design validation with stakeholders"].map((item, index) => <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                      <p className="text-muted-foreground">{item}</p>
                    </div>)}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" variants={fadeInUp} viewport={{
            once: true
          }}>
              <Card className="p-6">
                <CardHeader>
                  <CardTitle className="text-xl mb-4 text-center">Heuristic Analysis Framework</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full max-w-full overflow-hidden">
                    <EditableImage 
                      src="https://sandipan97.github.io/terracotta-ux-portfolio/public/lovable-uploads/pg heuristic 2.webp" 
                      className="w-full h-auto max-h-[400px] object-contain rounded-lg" 
                      objectFit="contain" 
                      objectPosition="center"
                      priority="high"
                      eager={true}
                      width="600"
                      height="400"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Problems */}
      <section id="problems" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{
          once: true
        }}>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={fadeInUp}>
              Key UX Problems Identified
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {problems.map((problem, index) => <motion.div key={index} initial="initial" whileInView="animate" variants={fadeInUp} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <Card className="h-full p-6 hover:shadow-lg transition-shadow py-0">
                  <CardHeader className="pb-4 px-0">
                    <div className="flex items-center justify-between mb-2">
                      <AlertTriangle className="w-5 h-5 text-destructive" />
                      <Badge variant={problem.color as any} className="text-xs">
                        {problem.impact} Impact
                      </Badge>
                    </div>
                    <CardTitle className="text-lg">{problem.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{problem.description}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Solutions & Redesign */}
      <section id="solutions" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{
          once: true
        }}>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={fadeInUp}>
              UX Solutions & Redesign
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {solutions.map((solution, index) => <motion.div key={index} initial="initial" whileInView="animate" variants={fadeInUp} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <Card className="h-full p-6 hover:shadow-lg transition-shadow border-primary/10 bg-blue-100 px-[12px] py-[12px]">
                  <CardContent className="pt-6">
                    <div className="text-primary mb-4">
                      {solution.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-3">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

       {/* Final UI Showcase - Optimized Final Image Loading */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{
          once: true
        }}>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={fadeInUp}>
              Final UI Showcase
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-3xl mx-auto" variants={fadeInUp}>
              A visual celebration of the final product, showcasing how the redesign aligns 
              with modern UX standards and P&G's brand identity.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div initial="initial" whileInView="animate" variants={fadeInUp} viewport={{
            once: true
          }}>
              <Card className="p-4">
                <CardHeader>
                  <CardTitle className="text-center">Light Mode</CardTitle>
                </CardHeader>
                <CardContent>
                  <EditableImage 
                    src="/lovable-uploads/b4c2ae55-67cd-4940-9279-f65e91d622c6.png" 
                    alt="Final P&G Datalogger interface in light mode" 
                    className="w-full h-[400px] object-cover rounded-lg" 
                    objectFit="cover" 
                    objectPosition="center" 
                    priority="medium"
                    width="600"
                    height="400"
                    fallbackSrc="/placeholder.svg" 
                    editableKey="pg-datalogger-final-light-mode" 
                  />
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" variants={fadeInUp} viewport={{
            once: true
          }}>
              <Card className="p-4">
                <CardHeader>
                  <CardTitle className="text-center">Dark Mode</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="w-full relative" style={{ padding: '75% 0 0 0' }}>
                    <iframe 
                      src="https://player.vimeo.com/video/1112592027?badge=0&autopause=0&player_id=0&app_id=58479&autoplay=1&muted=1&loop=1&dnt=1" 
                      frameBorder="0" 
                      allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                      referrerPolicy="strict-origin-when-cross-origin" 
                      style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                      title="PGsystem"
                      className="rounded-lg"
                    />
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Design System & Components */}
      <section id="design-system" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{
          once: true
        }}>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={fadeInUp}>
              Design System & Components
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-3xl mx-auto" variants={fadeInUp}>
              A robust design system was created in Figma with light and dark themes, 
              modular components, and responsive layouts following accessibility standards.
            </motion.p>
          </motion.div>

          {/* Custom layout: Image 65%, Component tiles 35% */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Image Section - 65% width */}
            <motion.div 
              initial="initial" 
              whileInView="animate" 
              variants={fadeInUp} 
              viewport={{once: true}}
              className="w-full lg:w-[65%]"
            >
              <Card className="p-4">
                <CardHeader>
                  <CardTitle className="text-center">P&G Research Razor 2.0 Interface</CardTitle>
                </CardHeader>
                <CardContent>
                  <EditableImage 
                    src="/lovable-uploads/5b4b6c6d-fa8a-4017-b18f-aada7eb54f5f.png" 
                    alt="P&G Research Razor 2.0 configuration interface showing the redesigned dashboard" 
                    className="w-full h-auto rounded-lg shadow-lg" 
                    objectFit="contain" 
                    objectPosition="center"
                    priority="medium"
                    width="800"
                    height="600"
                    editableKey="pg-datalogger-design-system-showcase" 
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Component Tiles - 35% width */}
            <motion.div 
              initial="initial" 
              whileInView="animate" 
              variants={fadeInUp} 
              viewport={{once: true}}
              className="w-full lg:w-[35%]"
            >
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-2 gap-3">
                {components.map((component, index) => 
                  <motion.div 
                    key={index} 
                    initial="initial" 
                    whileInView="animate" 
                    variants={fadeInUp} 
                    viewport={{once: true}} 
                    transition={{delay: index * 0.05}}
                  >
                    <Card className="p-2 text-center hover:shadow-md transition-shadow bg-blue-50 border-blue-100 hover:bg-blue-100">
                      <CardContent className="py-2 px-1">
                        <p className="text-xs font-medium leading-tight">{component}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Measurable Impact */}
      <section id="impact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{
          once: true
        }}>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={fadeInUp}>
              Measurable Impact
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[{
            metric: "60%",
            label: "Reduction in User Errors",
            icon: <CheckCircle className="w-6 h-6" />
          }, {
            metric: "85%",
            label: "Improved User Satisfaction",
            icon: <Eye className="w-6 h-6" />
          }, {
            metric: "40%",
            label: "Faster Task Completion",
            icon: <Clock className="w-6 h-6" />
          }, {
            metric: "95%",
            label: "Clearer Navigation",
            icon: <BarChart3 className="w-6 h-6" />
          }, {
            metric: "100%",
            label: "Theme Accessibility",
            icon: <Shield className="w-6 h-6" />
          }, {
            metric: "75%",
            label: "Real-time Feedback",
            icon: <Zap className="w-6 h-6" />
          }].map((impact, index) => <motion.div key={index} initial="initial" whileInView="animate" variants={fadeInUp} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <Card className="h-full p-6 text-center hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6">
                    <div className="text-primary mb-4 flex justify-center">
                      {impact.icon}
                    </div>
                    <div className="text-3xl font-bold text-primary mb-2">{impact.metric}</div>
                    <p className="text-muted-foreground font-medium">{impact.label}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Future Enhancements */}
      <section id="future" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{
          once: true
        }}>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={fadeInUp}>
              Future Enhancements
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {futureEnhancements.map((enhancement, index) => <motion.div key={index} initial="initial" whileInView="animate" variants={fadeInUp} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <Card className="p-6 hover:shadow-lg transition-shadow">
                  <CardContent className="pt-6 flex items-center gap-4">
                    <Lightbulb className="w-5 h-5 text-primary flex-shrink-0" />
                    <p className="font-medium">{enhancement}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-primary/5">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div initial="initial" whileInView="animate" variants={staggerContainer} viewport={{
          once: true
        }}>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={fadeInUp}>
              Ready to Transform Your Industrial UX?
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground mb-8" variants={fadeInUp}>
              Let's discuss how we can modernize your industrial applications with user-centered design.
            </motion.p>
            <motion.div variants={fadeInUp}>
              <Button size="lg" className="text-white">
                Get in Touch
                <ChevronRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
      
      <Footer />
    </div>;
};
export default PGDataloggerProject;

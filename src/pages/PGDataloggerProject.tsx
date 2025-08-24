import { motion } from 'framer-motion';
import { ArrowLeft, ChevronRight, CheckCircle, AlertTriangle, Lightbulb, BarChart3, Clock, Shield, Eye, Zap, Sun, Moon } from 'lucide-react';
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

  useEffect(() => {
    const criticalImages = [
      '/lovable-uploads/9a27016d-1bc4-4778-b5d1-d0c1e5ef70d6.png',
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
    id: 'impact-future',
    label: 'Impact & Future'
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
      
      {/* Hero Image Section - Updated with new image */}
      <section id="overview" className="w-full relative h-[40vh] sm:h-[50vh] md:h-[60vh] lg:h-[70vh] overflow-hidden">
        <button onClick={handleBack} className="absolute top-4 left-4 z-30 inline-flex items-center gap-2 bg-background/80 backdrop-blur-sm text-foreground hover:bg-background transition-colors px-3 py-2 rounded-lg border border-border/50">
          <ArrowLeft className="w-4 h-4" />
          Back to Projects
        </button>

        <EditableImage 
          src="/lovable-uploads/9a27016d-1bc4-4778-b5d1-d0c1e5ef70d6.png" 
          alt="P&G Research Razor 2.0 Heuristics & Revamp Project Hero" 
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
              <Badge 
                variant="outline" 
                className="mb-4 bg-gradient-to-r from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 border-blue-200 dark:border-blue-700 text-blue-800 dark:text-blue-100 hover:from-blue-100 hover:to-blue-200 dark:hover:from-blue-800 dark:hover:to-blue-700 transition-all duration-300"
              >
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
              <Button size="lg" className="text-white bg-gradient-to-r from-blue-600 to-blue-700 dark:from-blue-700 dark:to-blue-800 hover:from-blue-700 hover:to-blue-800 dark:hover:from-blue-800 dark:hover:to-blue-900 transition-all duration-300">
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

      {/* Design System & Components - Moved here from later in the page */}
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

          {/* Custom layout: Video 65%, Component tiles 35% */}
          <div className="flex flex-col lg:flex-row gap-12 items-start">
            {/* Video Section - 65% width */}
            <motion.div 
              initial="initial" 
              whileInView="animate" 
              variants={fadeInUp} 
              viewport={{once: true}}
              className="w-full lg:w-[65%]"
            >
              <div className="w-full">
                <div style={{padding:'56.25% 0 0 0',position:'relative'}}>
                  <iframe 
                    src="https://player.vimeo.com/video/1112592027?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;autoplay=1&amp;muted=1&amp;loop=1&amp;dnt=1" 
                    frameBorder="0" 
                    allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    style={{position:'absolute',top:0,left:0,width:'100%',height:'100%'}} 
                    title="PGsystem" 
                    className="rounded-xl shadow-lg"
                  />
                </div>
                <script src="https://player.vimeo.com/api/player.js"></script>
              </div>
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
                    <Card className={`p-2 text-center hover:shadow-md transition-all duration-300 hover:scale-105 border-2 ${
                      index % 3 === 0 ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600' :
                      index % 3 === 1 ? 'bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800 border-emerald-200 dark:border-emerald-700 hover:border-emerald-300 dark:hover:border-emerald-600' :
                      'bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800 border-amber-200 dark:border-amber-700 hover:border-amber-300 dark:hover:border-amber-600'
                    }`}>
                      <CardContent className="py-2 px-1">
                        <p className="text-xs font-medium leading-tight text-foreground">{component}</p>
                      </CardContent>
                    </Card>
                  </motion.div>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Process Timeline - Moved above Design Process */}
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
            desc: "Improve power efficiency and speed",
            gradient: "from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800",
            iconBg: "bg-gradient-to-br from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700",
            border: "border-amber-200 dark:border-amber-700 hover:border-amber-300 dark:hover:border-amber-600",
            textColor: "text-foreground"
          }, {
            icon: <Eye className="w-8 h-8" />,
            title: "Accessibility",
            desc: "Enhance user-friendliness for all users",
            gradient: "from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800",
            iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700",
            border: "border-emerald-200 dark:border-emerald-700 hover:border-emerald-300 dark:hover:border-emerald-600",
            textColor: "text-foreground"
          }, {
            icon: <Shield className="w-8 h-8" />,
            title: "Reliability",
            desc: "Ensure stability and scalability",
            gradient: "from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800",
            iconBg: "bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700",
            border: "border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600",
            textColor: "text-foreground"
          }, {
            icon: <BarChart3 className="w-8 h-8" />,
            title: "Evaluation",
            desc: "Conduct heuristic assessment",
            gradient: "from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800",
            iconBg: "bg-gradient-to-br from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700",
            border: "border-amber-200 dark:border-amber-700 hover:border-amber-300 dark:hover:border-amber-600",
            textColor: "text-foreground"
          }, {
            icon: <Clock className="w-8 h-8" />,
            title: "Journey Mapping",
            desc: "Identify user friction points",
            gradient: "from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800",
            iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700",
            border: "border-emerald-200 dark:border-emerald-700 hover:border-emerald-300 dark:hover:border-emerald-600",
            textColor: "text-foreground"
          }, {
            icon: <CheckCircle className="w-8 h-8" />,
            title: "Integration",
            desc: "Audit UI and hardware connection",
            gradient: "from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800",
            iconBg: "bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700",
            border: "border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600",
            textColor: "text-foreground"
          }].map((goal, index) => <motion.div key={index} initial="initial" whileInView="animate" variants={fadeInUp} viewport={{
            once: true
          }} transition={{
            delay: index * 0.1
          }}>
                <Card className={`h-full text-center p-6 hover:shadow-lg transition-all duration-300 bg-gradient-to-br ${goal.gradient} border-2 ${goal.border} hover:scale-105`}>
                  <CardContent className="pt-6">
                    <div className={`text-white mb-4 flex justify-center w-16 h-16 rounded-full mx-auto ${goal.iconBg} shadow-lg items-center`}>
                      {goal.icon}
                    </div>
                    <h3 className={`text-lg font-semibold mb-2 ${goal.textColor}`}>{goal.title}</h3>
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
              <Card className="p-8 bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800 border-2 border-emerald-200 dark:border-emerald-700 hover:border-emerald-300 dark:hover:border-emerald-600 transition-all duration-300">
                <CardHeader>
                  <div className="flex items-center justify-between mb-4">
                    <CardTitle className="text-2xl text-foreground">Our Approach</CardTitle>
                    <Badge 
                      variant="secondary" 
                      className="bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700 text-blue-800 dark:text-blue-100 border-blue-200 dark:border-blue-600 hover:from-blue-200 hover:to-blue-300 dark:hover:from-blue-700 dark:hover:to-blue-600 transition-all duration-300"
                    >
                      Heuristic Evaluation
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {["Requirement analysis and problem identification", "Heuristic evaluation using Nielsen's principles", "UI audit for layout, interaction, and visual hierarchy", "UX audit for design standards compliance", "User journey mapping to identify friction points", "Design validation with stakeholders"].map((item, index) => <div key={index} className="flex items-start gap-3">
                      <div className="w-6 h-6 rounded-full bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700 flex items-center justify-center mt-0.5 flex-shrink-0">
                        <CheckCircle className="w-4 h-4 text-white" />
                      </div>
                      <p className="text-muted-foreground">{item}</p>
                    </div>)}
                </CardContent>
              </Card>
            </motion.div>

            <motion.div initial="initial" whileInView="animate" variants={fadeInUp} viewport={{
            once: true
          }}>
              <Card className="p-6 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 border-2 border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300">
                <CardHeader>
                  <CardTitle className="text-xl mb-4 text-center text-foreground">Heuristic Analysis Framework</CardTitle>
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
                <Card className={`h-full p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 ${
                  problem.impact === 'High' 
                    ? 'bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800 border-2 border-amber-200 dark:border-amber-700 hover:border-amber-300 dark:hover:border-amber-600' 
                    : 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 border-2 border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600'
                }`}>
                  <CardHeader className="pb-4 px-0">
                    <div className="flex items-center justify-between mb-2">
                      <div className={`p-2 rounded-full ${
                        problem.impact === 'High' 
                          ? 'bg-gradient-to-br from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700' 
                          : 'bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700'
                      }`}>
                        <AlertTriangle className="w-4 h-4 text-white" />
                      </div>
                      <Badge 
                        variant={problem.color as any} 
                        className={`text-xs ${
                          problem.impact === 'High'
                            ? 'bg-gradient-to-r from-amber-100 to-amber-200 dark:from-amber-800 dark:to-amber-700 text-amber-800 dark:text-amber-100 border-amber-200 dark:border-amber-600'
                            : 'bg-gradient-to-r from-blue-100 to-blue-200 dark:from-blue-800 dark:to-blue-700 text-blue-800 dark:text-blue-100 border-blue-200 dark:border-blue-600'
                        }`}
                      >
                        {problem.impact} Impact
                      </Badge>
                    </div>
                    <CardTitle className="text-lg text-foreground">{problem.title}</CardTitle>
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
                <Card className={`h-full p-6 hover:shadow-lg transition-all duration-300 border-2 hover:scale-105 ${
                  index % 3 === 0 ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600' :
                  index % 3 === 1 ? 'bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800 border-emerald-200 dark:border-emerald-700 hover:border-emerald-300 dark:hover:border-emerald-600' :
                  'bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800 border-amber-200 dark:border-amber-700 hover:border-amber-300 dark:hover:border-amber-600'
                }`}>
                  <CardContent className="pt-6">
                    <div className={`text-white mb-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg ${
                      index % 3 === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700' :
                      index % 3 === 1 ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700' :
                      'bg-gradient-to-br from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700'
                    }`}>
                      {solution.icon}
                    </div>
                    <h3 className="text-lg font-semibold mb-3 text-foreground">{solution.title}</h3>
                    <p className="text-muted-foreground">{solution.description}</p>
                  </CardContent>
                </Card>
              </motion.div>)}
          </div>
        </div>
      </section>

       {/* Final UI Showcase - Enhanced with Day/Night Vibes */}
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

          {/* Enhanced Overlapping Images Container with Day/Night Themes */}
          <div className="relative flex justify-center items-center h-[800px] md:h-[900px] lg:h-[1000px] overflow-visible">
            {/* Light Mode Card - Day Vibe */}
            <motion.div 
              className="absolute z-10"
              style={{ left: '5%', top: '5%' }}
              initial="initial" 
              whileInView="animate" 
              variants={fadeInUp} 
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.08, 
                zIndex: 100, 
                rotateY: -8,
                x: -30,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              <Card className="p-4 w-[550px] md:w-[650px] lg:w-[750px] shadow-2xl hover:shadow-4xl transition-all duration-400 bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800 border-2 border-amber-200 dark:border-amber-700 shadow-amber-200/30 dark:shadow-amber-900/30">
                <CardHeader className="bg-gradient-to-r from-amber-100/80 to-amber-200/80 dark:from-amber-800/80 dark:to-amber-700/80 rounded-lg mb-4">
                  <CardTitle className="text-center text-xl md:text-2xl flex items-center justify-center gap-2 text-amber-800 dark:text-amber-100">
                    <Sun className="w-6 h-6 text-amber-500 dark:text-amber-400" />
                    Light Mode
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-amber-400 dark:bg-amber-300 rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-amber-500 dark:bg-amber-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1 h-1 bg-amber-300 dark:bg-amber-200 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <EditableImage 
                    src="/lovable-uploads/b4c2ae55-67cd-4940-9279-f65e91d622c6.png" 
                    alt="Final P&G Datalogger interface in light mode" 
                    className="w-full h-[450px] md:h-[550px] lg:h-[650px] object-contain rounded-lg bg-gradient-to-br from-amber-25 to-amber-25 border border-amber-100 dark:border-amber-800" 
                    objectFit="contain" 
                    objectPosition="center" 
                    priority="medium"
                    width="800"
                    height="650"
                    fallbackSrc="/placeholder.svg" 
                    editableKey="pg-datalogger-final-light-mode" 
                  />
                </CardContent>
              </Card>
            </motion.div>

            {/* Dark Mode Card - Night Vibe */}
            <motion.div 
              className="absolute z-20"
              style={{ right: '5%', top: '15%' }}
              initial="initial" 
              whileInView="animate" 
              variants={fadeInUp} 
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.08, 
                zIndex: 100, 
                rotateY: 8,
                x: 30,
                transition: { duration: 0.4, ease: "easeOut" }
              }}
            >
              <Card className="p-4 w-[550px] md:w-[650px] lg:w-[750px] shadow-2xl hover:shadow-4xl transition-all duration-400 bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 border-2 border-blue-200 dark:border-blue-700 shadow-blue-200/30 dark:shadow-blue-900/50">
                <CardHeader className="bg-gradient-to-r from-blue-100/80 to-blue-200/80 dark:from-blue-800/80 dark:to-blue-700/80 rounded-lg mb-4">
                  <CardTitle className="text-center text-xl md:text-2xl flex items-center justify-center gap-2 text-blue-800 dark:text-blue-100">
                    <Moon className="w-6 h-6 text-blue-500 dark:text-blue-300" />
                    Dark Mode
                    <div className="flex gap-1">
                      <div className="w-1 h-1 bg-blue-400 dark:bg-blue-300 rounded-full animate-pulse"></div>
                      <div className="w-1 h-1 bg-blue-500 dark:bg-blue-400 rounded-full animate-pulse" style={{ animationDelay: '0.2s' }}></div>
                      <div className="w-1 h-1 bg-blue-300 dark:bg-blue-200 rounded-full animate-pulse" style={{ animationDelay: '0.4s' }}></div>
                    </div>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <EditableImage 
                    src="/lovable-uploads/c64045fa-88c4-490f-b9e7-a1b91bc8fe65.png" 
                    alt="P&G Research Razor 2.0 interface in dark mode showing the redesigned dashboard" 
                    className="w-full h-[450px] md:h-[550px] lg:h-[650px] object-contain rounded-lg bg-gradient-to-br from-blue-25 to-blue-25 dark:from-blue-900 dark:to-blue-800 border border-blue-100 dark:border-blue-700" 
                    objectFit="contain" 
                    objectPosition="center" 
                    priority="medium"
                    width="800"
                    height="650"
                    fallbackSrc="/placeholder.svg" 
                    editableKey="pg-datalogger-final-dark-mode" 
                  />
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>
      
      {/* Combined Measurable Impact & Future Enhancements */}
      <section id="impact-future" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div className="text-center mb-16" initial="initial" whileInView="animate" variants={staggerContainer} viewport={{
          once: true
        }}>
            <motion.h2 className="text-3xl md:text-4xl font-bold mb-6" variants={fadeInUp}>
              Impact & Future Roadmap
            </motion.h2>
            <motion.p className="text-lg text-muted-foreground max-w-3xl mx-auto" variants={fadeInUp}>
              Measurable improvements achieved and planned enhancements for continued evolution.
            </motion.p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Measurable Impact - Left Side */}
            <motion.div initial="initial" whileInView="animate" variants={fadeInUp} viewport={{
            once: true
          }}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-center">Measurable Impact</h3>
              </div>
              
              <div className="grid md:grid-cols-2 gap-6">
                {[{
                metric: "60%",
                label: "Reduction in User Errors",
                icon: <CheckCircle className="w-6 h-6" />,
                gradient: "from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800",
                iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700",
                border: "border-emerald-200 dark:border-emerald-700 hover:border-emerald-300 dark:hover:border-emerald-600"
              }, {
                metric: "85%",
                label: "Improved User Satisfaction",
                icon: <Eye className="w-6 h-6" />,
                gradient: "from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800",
                iconBg: "bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700",
                border: "border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600"
              }, {
                metric: "40%",
                label: "Faster Task Completion",
                icon: <Clock className="w-6 h-6" />,
                gradient: "from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800",
                iconBg: "bg-gradient-to-br from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700",
                border: "border-amber-200 dark:border-amber-700 hover:border-amber-300 dark:hover:border-amber-600"
              }, {
                metric: "95%",
                label: "Clearer Navigation",
                icon: <BarChart3 className="w-6 h-6" />,
                gradient: "from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800",
                iconBg: "bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700",
                border: "border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600"
              }, {
                metric: "100%",
                label: "Theme Accessibility",
                icon: <Shield className="w-6 h-6" />,
                gradient: "from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800",
                iconBg: "bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700",
                border: "border-emerald-200 dark:border-emerald-700 hover:border-emerald-300 dark:hover:border-emerald-600"
              }, {
                metric: "75%",
                label: "Real-time Feedback",
                icon: <Zap className="w-6 h-6" />,
                gradient: "from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800",
                iconBg: "bg-gradient-to-br from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700",
                border: "border-amber-200 dark:border-amber-700 hover:border-amber-300 dark:hover:border-amber-600"
              }].map((impact, index) => <motion.div key={index} initial="initial" whileInView="animate" variants={fadeInUp} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }}>
                    <Card className={`h-full p-6 text-center hover:shadow-lg transition-all duration-300 hover:scale-105 bg-gradient-to-br ${impact.gradient} border-2 ${impact.border}`}>
                      <CardContent className="pt-6">
                        <div className={`text-white mb-4 flex justify-center w-12 h-12 rounded-full mx-auto ${impact.iconBg} shadow-lg items-center`}>
                          {impact.icon}
                        </div>
                        <div className="text-3xl font-bold text-primary mb-2">{impact.metric}</div>
                        <p className="text-muted-foreground font-medium">{impact.label}</p>
                      </CardContent>
                    </Card>
                  </motion.div>)}
              </div>
            </motion.div>

            {/* Future Enhancements - Right Side */}
            <motion.div initial="initial" whileInView="animate" variants={fadeInUp} viewport={{
            once: true
          }}>
              <div className="mb-8">
                <h3 className="text-2xl font-bold mb-4 text-center">Future Enhancements</h3>
              </div>
              
              <div className="grid gap-6">
                {futureEnhancements.map((enhancement, index) => <motion.div key={index} initial="initial" whileInView="animate" variants={fadeInUp} viewport={{
                once: true
              }} transition={{
                delay: index * 0.1
              }}>
                    <Card className={`p-6 hover:shadow-lg transition-all duration-300 hover:scale-105 border-2 ${
                      index % 3 === 0 ? 'bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900 dark:to-blue-800 border-blue-200 dark:border-blue-700 hover:border-blue-300 dark:hover:border-blue-600' :
                      index % 3 === 1 ? 'bg-gradient-to-br from-emerald-50 to-emerald-100 dark:from-emerald-900 dark:to-emerald-800 border-emerald-200 dark:border-emerald-700 hover:border-emerald-300 dark:hover:border-emerald-600' :
                      'bg-gradient-to-br from-amber-50 to-amber-100 dark:from-amber-900 dark:to-amber-800 border-amber-200 dark:border-amber-700 hover:border-amber-300 dark:hover:border-amber-600'
                    }`}>
                      <CardContent className="pt-6 flex items-center gap-4">
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                          index % 3 === 0 ? 'bg-gradient-to-br from-blue-500 to-blue-600 dark:from-blue-600 dark:to-blue-700' :
                          index % 3 === 1 ? 'bg-gradient-to-br from-emerald-500 to-emerald-600 dark:from-emerald-600 dark:to-emerald-700' :
                          'bg-gradient-to-br from-amber-500 to-amber-600 dark:from-amber-600 dark:to-amber-700'
                        }`}>
                          <Lightbulb className="w-5 h-5 text-white" />
                        </div>
                        <p className="font-medium text-foreground">{enhancement}</p>
                      </CardContent>
                    </Card>
                  </motion.div>)}
              </div>

              {/* Vision Statement */}
              <motion.div
                initial="initial" 
                whileInView="animate" 
                variants={fadeInUp} 
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="mt-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5 p-6 rounded-2xl border-2 border-primary/20 hover:border-primary/30 transition-all duration-300"
              >
                <h4 className="text-lg font-bold text-foreground mb-3">
                  Our Vision
                </h4>
                <p className="text-muted-foreground">
                  Transform the P&G Datalogger into a comprehensive, intelligent industrial management platform 
                  that anticipates future challenges through data-driven insights and continuous UX optimization.
                </p>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-primary/5 via-primary/10 to-primary/5">
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
              <Button size="lg" className="text-white bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 transition-all duration-300">
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

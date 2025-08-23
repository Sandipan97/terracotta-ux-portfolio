
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Users, Lightbulb, Target, Zap, CheckCircle, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { EditableImage } from '@/components/ui/editable-image';
import UniversalStickyNavigation from '@/components/ui/universal-sticky-navigation';

const FarmMonitoringProject = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  const navigationSections = [
    { id: 'hero', label: 'Hero' },
    { id: 'overview', label: 'Project Overview' },
    { id: 'empathy', label: 'Empathy & Research' },
    { id: 'problem', label: 'Problem Definition' },
    { id: 'ideation', label: 'Ideation' },
    { id: 'prioritization', label: 'Prioritization' },
    { id: 'demo', label: 'Demo' },
    { id: 'practices', label: 'Recommended Practices' },
    { id: 'outcomes', label: 'Outcomes' },
    { id: 'cta', label: 'Call to Action' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <UniversalStickyNavigation sections={navigationSections} />
      
      <main className="pt-20">
        {/* Enhanced Hero Section */}
        <section id="hero" className="w-full relative min-h-screen flex items-center justify-center overflow-hidden">
          {/* Animated Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 dark:from-green-950 dark:via-emerald-950 dark:to-teal-950"></div>
          
          {/* Animated Background Elements */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-green-500/10 filter blur-3xl" 
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3]
              }} 
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "easeInOut"
              }} 
            />
            <motion.div 
              className="absolute -bottom-40 -left-40 w-80 h-80 rounded-full bg-emerald-500/10 filter blur-3xl" 
              animate={{
                scale: [1, 1.3, 1],
                opacity: [0.2, 0.5, 0.2]
              }} 
              transition={{
                duration: 12,
                repeat: Infinity,
                ease: "easeInOut"
              }} 
            />
            <motion.div 
              className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-teal-500/5 filter blur-2xl" 
              animate={{
                x: [0, 50, 0],
                y: [0, -30, 0],
              }} 
              transition={{
                duration: 15,
                repeat: Infinity,
                ease: "easeInOut"
              }} 
            />
          </div>

          {/* Back Button */}
          <motion.div 
            className="absolute top-4 left-4 z-30"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
          >
            <Button 
              onClick={goBack}
              variant="secondary" 
              className="bg-background/80 backdrop-blur-sm border border-border/50 hover:bg-background hover:scale-105 transition-all duration-300 shadow-lg"
              size="icon"
              data-lovable-editable="back-button"
            >
              <ArrowLeft size={20} />
            </Button>
          </motion.div>

          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-6xl mx-auto"
            >
              {/* Project Type Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="mb-6"
              >
                <Badge className="bg-green-100 text-green-700 hover:bg-green-200 border-green-200 px-4 py-2 text-sm font-medium dark:bg-green-900/30 dark:text-green-300 dark:border-green-700" data-lovable-editable="hero-badge">
                  Design Thinking Workshop • UX Research
                </Badge>
              </motion.div>

              {/* Main Title */}
              <motion.h1 
                className="font-heading text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-foreground leading-tight" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                data-lovable-editable="hero-title"
              >
                Empowering Farmers Through{' '}
                <span className="bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                  Innovation
                </span>
              </motion.h1>

              {/* Subtitle */}
              <motion.p 
                className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-8 max-w-4xl mx-auto leading-relaxed" 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                data-lovable-editable="hero-subtitle"
              >
                A Design Thinking Workshop Journey: From 20+ Farmer Interviews to a Revolutionary Mobile Application
              </motion.p>

              {/* Enhanced App Showcase */}
              <motion.div 
                className="relative max-w-5xl mx-auto mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                data-lovable-editable="demo-showcase-container"
              >
                <div className="relative rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-white to-gray-50 dark:from-gray-900 dark:to-gray-800 p-4 sm:p-6 md:p-8">
                  {/* Decorative Elements */}
                  <div className="absolute top-4 left-4 flex space-x-2">
                    <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                    <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                  </div>
                  
                  {/* App Showcase Image */}
                  <EditableImage 
                    src="/lovable-uploads/f4d57f92-208a-4c6c-96e9-7b59286e0167.png"
                    alt="Farm Monitoring App Showcase - Multiple mobile screens showing dashboard, personalized crop data, and analytics"
                    className="w-full h-auto object-contain rounded-2xl"
                    priority="critical"
                    fallbackSrc="/placeholder.svg"
                  />
                  
                  {/* Floating Info Cards */}
                  <motion.div
                    className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                    animate={{ y: [-5, 5, -5] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  >
                    95% Farmer Satisfaction
                  </motion.div>
                  
                  <motion.div
                    className="absolute -bottom-4 -left-4 bg-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg"
                    animate={{ y: [5, -5, 5] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                  >
                    60% Yield Improvement
                  </motion.div>
                </div>
              </motion.div>

              {/* Action Buttons */}
              <motion.div 
                className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0 }}
              >
                <Button 
                  className="bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700 text-white shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-3 text-lg group"
                  onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
                  data-lovable-editable="hero-primary-button"
                >
                  Explore the Journey
                  <motion.div
                    className="ml-2 group-hover:translate-x-1 transition-transform duration-200"
                    animate={{ x: [0, 3, 0] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    →
                  </motion.div>
                </Button>
                
                <Button 
                  variant="outline"
                  className="border-green-300 text-green-700 hover:bg-green-50 hover:border-green-400 px-8 py-3 text-lg transition-all duration-300 dark:border-green-700 dark:text-green-300 dark:hover:bg-green-900/20"
                  onClick={() => document.getElementById('demo')?.scrollIntoView({ behavior: 'smooth' })}
                  data-lovable-editable="hero-secondary-button"
                >
                  View Live Demo
                </Button>
              </motion.div>

              {/* Stats Row */}
              <motion.div 
                className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 mt-16 max-w-3xl mx-auto"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 }}
              >
                {[
                  { number: "20+", label: "Farmer Interviews", icon: "👨‍🌾" },
                  { number: "6", label: "Month Workshop", icon: "🗓️" },
                  { number: "150+", label: "Ideas Generated", icon: "💡" },
                  { number: "4", label: "Design Phases", icon: "🎯" }
                ].map((stat, index) => (
                  <motion.div
                    key={stat.label}
                    className="text-center bg-background/60 backdrop-blur-sm rounded-2xl p-4 border border-border/50"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1.4 + index * 0.1 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                    data-lovable-editable={`hero-stat-${index}`}
                  >
                    <div className="text-2xl mb-1">{stat.icon}</div>
                    <div className="text-2xl font-bold text-green-600 dark:text-green-400">{stat.number}</div>
                    <div className="text-xs text-muted-foreground font-medium">{stat.label}</div>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Project Overview - Workshop Timeline */}
        <section id="overview" className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6" data-lovable-editable="overview-title">
                6-Month Design Thinking Workshop
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-lovable-editable="overview-description">
                From empathy interviews to prototype validation - a comprehensive journey with HCLTech
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { phase: "Empathize", duration: "4 weeks", icon: Users, color: "bg-blue-500" },
                { phase: "Define", duration: "2 weeks", icon: Target, color: "bg-green-500" },
                { phase: "Ideate", duration: "3 weeks", icon: Lightbulb, color: "bg-yellow-500" },
                { phase: "Prototype", duration: "4 weeks", icon: Zap, color: "bg-purple-500" }
              ].map((item, index) => (
                <motion.div
                  key={item.phase}
                  className="bg-card border border-border rounded-xl p-6 text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-lovable-editable={`phase-${item.phase.toLowerCase()}`}
                >
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <item.icon size={32} className="text-white" />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{item.phase}</h3>
                  <p className="text-muted-foreground">{item.duration}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Empathy & Research */}
        <section id="empathy" className="py-16 bg-green-50 dark:bg-green-950/20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6" data-lovable-editable="empathy-title">
                Deep Farmer Empathy & Research
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-lovable-editable="empathy-description">
                20+ in-depth interviews with farmers across different crop types and farm sizes
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Farmer Personas */}
              <div>
                <h3 className="text-2xl font-bold mb-6" data-lovable-editable="personas-title">Primary Personas</h3>
                <div className="space-y-6">
                  {[
                    { name: "Rajesh Kumar", type: "Small-scale Wheat Farmer", pain: "Weather unpredictability" },
                    { name: "Priya Sharma", type: "Organic Vegetable Grower", pain: "Soil health monitoring" },
                    { name: "Mohammed Ali", type: "Large-scale Cotton Farmer", pain: "Resource optimization" }
                  ].map((persona, index) => (
                    <motion.div
                      key={persona.name}
                      className="bg-card border border-border rounded-lg p-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      data-lovable-editable={`persona-${persona.name.toLowerCase().replace(' ', '-')}`}
                    >
                      <h4 className="font-semibold text-lg">{persona.name}</h4>
                      <p className="text-muted-foreground">{persona.type}</p>
                      <p className="text-sm text-red-600 dark:text-red-400 mt-2">Key Pain: {persona.pain}</p>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Empathy Map */}
              <div>
                <h3 className="text-2xl font-bold mb-6" data-lovable-editable="empathy-map-title">Empathy Map Insights</h3>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { title: "Says", content: "Weather is unpredictable", color: "bg-blue-100 dark:bg-blue-900/20" },
                    { title: "Thinks", content: "Technology is complex", color: "bg-green-100 dark:bg-green-900/20" },
                    { title: "Does", content: "Checks fields daily", color: "bg-yellow-100 dark:bg-yellow-900/20" },
                    { title: "Feels", content: "Anxious about crops", color: "bg-red-100 dark:bg-red-900/20" }
                  ].map((item) => (
                    <motion.div
                      key={item.title}
                      className={`${item.color} border border-border rounded-lg p-4`}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      viewport={{ once: true }}
                      data-lovable-editable={`empathy-${item.title.toLowerCase()}`}
                    >
                      <h4 className="font-semibold mb-2">{item.title}</h4>
                      <p className="text-sm">{item.content}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Problem Definition - Sticky Notes */}
        <section id="problem" className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6" data-lovable-editable="problem-title">
                Problem Definition Workshop
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-lovable-editable="problem-description">
                "How Might We" questions emerged from clustering 100+ insights
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                "How might we make weather data more accessible?",
                "How might we simplify soil health monitoring?",
                "How might we reduce crop loss anxiety?",
                "How might we optimize water usage?",
                "How might we connect farmers to experts?",
                "How might we make farming more predictable?"
              ].map((question, index) => (
                <motion.div
                  key={index}
                  className="bg-yellow-200 dark:bg-yellow-800/30 border-l-4 border-yellow-500 p-4 rounded-r-lg transform rotate-1 hover:rotate-0 transition-transform"
                  initial={{ opacity: 0, y: 20, rotate: Math.random() * 6 - 3 }}
                  whileInView={{ opacity: 1, y: 0, rotate: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-lovable-editable={`hmw-question-${index}`}
                >
                  <p className="font-medium text-yellow-900 dark:text-yellow-100">{question}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Ideation */}
        <section id="ideation" className="py-16 bg-purple-50 dark:bg-purple-950/20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6" data-lovable-editable="ideation-title">
                Collaborative Ideation Sessions
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-lovable-editable="ideation-description">
                150+ ideas generated through crazy 8s, sketch storms, and dot voting
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Sketch Carousel */}
              <div>
                <h3 className="text-2xl font-bold mb-6" data-lovable-editable="sketches-title">Top Concept Sketches</h3>
                <div className="space-y-4">
                  {[
                    { concept: "Weather Alert System", votes: 12 },
                    { concept: "Soil Health Dashboard", votes: 10 },
                    { concept: "Expert Chat Integration", votes: 8 },
                    { concept: "Crop Calendar Planner", votes: 7 }
                  ].map((sketch, index) => (
                    <motion.div
                      key={sketch.concept}
                      className="bg-card border border-border rounded-lg p-4 flex justify-between items-center"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      data-lovable-editable={`sketch-${sketch.concept.toLowerCase().replace(' ', '-')}`}
                    >
                      <h4 className="font-semibold">{sketch.concept}</h4>
                      <div className="flex items-center gap-2">
                        <span className="text-sm text-muted-foreground">{sketch.votes} votes</span>
                        <div className="flex">
                          {Array.from({ length: Math.min(sketch.votes, 5) }).map((_, i) => (
                            <div key={i} className="w-2 h-2 bg-purple-500 rounded-full mr-1"></div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Dot Voting Results */}
              <div>
                <h3 className="text-2xl font-bold mb-6" data-lovable-editable="voting-title">Dot Voting Results</h3>
                <div className="bg-card border border-border rounded-lg p-6">
                  <div className="space-y-4">
                    {[
                      { feature: "Real-time Weather Alerts", priority: "High", dots: 15 },
                      { feature: "Soil Moisture Tracking", priority: "High", dots: 13 },
                      { feature: "Expert Consultation", priority: "Medium", dots: 8 },
                      { feature: "Market Price Updates", priority: "Low", dots: 5 }
                    ].map((item, index) => (
                      <motion.div
                        key={item.feature}
                        className="flex justify-between items-center"
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        viewport={{ once: true }}
                        data-lovable-editable={`voting-item-${index}`}
                      >
                        <div>
                          <h4 className="font-medium">{item.feature}</h4>
                          <Badge className={`text-xs ${
                            item.priority === 'High' ? 'bg-red-100 text-red-800' : 
                            item.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' : 
                            'bg-green-100 text-green-800'
                          }`}>
                            {item.priority}
                          </Badge>
                        </div>
                        <div className="flex items-center gap-1">
                          {Array.from({ length: Math.min(item.dots, 10) }).map((_, i) => (
                            <div key={i} className="w-3 h-3 bg-purple-500 rounded-full"></div>
                          ))}
                          <span className="ml-2 text-sm text-muted-foreground">{item.dots}</span>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Prioritization */}
        <section id="prioritization" className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6" data-lovable-editable="prioritization-title">
                Feature Prioritization & Journey Mapping
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-lovable-editable="prioritization-description">
                Impact vs Effort matrix and detailed user journey mapping
              </p>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Impact vs Effort Matrix */}
              <div>
                <h3 className="text-2xl font-bold mb-6" data-lovable-editable="matrix-title">Impact vs Effort Matrix</h3>
                <div className="relative bg-card border border-border rounded-lg p-6 h-80">
                  <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm font-medium text-muted-foreground" data-lovable-editable="matrix-high-impact">
                    High Impact
                  </div>
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-medium text-muted-foreground" data-lovable-editable="matrix-low-impact">
                    Low Impact
                  </div>
                  <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-medium text-muted-foreground" data-lovable-editable="matrix-low-effort">
                    Low Effort
                  </div>
                  <div className="absolute right-2 top-1/2 transform -translate-y-1/2 rotate-90 text-sm font-medium text-muted-foreground" data-lovable-editable="matrix-high-effort">
                    High Effort
                  </div>
                  
                  {/* Features plotted on matrix */}
                  <motion.div 
                    className="absolute top-16 left-16 bg-green-500 text-white px-2 py-1 rounded text-xs"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.2 }}
                    data-lovable-editable="matrix-weather-alerts"
                  >
                    Weather Alerts
                  </motion.div>
                  <motion.div 
                    className="absolute top-20 right-20 bg-blue-500 text-white px-2 py-1 rounded text-xs"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.4 }}
                    data-lovable-editable="matrix-soil-tracking"
                  >
                    Soil Tracking
                  </motion.div>
                  <motion.div 
                    className="absolute bottom-20 left-20 bg-yellow-500 text-white px-2 py-1 rounded text-xs"
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    transition={{ delay: 0.6 }}
                    data-lovable-editable="matrix-expert-chat"
                  >
                    Expert Chat
                  </motion.div>
                </div>
              </div>

              {/* User Journey Map */}
              <div>
                <h3 className="text-2xl font-bold mb-6" data-lovable-editable="journey-title">Farmer Journey Map</h3>
                <div className="space-y-4">
                  {[
                    { phase: "Awareness", emotion: "😟", action: "Realizes crop issues" },
                    { phase: "Research", emotion: "🤔", action: "Searches for solutions" },
                    { phase: "Trial", emotion: "😊", action: "Downloads app" },
                    { phase: "Adoption", emotion: "😍", action: "Uses daily monitoring" },
                    { phase: "Advocacy", emotion: "🥳", action: "Recommends to others" }
                  ].map((step, index) => (
                    <motion.div
                      key={step.phase}
                      className="flex items-center gap-4 bg-card border border-border rounded-lg p-4"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      data-lovable-editable={`journey-${step.phase.toLowerCase()}`}
                    >
                      <div className="text-2xl">{step.emotion}</div>
                      <div>
                        <h4 className="font-semibold">{step.phase}</h4>
                        <p className="text-sm text-muted-foreground">{step.action}</p>
                      </div>
                      {index < 4 && <ArrowRight className="text-muted-foreground ml-auto" size={20} />}
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Demo Section with Correct Uploaded Images */}
        <section id="demo" className="py-16 bg-gradient-to-br from-green-600 to-emerald-600">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6" data-lovable-editable="demo-title">
                Interactive App Demo
              </h2>
              <p className="text-xl text-green-100 max-w-3xl mx-auto" data-lovable-editable="demo-subtitle">
                Experience the farmer-centered design in action
              </p>
            </motion.div>

            {/* Full-width Demo Video */}
            <motion.div 
              className="mb-12 rounded-2xl overflow-hidden shadow-2xl bg-black max-w-6xl mx-auto"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              data-lovable-editable="main-demo-video"
            >
              <div className="aspect-video bg-gradient-to-br from-green-700 to-emerald-700 flex items-center justify-center">
                <Play size={100} className="text-white" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-2xl font-semibold">Full App Walkthrough Demo</p>
                </div>
              </div>
            </motion.div>

            {/* App Screen Mockups using correct uploaded images */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                viewport={{ once: true }}
                data-lovable-editable="screen-dashboard"
              >
                <div className="bg-white rounded-2xl p-4 shadow-xl mb-4">
                  <EditableImage 
                    src="/lovable-uploads/92daa44f-f4d1-472d-8910-22e82bf8b3b3.png"
                    alt="Dashboard Screen"
                    className="w-full h-auto object-contain rounded-lg"
                    fallbackSrc="/placeholder.svg"
                  />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Real-time Dashboard</h3>
                <p className="text-green-100 text-sm">Monitor all farm metrics in one place</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                data-lovable-editable="screen-personalized"
              >
                <div className="bg-white rounded-2xl p-4 shadow-xl mb-4">
                  <EditableImage 
                    src="/lovable-uploads/50eedb00-deb6-4ad4-9d4a-a664044ae725.png"
                    alt="Personalized for your crop"
                    className="w-full h-auto object-contain rounded-lg"
                    fallbackSrc="/placeholder.svg"
                  />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Personalized for Your Crop</h3>
                <p className="text-green-100 text-sm">Tailored insights for your specific farming needs</p>
              </motion.div>

              <motion.div
                className="text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                viewport={{ once: true }}
                data-lovable-editable="screen-analytics"
              >
                <div className="bg-white rounded-2xl p-4 shadow-xl mb-4">
                  <EditableImage 
                    src="/lovable-uploads/13fd507a-045d-444e-8db5-b79ac6d8b548.png"
                    alt="Accurate location & Analytics"
                    className="w-full h-auto object-contain rounded-lg"
                    fallbackSrc="/placeholder.svg"
                  />
                </div>
                <h3 className="text-white font-semibold text-lg mb-2">Accurate Location & Analytics</h3>
                <p className="text-green-100 text-sm">Precise field mapping and data analytics</p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Recommended Practices */}
        <section id="practices" className="py-16 bg-green-50 dark:bg-green-950/20">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6" data-lovable-editable="practices-title">
                Integrated Farming Practices
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-lovable-editable="practices-description">
                Technology-enhanced traditional and organic farming methods
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Vermicomposting Integration",
                  description: "Smart monitoring of earthworm composting with temperature and moisture sensors",
                  icon: "🪱"
                },
                {
                  title: "Natural Fertilizer Tracking",
                  description: "App-guided organic fertilizer schedules based on soil nutrient analysis",
                  icon: "🌱"
                },
                {
                  title: "Water Conservation Methods",
                  description: "IoT-enabled drip irrigation with real-time soil moisture monitoring",
                  icon: "💧"
                },
                {
                  title: "Companion Planting Guide",
                  description: "AI-recommended plant combinations for natural pest control",
                  icon: "🌿"
                },
                {
                  title: "Expert Network Access",
                  description: "Direct connection to agricultural specialists and extension officers",
                  icon: "👨‍🌾"
                },
                {
                  title: "Community Knowledge Hub",
                  description: "Local farmer networks sharing region-specific best practices",
                  icon: "🤝"
                }
              ].map((practice, index) => (
                <motion.div
                  key={practice.title}
                  className="bg-card border border-border rounded-xl p-6"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-lovable-editable={`practice-${practice.title.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="text-4xl mb-4">{practice.icon}</div>
                  <h3 className="font-semibold text-lg mb-3">{practice.title}</h3>
                  <p className="text-muted-foreground">{practice.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes */}
        <section id="outcomes" className="py-16 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-foreground mb-6" data-lovable-editable="outcomes-title">
                Workshop Impact & Results
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto" data-lovable-editable="outcomes-description">
                Measurable outcomes from our design thinking approach
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { metric: "95%", label: "Farmer Satisfaction", icon: "😀" },
                { metric: "80%", label: "Daily App Usage", icon: "📱" },
                { metric: "60%", label: "Crop Yield Improvement", icon: "🌾" },
                { metric: "40%", label: "Water Usage Reduction", icon: "💧" }
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  className="text-center bg-card border border-border rounded-xl p-6"
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  data-lovable-editable={`outcome-${stat.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="text-4xl mb-2">{stat.icon}</div>
                  <div className="text-3xl font-bold text-green-600 mb-2">{stat.metric}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Workshop Feedback */}
            <motion.div
              className="bg-green-100 dark:bg-green-900/20 rounded-2xl p-8 text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              data-lovable-editable="workshop-feedback"
            >
              <blockquote className="text-xl italic text-green-800 dark:text-green-200 mb-4">
                "The design thinking workshop completely transformed how we approach farmer needs. The deep empathy work revealed insights we never would have discovered through surveys alone."
              </blockquote>
              <cite className="text-green-700 dark:text-green-300 font-semibold">
                - Product Manager, HCLTech Agricultural Division
              </cite>
            </motion.div>
          </div>
        </section>

        {/* Call to Action */}
        <section id="cta" className="py-16 bg-gradient-to-br from-green-600 to-emerald-600">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-4xl md:text-5xl font-bold text-white mb-6" data-lovable-editable="cta-title">
                Ready for Agricultural Co-creation?
              </h2>
              <p className="text-xl text-green-100 mb-8 max-w-3xl mx-auto" data-lovable-editable="cta-description">
                Let's design farmer-centered solutions together through collaborative workshops and deep empathy research
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  className="bg-white text-green-600 hover:bg-green-50 hover:text-green-700 px-8 py-3 text-lg"
                  onClick={() => navigate('/contact')}
                  data-lovable-editable="cta-primary-button"
                >
                  Start a Design Workshop
                </Button>
                <Button 
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-3 text-lg"
                  onClick={() => navigate('/projects')}
                  data-lovable-editable="cta-secondary-button"
                >
                  View More AgTech Projects
                </Button>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FarmMonitoringProject;

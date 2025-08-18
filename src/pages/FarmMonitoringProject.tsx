
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Download, Users, Droplets, Sun, Wrench, ChevronDown, ExternalLink, CheckCircle, Target, Search, Lightbulb, Clock, MapPin, Smartphone, BarChart3, TrendingUp, Heart, Brain, Eye, MessageCircle, Zap, Leaf, Sprout, TreePine, Flower2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { EditableImage } from '@/components/ui/editable-image';
import { useNavigate } from 'react-router-dom';

const FarmMonitoringProject = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Button 
            variant="ghost" 
            onClick={() => navigate('/')}
            className="flex items-center gap-2"
            data-lovable-editable="back-button"
          >
            <ArrowLeft size={20} />
            <span data-lovable-editable="back-button-text">Back to Home</span>
          </Button>
          <div className="flex items-center gap-4">
            <Badge variant="secondary" data-lovable-editable="project-type-badge">
              Design Thinking Workshop
            </Badge>
          </div>
        </div>
      </nav>

      {/* Section 1: Hero - Empowering Farmers Through Innovation */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
        {/* Animated Nature Elements */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full flex items-center justify-center"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut"
            }}
          >
            <Leaf className="w-10 h-10 text-white" />
          </motion.div>
          <motion.div 
            className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center"
            animate={{ 
              scale: [1, 1.3, 1],
              opacity: [0.2, 0.5, 0.2]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 5,
              ease: "easeInOut",
              delay: 1
            }}
          >
            <Droplets className="w-8 h-8 text-white" />
          </motion.div>
          <motion.div 
            className="absolute bottom-20 left-1/3 w-12 h-12 bg-yellow-500 rounded-full flex items-center justify-center"
            animate={{ 
              scale: [1, 1.4, 1],
              opacity: [0.4, 0.7, 0.4]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 3,
              ease: "easeInOut",
              delay: 2
            }}
          >
            <Sun className="w-6 h-6 text-white" />
          </motion.div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 
                className="text-4xl md:text-6xl font-bold text-foreground mb-6"
                data-lovable-editable="hero-title"
              >
                Empowering Farmers Through Innovation
              </h1>
              <p 
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                data-lovable-editable="hero-description"
              >
                A comprehensive design thinking workshop where we collaborated with 20+ small-scale farmers to create technology solutions that optimize crop yields and promote sustainable farming practices.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="outline" className="px-4 py-2 bg-green-100 text-green-800" data-lovable-editable="workshop-badge">
                  <Clock className="w-4 h-4 mr-2" />
                  6-Week Workshop Sprint
                </Badge>
                <Badge variant="outline" className="px-4 py-2 bg-blue-100 text-blue-800" data-lovable-editable="participants-badge">
                  <Users className="w-4 h-4 mr-2" />
                  24 Farmer Participants
                </Badge>
                <Badge variant="outline" className="px-4 py-2 bg-purple-100 text-purple-800" data-lovable-editable="interviews-badge">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  20+ In-depth Interviews
                </Badge>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="bg-white rounded-2xl shadow-2xl p-8 border border-border">
                <div className="aspect-video bg-gradient-to-br from-green-100 to-blue-100 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 opacity-10"
                  >
                    <div className="w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-green-400 via-blue-400 to-yellow-400"></div>
                  </motion.div>
                  <motion.div
                    animate={{ scale: [1, 1.1, 1] }}
                    transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                    className="relative z-10 cursor-pointer"
                    data-lovable-editable="demo-video-play-icon"
                  >
                    <Play className="w-16 h-16 text-green-600" />
                  </motion.div>
                </div>
                <h3 
                  className="text-xl font-semibold text-foreground mb-2"
                  data-lovable-editable="demo-video-title"
                >
                  Workshop Journey Documentary
                </h3>
                <p 
                  className="text-muted-foreground mb-4"
                  data-lovable-editable="demo-video-description"
                >
                  Watch how farmers and designers collaborated to create breakthrough agricultural solutions
                </p>
                <Button className="w-full bg-green-600 hover:bg-green-700" data-lovable-editable="watch-workshop-button">
                  <Play className="w-4 h-4 mr-2" />
                  <span data-lovable-editable="watch-workshop-text">Watch Workshop Journey</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Section 2: Project Overview - Workshop Timeline */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              data-lovable-editable="timeline-section-title"
            >
              Design Thinking Workshop Timeline
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-lovable-editable="timeline-section-description"
            >
              Our structured 6-week approach to understanding farmer challenges and co-creating technology solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { 
                weeks: "Week 1-2", 
                phase: "Empathize & Research", 
                icon: Heart, 
                color: "bg-red-500",
                activities: "Field visits, interviews, empathy mapping"
              },
              { 
                weeks: "Week 3-4", 
                phase: "Define & Ideate", 
                icon: Brain, 
                color: "bg-blue-500",
                activities: "Problem definition, HMW questions, brainstorming"
              },
              { 
                weeks: "Week 5-6", 
                phase: "Prototype & Test", 
                icon: Zap, 
                color: "bg-green-500",
                activities: "App mockups, farmer testing, iteration"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-green-200">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 
                    className="text-lg font-semibold text-foreground mb-2"
                    data-lovable-editable={`timeline-phase-${index}-weeks`}
                  >
                    {item.weeks}
                  </h3>
                  <p 
                    className="text-xl font-bold text-foreground mb-3"
                    data-lovable-editable={`timeline-phase-${index}-title`}
                  >
                    {item.phase}
                  </p>
                  <p 
                    className="text-sm text-muted-foreground"
                    data-lovable-editable={`timeline-phase-${index}-activities`}
                  >
                    {item.activities}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 3: Empathy & Research - Enhanced Personas */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-blue-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              data-lovable-editable="empathy-section-title"
            >
              Farmer Personas & Empathy Maps
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-lovable-editable="empathy-section-description"
            >
              Deep insights from 20+ farmer interviews across different crop types and farm sizes
            </p>
          </motion.div>

          {/* Farmer Personas */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Maria Santos",
                age: "45",
                role: "Organic Vegetable Farmer",
                location: "Rural Philippines",
                cropType: "Tomatoes, Peppers, Leafy Greens",
                farmSize: "2 hectares",
                quote: "I want to know the exact moment my soil needs water, not guess",
                painPoints: "Unpredictable weather, water scarcity, pest management",
                goals: "Increase yield by 30%, reduce water usage, organic certification"
              },
              {
                name: "James Ochieng",
                age: "38",
                role: "Smallholder Grain Farmer",
                location: "Central Kenya",
                cropType: "Maize, Beans, Sorghum",
                farmSize: "1.5 hectares",
                quote: "Technology should help me feed my family and community better",
                painPoints: "Drought cycles, soil fertility, market access",
                goals: "Weather-resistant crops, better soil health, fair prices"
              },
              {
                name: "Ana Rodriguez",
                age: "52",
                role: "Herb & Medicinal Plant Grower",
                location: "Guatemala Highlands",
                cropType: "Basil, Cilantro, Traditional Herbs",
                farmSize: "0.8 hectares",
                quote: "Simple tools that work without internet are what we need",
                painPoints: "Limited connectivity, complex interfaces, high costs",
                goals: "Preserve traditional knowledge, increase income, teach youth"
              }
            ].map((persona, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300 h-full">
                  <div className="w-24 h-24 bg-gradient-to-br from-green-100 to-blue-100 rounded-full mx-auto mb-4 overflow-hidden flex items-center justify-center">
                    <Users className="w-12 h-12 text-green-600" data-lovable-editable={`persona-${index}-avatar`} />
                  </div>
                  <h3 
                    className="text-xl font-bold text-foreground mb-2 text-center"
                    data-lovable-editable={`persona-${index}-name`}
                  >
                    {persona.name}, {persona.age}
                  </h3>
                  <p 
                    className="text-sm font-medium text-green-700 mb-1 text-center"
                    data-lovable-editable={`persona-${index}-role`}
                  >
                    {persona.role}
                  </p>
                  <p 
                    className="text-sm text-muted-foreground mb-4 text-center"
                    data-lovable-editable={`persona-${index}-location`}
                  >
                    📍 {persona.location}
                  </p>
                  
                  <div className="space-y-3 text-sm">
                    <div>
                      <span className="font-medium text-foreground" data-lovable-editable={`persona-${index}-crops-label`}>Crops:</span>
                      <p className="text-muted-foreground" data-lovable-editable={`persona-${index}-crops`}>{persona.cropType}</p>
                    </div>
                    <div>
                      <span className="font-medium text-foreground" data-lovable-editable={`persona-${index}-size-label`}>Farm Size:</span>
                      <p className="text-muted-foreground" data-lovable-editable={`persona-${index}-size`}>{persona.farmSize}</p>
                    </div>
                  </div>

                  <blockquote 
                    className="text-sm italic text-green-800 mt-4 p-3 bg-green-50 rounded-lg border-l-4 border-green-400"
                    data-lovable-editable={`persona-${index}-quote`}
                  >
                    "{persona.quote}"
                  </blockquote>

                  <div className="mt-4 space-y-2">
                    <h4 className="font-medium text-red-700" data-lovable-editable={`persona-${index}-pain-label`}>Pain Points:</h4>
                    <p className="text-xs text-red-600" data-lovable-editable={`persona-${index}-pain-points`}>{persona.painPoints}</p>
                    
                    <h4 className="font-medium text-green-700" data-lovable-editable={`persona-${index}-goals-label`}>Goals:</h4>
                    <p className="text-xs text-green-600" data-lovable-editable={`persona-${index}-goals`}>{persona.goals}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Problem Definition - Sticky Notes & HMW Questions */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              data-lovable-editable="problem-definition-title"
            >
              Problem Definition Workshop
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-lovable-editable="problem-definition-description"
            >
              Synthesizing insights into "How Might We" questions through collaborative sticky note sessions
            </p>
          </motion.div>

          {/* Sticky Notes Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {[
              {
                category: "Information Access",
                hmw: "How might we provide real-time environmental data to farmers without reliable internet?",
                color: "bg-yellow-100 border-yellow-300 text-yellow-900",
                icon: "📊"
              },
              {
                category: "Technology Adoption",
                hmw: "How might we design interfaces that work for farmers with varying literacy levels?",
                color: "bg-blue-100 border-blue-300 text-blue-900",
                icon: "📱"
              },
              {
                category: "Resource Management",
                hmw: "How might we help farmers optimize water and fertilizer usage based on soil conditions?",
                color: "bg-green-100 border-green-300 text-green-900",
                icon: "💧"
              },
              {
                category: "Community Support",
                hmw: "How might we connect farmers to share knowledge and resources within their communities?",
                color: "bg-purple-100 border-purple-300 text-purple-900",
                icon: "🤝"
              },
              {
                category: "Weather Resilience",
                hmw: "How might we help farmers prepare for and adapt to climate change impacts?",
                color: "bg-orange-100 border-orange-300 text-orange-900",
                icon: "🌤️"
              },
              {
                category: "Market Access",
                hmw: "How might we provide farmers with fair pricing information and direct market connections?",
                color: "bg-red-100 border-red-300 text-red-900",
                icon: "💰"
              },
              {
                category: "Knowledge Transfer",
                hmw: "How might we preserve traditional farming wisdom while introducing modern techniques?",
                color: "bg-indigo-100 border-indigo-300 text-indigo-900",
                icon: "📚"
              },
              {
                category: "Crop Health",
                hmw: "How might we enable early detection of plant diseases and pest infestations?",
                color: "bg-teal-100 border-teal-300 text-teal-900",
                icon: "🌱"
              }
            ].map((sticky, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: Math.random() * 10 - 5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ 
                  rotate: Math.random() * 6 - 3, 
                  scale: 1.05,
                  transition: { duration: 0.2 }
                }}
                className={`p-4 rounded-lg border-2 ${sticky.color} shadow-lg cursor-pointer transform`}
                data-lovable-editable={`hmw-sticky-${index}`}
              >
                <div className="text-2xl mb-2" data-lovable-editable={`hmw-sticky-${index}-icon`}>{sticky.icon}</div>
                <h3 
                  className="font-bold text-sm mb-2"
                  data-lovable-editable={`hmw-sticky-${index}-category`}
                >
                  {sticky.category}
                </h3>
                <p 
                  className="text-xs leading-relaxed"
                  data-lovable-editable={`hmw-sticky-${index}-question`}
                >
                  {sticky.hmw}
                </p>
              </motion.div>
            ))}
          </div>

          {/* Problem Statement */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 text-center"
          >
            <h3 
              className="text-2xl font-bold text-foreground mb-4"
              data-lovable-editable="final-problem-statement-title"
            >
              Final Problem Statement
            </h3>
            <p 
              className="text-lg text-muted-foreground italic max-w-4xl mx-auto leading-relaxed"
              data-lovable-editable="final-problem-statement"
            >
              "Small-scale farmers need accessible, offline-capable technology that provides actionable insights about soil health, weather patterns, and crop management while respecting traditional farming knowledge and fostering community connections."
            </p>
          </motion.div>
        </div>
      </section>

      {/* Section 5: Ideation - Sketch Carousels & Dot Voting */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              data-lovable-editable="ideation-title"
            >
              Collaborative Ideation Sessions
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-lovable-editable="ideation-description"
            >
              Farmers and designers working together to sketch solutions and vote on the most promising concepts
            </p>
          </motion.div>

          {/* Sketch Carousel */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 
              className="text-2xl font-bold text-foreground mb-6 text-center"
              data-lovable-editable="sketch-carousel-title"
            >
              Concept Sketches from Workshop
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { 
                  title: "Mobile Dashboard Concept", 
                  votes: 23,
                  description: "Simple, icon-based interface for soil and weather data"
                },
                { 
                  title: "Community Knowledge Hub", 
                  votes: 31,
                  description: "Platform for farmers to share techniques and ask questions"
                },
                { 
                  title: "Sensor Integration Flow", 
                  votes: 18,
                  description: "How IoT sensors connect to the mobile app ecosystem"
                }
              ].map((sketch, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center border-2 border-dashed border-gray-300 hover:border-green-400 transition-colors">
                    <div 
                      className="text-gray-400 text-center p-4"
                      data-lovable-editable={`sketch-${index}-placeholder`}
                    >
                      <Wrench className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm font-medium">Concept Sketch</p>
                      <p className="text-xs mt-1">Hand-drawn wireframe</p>
                    </div>
                  </div>
                  <h4 
                    className="font-semibold text-foreground mb-2"
                    data-lovable-editable={`sketch-${index}-title`}
                  >
                    {sketch.title}
                  </h4>
                  <p 
                    className="text-sm text-muted-foreground mb-3"
                    data-lovable-editable={`sketch-${index}-description`}
                  >
                    {sketch.description}
                  </p>
                  
                  {/* Dot Voting Visualization */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span 
                        className="text-sm text-muted-foreground"
                        data-lovable-editable={`sketch-${index}-votes-label`}
                      >
                        Votes:
                      </span>
                      <div className="flex gap-1">
                        {Array.from({ length: Math.min(5, Math.floor(sketch.votes / 5)) }).map((_, i) => (
                          <div
                            key={i}
                            className="w-3 h-3 rounded-full bg-green-500"
                            data-lovable-editable={`sketch-${index}-dot-${i}`}
                          />
                        ))}
                      </div>
                    </div>
                    <Badge 
                      variant="secondary" 
                      className="bg-green-100 text-green-800"
                      data-lovable-editable={`sketch-${index}-vote-count`}
                    >
                      {sketch.votes}
                    </Badge>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Feature Voting Results */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 
              className="text-2xl font-bold text-foreground mb-6 text-center"
              data-lovable-editable="feature-voting-title"
            >
              Feature Prioritization Results
            </h3>
            <div className="space-y-4">
              {[
                { feature: "Offline-capable weather alerts", votes: 24, total: 24, priority: "Must Have" },
                { feature: "Visual soil moisture indicators", votes: 22, total: 24, priority: "Must Have" },
                { feature: "Photo-based crop health diagnosis", votes: 19, total: 24, priority: "Should Have" },
                { feature: "Community forum for knowledge sharing", votes: 15, total: 24, priority: "Could Have" },
                { feature: "Market price notifications", votes: 12, total: 24, priority: "Could Have" },
                { feature: "Multi-language voice interface", votes: 8, total: 24, priority: "Won't Have (V1)" }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="w-48">
                    <p 
                      className="text-sm font-medium text-foreground"
                      data-lovable-editable={`feature-${index}-name`}
                    >
                      {item.feature}
                    </p>
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(item.votes / item.total) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                    />
                  </div>
                  <span 
                    className="text-sm font-bold text-foreground w-12"
                    data-lovable-editable={`feature-${index}-votes`}
                  >
                    {item.votes}/{item.total}
                  </span>
                  <Badge 
                    variant={item.priority.includes("Must") ? "default" : "secondary"}
                    className={item.priority.includes("Must") ? "bg-green-600" : ""}
                    data-lovable-editable={`feature-${index}-priority`}
                  >
                    {item.priority}
                  </Badge>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 6: Prioritization - Impact vs Effort Matrix + Journey Map */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              data-lovable-editable="prioritization-title"
            >
              Strategic Prioritization & User Journey
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-lovable-editable="prioritization-description"
            >
              Mapping features against impact and effort while designing the complete farmer experience
            </p>
          </motion.div>

          {/* Impact vs Effort Matrix */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 
              className="text-2xl font-bold text-foreground mb-8 text-center"
              data-lovable-editable="matrix-title"
            >
              Impact vs Effort Matrix
            </h3>
            <div className="relative">
              <div className="grid grid-cols-2 grid-rows-2 gap-4 h-96">
                {/* High Impact, Low Effort - Quick Wins */}
                <div className="bg-green-50 border-2 border-green-200 p-4 rounded-lg">
                  <h4 
                    className="font-semibold text-green-800 mb-3 text-center"
                    data-lovable-editable="matrix-quickwins-title"
                  >
                    🎯 Quick Wins
                  </h4>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="block w-fit mx-auto bg-green-100 text-green-800" data-lovable-editable="quickwin-weather">
                      Weather Alerts (Offline)
                    </Badge>
                    <Badge variant="secondary" className="block w-fit mx-auto bg-green-100 text-green-800" data-lovable-editable="quickwin-dashboard">
                      Simple Visual Dashboard
                    </Badge>
                    <Badge variant="secondary" className="block w-fit mx-auto bg-green-100 text-green-800" data-lovable-editable="quickwin-icons">
                      Icon-based Interface
                    </Badge>
                  </div>
                </div>
                
                {/* High Impact, High Effort - Major Projects */}
                <div className="bg-yellow-50 border-2 border-yellow-200 p-4 rounded-lg">
                  <h4 
                    className="font-semibold text-yellow-800 mb-3 text-center"
                    data-lovable-editable="matrix-major-title"
                  >
                    🚀 Major Projects
                  </h4>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="block w-fit mx-auto bg-yellow-100 text-yellow-800" data-lovable-editable="major-iot">
                      IoT Sensor Integration
                    </Badge>
                    <Badge variant="secondary" className="block w-fit mx-auto bg-yellow-100 text-yellow-800" data-lovable-editable="major-ai">
                      AI Crop Recommendations
                    </Badge>
                    <Badge variant="secondary" className="block w-fit mx-auto bg-yellow-100 text-yellow-800" data-lovable-editable="major-community">
                      Community Platform
                    </Badge>
                  </div>
                </div>
                
                {/* Low Impact, Low Effort - Fill-ins */}
                <div className="bg-blue-50 border-2 border-blue-200 p-4 rounded-lg">
                  <h4 
                    className="font-semibold text-blue-800 mb-3 text-center"
                    data-lovable-editable="matrix-fillins-title"
                  >
                    📝 Fill-ins
                  </h4>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="block w-fit mx-auto bg-blue-100 text-blue-800" data-lovable-editable="fill-profile">
                      Profile Customization
                    </Badge>
                    <Badge variant="secondary" className="block w-fit mx-auto bg-blue-100 text-blue-800" data-lovable-editable="fill-help">
                      Help Documentation
                    </Badge>
                    <Badge variant="secondary" className="block w-fit mx-auto bg-blue-100 text-blue-800" data-lovable-editable="fill-settings">
                      Advanced Settings
                    </Badge>
                  </div>
                </div>
                
                {/* Low Impact, High Effort - Avoid */}
                <div className="bg-red-50 border-2 border-red-200 p-4 rounded-lg">
                  <h4 
                    className="font-semibold text-red-800 mb-3 text-center"
                    data-lovable-editable="matrix-avoid-title"
                  >
                    ⚠️ Avoid (V1)
                  </h4>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="block w-fit mx-auto bg-red-100 text-red-800" data-lovable-editable="avoid-analytics">
                      Complex Analytics
                    </Badge>
                    <Badge variant="secondary" className="block w-fit mx-auto bg-red-100 text-red-800" data-lovable-editable="avoid-multilang">
                      Multi-language Support
                    </Badge>
                    <Badge variant="secondary" className="block w-fit mx-auto bg-red-100 text-red-800" data-lovable-editable="avoid-automation">
                      Full Automation
                    </Badge>
                  </div>
                </div>
              </div>
              
              {/* Axis Labels */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <p 
                  className="text-sm text-muted-foreground font-medium"
                  data-lovable-editable="matrix-x-axis"
                >
                  Implementation Effort →
                </p>
              </div>
              <div className="absolute -left-16 top-1/2 transform -translate-y-1/2 -rotate-90">
                <p 
                  className="text-sm text-muted-foreground font-medium"
                  data-lovable-editable="matrix-y-axis"
                >
                  User Impact →
                </p>
              </div>
            </div>
          </div>

          {/* User Journey Map */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 
              className="text-2xl font-bold text-foreground mb-8 text-center"
              data-lovable-editable="journey-map-title"
            >
              Farmer's Digital Journey Map
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { 
                  step: "Discovery", 
                  icon: Eye, 
                  emotion: "😐", 
                  description: "Farmer realizes need for better data",
                  touchpoint: "Word of mouth, extension officers"
                },
                { 
                  step: "Exploration", 
                  icon: Search, 
                  emotion: "🤔", 
                  description: "Researches digital farming solutions",
                  touchpoint: "App store, community demos"
                },
                { 
                  step: "First Use", 
                  icon: Smartphone, 
                  emotion: "😊", 
                  description: "Downloads and tries the app",
                  touchpoint: "Onboarding tutorial, first weather alert"
                },
                { 
                  step: "Integration", 
                  icon: CheckCircle, 
                  emotion: "😍", 
                  description: "App becomes part of daily routine",
                  touchpoint: "Daily notifications, sensor readings"
                },
                { 
                  step: "Advocacy", 
                  icon: Users, 
                  emotion: "🥰", 
                  description: "Shares success with other farmers",
                  touchpoint: "Community forums, local meetings"
                }
              ].map((stage, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-green-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stage.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h4 
                    className="font-semibold text-foreground mb-2"
                    data-lovable-editable={`journey-${index}-step`}
                  >
                    {stage.step}
                  </h4>
                  <div className="text-2xl mb-2" data-lovable-editable={`journey-${index}-emotion`}>
                    {stage.emotion}
                  </div>
                  <p 
                    className="text-sm text-muted-foreground mb-2"
                    data-lovable-editable={`journey-${index}-description`}
                  >
                    {stage.description}
                  </p>
                  <p 
                    className="text-xs text-green-600 italic"
                    data-lovable-editable={`journey-${index}-touchpoint`}
                  >
                    {stage.touchpoint}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Section 7: Demo Section - Full-width Video + App Mockups */}
      <section className="py-16 bg-gradient-to-br from-green-900 to-blue-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full flex items-center justify-center"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4,
            ease: "easeInOut"
          }}
        >
          <Sprout className="w-16 h-16 text-white/50" />
        </motion.div>
        <motion.div 
          className="absolute bottom-32 left-16 w-24 h-24 bg-green-400/20 rounded-full flex items-center justify-center"
          animate={{ 
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 5,
            ease: "easeInOut",
            delay: 1
          }}
        >
          <TreePine className="w-12 h-12 text-green-300/50" />
        </motion.div>

        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              data-lovable-editable="demo-section-title"
            >
              Smart Farm App - Live Demo
            </h2>
            <p 
              className="text-xl text-white/80 max-w-3xl mx-auto"
              data-lovable-editable="demo-section-description"
            >
              Experience the final solution that emerged from our collaborative design thinking process
            </p>
          </motion.div>

          {/* Main Demo Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
              <div className="aspect-video bg-gradient-to-br from-white/20 to-white/5 rounded-xl mb-6 flex items-center justify-center relative overflow-hidden">
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 opacity-10"
                >
                  <div className="w-full h-full bg-[conic-gradient(from_0deg,_transparent,_white,_transparent)]"></div>
                </motion.div>
                <motion.div
                  animate={{ scale: [1, 1.1, 1] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                  className="relative z-10 cursor-pointer"
                  data-lovable-editable="main-demo-play-button"
                >
                  <Play className="w-20 h-20 text-white" />
                </motion.div>
              </div>
              <div className="text-center">
                <h3 
                  className="text-2xl font-bold mb-4"
                  data-lovable-editable="main-demo-title"
                >
                  Complete App Walkthrough
                </h3>
                <p 
                  className="text-white/80 mb-6"
                  data-lovable-editable="main-demo-description"
                >
                  See how farmers interact with real-time data, receive intelligent alerts, and make data-driven farming decisions
                </p>
                <Button variant="secondary" size="lg" data-lovable-editable="watch-demo-button">
                  <Play className="w-5 h-5 mr-2" />
                  <span data-lovable-editable="watch-demo-text">Watch Full Demo</span>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* App Screen Mockups - Using the uploaded images */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h3 
              className="text-2xl font-bold mb-8"
              data-lovable-editable="app-screens-title"
            >
              Key App Screens
            </h3>
            <div className="grid md:grid-cols-3 gap-8">
              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="aspect-[9/16] bg-white/5 rounded-xl mb-4 overflow-hidden">
                  <EditableImage 
                    src="/lovable-uploads/92daa44f-f4d1-472d-8910-22e82bf8b3b3.png"
                    alt="Dashboard screen showing comprehensive farm data, weather conditions, and actionable insights"
                    className="w-full h-full object-contain"
                    data-lovable-editable="dashboard-mockup-image"
                  />
                </div>
                <h4 
                  className="text-white font-medium text-sm"
                  data-lovable-editable="dashboard-mockup-title"
                >
                  Smart Dashboard
                </h4>
                <p 
                  className="text-white/70 text-xs mt-1"
                  data-lovable-editable="dashboard-mockup-description"
                >
                  Real-time farm metrics at a glance
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="aspect-[9/16] bg-white/5 rounded-xl mb-4 overflow-hidden">
                  <EditableImage 
                    src="/lovable-uploads/50eedb00-deb6-4ad4-9d4a-a664044ae725.png"
                    alt="Personalized crop selection and management screen tailored to specific farming needs"
                    className="w-full h-full object-contain"
                    data-lovable-editable="personalized-mockup-image"
                  />
                </div>
                <h4 
                  className="text-white font-medium text-sm"
                  data-lovable-editable="personalized-mockup-title"
                >
                  Personalized for Your Crop
                </h4>
                <p 
                  className="text-white/70 text-xs mt-1"
                  data-lovable-editable="personalized-mockup-description"
                >
                  Tailored recommendations and insights
                </p>
              </motion.div>

              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="aspect-[9/16] bg-white/5 rounded-xl mb-4 overflow-hidden">
                  <EditableImage 
                    src="/lovable-uploads/13fd507a-045d-444e-8db5-b79ac6d8b548.png"
                    alt="Precise location-based analytics with interactive map showing field conditions and data points"
                    className="w-full h-full object-contain"
                    data-lovable-editable="analytics-mockup-image"
                  />
                </div>
                <h4 
                  className="text-white font-medium text-sm"
                  data-lovable-editable="analytics-mockup-title"
                >
                  Accurate Location & Analytics
                </h4>
                <p 
                  className="text-white/70 text-xs mt-1"
                  data-lovable-editable="analytics-mockup-description"
                >
                  GPS-precise field monitoring
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Droplets,
                title: "Smart Irrigation",
                description: "AI-powered watering recommendations based on real-time soil moisture and weather forecasts"
              },
              {
                icon: Sun,
                title: "Weather Intelligence",
                description: "Hyperlocal weather predictions with climate pattern analysis for better planning"
              },
              {
                icon: BarChart3,
                title: "Yield Optimization",
                description: "Track crop performance and receive data-driven recommendations for maximum yield"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="w-8 h-8 text-white" />
                </div>
                <h3 
                  className="text-xl font-bold mb-3"
                  data-lovable-editable={`demo-feature-${index}-title`}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-white/80 leading-relaxed"
                  data-lovable-editable={`demo-feature-${index}-description`}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 8: Recommended Practices - Organic Farming Techniques */}
      <section className="py-16 bg-gradient-to-br from-green-50 to-yellow-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              data-lovable-editable="practices-section-title"
            >
              Sustainable Farming Practices
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-lovable-editable="practices-section-description"
            >
              Traditional wisdom meets modern technology for environmentally conscious agriculture
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: Flower2,
                title: "Vermicomposting",
                description: "Transform organic waste into nutrient-rich fertilizer using earthworms",
                benefits: "Reduces waste, improves soil structure, increases nutrient availability",
                implementation: "App tracks composting cycles and recommends application rates"
              },
              {
                icon: Droplets,
                title: "Drip Irrigation",
                description: "Precise water delivery directly to plant root zones",
                benefits: "90% water efficiency, reduced disease, consistent moisture",
                implementation: "Smart sensors control automated irrigation based on soil data"
              },
              {
                icon: Leaf,
                title: "Cover Cropping",
                description: "Plant cover crops between growing seasons to protect and enrich soil",
                benefits: "Prevents erosion, fixes nitrogen, suppresses weeds naturally",
                implementation: "App suggests optimal cover crop varieties for your region"
              },
              {
                icon: Sun,
                title: "Solar-Powered Systems",
                description: "Renewable energy for pumps, sensors, and processing equipment",
                benefits: "Reduces operational costs, environmentally sustainable, reliable",
                implementation: "Integration with solar weather forecasting for energy planning"
              },
              {
                icon: TreePine,
                title: "Companion Planting",
                description: "Strategic plant combinations that benefit each other's growth",
                benefits: "Natural pest control, improved pollination, maximized space",
                implementation: "AI recommends companion plants based on your crop selection"
              },
              {
                icon: Sprout,
                title: "Crop Rotation",
                description: "Systematic rotation of different crops to maintain soil health",
                benefits: "Breaks pest cycles, balances nutrients, increases biodiversity",
                implementation: "Multi-season planning tools with rotation recommendations"
              }
            ].map((practice, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow duration-300 border-2 border-transparent hover:border-green-200">
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <practice.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 
                    className="text-xl font-bold text-foreground mb-3 text-center"
                    data-lovable-editable={`practice-${index}-title`}
                  >
                    {practice.title}
                  </h3>
                  <p 
                    className="text-sm text-muted-foreground mb-4 text-center"
                    data-lovable-editable={`practice-${index}-description`}
                  >
                    {practice.description}
                  </p>
                  
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-green-700 text-sm mb-1" data-lovable-editable={`practice-${index}-benefits-label`}>
                        Benefits:
                      </h4>
                      <p className="text-xs text-green-600" data-lovable-editable={`practice-${index}-benefits`}>
                        {practice.benefits}
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-medium text-blue-700 text-sm mb-1" data-lovable-editable={`practice-${index}-tech-label`}>
                        Tech Integration:
                      </h4>
                      <p className="text-xs text-blue-600" data-lovable-editable={`practice-${index}-implementation`}>
                        {practice.implementation}
                      </p>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 9: Outcomes - Workshop Feedback & Metrics */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 
              className="text-3xl md:text-4xl font-bold text-foreground mb-4"
              data-lovable-editable="outcomes-section-title"
            >
              Workshop Results & Impact
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-lovable-editable="outcomes-section-description"
            >
              Measurable outcomes from our collaborative design thinking approach
            </p>
          </motion.div>

          {/* Key Metrics */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { metric: "96%", label: "Farmer Satisfaction", icon: Heart, color: "text-red-600" },
              { metric: "18", label: "App Features Co-created", icon: Lightbulb, color: "text-yellow-600" },
              { metric: "24", label: "Workshop Participants", icon: Users, color: "text-blue-600" },
              { metric: "85%", label: "Would Recommend", icon: TrendingUp, color: "text-green-600" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                  <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className={`w-8 h-8 ${stat.color}`} />
                  </div>
                  <h3 
                    className="text-3xl font-bold text-foreground mb-2"
                    data-lovable-editable={`outcome-stat-${index}-metric`}
                  >
                    {stat.metric}
                  </h3>
                  <p 
                    className="text-sm text-muted-foreground"
                    data-lovable-editable={`outcome-stat-${index}-label`}
                  >
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Participant Feedback */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-green-50 to-blue-50">
                <h3 
                  className="text-2xl font-bold text-foreground mb-6"
                  data-lovable-editable="feedback-positive-title"
                >
                  What Farmers Loved
                </h3>
                <div className="space-y-4">
                  {[
                    '"Finally, technology that understands our real problems" - Maria, Vegetable Farmer',
                    '"The offline weather alerts are a game-changer for remote areas" - James, Grain Farmer',
                    '"Simple icons make it easy for anyone to use" - Ana, Herb Grower',
                    '"Feels like it was made BY farmers, FOR farmers" - Carlos, Fruit Farmer'
                  ].map((quote, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p 
                        className="text-foreground italic"
                        data-lovable-editable={`positive-feedback-${index}`}
                      >
                        {quote}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8 h-full bg-gradient-to-br from-yellow-50 to-orange-50">
                <h3 
                  className="text-2xl font-bold text-foreground mb-6"
                  data-lovable-editable="feedback-improvements-title"
                >
                  Areas for Improvement
                </h3>
                <div className="space-y-4">
                  {[
                    'More visual tutorials for first-time smartphone users',
                    'Voice interface for hands-free operation in the field',
                    'Integration with local agricultural extension services',
                    'Community marketplace for sharing surplus crops'
                  ].map((improvement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Target className="w-5 h-5 text-orange-500 mt-0.5 flex-shrink-0" />
                      <p 
                        className="text-foreground"
                        data-lovable-editable={`improvement-suggestion-${index}`}
                      >
                        {improvement}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>

          {/* Success Story */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-green-100 to-blue-100 rounded-2xl p-8 text-center"
          >
            <h3 
              className="text-2xl font-bold text-foreground mb-6"
              data-lovable-editable="success-story-title"
            >
              Featured Success Story
            </h3>
            <blockquote className="text-center max-w-4xl mx-auto">
              <p 
                className="text-lg text-muted-foreground italic mb-6 leading-relaxed"
                data-lovable-editable="success-story-quote"
              >
                "This workshop changed how I think about farming. Before, I was just guessing when to water my crops. Now, with the app we helped design, I know exactly when my plants need water. My tomato yield increased by 40% and I'm using 30% less water. Most importantly, I feel confident making decisions about my farm."
              </p>
              <footer className="text-foreground">
                <strong data-lovable-editable="success-story-author">
                  — Maria Santos, Organic Vegetable Farmer
                </strong>
                <p 
                  className="text-sm text-muted-foreground mt-2"
                  data-lovable-editable="success-story-details"
                >
                  2 hectares • Philippines • Workshop Participant & Beta Tester
                </p>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Section 10: Call to Action - Agricultural Co-creation */}
      <section className="py-16 bg-gradient-to-br from-green-600 to-blue-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 
              className="text-3xl md:text-4xl font-bold mb-4"
              data-lovable-editable="cta-title"
            >
              Ready to Co-create Agricultural Solutions?
            </h2>
            <p 
              className="text-xl text-white/80 mb-8 max-w-4xl mx-auto leading-relaxed"
              data-lovable-editable="cta-description"
            >
              Join us in designing technology that truly serves farmers. Whether you're an agricultural organization, tech company, or farming community, let's collaborate to create solutions that make a real difference in food security and sustainable agriculture.
            </p>
            <div className="flex flex-wrap gap-4 justify-center mb-8">
              <Button variant="secondary" size="lg" data-lovable-editable="cta-contact-button">
                <Users className="w-5 h-5 mr-2" />
                <span data-lovable-editable="cta-contact-text">Start a Co-creation Project</span>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600" data-lovable-editable="cta-workshop-button">
                <Lightbulb className="w-5 h-5 mr-2" />
                <span data-lovable-editable="cta-workshop-text">Book a Design Workshop</span>
              </Button>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6 mt-12">
              {[
                {
                  icon: Users,
                  title: "Farmer-Centered Design",
                  description: "We always start with farmers' real needs and challenges"
                },
                {
                  icon: Leaf,
                  title: "Sustainable Solutions",
                  description: "Technology that promotes environmental stewardship"
                },
                {
                  icon: Heart,
                  title: "Community Impact",
                  description: "Building solutions that strengthen farming communities"
                }
              ].map((value, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 
                    className="text-lg font-bold mb-2"
                    data-lovable-editable={`cta-value-${index}-title`}
                  >
                    {value.title}
                  </h3>
                  <p 
                    className="text-white/80 text-sm"
                    data-lovable-editable={`cta-value-${index}-description`}
                  >
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Workshop Report */}
      <section className="py-12 bg-background border-t border-border">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 
              className="text-xl font-bold text-foreground mb-4"
              data-lovable-editable="download-report-title"
            >
              Download Complete Workshop Report
            </h3>
            <p 
              className="text-muted-foreground mb-6"
              data-lovable-editable="download-report-description"
            >
              Get the full 40-page report with detailed methodologies, participant insights, and design artifacts from our 6-week design thinking workshop
            </p>
            <Button size="lg" className="bg-green-600 hover:bg-green-700" data-lovable-editable="download-report-button">
              <Download className="w-5 h-5 mr-2" />
              <span data-lovable-editable="download-report-text">Download Workshop Report (PDF, 4.2 MB)</span>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FarmMonitoringProject;

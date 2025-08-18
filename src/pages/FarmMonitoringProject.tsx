
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Download, Users, Droplets, Sun, Wrench, ChevronDown, ExternalLink, CheckCircle, Target, Search, Lightbulb, Clock, MapPin, Smartphone, BarChart3, TrendingUp } from 'lucide-react';
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
              Design Thinking Case Study
            </Badge>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-green-50 to-blue-50 relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 opacity-20">
          <motion.div 
            className="absolute top-10 left-10 w-20 h-20 bg-green-500 rounded-full"
            animate={{ 
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.6, 0.3]
            }}
            transition={{ 
              repeat: Infinity, 
              duration: 4,
              ease: "easeInOut"
            }}
          />
          <motion.div 
            className="absolute top-32 right-20 w-16 h-16 bg-blue-500 rounded-full"
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
          />
          <motion.div 
            className="absolute bottom-20 left-1/3 w-12 h-12 bg-yellow-500 rounded-full"
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
          />
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
                Smart Farm Monitoring System
              </h1>
              <p 
                className="text-xl text-muted-foreground mb-8 leading-relaxed"
                data-lovable-editable="hero-description"
              >
                A comprehensive design thinking case study exploring how technology can empower small-scale farmers with data-driven insights to optimize crop yields and resource management.
              </p>
              <div className="flex flex-wrap gap-4 mb-8">
                <Badge variant="outline" className="px-4 py-2" data-lovable-editable="duration-badge">
                  <Clock className="w-4 h-4 mr-2" />
                  6 Week Sprint
                </Badge>
                <Badge variant="outline" className="px-4 py-2" data-lovable-editable="team-badge">
                  <Users className="w-4 h-4 mr-2" />
                  4 Person Team
                </Badge>
                <Badge variant="outline" className="px-4 py-2" data-lovable-editable="role-badge">
                  <Target className="w-4 h-4 mr-2" />
                  Lead UX Researcher
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
                    className="relative z-10"
                  >
                    <Play className="w-16 h-16 text-green-600" />
                  </motion.div>
                </div>
                <h3 
                  className="text-xl font-semibold text-foreground mb-2"
                  data-lovable-editable="demo-title"
                >
                  Interactive Demo
                </h3>
                <p 
                  className="text-muted-foreground mb-4"
                  data-lovable-editable="demo-description"
                >
                  See how our smart monitoring system transforms traditional farming practices
                </p>
                <Button className="w-full" data-lovable-editable="watch-demo-button">
                  <Play className="w-4 h-4 mr-2" />
                  <span data-lovable-editable="watch-demo-text">Watch Demo</span>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Project Overview */}
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
              data-lovable-editable="overview-title"
            >
              Design Thinking Workshop Timeline
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-lovable-editable="overview-description"
            >
              Our structured approach to understanding farmer challenges and creating technology solutions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {[
              { week: "Week 1-2", phase: "Empathize & Define", icon: Search, color: "bg-blue-500" },
              { week: "Week 3-4", phase: "Ideate & Prototype", icon: Lightbulb, color: "bg-yellow-500" },
              { week: "Week 5-6", phase: "Test & Iterate", icon: Target, color: "bg-green-500" }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative"
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className={`w-16 h-16 ${item.color} rounded-full flex items-center justify-center mx-auto mb-4`}>
                    <item.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 
                    className="text-lg font-semibold text-foreground mb-2"
                    data-lovable-editable={`timeline-${index}-week`}
                  >
                    {item.week}
                  </h3>
                  <p 
                    className="text-xl font-bold text-foreground mb-2"
                    data-lovable-editable={`timeline-${index}-phase`}
                  >
                    {item.phase}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Challenge Cards */}
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-red-100 rounded-lg flex items-center justify-center mr-4">
                    <Target className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 
                    className="text-2xl font-bold text-foreground"
                    data-lovable-editable="challenge-title"
                  >
                    The Challenge
                  </h3>
                </div>
                <p 
                  className="text-muted-foreground text-lg leading-relaxed"
                  data-lovable-editable="challenge-description"
                >
                  Small-scale farmers lack access to real-time data about their crops, weather conditions, and soil health. This leads to suboptimal decision-making, reduced yields, and economic losses in an already challenging agricultural environment.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mr-4">
                    <CheckCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <h3 
                    className="text-2xl font-bold text-foreground"
                    data-lovable-editable="solution-title"
                  >
                    Our Solution
                  </h3>
                </div>
                <p 
                  className="text-muted-foreground text-lg leading-relaxed"
                  data-lovable-editable="solution-description"
                >
                  A user-friendly mobile application that combines IoT sensors, weather data, and AI-powered insights to provide farmers with actionable recommendations for irrigation, fertilization, and pest management in real-time.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Research & Insights */}
      <section className="py-16 bg-gradient-to-br from-blue-50 to-green-50">
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
              data-lovable-editable="research-title"
            >
              Research & User Insights
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-lovable-editable="research-description"
            >
              Deep dive into farmer personas, pain points, and behavioral patterns
            </p>
          </motion.div>

          {/* User Personas */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                name: "Maria Santos",
                age: "45",
                role: "Small-scale Vegetable Farmer",
                location: "Rural Philippines",
                quote: "I wish I knew when exactly to water my plants",
                image: "/lovable-uploads/farmers-1.jpg"
              },
              {
                name: "James Ochieng",
                age: "38",
                role: "Maize & Bean Farmer",
                location: "Kenya",
                quote: "Weather predictions help me plan better harvests",
                image: "/lovable-uploads/farmers-2.jpg"
              },
              {
                name: "Ana Rodriguez",
                age: "52",
                role: "Organic Herb Grower",
                location: "Guatemala",
                quote: "Technology should be simple and affordable",
                image: "/lovable-uploads/farmers-3.jpg"
              }
            ].map((persona, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="p-6 text-center hover:shadow-lg transition-shadow duration-300">
                  <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                    <EditableImage 
                      src={persona.image}
                      alt={persona.name}
                      className="w-full h-full object-cover"
                      data-lovable-editable={`persona-${index}-image`}
                    />
                  </div>
                  <h3 
                    className="text-xl font-bold text-foreground mb-2"
                    data-lovable-editable={`persona-${index}-name`}
                  >
                    {persona.name}, {persona.age}
                  </h3>
                  <p 
                    className="text-sm text-muted-foreground mb-2"
                    data-lovable-editable={`persona-${index}-role`}
                  >
                    {persona.role}
                  </p>
                  <p 
                    className="text-sm text-muted-foreground mb-4"
                    data-lovable-editable={`persona-${index}-location`}
                  >
                    📍 {persona.location}
                  </p>
                  <blockquote 
                    className="text-sm italic text-foreground"
                    data-lovable-editable={`persona-${index}-quote`}
                  >
                    "{persona.quote}"
                  </blockquote>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Pain Points Chart */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 
              className="text-2xl font-bold text-foreground mb-8 text-center"
              data-lovable-editable="pain-points-title"
            >
              Top Pain Points Identified
            </h3>
            <div className="space-y-6">
              {[
                { issue: "Unpredictable weather patterns", frequency: 95 },
                { issue: "Lack of real-time soil data", frequency: 87 },
                { issue: "Inefficient water usage", frequency: 82 },
                { issue: "Pest & disease identification", frequency: 76 },
                { issue: "Market price fluctuations", frequency: 69 }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <p 
                    className="text-sm font-medium text-foreground w-48"
                    data-lovable-editable={`pain-point-${index}-text`}
                  >
                    {item.issue}
                  </p>
                  <div className="flex-1 bg-gray-200 rounded-full h-3 relative overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.frequency}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: index * 0.1 }}
                      className="h-full bg-gradient-to-r from-red-400 to-red-600 rounded-full"
                    />
                  </div>
                  <span 
                    className="text-sm font-bold text-foreground w-12"
                    data-lovable-editable={`pain-point-${index}-percentage`}
                  >
                    {item.frequency}%
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Definition */}
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
              Problem Definition
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-lovable-editable="problem-definition-description"
            >
              Synthesis of research findings into actionable problem statements
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                title: "Information Gap",
                description: "Farmers lack access to real-time environmental data",
                color: "bg-red-100 border-red-200 text-red-800"
              },
              {
                title: "Technology Barrier",
                description: "Complex interfaces prevent widespread adoption",
                color: "bg-orange-100 border-orange-200 text-orange-800"
              },
              {
                title: "Resource Waste",
                description: "Inefficient use of water and fertilizers",
                color: "bg-yellow-100 border-yellow-200 text-yellow-800"
              },
              {
                title: "Economic Impact",
                description: "Poor decisions lead to reduced crop yields",
                color: "bg-green-100 border-green-200 text-green-800"
              }
            ].map((sticky, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
                whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ rotate: 2, scale: 1.05 }}
                className={`p-6 rounded-lg border-2 ${sticky.color} shadow-lg cursor-pointer`}
                data-lovable-editable={`sticky-note-${index}`}
              >
                <h3 
                  className="font-bold text-lg mb-3"
                  data-lovable-editable={`sticky-note-${index}-title`}
                >
                  {sticky.title}
                </h3>
                <p 
                  className="text-sm leading-relaxed"
                  data-lovable-editable={`sticky-note-${index}-description`}
                >
                  {sticky.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ideation */}
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
              Ideation & Concept Development
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-lovable-editable="ideation-description"
            >
              Brainstorming sessions and concept sketches leading to our final solution
            </p>
          </motion.div>

          {/* Sketch Carousel */}
          <div className="bg-white rounded-2xl p-8 shadow-lg mb-12">
            <h3 
              className="text-2xl font-bold text-foreground mb-6 text-center"
              data-lovable-editable="sketches-title"
            >
              Initial Concept Sketches
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { title: "Dashboard Layout", votes: 23 },
                { title: "Mobile Interface", votes: 31 },
                { title: "Sensor Integration", votes: 18 }
              ].map((sketch, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="relative"
                >
                  <div className="aspect-square bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                    <div 
                      className="text-gray-400 text-center"
                      data-lovable-editable={`sketch-${index}-placeholder`}
                    >
                      <Wrench className="w-12 h-12 mx-auto mb-2" />
                      <p className="text-sm">Sketch Placeholder</p>
                    </div>
                  </div>
                  <h4 
                    className="font-semibold text-foreground mb-2"
                    data-lovable-editable={`sketch-${index}-title`}
                  >
                    {sketch.title}
                  </h4>
                  <div className="flex items-center justify-between">
                    <span 
                      className="text-sm text-muted-foreground"
                      data-lovable-editable={`sketch-${index}-votes`}
                    >
                      {sketch.votes} votes
                    </span>
                    <div className="flex gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div
                          key={i}
                          className={`w-2 h-2 rounded-full ${
                            i < Math.floor(sketch.votes / 10) ? 'bg-yellow-400' : 'bg-gray-200'
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Voting Results */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 
              className="text-2xl font-bold text-foreground mb-6 text-center"
              data-lovable-editable="voting-results-title"
            >
              Team Voting Results
            </h3>
            <div className="space-y-4">
              {[
                { feature: "Real-time weather alerts", votes: 4, total: 4 },
                { feature: "Soil moisture monitoring", votes: 4, total: 4 },
                { feature: "Crop growth tracking", votes: 3, total: 4 },
                { feature: "Market price integration", votes: 2, total: 4 },
                { feature: "Community forum", votes: 1, total: 4 }
              ].map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <p 
                    className="text-sm font-medium text-foreground w-48"
                    data-lovable-editable={`voting-item-${index}-text`}
                  >
                    {item.feature}
                  </p>
                  <div className="flex gap-1">
                    {Array.from({ length: item.total }).map((_, i) => (
                      <div
                        key={i}
                        className={`w-8 h-8 rounded-full border-2 flex items-center justify-center ${
                          i < item.votes 
                            ? 'bg-green-500 border-green-500 text-white' 
                            : 'border-gray-200 text-gray-400'
                        }`}
                      >
                        {i < item.votes ? '✓' : '○'}
                      </div>
                    ))}
                  </div>
                  <span 
                    className="text-sm font-bold text-foreground"
                    data-lovable-editable={`voting-item-${index}-score`}
                  >
                    {item.votes}/{item.total}
                  </span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Strategy & Planning */}
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
              data-lovable-editable="strategy-title"
            >
              Strategy & Implementation Plan
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-lovable-editable="strategy-description"
            >
              Prioritization matrix and user journey mapping for optimal development
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
                {/* High Impact, Low Effort */}
                <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                  <h4 
                    className="font-semibold text-green-800 mb-2"
                    data-lovable-editable="matrix-quadrant-1-title"
                  >
                    Quick Wins
                  </h4>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="block w-fit" data-lovable-editable="quick-win-1">
                      Weather Alerts
                    </Badge>
                    <Badge variant="secondary" className="block w-fit" data-lovable-editable="quick-win-2">
                      Basic Dashboard
                    </Badge>
                  </div>
                </div>
                
                {/* High Impact, High Effort */}
                <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                  <h4 
                    className="font-semibold text-yellow-800 mb-2"
                    data-lovable-editable="matrix-quadrant-2-title"
                  >
                    Major Projects
                  </h4>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="block w-fit" data-lovable-editable="major-project-1">
                      IoT Integration
                    </Badge>
                    <Badge variant="secondary" className="block w-fit" data-lovable-editable="major-project-2">
                      AI Recommendations
                    </Badge>
                  </div>
                </div>
                
                {/* Low Impact, Low Effort */}
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <h4 
                    className="font-semibold text-blue-800 mb-2"
                    data-lovable-editable="matrix-quadrant-3-title"
                  >
                    Fill-ins
                  </h4>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="block w-fit" data-lovable-editable="fill-in-1">
                      Profile Settings
                    </Badge>
                    <Badge variant="secondary" className="block w-fit" data-lovable-editable="fill-in-2">
                      Help Center
                    </Badge>
                  </div>
                </div>
                
                {/* Low Impact, High Effort */}
                <div className="bg-red-50 border border-red-200 p-4 rounded-lg">
                  <h4 
                    className="font-semibold text-red-800 mb-2"
                    data-lovable-editable="matrix-quadrant-4-title"
                  >
                    Thankless Tasks
                  </h4>
                  <div className="space-y-2">
                    <Badge variant="secondary" className="block w-fit" data-lovable-editable="thankless-task-1">
                      Advanced Analytics
                    </Badge>
                    <Badge variant="secondary" className="block w-fit" data-lovable-editable="thankless-task-2">
                      Multi-language
                    </Badge>
                  </div>
                </div>
              </div>
              
              {/* Axis Labels */}
              <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2">
                <p 
                  className="text-sm text-muted-foreground"
                  data-lovable-editable="matrix-x-axis-label"
                >
                  Effort →
                </p>
              </div>
              <div className="absolute -left-12 top-1/2 transform -translate-y-1/2 -rotate-90">
                <p 
                  className="text-sm text-muted-foreground"
                  data-lovable-editable="matrix-y-axis-label"
                >
                  Impact →
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
              User Journey Map
            </h3>
            <div className="grid md:grid-cols-5 gap-4">
              {[
                { step: "Awareness", icon: Search, emotion: "😐", description: "Farmer realizes need for better data" },
                { step: "Research", icon: Smartphone, emotion: "🤔", description: "Searches for digital solutions" },
                { step: "Trial", icon: Play, emotion: "😊", description: "Downloads and tests the app" },
                { step: "Adoption", icon: CheckCircle, emotion: "😍", description: "Integrates into daily routine" },
                { step: "Advocacy", icon: Users, emotion: "🥰", description: "Recommends to other farmers" }
              ].map((stage, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stage.icon className="w-8 h-8 text-blue-600" />
                  </div>
                  <h4 
                    className="font-semibold text-foreground mb-2"
                    data-lovable-editable={`journey-step-${index}-title`}
                  >
                    {stage.step}
                  </h4>
                  <div className="text-2xl mb-2" data-lovable-editable={`journey-step-${index}-emotion`}>
                    {stage.emotion}
                  </div>
                  <p 
                    className="text-sm text-muted-foreground"
                    data-lovable-editable={`journey-step-${index}-description`}
                  >
                    {stage.description}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Demo & Prototype */}
      <section className="py-16 bg-gradient-to-br from-green-900 to-blue-900 text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <motion.div 
          className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 4,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-32 left-16 w-24 h-24 bg-green-400/20 rounded-full"
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
        />

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
              Interactive Prototype Demo
            </h2>
            <p 
              className="text-xl text-white/80 max-w-3xl mx-auto"
              data-lovable-editable="demo-section-description"
            >
              Experience the final solution through our working prototype
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
                >
                  <Play className="w-20 h-20 text-white" />
                </motion.div>
              </div>
              <div className="text-center">
                <h3 
                  className="text-2xl font-bold mb-4"
                  data-lovable-editable="demo-video-title"
                >
                  Full App Walkthrough
                </h3>
                <p 
                  className="text-white/80 mb-6"
                  data-lovable-editable="demo-video-description"
                >
                  See how farmers interact with real-time data, receive alerts, and make informed decisions
                </p>
                <Button variant="secondary" size="lg" data-lovable-editable="watch-full-demo-button">
                  <Play className="w-5 h-5 mr-2" />
                  <span data-lovable-editable="watch-full-demo-text">Watch Full Demo</span>
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Feature Highlights */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: Droplets,
                title: "Smart Irrigation",
                description: "AI-powered watering recommendations based on soil moisture and weather"
              },
              {
                icon: Sun,
                title: "Weather Insights",
                description: "Hyperlocal weather forecasts and climate pattern analysis"
              },
              {
                icon: BarChart3,
                title: "Yield Analytics",
                description: "Track crop performance and optimize future planting decisions"
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
                  data-lovable-editable={`feature-${index}-title`}
                >
                  {feature.title}
                </h3>
                <p 
                  className="text-white/80 leading-relaxed"
                  data-lovable-editable={`feature-${index}-description`}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>

          {/* App Screen Mockups */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
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
                    alt="Dashboard screen showing farm data and metrics"
                    className="w-full h-full object-contain"
                    data-lovable-editable="dashboard-screen-image"
                  />
                </div>
                <h4 
                  className="text-white font-medium text-sm"
                  data-lovable-editable="dashboard-screen-title"
                >
                  Dashboard
                </h4>
              </motion.div>

              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="aspect-[9/16] bg-white/5 rounded-xl mb-4 overflow-hidden">
                  <EditableImage 
                    src="/lovable-uploads/50eedb00-deb6-4ad4-9d4a-a664044ae725.png"
                    alt="Personalized crop selection screen"
                    className="w-full h-full object-contain"
                    data-lovable-editable="personalized-screen-image"
                  />
                </div>
                <h4 
                  className="text-white font-medium text-sm"
                  data-lovable-editable="personalized-screen-title"
                >
                  Personalized for your crop
                </h4>
              </motion.div>

              <motion.div
                whileHover={{ y: -10, scale: 1.02 }}
                transition={{ duration: 0.3 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
              >
                <div className="aspect-[9/16] bg-white/5 rounded-xl mb-4 overflow-hidden">
                  <EditableImage 
                    src="/lovable-uploads/13fd507a-045d-444e-8db5-b79ac6d8b548.png"
                    alt="Map view showing accurate farm location and analytics"
                    className="w-full h-full object-contain"
                    data-lovable-editable="analytics-screen-image"
                  />
                </div>
                <h4 
                  className="text-white font-medium text-sm"
                  data-lovable-editable="analytics-screen-title"
                >
                  Accurate location & Analytics
                </h4>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Testing & Validation */}
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
              data-lovable-editable="testing-title"
            >
              User Testing & Validation
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-lovable-editable="testing-description"
            >
              Rigorous testing with real farmers to validate our design decisions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Testing Methodology */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 h-full">
                <h3 
                  className="text-2xl font-bold text-foreground mb-6"
                  data-lovable-editable="testing-methodology-title"
                >
                  Testing Methodology
                </h3>
                <div className="space-y-4">
                  {[
                    { method: "Usability Testing", participants: "12 farmers", duration: "45 min each" },
                    { method: "Field Studies", participants: "3 farms", duration: "2 weeks" },
                    { method: "A/B Testing", participants: "Interface variants", duration: "1 week" },
                    { method: "Focus Groups", participants: "8 participants", duration: "90 min" }
                  ].map((test, index) => (
                    <div key={index} className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                        <span className="text-blue-600 font-bold">{index + 1}</span>
                      </div>
                      <div>
                        <h4 
                          className="font-semibold text-foreground"
                          data-lovable-editable={`test-method-${index}-title`}
                        >
                          {test.method}
                        </h4>
                        <p 
                          className="text-sm text-muted-foreground"
                          data-lovable-editable={`test-method-${index}-details`}
                        >
                          {test.participants} • {test.duration}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>

            {/* Key Insights */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <Card className="p-8 h-full">
                <h3 
                  className="text-2xl font-bold text-foreground mb-6"
                  data-lovable-editable="key-insights-title"
                >
                  Key Insights
                </h3>
                <div className="space-y-6">
                  {[
                    {
                      insight: "Voice notifications preferred over text",
                      impact: "High",
                      color: "text-red-600 bg-red-100"
                    },
                    {
                      insight: "Simple icons improve usability by 40%",
                      impact: "High",
                      color: "text-red-600 bg-red-100"
                    },
                    {
                      insight: "Offline mode is critical for rural areas",
                      impact: "Medium",
                      color: "text-yellow-600 bg-yellow-100"
                    },
                    {
                      insight: "Community features increase engagement",
                      impact: "Low",
                      color: "text-green-600 bg-green-100"
                    }
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Badge className={`${item.color} px-2 py-1 text-xs`} data-lovable-editable={`insight-${index}-impact`}>
                        {item.impact}
                      </Badge>
                      <p 
                        className="text-sm text-foreground leading-relaxed"
                        data-lovable-editable={`insight-${index}-text`}
                      >
                        {item.insight}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Results & Impact */}
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
              data-lovable-editable="results-title"
            >
              Results & Business Impact
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-lovable-editable="results-description"
            >
              Measurable outcomes from our design-thinking approach
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {[
              { metric: "30%", label: "Increase in Crop Yield", icon: TrendingUp },
              { metric: "45%", label: "Water Usage Reduction", icon: Droplets },
              { metric: "85%", label: "User Satisfaction Score", icon: Users },
              { metric: "60%", label: "Faster Decision Making", icon: Clock }
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
                  <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <stat.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 
                    className="text-3xl font-bold text-foreground mb-2"
                    data-lovable-editable={`stat-${index}-metric`}
                  >
                    {stat.metric}
                  </h3>
                  <p 
                    className="text-sm text-muted-foreground"
                    data-lovable-editable={`stat-${index}-label`}
                  >
                    {stat.label}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white rounded-2xl p-8 shadow-lg"
          >
            <h3 
              className="text-2xl font-bold text-foreground mb-6 text-center"
              data-lovable-editable="success-story-title"
            >
              Success Story
            </h3>
            <blockquote className="text-center">
              <p 
                className="text-lg text-muted-foreground italic mb-4 leading-relaxed"
                data-lovable-editable="success-story-quote"
              >
                "This app has completely transformed how I manage my farm. I now know exactly when to water my crops and can predict potential problems before they happen. My harvest has improved by 30% and I'm using much less water."
              </p>
              <footer className="text-foreground">
                <strong data-lovable-editable="success-story-author">
                  — Maria Santos, Vegetable Farmer
                </strong>
                <p 
                  className="text-sm text-muted-foreground mt-1"
                  data-lovable-editable="success-story-location"
                >
                  Philippines
                </p>
              </footer>
            </blockquote>
          </motion.div>
        </div>
      </section>

      {/* Lessons Learned */}
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
              data-lovable-editable="lessons-title"
            >
              Lessons Learned & Recommendations
            </h2>
            <p 
              className="text-xl text-muted-foreground max-w-3xl mx-auto"
              data-lovable-editable="lessons-description"
            >
              Key takeaways for future agricultural technology projects
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 h-full">
                <h3 
                  className="text-2xl font-bold text-foreground mb-6"
                  data-lovable-editable="best-practices-title"
                >
                  Best Practices
                </h3>
                <div className="space-y-4">
                  {[
                    "Involve farmers in every stage of design",
                    "Prioritize simplicity over advanced features",
                    "Design for low-connectivity environments",
                    "Use familiar metaphors and iconography",
                    "Provide multilingual support from day one"
                  ].map((practice, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <p 
                        className="text-foreground"
                        data-lovable-editable={`best-practice-${index}`}
                      >
                        {practice}
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
              <Card className="p-8 h-full">
                <h3 
                  className="text-2xl font-bold text-foreground mb-6"
                  data-lovable-editable="future-improvements-title"
                >
                  Future Improvements
                </h3>
                <div className="space-y-4">
                  {[
                    "AI-powered pest detection using camera",
                    "Integration with commodity pricing APIs",
                    "Community marketplace for surplus crops",
                    "Voice-first interface for hands-free operation",
                    "Blockchain-based crop certification system"
                  ].map((improvement, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <Lightbulb className="w-5 h-5 text-yellow-500 mt-0.5 flex-shrink-0" />
                      <p 
                        className="text-foreground"
                        data-lovable-editable={`future-improvement-${index}`}
                      >
                        {improvement}
                      </p>
                    </div>
                  ))}
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
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
              Ready to Transform Agriculture?
            </h2>
            <p 
              className="text-xl text-white/80 mb-8 max-w-3xl mx-auto"
              data-lovable-editable="cta-description"
            >
              Let's collaborate on your next agricultural technology project. Together, we can create solutions that empower farmers and improve food security globally.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button variant="secondary" size="lg" data-lovable-editable="contact-button">
                <span data-lovable-editable="contact-button-text">Get In Touch</span>
              </Button>
              <Button variant="outline" size="lg" className="border-white text-white hover:bg-white hover:text-blue-600" data-lovable-editable="portfolio-button">
                <ExternalLink className="w-5 h-5 mr-2" />
                <span data-lovable-editable="portfolio-button-text">View Portfolio</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Case Study */}
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
              data-lovable-editable="download-title"
            >
              Download Full Case Study
            </h3>
            <p 
              className="text-muted-foreground mb-6"
              data-lovable-editable="download-description"
            >
              Get the complete 25-page case study with detailed methodologies, research data, and design artifacts
            </p>
            <Button size="lg" data-lovable-editable="download-button">
              <Download className="w-5 h-5 mr-2" />
              <span data-lovable-editable="download-button-text">Download PDF (2.3 MB)</span>
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default FarmMonitoringProject;

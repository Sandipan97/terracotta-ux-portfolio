
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Download, Users, Droplets, Sun, Wrench, ChevronDown, ExternalLink, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { EditableImage } from '@/components/ui/editable-image';
import UniversalStickyNavigation from '@/components/ui/universal-sticky-navigation';

const FarmMonitoringProject = () => {
  const navigate = useNavigate();
  const [activeDemo, setActiveDemo] = useState(false);

  useEffect(() => {
    console.log('FarmMonitoringProject component mounted');
  }, []);

  const goBack = () => {
    navigate(-1);
  };

  const scrollToDemo = () => {
    const element = document.getElementById('demo');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const navigationSections = [
    { id: 'hero', label: 'Overview' },
    { id: 'challenge', label: 'Challenge' },
    { id: 'research', label: 'Research' },
    { id: 'problem', label: 'Problem Definition' },
    { id: 'ideation', label: 'Ideation' },
    { id: 'strategy', label: 'Strategy' },
    { id: 'demo', label: 'Demo' },
    { id: 'practices', label: 'Practices' },
    { id: 'outcomes', label: 'Outcomes' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <UniversalStickyNavigation sections={navigationSections} />
      
      <main className="pt-20">
        {/* Hero Section - Transforming Agriculture with Design Thinking */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 to-blue-50">
          {/* Animated Background */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute top-20 left-10 w-32 h-32 bg-green-200/30 rounded-full blur-xl"
              animate={{ 
                x: [0, 100, 0], 
                y: [0, -50, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-40 h-40 bg-blue-200/30 rounded-full blur-xl"
              animate={{ 
                x: [0, -80, 0], 
                y: [0, 30, 0],
                scale: [1.2, 1, 1.2]
              }}
              transition={{ duration: 25, repeat: Infinity }}
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
              className="bg-background/80 backdrop-blur-sm text-foreground hover:bg-background hover:text-green-600 transition-all duration-300 border border-border/50"
              size="icon"
            >
              <ArrowLeft size={20} />
            </Button>
          </motion.div>

          {/* Hero Content */}
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-5xl mx-auto"
            >
              <motion.div 
                className="flex flex-wrap gap-2 mb-6 justify-center"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <Badge className="bg-green-100 text-green-800 border-green-200">
                  🌾 Smart Agriculture
                </Badge>
                <Badge className="bg-blue-100 text-blue-800 border-blue-200">
                  🧠 Design Thinking
                </Badge>
                <Badge className="bg-orange-100 text-orange-800 border-orange-200">
                  📱 Mobile Innovation
                </Badge>
              </motion.div>

              <motion.h1 
                className="font-heading text-4xl md:text-7xl font-bold mb-6 text-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.8 }}
              >
                Empowering Farmers Through Innovation
              </motion.h1>
              
              <motion.h2 
                className="text-xl md:text-3xl font-medium mb-8 text-muted-foreground"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
              >
                A design-led journey to build a smart farming solution for small-scale farmers
              </motion.h2>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.8 }}
                className="mb-12"
              >
                <Button 
                  onClick={scrollToDemo}
                  size="lg" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Play className="mr-2" size={24} />
                  Watch the Demo
                </Button>
              </motion.div>

              {/* Demo Preview */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="relative max-w-4xl mx-auto"
              >
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-card border">
                  <EditableImage 
                    src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Smart farming app interface"
                    className="w-full h-full"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30"
                      onClick={() => setActiveDemo(true)}
                    >
                      <Play className="mr-2" size={24} />
                      Play Demo
                    </Button>
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  2 min demo
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Project Overview - Challenge */}
        <section id="challenge" className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
                The Challenge
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Small-scale farmers face unprecedented challenges that threaten their livelihood and food security
              </p>
            </motion.div>

            {/* Challenge Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { icon: Droplets, title: "Water Scarcity", desc: "Limited access to irrigation and unpredictable rainfall patterns", color: "blue" },
                { icon: Sun, title: "Climate Change", desc: "Extreme weather events and shifting seasonal patterns", color: "orange" },
                { icon: Users, title: "Labor Shortages", desc: "Aging workforce and youth migration to urban areas", color: "purple" },
                { icon: Wrench, title: "Tech Access", desc: "Limited exposure to modern farming technologies", color: "green" }
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className={`w-12 h-12 bg-${challenge.color}-100 rounded-lg flex items-center justify-center mb-4`}>
                    <challenge.icon className={`text-${challenge.color}-600`} size={24} />
                  </div>
                  <h3 className="font-semibold text-foreground mb-2">{challenge.title}</h3>
                  <p className="text-muted-foreground text-sm">{challenge.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Goal Statement */}
            <motion.div
              className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 md:p-12 text-center text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Goal</h3>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                Use design thinking to create a <strong>tech-enabled, research-driven solution</strong> that improves productivity and sustainability for small-scale farmers
              </p>
            </motion.div>
          </div>
        </section>

        {/* Empathy & Research Insights */}
        <section id="research" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
                Research & Insights
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Deep empathy research with 20+ farmers revealed critical pain points and opportunities
              </p>
            </motion.div>

            {/* Research Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { number: "20+", label: "Farmer Interviews" },
                { number: "5", label: "Field Visits" },
                { number: "3", label: "User Personas" },
                { number: "12", label: "Key Insights" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* User Personas */}
            <div className="grid md:grid-cols-2 gap-8 mb-16">
              <motion.div
                className="bg-card p-8 rounded-xl border shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4 text-orange-600">Traditional Farmer</h3>
                <div className="aspect-square w-24 h-24 bg-orange-100 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-2xl">👨‍🌾</span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Age: 45-65 years</li>
                  <li>• Relies on traditional methods</li>
                  <li>• Limited tech exposure</li>
                  <li>• Community-oriented decisions</li>
                </ul>
              </motion.div>

              <motion.div
                className="bg-card p-8 rounded-xl border shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <h3 className="text-xl font-bold mb-4 text-green-600">Tech-Adopting Farmer</h3>
                <div className="aspect-square w-24 h-24 bg-green-100 rounded-full mb-4 flex items-center justify-center">
                  <span className="text-2xl">👩‍🌾</span>
                </div>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Age: 25-45 years</li>
                  <li>• Open to innovation</li>
                  <li>• Smartphone user</li>
                  <li>• Data-driven approach</li>
                </ul>
              </motion.div>
            </div>

            {/* Key Pain Points */}
            <motion.div
              className="bg-card p-8 rounded-xl border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center">Key Pain Points Identified</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { point: "Water scarcity & soil salinity", frequency: "95%" },
                  { point: "Climate unpredictability", frequency: "88%" },
                  { point: "Labor shortages", frequency: "72%" },
                  { point: "Lack of access to government schemes", frequency: "65%" }
                ].map((pain, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center justify-between p-4 bg-red-50 rounded-lg"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <span className="text-foreground">{pain.point}</span>
                    <span className="font-bold text-red-600">{pain.frequency}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Problem Definition */}
        <section id="problem" className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
                Defining the Problem
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                From research insights to focused problem statements
              </p>
            </motion.div>

            {/* How Might We Questions */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8">How Might We...</h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Help farmers manage water efficiently with real-time data?",
                  "Make tech adoption easier for older, traditional farmers?",
                  "Connect farmers to government schemes and subsidies?",
                  "Provide actionable insights for sustainable farming?"
                ].map((question, index) => (
                  <motion.div
                    key={index}
                    className="bg-yellow-50 p-6 rounded-xl border-l-4 border-yellow-400"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-foreground font-medium">{question}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Ideation & Concept Development */}
        <section id="ideation" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
                Ideation & Concepts
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Collaborative brainstorming led to innovative solutions
              </p>
            </motion.div>

            {/* Ideas Grid */}
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { 
                  title: "IoT Soil Sensors", 
                  desc: "Real-time monitoring of soil moisture and nutrients",
                  votes: 8,
                  icon: "🌱"
                },
                { 
                  title: "Farmer Education App", 
                  desc: "Mobile platform for learning and community support",
                  votes: 12,
                  icon: "📱"
                },
                { 
                  title: "Water Management System", 
                  desc: "Smart irrigation and rainwater harvesting",
                  votes: 10,
                  icon: "💧"
                }
              ].map((idea, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-xl border shadow-sm text-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-4xl mb-4">{idea.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">{idea.title}</h3>
                  <p className="text-muted-foreground mb-4">{idea.desc}</p>
                  <div className="flex items-center justify-center">
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {idea.votes} votes
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Strategy & Prioritization */}
        <section id="strategy" className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
                Strategy & Prioritization
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Strategic thinking to focus on high-impact solutions
              </p>
            </motion.div>

            {/* Impact vs Effort Matrix */}
            <motion.div
              className="bg-card p-8 rounded-xl border shadow-sm max-w-4xl mx-auto mb-16"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center mb-8">Impact vs Effort Matrix</h3>
              <div className="aspect-square max-w-md mx-auto relative bg-gradient-to-tr from-red-100 via-yellow-100 to-green-100 rounded-lg p-4">
                <div className="absolute top-2 left-1/2 transform -translate-x-1/2 text-sm font-medium">High Impact</div>
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-sm font-medium">Low Impact</div>
                <div className="absolute left-2 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-medium">Low Effort</div>
                <div className="absolute right-2 top-1/2 transform -translate-y-1/2 rotate-90 text-sm font-medium">High Effort</div>
                
                {/* Solution positions */}
                <div className="absolute top-8 left-8 bg-green-500 text-white px-2 py-1 rounded text-xs font-medium">
                  Mobile App
                </div>
                <div className="absolute top-16 right-8 bg-yellow-500 text-white px-2 py-1 rounded text-xs font-medium">
                  IoT Sensors
                </div>
                <div className="absolute bottom-8 left-16 bg-red-500 text-white px-2 py-1 rounded text-xs font-medium">
                  Infrastructure
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Demo Section - Core Focus */}
        <section id="demo" className="py-20 bg-gradient-to-br from-green-600 to-blue-600">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-white mb-6">
                Farmer Application Demo
              </h2>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Experience the solution that puts powerful farming insights in farmers' hands
              </p>
            </motion.div>

            {/* Demo Video/Screenshots */}
            <div className="max-w-6xl mx-auto">
              <motion.div
                className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-card h-full flex items-center justify-center relative">
                  <EditableImage 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Farmer app demo interface"
                    className="w-full h-full"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <Button 
                      size="lg"
                      className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg"
                    >
                      <Play className="mr-2" size={24} />
                      Watch Full Demo
                    </Button>
                  </div>
                </div>
              </motion.div>

              {/* App Features */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {[
                  { 
                    title: "Dashboard", 
                    desc: "Real-time soil moisture and weather data",
                    icon: "📊"
                  },
                  { 
                    title: "Smart Alerts", 
                    desc: "Irrigation reminders and weather warnings",
                    icon: "🔔"
                  },
                  { 
                    title: "Government Schemes", 
                    desc: "Easy access to subsidies and programs",
                    icon: "🏛️"
                  },
                  { 
                    title: "Learning Hub", 
                    desc: "Organic farming tips and best practices",
                    icon: "📚"
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center text-white"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="text-3xl mb-3">{feature.icon}</div>
                    <h3 className="font-bold mb-2">{feature.title}</h3>
                    <p className="text-sm text-white/80">{feature.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Recommended Practices */}
        <section id="practices" className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
                Sustainable Practices
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Evidence-based recommendations for sustainable farming
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  title: "Organic Farming",
                  practices: ["Vermicomposting", "Natural fertilizers", "Crop rotation"],
                  icon: "🌿",
                  color: "green"
                },
                {
                  title: "Water Management", 
                  practices: ["Rainwater harvesting", "Drip irrigation", "Drought-resistant crops"],
                  icon: "💧",
                  color: "blue"
                },
                {
                  title: "Community Building",
                  practices: ["Expert networks", "Knowledge sharing", "Collective buying"],
                  icon: "🤝",
                  color: "purple"
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-xl border shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-center mb-4">
                    <div className="text-4xl mb-2">{category.icon}</div>
                    <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.practices.map((practice, i) => (
                      <li key={i} className="flex items-center text-muted-foreground">
                        <CheckCircle className="text-green-500 mr-2" size={16} />
                        {practice}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Outcomes & Reflections */}
        <section id="outcomes" className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
                Outcomes & Impact
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Measuring success through user feedback and adoption metrics
              </p>
            </motion.div>

            {/* Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { number: "89%", label: "User Satisfaction" },
                { number: "156", label: "App Downloads" },
                { number: "23%", label: "Water Savings" },
                { number: "4.8/5", label: "App Rating" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-card p-6 rounded-xl border shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{metric.number}</div>
                  <div className="text-muted-foreground">{metric.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Testimonials */}
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div
                className="bg-card p-6 rounded-xl border shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">👨‍🌾</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Rajesh Kumar</h4>
                    <p className="text-sm text-muted-foreground">Farmer, Punjab</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "This app has changed how I manage my farm. The water alerts saved my crops during the dry season."
                </p>
              </motion.div>

              <motion.div
                className="bg-card p-6 rounded-xl border shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4">
                    <span className="text-xl">👩‍🌾</span>
                  </div>
                  <div>
                    <h4 className="font-semibold">Priya Sharma</h4>
                    <p className="text-sm text-muted-foreground">Farmer, Haryana</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic">
                  "Finally got access to government schemes I never knew existed. The app made it so simple!"
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Call to Action */}
        <section className="py-20 bg-gradient-to-r from-green-600 to-blue-600">
          <div className="container mx-auto px-4 md:px-6 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-4xl font-bold text-white mb-6">
                Let's Co-create the Future of Agriculture
              </h2>
              <p className="text-xl text-white/90 mb-8 max-w-3xl mx-auto">
                Ready to innovate with purpose? Let's design solutions that make a real difference.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button 
                  size="lg"
                  className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg"
                  onClick={() => navigate('/contact')}
                >
                  Start a Project
                </Button>
                <Button 
                  variant="outline"
                  size="lg"
                  className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg"
                >
                  <Download className="mr-2" size={20} />
                  Research Summary
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

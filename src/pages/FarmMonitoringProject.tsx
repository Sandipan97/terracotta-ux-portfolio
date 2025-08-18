
import { motion } from 'framer-motion';
import { ArrowLeft, Play, Download, Users, Droplets, Sun, Wrench, ChevronDown, ExternalLink, CheckCircle, Target, Search, Lightbulb, Clock, MapPin, Smartphone, BarChart3, TrendingUp } from 'lucide-react';
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
    { id: 'overview', label: 'Project Overview' },
    { id: 'research', label: 'Research & Insights' },
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
        {/* Hero Section - Enhanced with Prominent Demo Video */}
        <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-yellow-50">
          {/* Enhanced Animated Background - Crop fields to digital dashboards */}
          <div className="absolute inset-0 overflow-hidden">
            <motion.div 
              className="absolute top-10 left-10 w-32 h-32 bg-green-300/20 rounded-full blur-xl"
              animate={{ 
                x: [0, 100, 0], 
                y: [0, -50, 0],
                scale: [1, 1.3, 1]
              }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-20 right-10 w-40 h-40 bg-blue-300/20 rounded-full blur-xl"
              animate={{ 
                x: [0, -80, 0], 
                y: [0, 30, 0],
                scale: [1.2, 1, 1.2]
              }}
              transition={{ duration: 25, repeat: Infinity }}
            />
            <motion.div 
              className="absolute top-1/2 left-1/4 w-24 h-24 bg-yellow-300/15 rounded-full blur-lg"
              animate={{ 
                rotate: [0, 360],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 15, repeat: Infinity }}
            />
            
            {/* Floating sticky notes animation */}
            <motion.div
              className="absolute top-20 right-1/4 w-16 h-16 bg-yellow-200/30 rounded-lg transform rotate-12"
              animate={{
                y: [0, -20, 0],
                rotate: [12, 18, 12]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-40 left-1/3 w-12 h-12 bg-green-200/30 rounded-lg transform -rotate-6"
              animate={{
                y: [0, 15, 0],
                rotate: [-6, -12, -6]
              }}
              transition={{ duration: 10, repeat: Infinity }}
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

          {/* Enhanced Hero Content */}
          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center max-w-6xl mx-auto"
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
                <Badge className="bg-purple-100 text-purple-800 border-purple-200">
                  🔬 Research-Driven
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
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-4 text-lg shadow-lg hover:shadow-xl transition-all duration-300 animate-pulse"
                >
                  <Play className="mr-2" size={24} />
                  ▶ Watch the Demo
                </Button>
              </motion.div>

              {/* Enhanced Demo Preview with Looping Video Concept */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.8 }}
                className="relative max-w-5xl mx-auto"
              >
                <div className="aspect-video rounded-2xl overflow-hidden shadow-2xl bg-card border relative">
                  <EditableImage 
                    src="https://images.unsplash.com/photo-1605000797499-95a51c5269ae?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Smart farming app interface showing real-time data"
                    className="w-full h-full"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-center justify-center">
                    <Button 
                      variant="outline" 
                      size="lg"
                      className="bg-white/20 backdrop-blur-sm border-white/30 text-white hover:bg-white/30 pulse"
                      onClick={() => setActiveDemo(true)}
                    >
                      <Play className="mr-2" size={24} />
                      ▶ Play Demo Video
                    </Button>
                  </div>
                  {/* Demo loop indicator */}
                  <div className="absolute top-4 right-4 bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium animate-bounce">
                    Live Demo ●
                  </div>
                </div>
                <div className="absolute -bottom-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  2 min demo
                </div>
              </motion.div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Project Overview with Timeline */}
        <section id="overview" className="py-20 bg-background relative overflow-hidden">
          {/* Workshop timeline background elements */}
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(34,197,94)_1px,_transparent_0)] bg-[size:30px_30px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
                Project Overview
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Transforming agricultural challenges through human-centered design and technology innovation
              </p>
            </motion.div>

            {/* Enhanced Challenge Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {[
                { icon: Droplets, title: "Water Scarcity", desc: "Limited irrigation access and unpredictable rainfall patterns affecting 95% of farmers", color: "blue", stat: "95%" },
                { icon: Sun, title: "Climate Change", desc: "Extreme weather events and shifting seasonal patterns impacting crop yields", color: "orange", stat: "88%" },
                { icon: Users, title: "Labor Shortages", desc: "Aging workforce and youth migration to urban areas reducing farm productivity", color: "purple", stat: "72%" },
                { icon: Wrench, title: "Tech Access", desc: "Limited exposure to modern farming technologies and government schemes", color: "green", stat: "65%" }
              ].map((challenge, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-lg transition-all duration-300 group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className={`w-12 h-12 bg-${challenge.color}-100 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <challenge.icon className={`text-${challenge.color}-600`} size={24} />
                  </div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-semibold text-foreground">{challenge.title}</h3>
                    <span className={`text-${challenge.color}-600 font-bold text-lg`}>{challenge.stat}</span>
                  </div>
                  <p className="text-muted-foreground text-sm">{challenge.desc}</p>
                </motion.div>
              ))}
            </div>

            {/* Workshop Timeline */}
            <motion.div
              className="mb-16"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center mb-8">Design Thinking Workshop Timeline</h3>
              <div className="relative">
                <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-green-500 to-blue-500 rounded-full"></div>
                <div className="space-y-8">
                  {[
                    { phase: "Empathize", time: "Week 1-2", desc: "20+ farmer interviews and field observations", icon: "🤝" },
                    { phase: "Define", time: "Week 3", desc: "Problem synthesis and persona development", icon: "🎯" },
                    { phase: "Ideate", time: "Week 4", desc: "Brainstorming and concept generation", icon: "💡" },
                    { phase: "Prototype", time: "Week 5", desc: "App wireframes and demo creation", icon: "📱" },
                    { phase: "Test", time: "Week 6", desc: "User feedback and iteration", icon: "🧪" }
                  ].map((phase, index) => (
                    <motion.div
                      key={index}
                      className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} gap-8`}
                      initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.2 }}
                      viewport={{ once: true }}
                    >
                      <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'text-left'}`}>
                        <div className="bg-card p-4 rounded-lg border shadow-sm">
                          <div className="flex items-center gap-2 mb-2">
                            <span className="text-2xl">{phase.icon}</span>
                            <h4 className="font-semibold text-lg">{phase.phase}</h4>
                          </div>
                          <p className="text-sm text-muted-foreground mb-1">{phase.desc}</p>
                          <span className="text-xs font-medium text-green-600">{phase.time}</span>
                        </div>
                      </div>
                      <div className="w-4 h-4 bg-green-500 rounded-full border-4 border-background shadow-lg z-10"></div>
                      <div className="flex-1"></div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Enhanced Goal Statement */}
            <motion.div
              className="bg-gradient-to-r from-green-500 to-blue-500 rounded-2xl p-8 md:p-12 text-center text-white"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Target className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl md:text-3xl font-bold mb-4">Our Mission</h3>
              <p className="text-xl leading-relaxed max-w-4xl mx-auto">
                Use design thinking to create a <strong>tech-enabled, research-driven solution</strong> that improves productivity and sustainability for small-scale farmers while preserving traditional knowledge
              </p>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Empathy & Research Insights */}
        <section id="research" className="py-20 bg-muted/30 relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(59,130,246)_1px,_transparent_0)] bg-[size:25px_25px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-4">
                <Search className="w-8 h-8 text-blue-600 mr-2" />
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground">
                  Research & Insights
                </h2>
              </div>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Deep empathy research with 20+ farmers revealed critical pain points and opportunities for innovation
              </p>
            </motion.div>

            {/* Enhanced Research Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { number: "20+", label: "Farmer Interviews", icon: "🎤" },
                { number: "5", label: "Field Visits", icon: "🚜" },
                { number: "3", label: "User Personas", icon: "👥" },
                { number: "12", label: "Key Insights", icon: "💡" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-card p-6 rounded-xl border shadow-sm"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.05 }}
                >
                  <div className="text-2xl mb-2">{stat.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2">{stat.number}</div>
                  <div className="text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced User Personas with Empathy Maps */}
            <div className="mb-16">
              <h3 className="text-2xl font-bold text-center mb-8">User Personas & Empathy Maps</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <motion.div
                  className="bg-card p-8 rounded-xl border shadow-sm relative overflow-hidden"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-400 to-red-400"></div>
                  <h3 className="text-xl font-bold mb-4 text-orange-600 flex items-center">
                    👨‍🌾 Traditional Farmer (Rajesh, 55)
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">Thinks & Feels</h4>
                      <ul className="text-xs space-y-1">
                        <li>"Weather is getting unpredictable"</li>
                        <li>"Technology seems complicated"</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">Sees</h4>
                      <ul className="text-xs space-y-1">
                        <li>Neighboring farms struggling</li>
                        <li>Youth leaving agriculture</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">Pain Points</h4>
                      <ul className="text-xs space-y-1">
                        <li>Water scarcity issues</li>
                        <li>Limited tech knowledge</li>
                      </ul>
                    </div>
                    <div className="bg-orange-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">Gains</h4>
                      <ul className="text-xs space-y-1">
                        <li>Better crop yields</li>
                        <li>Reduced uncertainty</li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Quote:</strong> <em>"I want to learn new methods, but they should be simple to understand and use."</em>
                  </div>
                </motion.div>

                <motion.div
                  className="bg-card p-8 rounded-xl border shadow-sm relative overflow-hidden"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  viewport={{ once: true }}
                >
                  <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-green-400 to-blue-400"></div>
                  <h3 className="text-xl font-bold mb-4 text-green-600 flex items-center">
                    👩‍🌾 Tech-Adopting Farmer (Priya, 32)
                  </h3>
                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">Thinks & Feels</h4>
                      <ul className="text-xs space-y-1">
                        <li>"Technology can solve problems"</li>
                        <li>"Need data-driven decisions"</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">Sees</h4>
                      <ul className="text-xs space-y-1">
                        <li>Successful tech adoption stories</li>
                        <li>Government digital initiatives</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">Pain Points</h4>
                      <ul className="text-xs space-y-1">
                        <li>Fragmented information sources</li>
                        <li>Complex government processes</li>
                      </ul>
                    </div>
                    <div className="bg-green-50 p-3 rounded-lg">
                      <h4 className="font-semibold text-sm mb-2">Gains</h4>
                      <ul className="text-xs space-y-1">
                        <li>Integrated solutions</li>
                        <li>Real-time insights</li>
                      </ul>
                    </div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    <strong>Quote:</strong> <em>"I need one app that gives me all the information I need to make smart farming decisions."</em>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Enhanced Pain Points with Bar Chart */}
            <motion.div
              className="bg-card p-8 rounded-xl border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold mb-6 text-center flex items-center justify-center">
                <BarChart3 className="mr-2" />
                Key Pain Points Frequency Analysis
              </h3>
              <div className="space-y-4">
                {[
                  { point: "Water scarcity & soil salinity", frequency: 95, color: "bg-red-500" },
                  { point: "Climate unpredictability", frequency: 88, color: "bg-orange-500" },
                  { point: "Labor shortages", frequency: 72, color: "bg-yellow-500" },
                  { point: "Lack of access to government schemes", frequency: 65, color: "bg-blue-500" }
                ].map((pain, index) => (
                  <motion.div
                    key={index}
                    className="space-y-2"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex justify-between items-center">
                      <span className="text-foreground font-medium">{pain.point}</span>
                      <span className="font-bold text-red-600">{pain.frequency}%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-3">
                      <motion.div
                        className={`h-3 rounded-full ${pain.color}`}
                        initial={{ width: 0 }}
                        whileInView={{ width: `${pain.frequency}%` }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        viewport={{ once: true }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Problem Definition with Sticky Notes */}
        <section id="problem" className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(251,191,36)_1px,_transparent_0)] bg-[size:20px_20px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
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
                From research insights to focused problem statements through collaborative synthesis
              </p>
            </motion.div>

            {/* Sticky Note Grid with Animation */}
            <div className="mb-12">
              <h3 className="text-2xl font-bold text-center mb-8">Problem Synthesis Workshop</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { note: "Water is scarce", color: "bg-yellow-200", rotation: "rotate-2" },
                  { note: "Weather unpredictable", color: "bg-blue-200", rotation: "-rotate-1" },
                  { note: "Youth leaving farms", color: "bg-pink-200", rotation: "rotate-3" },
                  { note: "Tech seems complex", color: "bg-green-200", rotation: "-rotate-2" },
                  { note: "No government help", color: "bg-purple-200", rotation: "rotate-1" },
                  { note: "Traditional methods failing", color: "bg-orange-200", rotation: "-rotate-3" },
                  { note: "Need simple solutions", color: "bg-red-200", rotation: "rotate-2" },
                  { note: "Want data insights", color: "bg-indigo-200", rotation: "-rotate-1" }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className={`${item.color} p-4 rounded-lg shadow-md ${item.rotation} hover:rotate-0 transition-transform cursor-pointer`}
                    initial={{ opacity: 0, scale: 0.8, rotate: 0 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: parseInt(item.rotation.replace(/[^\d-]/g, '')) }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.1, rotate: 0, zIndex: 10 }}
                  >
                    <p className="text-sm font-medium text-gray-800">{item.note}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* How Might We Questions */}
            <div className="max-w-4xl mx-auto">
              <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center">
                <Lightbulb className="mr-2 text-yellow-500" />
                How Might We...
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  "Help farmers manage water efficiently with real-time data and smart irrigation alerts?",
                  "Make tech adoption easier for older, traditional farmers through intuitive design?",
                  "Connect farmers to government schemes and subsidies with simplified processes?",
                  "Provide actionable insights for sustainable farming through integrated platforms?"
                ].map((question, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-br from-yellow-50 to-orange-50 p-6 rounded-xl border-l-4 border-yellow-400 shadow-sm hover:shadow-md transition-all"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ x: 5 }}
                  >
                    <p className="text-foreground font-medium">{question}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Ideation with Sketch Carousel */}
        <section id="ideation" className="py-20 bg-muted/30 relative overflow-hidden">
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
                Collaborative brainstorming sessions generated innovative solutions through structured creativity
              </p>
            </motion.div>

            {/* Enhanced Ideas Grid with Voting Animation */}
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                { 
                  title: "IoT Soil Sensors", 
                  desc: "Real-time monitoring of soil moisture, pH, and nutrients with automated alerts",
                  votes: 8,
                  icon: "🌱",
                  priority: "Medium"
                },
                { 
                  title: "Farmer Education App", 
                  desc: "Mobile platform for learning, community support, and expert consultation",
                  votes: 12,
                  icon: "📱",
                  priority: "High"
                },
                { 
                  title: "Water Management System", 
                  desc: "Smart irrigation scheduling and rainwater harvesting optimization",
                  votes: 10,
                  icon: "💧",
                  priority: "High"
                }
              ].map((idea, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-xl border shadow-sm text-center hover:shadow-lg transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{idea.icon}</div>
                  <h3 className="font-bold text-foreground mb-2">{idea.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm">{idea.desc}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-1">
                      {Array.from({ length: idea.votes }, (_, i) => (
                        <motion.div
                          key={i}
                          className="w-2 h-2 bg-blue-500 rounded-full"
                          initial={{ scale: 0 }}
                          whileInView={{ scale: 1 }}
                          transition={{ duration: 0.2, delay: i * 0.05 }}
                          viewport={{ once: true }}
                        />
                      ))}
                    </div>
                    <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                      idea.priority === 'High' ? 'bg-green-100 text-green-800' : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {idea.priority}
                    </span>
                  </div>
                  <div className="mt-2 text-sm text-muted-foreground">
                    {idea.votes} votes
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Sketch Carousel Concept */}
            <motion.div
              className="bg-card p-6 rounded-xl border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-xl font-bold mb-4 text-center">Workshop Sketches & Concepts</h3>
              <div className="aspect-video bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl mb-2">✏️</div>
                  <p className="text-muted-foreground">Interactive sketch carousel from FigJam brainstorming session</p>
                  <Button variant="outline" className="mt-4">
                    <ExternalLink className="mr-2" size={16} />
                    View Full Workshop Board
                  </Button>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Strategy & Prioritization */}
        <section id="strategy" className="py-20 bg-background relative overflow-hidden">
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
                Strategic thinking to focus on high-impact solutions through systematic evaluation
              </p>
            </motion.div>

            {/* Enhanced Impact vs Effort Matrix */}
            <motion.div
              className="bg-card p-8 rounded-xl border shadow-sm max-w-5xl mx-auto mb-16"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center mb-8">Impact vs Effort Matrix</h3>
              <div className="aspect-square max-w-lg mx-auto relative bg-gradient-to-tr from-red-100 via-yellow-100 to-green-100 rounded-lg p-8">
                <div className="absolute top-4 left-1/2 transform -translate-x-1/2 text-sm font-medium">High Impact</div>
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-sm font-medium">Low Impact</div>
                <div className="absolute left-4 top-1/2 transform -translate-y-1/2 -rotate-90 text-sm font-medium">Low Effort</div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 rotate-90 text-sm font-medium">High Effort</div>
                
                {/* Solution positions with enhanced interactivity */}
                <motion.div 
                  className="absolute top-12 left-12 bg-green-500 text-white px-3 py-2 rounded-lg text-sm font-medium cursor-pointer shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                >
                  📱 Mobile App
                  <div className="text-xs mt-1">Quick Win!</div>
                </motion.div>
                <motion.div 
                  className="absolute top-20 right-12 bg-yellow-500 text-white px-3 py-2 rounded-lg text-sm font-medium cursor-pointer shadow-lg"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                >
                  🌱 IoT Sensors
                  <div className="text-xs mt-1">Future Phase</div>
                </motion.div>
                <motion.div 
                  className="absolute bottom-12 left-20 bg-red-500 text-white px-3 py-2 rounded-lg text-sm font-medium cursor-pointer shadow-lg"
                  whileHover={{ scale: 1.1, rotate: 1 }}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                >
                  🏗️ Infrastructure
                  <div className="text-xs mt-1">Long-term</div>
                </motion.div>
              </div>
            </motion.div>

            {/* Journey Map */}
            <motion.div
              className="bg-card p-8 rounded-xl border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center mb-8">Farmer Journey Map</h3>
              <div className="relative">
                <div className="flex justify-between items-center mb-8">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-red-600 font-bold">1</span>
                    </div>
                    <h4 className="font-semibold text-sm">Problem Awareness</h4>
                    <p className="text-xs text-muted-foreground">Water shortage hits</p>
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-red-200 to-yellow-200 mx-4"></div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-yellow-600 font-bold">2</span>
                    </div>
                    <h4 className="font-semibold text-sm">Seeking Solutions</h4>
                    <p className="text-xs text-muted-foreground">Looking for help</p>
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-yellow-200 to-green-200 mx-4"></div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-green-600 font-bold">3</span>
                    </div>
                    <h4 className="font-semibold text-sm">App Discovery</h4>
                    <p className="text-xs text-muted-foreground">Finds our solution</p>
                  </div>
                  <div className="flex-1 h-1 bg-gradient-to-r from-green-200 to-blue-200 mx-4"></div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mb-2">
                      <span className="text-blue-600 font-bold">4</span>
                    </div>
                    <h4 className="font-semibold text-sm">Success</h4>
                    <p className="text-xs text-muted-foreground">Better harvests</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Demo Section - Core Focus */}
        <section id="demo" className="py-20 bg-gradient-to-br from-green-600 via-blue-600 to-purple-600 relative overflow-hidden">
          {/* Enhanced background animations */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-xl"
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
                scale: [1, 1.2, 1]
              }}
              transition={{ duration: 20, repeat: Infinity }}
            />
            <motion.div
              className="absolute bottom-20 right-20 w-80 h-80 bg-white/5 rounded-full blur-2xl"
              animate={{
                x: [0, -60, 0],
                y: [0, 40, 0],
                scale: [1.1, 1, 1.1]
              }}
              transition={{ duration: 25, repeat: Infinity }}
            />
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <div className="flex items-center justify-center mb-4">
                <Smartphone className="w-8 h-8 text-white mr-2" />
                <h2 className="font-heading text-3xl md:text-5xl font-bold text-white">
                  Farmer Application Demo
                </h2>
              </div>
              <p className="text-xl text-white/90 max-w-3xl mx-auto">
                Experience the solution that puts powerful farming insights directly in farmers' hands
              </p>
            </motion.div>

            {/* Enhanced Demo Video/Screenshots */}
            <div className="max-w-7xl mx-auto">
              <motion.div
                className="aspect-video rounded-2xl overflow-hidden shadow-2xl mb-12 relative"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="bg-card h-full flex items-center justify-center relative">
                  <EditableImage 
                    src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
                    alt="Farmer app demo interface showing dashboard"
                    className="w-full h-full"
                    objectFit="cover"
                  />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center group">
                    <Button 
                      size="lg"
                      className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg shadow-xl group-hover:scale-110 transition-all"
                    >
                      <Play className="mr-2" size={24} />
                      ▶ Watch Full Demo
                    </Button>
                  </div>
                  {/* Enhanced demo indicators */}
                  <div className="absolute top-4 left-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center animate-pulse">
                    <div className="w-2 h-2 bg-white rounded-full mr-2 animate-pulse"></div>
                    LIVE DEMO
                  </div>
                  <div className="absolute top-4 right-4 bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-medium">
                    2:30 Duration
                  </div>
                </div>
              </motion.div>

              {/* Enhanced App Features */}
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                {[
                  { 
                    title: "Smart Dashboard", 
                    desc: "Real-time soil moisture, weather data, and crop health monitoring",
                    icon: "📊",
                    features: ["Live data", "Visual charts", "Trend analysis"]
                  },
                  { 
                    title: "Intelligent Alerts", 
                    desc: "Irrigation reminders, weather warnings, and pest management alerts",
                    icon: "🔔",
                    features: ["Smart notifications", "Customizable alerts", "Emergency warnings"]
                  },
                  { 
                    title: "Government Connect", 
                    desc: "Direct access to subsidies, schemes, and agricultural programs",
                    icon: "🏛️",
                    features: ["Scheme finder", "Application tracker", "Document uploads"]
                  },
                  { 
                    title: "Learning Hub", 
                    desc: "Organic farming tips, best practices, and expert consultations",
                    icon: "📚",
                    features: ["Video tutorials", "Expert chat", "Community forum"]
                  }
                ].map((feature, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm p-6 rounded-xl text-center text-white border border-white/20 hover:bg-white/20 transition-all group"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -5 }}
                  >
                    <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">{feature.icon}</div>
                    <h3 className="font-bold mb-2 text-lg">{feature.title}</h3>
                    <p className="text-sm text-white/80 mb-4">{feature.desc}</p>
                    <div className="space-y-1">
                      {feature.features.map((item, i) => (
                        <div key={i} className="text-xs text-white/70 flex items-center justify-center">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          {item}
                        </div>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* App Screens Mockup */}
              <motion.div
                className="grid md:grid-cols-3 gap-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                {[
                  { screen: "Dashboard", desc: "Main interface with key metrics" },
                  { screen: "Alerts", desc: "Smart notifications system" },
                  { screen: "Learning", desc: "Educational content hub" }
                ].map((screen, index) => (
                  <motion.div
                    key={index}
                    className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20"
                    whileHover={{ scale: 1.02, y: -5 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="aspect-[9/16] bg-gradient-to-b from-gray-800 to-gray-900 rounded-lg mb-3 flex items-center justify-center">
                      <div className="text-white/60 text-center">
                        <Smartphone className="w-8 h-8 mx-auto mb-2" />
                        <p className="text-sm">{screen.screen} Screen</p>
                      </div>
                    </div>
                    <h4 className="text-white font-medium text-sm">{screen.screen}</h4>
                    <p className="text-white/70 text-xs">{screen.desc}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Enhanced Recommended Practices */}
        <section id="practices" className="py-20 bg-background relative overflow-hidden">
          <div className="absolute inset-0 opacity-5">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgb(34,197,94)_1px,_transparent_0)] bg-[size:25px_25px]"></div>
          </div>

          <div className="container mx-auto px-4 md:px-6 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="font-heading text-3xl md:text-5xl font-bold text-foreground mb-6">
                Sustainable Practices & Future Outlook
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Evidence-based recommendations for sustainable farming and community building
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {[
                {
                  title: "Organic Farming",
                  practices: [
                    "Vermicomposting techniques",
                    "Natural fertilizer preparation", 
                    "Crop rotation strategies",
                    "Pest management without chemicals",
                    "Soil health improvement methods"
                  ],
                  icon: "🌿",
                  color: "green",
                  impact: "30% cost reduction"
                },
                {
                  title: "Water Management", 
                  practices: [
                    "Rainwater harvesting systems",
                    "Drip irrigation optimization", 
                    "Drought-resistant crop varieties",
                    "Mulching techniques",
                    "Water storage solutions"
                  ],
                  icon: "💧",
                  color: "blue",
                  impact: "40% water savings"
                },
                {
                  title: "Community Building",
                  practices: [
                    "Expert consultation networks",
                    "Knowledge sharing platforms", 
                    "Collective buying programs",
                    "Farmer-to-farmer mentoring",
                    "Technology adoption support"
                  ],
                  icon: "🤝",
                  color: "purple",
                  impact: "80% faster learning"
                }
              ].map((category, index) => (
                <motion.div
                  key={index}
                  className="bg-card p-6 rounded-xl border shadow-sm hover:shadow-lg transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5 }}
                >
                  <div className="text-center mb-6">
                    <div className="text-5xl mb-3 group-hover:scale-110 transition-transform">{category.icon}</div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{category.title}</h3>
                    <div className={`inline-block px-3 py-1 bg-${category.color}-100 text-${category.color}-800 rounded-full text-sm font-medium`}>
                      {category.impact}
                    </div>
                  </div>
                  <ul className="space-y-3">
                    {category.practices.map((practice, i) => (
                      <motion.li 
                        key={i} 
                        className="flex items-start text-muted-foreground text-sm"
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <CheckCircle className="text-green-500 mr-2 mt-0.5 flex-shrink-0" size={16} />
                        {practice}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>

            {/* Future Outlook */}
            <motion.div
              className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-white text-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <TrendingUp className="w-12 h-12 mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Future Roadmap</h3>
              <div className="grid md:grid-cols-3 gap-6 mt-8">
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Phase 2: IoT Integration</h4>
                  <p className="text-sm text-white/80">Smart sensors for automated monitoring</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Phase 3: AI Predictions</h4>
                  <p className="text-sm text-white/80">Machine learning for crop optimization</p>
                </div>
                <div className="bg-white/10 p-4 rounded-lg">
                  <h4 className="font-semibold mb-2">Phase 4: Marketplace</h4>
                  <p className="text-sm text-white/80">Direct farmer-to-consumer platform</p>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Outcomes & Reflections */}
        <section id="outcomes" className="py-20 bg-muted/30 relative overflow-hidden">
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
                Measuring success through user feedback, adoption metrics, and real-world impact
              </p>
            </motion.div>

            {/* Enhanced Metrics */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
              {[
                { number: "89%", label: "User Satisfaction", icon: "😊", change: "+15%" },
                { number: "240", label: "App Downloads", icon: "📱", change: "+54%" },
                { number: "32%", label: "Water Savings", icon: "💧", change: "+9%" },
                { number: "4.8/5", label: "App Rating", icon: "⭐", change: "New!" }
              ].map((metric, index) => (
                <motion.div
                  key={index}
                  className="text-center bg-card p-6 rounded-xl border shadow-sm hover:shadow-lg transition-all group"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -5, scale: 1.02 }}
                >
                  <div className="text-2xl mb-2">{metric.icon}</div>
                  <div className="text-3xl md:text-4xl font-bold text-green-600 mb-2 group-hover:scale-110 transition-transform">{metric.number}</div>
                  <div className="text-muted-foreground mb-1">{metric.label}</div>
                  <div className="text-xs text-green-600 font-medium">{metric.change}</div>
                </motion.div>
              ))}
            </div>

            {/* Enhanced Testimonials */}
            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <motion.div
                className="bg-card p-6 rounded-xl border shadow-sm"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">👨‍🌾</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold">Rajesh Kumar</h4>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400">⭐</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Farmer, Punjab • 3 months of usage</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-2">
                  "This app has completely changed how I manage my farm. The water alerts saved my crops during the dry season, and I finally got access to government schemes I never knew existed."
                </p>
                <div className="text-xs text-green-600 font-medium">💧 Saved 40% water • 🏛️ Accessed 3 schemes</div>
              </motion.div>

              <motion.div
                className="bg-card p-6 rounded-xl border shadow-sm"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl">👩‍🌾</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <h4 className="font-semibold">Priya Sharma</h4>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <span key={i} className="text-yellow-400">⭐</span>
                        ))}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">Farmer, Haryana • 2 months of usage</p>
                  </div>
                </div>
                <p className="text-muted-foreground italic mb-2">
                  "The learning hub is amazing! I learned organic farming techniques that increased my yield by 25%. The community support feature connects me with experts whenever I need help."
                </p>
                <div className="text-xs text-green-600 font-medium">📈 +25% yield • 🌿 Went fully organic</div>
              </motion.div>
            </div>

            {/* Workshop Feedback */}
            <motion.div
              className="bg-card p-8 rounded-xl border shadow-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3 className="text-2xl font-bold text-center mb-8">Workshop Participant Feedback</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {[
                  { participant: "Dr. Anita Verma", role: "Agricultural Expert", feedback: "The human-centered approach really made a difference in understanding farmer needs." },
                  { participant: "Suresh Patel", role: "Tech Advocate", feedback: "Finally, a solution that farmers can actually use without extensive training!" },
                  { participant: "Maya Singh", role: "Design Researcher", feedback: "The empathy mapping sessions revealed insights we never would have discovered otherwise." }
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="text-center p-4 bg-muted/50 rounded-lg"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <p className="text-sm text-muted-foreground italic mb-3">"{item.feedback}"</p>
                    <h4 className="font-semibold text-sm">{item.participant}</h4>
                    <p className="text-xs text-muted-foreground">{item.role}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </section>

        {/* Enhanced Call to Action */}
        <section className="py-20 bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 relative overflow-hidden">
          {/* Background animation of crops growing into tech icons */}
          <div className="absolute inset-0">
            <motion.div
              className="absolute top-10 left-10 text-6xl opacity-20"
              animate={{
                rotate: [0, 10, 0],
                scale: [1, 1.1, 1]
              }}
              transition={{ duration: 8, repeat: Infinity }}
            >
              🌱
            </motion.div>
            <motion.div
              className="absolute bottom-10 right-10 text-6xl opacity-20"
              animate={{
                rotate: [0, -10, 0],
                scale: [1.1, 1, 1.1]
              }}
              transition={{ duration: 10, repeat: Infinity }}
            >
              📱
            </motion.div>
            <motion.div
              className="absolute top-1/2 left-1/4 text-4xl opacity-15"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 5, 0]
              }}
              transition={{ duration: 12, repeat: Infinity }}
            >
              💧
            </motion.div>
          </div>

          <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
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
                Ready to innovate with purpose? Let's design solutions that make a real difference in farmers' lives and create sustainable agricultural ecosystems.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    size="lg"
                    className="bg-white text-green-600 hover:bg-green-50 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all"
                    onClick={() => navigate('/contact')}
                  >
                    Start a Project
                  </Button>
                </motion.div>
                <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                  <Button 
                    variant="outline"
                    size="lg"
                    className="border-white text-white hover:bg-white hover:text-green-600 px-8 py-4 text-lg shadow-xl hover:shadow-2xl transition-all"
                  >
                    <Download className="mr-2" size={20} />
                    Research Summary PDF
                  </Button>
                </motion.div>
              </div>

              {/* Additional CTA elements */}
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <h3 className="text-white font-semibold mb-2">Design Thinking Workshops</h3>
                  <p className="text-white/80 text-sm">Human-centered design for agricultural innovation</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <h3 className="text-white font-semibold mb-2">Mobile App Development</h3>
                  <p className="text-white/80 text-sm">User-friendly solutions for farmers</p>
                </div>
                <div className="bg-white/10 backdrop-blur-sm p-4 rounded-lg border border-white/20">
                  <h3 className="text-white font-semibold mb-2">Research & Strategy</h3>
                  <p className="text-white/80 text-sm">Evidence-based agricultural solutions</p>
                </div>
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

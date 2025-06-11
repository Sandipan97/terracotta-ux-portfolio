
import { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowLeft, Download, ExternalLink, Users, Clock, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const WelbiltKitchenConnect = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const containerRef = useRef(null);
  const heroRef = useRef(null);
  const contentRef = useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const isHeroInView = useInView(heroRef, { threshold: 0.5 });
  const isContentInView = useInView(contentRef, { threshold: 0.1 });

  // Transform background color based on scroll
  const backgroundColor = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["hsl(var(--background))", "#0056B3"]
  );

  const textColor = useTransform(
    scrollYProgress,
    [0, 0.3],
    ["hsl(var(--foreground))", "#ffffff"]
  );

  // Parallax effects
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  // Counter animation values
  const [counters, setCounters] = useState({
    products: 0,
    delivery: 0,
    dau: 0,
    downtime: 0
  });

  useEffect(() => {
    if (isHeroInView) {
      const timer = setTimeout(() => {
        setCounters({
          products: 12,
          delivery: 40,
          dau: 25,
          downtime: 30
        });
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isHeroInView]);

  const projectStats = [
    { label: "Role", value: "Lead UX Designer", icon: Users },
    { label: "Timeline", value: "6 months", icon: Clock },
    { label: "Impact", value: "25% DAU increase", icon: TrendingUp }
  ];

  const beforeAfterFeatures = [
    {
      title: "User Management",
      before: "5-step form with multiple pages",
      after: "Drag-drop org tree interface",
      improvement: "75% faster setup"
    },
    {
      title: "SmartTag Dashboard",
      before: "Legacy list view with static data",
      after: "IoT status with real-time pulse indicators",
      improvement: "Real-time monitoring"
    },
    {
      title: "Error Resolution",
      before: "Manual troubleshooting guides",
      after: "Interactive playbook with guided workflows",
      improvement: "60% faster resolution"
    }
  ];

  return (
    <motion.div 
      ref={containerRef}
      className="min-h-screen relative overflow-hidden"
      style={{ backgroundColor }}
    >
      {/* Navigation */}
      <div className="fixed top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      {/* Hero Section */}
      <motion.section 
        ref={heroRef}
        className="min-h-screen flex items-center justify-center relative pt-20"
        style={{ y, opacity }}
      >
        {/* Parallax Background Elements */}
        <motion.div 
          className="absolute inset-0 overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.1 }}
          transition={{ duration: 2 }}
        >
          {/* Kitchen Equipment Silhouettes */}
          <motion.div
            className="absolute top-20 left-10 w-32 h-32 bg-current opacity-10"
            animate={{ 
              y: [0, -20, 0],
              rotate: [0, 5, 0]
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            style={{ 
              clipPath: "polygon(20% 0%, 80% 0%, 100% 20%, 100% 80%, 80% 100%, 20% 100%, 0% 80%, 0% 20%)" 
            }}
          />
          <motion.div
            className="absolute bottom-20 right-20 w-24 h-40 bg-current opacity-10"
            animate={{ 
              y: [0, 15, 0],
              rotate: [0, -3, 0]
            }}
            transition={{ 
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2
            }}
            style={{ 
              clipPath: "polygon(30% 0%, 70% 0%, 100% 30%, 70% 100%, 30% 100%, 0% 30%)" 
            }}
          />
        </motion.div>

        <div className="container mx-auto px-4 md:px-6 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <motion.h1 
              className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
              style={{ color: textColor }}
            >
              Welbilt Kitchen
              <span className="block text-[#00B140]">Connect</span>
            </motion.h1>
            <motion.p 
              className="text-xl md:text-2xl mb-8 max-w-3xl mx-auto opacity-90"
              style={{ color: textColor }}
            >
              Transforming enterprise kitchen management through intuitive design and scalable systems
            </motion.p>
          </motion.div>

          {/* Animated Stats Counter */}
          <motion.div 
            className="flex justify-center items-center space-x-8 mb-12"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <motion.div 
              className="text-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-[#00B140]"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                {counters.products}
              </motion.div>
              <div className="text-sm opacity-80" style={{ color: textColor }}>products</div>
            </motion.div>
            <Separator orientation="vertical" className="h-12 bg-current opacity-30" />
            <motion.div 
              className="text-center"
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
            >
              <motion.div 
                className="text-3xl md:text-4xl font-bold text-[#00B140]"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 1.5, repeat: Infinity, delay: 0.5 }}
              >
                {counters.delivery}%
              </motion.div>
              <div className="text-sm opacity-80" style={{ color: textColor }}>faster delivery</div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <Link to="/projects">
              <Button variant="outline" className="mb-8 border-current text-current hover:bg-current hover:text-background">
                <ArrowLeft className="w-4 h-4 mr-2" />
                Back to Projects
              </Button>
            </Link>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Section with Welbilt Brand Colors */}
      <motion.div 
        ref={contentRef}
        className="relative z-10 bg-background text-foreground"
        initial={{ opacity: 0 }}
        animate={{ opacity: isContentInView ? 1 : 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Project Snapshot */}
        <section className="py-20 bg-gradient-to-b from-[#0056B3] to-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-white"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Project Snapshot
            </motion.h2>
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              initial="hidden"
              whileInView="show"
              variants={{
                hidden: { opacity: 0 },
                show: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.2
                  }
                }
              }}
              viewport={{ once: true }}
            >
              {projectStats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  variants={{
                    hidden: { opacity: 0, y: 50 },
                    show: { opacity: 1, y: 0 }
                  }}
                  transition={{ duration: 0.6 }}
                >
                  <Card className="bg-white/10 backdrop-blur-md border-white/20 text-white hover:bg-white/20 transition-all duration-300">
                    <CardContent className="p-6 text-center">
                      <stat.icon className="w-12 h-12 mx-auto mb-4 text-[#00B140]" />
                      <h3 className="text-lg font-semibold mb-2">{stat.label}</h3>
                      <p className="text-2xl font-bold text-[#00B140]">{stat.value}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Design System Hub */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12 text-foreground"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Design System Hub
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Tabs defaultValue="components" className="w-full">
                <TabsList className="grid w-full grid-cols-3 mb-8">
                  <TabsTrigger value="components">Customized Components</TabsTrigger>
                  <TabsTrigger value="tokens">Token System</TabsTrigger>
                  <TabsTrigger value="governance">Governance</TabsTrigger>
                </TabsList>
                
                <TabsContent value="components" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card className="group hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4 text-[#0056B3]">Before: Material UI Base</h3>
                        <div className="bg-gray-100 p-4 rounded-lg mb-4 border-2 border-dashed border-gray-300">
                          <div className="w-full h-10 bg-blue-500 rounded text-white flex items-center justify-center text-sm">
                            Standard MUI Button
                          </div>
                        </div>
                        <p className="text-sm text-muted-foreground">Generic Material UI components</p>
                      </CardContent>
                    </Card>
                    
                    <Card className="group hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4 text-[#00B140]">After: Welbilt Customized</h3>
                        <div className="bg-gradient-to-r from-[#0056B3] to-[#00B140] p-4 rounded-lg mb-4 shadow-lg">
                          <motion.div 
                            className="w-full h-10 bg-white rounded text-[#0056B3] flex items-center justify-center text-sm font-medium shadow-md"
                            whileHover={{ scale: 1.02, y: -1 }}
                            transition={{ duration: 0.2 }}
                          >
                            Welbilt Action Button
                          </motion.div>
                        </div>
                        <p className="text-sm text-muted-foreground">Brand-aligned with enterprise aesthetics</p>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="tokens" className="space-y-8">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4">Color Palette</h3>
                        <div className="space-y-3">
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-[#0056B3]"></div>
                            <span className="text-sm font-mono">#0056B3 - Primary Blue</span>
                          </div>
                          <div className="flex items-center space-x-3">
                            <div className="w-8 h-8 rounded-full bg-[#00B140]"></div>
                            <span className="text-sm font-mono">#00B140 - Success Green</span>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardContent className="p-6">
                        <h3 className="text-xl font-bold mb-4">Typography Scale</h3>
                        <div className="space-y-3">
                          <div className="text-2xl font-bold">Heading 1</div>
                          <div className="text-xl font-semibold">Heading 2</div>
                          <div className="text-base">Body Text</div>
                          <div className="text-sm text-muted-foreground">Caption</div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                </TabsContent>
                
                <TabsContent value="governance" className="space-y-8">
                  <Card>
                    <CardContent className="p-6">
                      <h3 className="text-xl font-bold mb-6">Contributor Process Flow</h3>
                      <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0 md:space-x-4">
                        <div className="text-center">
                          <div className="w-16 h-16 bg-[#0056B3] rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">1</div>
                          <p className="text-sm">Design Proposal</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-[#0056B3] rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">2</div>
                          <p className="text-sm">Review Process</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-[#00B140] rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">3</div>
                          <p className="text-sm">Implementation</p>
                        </div>
                        <div className="text-center">
                          <div className="w-16 h-16 bg-[#00B140] rounded-full flex items-center justify-center text-white font-bold text-xl mb-2">4</div>
                          <p className="text-sm">Documentation</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </TabsContent>
              </Tabs>
            </motion.div>
          </div>
        </section>

        {/* Feature Revamps */}
        <section className="py-20 bg-muted/30">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Feature Transformations
            </motion.h2>
            <div className="space-y-12">
              {beforeAfterFeatures.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  <Card className="overflow-hidden">
                    <CardContent className="p-8">
                      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
                        <div>
                          <h3 className="text-2xl font-bold mb-4 text-[#0056B3]">{feature.title}</h3>
                          <div className="space-y-4">
                            <div>
                              <Badge variant="destructive" className="mb-2">Before</Badge>
                              <p className="text-muted-foreground">{feature.before}</p>
                            </div>
                            <div>
                              <Badge className="mb-2 bg-[#00B140]">After</Badge>
                              <p>{feature.after}</p>
                            </div>
                            <div className="bg-gradient-to-r from-[#0056B3]/10 to-[#00B140]/10 p-4 rounded-lg">
                              <p className="font-semibold text-[#0056B3]">Impact: {feature.improvement}</p>
                            </div>
                          </div>
                        </div>
                        <div className="relative">
                          <motion.div 
                            className="aspect-video bg-gradient-to-br from-[#0056B3]/10 to-[#00B140]/10 rounded-lg flex items-center justify-center"
                            whileHover={{ scale: 1.05 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="text-center">
                              <div className="w-16 h-16 bg-[#0056B3] rounded-full flex items-center justify-center text-white font-bold text-xl mb-4 mx-auto">
                                {index + 1}
                              </div>
                              <p className="text-sm text-muted-foreground">Interactive Demo</p>
                            </div>
                          </motion.div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Results Showcase */}
        <section className="py-20 bg-background">
          <div className="container mx-auto px-4 md:px-6">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold text-center mb-12"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Measurable Impact
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {[
                { value: counters.downtime, suffix: "%", label: "Reduced Downtime", color: "#00B140" },
                { value: counters.dau, suffix: "%", label: "Increased DAU", color: "#0056B3" },
                { value: "35", suffix: "%", label: "Faster Development", color: "#00B140" },
                { value: "2023", suffix: "", label: "Innovation Award", color: "#0056B3" }
              ].map((metric, index) => (
                <motion.div
                  key={metric.label}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Card className="text-center p-6 hover:shadow-xl transition-all duration-300">
                    <motion.div 
                      className="text-4xl font-bold mb-2"
                      style={{ color: metric.color }}
                      animate={{ 
                        scale: [1, 1.05, 1],
                        opacity: [0.8, 1, 0.8]
                      }}
                      transition={{ 
                        duration: 2,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    >
                      {metric.value}{metric.suffix}
                    </motion.div>
                    <p className="text-sm text-muted-foreground">{metric.label}</p>
                  </Card>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <Button 
                className="bg-gradient-to-r from-[#0056B3] to-[#00B140] hover:from-[#0056B3]/90 hover:to-[#00B140]/90 text-white shadow-lg hover:shadow-xl transition-all duration-300"
                size="lg"
              >
                <Download className="w-5 h-5 mr-2" />
                View Design System PDF
              </Button>
            </motion.div>
          </div>
        </section>

        <Footer />
      </motion.div>
    </motion.div>
  );
};

export default WelbiltKitchenConnect;

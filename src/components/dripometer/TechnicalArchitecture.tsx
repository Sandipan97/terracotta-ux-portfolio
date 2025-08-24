import { motion } from 'framer-motion';
import { Cpu, Wifi, Battery, Shield, Zap, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { EditableImage } from '@/components/ui/editable-image';
const TechnicalArchitecture = () => {
  const technicalSpecs = [{
    icon: Cpu,
    title: "Microcontroller",
    description: "ESP32 with dual-core processing",
    details: ["240MHz processor", "Wi-Fi & Bluetooth enabled", "Low power consumption"],
    color: "bg-blue-500"
  }, {
    icon: Wifi,
    title: "Connectivity",
    description: "Multi-protocol wireless communication",
    details: ["Wi-Fi 802.11 b/g/n", "Bluetooth 4.2 LE", "Mesh networking support"],
    color: "bg-green-500"
  }, {
    icon: Battery,
    title: "Power Management",
    description: "Extended battery life with efficiency",
    details: ["48+ hour battery life", "Sleep mode optimization", "USB-C charging"],
    color: "bg-yellow-500"
  }, {
    icon: Shield,
    title: "Security",
    description: "Medical-grade data protection",
    details: ["AES-256 encryption", "Secure boot process", "HIPAA compliance"],
    color: "bg-red-500"
  }, {
    icon: Zap,
    title: "Sensors",
    description: "High-precision monitoring sensors",
    details: ["Optical flow detection", "Pressure sensors", "Temperature monitoring"],
    color: "bg-purple-500"
  }, {
    icon: Database,
    title: "Data Storage",
    description: "Local and cloud data management",
    details: ["8GB local storage", "Real-time sync", "Offline capability"],
    color: "bg-indigo-500"
  }];
  const systemDiagram = {
    image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80",
    alt: "Dripometer system architecture diagram showing data flow"
  };
  return <section className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div className="text-center mb-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-emerald-900 dark:text-emerald-100">
            Technical Architecture
          </h2>
          <p className="text-lg text-emerald-700 dark:text-emerald-300 max-w-3xl mx-auto">
            Robust, scalable system design built for healthcare reliability and security
          </p>
        </motion.div>

        {/* System Overview Diagram */}
        

        {/* Technical Specifications Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {technicalSpecs.map((spec, index) => <motion.div key={index} initial={{
          opacity: 0,
          y: 50
        }} whileInView={{
          opacity: 1,
          y: 0
        }} transition={{
          duration: 0.6,
          delay: index * 0.1
        }} viewport={{
          once: true
        }}>
              <Card className="h-full hover:shadow-lg transition-all duration-300 border-emerald-200 dark:border-emerald-800 group">
                <CardHeader>
                  <div className="flex items-center mb-4">
                    <div className={`${spec.color} p-3 rounded-lg mr-4 group-hover:scale-110 transition-transform`}>
                      <spec.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <CardTitle className="text-emerald-900 dark:text-emerald-100">
                        {spec.title}
                      </CardTitle>
                      <p className="text-sm text-emerald-700 dark:text-emerald-300">
                        {spec.description}
                      </p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {spec.details.map((detail, i) => <div key={i} className="flex items-center">
                        <div className="w-2 h-2 bg-emerald-500 rounded-full mr-3" />
                        <span className="text-sm text-emerald-800 dark:text-emerald-200">
                          {detail}
                        </span>
                      </div>)}
                  </div>
                </CardContent>
              </Card>
            </motion.div>)}
        </div>

        {/* Performance Metrics */}
        <motion.div className="mt-16" initial={{
        opacity: 0,
        y: 30
      }} whileInView={{
        opacity: 1,
        y: 0
      }} transition={{
        duration: 0.6
      }} viewport={{
        once: true
      }}>
          <h3 className="text-2xl font-bold text-center mb-8 text-emerald-900 dark:text-emerald-100">
            Performance Benchmarks
          </h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[{
            metric: "99.7%",
            label: "Accuracy Rate",
            color: "emerald"
          }, {
            metric: "48h",
            label: "Battery Life",
            color: "blue"
          }, {
            metric: "<500ms",
            label: "Response Time",
            color: "purple"
          }, {
            metric: "256-bit",
            label: "Encryption",
            color: "red"
          }].map((item, index) => <motion.div key={index} className="text-center p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl" initial={{
            opacity: 0,
            scale: 0.8
          }} whileInView={{
            opacity: 1,
            scale: 1
          }} transition={{
            duration: 0.5,
            delay: index * 0.1
          }} viewport={{
            once: true
          }}>
                <div className="text-3xl font-bold text-emerald-600 dark:text-emerald-400 mb-2">
                  {item.metric}
                </div>
                <div className="text-sm text-emerald-700 dark:text-emerald-300">
                  {item.label}
                </div>
              </motion.div>)}
          </div>
        </motion.div>
      </div>
    </section>;
};
export default TechnicalArchitecture;
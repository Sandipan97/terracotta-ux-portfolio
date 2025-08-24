import { motion } from 'framer-motion';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { EditableImage } from '@/components/ui/editable-image';
import { Search, AlertTriangle, CheckCircle } from 'lucide-react';

const KeyFindings = () => {
  const findings = [
    {
      title: "Manual Monitoring = Errors + No Audit Trail",
      implication: "Need for a central console to monitor",
      imageSrc: "/lovable-uploads/60ae458b-c4ba-4d01-b5be-9eb33e273157.png",
      imageAlt: "Nurses manually monitoring IV drips in medical ward showing communication challenges",
      color: "red",
      priority: "high"
    },
    {
      title: "Occupying Both Hangers of the Pole is Bad",
      implication: "Must only occupy one hanger or none",
      imageSrc: "/lovable-uploads/2f3ecb79-bba5-4335-a1ad-f73cb8c55b36.png",
      imageAlt: "Physical dripometer device setup showing compact pole-mounted monitoring unit",
      color: "orange",
      priority: "high"
    },
    {
      title: "Alarms at bedside cause Panic in Patients",
      implication: "Need central system to show alarms",
      imageSrc: "/lovable-uploads/73b1bb72-5288-4ced-98a6-27e351d283ab.png",
      imageAlt: "Hospital ward scene showing patients distressed by beeping alarms from medical equipment",
      color: "yellow",
      priority: "medium"
    },
    {
      title: "High Device Theft Risk",
      implication: "Must be locked to pole somehow",
      imageSrc: "/lovable-uploads/5ae3858c-c78d-43cc-9b9c-af28dbfd9094.png",
      imageAlt: "Security concern illustration showing potential theft of medical monitoring devices",
      color: "purple",
      priority: "high"
    },
    {
      title: "Nurses prefer \"plug-n-play\" interfaces",
      implication: "Device must be easy to use",
      imageSrc: "/lovable-uploads/0f0a9044-a21a-4094-9bbc-7d404d04371b.png",
      imageAlt: "Simple plug-and-play device interface design for easy nurse operation",
      color: "green",
      priority: "medium"
    }
  ];

  const getColorClasses = (color: string, priority: string) => {
    const baseClasses = {
      red: "from-red-50 to-red-100/50 border-red-200/50 text-red-800",
      orange: "from-orange-50 to-orange-100/50 border-orange-200/50 text-orange-800",
      yellow: "from-yellow-50 to-yellow-100/50 border-yellow-200/50 text-yellow-800",
      purple: "from-purple-50 to-purple-100/50 border-purple-200/50 text-purple-800",
      green: "from-green-50 to-green-100/50 border-green-200/50 text-green-800"
    };

    const darkClasses = {
      red: "dark:from-red-950/30 dark:to-red-900/20 dark:border-red-800/50 dark:text-red-200",
      orange: "dark:from-orange-950/30 dark:to-orange-900/20 dark:border-orange-800/50 dark:text-orange-200",
      yellow: "dark:from-yellow-950/30 dark:to-yellow-900/20 dark:border-yellow-800/50 dark:text-yellow-200",
      purple: "dark:from-purple-950/30 dark:to-purple-900/20 dark:border-purple-800/50 dark:text-purple-200",
      green: "dark:from-green-950/30 dark:to-green-900/20 dark:border-green-800/50 dark:text-green-200"
    };

    const priorityRing = priority === 'high' ? 'ring-2 ring-red-300/50 dark:ring-red-600/30' : '';

    return `bg-gradient-to-br ${baseClasses[color as keyof typeof baseClasses]} ${darkClasses[color as keyof typeof darkClasses]} ${priorityRing}`;
  };

  return (
    <section id="findings" className="py-20 bg-gradient-to-br from-gray-50/50 via-white to-blue-50/30 dark:from-gray-900 dark:via-gray-900/95 dark:to-blue-950/20">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <Accordion type="single" collapsible defaultValue="key-findings" className="w-full">
            <AccordionItem 
              value="key-findings" 
              className="border-2 border-blue-200/60 dark:border-blue-800/60 rounded-3xl px-8 py-2 bg-gradient-to-r from-blue-50/80 via-white to-teal-50/80 dark:from-blue-900/20 dark:via-gray-900/50 dark:to-teal-900/20 shadow-xl backdrop-blur-sm hover:shadow-2xl transition-all duration-300"
            >
              <AccordionTrigger className="text-2xl font-bold text-foreground hover:text-blue-600 dark:hover:text-blue-400 py-8 group">
                <div className="flex items-center gap-4">
                  <div className="bg-gradient-to-br from-blue-500 to-blue-600 p-3 rounded-xl shadow-lg group-hover:shadow-blue-500/25 transition-all duration-300">
                    <Search className="w-6 h-6 text-white" />
                  </div>
                  <span>KEY FINDINGS</span>
                  <div className="bg-red-100 dark:bg-red-900/30 px-3 py-1 rounded-full">
                    <span className="text-red-700 dark:text-red-300 text-sm font-medium">with visual evidence</span>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="pb-8">
                <div className="grid gap-8">
                  {findings.map((finding, index) => (
                    <motion.div
                      key={index}
                      className={`${getColorClasses(finding.color, finding.priority)} rounded-2xl p-6 border-2 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1`}
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className="grid md:grid-cols-3 gap-6 items-start">
                        <div className="md:col-span-2 space-y-4">
                          <div className="flex items-start gap-3">
                            <div className="flex-shrink-0">
                              {finding.priority === 'high' ? (
                                <AlertTriangle className="w-6 h-6 text-red-600 dark:text-red-400" />
                              ) : (
                                <CheckCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                              )}
                            </div>
                            <div>
                              <h4 className="font-bold text-lg leading-tight">
                                <span className="bg-white/60 dark:bg-gray-800/60 px-2 py-1 rounded-lg mr-2 text-sm font-mono">
                                  #{index + 1}
                                </span>
                                {finding.title}
                              </h4>
                              {finding.priority === 'high' && (
                                <div className="inline-flex items-center gap-1 mt-2 bg-red-100 dark:bg-red-900/40 px-2 py-1 rounded-full">
                                  <AlertTriangle className="w-3 h-3 text-red-600 dark:text-red-400" />
                                  <span className="text-xs font-medium text-red-700 dark:text-red-300">HIGH PRIORITY</span>
                                </div>
                              )}
                            </div>
                          </div>
                          
                          <div className="bg-white/60 dark:bg-gray-800/60 rounded-xl p-4 border-l-4 border-emerald-500">
                            <p className="text-sm flex items-start gap-2">
                              <span className="text-emerald-600 dark:text-emerald-400 font-bold text-lg">→</span>
                              <span className="italic text-gray-700 dark:text-gray-300">
                                <strong>Implication:</strong> {finding.implication}
                              </span>
                            </p>
                          </div>
                        </div>

                        <div className="md:col-span-1">
                          <div className="relative group overflow-hidden rounded-xl shadow-lg bg-white/80 dark:bg-gray-800/80 p-2">
                            <EditableImage
                              src={finding.imageSrc}
                              alt={finding.imageAlt}
                              className="w-full h-auto object-contain max-h-64 transition-transform duration-500 group-hover:scale-105"
                              fallbackSrc="/placeholder.svg"
                              editableKey={`dripometer-finding-${index}`}
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            <div className="absolute top-2 right-2">
                              <div className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm rounded-full p-2 shadow-lg">
                                <Search className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  ))}
                  
                  <motion.div 
                    className="bg-gradient-to-r from-emerald-100/90 to-teal-100/90 dark:from-emerald-900/40 dark:to-teal-900/40 rounded-2xl p-6 border-l-4 border-emerald-500 shadow-lg mt-6"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center gap-3">
                      <div className="bg-emerald-600 p-2 rounded-lg">
                        <CheckCircle className="w-5 h-5 text-white" />
                      </div>
                      <p className="text-gray-700 dark:text-gray-200 text-lg">
                        <strong className="text-emerald-700 dark:text-emerald-300">Next Step:</strong> 
                        <span className="ml-2">See </span>
                        <a href="#solutions" className="text-emerald-600 dark:text-emerald-400 hover:underline font-semibold underline decoration-2 underline-offset-2">
                          Design Solutions
                        </a>
                        <span> for how these insights shaped our approach.</span>
                      </p>
                    </div>
                  </motion.div>
                </div>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
};

export default KeyFindings;


import { Button } from './ui/button';
import { Link } from 'react-router-dom';

const AboutPreview = () => {
  const skills = [
    { name: "User Research", level: 95 },
    { name: "Interaction Design", level: 90 },
    { name: "Prototyping", level: 85 },
    { name: "Design Systems", level: 88 },
    { name: "AR/VR Design", level: 80 },
    { name: "AI in Design", level: 83 }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-bengali-dark mb-6">
              About Me
            </h2>
            <p className="text-bengali-dark/80 mb-4">
              As a Senior UX Designer and Researcher with 5 years of experience and a Master's in Design from IISc, I specialize in crafting intuitive, research-backed experiences that solve complex problems.
            </p>
            <p className="text-bengali-dark/80 mb-6">
              My expertise spans UX research, design systems, product design, biomedical design, B2B solutions, augmented reality, and AI-driven design. I'm passionate about creating meaningful interactions that positively impact users' lives.
            </p>
            <Link to="/about">
              <Button className="bg-bengali-terracotta hover:bg-bengali-terracotta/90 text-white">
                Learn More About Me
              </Button>
            </Link>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h3 className="font-display text-2xl font-semibold text-bengali-dark mb-6">
              My Skills
            </h3>
            <div className="space-y-6">
              {skills.map((skill) => (
                <div key={skill.name}>
                  <div className="flex justify-between mb-2">
                    <span className="font-medium text-bengali-dark">{skill.name}</span>
                    <span className="text-bengali-dark/70">{skill.level}%</span>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-bengali-mustard rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutPreview;

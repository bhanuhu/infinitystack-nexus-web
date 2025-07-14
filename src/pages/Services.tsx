
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Code, Cloud, Cpu, Shield } from "lucide-react";
import { Link } from "react-router-dom";

const Services = () => {
  const services = [
    {
      icon: Code,
      title: "Neural Software Development",
      description: "We engineer adaptive software systems that learn and evolve. Our cybernetic approach combines human creativity with machine precision to create applications that think beyond traditional programming paradigms.",
      technologies: ["React", "Node.js", "Python", "TensorFlow", "PostgreSQL", "Docker"],
      features: [
        "Adaptive Web Applications",
        "AI-Enhanced Mobile Apps",
        "Neural API Development",
        "Quantum Database Design",
        "Automated Testing Systems",
        "Continuous Evolution Support"
      ]
    },
    {
      icon: Cloud,
      title: "Cyber-Cloud Solutions",
      description: "Transform your infrastructure with our neural network-inspired cloud architecture. We create self-healing, auto-scaling systems that adapt to your business needs with machine-like efficiency.",
      technologies: ["AWS", "Azure", "Kubernetes", "Terraform", "Neural Networks", "Quantum Computing"],
      features: [
        "Neural Migration Strategies",
        "Self-Healing Infrastructure",
        "Adaptive Container Systems",
        "Quantum-Scale Solutions",
        "Predictive Recovery Systems",
        "Real-time Neural Monitoring"
      ]
    },
    {
      icon: Cpu,
      title: "AI & Cybernetic Systems",
      description: "Harness the power of artificial neural networks and machine learning. We build intelligent systems that process data like the human brain but with the speed and precision of advanced computers.",
      technologies: ["TensorFlow", "PyTorch", "Neural Networks", "Computer Vision", "NLP", "Quantum ML"],
      features: [
        "Deep Learning Models",
        "Predictive Neural Networks",
        "Computer Vision Systems",
        "Natural Language Processing",
        "Quantum Data Processing",
        "Cybernetic Decision Engines"
      ]
    },
    {
      icon: Shield,
      title: "Cyber Security Systems",
      description: "Protect your digital assets with our advanced cybernetic security protocols. Our AI-powered defense systems learn from threats and adapt to provide comprehensive protection.",
      technologies: ["Cybersecurity", "AI Defense", "Neural Firewalls", "Quantum Encryption", "Blockchain", "Biometrics"],
      features: [
        "Neural Threat Detection",
        "Adaptive Security Protocols",
        "Quantum Encryption Systems",
        "Biometric Authentication",
        "AI-Powered Monitoring",
        "Autonomous Response Systems"
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-20 sm:pt-24 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
            Cybernetic Capabilities
          </h1>
          <p className="text-lg sm:text-xl text-gray-300 max-w-3xl mx-auto">
            Advanced technology solutions that merge human intelligence with machine precision. 
            Our neural-inspired systems evolve, adapt, and optimize beyond conventional limits.
          </p>
        </div>
      </section>

      {/* Services Sections */}
      <section className="py-12 sm:py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto space-y-16 sm:space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-8 sm:gap-12`}>
              <div className="flex-1 w-full">
                <Card className="bg-slate-900/50 border-green-500/20 h-full">
                  <CardHeader>
                    <div className="flex items-center gap-4 mb-4">
                      <service.icon className="w-10 sm:w-12 h-10 sm:h-12 text-green-400" />
                      <CardTitle className="text-xl sm:text-2xl text-green-300">{service.title}</CardTitle>
                    </div>
                    <CardDescription className="text-gray-300 text-base sm:text-lg leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <div>
                      <h4 className="text-lg font-semibold text-green-300 mb-3">Neural Features</h4>
                      <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                        {service.features.map((feature, idx) => (
                          <li key={idx} className="text-gray-400 flex items-center text-sm sm:text-base">
                            <span className="w-2 h-2 bg-green-400 rounded-full mr-3 flex-shrink-0"></span>
                            {feature}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-green-300 mb-3">Core Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {service.technologies.map((tech, idx) => (
                          <span key={idx} className="px-3 py-1 bg-green-900/30 text-green-300 text-xs sm:text-sm rounded-full border border-green-500/30">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <Link to="/contact">
                      <Button className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white text-sm sm:text-base">
                        Initialize System
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-900/50 to-cyan-900/50 rounded-2xl p-8 sm:p-12 border border-green-500/20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-green-300">
              Ready to Enhance Your Systems?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Let's integrate cybernetic intelligence into your digital infrastructure.
            </p>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                Begin Integration
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;

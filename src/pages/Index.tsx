
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Code, Cloud, Zap, Shield, Users, Rocket, Cpu, Eye } from "lucide-react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";

const Index = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const services = [
    {
      title: "Software Development",
      description: "Cutting-edge applications powered by advanced algorithms",
      icon: Code,
      href: "/services"
    },
    {
      title: "Cloud Solutions",
      description: "Neural network-inspired cloud infrastructure",
      icon: Cloud,
      href: "/services"
    },
    {
      title: "AI & Cybernetics",
      description: "Machine learning systems with human-like intelligence",
      icon: Cpu,
      href: "/services"
    },
    {
      title: "Security Systems",
      description: "Advanced protection protocols for digital environments",
      icon: Shield,
      href: "/services"
    }
  ];

  const projects = [
    {
      title: "Neural Commerce Platform",
      description: "AI-powered marketplace with predictive user behavior",
      image: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=800&h=600&fit=crop"
    },
    {
      title: "Quantum Analytics Dashboard",
      description: "Real-time data processing with quantum-inspired algorithms",
      image: "https://images.unsplash.com/photo-1551033406-611cf9a28f67?w=800&h=600&fit=crop"
    },
    {
      title: "Cyber Defense Network",
      description: "Autonomous security system with self-learning capabilities",
      image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=800&h=600&fit=crop"
    }
  ];

  const testimonials = [
    {
      quote: "DevCyborg transformed our digital infrastructure beyond recognition.",
      author: "Dr. Sarah Chen",
      role: "CTO, NeuralTech"
    },
    {
      quote: "Their cybernetic approach to problem-solving is revolutionary.",
      author: "Marcus Rodriguez",
      role: "CEO, QuantumFlow"
    },
    {
      quote: "Exceptional results delivered with machine-like precision.",
      author: "Emily Nakamura",
      role: "Director, CyberAI"
    }
  ];

  const coreValues = [
    {
      icon: Cpu,
      title: "Neural Innovation",
      description: "Brain-inspired computing solutions"
    },
    {
      icon: Eye,
      title: "Digital Vision",
      description: "Seeing beyond current limitations"
    },
    {
      icon: Users,
      title: "Human-AI Synergy",
      description: "Merging human creativity with AI efficiency"
    },
    {
      icon: Zap,
      title: "Quantum Speed",
      description: "Processing at the speed of thought"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-4xl mx-auto z-10">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-bold mb-6 bg-gradient-to-r from-green-400 via-cyan-500 to-purple-600 bg-clip-text text-transparent">
              DevCyborg
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 text-green-100 max-w-3xl mx-auto">
              Where Human Intelligence Meets Machine Precision
            </p>
            <Link to="/services">
              <Button className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                Explore Our Tech
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About DevCyborg */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-green-300">
              About DevCyborg
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto">
              We are pioneers in the fusion of human creativity and artificial intelligence. Our cybernetic approach 
              to software development creates systems that think, adapt, and evolve beyond conventional limitations.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="bg-slate-900/50 border-green-500/20 hover:border-green-400/50 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <value.icon className="w-10 sm:w-12 h-10 sm:h-12 mx-auto mb-4 text-green-400 group-hover:text-green-300 transition-colors" />
                  <CardTitle className="text-green-300 text-lg sm:text-xl">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center text-sm sm:text-base">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-green-300">
              Our Capabilities
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Advanced technology solutions engineered for the digital future
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.href} className="group">
                <Card className="bg-slate-900/50 border-green-500/20 hover:border-green-400/50 transition-all duration-300 h-full group-hover:transform group-hover:scale-105">
                  <CardHeader>
                    <service.icon className="w-10 sm:w-12 h-10 sm:h-12 mb-4 text-green-400 group-hover:text-green-300 transition-colors" />
                    <CardTitle className="text-green-300 group-hover:text-green-200 text-lg sm:text-xl">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400 text-sm sm:text-base">
                      {service.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-green-300">
              Neural Networks in Action
            </h2>
            <p className="text-base sm:text-lg text-gray-300">
              Showcasing our cybernetic innovations and digital transformations
            </p>
          </div>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-slate-900/50 border-green-500/20">
                    <CardContent className="p-0">
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-4 sm:p-6">
                        <h3 className="text-lg sm:text-xl font-bold text-green-300 mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4 text-sm sm:text-base">{project.description}</p>
                        <Link to="/projects">
                          <Button variant="outline" className="border-green-500 text-green-400 hover:bg-green-500 hover:text-white text-sm sm:text-base">
                            View Project
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-green-400 border-green-500 hidden sm:flex" />
            <CarouselNext className="text-green-400 border-green-500 hidden sm:flex" />
          </Carousel>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-green-300">
              System Feedback
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-900/50 border-green-500/20">
                <CardContent className="p-4 sm:p-6">
                  <p className="text-gray-300 mb-4 italic text-sm sm:text-base">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-green-300 font-semibold text-sm sm:text-base">{testimonial.author}</p>
                    <p className="text-gray-400 text-xs sm:text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-green-900/50 to-cyan-900/50 rounded-2xl p-8 sm:p-12 border border-green-500/20">
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-green-300">
              Ready to Upgrade Your Systems?
            </h2>
            <p className="text-lg sm:text-xl text-gray-300 mb-8">
              Let's merge human vision with cybernetic precision to build your digital future.
            </p>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-green-500 to-cyan-600 hover:from-green-600 hover:to-cyan-700 text-white px-6 sm:px-8 py-3 text-base sm:text-lg rounded-full shadow-lg hover:shadow-green-500/25 transition-all duration-300">
                Initialize Contact
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;

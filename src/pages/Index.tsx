
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { Code, Cloud, Zap, Shield, Users, Rocket } from "lucide-react";
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
      description: "Custom applications built with cutting-edge technologies",
      icon: Code,
      href: "/services"
    },
    {
      title: "Cloud Solutions",
      description: "Scalable cloud infrastructure and migration services",
      icon: Cloud,
      href: "/services"
    },
    {
      title: "AI & Data Analytics",
      description: "Intelligent solutions powered by machine learning",
      icon: Zap,
      href: "/services"
    },
    {
      title: "IT Consulting",
      description: "Strategic technology guidance for your business",
      icon: Shield,
      href: "/services"
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Next-generation online marketplace with AI recommendations",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop"
    },
    {
      title: "Financial Dashboard",
      description: "Real-time analytics platform for financial institutions",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop"
    },
    {
      title: "Healthcare System",
      description: "Cloud-based patient management and telemedicine platform",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop"
    }
  ];

  const testimonials = [
    {
      quote: "InfinityStack transformed our business with their innovative solutions.",
      author: "Sarah Chen",
      role: "CTO, TechCorp"
    },
    {
      quote: "The team's expertise in cloud migration was exceptional.",
      author: "Michael Rodriguez",
      role: "CEO, DataFlow"
    },
    {
      quote: "Outstanding results delivered on time and within budget.",
      author: "Emily Johnson",
      role: "Director, FinanceAI"
    }
  ];

  const coreValues = [
    {
      icon: Rocket,
      title: "Innovation",
      description: "Pushing boundaries with cutting-edge technology"
    },
    {
      icon: Shield,
      title: "Reliability",
      description: "Robust solutions you can depend on"
    },
    {
      icon: Users,
      title: "Scalability",
      description: "Growing with your business needs"
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Lightning-fast, optimized solutions"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-4xl mx-auto z-10">
          <div className={`transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <h1 className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
              InfinityStack
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-cyan-100">
              Infinite Solutions. Infinite Possibilities.
            </p>
            <Link to="/services">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                Explore Our Services
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* About InfinityStack */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-300">
              About InfinityStack
            </h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              We are a cutting-edge technology company dedicated to transforming businesses through innovative software solutions, 
              cloud technologies, and AI-powered systems. Our mission is to provide infinite possibilities for your digital transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {coreValues.map((value, index) => (
              <Card key={index} className="bg-slate-900/50 border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group">
                <CardHeader className="text-center">
                  <value.icon className="w-12 h-12 mx-auto mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                  <CardTitle className="text-cyan-300">{value.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-gray-400 text-center">
                    {value.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-300">
              Our Services
            </h2>
            <p className="text-lg text-gray-300">
              Comprehensive technology solutions tailored to your needs
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <Link key={index} to={service.href} className="group">
                <Card className="bg-slate-900/50 border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 h-full group-hover:transform group-hover:scale-105">
                  <CardHeader>
                    <service.icon className="w-12 h-12 mb-4 text-cyan-400 group-hover:text-cyan-300 transition-colors" />
                    <CardTitle className="text-cyan-300 group-hover:text-cyan-200">{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-400">
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
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-300">
              Featured Projects
            </h2>
            <p className="text-lg text-gray-300">
              Showcasing our latest innovations and successful implementations
            </p>
          </div>
          
          <Carousel className="w-full max-w-4xl mx-auto">
            <CarouselContent>
              {projects.map((project, index) => (
                <CarouselItem key={index}>
                  <Card className="bg-slate-900/50 border-cyan-500/20">
                    <CardContent className="p-0">
                      <div className="aspect-video overflow-hidden rounded-t-lg">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="p-6">
                        <h3 className="text-xl font-bold text-cyan-300 mb-2">{project.title}</h3>
                        <p className="text-gray-400 mb-4">{project.description}</p>
                        <Link to="/projects">
                          <Button variant="outline" className="border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white">
                            View Project
                          </Button>
                        </Link>
                      </div>
                    </CardContent>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="text-cyan-400 border-cyan-500" />
            <CarouselNext className="text-cyan-400 border-cyan-500" />
          </Carousel>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-cyan-300">
              What Our Clients Say
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-900/50 border-cyan-500/20">
                <CardContent className="p-6">
                  <p className="text-gray-300 mb-4 italic">"{testimonial.quote}"</p>
                  <div>
                    <p className="text-cyan-300 font-semibold">{testimonial.author}</p>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-2xl p-12 border border-cyan-500/20">
            <h2 className="text-4xl font-bold mb-6 text-cyan-300">
              Ready to Build the Future?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's discuss how we can transform your business with innovative technology solutions.
            </p>
            <Link to="/contact">
              <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                Contact Us
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

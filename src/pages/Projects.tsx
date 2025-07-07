
import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import ParticleBackground from "@/components/ParticleBackground";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Web", "Mobile", "AI", "Cloud"];

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description: "Next-generation online marketplace with AI-powered product recommendations and real-time inventory management.",
      image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=800&h=600&fit=crop",
      category: "Web",
      technologies: ["React", "Node.js", "PostgreSQL", "Redis", "Stripe API"],
      client: "RetailCorp",
      results: "300% increase in conversion rates, 50% reduction in cart abandonment"
    },
    {
      id: 2,
      title: "Financial Analytics Dashboard",
      description: "Real-time financial data visualization platform for investment firms with advanced risk assessment tools.",
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=800&h=600&fit=crop",
      category: "Web",
      technologies: ["React", "D3.js", "Python", "Apache Kafka", "MongoDB"],
      client: "InvestTech Solutions",
      results: "Reduced analysis time by 80%, improved decision-making accuracy by 45%"
    },
    {
      id: 3,
      title: "Healthcare Management System",
      description: "Cloud-based patient management platform with telemedicine capabilities and AI-powered diagnostics.",
      image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=800&h=600&fit=crop",
      category: "Cloud",
      technologies: ["React Native", "AWS", "TensorFlow", "FHIR", "WebRTC"],
      client: "MedCare Group",
      results: "Improved patient satisfaction by 60%, reduced administrative overhead by 40%"
    },
    {
      id: 4,
      title: "Supply Chain Optimization",
      description: "AI-powered logistics platform that optimizes delivery routes and predicts demand patterns.",
      image: "https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=800&h=600&fit=crop",
      category: "AI",
      technologies: ["Python", "TensorFlow", "Apache Spark", "Kubernetes", "Tableau"],
      client: "LogiFlow International",
      results: "30% reduction in delivery costs, 95% improvement in delivery time accuracy"
    },
    {
      id: 5,
      title: "Mobile Banking App",
      description: "Secure mobile banking application with biometric authentication and real-time fraud detection.",
      image: "https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=800&h=600&fit=crop",
      category: "Mobile",
      technologies: ["React Native", "Node.js", "OAuth", "Blockchain", "Machine Learning"],
      client: "SecureBank",
      results: "2M+ active users, 99.9% uptime, zero security breaches"
    },
    {
      id: 6,
      title: "Smart City IoT Platform",
      description: "Comprehensive IoT platform for smart city management including traffic, energy, and waste management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
      category: "Cloud",
      technologies: ["AWS IoT", "Microservices", "Kubernetes", "Elasticsearch", "Grafana"],
      client: "CityTech Municipal",
      results: "25% reduction in energy consumption, 40% improvement in traffic flow"
    }
  ];

  const filteredProjects = selectedCategory === "All" 
    ? projects 
    : projects.filter(project => project.category === selectedCategory);

  return (
    <div className="min-h-screen bg-slate-950 text-white relative overflow-x-hidden">
      <ParticleBackground />
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
            Our Work Speaks for Itself
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our portfolio of successful projects that have transformed businesses across various industries. 
            Each project showcases our commitment to innovation, quality, and results.
          </p>
        </div>
      </section>

      {/* Filter Categories */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                onClick={() => setSelectedCategory(category)}
                className={`${
                  selectedCategory === category
                    ? "bg-gradient-to-r from-cyan-500 to-blue-600 text-white"
                    : "border-cyan-500 text-cyan-400 hover:bg-cyan-500 hover:text-white"
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-8 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <Card key={project.id} className="bg-slate-900/50 border-cyan-500/20 hover:border-cyan-400/50 transition-all duration-300 group overflow-hidden">
                <div className="aspect-video overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <Badge className="bg-cyan-900/30 text-cyan-300 border-cyan-500/30">
                      {project.category}
                    </Badge>
                  </div>
                  <CardTitle className="text-cyan-300 group-hover:text-cyan-200 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-gray-400">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-300 mb-2">Technologies</h4>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech, idx) => (
                        <span key={idx} className="px-2 py-1 bg-cyan-900/20 text-cyan-400 text-xs rounded">
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-cyan-900/20 text-cyan-400 text-xs rounded">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-300 mb-1">Client</h4>
                    <p className="text-gray-400 text-sm">{project.client}</p>
                  </div>
                  <div>
                    <h4 className="text-sm font-semibold text-cyan-300 mb-1">Results</h4>
                    <p className="text-gray-400 text-sm">{project.results}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <div className="bg-gradient-to-r from-cyan-900/50 to-blue-900/50 rounded-2xl p-12 border border-cyan-500/20">
            <h2 className="text-4xl font-bold mb-6 text-cyan-300">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Let's create something amazing together. Contact us to discuss your next project.
            </p>
            <Button className="bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white px-8 py-3 text-lg rounded-full shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
              Get Started
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Projects;
